# Project 009 · 多动作扩展实测

这组实验回答 Revision 6 的问题：保存已有 idle 证明后，能否用一个更适合 Rig 的输入，把角色扩展为可在游戏状态机中切换的 run 与 pulse-cast 动作。

## 结论

**CONDITIONAL / 可用于小比例游戏演示，不批准为生产级 locomotion。**

- motion-ready master 为真实 RGBA，256×384，手臂与身体、双腿与鞋子具有独立轮廓；
- Sprite Studio 仓库附带的确定性 `sprite_rig.py` 输出 run-v2 四帧（10 FPS loop）和 pulse-cast-v1 五帧（12 FPS non-loop）；
- 9 / 9 帧的文件哈希与解码像素哈希均唯一；
- 每帧至少 93.962% 的可见像素保持母版精确 RGBA，其余主要来自旋转后抗锯齿边缘混合，因此不宣称 100% 调色板恒等；
- run 仍旋转宽裤腿区域，没有经过完整髋—膝—踝骨链验证；pulse-cast 适合当前关卡中的小比例动作反馈。

## 来源与职责

```text
Project 003 角色身份锚点
→ 内置图像编辑：准备 motion-ready A-pose
→ Alpha 门禁：generated-v1 因 RGB 棋盘格拒绝
→ 背景提取：generated-v2 为真实 RGBA
→ 确定性 crop / resize：256×384 master
→ Sprite Studio bundled rig helper
→ run-v1：保留的大摆幅版本
→ run-v2：较小摆幅版本，不覆盖 v1
→ pulse-cast-v1
→ PNG 序列进入 Project 009 Canvas 状态机
```

- 图像编辑只负责准备输入，不被算作 Sprite Studio 的动作能力。
- Sprite Studio helper 负责区域选择、确定性变换、帧渲染、唯一性检查、版本所有权和 manifest。
- 游戏运行时负责 companion 跟随、何时选择 idle/run/cast、脉冲伤害、敌人和任务。

## Windows 兼容记录

固定上游 helper 在 Windows 对只读文件描述符执行 `fsync` 会返回 `Bad file descriptor`。实验工作区副本仅增加两处 `os.name != "nt"` 守卫：

1. 已复制备份文件的只读 `fsync`；
2. 已关闭写入句柄、进入哈希复核前的 staged PNG 只读 `fsync`。

POSIX 路径保持上游行为；Windows 仍执行文件关闭、字节读取、SHA-256 与原子替换。固定上游 submodule 未修改。

## 文件

- `input/lin-jian-motion-master-generated-v1.png`：被门禁拒绝的 RGB 棋盘格结果；
- `input/lin-jian-motion-master-generated-v2.png`：真实 RGBA 背景提取结果；
- `prepare_motion_master.py` / `motion-master-audit.json`：确定性输入准备与审计；
- `workspace/.sprite-studio/rigs/`：run-v1、run-v2 与 pulse-cast-v1 版本化 Rig；
- `workspace/assets/characters/`：母版和 13 张动作候选帧，其中主关卡采用 run-v2 四帧与 cast-v1 五帧；
- `multi-action-result.json`：哈希、帧差、Alpha、颜色保持率与人工批准边界；
- `evidence/`：接触表和两段 GIF。

## 复现

```powershell
python projects/sprite-maker-study/experiments/multi-action-benchmark/prepare_motion_master.py
cd projects/sprite-maker-study/experiments/multi-action-benchmark/workspace
python .sprite-studio/sprite_rig.py --check .sprite-studio/rigs/lin-jian-motion-run-v2.json
python .sprite-studio/sprite_rig.py --check .sprite-studio/rigs/lin-jian-motion-cast-v1.json
python .sprite-studio/sprite_rig.py .sprite-studio/rigs/lin-jian-motion-run-v2.json
python .sprite-studio/sprite_rig.py .sprite-studio/rigs/lin-jian-motion-cast-v1.json
python ../build_evidence.py
```

已存在的同名输出受资产所有权门禁保护；修改 Rig 后必须使用新版本名，不能覆盖旧输出。
