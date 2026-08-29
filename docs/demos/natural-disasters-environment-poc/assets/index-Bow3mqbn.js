(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,D=1027,O=1028,k=1029,A=1030,j=1031,M=1033,N=33776,P=33777,F=33778,ee=33779,te=35840,ne=35841,re=35842,ie=35843,ae=36196,I=37492,oe=37496,se=37808,ce=37809,le=37810,ue=37811,de=37812,fe=37813,pe=37814,L=37815,me=37816,R=37817,he=37818,z=37819,ge=37820,B=37821,V=36492,_e=36494,ve=36495,ye=36283,be=36284,xe=36285,Se=36286,Ce=2300,we=2301,Te=2302,Ee=2400,De=2401,Oe=2402,ke=3200,Ae=3201,je=`srgb`,Me=`srgb-linear`,Ne=`display-p3`,Pe=`display-p3-linear`,Fe=`linear`,Ie=`srgb`,Le=`rec709`,Re=7680,ze=35044,Be=35048,Ve=`300 es`,He=2e3,Ue=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},We=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ge=1234567,Ke=Math.PI/180,qe=180/Math.PI;function Je(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(We[e&255]+We[e>>8&255]+We[e>>16&255]+We[e>>24&255]+`-`+We[t&255]+We[t>>8&255]+`-`+We[t>>16&15|64]+We[t>>24&255]+`-`+We[n&63|128]+We[n>>8&255]+`-`+We[n>>16&255]+We[n>>24&255]+We[r&255]+We[r>>8&255]+We[r>>16&255]+We[r>>24&255]).toLowerCase()}function Ye(e,t,n){return Math.max(t,Math.min(n,e))}function Xe(e,t){return(e%t+t)%t}function Ze(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Qe(e,t,n){return e===t?0:(n-e)/(t-e)}function $e(e,t,n){return(1-n)*e+n*t}function et(e,t,n,r){return $e(e,t,1-Math.exp(-n*r))}function tt(e,t=1){return t-Math.abs(Xe(e,t*2)-t)}function nt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function rt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function it(e,t){return e+Math.floor(Math.random()*(t-e+1))}function at(e,t){return e+Math.random()*(t-e)}function ot(e){return e*(.5-Math.random())}function st(e){e!==void 0&&(Ge=e);let t=Ge+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ct(e){return e*Ke}function lt(e){return e*qe}function ut(e){return!(e&e-1)&&e!==0}function dt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function pt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function ht(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var gt={DEG2RAD:Ke,RAD2DEG:qe,generateUUID:Je,clamp:Ye,euclideanModulo:Xe,mapLinear:Ze,inverseLerp:Qe,lerp:$e,damp:et,pingpong:tt,smoothstep:nt,smootherstep:rt,randInt:it,randFloat:at,randFloatSpread:ot,seededRandom:st,degToRad:ct,radToDeg:lt,isPowerOfTwo:ut,ceilPowerOfTwo:dt,floorPowerOfTwo:ft,setQuaternionFromProperEuler:pt,normalize:ht,denormalize:mt},H=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},U=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_t.makeScale(e,t)),this}rotate(e){return this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new U;function vt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function yt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function bt(){let e=yt(`canvas`);return e.style.display=`block`,e}var xt={};function St(e){e in xt||(xt[e]=!0,console.warn(e))}function Ct(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function wt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Tt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Et=new U().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dt=new U().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ot={[Me]:{transfer:Fe,primaries:Le,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[je]:{transfer:Ie,primaries:Le,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[Pe]:{transfer:Fe,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(Dt),fromReference:e=>e.applyMatrix3(Et)},[Ne]:{transfer:Ie,primaries:`p3`,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(Dt),fromReference:e=>e.applyMatrix3(Et).convertLinearToSRGB()}},kt=new Set([Me,Pe]),W={enabled:!0,_workingColorSpace:Me,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!kt.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Ot[t].toReference,i=Ot[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Ot[e].primaries},getTransfer:function(e){return e===``?Fe:Ot[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Ot[t].luminanceCoefficients)}};function At(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function jt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Mt,Nt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mt===void 0&&(Mt=yt(`canvas`)),Mt.width=e.width,Mt.height=e.height;let n=Mt.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mt}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=yt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=At(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(At(t[e]/255)*255):t[e]=At(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pt=0,Ft=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pt++}),this.uuid=Je(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(It(r[t].image)):e.push(It(r[t]))}else e=It(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function It(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Nt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Lt=0,Rt=class r extends Ue{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lt++}),this.uuid=Je(),this.name=``,this.source=new Ft(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null,Rt.DEFAULT_MAPPING=300,Rt.DEFAULT_ANISOTROPY=1;var G=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zt=class extends Ue{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new G(0,0,e,t),this.scissorTest=!1,this.viewport=new G(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Rt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ft(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Bt=class extends zt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Vt=class extends Rt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ht=class extends Rt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},K=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wt.copy(this).projectOnVector(e),this.sub(Wt)}reflect(e){return this.sub(Wt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wt=new K,Gt=new Ut,Kt=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Jt):Jt.fromBufferAttribute(r,t),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Yt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Yt.copy(e.boundingBox)),Yt.applyMatrix4(e.matrixWorld),this.union(Yt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nn),rn.subVectors(this.max,nn),Xt.subVectors(e.a,nn),Zt.subVectors(e.b,nn),Qt.subVectors(e.c,nn),$t.subVectors(Zt,Xt),en.subVectors(Qt,Zt),tn.subVectors(Xt,Qt);let t=[0,-$t.z,$t.y,0,-en.z,en.y,0,-tn.z,tn.y,$t.z,0,-$t.x,en.z,0,-en.x,tn.z,0,-tn.x,-$t.y,$t.x,0,-en.y,en.x,0,-tn.y,tn.x,0];return!sn(t,Xt,Zt,Qt,rn)||(t=[1,0,0,0,1,0,0,0,1],!sn(t,Xt,Zt,Qt,rn))?!1:(an.crossVectors($t,en),t=[an.x,an.y,an.z],sn(t,Xt,Zt,Qt,rn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},qt=[new K,new K,new K,new K,new K,new K,new K,new K],Jt=new K,Yt=new Kt,Xt=new K,Zt=new K,Qt=new K,$t=new K,en=new K,tn=new K,nn=new K,rn=new K,an=new K,on=new K;function sn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){on.fromArray(e,a);let o=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),s=t.dot(on),c=n.dot(on),l=r.dot(on);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var cn=new Kt,ln=new K,un=new K,dn=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?cn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ln.subVectors(e,this.center);let t=ln.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ln,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(un.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ln.copy(e.center).add(un)),this.expandByPoint(ln.copy(e.center).sub(un))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},fn=new K,pn=new K,mn=new K,hn=new K,gn=new K,_n=new K,vn=new K,yn=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pn.copy(e).add(t).multiplyScalar(.5),mn.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(pn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(mn),o=hn.dot(this.direction),s=-hn.dot(mn),c=hn.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pn).addScaledVector(mn,d),f}intersectSphere(e,t){fn.subVectors(e.center,this.origin);let n=fn.dot(this.direction),r=fn.dot(fn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,r,i){gn.subVectors(t,e),_n.subVectors(n,e),vn.crossVectors(gn,_n);let a=this.direction.dot(vn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,e);let s=o*this.direction.dot(_n.crossVectors(hn,_n));if(s<0)return null;let c=o*this.direction.dot(gn.cross(hn));if(c<0||s+c>a)return null;let l=-o*hn.dot(vn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},q=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/bn.setFromMatrixColumn(e,0).length(),i=1/bn.setFromMatrixColumn(e,1).length(),a=1/bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sn,e,Cn)}lookAt(e,t,n){let r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),wn.crossVectors(n,En),wn.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),wn.crossVectors(n,En)),wn.normalize(),Tn.crossVectors(En,wn),r[0]=wn.x,r[4]=Tn.x,r[8]=En.x,r[1]=wn.y,r[5]=Tn.y,r[9]=En.y,r[2]=wn.z,r[6]=Tn.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=bn.set(r[0],r[1],r[2]).length(),a=bn.set(r[4],r[5],r[6]).length(),o=bn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);let s=1/i,c=1/a,l=1/o;return xn.elements[0]*=s,xn.elements[1]*=s,xn.elements[2]*=s,xn.elements[4]*=c,xn.elements[5]*=c,xn.elements[6]*=c,xn.elements[8]*=l,xn.elements[9]*=l,xn.elements[10]*=l,t.setFromRotationMatrix(xn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=He){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},bn=new K,xn=new q,Sn=new K(0,0,0),Cn=new K(1,1,1),wn=new K,Tn=new K,En=new K,Dn=new q,On=new Ut,kn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Ye(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Ye(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return On.setFromEuler(this),this.setFromQuaternion(On,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER=`XYZ`;var An=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},jn=0,Mn=new K,Nn=new Ut,Pn=new q,Fn=new K,In=new K,Ln=new K,Rn=new Ut,zn=new K(1,0,0),Bn=new K(0,1,0),Vn=new K(0,0,1),Hn={type:`added`},Un={type:`removed`},Wn={type:`childadded`,child:null},Gn={type:`childremoved`,child:null},Kn=class e extends Ue{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jn++}),this.uuid=Je(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new kn,r=new Ut,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new q},normalMatrix:{value:new U}}),this.matrix=new q,this.matrixWorld=new q,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new An,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.multiply(Nn),this}rotateOnWorldAxis(e,t){return Nn.setFromAxisAngle(e,t),this.quaternion.premultiply(Nn),this}rotateX(e){return this.rotateOnAxis(zn,e)}rotateY(e){return this.rotateOnAxis(Bn,e)}rotateZ(e){return this.rotateOnAxis(Vn,e)}translateOnAxis(e,t){return Mn.copy(e).applyQuaternion(this.quaternion),this.position.add(Mn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zn,e)}translateY(e){return this.translateOnAxis(Bn,e)}translateZ(e){return this.translateOnAxis(Vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fn.copy(e):Fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(In,Fn,this.up):Pn.lookAt(Fn,In,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Nn.setFromRotationMatrix(Pn),this.quaternion.premultiply(Nn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hn),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Un),Gn.child=e,this.dispatchEvent(Gn),Gn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hn),Wn.child=e,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,e,Ln),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,Rn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Kn.DEFAULT_UP=new K(0,1,0),Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new K,Jn=new K,Yn=new K,Xn=new K,Zn=new K,Qn=new K,$n=new K,er=new K,tr=new K,nr=new K,rr=new G,ir=new G,ar=new G,or=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),qn.subVectors(e,t),r.cross(qn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){qn.subVectors(r,t),Jn.subVectors(n,t),Yn.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(Jn),s=qn.dot(Yn),c=Jn.dot(Jn),l=Jn.dot(Yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Xn)!==null&&Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Xn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Xn.x),s.addScaledVector(a,Xn.y),s.addScaledVector(o,Xn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return rr.setScalar(0),ir.setScalar(0),ar.setScalar(0),rr.fromBufferAttribute(e,t),ir.fromBufferAttribute(e,n),ar.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(rr,i.x),a.addScaledVector(ir,i.y),a.addScaledVector(ar,i.z),a}static isFrontFacing(e,t,n,r){return qn.subVectors(n,t),Jn.subVectors(e,t),qn.cross(Jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),qn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Zn.subVectors(r,n),Qn.subVectors(i,n),er.subVectors(e,n);let s=Zn.dot(er),c=Qn.dot(er);if(s<=0&&c<=0)return t.copy(n);tr.subVectors(e,r);let l=Zn.dot(tr),u=Qn.dot(tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Zn,a);nr.subVectors(e,i);let f=Zn.dot(nr),p=Qn.dot(nr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Qn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return $n.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector($n,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Zn,a).addScaledVector(Qn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},lr={h:0,s:0,l:0};function ur(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=Xe(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ur(i,r,e+1/3),this.g=ur(i,r,e),this.b=ur(i,r,e-1/3)}return W.toWorkingColorSpace(this,r),this}setStyle(e,t=je){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=je){let n=sr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=At(e.r),this.g=At(e.g),this.b=At(e.b),this}copyLinearToSRGB(e){return this.r=jt(e.r),this.g=jt(e.g),this.b=jt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=je){return W.fromWorkingColorSpace(dr.copy(this),e),Math.round(Ye(dr.r*255,0,255))*65536+Math.round(Ye(dr.g*255,0,255))*256+Math.round(Ye(dr.b*255,0,255))}getHexString(e=je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.fromWorkingColorSpace(dr.copy(this),t);let n=dr.r,r=dr.g,i=dr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.fromWorkingColorSpace(dr.copy(this),t),e.r=dr.r,e.g=dr.g,e.b=dr.b,e}getStyle(e=je){W.fromWorkingColorSpace(dr.copy(this),e);let t=dr.r,n=dr.g,r=dr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(lr);let n=$e(cr.h,lr.h,t),r=$e(cr.s,lr.s,t),i=$e(cr.l,lr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dr=new J;J.NAMES=sr;var fr=0,pr=class extends Ue{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fr++}),this.uuid=Je(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},mr=class extends pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hr=new K,gr=new H,_r=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),r=ht(r,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},vr=class extends _r{constructor(e,t,n){super(new Uint16Array(e),t,n)}},yr=class extends _r{constructor(e,t,n){super(new Uint32Array(e),t,n)}},br=class extends _r{constructor(e,t,n){super(new Float32Array(e),t,n)}},xr=0,Sr=new q,Cr=new Kn,wr=new K,Tr=new Kt,Er=new Kt,Dr=new K,Or=class e extends Ue{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=Je(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(vt(e)?yr:vr)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new br(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);return}if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new _r(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let c=new K,l=new K,u=new K,d=new H,f=new H,p=new H,m=new K,h=new K;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new K,y=new K,b=new K,x=new K;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new _r(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new _r(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=new q,Ar=new yn,jr=new dn,Mr=new K,Nr=new K,Pr=new K,Fr=new K,Ir=new K,Lr=new K,Rr=new K,zr=new K,Br=class extends Kn{constructor(e=new Or,t=new mr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Lr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ir.fromBufferAttribute(s,e),a?Lr.addScaledVector(Ir,r):Lr.addScaledVector(Ir.sub(t),r))}t.add(Lr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),Ar.copy(e.ray).recast(e.near),!(jr.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(jr,Mr)===null||Ar.origin.distanceToSquared(Mr)>(e.far-e.near)**2))&&(kr.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(kr),(n.boundingBox===null||Ar.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Hr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Hr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Hr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Hr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Vr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;zr.copy(s),zr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(zr);return l<n.near||l>n.far?null:{distance:l,point:zr.clone(),object:e}}function Hr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Nr),e.getVertexPosition(c,Pr),e.getVertexPosition(l,Fr);let u=Vr(e,t,n,r,Nr,Pr,Fr,Rr);if(u){let e=new K;or.getBarycoord(Rr,Nr,Pr,Fr,e),i&&(u.uv=or.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=or.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=or.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};or.getNormal(Nr,Pr,Fr,t.normal),u.face=t,u.barycoord=e}return u}var Ur=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new br(c,3)),this.setAttribute(`normal`,new br(l,3)),this.setAttribute(`uv`,new br(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Gr(e){let t={};for(let n=0;n<e.length;n++){let r=Wr(e[n]);for(let e in r)t[e]=r[e]}return t}function Kr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function qr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var Jr={clone:Wr,merge:Gr},Yr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zr=class extends pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yr,this.fragmentShader=Xr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=Kr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends Kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new q,this.projectionMatrix=new q,this.projectionMatrixInverse=new q,this.coordinateSystem=He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$r=new K,ei=new H,ti=new H,ni=class extends Qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ke*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qe*2*Math.atan(Math.tan(Ke*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,ei,ti),t.subVectors(ti,ei)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ke*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ri=-90,ii=1,ai=class extends Kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ni(ri,ii,e,t);r.layers=this.layers,this.add(r);let i=new ni(ri,ii,e,t);i.layers=this.layers,this.add(i);let a=new ni(ri,ii,e,t);a.layers=this.layers,this.add(a);let o=new ni(ri,ii,e,t);o.layers=this.layers,this.add(o);let s=new ni(ri,ii,e,t);s.layers=this.layers,this.add(s);let c=new ni(ri,ii,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},oi=class extends Rt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},si=class extends Bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new oi(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),i=new Zr({name:`CubemapFromEquirect`,uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Br(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ai(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ci=new K,li=new K,ui=new U,di=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ci.subVectors(n,t).cross(li.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ci),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ui.getNormalMatrix(e),r=this.coplanarPoint(ci).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new dn,pi=new K,mi=class{constructor(e=new di,t=new di,n=new di,r=new di,i=new di,a=new di){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(pi.x=r.normal.x>0?e.max.x:e.min.x,pi.y=r.normal.y>0?e.max.y:e.min.y,pi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function gi(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var _i=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new br(p,3)),this.setAttribute(`normal`,new br(m,3)),this.setAttribute(`uv`,new br(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},vi={basic:{uniforms:Gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Gr([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Gr([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Gr([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Gr([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Gr([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Gr([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Gr([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Gr([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Gr([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distanceRGBA:{uniforms:Gr([X.common,X.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distanceRGBA_vert,fragmentShader:Y.distanceRGBA_frag},shadow:{uniforms:Gr([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};vi.physical={uniforms:Gr([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var yi={r:0,b:0,g:0},bi=new kn,xi=new q;function Si(e,t,n,r,i,a,o){let s=new J(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new Br(new Ur(1,1,1),new Zr({name:`BackgroundCubeMaterial`,uniforms:Wr(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),bi.copy(n.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xi.makeRotationFromEuler(bi)),u.material.toneMapped=W.getTransfer(r.colorSpace)!==Ie,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new Br(new _i(2,2),new Zr({name:`BackgroundMaterial`,uniforms:Wr(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=W.getTransfer(r.colorSpace)!==Ie,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(yi,qr(e)),r.buffers.color.setClear(yi.r,yi.g,yi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function Ci(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function wi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e];for(let e=0;e<s.length;e++)n.update(t,r,s[e])}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function Ti(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`);if(f===!0){let e=t.get(`EXT_clip_control`);e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT)}let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Ei(e){let t=this,n=null,r=0,i=!1,a=!1,o=new di,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Di(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new si(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Oi=class extends Qr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ki=4,Ai=[.125,.215,.35,.446,.526,.582],ji=20,Mi=new Oi,Ni=new J,Pi=null,Fi=0,Ii=0,Li=!1,Ri=(1+Math.sqrt(5))/2,zi=1/Ri,Bi=[new K(-Ri,zi,0),new K(Ri,zi,0),new K(-zi,0,Ri),new K(zi,0,Ri),new K(0,Ri,-zi),new K(0,Ri,zi),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pi=this._renderer.getRenderTarget(),Fi=this._renderer.getActiveCubeFace(),Ii=this._renderer.getActiveMipmapLevel(),Li=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qi(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ki(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pi,Fi,Ii),this._renderer.xr.enabled=Li,e.scissorTest=!1,Wi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pi=this._renderer.getRenderTarget(),Fi=this._renderer.getActiveCubeFace(),Ii=this._renderer.getActiveMipmapLevel(),Li=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:Me,depthBuffer:!1},r=Ui(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ui(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hi(r)),this._blurMaterial=Gi(r,e,t)}return r}_compileMaterial(e){let t=new Br(this._lodPlanes[0],e);this._renderer.compile(t,Mi)}_sceneToCubeUV(e,t,n,r){let i=new ni(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Ni),s.toneMapping=0,s.autoClear=!1;let u=new mr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Br(new Ur,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Ni),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Wi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qi()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ki());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Br(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Wi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mi)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Bi[(r-t-1)%Bi.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Br(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ji;m>ji&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ji}`);let h=[],g=0;for(let e=0;e<ji;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Wi(t,3*v*(r>_-ki?r-_+ki:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Mi)}};function Hi(e){let t=[],n=[],r=[],i=e,a=e-ki+1+Ai.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-ki?s=Ai[o-e+ki-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Or;h.setAttribute(`position`,new _r(f,3)),h.setAttribute(`uv`,new _r(p,2)),h.setAttribute(`faceIndex`,new _r(m,1)),t.push(h),i>ki&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Ui(e,t,n){let r=new Bt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Wi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Gi(e,t,n){let r=new Float32Array(ji),i=new K(0,1,0);return new Zr({name:`SphericalGaussianBlur`,defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ki(){return new Zr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qi(){return new Zr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ji(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ji(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Vi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Vi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Xi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&St(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Zi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(vt(n)?yr:vr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Qi(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e];for(let e=0;e<c.length;e++)n.update(t,r,c[e])}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $i(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ea(e,t,n){let r=new WeakMap,i=new G;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Vt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ta(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var na=class extends Rt{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ra=new Rt,ia=new na(1,1),aa=new Vt,oa=new Ht,sa=new oi,ca=[],la=[],ua=new Float32Array(16),da=new Float32Array(9),fa=new Float32Array(4);function pa(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ca[i];if(a===void 0&&(a=new Float32Array(i),ca[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ma(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ha(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ga(e,t){let n=la[t];n===void 0&&(n=new Int32Array(t),la[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function _a(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function va(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2fv(this.addr,t),ha(n,t)}}function ya(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ma(n,t))return;e.uniform3fv(this.addr,t),ha(n,t)}}function ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4fv(this.addr,t),ha(n,t)}}function xa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;fa.set(r),e.uniformMatrix2fv(this.addr,!1,fa),ha(n,r)}}function Sa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;da.set(r),e.uniformMatrix3fv(this.addr,!1,da),ha(n,r)}}function Ca(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ma(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ha(n,t)}else{if(ma(n,r))return;ua.set(r),e.uniformMatrix4fv(this.addr,!1,ua),ha(n,r)}}function wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2iv(this.addr,t),ha(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ma(n,t))return;e.uniform3iv(this.addr,t),ha(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4iv(this.addr,t),ha(n,t)}}function Oa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ka(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ma(n,t))return;e.uniform2uiv(this.addr,t),ha(n,t)}}function Aa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ma(n,t))return;e.uniform3uiv(this.addr,t),ha(n,t)}}function ja(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ma(n,t))return;e.uniform4uiv(this.addr,t),ha(n,t)}}function Ma(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ia.compareFunction=515,a=ia):a=ra,n.setTexture2D(t||a,i)}function Na(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||oa,i)}function Pa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||sa,i)}function Fa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||aa,i)}function Ia(e){switch(e){case 5126:return _a;case 35664:return va;case 35665:return ya;case 35666:return ba;case 35674:return xa;case 35675:return Sa;case 35676:return Ca;case 5124:case 35670:return wa;case 35667:case 35671:return Ta;case 35668:case 35672:return Ea;case 35669:case 35673:return Da;case 5125:return Oa;case 36294:return ka;case 36295:return Aa;case 36296:return ja;case 35678:case 36198:case 36298:case 36306:case 35682:return Ma;case 35679:case 36299:case 36307:return Na;case 35680:case 36300:case 36308:case 36293:return Pa;case 36289:case 36303:case 36311:case 36292:return Fa}}function La(e,t){e.uniform1fv(this.addr,t)}function Ra(e,t){let n=pa(t,this.size,2);e.uniform2fv(this.addr,n)}function za(e,t){let n=pa(t,this.size,3);e.uniform3fv(this.addr,n)}function Ba(e,t){let n=pa(t,this.size,4);e.uniform4fv(this.addr,n)}function Va(e,t){let n=pa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ha(e,t){let n=pa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ua(e,t){let n=pa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Wa(e,t){e.uniform1iv(this.addr,t)}function Ga(e,t){e.uniform2iv(this.addr,t)}function Ka(e,t){e.uniform3iv(this.addr,t)}function qa(e,t){e.uniform4iv(this.addr,t)}function Ja(e,t){e.uniform1uiv(this.addr,t)}function Ya(e,t){e.uniform2uiv(this.addr,t)}function Xa(e,t){e.uniform3uiv(this.addr,t)}function Za(e,t){e.uniform4uiv(this.addr,t)}function Qa(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ra,a[e])}function $a(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||oa,a[e])}function eo(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||sa,a[e])}function to(e,t,n){let r=this.cache,i=t.length,a=ga(n,i);ma(r,a)||(e.uniform1iv(this.addr,a),ha(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||aa,a[e])}function no(e){switch(e){case 5126:return La;case 35664:return Ra;case 35665:return za;case 35666:return Ba;case 35674:return Va;case 35675:return Ha;case 35676:return Ua;case 5124:case 35670:return Wa;case 35667:case 35671:return Ga;case 35668:case 35672:return Ka;case 35669:case 35673:return qa;case 5125:return Ja;case 36294:return Ya;case 36295:return Xa;case 36296:return Za;case 35678:case 36198:case 36298:case 36306:case 35682:return Qa;case 35679:case 36299:case 36307:return $a;case 35680:case 36300:case 36308:case 36293:return eo;case 36289:case 36303:case 36311:case 36292:return to}}var ro=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ia(t.type)}},io=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=no(t.type)}},ao=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},oo=/(\w+)(\])?(\[|\.)?/g;function so(e,t){e.seq.push(t),e.map[t.id]=t}function co(e,t,n){let r=e.name,i=r.length;for(oo.lastIndex=0;;){let a=oo.exec(r),o=oo.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){so(n,l===void 0?new ro(s,e,t):new io(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ao(s),so(n,e)),n=e}}}var lo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);co(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function uo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fo=37297,po=0;function mo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ho(e){let t=W.getPrimaries(W.workingColorSpace),n=W.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case Me:case Pe:return[r,`LinearTransferOETF`];case je:case Ne:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function go(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+mo(e.getShaderSource(t),r)}return i}function _o(e,t){let n=ho(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function vo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yo=new K;function bo(){return W.getLuminanceCoefficients(yo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yo.x.toFixed(4)}, ${yo.y.toFixed(4)}, ${yo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wo).join(`
`)}function So(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Co(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wo(e){return e!==``}function To(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Do=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(e){return e.replace(Do,Ao)}var ko=new Map;function Ao(e,t){let n=Y[t];if(n===void 0){let e=ko.get(t);if(e!==void 0)n=Y[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Oo(n)}var jo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(e){return e.replace(jo,No)}function No(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Po(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Fo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Io(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Lo(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Ro(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function zo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Bo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fo(n),l=Io(n),u=Lo(n),d=Ro(n),f=zo(n),p=xo(n),m=So(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(wo).join(`
`),_.length>0&&(_+=`
`)):(g=[Po(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wo).join(`
`),_=[Po(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:vo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,_o(`linearToOutputTexel`,n.outputColorSpace),bo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wo).join(`
`)),o=Oo(o),o=To(o,n),o=Eo(o,n),s=Oo(s),s=To(s,n),s=Eo(s,n),o=Mo(o),s=Mo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=uo(i,i.VERTEX_SHADER,y),S=uo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=go(i,x,`vertex`),r=go(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new lo(i,h),T=Co(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,fo)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=po++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Vo=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uo(e),t.set(e,n)),n}},Uo=class{constructor(e){this.id=Vo++,this.code=e,this.usedTimes=0}};function Wo(e,t,n,r,i,a,o){let s=new An,c=new Ho,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,p=i.vertexTextures,m=i.precision,h={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(e){return l.add(e),e===0?`uv`:`uv${e}`}function _(a,s,u,_,v){let y=_.fog,b=v.geometry,x=a.isMeshStandardMaterial?_.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=S&&S.mapping===306?S.image.height:null,w=h[a.type];a.precision!==null&&(m=i.getMaxPrecision(a.precision),m!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,m,`instead.`));let T=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,E=T===void 0?0:T.length,D=0;b.morphAttributes.position!==void 0&&(D=1),b.morphAttributes.normal!==void 0&&(D=2),b.morphAttributes.color!==void 0&&(D=3);let O,k,A,j;if(w){let e=vi[w];O=e.vertexShader,k=e.fragmentShader}else O=a.vertexShader,k=a.fragmentShader,c.update(a),A=c.getVertexShaderID(a),j=c.getFragmentShaderID(a);let M=e.getRenderTarget(),N=v.isInstancedMesh===!0,P=v.isBatchedMesh===!0,F=!!a.map,ee=!!a.matcap,te=!!S,ne=!!a.aoMap,re=!!a.lightMap,ie=!!a.bumpMap,ae=!!a.normalMap,I=!!a.displacementMap,oe=!!a.emissiveMap,se=!!a.metalnessMap,ce=!!a.roughnessMap,le=a.anisotropy>0,ue=a.clearcoat>0,de=a.dispersion>0,fe=a.iridescence>0,pe=a.sheen>0,L=a.transmission>0,me=le&&!!a.anisotropyMap,R=ue&&!!a.clearcoatMap,he=ue&&!!a.clearcoatNormalMap,z=ue&&!!a.clearcoatRoughnessMap,ge=fe&&!!a.iridescenceMap,B=fe&&!!a.iridescenceThicknessMap,V=pe&&!!a.sheenColorMap,_e=pe&&!!a.sheenRoughnessMap,ve=!!a.specularMap,ye=!!a.specularColorMap,be=!!a.specularIntensityMap,xe=L&&!!a.transmissionMap,Se=L&&!!a.thicknessMap,Ce=!!a.gradientMap,we=!!a.alphaMap,Te=a.alphaTest>0,Ee=!!a.alphaHash,De=!!a.extensions,Oe=0;a.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Oe=e.toneMapping);let ke={shaderID:w,shaderType:a.type,shaderName:a.name,vertexShader:O,fragmentShader:k,defines:a.defines,customVertexShaderID:A,customFragmentShaderID:j,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:m,batching:P,batchingColor:P&&v._colorsTexture!==null,instancing:N,instancingColor:N&&v.instanceColor!==null,instancingMorph:N&&v.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:M===null?e.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Me,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&S.mapping,envMapCubeUVHeight:C,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:p&&I,emissiveMap:oe,normalMapObjectSpace:ae&&a.normalMapType===1,normalMapTangentSpace:ae&&a.normalMapType===0,metalnessMap:se,roughnessMap:ce,anisotropy:le,anisotropyMap:me,clearcoat:ue,clearcoatMap:R,clearcoatNormalMap:he,clearcoatRoughnessMap:z,dispersion:de,iridescence:fe,iridescenceMap:ge,iridescenceThicknessMap:B,sheen:pe,sheenColorMap:V,sheenRoughnessMap:_e,specularMap:ve,specularColorMap:ye,specularIntensityMap:be,transmission:L,transmissionMap:xe,thicknessMap:Se,gradientMap:Ce,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:we,alphaTest:Te,alphaHash:Ee,combine:a.combine,mapUv:F&&g(a.map.channel),aoMapUv:ne&&g(a.aoMap.channel),lightMapUv:re&&g(a.lightMap.channel),bumpMapUv:ie&&g(a.bumpMap.channel),normalMapUv:ae&&g(a.normalMap.channel),displacementMapUv:I&&g(a.displacementMap.channel),emissiveMapUv:oe&&g(a.emissiveMap.channel),metalnessMapUv:se&&g(a.metalnessMap.channel),roughnessMapUv:ce&&g(a.roughnessMap.channel),anisotropyMapUv:me&&g(a.anisotropyMap.channel),clearcoatMapUv:R&&g(a.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&g(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(a.iridescenceMap.channel),iridescenceThicknessMapUv:B&&g(a.iridescenceThicknessMap.channel),sheenColorMapUv:V&&g(a.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(a.sheenRoughnessMap.channel),specularMapUv:ve&&g(a.specularMap.channel),specularColorMapUv:ye&&g(a.specularColorMap.channel),specularIntensityMapUv:be&&g(a.specularIntensityMap.channel),transmissionMapUv:xe&&g(a.transmissionMap.channel),thicknessMapUv:Se&&g(a.thicknessMap.channel),alphaMapUv:we&&g(a.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(ae||le),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:v.isPoints===!0&&!!b.attributes.uv&&(F||we),fog:!!y,useFog:a.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:v.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:F&&a.map.isVideoTexture===!0&&W.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:De&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(De&&a.extensions.multiDraw===!0||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function v(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),b(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function b(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.alphaToCoverage&&s.enable(20),e.push(s.mask)}function x(e){let t=h[e.type],n;if(t){let e=vi[t];n=Jr.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Bo(e,n,t,a),u.push(r)),r}function C(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function w(e){c.remove(e)}function T(){c.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:u,dispose:T}}function Go(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ko(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ko),r.length>1&&r.sort(t||qo),i.length>1&&i.sort(t||qo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Yo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Jo,e.set(t,[i])):n>=r.length?(i=new Jo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Xo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new K,color:new J};break;case`SpotLight`:n={position:new K,direction:new K,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Zo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Qo=0;function $o(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function es(e){let t=new Xo,n=Zo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new q,o=new q;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort($o);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Qo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ts(e){let t=new es(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function ns(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ts(e),t.set(n,[a])):r>=i.length?(a=new ts(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var rs=class extends pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=ke,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},is=class extends pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},as=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,os=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ss(e,t,n){let i=new mi,a=new H,o=new H,s=new G,c=new rs({depthPacking:Ae}),l=new is,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:as,fragmentShader:os}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new Or;h.setAttribute(`position`,new _r(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Br(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Bt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Bt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var cs={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ls(e){function t(){let t=!1,n=new G,r=null,i=new G(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function n(){let t=!1,n=!1,r=null,i=null,a=null;return{setReversed:function(e){n=e},setTest:function(t){t?I(e.DEPTH_TEST):oe(e.DEPTH_TEST)},setMask:function(n){r!==n&&!t&&(e.depthMask(n),r=n)},setFunc:function(t){if(n&&(t=cs[t]),i!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}i=t}},setLocked:function(e){t=e},setClear:function(t){a!==t&&(e.clearDepth(t),a=t)},reset:function(){t=!1,r=null,i=null,a=null}}}function r(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):oe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let i=new t,a=new n,o=new r,s=new WeakMap,c=new WeakMap,l={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new J(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,A=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),j=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),j=M>=1);let P=null,F={},ee=e.getParameter(e.SCISSOR_BOX),te=e.getParameter(e.VIEWPORT),ne=new G().fromArray(ee),re=new G().fromArray(te);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),I(e.DEPTH_TEST),a.setFunc(3),L(!1),me(1),I(e.CULL_FACE),fe(0);function I(t){l[t]!==!0&&(e.enable(t),l[t]=!0)}function oe(t){l[t]!==!1&&(e.disable(t),l[t]=!1)}function se(t,n){return u[t]!==n&&(e.bindFramebuffer(t,n),u[t]=n,t===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=n),!0)}function ce(t,n){let r=f,i=!1;if(t){r=d.get(n),r===void 0&&(r=[],d.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function le(t){return p!==t&&(e.useProgram(t),p=t,!0)}let ue={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ue[103]=e.MIN,ue[104]=e.MAX;let de={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function fe(t,n,r,i,a,o,s,c,l,u){if(t===0){m===!0&&(oe(e.BLEND),m=!1);return}if(m===!1&&(I(e.BLEND),m=!0),t!==5){if(t!==h||u!==w){if((g!==100||y!==100)&&(e.blendEquation(e.FUNC_ADD),g=100,y=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}_=null,v=null,b=null,x=null,S.set(0,0,0),C=0,h=t,w=u}return}a||=n,o||=r,s||=i,(n!==g||a!==y)&&(e.blendEquationSeparate(ue[n],ue[a]),g=n,y=a),(r!==_||i!==v||o!==b||s!==x)&&(e.blendFuncSeparate(de[r],de[i],de[o],de[s]),_=r,v=i,b=o,x=s),(c.equals(S)===!1||l!==C)&&(e.blendColor(c.r,c.g,c.b,l),S.copy(c),C=l),h=t,w=!1}function pe(t,n){t.side===2?oe(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),L(r),t.blending===1&&t.transparent===!1?fe(0):fe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),a.setFunc(t.depthFunc),a.setTest(t.depthTest),a.setMask(t.depthWrite),i.setMask(t.colorWrite);let s=t.stencilWrite;o.setTest(s),s&&(o.setMask(t.stencilWriteMask),o.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),o.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),he(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):oe(e.SAMPLE_ALPHA_TO_COVERAGE)}function L(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function me(t){t===0?oe(e.CULL_FACE):(I(e.CULL_FACE),t!==E&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),E=t}function R(t){t!==D&&(j&&e.lineWidth(t),D=t)}function he(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(O!==n||k!==r)&&(e.polygonOffset(n,r),O=n,k=r)):oe(e.POLYGON_OFFSET_FILL)}function z(t){t?I(e.SCISSOR_TEST):oe(e.SCISSOR_TEST)}function ge(t){t===void 0&&(t=e.TEXTURE0+A-1),P!==t&&(e.activeTexture(t),P=t)}function B(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+A-1:P);let i=F[r];i===void 0&&(i={type:void 0,texture:void 0},F[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function V(){let t=F[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function _e(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ce(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function we(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Te(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ee(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function De(t){ne.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Oe(t){re.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function ke(t,n){let r=c.get(n);r===void 0&&(r=new WeakMap,c.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ae(t,n){let r=c.get(n).get(t);s.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),s.set(n,r))}function je(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},P=null,F={},u={},d=new WeakMap,f=[],p=null,m=!1,h=null,g=null,_=null,v=null,y=null,b=null,x=null,S=new J(0,0,0),C=0,w=!1,T=null,E=null,D=null,O=null,k=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:I,disable:oe,bindFramebuffer:se,drawBuffers:ce,useProgram:le,setBlending:fe,setMaterial:pe,setFlipSided:L,setCullFace:me,setLineWidth:R,setPolygonOffset:he,setScissorTest:z,activeTexture:ge,bindTexture:B,unbindTexture:V,compressedTexImage2D:_e,compressedTexImage3D:ve,texImage2D:Te,texImage3D:Ee,updateUBOMapping:ke,uniformBlockBinding:Ae,texStorage2D:Ce,texStorage3D:we,texSubImage2D:ye,texSubImage3D:be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:De,viewport:Oe,reset:je}}function us(e,t,n,r){let i=ds(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case O:return e*t/i.components*i.byteLength;case k:return e*t/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case M:return e*t*4/i.components*i.byteLength;case N:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case F:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case te:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ce:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ue:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case de:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case fe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case L:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case me:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case z:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ge:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case B:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case V:case _e:case ve:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ye:case be:return Math.ceil(e/4)*Math.ceil(t/4)*8;case xe:case Se:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ds(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function fs(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):yt(`canvas`)}function w(e,t,n){let r=1,i=Ce(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps&&e.minFilter!==1003&&e.minFilter!==1006}function E(e){l.generateMipmap(e)}function O(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?Fe:W.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function k(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function A(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),N(t),t.isVideoTexture&&y.delete(t)}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),F(t)}function N(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&P(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function P(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function F(e){let t=f.get(e);if(e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ee=0;function te(){ee=0}function ne(){let e=ee;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ee+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(e,t){let n=f.get(e);if(e.isVideoTexture&&xe(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function ae(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){fe(n,e,t);return}d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function I(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){fe(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function oe(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){pe(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let se={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ce={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},le={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ue(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,se[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,se[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,se[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ce[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ce[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,le[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function de(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,j));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=re(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&P(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function fe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=de(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=W.getPrimaries(W.workingColorSpace),s=t.colorSpace===``?null:W.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Se(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=O(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);ue(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(t,u);if(t.isDepthTexture)g=k(t.format===D,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=us(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t,0,0)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data,0,0)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=us(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=Ce(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=Ce(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function pe(e,t,n){if(t.image.length!==6)return;let r=de(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=W.getPrimaries(W.workingColorSpace),o=t.colorSpace===``?null:W.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Se(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=A(t,h);ue(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Ce(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function L(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.colorSpace);if(!f.get(t).__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),be(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,f.get(n).__webglTexture,0,ye(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,f.get(n).__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function me(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=k(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=ye(t);be(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.colorSpace),c=ye(t);n&&be(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):be(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function R(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!f.get(t.depthTexture).__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),ie(t.depthTexture,0);let n=f.get(t.depthTexture).__webglTexture,r=ye(t);if(t.depthTexture.format===1026)be(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0);else if(t.depthTexture.format===1027)be(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0);else throw Error(`Unknown depthTexture format`)}function he(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);R(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),me(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),me(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function z(e,t,n){let r=f.get(e);t!==void 0&&L(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&he(e)}function ge(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,M);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&be(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=ye(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),me(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ue(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)L(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else L(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),ue(l.TEXTURE_2D,r),L(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ue(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)L(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else L(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&he(e)}function B(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:l.TEXTURE_2D,n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let V=[],_e=[];function ve(e){if(e.samples>0){if(be(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(V.length=0,_e.length=0,V.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(V.push(a),_e.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,_e)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,V))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function ye(e){return Math.min(p.maxSamples,e.samples)}function be(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function xe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Se(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Ce(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ne,this.resetTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=ae,this.setTexture3D=I,this.setTextureCube=oe,this.rebindTextures=z,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=L,this.useMultisampledRTT=be}function ps(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ms=class extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hs=class extends Kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},gs={type:`move`},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vs=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ys=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Rt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zr({vertexShader:vs,fragmentShader:ys,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Br(new _i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xs=class extends Ue{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new bs,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new H,T=null,O=new ni;O.layers.enable(1),O.viewport=new G;let k=new ni;k.layers.enable(2),k.viewport=new G;let A=[O,k],j=new ms;j.layers.enable(1),j.layers.enable(2);let M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new _s,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new _s,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new _s,x[e]=t),t.getHandSpace()};function P(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function F(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,F),r.removeEventListener(`inputsourceschange`,ee);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,F),r.addEventListener(`inputsourceschange`,ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Bt(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?D:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Bt(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new na(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let te=new K,ne=new K;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=k.near=O.near=t,j.far=k.far=O.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far);let i=e.parent,a=j.cameras;ie(j,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(j,O,k):j.projectionMatrix.copy(O.projectionMatrix),ae(e,j,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)};let I=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==j.cameras.length&&(j.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=A[r];o===void 0&&(o=new ni,o.layers.enable(r),o.viewport=new G,A[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),n===!0&&j.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let se=new hi;se.setAnimationLoop(oe),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},Ss=new kn,Cs=new q;function ws(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,qr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Ss.copy(o),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),e.envMapRotation.value.setFromMatrix4(Cs.makeRotationFromEuler(Ss)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Ts(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Es=class{constructor(e={}){let{canvas:t=bt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=new Uint32Array(4),h=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,E=-1,D=null,O=new G,k=new G,A=null,j=new J(0),M=0,N=t.width,P=t.height,F=1,ee=null,te=null,ne=new G(0,0,N,P),re=new G(0,0,N,P),ie=!1,ae=new mi,I=!1,oe=!1,se=new q,ce=new q,le=new K,ue=new G,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function pe(){return T===null?F:1}let L=n;function me(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r169`),t.addEventListener(`webglcontextlost`,ze,!1),t.addEventListener(`webglcontextrestored`,Be,!1),t.addEventListener(`webglcontextcreationerror`,Ve,!1),L===null){let t=`webgl2`;if(L=me(t,e),L===null)throw me(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let R,he,z,ge,B,V,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,Ne,Pe,Fe,Ie;function Le(){R=new Xi(L),R.init(),Pe=new ps(L,R),he=new Ti(L,R,e,Pe),z=new ls(L),he.reverseDepthBuffer&&z.buffers.depth.setReversed(!0),ge=new $i(L),B=new Go,V=new fs(L,R,z,B,he,Pe,ge),_e=new Di(x),ve=new Yi(x),ye=new gi(L),Fe=new Ci(L,ye),be=new Zi(L,ye,ge,Fe),xe=new ta(L,be,ye,ge),ke=new ea(L,he,V),Ee=new Ei(B),Se=new Wo(x,_e,ve,R,he,Fe,Ee),Ce=new ws(x,B),we=new Yo,Te=new ns(R),Oe=new Si(x,_e,ve,z,xe,p,s),De=new ss(x,xe,he),Ie=new Ts(L,ge,he,z),Ae=new wi(L,R,ge),Ne=new Qi(L,R,ge),ge.programs=Se.programs,x.capabilities=he,x.extensions=R,x.properties=B,x.renderLists=we,x.shadowMap=De,x.state=z,x.info=ge}Le();let Re=new xs(x,L);this.xr=Re,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=R.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=R.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(N,P,!1))},this.getSize=function(e){return e.set(N,P)},this.setSize=function(e,n,r=!0){if(Re.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}N=e,P=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(N*F,P*F).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,P=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(ne)},this.setViewport=function(e,t,n,r){e.isVector4?ne.set(e.x,e.y,e.z,e.w):ne.set(e,t,n,r),z.viewport(O.copy(ne).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(re)},this.setScissor=function(e,t,n,r){e.isVector4?re.set(e.x,e.y,e.z,e.w):re.set(e,t,n,r),z.scissor(k.copy(re).multiplyScalar(F).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(e){z.setScissorTest(ie=e)},this.setOpaqueSort=function(e){ee=e},this.setTransparentSort=function(e){te=e},this.getClearColor=function(e){return e.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Oe.getClearColor(),r=Oe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(m[0]=i,m[1]=a,m[2]=o,m[3]=r,L.clearBufferuiv(L.COLOR,0,m)):(h[0]=i,h[1]=a,h[2]=o,h[3]=r,L.clearBufferiv(L.COLOR,0,h))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,L.clearDepth(+!this.capabilities.reverseDepthBuffer)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ze,!1),t.removeEventListener(`webglcontextrestored`,Be,!1),t.removeEventListener(`webglcontextcreationerror`,Ve,!1),we.dispose(),Te.dispose(),B.dispose(),_e.dispose(),ve.dispose(),xe.dispose(),Fe.dispose(),Ie.dispose(),Se.dispose(),Re.dispose(),Re.removeEventListener(`sessionstart`,Je),Re.removeEventListener(`sessionend`,Ye),Xe.stop()};function ze(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function Be(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=ge.autoReset,t=De.enabled,n=De.autoUpdate,r=De.needsUpdate,i=De.type;Le(),ge.autoReset=e,De.enabled=t,De.autoUpdate=n,De.needsUpdate=r,De.type=i}function Ve(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function He(e){let t=e.target;t.removeEventListener(`dispose`,He),Ue(t)}function Ue(e){We(e),B.remove(e)}function We(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){Se.releaseProgram(e)}),e.isShaderMaterial&&Se.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=de);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=at(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Fe.setup(i,r,s,n,c);let h,g=Ae;if(c!==null&&(h=ye.get(c),g=Ne,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*pe()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*pe()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(R.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ye.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Ge(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,nt(e,t,n),e.side=0,e.needsUpdate=!0,nt(e,t,n),e.side=2):nt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Te.get(n),v.init(t),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ge(a,n,e),r.add(a)}else Ge(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){B.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}R.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ke=null;function qe(e){Ke&&Ke(e)}function Je(){Xe.stop()}function Ye(){Xe.start()}let Xe=new hi;Xe.setAnimationLoop(qe),typeof self<`u`&&Xe.setContext(self),this.setAnimationLoop=function(e){Ke=e,Re.setAnimationLoop(e),e===null?Xe.stop():Xe.start()},Re.addEventListener(`sessionstart`,Je),Re.addEventListener(`sessionend`,Ye),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(t),t=Re.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=Te.get(e,b.length),v.init(t),b.push(v),ce.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ae.setFromProjectionMatrix(ce),oe=this.localClippingEnabled,I=Ee.init(this.clippingPlanes,oe),_=we.get(e,y.length),_.init(),y.push(_),Re.enabled===!0&&Re.isPresenting===!0){let e=x.xr.getDepthSensingMesh();e!==null&&Ze(e,t,-1/0,x.sortObjects)}Ze(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ee,te),fe=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,fe&&Oe.addToRenderList(_,e),this.info.render.frame++,I===!0&&Ee.beginShadows();let n=v.state.shadowsArray;De.render(n,e,t),I===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=_.opaque,i=_.transmissive;if(v.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];$e(r,i,e,a)}fe&&Oe.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Qe(_,e,r,r.viewport)}}else i.length>0&&$e(r,i,e,t),fe&&Oe.render(e),Qe(_,e,t);T!==null&&(V.updateMultisampleRenderTarget(T),V.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Fe.resetDefaultState(),E=-1,D=null,b.pop(),b.length>0?(v=b[b.length-1],I===!0&&Ee.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,y.pop(),_=y.length>0?y[y.length-1]:null};function Ze(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ae.intersectsSprite(e)){r&&ue.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ce);let t=xe.update(e),i=e.material;i.visible&&_.push(e,t,i,n,ue.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ae.intersectsObject(e))){let t=xe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ue.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ue.copy(e.boundingSphere.center)),ue.applyMatrix4(e.matrixWorld).applyMatrix4(ce)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,ue.z,o)}}else i.visible&&_.push(e,t,i,n,ue.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ze(i[e],t,n,r)}function Qe(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),I===!0&&Ee.setGlobalState(x.clippingPlanes,n),r&&z.viewport(O.copy(r)),i.length>0&&et(i,t,n),a.length>0&&et(a,t,n),o.length>0&&et(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function $e(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[r.id]===void 0&&(v.state.transmissionRenderTarget[r.id]=new Bt(1,1,{generateMipmaps:!0,type:R.has(`EXT_color_buffer_half_float`)||R.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:W.workingColorSpace}));let a=v.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z,o.w);let s=x.getRenderTarget();x.setRenderTarget(a),x.getClearColor(j),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear(),fe&&Oe.render(n);let u=x.toneMapping;x.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),v.setupLightsView(r),I===!0&&Ee.setGlobalState(x.clippingPlanes,r),et(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),R.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,tt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}x.setRenderTarget(s),x.setClearColor(j,M),d!==void 0&&(r.viewport=d),x.toneMapping=u}function et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&tt(o,t,n,s,c,l)}}function tt(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function nt(e,t,n){t.isScene!==!0&&(t=de);let r=B.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Se.getParameters(e,i.state,a,t,n),c=Se.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ve:_e).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,He),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return it(e,s),u}else s.uniforms=Se.getUniforms(e),e.onBeforeCompile(s,x),u=Se.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Ee.uniform),it(e,s),r.needsLights=st(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function rt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=lo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function it(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function at(e,t,n,r,i){t.isScene!==!0&&(t=de),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Me,c=(r.isMeshStandardMaterial?ve:_e).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=B.get(r),y=v.state.lights;if(I===!0&&(oe===!0||e!==D)){let t=e===D&&r.id===E;Ee.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Ee.numPlanes||_.numIntersection!==Ee.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=nt(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=_.uniforms;if(z.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){he.reverseDepthBuffer?(se.copy(e.projectionMatrix),wt(se),Tt(se),k.setValue(L,`projectionMatrix`,se)):k.setValue(L,`projectionMatrix`,e.projectionMatrix),k.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(L,le.setFromMatrixPosition(e.matrixWorld)),he.logarithmicDepthBuffer&&k.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(L,i,`bindMatrix`),k.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(L,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(k.setOptional(L,i,`batchingTexture`),k.setValue(L,`batchingTexture`,i._matricesTexture,V),k.setOptional(L,i,`batchingIdTexture`),k.setValue(L,`batchingIdTexture`,i._indirectTexture,V),k.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(L,`batchingColorTexture`,i._colorsTexture,V));let j=n.morphAttributes;if((j.position!==void 0||j.normal!==void 0||j.color!==void 0)&&ke.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(L,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),w&&(k.setValue(L,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&ot(A,O),a&&r.fog===!0&&Ce.refreshFogUniforms(A,a),Ce.refreshMaterialUniforms(A,r,F,P,v.state.transmissionRenderTarget[e.id]),lo.upload(L,rt(_),A,V)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(lo.upload(L,rt(_),A,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(L,`center`,i.center),k.setValue(L,`modelViewMatrix`,i.modelViewMatrix),k.setValue(L,`normalMatrix`,i.normalMatrix),k.setValue(L,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ie.update(n,S),Ie.bind(n,S)}}return S}function ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function st(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=n;let r=B.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||R.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=B.get(e);if(s.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(L.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(s.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(ne).multiplyScalar(F).floor(),k.copy(re).multiplyScalar(F).floor(),A=ie;if(z.bindFramebuffer(L.FRAMEBUFFER,i)&&r&&z.drawBuffers(e,i),z.viewport(O),z.scissor(k),z.setScissorTest(A),a){let r=B.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=B.get(e.texture),i=t||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){z.bindFramebuffer(L.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!he.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!he.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Pe.convert(s),Pe.convert(c),a)}finally{let e=T===null?null:B.get(T).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!he.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!he.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(L.FRAMEBUFFER,s);let e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,e),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Pe.convert(c),Pe.convert(l),0);let o=T===null?null:B.get(T).__webglFramebuffer;z.bindFramebuffer(L.FRAMEBUFFER,o);let u=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ct(L,u,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.deleteBuffer(e),L.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(St(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(St(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u;n===null?(a=e.image.width,o=e.image.height,s=0,c=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.min.x,c=n.min.y),r===null?(l=0,u=0):(l=r.x,u=r.y);let d=Pe.convert(t.format),f=Pe.convert(t.type);V.setTexture2D(t,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let p=L.getParameter(L.UNPACK_ROW_LENGTH),m=L.getParameter(L.UNPACK_IMAGE_HEIGHT),h=L.getParameter(L.UNPACK_SKIP_PIXELS),g=L.getParameter(L.UNPACK_SKIP_ROWS),_=L.getParameter(L.UNPACK_SKIP_IMAGES),v=e.isCompressedTexture?e.mipmaps[i]:e.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,v.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,v.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,s),L.pixelStorei(L.UNPACK_SKIP_ROWS,c),e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,i,l,u,a,o,d,f,v.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,i,l,u,v.width,v.height,d,v.data):L.texSubImage2D(L.TEXTURE_2D,i,l,u,a,o,d,f,v),L.pixelStorei(L.UNPACK_ROW_LENGTH,p),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,m),L.pixelStorei(L.UNPACK_SKIP_PIXELS,h),L.pixelStorei(L.UNPACK_SKIP_ROWS,g),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_),i===0&&t.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(St(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.max.z-n.min.z,c=n.min.x,l=n.min.y,u=n.min.z),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Pe.convert(t.format),g=Pe.convert(t.type),_;if(t.isData3DTexture)V.setTexture3D(t,0),_=L.TEXTURE_3D;else if(t.isDataArrayTexture||t.isCompressedArrayTexture)V.setTexture2DArray(t,0),_=L.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let v=L.getParameter(L.UNPACK_ROW_LENGTH),y=L.getParameter(L.UNPACK_IMAGE_HEIGHT),b=L.getParameter(L.UNPACK_SKIP_PIXELS),x=L.getParameter(L.UNPACK_SKIP_ROWS),S=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,m.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,m.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,c),L.pixelStorei(L.UNPACK_SKIP_ROWS,l),L.pixelStorei(L.UNPACK_SKIP_IMAGES,u),e.isDataTexture||e.isData3DTexture?L.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):L.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m),L.pixelStorei(L.UNPACK_ROW_LENGTH,v),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,y),L.pixelStorei(L.UNPACK_SKIP_PIXELS,b),L.pixelStorei(L.UNPACK_SKIP_ROWS,x),L.pixelStorei(L.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&L.generateMipmap(_),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,z.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=W.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}},Ds=class extends Kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Os=class extends Rt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ks=class extends _r{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=class extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};function js(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ms(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Ns=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ps=class extends Ns{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ee,endingEnd:Ee}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case De:i=e,o=2*t-n;break;case Oe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case De:a=e,s=2*n-t;break;case Oe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Fs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Is=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ls=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Is(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ps(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ce:t=this.InterpolantFactoryMethodDiscrete;break;case we:t=this.InterpolantFactoryMethodLinear;break;case Te:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ce;case this.InterpolantFactoryMethodLinear:return we;case this.InterpolantFactoryMethodSmooth:return Te}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ms(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Te,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ls.prototype.TimeBufferType=Float32Array,Ls.prototype.ValueBufferType=Float32Array,Ls.prototype.DefaultInterpolation=we;var Rs=class extends Ls{constructor(e,t,n){super(e,t,n)}};Rs.prototype.ValueTypeName=`bool`,Rs.prototype.ValueBufferType=Array,Rs.prototype.DefaultInterpolation=Ce,Rs.prototype.InterpolantFactoryMethodLinear=void 0,Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Ls{};zs.prototype.ValueTypeName=`color`;var Bs=class extends Ls{};Bs.prototype.ValueTypeName=`number`;var Vs=class extends Ns{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},Hs=class extends Ls{InterpolantFactoryMethodLinear(e){return new Vs(this.times,this.values,this.getValueSize(),e)}};Hs.prototype.ValueTypeName=`quaternion`,Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Us=class extends Ls{constructor(e,t,n){super(e,t,n)}};Us.prototype.ValueTypeName=`string`,Us.prototype.ValueBufferType=Array,Us.prototype.DefaultInterpolation=Ce,Us.prototype.InterpolantFactoryMethodLinear=void 0,Us.prototype.InterpolantFactoryMethodSmooth=void 0;var Ws=class extends Ls{};Ws.prototype.ValueTypeName=`vector`;var Gs=class extends Or{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Ks=`\\[\\]\\.:\\/`,qs=RegExp(`[\\[\\]\\.:\\/]`,`g`),Js=`[^\\[\\]\\.:\\/]`,Ys=`[^`+Ks.replace(`\\.`,``)+`]`,Xs=`((?:WC+[\\/:])*)`.replace(`WC`,Js),Zs=`(WCOD+)?`.replace(`WCOD`,Ys),Qs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Js),$s=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Js),ec=RegExp(`^`+Xs+Zs+Qs+$s+`$`),tc=[`material`,`materials`,`bones`,`map`],nc=class{constructor(e,t,n){let r=n||rc.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},rc=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(qs,``)}static parseTrackName(e){let t=ec.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);tc.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rc.Composite=nc,rc.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rc.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rc.prototype.GetterByBindingType=[rc.prototype._getValue_direct,rc.prototype._getValue_array,rc.prototype._getValue_arrayElement,rc.prototype._getValue_toArray],rc.prototype.SetterByBindingTypeAndVersioning=[[rc.prototype._setValue_direct,rc.prototype._setValue_direct_setNeedsUpdate,rc.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_array,rc.prototype._setValue_array_setNeedsUpdate,rc.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_arrayElement,rc.prototype._setValue_arrayElement_setNeedsUpdate,rc.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rc.prototype._setValue_fromArray,rc.prototype._setValue_fromArray_setNeedsUpdate,rc.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`169`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`169`);var Z={uTime:{value:0},uDt:{value:1/60},uFrame:{value:0},uResolution:{value:new H(1,1)},uInvResolution:{value:new H(1,1)},uCamPos:{value:new K},uPrevCamPos:{value:new K},uViewProj:{value:new q},uPrevViewProj:{value:new q},uInvViewProj:{value:new q},uViewProjNJ:{value:new q},uPrevViewProjNJ:{value:new q},uInvViewProjNJ:{value:new q},uJitter:{value:new H},uPrevJitter:{value:new H},uNear:{value:.1},uFar:{value:12e4},uSunDir:{value:new K(.3,.4,-.86)},uSunColor:{value:new K(1,.96,.9)},uSunIntensity:{value:22},uMoonDir:{value:new K(-.3,.5,.8)},uAtmoTurbidity:{value:1},uAtmoMieG:{value:.78},uAtmoGroundAlbedo:{value:new K(.06,.09,.12)},uAmbientColor:{value:new K(.1,.2,.35)},uWindDir:{value:new H(1,0)},uWindSpeed:{value:8},uGustiness:{value:.3},uRain:{value:0},uFogDensity:{value:0},uSprayAmount:{value:0},uWhitecapCoverage:{value:0},uStormFactor:{value:0},uSeaLevel:{value:0},uLightning0:{value:new G(0,0,0,0)},uLightning1:{value:new G(0,0,0,0)},uLightningColor:{value:new K(.75,.85,1)},uAmbientFlash:{value:0},uVortex0:{value:new G(0,0,0,0)},uVortex1:{value:new G(0,0,0,0)},uVortex2:{value:new G(0,0,0,0)},uVortex3:{value:new G(0,0,0,0)},uSoliton0:{value:new G(0,0,0,0)},uSoliton0b:{value:new G(0,0,0,0)},uSoliton1:{value:new G(0,0,0,0)},uSoliton1b:{value:new G(0,0,0,0)},uRogue:{value:new G(0,0,0,0)},uRogueB:{value:new G(0,0,0,0)},uHurricane:{value:new G(0,0,0,0)},uFoamTex:{value:null},uRippleTex:{value:null},uCurlTex:{value:null},uEnvMap:{value:null},uEnvMaxLod:{value:6},uEnvWidth:{value:256},uExposure:{value:1},uEarthCurvature:{value:1}};function ic(e,t,n,r,i){Z.uTime.value=r,Z.uDt.value=n,Z.uFrame.value=i,Z.uPrevViewProj.value.copy(Z.uViewProj.value),Z.uPrevViewProjNJ.value.copy(Z.uViewProjNJ.value),Z.uPrevCamPos.value.copy(Z.uCamPos.value),e.updateMatrixWorld(),Z.uViewProj.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),Z.uInvViewProj.value.copy(Z.uViewProj.value).invert(),Z.uViewProjNJ.value.multiplyMatrices(t,e.matrixWorldInverse),Z.uInvViewProjNJ.value.copy(Z.uViewProjNJ.value).invert(),Z.uCamPos.value.setFromMatrixPosition(e.matrixWorld),Z.uNear.value=e.near,Z.uFar.value=e.far}var ac={potato:{label:`POTATO`,renderScale:.6,maxPixelRatio:1,oceanGridX:128,oceanGridY:84,fftSize:128,cloudScale:.32,cloudSteps:34,cloudLightSteps:4,cloudEnabled:!0,sprayCount:6e3,rainCount:9e3,dof:!1,motionBlur:!1,taa:!0,envSize:128,envCloudSteps:12,spoutSteps:32},low:{label:`LOW`,renderScale:.72,maxPixelRatio:1,oceanGridX:176,oceanGridY:110,fftSize:128,cloudScale:.36,cloudSteps:48,cloudLightSteps:5,cloudEnabled:!0,sprayCount:16e3,rainCount:22e3,dof:!0,motionBlur:!0,taa:!0,envSize:128,envCloudSteps:14,spoutSteps:44},medium:{label:`MEDIUM`,renderScale:.85,maxPixelRatio:1.25,oceanGridX:240,oceanGridY:150,fftSize:256,cloudScale:.45,cloudSteps:66,cloudLightSteps:6,cloudEnabled:!0,sprayCount:4e4,rainCount:48e3,dof:!0,motionBlur:!0,taa:!0,envSize:256,envCloudSteps:16,spoutSteps:56},high:{label:`HIGH`,renderScale:1,maxPixelRatio:1.5,oceanGridX:340,oceanGridY:210,fftSize:256,cloudScale:.5,cloudSteps:96,cloudLightSteps:7,cloudEnabled:!0,sprayCount:8e4,rainCount:96e3,dof:!0,motionBlur:!0,taa:!0,envSize:256,envCloudSteps:20,spoutSteps:72},ultra:{label:`ULTRA`,renderScale:1,maxPixelRatio:2,oceanGridX:480,oceanGridY:300,fftSize:256,cloudScale:.62,cloudSteps:148,cloudLightSteps:8,cloudEnabled:!0,sprayCount:15e4,rainCount:18e4,dof:!0,motionBlur:!0,taa:!0,envSize:512,envCloudSteps:26,spoutSteps:96}},oc=[`ultra`,`high`,`medium`,`low`,`potato`],sc=24,cc=400,lc=4,uc=.5,dc=4,fc=class{constructor(e=`high`){this.setPreset(e),this.adaptive=!0,this.targetMs=17.5,this.dynamicScale=1,this._acc=0,this._count=0,this._cooldown=0,this._window=new Float32Array(sc),this._scratch=new Float32Array(sc),this.history=new Float32Array(90),this.historyIndex=0,this.onDowngrade=null}setPreset(e,t=1){this.presetName=ac[e]?e:`high`,Object.assign(this,ac[this.presetName]),this.dynamicScale=t,this._cooldown=2}get effectiveScale(){return this.renderScale*this.dynamicScale}tierBelow(e){let t=oc.indexOf(this.presetName);if(t<0)return null;let n=Math.min(t+e,oc.length-1);return n>t?oc[n]:null}_median(e){let t=this._scratch.subarray(0,e);return t.set(this._window.subarray(0,e)),t.sort(),e&1?t[e-1>>1]:(t[e/2-1]+t[e/2])*.5}_shed(e){let t=this.tierBelow(Math.max(1,Math.round(Math.log2(e/this.targetMs))));if(t&&this.onDowngrade)return this.onDowngrade(t,uc),this._cooldown=3,!0;let n=this.dynamicScale;return this.dynamicScale=uc,this._cooldown=2,Math.abs(n-this.dynamicScale)>1e-4}tick(e){if(this.history[this.historyIndex%this.history.length]=e,this.historyIndex++,!this.adaptive||(this._count<sc&&(this._window[this._count]=e),this._acc+=e,this._count++,this._cooldown-=e/1e3,this._count<lc)||this._count<sc&&this._acc<cc)return!1;let t=this._count,n=this._acc/t,r=this._median(t);if(this._acc=0,this._count=0,this._cooldown>0)return!1;if(r>this.targetMs*dc)return this._shed(r);let i=this.dynamicScale;if(n>this.targetMs*1.25){let e=this.tierBelow(1);if(this.dynamicScale<=.56&&e&&this.onDowngrade)return this.onDowngrade(e,1),this._cooldown=4,!0;this.dynamicScale=Math.max(uc,this.dynamicScale-.09),this._cooldown=.9}else n<this.targetMs*.68&&(this.dynamicScale=Math.min(1,this.dynamicScale+.045),this._cooldown=1.5);return Math.abs(i-this.dynamicScale)>1e-4}get averageMs(){let e=Math.min(this.historyIndex,this.history.length);if(!e)return 0;let t=0;for(let n=0;n<e;n++)t+=this.history[n];return t/e}};function pc(e=``){let t=navigator.userAgent;if(/Android|iPhone|iPad|iPod|Mobile/i.test(t))return`low`;let n=String(e).toLowerCase(),r=(...e)=>e.some(e=>n.includes(e));if(r(`swiftshader`,`llvmpipe`,`software`))return`potato`;if(/rtx\s*(40|50)\d\d/.test(n)||r(`rtx 4090`,`rtx 4080`,`rtx 5090`,`rtx 5080`))return`ultra`;if(r(`rtx`,`radeon rx 7`,`radeon rx 6`,`radeon rx 9`,`apple m3`,`apple m4`,`apple m2 max`,`apple m1 max`,`apple m2 pro`,`apple m3 pro`)||r(`geforce`,`radeon`,`apple m1`,`apple m2`,`arc a`))return`high`;if(r(`uhd graphics`,`hd graphics`,`iris`,`vega 3`,`vega 8`,`adreno`,`mali`))return`low`;if(r(`intel`))return`medium`;let i=navigator.deviceMemory||8,a=navigator.hardwareConcurrency||8;return i>=8&&a>=12?`high`:i>=8&&a>=6?`medium`:`low`}var mc=new Or;mc.setAttribute(`position`,new _r(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),mc.setAttribute(`uv`,new _r(new Float32Array([0,0,2,0,0,2]),2)),mc.boundingSphere=new dn(new K,4);var hc=new Oi(-1,1,1,-1,0,1),gc=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4( position.xy, 0.0, 1.0 );
}`,Q=class{constructor(e,t={},n={}){this.material=new As({name:n.name||`FullScreenPass`,glslVersion:Ve,vertexShader:`precision highp float;\nprecision highp int;\nin vec3 position;\nin vec2 uv;\n${gc}`,fragmentShader:`precision highp float;\nprecision highp int;\nprecision highp sampler2D;\nprecision highp sampler3D;\nprecision highp sampler2DArray;\n${e}`,uniforms:t,defines:n.defines||{},depthTest:!1,depthWrite:!1,blending:n.blending===void 0?0:n.blending,transparent:n.blending!==void 0&&n.blending!==0}),this.mesh=new Br(mc,this.material),this.mesh.frustumCulled=!1,this.scene=new Ds,this.scene.add(this.mesh)}get uniforms(){return this.material.uniforms}set(e,t){let n=this.material.uniforms[e];return n&&(n.value=t),this}define(e,t){return this.material.defines[e]!==t&&(this.material.defines[e]=t,this.material.needsUpdate=!0),this}render(e,t=null,n=!1){let r=e.getRenderTarget(),i=e.autoClear;e.autoClear=n,e.setRenderTarget(t),e.render(this.scene,hc),e.setRenderTarget(r),e.autoClear=i}dispose(){this.material.dispose()}};function $(e,t,n={}){let r=new Bt(Math.max(1,e|0),Math.max(1,t|0),{type:n.type||1016,format:n.format||1023,minFilter:n.minFilter||1006,magFilter:n.magFilter||1006,wrapS:n.wrap||1001,wrapT:n.wrap||1001,depthBuffer:!!n.depthBuffer,stencilBuffer:!1,generateMipmaps:!!n.mipmaps,count:n.count||1});if(r.texture.name=n.name||`rt`,n.anisotropy&&(r.texture.anisotropy=n.anisotropy),n.count>1)for(let e=0;e<n.count;e++)r.textures[e].name=`${n.name||`rt`}[${e}]`,r.textures[e].minFilter=n.minFilter||1006,r.textures[e].magFilter=n.magFilter||1006,r.textures[e].wrapS=n.wrap||1001,r.textures[e].wrapT=n.wrap||1001,r.textures[e].generateMipmaps=!!n.mipmaps,n.anisotropy&&(r.textures[e].anisotropy=n.anisotropy);return r}var _c=class{constructor(e,t,n={}){this.a=$(e,t,{...n,name:(n.name||`pp`)+`A`}),this.b=$(e,t,{...n,name:(n.name||`pp`)+`B`})}swap(){let e=this.a;this.a=this.b,this.b=e}get read(){return this.a}get write(){return this.b}setSize(e,t){this.a.setSize(e,t),this.b.setSize(e,t)}dispose(){this.a.dispose(),this.b.dispose()}},vc=`
#ifndef NOISE_GLSL
#define NOISE_GLSL 1

float hash11(float p){ p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash12(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
vec3 hash33(vec3 p3){ p3 = fract(p3 * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yxx) * p3.zyx); }
vec3 hash32(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yxz + 33.33); return fract((p3.xxy + p3.yzz) * p3.zyx); }

// ------------------------------------------------------------- value noise
float vnoise2(vec2 x){
  vec2 i = floor(x), f = fract(x);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i), b = hash12(i + vec2(1,0)), c = hash12(i + vec2(0,1)), d = hash12(i + vec2(1,1));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float vnoise3(vec3 x){
  vec3 i = floor(x), f = fract(x);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float n000 = hash13(i + vec3(0,0,0)), n100 = hash13(i + vec3(1,0,0));
  float n010 = hash13(i + vec3(0,1,0)), n110 = hash13(i + vec3(1,1,0));
  float n001 = hash13(i + vec3(0,0,1)), n101 = hash13(i + vec3(1,0,1));
  float n011 = hash13(i + vec3(0,1,1)), n111 = hash13(i + vec3(1,1,1));
  return mix(mix(mix(n000,n100,u.x), mix(n010,n110,u.x), u.y),
             mix(mix(n001,n101,u.x), mix(n011,n111,u.x), u.y), u.z);
}

// ----------------------------------------------------- tileable perlin 3D
vec3 tileHash33(vec3 p, float period){
  p = mod(p, vec3(period));
  return normalize(hash33(p) * 2.0 - 1.0);
}
float perlin3Tiled(vec3 x, float period){
  vec3 i = floor(x), f = fract(x);
  vec3 u = f*f*f*(f*(f*6.0-15.0)+10.0);
  float n = 0.0;
  for (int dz = 0; dz <= 1; dz++)
  for (int dy = 0; dy <= 1; dy++)
  for (int dx = 0; dx <= 1; dx++) {
    vec3 o = vec3(float(dx), float(dy), float(dz));
    vec3 g = tileHash33(i + o, period);
    float w = mix(1.0-u.x, u.x, o.x) * mix(1.0-u.y, u.y, o.y) * mix(1.0-u.z, u.z, o.z);
    n += w * dot(g, f - o);
  }
  return n;
}
float perlinFbm3(vec3 p, float period, int octaves){
  float f = 0.0, amp = 0.5, per = period;
  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    f += amp * perlin3Tiled(p, per);
    p *= 2.0; per *= 2.0; amp *= 0.5;
  }
  return f;
}

// ------------------------------------------------------ tileable worley 3D
float worley3Tiled(vec3 p, float cells){
  p *= cells;
  vec3 i = floor(p), f = fract(p);
  float minDist = 1e9;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 o = vec3(float(x), float(y), float(z));
    vec3 cell = mod(i + o, vec3(cells));
    vec3 pt = o + hash33(cell);
    minDist = min(minDist, dot(pt - f, pt - f));
  }
  return clamp(sqrt(minDist), 0.0, 1.0);
}
float worleyFbm3(vec3 p, float cells){
  return worley3Tiled(p, cells) * 0.625
       + worley3Tiled(p, cells * 2.0) * 0.25
       + worley3Tiled(p, cells * 4.0) * 0.125;
}

// -------------------------------------------------------- tileable worley 2D
float worley2Tiled(vec2 p, float cells){
  p *= cells;
  vec2 i = floor(p), f = fract(p);
  float minDist = 1e9;
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec2 o = vec2(float(x), float(y));
    vec2 cell = mod(i + o, vec2(cells));
    vec2 pt = o + hash22(cell);
    minDist = min(minDist, dot(pt - f, pt - f));
  }
  return clamp(sqrt(minDist), 0.0, 1.0);
}
float vnoise2Tiled(vec2 x, float period){
  vec2 i = floor(x), f = fract(x);
  vec2 u = f*f*(3.0-2.0*f);
  float a = hash12(mod(i, period));
  float b = hash12(mod(i + vec2(1,0), period));
  float c = hash12(mod(i + vec2(0,1), period));
  float d = hash12(mod(i + vec2(1,1), period));
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}
float fbm2Tiled(vec2 p, float period, int octaves){
  float f = 0.0, amp = 0.5, per = period;
  for (int i = 0; i < 8; i++) {
    if (i >= octaves) break;
    f += amp * vnoise2Tiled(p * per / period, per);
    per *= 2.0; amp *= 0.5;
  }
  return f;
}

// Interleaved gradient noise — cheap per-pixel dithering
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

// Ordered 4x4 dither. Every 4x4 tile carries the sixteen values of [0,1) once,
// so averaging a tile is a stratified estimate rather than a random one.
float bayer4(vec2 p){
  ivec2 i = ivec2(mod(floor(p), 4.0));
  int b = ((i.x & 1) << 3) | ((i.y & 1) << 2) | (i.x & 2) | ((i.y & 2) >> 1);
  return (float(b) + 0.5) / 16.0;
}
float ignTemporal(vec2 p, float frame){
  p += 5.588238 * fract(frame * 0.6180339887);
  return ign(p);
}

#endif
`,yc=`
${vc}
in vec2 vUv;
layout(location = 0) out vec4 oCol;
void main(){
  vec2 p = vUv;
  // clustered bubble rafts
  float w1 = 1.0 - worley2Tiled(p, 6.0);
  float w2 = 1.0 - worley2Tiled(p, 14.0);
  float w3 = 1.0 - worley2Tiled(p, 32.0);
  float w4 = 1.0 - worley2Tiled(p, 72.0);

  float clusters = clamp(w1 * 0.55 + w2 * 0.3 + w3 * 0.18, 0.0, 1.0);
  clusters = pow(clusters, 1.35);

  float bubbles = clamp(w3 * 0.5 + w4 * 0.7, 0.0, 1.0);
  bubbles = smoothstep(0.32, 0.92, bubbles);

  float fbm = fbm2Tiled(p, 8.0, 6);
  float streak = fbm2Tiled(vec2(p.x * 0.35, p.y * 3.0), 8.0, 5);

  // dissolve mask drives foam erosion over time
  float dissolve = clamp(fbm * 0.6 + w2 * 0.4, 0.0, 1.0);

  oCol = vec4(clusters, bubbles, clamp(fbm * 1.15, 0.0, 1.0), dissolve * 0.75 + streak * 0.25);
}
`,bc=`
${vc}
uniform float uRes;
uniform float uSlope;
in vec2 vUv;
layout(location = 0) out vec4 oCol;
float h(vec2 p){
  float a = fbm2Tiled(p, 11.0, 5);
  float b = fbm2Tiled(p + vec2(3.71, 1.29), 26.0, 4);
  // A trace of cellular structure for the dimpled look of a wind-ruffled
  // surface, rounded off hard so it contributes shape and not creases.
  float c = smoothstep(0.10, 0.95, 1.0 - worley2Tiled(p, 30.0));
  return a * 0.56 + b * 0.30 + c * 0.14;
}
void main(){
  vec2 p = vUv;
  float e = 1.5 / uRes;
  float gx = (h(p + vec2(e, 0.0)) - h(p - vec2(e, 0.0))) / (2.0 * e);
  float gy = (h(p + vec2(0.0, e)) - h(p - vec2(0.0, e))) / (2.0 * e);
  vec3 n = normalize(vec3(-gx * uSlope, 1.0, -gy * uSlope));
  oCol = vec4(n * 0.5 + 0.5, h(p));
}
`,xc=`
${vc}
uniform float uRes;
uniform float uTilesX;
in vec2 vUv;
layout(location = 0) out vec4 oCol;
void main(){
  vec2 px = floor(vUv * vec2(uRes * uTilesX, uRes));
  float tileX = floor(px.x / uRes);
  float tileY = floor(px.y / uRes);
  float z = tileX + tileY * uTilesX;
  vec3 uvw = vec3((mod(px.x, uRes) + 0.5) / uRes, (mod(px.y, uRes) + 0.5) / uRes, (z + 0.5) / uRes);

  // Five octaves from 4 tops out at frequency 64, which is Nyquist for a 128^3
  // volume. Seven ran to 256: the last two octaves alias into per-texel grit,
  // and once the coverage threshold slices that field the grit becomes
  // single-voxel blobs — a sky of little cubes no erosion pass can smooth.
  float freq = 4.0;
  float perlin = clamp(perlinFbm3(uvw * freq, freq, 5) * 0.5 + 0.5, 0.0, 1.0);

  // billowy worley octaves (inverted so high == dense)
  float w0 = 1.0 - worleyFbm3(uvw, 4.0);
  float w1 = 1.0 - worleyFbm3(uvw, 8.0);
  float w2 = 1.0 - worleyFbm3(uvw, 14.0);
  float w3 = 1.0 - worleyFbm3(uvw, 22.0);

  // Schneider's perlin-worley: dilate the perlin field by the low worley so the
  // result keeps perlin's connectedness with worley's cauliflower edges.
  float perlinWorley = w0 + perlin * (1.0 - w0);

  oCol = vec4(clamp(perlinWorley, 0.0, 1.0), w1, w2, w3);
}
`,Sc=`
${vc}
uniform float uRes;
uniform float uTilesX;
in vec2 vUv;
layout(location = 0) out vec4 oCol;
void main(){
  vec2 px = floor(vUv * vec2(uRes * uTilesX, uRes));
  float tileX = floor(px.x / uRes);
  float tileY = floor(px.y / uRes);
  float z = tileX + tileY * uTilesX;
  vec3 uvw = vec3((mod(px.x, uRes) + 0.5) / uRes, (mod(px.y, uRes) + 0.5) / uRes, (z + 0.5) / uRes);
  float w0 = 1.0 - worleyFbm3(uvw, 3.0);
  float w1 = 1.0 - worleyFbm3(uvw, 6.0);
  float w2 = 1.0 - worleyFbm3(uvw, 11.0);
  oCol = vec4(w0, w1, w2, (w0 + w1 + w2) / 3.0);
}
`,Cc=`
${vc}
in vec2 vUv;
layout(location = 0) out vec4 oCol;

void main(){
  vec2 p = vUv;

  // Synoptic scale: broad fronts and clear lanes. Ridged noise gives the long
  // filamentary bands a satellite image actually shows, rather than the
  // isotropic blobs a plain fbm produces. The ridge is smoothed because a bare
  // absolute value has a crease along its zero set, and a crease in coverage
  // becomes a dead-straight edge to the cloud deck kilometres long.
  float f1 = fbm2Tiled(p, 4.0, 5);
  float f2 = fbm2Tiled(p + vec2(3.7, 1.3), 6.0, 5);
  float r = f2 * 2.0 - 1.0;
  float band = 1.0 - sqrt(r * r + 0.035);
  float synoptic = clamp(f1 * 0.62 + band * 0.55 - 0.10, 0.0, 1.0);

  // Mesoscale cells inside a system, with worley to give them discrete edges.
  float cells = 1.0 - worley2Tiled(p + vec2(0.41, 0.77), 9.0);
  float meso = clamp(fbm2Tiled(p * 1.0 + vec2(9.1, 4.4), 11.0, 4) * 0.7 + cells * 0.5, 0.0, 1.0);

  // Type: the deepest, most persistent parts of a system grow towers.
  float type = clamp(smoothstep(0.42, 0.86, synoptic) * 0.8
                   + fbm2Tiled(p + vec2(6.3, 2.9), 7.0, 3) * 0.5, 0.0, 1.0);

  // Convective cores: sparse, small, and only inside an active region.
  float core = smoothstep(0.55, 0.95, 1.0 - worley2Tiled(p + vec2(2.2, 8.8), 14.0));
  core *= smoothstep(0.35, 0.8, synoptic);

  oCol = vec4(synoptic, meso, type, core);
}
`,wc=`
${vc}
in vec2 vUv;
layout(location = 0) out vec4 oCol;
void main(){
  float e = 1.0 / 256.0;
  float n1 = fbm2Tiled(vUv + vec2(0.0, e), 6.0, 4);
  float n2 = fbm2Tiled(vUv - vec2(0.0, e), 6.0, 4);
  float n3 = fbm2Tiled(vUv + vec2(e, 0.0), 6.0, 4);
  float n4 = fbm2Tiled(vUv - vec2(e, 0.0), 6.0, 4);
  vec2 curl = vec2(n1 - n2, n4 - n3) / (2.0 * e);
  curl = normalize(curl + 1e-6) * 0.5 + 0.5;
  oCol = vec4(curl, fbm2Tiled(vUv, 12.0, 5), fbm2Tiled(vUv, 3.0, 4));
}
`;function Tc(t,n,r,i,a={},o=l){let s=$(r,i,{type:o,wrap:e,name:`bake`}),c=new Q(n,a,{name:`bake`});return c.render(t,s),c.dispose(),s}function Ec(e,t,n=.02){let r=[],i=[];for(let a=0;a<4;a++){let o=new Uint32Array(256);for(let n=0;n<t;n++)o[e[n*4+a]]++;let s=0,c=0,l=255;for(let e=0;e<256;e++)if(s+=o[e],s>=t*n){c=e;break}s=0;for(let e=255;e>=0;e--)if(s+=o[e],s>=t*n){l=e;break}l<=c&&(l=Math.min(255,c+1)),r.push(c/255),i.push(l/255)}return{lo:r,hi:i}}function Dc(t,n,r,i,a){let s=r*i,c=r*a,u=new Uint8Array(s*c*4);t.readRenderTargetPixels(n,0,0,s,c,u);let d=Ec(u,s*c),f=new Uint8Array(r*r*r*4);for(let e=0;e<r;e++){let t=e%i,n=Math.floor(e/i);for(let i=0;i<r;i++){let a=((n*r+i)*s+t*r)*4,o=(e*r+i)*r*4;f.set(u.subarray(a,a+r*4),o)}}let p=new Ht(f,r,r,r);return p.format=C,p.type=l,p.minFilter=o,p.magFilter=o,p.wrapS=p.wrapT=p.wrapR=e,p.unpackAlignment=1,p.needsUpdate=!0,p.userData.percentiles=d,p}async function Oc(t,n=()=>{}){let r={},i=()=>new Promise(e=>setTimeout(e,0)),a=Math.min(16,t.capabilities.getMaxAnisotropy());n(`baking foam & bubble rafts`),await i();let o=Tc(t,yc,2048,2048);o.texture.wrapS=o.texture.wrapT=e,o.texture.minFilter=c,o.texture.generateMipmaps=!0,o.texture.anisotropy=a,o.texture.needsUpdate=!0,r.foam=o.texture,r._foamRT=o,n(`baking micro-ripple normals`),await i();let s=1024,l=Tc(t,bc,s,s,{uRes:{value:s},uSlope:{value:.03}});l.texture.wrapS=l.texture.wrapT=e,l.texture.minFilter=c,l.texture.generateMipmaps=!0,l.texture.anisotropy=a,l.texture.needsUpdate=!0,r.ripple=l.texture,r._rippleRT=l,n(`baking curl turbulence field`),await i();let u=Tc(t,wc,256,256);u.texture.wrapS=u.texture.wrapT=e,r.curl=u.texture,r._curlRT=u,n(`baking synoptic weather map`),await i();let d=Tc(t,Cc,1024,1024);d.texture.wrapS=d.texture.wrapT=e,d.texture.minFilter=c,d.texture.generateMipmaps=!0,d.texture.needsUpdate=!0,r.weather=d.texture,r._weatherRT=d,n(`baking volumetric cloud shape (128³)`),await i();let f=Tc(t,xc,2048,1024,{uRes:{value:128},uTilesX:{value:16}});r.cloudShape=Dc(t,f,128,16,8),f.dispose(),n(`baking volumetric cloud detail (32³)`),await i();let p=Tc(t,Sc,256,128,{uRes:{value:32},uTilesX:{value:8}});return r.cloudDetail=Dc(t,p,32,8,4),p.dispose(),r}var kc=9.80665,Ac=`
vec2 cmul(vec2 a, vec2 b){ return vec2(a.x*b.x - a.y*b.y, a.x*b.y + a.y*b.x); }
vec2 cconj(vec2 a){ return vec2(a.x, -a.y); }
const float PI = 3.14159265358979323846;
`;function jc(t,n=1337){let i=n>>>0,a=()=>(i^=i<<13,i>>>=0,i^=i>>>17,i^=i<<5,i>>>=0,(i>>>8)/16777216),o=t*t*4,s=new Float32Array(o);for(let e=0;e<o;e+=2){let t=Math.max(a(),1e-7),n=a(),r=Math.sqrt(-2*Math.log(t));s[e]=r*Math.cos(2*Math.PI*n),s[e+1]=r*Math.sin(2*Math.PI*n)}let c=new Os(s,t,t,C,h);return c.minFilter=c.magFilter=r,c.wrapS=c.wrapT=e,c.needsUpdate=!0,c}function Mc(e){let t=Math.log2(e)|0,n=new Float32Array(t*e*4),i=t,a=e=>{let t=0;for(let n=0;n<i;n++)t|=(e>>n&1)<<i-1-n;return t};for(let r=0;r<t;r++)for(let i=0;i<e;i++){let o=1<<r,s=i*(e>>r+1)%e,c=Math.cos(2*Math.PI*s/e),l=Math.sin(2*Math.PI*s/e),u=i%(1<<r+1)<o,d,f;r===0?u?(d=a(i),f=a(i+1)):(d=a(i-1),f=a(i)):u?(d=i,f=i+o):(d=i-o,f=i);let p=(r+i*t)*4;n[p]=c,n[p+1]=l,n[p+2]=d,n[p+3]=f}let o=new Os(n,t,e,C,h);return o.minFilter=o.magFilter=r,o.needsUpdate=!0,o}var Nc=`
${Ac}
uniform sampler2D uNoise;
uniform float uN;
uniform float uLengthScale;
uniform float uCutoffLow;
uniform float uCutoffHigh;
uniform float uDepth;
// per-spectrum: (scale, angle, spreadBlend, swell)
uniform vec4 uS0a;  // scale, angle, spreadBlend, swell
uniform vec4 uS0b;  // alpha, peakOmega, gamma, shortWavesFade
uniform vec4 uS1a;
uniform vec4 uS1b;
in vec2 vUv;
layout(location = 0) out vec4 oH0;

float freq(float k){ return sqrt(9.80665 * k * tanh(min(k * uDepth, 20.0))); }
float freqDeriv(float k){
  float th = tanh(min(k * uDepth, 20.0));
  float ch = cosh(k * uDepth);
  return 9.80665 * (uDepth * k / (ch*ch) + th) / max(2.0 * sqrt(9.80665 * k * th), 1e-9);
}
float normFactor(float s){
  float s2=s*s, s3=s2*s, s4=s3*s;
  if (s < 5.0) return -0.000564*s4 + 0.00776*s3 - 0.044*s2 + 0.192*s + 0.163;
  return -4.80e-8*s4 + 1.07e-5*s3 - 9.53e-4*s2 + 5.90e-2*s + 3.93e-1;
}
float cos2s(float theta, float s){ return normFactor(s) * pow(max(abs(cos(0.5*theta)), 1e-5), 2.0*s); }
float spreadPower(float omega, float peak){
  return omega > peak ? 9.77 * pow(max(omega/peak,1e-5), -2.5)
                      : 6.97 * pow(max(omega/peak,1e-5),  5.0);
}
float tmaCorrection(float omega){
  float oh = omega * sqrt(uDepth / 9.80665);
  if (oh <= 1.0) return 0.5 * oh * oh;
  if (oh <  2.0) return 1.0 - 0.5 * (2.0 - oh) * (2.0 - oh);
  return 1.0;
}
float jonswap(float omega, vec4 sb){
  float alpha = sb.x, peak = sb.y, gamma = sb.z;
  float sigma = omega <= peak ? 0.07 : 0.09;
  float r = exp(-(omega-peak)*(omega-peak) / (2.0*sigma*sigma*peak*peak));
  float invO = 1.0 / max(omega, 1e-5);
  float invO5 = invO*invO*invO*invO*invO;
  return tmaCorrection(omega) * alpha * 9.80665 * 9.80665 * invO5
       * exp(-1.25 * pow(peak * invO, 4.0)) * pow(abs(gamma), r);
}
float directional(float theta, float omega, vec4 sa, vec4 sb){
  float s = spreadPower(omega, sb.y) + 16.0 * tanh(min(omega / max(sb.y,1e-4), 20.0)) * sa.w * sa.w;
  float d = mix(2.0 / PI * cos(theta) * cos(theta), cos2s(theta - sa.y, s), sa.z);
  return d;
}
float shortWaveFade(float k, float fade){ return exp(-fade*fade*k*k); }

float spectrumAt(float kLen, float kAngle, vec4 sa, vec4 sb){
  if (sa.x <= 1e-6) return 0.0;
  float omega = freq(kLen);
  float dOdk  = freqDeriv(kLen);
  return sa.x * jonswap(omega, sb) * directional(kAngle, omega, sa, sb)
       * shortWaveFade(kLen, sb.w) * abs(dOdk) / max(kLen, 1e-6);
}

void main(){
  float N = uN;
  vec2 xy = floor(vUv * N);
  float dk = 2.0 * PI / uLengthScale;
  vec2 k = (xy - N * 0.5) * dk;
  float kLen = length(k);

  vec2 h0 = vec2(0.0);
  if (kLen >= uCutoffLow && kLen <= uCutoffHigh && kLen > 1e-6) {
    float kAngle = atan(k.y, k.x);
    float S = spectrumAt(kLen, kAngle, uS0a, uS0b) + spectrumAt(kLen, kAngle, uS1a, uS1b);
    vec4 g = texture(uNoise, (xy + 0.5) / N);
    h0 = g.xy * sqrt(2.0 * max(S, 0.0) * dk * dk);
  }
  oH0 = vec4(h0, 0.0, 0.0);
}
`,Pc=`
uniform sampler2D uH0;
uniform float uN;
in vec2 vUv;
layout(location = 0) out vec4 oH0;
void main(){
  ivec2 p = ivec2(floor(vUv * uN));
  int N = int(uN);
  ivec2 m = ivec2((N - p.x) % N, (N - p.y) % N);
  vec2 h0k  = texelFetch(uH0, p, 0).xy;
  vec2 h0mk = texelFetch(uH0, m, 0).xy;
  oH0 = vec4(h0k, h0mk.x, -h0mk.y);
}
`,Fc=`
${Ac}
uniform sampler2D uH0;
uniform float uN;
uniform float uLengthScale;
uniform float uTime;
uniform float uDepth;
in vec2 vUv;
layout(location = 0) out vec4 oBuf0;
layout(location = 1) out vec4 oBuf1;

void main(){
  ivec2 p = ivec2(floor(vUv * uN));
  vec4 h0 = texelFetch(uH0, p, 0);
  float dk = 2.0 * PI / uLengthScale;
  vec2 k = (vec2(p) - uN * 0.5) * dk;
  float kLen = max(length(k), 1e-5);
  vec2 kn = k / kLen;

  float omega = sqrt(9.80665 * kLen * tanh(min(kLen * uDepth, 20.0)));
  // quantise to the fundamental frequency so the field loops seamlessly in time
  float phase = omega * uTime;
  vec2 e  = vec2(cos(phase), sin(phase));
  vec2 ec = vec2(e.x, -e.y);

  vec2 h  = cmul(h0.xy, e) + cmul(h0.zw, ec);
  vec2 ih = vec2(-h.y, h.x);

  vec2 Dx    = ih * kn.x;
  vec2 Dz    = ih * kn.y;
  vec2 Dy    = h;
  vec2 DyDx  = ih * k.x;
  vec2 DyDz  = ih * k.y;
  vec2 DxDx  = -h * k.x * kn.x;
  vec2 DzDz  = -h * k.y * kn.y;
  vec2 DxDz  = -h * k.y * kn.x;

  // pack pairs of real fields as f + i*g
  oBuf0 = vec4(Dx.x - Dz.y,    Dx.y + Dz.x,    Dy.x   - DyDx.y, Dy.y   + DyDx.x);
  oBuf1 = vec4(DyDz.x - DxDx.y, DyDz.y + DxDx.x, DzDz.x - DxDz.y, DzDz.y + DxDz.x);
}
`,Ic=`
${Ac}
uniform sampler2D uButterfly;
uniform sampler2D uSrc0;
uniform sampler2D uSrc1;
uniform int uStage;
uniform int uVertical;
layout(location = 0) out vec4 o0;
layout(location = 1) out vec4 o1;

void main(){
  ivec2 p = ivec2(gl_FragCoord.xy);
  int idx = (uVertical == 1) ? p.y : p.x;
  vec4 bf = texelFetch(uButterfly, ivec2(uStage, idx), 0);
  ivec2 a, b;
  if (uVertical == 1) { a = ivec2(p.x, int(bf.z)); b = ivec2(p.x, int(bf.w)); }
  else                { a = ivec2(int(bf.z), p.y); b = ivec2(int(bf.w), p.y); }
  vec2 w = bf.xy;

  vec4 pa = texelFetch(uSrc0, a, 0);
  vec4 pb = texelFetch(uSrc0, b, 0);
  o0 = vec4(pa.rg + cmul(w, pb.rg), pa.ba + cmul(w, pb.ba));

  vec4 qa = texelFetch(uSrc1, a, 0);
  vec4 qb = texelFetch(uSrc1, b, 0);
  o1 = vec4(qa.rg + cmul(w, qb.rg), qa.ba + cmul(w, qb.ba));
}
`,Lc=`
uniform sampler2D uBuf0;
uniform sampler2D uBuf1;
uniform sampler2D uPrevTurb;
uniform float uLambda;
uniform float uFoamBias;
uniform float uSteepBias;
uniform float uCrestK;
uniform vec2  uWindDir;
uniform float uFoamMul;
uniform float uFoamDecay;
uniform float uBubbleDecay;
uniform float uDt;
uniform float uN;
uniform float uLengthScale;
in vec2 vUv;
layout(location = 0) out vec4 oDisp;
layout(location = 1) out vec4 oDeriv;
layout(location = 2) out vec4 oTurb;

void main(){
  ivec2 p = ivec2(gl_FragCoord.xy);
  float perm = ((p.x + p.y) % 2 == 0) ? 1.0 : -1.0;

  vec4 b0 = texelFetch(uBuf0, p, 0) * perm;
  vec4 b1 = texelFetch(uBuf1, p, 0) * perm;

  float Dx   = b0.x, Dz   = b0.y, Dy   = b0.z, DyDx = b0.w;
  float DyDz = b1.x, DxDx = b1.y, DzDz = b1.z, DxDz = b1.w;

  float lx = uLambda * DxDx;
  float lz = uLambda * DzDz;
  float lxz = uLambda * DxDz;
  float jacobian = (1.0 + lx) * (1.0 + lz) - lxz * lxz;

  oDisp  = vec4(uLambda * Dx, Dy, uLambda * Dz, jacobian);
  oDeriv = vec4(DyDx, DyDz, lx, lz);

  // ---- turbulence / foam accumulation (world-tiled, so it wraps naturally)
  //
  // Two independent breaking criteria, because neither alone covers the sea.
  //
  // Folding (Jacobian near zero) catches the plunging breaker whose face has
  // gone vertical, but it only fires when the horizontal displacement is pushed
  // past the point of self-intersection — which a physically-scaled chop never
  // reaches, so on its own it leaves a gale looking glassy.
  //
  // Steepness is what actually limits an ocean wave: past roughly H/L = 1/7 the
  // crest can no longer support itself and spills. That threshold lives in the
  // surface slope, which the FFT gives us directly, and it fires on the whole
  // spilling-breaker population that folding misses.
  vec4 prev = texture(uPrevTurb, vUv);
  float fold = smoothstep(uFoamBias, uFoamBias - 0.30, jacobian);

  vec2 grad = vec2(DyDx, DyDz);
  float slope = length(grad);
  // Waves spill down their leeward face, so weight the injection toward crests
  // whose front is turned away from the wind rather than ringing the whole crest.
  float lee = 0.55 + 0.45 * clamp(dot(grad / max(slope, 1e-4), uWindDir), -1.0, 1.0);
  // Steepness alone also fires on the steep flank halfway down a big wave, which
  // paints broad blobs. Air is only entrained at the top, so require the water
  // to be high in its own band as well. uCrestK turns the cascade's elevation
  // into the same units as its slope, making the gate scale-free.
  float above = smoothstep(0.10, 0.75, Dy * uCrestK);
  float steep = smoothstep(uSteepBias, uSteepBias + 0.30, slope) * lee * above;

  fold = max(fold, steep);

  // Entrainment is a *rate*, not a level. Snapping the accumulator to 1 the
  // instant a texel folds means every texel the wave field sweeps over pins at
  // full white and the decay never gets ahead of it, which turns a storm sea
  // into a snowfield. Integrating a rate instead gives an equilibrium coverage
  // of rate*dutyCycle/decay, so only water that breaks repeatedly goes white.
  float foam = prev.r * exp(-uDt * uFoamDecay) + fold * uFoamMul * uDt;
  foam = max(foam - uDt * 0.015, 0.0);
  float bub  = prev.g * exp(-uDt * uBubbleDecay) + fold * uFoamMul * uDt * 0.55;
  // crest energy is the instantaneous folding, used for spray emission
  float crest = fold;
  float spray = max(prev.a * exp(-uDt * 6.0), smoothstep(0.45, 0.95, fold));

  oTurb = vec4(clamp(foam, 0.0, 1.0), clamp(bub, 0.0, 1.0), crest, spray);
}
`,Rc=[.55,1,.22],zc=[.55,.9,1.1],Bc=class{constructor(t,n,i,a,s,l,u){this.N=n,this.lengthScale=i,this.cutLow=a,this.cutHigh=s;let d={type:h,minFilter:r,magFilter:r};this.h0=$(n,n,{...d,name:`h0`}),this.h0k=$(n,n,{...d,name:`h0k`}),this.pp0=new _c(n,n,{...d,name:`fft0`}),this.pp1=new _c(n,n,{...d,name:`fft1`}),this.mrtA=$(n,n,{...d,name:`mrtA`,count:2}),this.mrtB=$(n,n,{...d,name:`mrtB`,count:2});let f={type:g,wrap:e,minFilter:c,magFilter:o,mipmaps:!0,anisotropy:Math.min(16,t.capabilities.getMaxAnisotropy())};this.out=$(n,n,{...f,name:`oceanOut`,count:3}),this.turbPrev=$(n,n,{type:g,wrap:e,minFilter:o,magFilter:o,name:`turbPrev`}),this.spectrumPass=new Q(Nc,{uNoise:{value:l},uN:{value:n},uLengthScale:{value:i},uCutoffLow:{value:a},uCutoffHigh:{value:s},uDepth:{value:500},uS0a:{value:new G},uS0b:{value:new G},uS1a:{value:new G},uS1b:{value:new G}},{name:`spectrum`}),this.conjPass=new Q(Pc,{uH0:{value:this.h0.texture},uN:{value:n}},{name:`conjugate`}),this.timePass=new Q(Fc,{uH0:{value:this.h0k.texture},uN:{value:n},uLengthScale:{value:i},uTime:{value:0},uDepth:{value:500}},{name:`timeSpectrum`}),this.butterflyPass=new Q(Ic,{uButterfly:{value:u},uSrc0:{value:null},uSrc1:{value:null},uStage:{value:0},uVertical:{value:0}},{name:`butterfly`}),this.assemblePass=new Q(Lc,{uBuf0:{value:null},uBuf1:{value:null},uPrevTurb:{value:this.turbPrev.texture},uLambda:{value:1},uFoamBias:{value:.85},uSteepBias:{value:.5},uCrestK:{value:16*Math.PI/i},uWindDir:{value:new H(1,0)},uFoamMul:{value:1.2},uFoamDecay:{value:.35},uBubbleDecay:{value:.14},uDt:{value:.016},uN:{value:n},uLengthScale:{value:i}},{name:`assemble`}),this.copyTurb=new Q(`
      uniform sampler2D uSrc; in vec2 vUv; layout(location=0) out vec4 o;
      void main(){ o = texture(uSrc, vUv); }`,{uSrc:{value:this.out.textures[2]}},{name:`copyTurb`}),this.stages=Math.log2(n)|0}get displacement(){return this.out.textures[0]}get derivatives(){return this.out.textures[1]}get turbulence(){return this.out.textures[2]}updateSpectrum(e,t,n,r,i,a){let o=this.spectrumPass.uniforms;o.uS0a.value.copy(t),o.uS0b.value.copy(n),o.uS1a.value.copy(r),o.uS1b.value.copy(i),o.uDepth.value=a,this.timePass.uniforms.uDepth.value=a,this.spectrumPass.render(e,this.h0),this.conjPass.render(e,this.h0k)}step(e,t,n,r,i,a=1){this.timePass.set(`uTime`,t).render(e,this.mrtA);let o=this.mrtA,s=this.mrtB,c=this.butterflyPass;for(let t=0;t<2;t++){c.set(`uVertical`,t);for(let t=0;t<this.stages;t++){c.set(`uStage`,t),c.set(`uSrc0`,o.textures[0]),c.set(`uSrc1`,o.textures[1]),c.render(e,s);let n=o;o=s,s=n}}let l=this.assemblePass;l.set(`uBuf0`,o.textures[0]),l.set(`uBuf1`,o.textures[1]),l.set(`uLambda`,r),l.set(`uFoamBias`,i.bias),l.set(`uSteepBias`,i.steepBias/Math.max(a,.35)),l.uniforms.uWindDir.value.copy(i.windDir),l.set(`uFoamMul`,i.mul*a),l.set(`uFoamDecay`,i.decay/Math.max(a,.15)),l.set(`uBubbleDecay`,i.bubbleDecay),l.set(`uDt`,n),l.render(e,this.out),this.copyTurb.render(e,this.turbPrev)}dispose(){[this.h0,this.h0k,this.mrtA,this.mrtB,this.out,this.turbPrev].forEach(e=>e.dispose()),this.pp0.dispose(),this.pp1.dispose(),[this.spectrumPass,this.conjPass,this.timePass,this.butterflyPass,this.assemblePass,this.copyTurb].forEach(e=>e.dispose())}},Vc=class e{constructor(e,t={}){this.renderer=e,this.N=t.size||256,this.lengthScales=t.lengthScales||[4099,389,41.3],this.depth=900,this.time=0,this.timeScale=1,this.anisotropy=Math.min(16,e.capabilities.getMaxAnisotropy()),this.noise=jc(this.N,12648430),this.butterfly=Mc(this.N),this._windDir=new H(1,0);let n=2*Math.PI/this.lengthScales[1]*4,r=2*Math.PI/this.lengthScales[2]*4,i=[[1e-4,n],[n,r],[r,9999]];this.cascades=this.lengthScales.map((t,n)=>new Bc(e,this.N,t,i[n][0],i[n][1],this.noise,this.butterfly)),this.params={windSpeed:9,windDir:.6,fetch:22e4,swellHs:1.4,swellPeriod:11,swellDir:.9,swellGamma:6,swellCutoff:14,spread:.72,choppiness:1.35,amplitude:1,shortWaveFade:.0065,peakEnhancement:3.3,foamBias:.5,foamMul:1.35,foamDecay:.35,bubbleDecay:.12},this._s=[new G,new G,new G,new G],this._dirty=!0,this._sig=``}markDirty(){this._dirty=!0}get significantWaveHeight(){return this.hs||0}static _jonswapParams(e,t){let n=kc,r=Math.max(e,.5),i=22e3*r*r/n,a=Math.max(Math.min(t,i),400);return{alpha:.076*(r*r/(a*n))**.22,peakOmega:Math.max(22*(n*n/(r*a))**(1/3),.3)}}static _m0(e,t,n){let r=kc,i=0,a=.08,o=Math.log(14/a);for(let s=0;s<128;s++){let c=a*Math.exp(o*(s+.5)/128),l=c*o/128,u=c<=t?.07:.09,d=Math.exp(-((c-t)**2)/(2*u*u*t*t)),f=e*r*r/c**5*Math.exp(-1.25*(t/c)**4)*n**+d;i+=f*l}return i}_buildSpectra(){let t=this.params,n=e._jonswapParams(t.windSpeed,t.fetch),r=Math.max(t.swellPeriod,3),i=Math.max(t.swellGamma,1),a=Math.max(t.swellHs,0),o=5.061*(a*a/(r*r*r*r))*(1-.287*Math.log(i)),s=2*Math.PI/r,c=e._m0(n.alpha,n.peakOmega,t.peakEnhancement)*t.amplitude,l=e._m0(o,s,i)*t.amplitude;this.hs=4*Math.sqrt(Math.max(c+l,1e-9)),this.windHs=4*Math.sqrt(Math.max(c,1e-9)),this.swellHsActual=4*Math.sqrt(Math.max(l,1e-9)),this.peakPeriod=2*Math.PI/n.peakOmega,this._s[0].set(t.amplitude,t.windDir,t.spread,0),this._s[1].set(n.alpha,n.peakOmega,t.peakEnhancement,t.shortWaveFade),this._s[2].set(a>.001?t.amplitude:0,t.swellDir,1,1),this._s[3].set(o,s,i,t.swellCutoff)}update(e){let t=this.renderer;this.time+=e*this.timeScale;let n=this.params,r=`${n.windSpeed.toFixed(2)}|${n.windDir.toFixed(3)}|${n.swellHs.toFixed(3)}|${n.swellDir.toFixed(3)}|${n.swellPeriod.toFixed(2)}|${n.swellGamma.toFixed(2)}|${n.swellCutoff.toFixed(2)}|${n.spread.toFixed(3)}|${n.amplitude.toFixed(3)}|${n.shortWaveFade.toFixed(4)}|${n.peakEnhancement.toFixed(2)}|${n.fetch.toFixed(0)}`;if(this._dirty||r!==this._sig){this._sig=r,this._dirty=!1,this._buildSpectra();for(let e of this.cascades)e.updateSpectrum(t,this._s[0],this._s[1],this._s[2],this._s[3],this.depth)}let i={bias:n.foamBias,mul:n.foamMul,decay:n.foamDecay,bubbleDecay:n.bubbleDecay,steepBias:n.steepBias??.5,windDir:this._windDir.set(Math.cos(n.windDir??0),Math.sin(n.windDir??0))};for(let r=0;r<this.cascades.length;r++)this.cascades[r].step(t,this.time,e,n.choppiness*(zc[r]??1),i,Rc[r]??1)}bind(e){return e.uOceanDisp0={value:this.cascades[0].displacement},e.uOceanDisp1={value:this.cascades[1].displacement},e.uOceanDisp2={value:this.cascades[2].displacement},e.uOceanDeriv0={value:this.cascades[0].derivatives},e.uOceanDeriv1={value:this.cascades[1].derivatives},e.uOceanDeriv2={value:this.cascades[2].derivatives},e.uOceanTurb0={value:this.cascades[0].turbulence},e.uOceanTurb1={value:this.cascades[1].turbulence},e.uOceanTurb2={value:this.cascades[2].turbulence},e.uOceanScales={value:new K(...this.lengthScales)},e.uOceanTexels={value:this.N},e.uOceanAniso={value:this.anisotropy},e}dispose(){this.cascades.forEach(e=>e.dispose()),this.noise.dispose(),this.butterfly.dispose()}},Hc=`
#ifndef OCEAN_SAMPLE_GLSL
#define OCEAN_SAMPLE_GLSL 1

uniform sampler2D uOceanDisp0, uOceanDisp1, uOceanDisp2;
uniform sampler2D uOceanDeriv0, uOceanDeriv1, uOceanDeriv2;
uniform sampler2D uOceanTurb0, uOceanTurb1, uOceanTurb2;
uniform vec3 uOceanScales;
uniform float uOceanTexels;
uniform float uOceanAniso;
uniform vec3 uCascadeGain;
uniform sampler2D uCurlTex;

uniform vec4 uVortex0, uVortex1, uVortex2, uVortex3;
uniform vec4 uSoliton0, uSoliton0b, uSoliton1, uSoliton1b;
uniform vec4 uRogue, uRogueB;
uniform vec4 uHurricane;
uniform vec2 uWindDir;
uniform float uWindSpeed;
uniform float uGustiness;
uniform float uEarthCurvature;
uniform float uSeaLevel;

const float EARTH_R = 6371000.0;

// ------------------------------------------------------------ current field
// Slowly varying divergence-free-ish flow used to advect the small cascades.
vec2 currentAt(vec2 p, float t) {
  vec2 uv = p * 0.00022 + vec2(t * 0.0009, -t * 0.0006);
  vec4 c = texture(uCurlTex, uv);
  vec2 f = (c.xy * 2.0 - 1.0);
  vec2 uv2 = p * 0.0009 - vec2(t * 0.0021, t * 0.0013);
  vec4 c2 = texture(uCurlTex, uv2);
  f += (c2.xy * 2.0 - 1.0) * 0.45;
  return f;
}

// ------------------------------------------------------------------ vortex
// Returns swirl rotation angle at p and writes the funnel depression.
float vortexField(vec2 p, vec4 v, inout float depression, inout float shear) {
  if (v.w <= 0.0001) return 0.0;
  vec2 d = p - v.xy;
  float r = length(d) + 1e-3;
  float R = max(v.z, 1.0);
  float x = r / R;
  // Rankine-like vortex: solid body inside the core, 1/r outside
  float vt = (x < 1.0) ? x : 1.0 / (x * x * 0.65 + 0.35);
  float env = exp(-x * x * 0.55);
  depression -= v.w * (1.0 / (1.0 + x * x * 2.2)) * 1.0;
  // Foam from shear saturates rather than tracking strength linearly: past a
  // point the surface is already fully broken and cannot get whiter. Without
  // the ceiling a forty metre maelstrom asks for four times full coverage and
  // the spiral arms merge into one disc of white paint.
  shear += vt * env * min(v.w * 0.022, 0.62);
  return vt * env * v.w * 0.09;
}

// ---------------------------------------------------------------- soliton
/**
 * Crest profile of the travelling solitary wave, normalised to a peak of one.
 *
 * x runs along the direction of travel, measured from the crest, so x > 0 is
 * the water the wave has not reached yet and the flank facing that way is the
 * one that breaks.
 *
 * A deep-water soliton is a symmetric sech^2 mound. At the amplitude a tsunami
 * really carries offshore that is a 1-in-40 slope — invisible from any camera
 * you would want to put in the shot, which is exactly why ships ride them out
 * without noticing. What everybody pictures is the shoaling form: the front has
 * run out of depth and stood up while the back is still in deep water.
 * Compressing the leading half of the coordinate reproduces that asymmetry
 * while staying a single smooth function of x, so normals, foam and the CPU
 * mirror all follow from it for free.
 *
 * Keep this in step with Director.eventHeight(), which evaluates the same
 * profile on the CPU for the camera to ride.
 */
float solitonProfile(float x, float w, float steep) {
  float xf = x > 0.0 ? x * (1.0 + steep * 1.35) : x;
  float s = 1.0 / cosh(clamp(xf / w, -12.0, 12.0));
  // Drawdown ahead of the face. The volume standing up in the crest has to come
  // from somewhere, and it comes from the water immediately in front — which is
  // the sea running out before it lands.
  float d = 1.0 / cosh(clamp((x - w * 1.6) / (w * 1.1), -12.0, 12.0));
  return s * s - d * d * 0.16 * steep;
}

float solitonHeight(vec2 p, vec4 s, vec4 sb, out vec2 pushDir, out float crest) {
  pushDir = vec2(0.0); crest = 0.0;
  if (s.w <= 0.001) return 0.0;
  vec2 dir = normalize(s.xy);
  float x = dot(p, dir) - s.z;
  float w = max(sb.x, 1.0);
  // lateral extent so the wave is a finite front, not infinite
  float lateral = dot(p, vec2(-dir.y, dir.x));
  float latEnv = exp(-lateral * lateral / (sb.z * sb.z + 1.0));

  float steep = sb.y;
  float prof = solitonProfile(x, w, steep);
  float h = s.w * prof * latEnv;

  // Overhang. Water near the crest is thrown forward over the face, which is
  // what a wave about to break looks like and what stops the wall reading as a
  // smooth ramp. Concentrating it in the top of the crest — prof squared, which
  // falls to nothing within a wave length — is what keeps it from translating
  // the whole neighbourhood bodily and tearing a hole under the camera.
  float top = clamp(prof, 0.0, 1.0);
  pushDir = dir * (top * top * min(s.w, w * 0.4) * steep * 0.28 * latEnv);

  // Foam belongs on the breaking lip and in the wash running down the face —
  // not spread over the whole shoulder, which reads as a painted slab rather
  // than as water. Keep it to the top of the profile and bias it forward.
  float faceBias = mix(0.25, 1.0, smoothstep(-w * 0.35, w * 0.2, x));
  crest = smoothstep(0.80, 0.985, prof) * latEnv * faceBias;
  return h;
}

// -------------------------------------------------------------- rogue group
float rogueGroup(vec2 p, out vec2 push, out float crest) {
  push = vec2(0.0); crest = 0.0;
  if (uRogue.w <= 0.001) return 0.0;
  vec2 d = p - uRogue.xy;
  float R = max(uRogue.z, 1.0);
  float env = exp(-dot(d, d) / (R * R));
  vec2 dir = normalize(uRogueB.xy + 1e-6);
  float k = 6.28318530718 / max(uRogueB.z, 4.0);
  float phase = dot(d, dir) * k + uRogueB.w;
  float h = 0.0;
  // three-mode Gerstner group -> peaky crest, flat trough
  h += cos(phase) * 1.0;
  h += cos(phase * 1.87 + 1.1) * 0.42;
  h += cos(phase * 0.61 - 0.7) * 0.55;
  h = h / 1.97;
  float peaky = sign(h) * pow(abs(h), 0.72);
  push = dir * (-sin(phase) * env * uRogue.w * 0.45);
  crest = smoothstep(0.55, 1.0, peaky) * env;
  return peaky * env * uRogue.w;
}

// ------------------------------------------------------------- hurricane
// Large rotating swell plus an eye of glassy calm.
float hurricaneField(vec2 p, out vec2 swirl, out float calm) {
  swirl = vec2(0.0); calm = 0.0;
  if (uHurricane.w <= 0.001) return 0.0;
  vec2 d = p - uHurricane.xy;
  float r = length(d) + 1e-3;
  float eye = max(uHurricane.z, 50.0);
  float x = r / eye;
  calm = exp(-x * x * 1.6);
  vec2 tang = vec2(-d.y, d.x) / r;
  float vt = (x < 1.0) ? x * 1.05 : 1.0 / pow(x, 0.55);
  swirl = tang * vt * uHurricane.w;
  // eyewall swell ring
  float ring = exp(-pow((x - 1.25) * 1.4, 2.0));
  return ring * uHurricane.w * 3.0 - calm * uHurricane.w * 0.4;
}

/**
 * Vertical-only disaster displacement. Mirrors oceanModifiers().y, minus the
 * horizontal push and the crest/calm outputs.
 *
 * The projected grid places samples by intersecting view rays with a flat
 * plane. That is a fine approximation for wind waves, which are metres tall,
 * and a terrible one for events that lift the surface by tens of metres: the
 * band of rays that lands on a tsunami is then a fraction of a degree wide, so
 * the wall is drawn by a handful of vertex rows however dense the grid is.
 * Iterating the intersection against this height restores a uniform
 * screen-space distribution, so it needs to be cheap.
 */
float oceanEventHeight(vec2 p) {
  float h = 0.0;

  vec4 vs[4];
  vs[0] = uVortex0; vs[1] = uVortex1; vs[2] = uVortex2; vs[3] = uVortex3;
  for (int i = 0; i < 4; i++) {
    if (vs[i].w <= 0.0001) continue;
    float x = (length(p - vs[i].xy) + 1e-3) / max(vs[i].z, 1.0);
    h -= vs[i].w / (1.0 + x * x * 2.2);
  }

  vec4 ss[2]; vec4 sbs[2];
  ss[0] = uSoliton0; sbs[0] = uSoliton0b;
  ss[1] = uSoliton1; sbs[1] = uSoliton1b;
  for (int i = 0; i < 2; i++) {
    if (ss[i].w <= 0.001) continue;
    vec2 dir = normalize(ss[i].xy);
    float x = dot(p, dir) - ss[i].z;
    float w = max(sbs[i].x, 1.0);
    float lateral = dot(p, vec2(-dir.y, dir.x));
    float latEnv = exp(-lateral * lateral / (sbs[i].z * sbs[i].z + 1.0));
    h += ss[i].w * solitonProfile(x, w, sbs[i].y) * latEnv;
  }

  if (uRogue.w > 0.001) {
    vec2 d = p - uRogue.xy;
    float R = max(uRogue.z, 1.0);
    float env = exp(-dot(d, d) / (R * R));
    vec2 dir = normalize(uRogueB.xy + 1e-6);
    float phase = dot(d, dir) * (6.28318530718 / max(uRogueB.z, 4.0)) + uRogueB.w;
    float g = (cos(phase) + cos(phase * 1.87 + 1.1) * 0.42 + cos(phase * 0.61 - 0.7) * 0.55) / 1.97;
    h += sign(g) * pow(abs(g), 0.72) * env * uRogue.w;
  }

  if (uHurricane.w > 0.001) {
    vec2 d = p - uHurricane.xy;
    float x = (length(d) + 1e-3) / max(uHurricane.z, 50.0);
    float ring = exp(-pow((x - 1.25) * 1.4, 2.0));
    h += ring * uHurricane.w * 3.0 - exp(-x * x * 1.6) * uHurricane.w * 0.4;
  }

  return h;
}

// ------------------------------------------------------- cascade fetching
struct OceanSample {
  vec3 disp;
  float jacobian;
  vec4 turb;       // foam, bubbles, crest, spray
  vec4 deriv;      // dYdx, dYdz, lambdaDxDx, lambdaDzDz
};

vec2 warpCoord(vec2 p, float t, float amount) {
  vec2 flow = currentAt(p, t);
  return p + flow * amount;
}

/** Vertex-side displacement with explicit LOD. */
vec3 oceanDisplacementLod(vec2 p, vec3 lods, out float foamHint) {
  vec3 d = vec3(0.0);
  foamHint = 0.0;
  if (uCascadeGain.x > 0.001) {
    vec4 s = textureLod(uOceanDisp0, p / uOceanScales.x, lods.x);
    d += s.xyz * uCascadeGain.x;
  }
  if (uCascadeGain.y > 0.001 && lods.y < 7.5) {
    vec4 s = textureLod(uOceanDisp1, p / uOceanScales.y, lods.y);
    d += s.xyz * uCascadeGain.y;
  }
  if (uCascadeGain.z > 0.001 && lods.z < 7.5) {
    vec4 s = textureLod(uOceanDisp2, p / uOceanScales.z, lods.z);
    d += s.xyz * uCascadeGain.z;
  }
  return d;
}

/** Full analytic modifier stack, shared by vertex + CPU-side probes. */
vec3 oceanModifiers(vec2 p, float t, out float crestOut, out float calmOut) {
  vec3 d = vec3(0.0);
  crestOut = 0.0;
  calmOut = 0.0;

  float depression = 0.0, shear = 0.0;
  float a0 = vortexField(p, uVortex0, depression, shear);
  float a1 = vortexField(p, uVortex1, depression, shear);
  float a2 = vortexField(p, uVortex2, depression, shear);
  float a3 = vortexField(p, uVortex3, depression, shear);
  d.y += depression;
  crestOut += shear;

  vec2 push; float crest;
  d.y += solitonHeight(p, uSoliton0, uSoliton0b, push, crest);
  d.xz += push; crestOut = max(crestOut, crest);
  d.y += solitonHeight(p, uSoliton1, uSoliton1b, push, crest);
  d.xz += push; crestOut = max(crestOut, crest);

  d.y += rogueGroup(p, push, crest);
  d.xz += push; crestOut = max(crestOut, crest);

  vec2 swirl; float calm;
  d.y += hurricaneField(p, swirl, calm);
  calmOut = calm;

  return d;
}

/** Rotation applied to cascade lookups so vortices actually swirl the water. */
vec2 swirlCoords(vec2 p, float t) {
  vec2 q = p;
  vec4 vs[4];
  vs[0] = uVortex0; vs[1] = uVortex1; vs[2] = uVortex2; vs[3] = uVortex3;
  for (int i = 0; i < 4; i++) {
    vec4 v = vs[i];
    if (v.w <= 0.0001) continue;
    vec2 d = q - v.xy;
    float r = length(d) + 1e-3;
    float R = max(v.z, 1.0);
    float x = r / R;
    float vt = (x < 1.0) ? x : 1.0 / (x * x * 0.6 + 0.4);
    float ang = vt * exp(-x * x * 0.5) * v.w * 0.05 * t;
    float c = cos(ang), s = sin(ang);
    q = v.xy + mat2(c, -s, s, c) * d;
  }
  if (uHurricane.w > 0.001) {
    vec2 d = q - uHurricane.xy;
    float r = length(d) + 1e-3;
    float x = r / max(uHurricane.z, 50.0);
    float vt = (x < 1.0) ? x : 1.0 / pow(max(x, 1e-3), 0.6);
    float ang = vt * uHurricane.w * 0.0015 * t;
    float c = cos(ang), s = sin(ang);
    q = uHurricane.xy + mat2(c, -s, s, c) * d;
  }
  return q;
}

float earthDrop(vec2 p, vec3 camPos) {
  float r2 = dot(p - camPos.xz, p - camPos.xz);
  return uEarthCurvature * r2 / (2.0 * EARTH_R);
}

#endif
`,Uc=`
#ifndef ATMO_COMMON
#define ATMO_COMMON 1

#define PI_A 3.14159265358979323846

const float groundRadiusMM = 6.360;
const float atmosphereRadiusMM = 6.460;

// per-megametre coefficients
const vec3  rayleighScatteringBase = vec3(5.802, 13.558, 33.100);
const float rayleighAbsorptionBase = 0.0;
const float mieScatteringBase = 3.996;
const float mieAbsorptionBase = 4.40;
const vec3  ozoneAbsorptionBase = vec3(0.650, 1.881, 0.085);

uniform float uAtmoTurbidity;   // 1 = clear, up to ~12 in a storm
uniform float uAtmoMieG;
uniform vec3  uAtmoGroundAlbedo;

float rayIntersectSphere(vec3 ro, vec3 rd, float rad) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - rad * rad;
  if (c > 0.0 && b > 0.0) return -1.0;
  float disc = b * b - c;
  if (disc < 0.0) return -1.0;
  if (disc > b * b) return (-b + sqrt(disc));
  return -b - sqrt(disc);
}

void scatteringValues(vec3 pos, out vec3 rayleighScattering, out float mieScattering, out vec3 extinction) {
  float altitudeKM = (length(pos) - groundRadiusMM) * 1000.0;
  float rayleighDensity = exp(-altitudeKM / 8.0);
  float mieDensity = exp(-altitudeKM / 1.2);

  float turb = uAtmoTurbidity;
  rayleighScattering = rayleighScatteringBase * rayleighDensity;
  float rayleighAbsorption = rayleighAbsorptionBase * rayleighDensity;

  mieScattering = mieScatteringBase * turb * mieDensity;
  float mieAbsorption = mieAbsorptionBase * turb * mieDensity;

  vec3 ozoneAbsorption = ozoneAbsorptionBase * max(0.0, 1.0 - abs(altitudeKM - 25.0) / 15.0);

  extinction = rayleighScattering + rayleighAbsorption + mieScattering + mieAbsorption + ozoneAbsorption;
}

float miePhase(float cosTheta) {
  const float scale = 3.0 / (8.0 * PI_A);
  float g = uAtmoMieG;
  float g2 = g * g;
  float num = (1.0 - g2) * (1.0 + cosTheta * cosTheta);
  float denom = (2.0 + g2) * pow(max(1.0 + g2 - 2.0 * g * cosTheta, 1e-4), 1.5);
  return scale * num / denom;
}

float rayleighPhase(float cosTheta) {
  const float k = 3.0 / (16.0 * PI_A);
  return k * (1.0 + cosTheta * cosTheta);
}

// ------------------------------------------------- transmittance LUT lookup
vec3 getValFromTLUT(sampler2D tex, vec3 pos, vec3 sunDir) {
  float height = length(pos);
  vec3 up = pos / height;
  float sunCosZenithAngle = dot(sunDir, up);
  vec2 uv = vec2(
    clamp(0.5 + 0.5 * sunCosZenithAngle, 0.0, 1.0),
    clamp((height - groundRadiusMM) / (atmosphereRadiusMM - groundRadiusMM), 0.0, 1.0));
  return texture(tex, uv).rgb;
}

vec3 getValFromMultiScattLUT(sampler2D tex, vec3 pos, vec3 sunDir) {
  float height = length(pos);
  vec3 up = pos / height;
  float sunCosZenithAngle = dot(sunDir, up);
  vec2 uv = vec2(
    clamp(0.5 + 0.5 * sunCosZenithAngle, 0.0, 1.0),
    clamp((height - groundRadiusMM) / (atmosphereRadiusMM - groundRadiusMM), 0.0, 1.0));
  return texture(tex, uv).rgb;
}

// --------------------------------------------------- sky-view LUT mapping
// Non-linear in view zenith so the horizon keeps its detail.
vec2 skyViewUV(vec3 viewPos, vec3 rayDir, vec3 sunDir) {
  float height = length(viewPos);
  vec3 up = viewPos / height;
  float horizonAngle = acos(clamp(sqrt(max(height * height - groundRadiusMM * groundRadiusMM, 0.0)) / height, -1.0, 1.0)) - 0.5 * PI_A;
  float altitudeAngle = asin(clamp(dot(rayDir, up), -1.0, 1.0)) - horizonAngle;

  vec3 right = normalize(cross(sunDir, up));
  vec3 forward = normalize(cross(up, right));
  vec3 projected = normalize(rayDir - up * dot(rayDir, up));
  float sinTheta = dot(projected, right);
  float cosTheta = dot(projected, forward);
  float azimuth = atan(sinTheta, cosTheta) + PI_A;

  float v;
  if (altitudeAngle < 0.0) {
    v = 0.5 - 0.5 * sqrt(max(-altitudeAngle / (0.5 * PI_A + horizonAngle), 0.0));
  } else {
    v = 0.5 + 0.5 * sqrt(max(altitudeAngle / (0.5 * PI_A - horizonAngle), 0.0));
  }
  return vec2(azimuth / (2.0 * PI_A), clamp(v, 0.0, 1.0));
}

vec3 getValFromSkyLUT(sampler2D tex, vec3 viewPos, vec3 rayDir, vec3 sunDir) {
  // Explicit LOD, always. The azimuth coordinate wraps from 1 back to 0 in the
  // span of one pixel, so an implicit lookup sees a screen-space derivative of
  // ~1 there and jumps to the top of the mip chain — a hairline dark column
  // running from the zenith to the horizon on whichever bearing the wrap lands.
  return textureLod(tex, skyViewUV(viewPos, rayDir, sunDir), 0.0).rgb;
}
vec3 getValFromSkyLUTLod(sampler2D tex, vec3 viewPos, vec3 rayDir, vec3 sunDir, float lod) {
  return textureLod(tex, skyViewUV(viewPos, rayDir, sunDir), lod).rgb;
}

#endif
`,Wc=`
vec3 raymarchScattering(sampler2D tLUT, sampler2D msLUT, vec3 pos, vec3 rayDir, vec3 sunDir,
                        float tMax, float numSteps) {
  float cosTheta = dot(rayDir, sunDir);
  float miePhaseValue = miePhase(cosTheta);
  float rayleighPhaseValue = rayleighPhase(-cosTheta);

  vec3 lum = vec3(0.0);
  vec3 transmittance = vec3(1.0);
  float t = 0.0;
  for (float i = 0.0; i < numSteps; i += 1.0) {
    float newT = ((i + 0.3) / numSteps) * tMax;
    float dt = newT - t;
    t = newT;

    vec3 newPos = pos + t * rayDir;

    vec3 rayleighScattering, extinction;
    float mieScattering;
    scatteringValues(newPos, rayleighScattering, mieScattering, extinction);

    vec3 sampleTransmittance = exp(-dt * extinction);

    vec3 sunTransmittance = getValFromTLUT(tLUT, newPos, sunDir);
    vec3 psiMS = getValFromMultiScattLUT(msLUT, newPos, sunDir);

    vec3 rayleighInScattering = rayleighScattering * (rayleighPhaseValue * sunTransmittance + psiMS);
    vec3 mieInScattering = vec3(mieScattering) * (miePhaseValue * sunTransmittance + psiMS);
    vec3 inScattering = rayleighInScattering + mieInScattering;

    vec3 scatteringIntegral = (inScattering - inScattering * sampleTransmittance) / max(extinction, vec3(1e-7));

    lum += scatteringIntegral * transmittance;
    transmittance *= sampleTransmittance;
  }
  return lum;
}
`,Gc=256,Kc=64,qc=32,Jc=200,Yc=128,Xc=32,Zc=32,Qc=`
${Uc}
in vec2 vUv;
layout(location = 0) out vec4 oCol;
const float sunTransmittanceSteps = 40.0;

vec3 getSunTransmittance(vec3 pos, vec3 sunDir) {
  if (rayIntersectSphere(pos, sunDir, groundRadiusMM) > 0.0) return vec3(0.0);
  float atmoDist = rayIntersectSphere(pos, sunDir, atmosphereRadiusMM);
  float t = 0.0;
  vec3 transmittance = vec3(1.0);
  for (float i = 0.0; i < sunTransmittanceSteps; i += 1.0) {
    float newT = ((i + 0.3) / sunTransmittanceSteps) * atmoDist;
    float dt = newT - t; t = newT;
    vec3 newPos = pos + t * sunDir;
    vec3 rs, ext; float ms;
    scatteringValues(newPos, rs, ms, ext);
    transmittance *= exp(-dt * ext);
  }
  return transmittance;
}

void main(){
  float u = vUv.x, v = vUv.y;
  float sunCosTheta = 2.0 * u - 1.0;
  float sunTheta = acos(clamp(sunCosTheta, -1.0, 1.0));
  float height = mix(groundRadiusMM, atmosphereRadiusMM, v);
  vec3 pos = vec3(0.0, height, 0.0);
  vec3 sunDir = normalize(vec3(0.0, sunCosTheta, -sin(sunTheta)));
  oCol = vec4(getSunTransmittance(pos, sunDir), 1.0);
}
`,$c=`
${Uc}
uniform sampler2D uTransmittance;
in vec2 vUv;
layout(location = 0) out vec4 oCol;

const float mulScattSteps = 20.0;
const int sqrtSamples = 8;

vec3 getSphericalDir(float theta, float phi) {
  float cosPhi = cos(phi), sinPhi = sin(phi);
  float cosTheta = cos(theta), sinTheta = sin(theta);
  return vec3(sinPhi * sinTheta, cosPhi, sinPhi * cosTheta);
}

void getMulScattValues(vec3 pos, vec3 sunDir, out vec3 lumTotal, out vec3 fms) {
  lumTotal = vec3(0.0); fms = vec3(0.0);
  float invSamples = 1.0 / float(sqrtSamples * sqrtSamples);
  for (int i = 0; i < sqrtSamples; i++) {
    for (int j = 0; j < sqrtSamples; j++) {
      float theta = PI_A * (float(i) + 0.5) / float(sqrtSamples);
      float phi = acos(1.0 - 2.0 * (float(j) + 0.5) / float(sqrtSamples));
      vec3 rayDir = getSphericalDir(theta, phi);

      float atmoDist = rayIntersectSphere(pos, rayDir, atmosphereRadiusMM);
      float groundDist = rayIntersectSphere(pos, rayDir, groundRadiusMM);
      float tMax = atmoDist;
      if (groundDist > 0.0) tMax = groundDist;

      float cosTheta = dot(rayDir, sunDir);
      float miePhaseValue = miePhase(cosTheta);
      float rayleighPhaseValue = rayleighPhase(-cosTheta);

      vec3 lum = vec3(0.0), lumFactor = vec3(0.0), transmittance = vec3(1.0);
      float t = 0.0;
      for (float stepI = 0.0; stepI < mulScattSteps; stepI += 1.0) {
        float newT = ((stepI + 0.3) / mulScattSteps) * tMax;
        float dt = newT - t; t = newT;
        vec3 newPos = pos + t * rayDir;

        vec3 rayleighScattering, extinction; float mieScattering;
        scatteringValues(newPos, rayleighScattering, mieScattering, extinction);
        vec3 sampleTransmittance = exp(-dt * extinction);

        vec3 scatteringNoPhase = rayleighScattering + vec3(mieScattering);
        vec3 scatteringF = (scatteringNoPhase - scatteringNoPhase * sampleTransmittance) / max(extinction, vec3(1e-7));
        lumFactor += transmittance * scatteringF;

        vec3 sunTransmittance = getValFromTLUT(uTransmittance, newPos, sunDir);
        vec3 rayleighInScattering = rayleighScattering * rayleighPhaseValue;
        vec3 mieInScattering = vec3(mieScattering * miePhaseValue);
        vec3 inScattering = (rayleighInScattering + mieInScattering) * sunTransmittance;

        vec3 scatteringIntegral = (inScattering - inScattering * sampleTransmittance) / max(extinction, vec3(1e-7));
        lum += scatteringIntegral * transmittance;
        transmittance *= sampleTransmittance;
      }

      if (groundDist > 0.0) {
        vec3 hitPos = pos + groundDist * rayDir;
        if (dot(pos, sunDir) > 0.0) {
          hitPos = normalize(hitPos) * groundRadiusMM;
          lum += transmittance * uAtmoGroundAlbedo * getValFromTLUT(uTransmittance, hitPos, sunDir);
        }
      }
      fms += lumFactor * invSamples;
      lumTotal += lum * invSamples;
    }
  }
}

void main(){
  float sunCosTheta = 2.0 * vUv.x - 1.0;
  float sunTheta = acos(clamp(sunCosTheta, -1.0, 1.0));
  float height = mix(groundRadiusMM, atmosphereRadiusMM, vUv.y);
  vec3 pos = vec3(0.0, height, 0.0);
  vec3 sunDir = normalize(vec3(0.0, sunCosTheta, -sin(sunTheta)));
  vec3 lum, f_ms;
  getMulScattValues(pos, sunDir, lum, f_ms);
  vec3 psi = lum / max(1.0 - f_ms, vec3(1e-5));
  oCol = vec4(psi, 1.0);
}
`,el=`
${Uc}
${Wc}
uniform sampler2D uTransmittance;
uniform sampler2D uMultiScatter;
uniform vec3 uSunDir;
uniform float uViewHeightMM;
in vec2 vUv;
layout(location = 0) out vec4 oCol;

void main(){
  float u = vUv.x, v = vUv.y;
  vec3 viewPos = vec3(0.0, uViewHeightMM, 0.0);
  float azimuthAngle = (u - 0.5) * 2.0 * PI_A;
  float adjV;
  if (v < 0.5) { float c = 1.0 - 2.0 * v; adjV = -c * c; }
  else { float c = v * 2.0 - 1.0; adjV = c * c; }

  float height = length(viewPos);
  vec3 up = viewPos / height;
  float horizonAngle = acos(clamp(sqrt(max(height*height - groundRadiusMM*groundRadiusMM, 0.0)) / height, -1.0, 1.0)) - 0.5 * PI_A;
  float altitudeAngle = adjV * 0.5 * PI_A - horizonAngle;

  float cosAltitude = cos(altitudeAngle);
  vec3 rayDir = vec3(cosAltitude * sin(azimuthAngle), sin(altitudeAngle), -cosAltitude * cos(azimuthAngle));

  float sunAltitude = (0.5 * PI_A) - acos(clamp(dot(uSunDir, up), -1.0, 1.0));
  vec3 sunDir = vec3(0.0, sin(sunAltitude), -cos(sunAltitude));

  float atmoDist = rayIntersectSphere(viewPos, rayDir, atmosphereRadiusMM);
  float groundDist = rayIntersectSphere(viewPos, rayDir, groundRadiusMM);
  float tMax = (groundDist < 0.0) ? atmoDist : groundDist;

  vec3 lum = raymarchScattering(uTransmittance, uMultiScatter, viewPos, rayDir, sunDir, tMax, 32.0);
  oCol = vec4(lum, 1.0);
}
`,tl=`
${Uc}
${Wc}
uniform sampler2D uTransmittance;
uniform sampler2D uMultiScatter;
uniform vec3 uSunDir;
uniform vec3 uCamPos;          // world metres
uniform mat4 uInvViewProj;
uniform float uMaxDistance;    // metres
uniform float uSlices;
uniform float uRes;
in vec2 vUv;
layout(location = 0) out vec4 oCol;

void main(){
  float sliceX = floor(vUv.x * uSlices * uRes) ;
  float slice = floor(sliceX / uRes);
  float localX = (mod(sliceX, uRes) + 0.5) / uRes;
  vec2 ndc = vec2(localX, vUv.y) * 2.0 - 1.0;

  vec4 p0 = uInvViewProj * vec4(ndc, -1.0, 1.0); p0 /= p0.w;
  vec4 p1 = uInvViewProj * vec4(ndc,  1.0, 1.0); p1 /= p1.w;
  vec3 rayDir = normalize(p1.xyz - p0.xyz);

  float dist = uMaxDistance * pow((slice + 1.0) / uSlices, 2.0);

  vec3 viewPos = vec3(0.0, groundRadiusMM + max(uCamPos.y, 0.5) * 1e-6, 0.0);
  float tMaxMM = dist * 1e-6;
  float atmoDist = rayIntersectSphere(viewPos, rayDir, atmosphereRadiusMM);
  tMaxMM = min(tMaxMM, atmoDist);

  vec3 lum = raymarchScattering(uTransmittance, uMultiScatter, viewPos, rayDir, uSunDir, tMaxMM, 12.0);

  // transmittance along the same segment
  vec3 transmittance = vec3(1.0);
  float t = 0.0;
  const float N = 8.0;
  for (float i = 0.0; i < N; i += 1.0) {
    float newT = ((i + 0.5) / N) * tMaxMM;
    float dt = newT - t; t = newT;
    vec3 rs, ext; float ms;
    scatteringValues(viewPos + rayDir * t, rs, ms, ext);
    transmittance *= exp(-dt * ext);
  }
  oCol = vec4(lum, dot(transmittance, vec3(0.3333)));
}
`,nl=class{constructor(t){this.renderer=t,this.sunDir=new K(.3,.35,-.9).normalize(),this.turbidity=1,this.mieG=.8,this.groundAlbedo=new J(.06,.09,.12),this.sunIntensity=22,this.viewHeightMM=6.36+2e-4;let n={type:g};this.transmittanceRT=$(Gc,Kc,{...n,name:`tLUT`}),this.multiScatterRT=$(qc,qc,{...n,name:`msLUT`}),this.skyViewRT=$(Jc,Yc,{...n,name:`skyLUT`,wrap:e,minFilter:c,mipmaps:!0}),this.aerialRT=$(1024,Zc,{...n,name:`apLUT`});let r=()=>({uAtmoTurbidity:{value:this.turbidity},uAtmoMieG:{value:this.mieG},uAtmoGroundAlbedo:{value:new K(.06,.09,.12)}});this.tPass=new Q(Qc,r(),{name:`transmittanceLUT`}),this.msPass=new Q($c,{...r(),uTransmittance:{value:this.transmittanceRT.texture}},{name:`multiScatterLUT`}),this.skyPass=new Q(el,{...r(),uTransmittance:{value:this.transmittanceRT.texture},uMultiScatter:{value:this.multiScatterRT.texture},uSunDir:{value:this.sunDir},uViewHeightMM:{value:this.viewHeightMM}},{name:`skyViewLUT`}),this.apPass=new Q(tl,{...r(),uTransmittance:{value:this.transmittanceRT.texture},uMultiScatter:{value:this.multiScatterRT.texture},uSunDir:{value:this.sunDir},uCamPos:{value:new K},uInvViewProj:{value:new q},uMaxDistance:{value:9e4},uSlices:{value:Xc},uRes:{value:Zc}},{name:`aerialLUT`}),this._lutTurbidity=-1,this.sunColor=new J(1,1,1),this.ambientColor=new J(.1,.2,.35),this._readBuf=new Float32Array(4)}_syncCommon(e){e.uniforms.uAtmoTurbidity.value=this.turbidity,e.uniforms.uAtmoMieG.value=this.mieG,e.uniforms.uAtmoGroundAlbedo.value.set(this.groundAlbedo.r,this.groundAlbedo.g,this.groundAlbedo.b)}buildStaticLUTs(e=!1){!e&&Math.abs(this.turbidity-this._lutTurbidity)<.02||(this._lutTurbidity=this.turbidity,this._syncCommon(this.tPass),this._syncCommon(this.msPass),this.tPass.render(this.renderer,this.transmittanceRT),this.msPass.render(this.renderer,this.multiScatterRT))}update(e,t){this.buildStaticLUTs(),this._syncCommon(this.skyPass),this.skyPass.uniforms.uSunDir.value.copy(this.sunDir),this.skyPass.uniforms.uViewHeightMM.value=6.36+Math.max(t.y,.4)*1e-6,this.skyPass.render(this.renderer,this.skyViewRT),this._syncCommon(this.apPass),this.apPass.uniforms.uSunDir.value.copy(this.sunDir),this.apPass.uniforms.uCamPos.value.copy(t),this.apPass.uniforms.uInvViewProj.value.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse).invert(),this.apPass.render(this.renderer,this.aerialRT),this._updateLightColors()}_updateLightColors(){let e=Math.max(this.sunDir.y,-.12),t=Math.max(e,0),n=1/(t+.15*Math.max(93.885-Math.acos(Math.min(t,1))*57.29578,1)**-1.253),r=this.turbidity,i=[.005802,.013558,.0331],a=.003996*r+.0044*r,o=[65e-5,.001881,85e-6],s=[0,0,0];for(let e=0;e<3;e++){let t=(i[e]*8+a*1.2+o[e]*15)*n;s[e]=Math.exp(-t)}let c=gt.smoothstep(this.sunDir.y,-.1,.12);this.sunColor.setRGB(s[0],s[1],s[2]).multiplyScalar(c);let l=.02+.5*Math.max(this.sunDir.y+.12,0);this.ambientColor.setRGB(.28*l,.42*l,.65*l)}bind(e){return e.uTransmittanceLUT={value:this.transmittanceRT.texture},e.uMultiScatterLUT={value:this.multiScatterRT.texture},e.uSkyViewLUT={value:this.skyViewRT.texture},e.uAerialLUT={value:this.aerialRT.texture},e.uAerialSlices={value:Xc},e.uAerialRes={value:Zc},e.uAerialMaxDist={value:9e4},e.uSunDir={value:this.sunDir},e.uSunColor={value:new K(1,1,1)},e.uSunIntensity={value:this.sunIntensity},e.uAtmoTurbidity={value:this.turbidity},e.uAtmoMieG={value:this.mieG},e.uAtmoGroundAlbedo={value:new K(.06,.09,.12)},e}syncUniforms(e){e.uSunDir&&e.uSunDir.value.copy(this.sunDir),e.uSunColor&&e.uSunColor.value.set(this.sunColor.r,this.sunColor.g,this.sunColor.b),e.uSunIntensity&&(e.uSunIntensity.value=this.sunIntensity),e.uAtmoTurbidity&&(e.uAtmoTurbidity.value=this.turbidity),e.uAtmoMieG&&(e.uAtmoMieG.value=this.mieG)}},rl=`
uniform sampler2D uAerialLUT;
uniform float uAerialSlices;
uniform float uAerialRes;
uniform float uAerialMaxDist;

vec4 sampleAerial(vec2 screenUv, float distMeters) {
  float s = sqrt(clamp(distMeters / uAerialMaxDist, 0.0, 1.0)) * uAerialSlices - 1.0;
  float s0 = clamp(floor(s), 0.0, uAerialSlices - 1.0);
  float s1 = clamp(s0 + 1.0, 0.0, uAerialSlices - 1.0);
  float f = clamp(s - s0, 0.0, 1.0);
  vec2 uvIn = vec2(clamp(screenUv.x, 0.5 / uAerialRes, 1.0 - 0.5 / uAerialRes), screenUv.y);
  vec4 a = texture(uAerialLUT, vec2((s0 + uvIn.x) / uAerialSlices, uvIn.y));
  vec4 b = texture(uAerialLUT, vec2((s1 + uvIn.x) / uAerialSlices, uvIn.y));
  return mix(a, b, f);
}
`,il=`
#ifndef SHADING_GLSL
#define SHADING_GLSL 1

#define PI_S 3.14159265358979323846
#define TAU_S 6.28318530717958647692

vec2 dirToEquirect(vec3 d) {
  return vec2(atan(d.z, d.x) / TAU_S + 0.5, acos(clamp(d.y, -1.0, 1.0)) / PI_S);
}
vec3 equirectToDir(vec2 uv) {
  float phi = (uv.x - 0.5) * TAU_S;
  float theta = uv.y * PI_S;
  float st = sin(theta);
  return vec3(st * cos(phi), cos(theta), st * sin(phi));
}

/**
 * Mean cosine-weighted radiance of the upper hemisphere of an equirect probe.
 *
 * Nine taps on a heavily blurred mip: enough for an ambient term, and because
 * it reads the same probe the reflections use, an overcast deck darkens the
 * water and a break in the clouds brightens it with no extra bookkeeping.
 * Multiply by an albedo to get the diffuse response (the 1/pi and the pi in the
 * irradiance cancel).
 */
vec3 skyIrradiance(sampler2D env, float maxLod) {
  float lod = max(maxLod - 1.0, 0.0);
  vec3 sum = textureLod(env, vec2(0.5, 0.02), lod).rgb;
  float w = 1.0;
  for (int i = 0; i < 4; i++) {
    float a = (float(i) + 0.5) * 0.25;
    sum += textureLod(env, vec2(a, 0.25), lod).rgb * 0.7071;          // 45 deg
    sum += textureLod(env, vec2(a + 0.125, 0.40), lod).rgb * 0.3090;  // 18 deg
    w += 1.0161;
  }
  return sum / w;
}

float ggxD(float NoH, float a) {
  float a2 = a * a;
  float d = (NoH * a2 - NoH) * NoH + 1.0;
  return a2 / max(PI_S * d * d, 1e-8);
}

float smithGGXCorrelated(float NoV, float NoL, float a) {
  float a2 = a * a;
  float gv = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
  float gl = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
  return 0.5 / max(gv + gl, 1e-6);
}

float fresnelWater(float NoV, float roughness) {
  float f = 0.02 + 0.98 * pow(clamp(1.0 - NoV, 0.0, 1.0), 5.0);
  // rough surfaces lose the sharp grazing peak
  return mix(f, clamp(f * 0.72 + 0.06, 0.0, 1.0), clamp(roughness * 1.5, 0.0, 1.0));
}

float schlick(float cosTheta, float f0) {
  return f0 + (1.0 - f0) * pow(clamp(1.0 - cosTheta, 0.0, 1.0), 5.0);
}

float henyeyGreenstein(float cosT, float g) {
  float g2 = g * g;
  return (1.0 - g2) / (4.0 * PI_S * pow(max(1.0 + g2 - 2.0 * g * cosT, 1e-4), 1.5));
}
float dualHG(float cosT, float g0, float g1, float w) {
  return mix(henyeyGreenstein(cosT, g0), henyeyGreenstein(cosT, g1), w);
}

float luminance(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// ---------------------------------------------------------------- lightning
// Two concurrent strokes, inverse-square with a soft core; used by every
// surface shader so a bolt lights the whole scene consistently.
vec3 lightningContribution(vec3 worldPos, vec3 N, vec3 V, vec4 l0, vec4 l1, vec3 tint) {
  vec3 sum = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec4 l = (i == 0) ? l0 : l1;
    if (l.w <= 0.0001) continue;
    vec3 d = l.xyz - worldPos;
    float dist2 = dot(d, d);
    vec3 Ld = d * inversesqrt(max(dist2, 1e-4));
    float atten = l.w * 4.0e5 / max(dist2, 900.0);
    float ndl = clamp(dot(N, Ld) * 0.65 + 0.35, 0.0, 1.0);
    vec3 H = normalize(Ld + V);
    float spec = pow(max(dot(N, H), 0.0), 220.0) * 2.4;
    sum += tint * atten * (ndl + spec);
  }
  return sum;
}

// --------------------------------------------------------------- tonemapping
vec3 agxDefaultContrastApprox(vec3 x) {
  vec3 x2 = x * x;
  vec3 x4 = x2 * x2;
  return  15.5 * x4 * x2
        - 40.14 * x4 * x
        + 31.96 * x4
        - 6.868 * x2 * x
        + 0.4298 * x2
        + 0.1191 * x
        - 0.00232;
}

vec3 agx(vec3 val) {
  const mat3 agx_mat = mat3(
    0.842479062253094, 0.0423282422610123, 0.0423756549057051,
    0.0784335999999992, 0.878468636469772, 0.0784336,
    0.0792237451477643, 0.0791661274605434, 0.879142973793104);
  const float min_ev = -12.47393;
  const float max_ev = 4.026069;
  val = agx_mat * val;
  val = clamp(log2(max(val, 1e-10)), min_ev, max_ev);
  val = (val - min_ev) / (max_ev - min_ev);
  return agxDefaultContrastApprox(val);
}
vec3 agxEotf(vec3 val) {
  const mat3 agx_mat_inv = mat3(
     1.19687900512017, -0.0528968517574562, -0.0529716355144438,
    -0.0980208811401368, 1.15190312990417, -0.0980434501171241,
    -0.0990297440797205, -0.0989611768448433, 1.15107367264116);
  return agx_mat_inv * val;
}
vec3 agxLook(vec3 val, float sat, vec3 slope, vec3 power, float offset) {
  float luma = luminance(val);
  val = pow(max(val * slope + offset, vec3(0.0)), power);
  return luma + sat * (val - luma);
}

vec3 acesFitted(vec3 x) {
  const mat3 ACESInputMat = mat3(
    0.59719, 0.07600, 0.02840,
    0.35458, 0.90834, 0.13383,
    0.04823, 0.01566, 0.83777);
  const mat3 ACESOutputMat = mat3(
     1.60475, -0.10208, -0.00327,
    -0.53108,  1.10813, -0.07276,
    -0.07367, -0.00605,  1.07602);
  x = ACESInputMat * x;
  vec3 a = x * (x + 0.0245786) - 0.000090537;
  vec3 b = x * (0.983729 * x + 0.4329510) + 0.238081;
  x = a / b;
  return clamp(ACESOutputMat * x, 0.0, 1.0);
}

vec3 linearToSrgb(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(1e-5)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

#endif
`;function al(e,t){let n=(e+1)*(t+1),r=new Float32Array(n*2),i=0;for(let n=0;n<=t;n++)for(let a=0;a<=e;a++)r[i++]=a/e,r[i++]=n/t;let a=new Uint32Array(e*t*6),o=0;for(let n=0;n<t;n++)for(let t=0;t<e;t++){let r=n*(e+1)+t,i=r+1,s=r+(e+1),c=s+1;a[o++]=r,a[o++]=s,a[o++]=c,a[o++]=r,a[o++]=c,a[o++]=i}let s=new Or;return s.setAttribute(`aGrid`,new _r(r,2)),s.setIndex(new _r(a,1)),s.boundingSphere=new dn(new K,1e9),s}var ol=`
precision highp float;
precision highp int;
precision highp sampler2D;

in vec2 aGrid;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 uViewProjNJ;
uniform mat4 uPrevViewProjNJ;
uniform mat4 uInvViewProjNJ;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uRMax;
uniform vec2 uGridSize;
uniform float uGridMargin;
uniform float uSkirt;
uniform float uGridPlane;
uniform float uCurrentStrength;
uniform float uDisplaceScale;
// Loop bounds, deliberately not compile-time constants. With literals the
// driver unrolls the ray search into forty inlined copies of the event field
// and the HLSL translation never finishes compiling.
uniform int uEventSteps;
uniform int uEventBisect;

${Hc}

out vec3 vWorldPos;
out vec2 vFlatPos;
out vec3 vDisp;
out float vDist;
out float vCrest;
out float vCalm;
out float vWaveY;
out float vEventY;
out vec3 vLods;
out vec4 vClipNJ;
out vec4 vPrevClipNJ;

vec3 rayFor(vec2 ndc) {
  vec4 a = uInvViewProjNJ * vec4(ndc, -1.0, 1.0);
  vec4 b = uInvViewProjNJ * vec4(ndc,  1.0, 1.0);
  return normalize(b.xyz / b.w - a.xyz / a.w);
}

// -------------------------------------------------------- disaster brackets
// The stretch of a ray in which a given event can possibly reach it. Marching
// blind is hopeless: a degree above the horizon the water occupies kilometres
// of ray, and a hundred-and-fifty-metre crest falls clean between two samples.
// Every event is analytic though, so its footprint solves in closed form — a
// solitary wave is a band in its own front coordinate, everything else is a
// disc — and sixteen samples inside a tight bracket find what a hundred spread
// over the whole slab would miss. Distances are horizontal; the caller divides.
void bandSoliton(vec4 s, vec4 sb, vec2 o, vec2 d, inout vec2 span) {
  if (s.w <= 0.001) return;
  vec2 sd = normalize(s.xy);
  float w = max(sb.x, 1.0) * 3.0;
  float x0 = dot(o, sd) - s.z;
  float k = dot(d, sd);
  vec2 seg;
  if (abs(k) < 1e-5) {
    if (abs(x0) > w) return;      // running along the front, never crosses it
    seg = vec2(0.0, 1e7);
  } else {
    float a = (-w - x0) / k, b = (w - x0) / k;
    seg = vec2(min(a, b), max(a, b));
  }
  span = vec2(min(span.x, seg.x), max(span.y, seg.y));
}

void bandDisc(vec2 c, float r, float amp, vec2 o, vec2 d, inout vec2 span) {
  if (amp <= 0.001) return;
  vec2 m = o - c;
  float b = dot(m, d);
  float cc = dot(m, m) - r * r;
  float disc = b * b - cc;
  if (disc < 0.0) return;
  float sq = sqrt(disc);
  span = vec2(min(span.x, -b - sq), max(span.y, -b + sq));
}

/**
 * First crossing of a view ray with the analytic disaster field inside
 * [lo, hi], or -1 if the ray clears it. The tested quantity is the ray's
 * height above the surface, so the crossing is where it first goes negative.
 *
 * Two passes, and the second one is not optional. Where the ray is nearly
 * tangent to a crest — which is the silhouette, the one part of the wave the
 * eye is actually reading — the stretch in which the ray is below the surface
 * narrows towards nothing, and a single coarse march catches it on one row and
 * steps clean over it on the next. Adjacent vertices then land on different
 * branches, the mesh folds back on itself and the crest comes out as a zipper.
 * Re-marching the cell around the closest approach costs sixteen more samples
 * of a pure-ALU function and turns that rip back into an edge.
 */
float eventRayHit(vec3 dir, vec2 o2, float eye, float lo, float hi) {
  float a = lo, b = hi;
  float ta = -1.0, tb = 0.0;

  for (int pass = 0; pass < 2; pass++) {
    float dt = (b - a) / float(uEventSteps);
    float tPrev = a;
    float gPrev = eye + dir.y * a - oceanEventHeight(o2 + dir.xz * a);
    float gMin = gPrev, tMin = a;
    for (int i = 1; i <= uEventSteps; i++) {
      float tc = a + dt * float(i);
      float gc = eye + dir.y * tc - oceanEventHeight(o2 + dir.xz * tc);
      if (ta < 0.0 && gPrev > 0.0 && gc <= 0.0) { ta = tPrev; tb = tc; }
      if (gc < gMin) { gMin = gc; tMin = tc; }
      tPrev = tc; gPrev = gc;
    }
    if (ta > 0.0) break;
    // Nothing crossed. Re-march the cell around the closest approach in case
    // the coarse pass stepped over a narrow one.
    a = max(tMin - dt, lo);
    b = min(tMin + dt, hi);
  }
  if (ta < 0.0) return -1.0;

  for (int i = 0; i < uEventBisect; i++) {
    float tm = 0.5 * (ta + tb);
    if (eye + dir.y * tm - oceanEventHeight(o2 + dir.xz * tm) > 0.0) ta = tm; else tb = tm;
  }
  return 0.5 * (ta + tb);
}

/** Intersect a view ray with the parabolic (spherical) sea surface. */
vec2 seaHit(vec3 dir, float eyeHeight) {
  float curv = uEarthCurvature / (2.0 * EARTH_R);
  float a = max((1.0 - dir.y * dir.y) * curv, 1e-14);
  float b = dir.y;
  float c = eyeHeight;
  float disc = b * b - 4.0 * a * c;
  float t = 0.0;
  bool miss = true;
  if (disc >= 0.0) {
    // Citardauq form. The textbook (-b ± sqrt(disc)) / 2a is unusable here: the
    // sea sphere has planetary radius, so a ~ 1e-8 and for any ray steeper than
    // a few degrees 4ac is a part in ten million of b*b. The subtraction then
    // cancels to float noise and gets amplified by 1/2a ~ 1e7, which scatters
    // near-field vertices to random distances and tears a hole in the mesh
    // wherever the camera looks down.
    float sq = sqrt(disc);
    float qq = -0.5 * (b + (b >= 0.0 ? sq : -sq));
    float r1 = qq / a;
    float r2 = abs(qq) > 1e-20 ? c / qq : -1.0;
    float lo = min(r1, r2), hi = max(r1, r2);
    t = lo > 0.02 ? lo : hi;
    miss = t <= 0.02;
  }
  if (miss || t > uRMax) {
    // snap to the azimuthal tangent point => lands exactly on the horizon
    float rh = sqrt(max(2.0 * EARTH_R * max(abs(c), 0.05) * uEarthCurvature, 1.0));
    rh = min(rh, uRMax);
    if (uEarthCurvature < 0.5) rh = uRMax;
    float horiz = max(length(dir.xz), 1e-5);
    t = rh / horiz;
    return vec2(t, 1.0);
  }
  return vec2(t, 0.0);
}

void main(){
  // A flat margin cannot guarantee coverage. Every vertex is placed on the
  // *undisplaced* sea and then moved by up to a few metres horizontally, and
  // for the bottom row — water eight metres from the lens — a few metres is a
  // large fraction of the frame. The boundary of the mesh then walks inward and
  // tears a wedge out of the corner of the screen. So the outermost ring is
  // thrown far outside the frustum: one ring of vertices, effectively free,
  // whose stretched triangles guarantee the visible area is always covered.
  vec2 cellIdx = aGrid * uGridSize;
  vec2 atMin = step(cellIdx, vec2(0.5));
  vec2 atMax = step(uGridSize - 0.5, cellIdx);
  vec2 ndc = (aGrid * 2.0 - 1.0) * uGridMargin + (atMax - atMin) * uSkirt;
  vec3 dir = rayFor(ndc);
  // Aim the rays at the water actually under the lens, not at mean sea level.
  //
  // A tsunami lifts the whole neighbourhood by tens of metres. Intersect the
  // flat plane instead and the near rows land on points that displacement then
  // throws above the sight line, uncovering the bottom third of the frame; no
  // amount of margin can reach far enough down to cover it, because the
  // geometry that belongs there is metres from the lens.
  //
  // The offset has to be constant across the grid. Re-intersecting per vertex
  // against the sampled height — by fixed point or by Newton — diverges for
  // grazing rays, where a wavy surface offers many intersections and adjacent
  // rays converge on different ones. The mesh comes apart into contour
  // terraces. A constant is continuous by construction.
  float eyeHeight = max(uCamPos.y - (uSeaLevel + uGridPlane), 0.35);

  vec2 hit = seaHit(dir, eyeHeight);
  float t = hit.x;
  float snapped = hit.y;

  // ---------------------------------------------- re-aim at the disasters
  // A flat reference plane is exactly right for a wind sea a few metres tall
  // and useless for a forty metre one. Every ray that points at a distant
  // tsunami either grazes the plane or misses it upward, so all of them are
  // snapped to the horizon ring and the wall is not drawn coarsely — it is not
  // drawn at all. Re-intersecting against the analytic event field puts those
  // rows back onto the face, and the density then takes care of itself: a wall
  // covering six degrees of the frame collects every row inside six degrees.
  //
  // The FFT relief is deliberately excluded. A metre-scale surface offers a
  // grazing ray dozens of intersections, adjacent vertices settle on different
  // ones, and the mesh comes apart into contour terraces.
  float horiz = length(dir.xz);
  // World distance covered by one radian of pitch on whatever surface the
  // vertex ended up on. Zero means "use the flat-plane estimate".
  float eventSpread = 0.0;
  if (horiz > 1e-5) {
    vec2 d2 = dir.xz / horiz;
    vec2 o2 = uCamPos.xz;
    vec2 span = vec2(1e9, -1e9);
    bandSoliton(uSoliton0, uSoliton0b, o2, d2, span);
    bandSoliton(uSoliton1, uSoliton1b, o2, d2, span);
    bandDisc(uRogue.xy, uRogue.z * 2.4, uRogue.w, o2, d2, span);
    bandDisc(uHurricane.xy, uHurricane.z * 3.0, uHurricane.w, o2, d2, span);
    bandDisc(uVortex0.xy, uVortex0.z * 3.0, uVortex0.w, o2, d2, span);
    bandDisc(uVortex1.xy, uVortex1.z * 3.0, uVortex1.w, o2, d2, span);
    bandDisc(uVortex2.xy, uVortex2.z * 3.0, uVortex2.w, o2, d2, span);
    bandDisc(uVortex3.xy, uVortex3.z * 3.0, uVortex3.w, o2, d2, span);

    if (span.y > span.x) {
      float lo = max(span.x / horiz, 0.05);
      float hi = min(span.y / horiz, uRMax);
      // A ray that already found flat water cannot be answered by an event
      // behind that water — it is occluded. The slack is for the opposite
      // case, the drawdown ahead of a crest, where the sea the ray wants is
      // *below* the plane and therefore slightly further out.
      if (snapped < 0.5) hi = min(hi, t * 1.06 + 60.0);
      hi = min(hi, lo + 8000.0);

      if (hi > lo) {
        float tHit = eventRayHit(dir, o2, uCamPos.y - uSeaLevel, lo, hi);
        if (tHit > 0.0) {
          t = clamp(tHit, 0.05, uRMax);
          snapped = 0.0;

          // How far apart consecutive rows land on this face. Where the ray
          // grazes the surface it is tens of metres even though the rows are a
          // fraction of a degree apart, and a footprint that still believes
          // the flat-plane spacing point-samples the cascade and serrates the
          // crest into a mountain ridge. Differentiating the intersection
          // itself: dt/dtheta = -t / (dir.y - dE/dt).
          float hs = max(t * 0.02, 0.5);
          float dEdt = (oceanEventHeight(o2 + dir.xz * (t + hs))
                      - oceanEventHeight(o2 + dir.xz * t)) / hs;
          eventSpread = t / max(abs(dir.y - dEdt), 2e-3);
        }
      }
    }
  }

  vec2 world = uCamPos.xz + dir.xz * t;

  // footprint from the neighbouring grid cells (uniform in screen space)
  vec2 ndcDu = (vec2(aGrid.x + 1.0 / uGridSize.x, aGrid.y) * 2.0 - 1.0) * uGridMargin;
  vec2 ndcDv = (vec2(aGrid.x, aGrid.y + 1.0 / uGridSize.y) * 2.0 - 1.0) * uGridMargin;
  vec3 dirU = rayFor(ndcDu);
  vec3 dirV = rayFor(ndcDv);
  // Scale the neighbours by however far the refinement moved this vertex.
  // Re-solving for each of them costs three times the search; the ratio is
  // accurate wherever the two rays land on the same face, which is the only
  // place the footprint matters.
  float tScale = t / max(hit.x, 1e-3);
  vec2 wu = uCamPos.xz + dirU.xz * (seaHit(dirU, eyeHeight).x * tScale);
  vec2 wv = uCamPos.xz + dirV.xz * (seaHit(dirV, eyeHeight).x * tScale);
  // Never finer than the cell subtends at this range. Rays that missed the
  // reference plane were all snapped to the same tangent ring, so their
  // neighbour footprints differ by nothing and the lookup collapses to the
  // sharpest mip — which is how a wave face four hundred metres out ends up
  // sampled per-texel and rendered as crumpled foil.
  float angU = length(dirU - dir), angV = length(dirV - dir);
  float pixel = max(t * angU, eventSpread * angV);
  float cell = max(max(length(wu - world), length(wv - world)), max(0.015, pixel));

  vec3 texel = uOceanScales / uOceanTexels;
  vec3 lods = log2(max(vec3(cell) / texel, vec3(1.0)));
  vLods = lods;

  vec2 q = swirlCoords(world, uTime);
  q = warpCoord(q, uTime, uCurrentStrength);

  float foamHint;
  vec3 disp = oceanDisplacementLod(q, lods, foamHint) * uDisplaceScale;

  float crest, calm;
  vec3 mods = oceanModifiers(world, uTime, crest, calm);
  disp *= (1.0 - calm * 0.8);
  // Wind waves and disaster displacement have to stay separable. Shading uses
  // crest height as a stand-in for how thin the water is — a metre-high crest
  // with the sun behind it glows — and the two are only interchangeable while
  // the sea is made of wind waves. Fold in a forty metre tsunami and every
  // "thin sheet" term pins to its maximum across the entire wall, which is
  // what turned the face into a slab of jade.
  float waveY = disp.y;
  disp += mods;

  // fade the vertical relief out right at the horizon so the silhouette stays clean
  float horizonFade = 1.0 - snapped * 0.92;
  disp *= horizonFade;
  vWaveY = waveY * horizonFade;
  vEventY = mods.y * horizonFade;

  vec3 wp = vec3(world.x + disp.x, uSeaLevel + disp.y, world.y + disp.z);
  wp.y -= earthDrop(world, uCamPos);

  vWorldPos = wp;
  vFlatPos = world;
  vDisp = disp;
  vDist = length(wp - uCamPos);
  vCrest = crest;
  vCalm = calm;

  vClipNJ = uViewProjNJ * vec4(wp, 1.0);
  vPrevClipNJ = uPrevViewProjNJ * vec4(wp, 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}
`,sl=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform vec3 uCamPos;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uAmbientColor;
uniform sampler2D uTransmittanceLUT;
uniform sampler2D uWeatherMap;
uniform float uWeatherScaleM;
uniform float uCoverage;
uniform float uCloudContrast;
uniform float uCloudDensity;
uniform float uCloudBottom;
uniform vec2 uCloudWind;
uniform float uCloudTime;
uniform sampler2D uEnvMap;
uniform float uEnvMaxLod;
uniform float uEnvWidth;
uniform sampler2D uFoamTex;
uniform sampler2D uRippleTex;
uniform float uRain;
uniform float uWhitecapCoverage;
uniform float uStormFactor;
uniform vec3 uWaterScatter;
uniform vec3 uWaterAbsorb;
uniform float uFoamStrength;
uniform float uCurrentStrength;
uniform vec4 uLightning0;
uniform vec4 uLightning1;
uniform vec3 uLightningColor;
uniform float uAmbientFlash;
uniform float uExposure;
uniform float uUnderwater;
uniform float uDebugMode;

${Uc}
${rl}
${vc}
${Hc}
${il}

in vec3 vWorldPos;
in vec2 vFlatPos;
in vec3 vDisp;
in float vDist;
in float vCrest;
in float vCalm;
in float vWaveY;
in float vEventY;
in vec3 vLods;
in vec4 vClipNJ;
in vec4 vPrevClipNJ;

layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

vec4 sampleCascadeGrad(sampler2D tex, vec2 p, float scale, vec2 ddx, vec2 ddy) {
  return textureGrad(tex, p / scale, ddx / scale, ddy / scale);
}

/**
 * How much of the direct beam survives the cloud deck on its way to this patch
 * of water. Reads the same weather map the deck is built from, at the point
 * where the beam crosses the cloud base, so the shadows are the actual clouds
 * overhead and they drift with them. Without this the sea kept a full midday
 * sun and a hard specular glint underneath a violent storm.
 */
float cloudShadow(vec3 p, vec3 L) {
  if (uCoverage <= 0.001) return 1.0;
  // Grazing sun would throw the sample kilometres away and swim; past this the
  // deck is edge-on and the beam is inside cloud the whole way regardless.
  float up = max(L.y, 0.22);
  vec2 xz = p.xz + L.xz / up * max(uCloudBottom - p.y, 0.0);

  vec2 w = xz + uCloudWind * uCloudTime * 0.6;
  vec4 m = textureLod(uWeatherMap, w / uWeatherScaleM, 0.0);
  vec4 n = textureLod(uWeatherMap, w / (uWeatherScaleM * 0.27)
                 + vec2(0.37, 0.11) - uCloudWind * uCloudTime * 0.00002, 0.0);
  float field = m.r * 0.62 + m.g * 0.22 + n.g * 0.16;
  float cov = clamp((field - 0.5) * uCloudContrast + uCoverage, 0.0, 1.0);

  // Thin edges of a cell shadow far less than its core, and a slanted beam
  // takes a longer path through the same deck.
  float od = smoothstep(0.04, 0.62, cov) * uCloudDensity * 4.2 / up;
  return exp(-od);
}

void main(){
  vec2 q = swirlCoords(vFlatPos, uTime);
  q = warpCoord(q, uTime, uCurrentStrength);

  vec2 ddx = dFdx(q);
  vec2 ddy = dFdy(q);

  // The two axes of this pixel's footprint on the water, in metres. You look at
  // an ocean almost edge-on, so they differ by orders of magnitude: at the
  // horizon a pixel is centimetres across and kilometres deep. The major axis
  // is what an unfiltered tap would alias on; the minor axis is the detail
  // anisotropic sampling still resolves, and it is the one that decides whether
  // a wavelength is worth shading or belongs in the roughness lobe instead.
  float fpA = length(ddx), fpB = length(ddy);
  float fpMajor = max(fpA, fpB);
  float fpMinor = max(max(min(fpA, fpB), fpMajor / max(uOceanAniso, 1.0)), 1e-5);
  // Roughness answers to the whole pixel, not to the one axis the anisotropic
  // taps sharpen. Charge it for the minor axis alone and the far sea stays
  // nearly mirror-smooth at grazing incidence: every wavelet the filter kept
  // becomes its own specular highlight, and the horizon turns into a field of
  // white speckle. The geometric mean is the isotropic footprint of equal area,
  // so detail stays sharp while the light it reflects is averaged honestly.
  float fpShade = sqrt(fpMinor * fpMajor);

  // ---------------------------------------------------------- surface normal
  vec4 d0 = sampleCascadeGrad(uOceanDeriv0, q, uOceanScales.x, ddx, ddy) * uCascadeGain.x;
  vec4 d1 = sampleCascadeGrad(uOceanDeriv1, q, uOceanScales.y, ddx, ddy) * uCascadeGain.y;
  vec4 d2 = sampleCascadeGrad(uOceanDeriv2, q, uOceanScales.z, ddx, ddy) * uCascadeGain.z;
  vec4 dsum = d0 + d1 + d2;

  vec2 slope = vec2(dsum.x / max(1.0 + dsum.z, 0.05), dsum.y / max(1.0 + dsum.w, 0.05));
  slope *= (1.0 - vCalm * 0.85);
  vec3 N = normalize(vec3(-slope.x, 1.0, -slope.y));

  // Capillary detail on top of the spectrum. This used to fade on raw distance,
  // which threw it away past a few hundred metres however much of the frame the
  // water covered — from any high vantage the sea turned to plastic halfway up
  // the image. It fades on footprint now, and the taps are gradient-filtered so
  // the layer can live all the way to where it genuinely stops resolving
  // instead of being cut early to hide its own aliasing.
  float microFade = 1.0 - smoothstep(0.35, 2.2, fpShade);
  if (microFade > 0.004) {
    vec2 wdir = normalize(uWindDir + 1e-5);
    vec2 drift = wdir * uTime;
    // Three taps of the one tile at incommensurate scales, each turned to its
    // own angle. Axis-aligned layers print their lattice across the whole sea
    // now that the detail survives to the horizon — the old pair repeated every
    // ten metres and read as a crosshatch scratched into the water. Rotations
    // mean the repeats never line up, so the eye finds no grid to lock onto.
    mat2 rotA = mat2( 0.8339, 0.5519, -0.5519, 0.8339);
    mat2 rotB = mat2(-0.2225, 0.9749, -0.9749, -0.2225);
    vec2 qA = rotA * q, qB = rotB * q;
    vec3 r0 = textureGrad(uRippleTex, q * 0.0131 + drift * 0.0075,
                          ddx * 0.0131, ddy * 0.0131).xyz * 2.0 - 1.0;
    vec3 r1 = textureGrad(uRippleTex, qA * 0.0474 - drift * 0.019,
                          rotA * ddx * 0.0474, rotA * ddy * 0.0474).xyz * 2.0 - 1.0;
    vec3 r2 = textureGrad(uRippleTex, qB * 0.1327 + drift * 0.041,
                          rotB * ddx * 0.1327, rotB * ddy * 0.1327).xyz * 2.0 - 1.0;
    // Each layer's slope lives in its own rotated frame; carry it back with the
    // transpose before adding, or the ripples all lean the same wrong way.
    vec2 micro = r0.xz * 0.46 + (r1.xz * rotA) * 0.33 + (r2.xz * rotB) * 0.21;
    micro *= microFade * (0.05 + 0.011 * uWindSpeed);
    N = normalize(N + vec3(micro.x, 0.0, micro.y));
  }

  // rain impact ripples
  float rainRip = 0.0;
  if (uRain > 0.01) {
    float f = exp(-vDist * 0.012);
    if (f > 0.004) {
      vec2 cellUv = q * 2.2;
      vec2 ci = floor(cellUv);
      vec2 cf = fract(cellUv) - 0.5;
      float rnd = hash12(ci);
      float phase = fract(uTime * (0.9 + rnd * 0.6) + rnd);
      float rad = phase * 0.48;
      float dd = length(cf);
      float ring = exp(-pow((dd - rad) * 26.0, 2.0)) * (1.0 - phase) * step(rnd, uRain * 0.85);
      vec2 dir = normalize(cf + 1e-5);
      N = normalize(N + vec3(dir.x, 0.0, dir.y) * ring * 1.35 * f);
      rainRip = ring * f;
    }
  }

  vec3 Nflat = N;
  bool underwater = uUnderwater > 0.5;
  vec3 V = normalize(uCamPos - vWorldPos);
  // Seeing the underside of the surface means the eye is inside the water — in
  // the trough of a wave that has closed over it, or behind the face of a
  // tsunami. The mesh is double-sided so the geometry is there, but with the
  // normal pointing away every lighting term collapses and the wall renders as
  // a black hole in the middle of the frame. Flip it and mark the fragment so
  // it can be shaded as a thick, backlit body of water instead.
  bool backLit = dot(N, V) < 0.0;
  if (backLit) N = -N;
  underwater = underwater || backLit;

  // -------------------------------------------------------------- roughness
  // Cox & Munk mean-square slope; only the sub-pixel part becomes roughness.
  float mssTotal = 0.003 + 0.00512 * max(uWindSpeed, 0.5);
  vec3 share = vec3(0.06, 0.30, 0.64);
  vec3 sampledLod = log2(max(vec3(fpShade) * (uOceanTexels / uOceanScales), vec3(1.0)));
  float lost = share.x * clamp(sampledLod.x / 6.0, 0.0, 1.0)
             + share.y * clamp(sampledLod.y / 6.0, 0.0, 1.0)
             + share.z * clamp(sampledLod.z / 6.0, 0.0, 1.0);
  lost = max(lost, 1.0 - microFade * 0.9);
  float mssUnres = mssTotal * lost + 0.0009;
  float alpha = clamp(sqrt(2.0 * mssUnres), 0.012, 0.62);
  float roughness = clamp(sqrt(alpha), 0.02, 0.86);

  // ------------------------------------------------------------------- foam
  vec4 t0 = sampleCascadeGrad(uOceanTurb0, q, uOceanScales.x, ddx, ddy);
  vec4 t1 = sampleCascadeGrad(uOceanTurb1, q, uOceanScales.y, ddx, ddy);
  vec4 t2 = sampleCascadeGrad(uOceanTurb2, q, uOceanScales.z, ddx, ddy);
  // The cascades overlap in space, so take the strongest raft rather than the
  // sum — adding them triple-counts a crest that all three see.
  float rawFoam = max(max(t0.r * 0.75, t1.r), t2.r * 0.45);
  float bubbles = t0.g * 0.35 + t1.g * 0.7 + t2.g * 0.3;

  float foamMask = (rawFoam * uFoamStrength + vCrest * 0.8) * (1.0 - vCalm * 0.9);

  // Erode with baked bubble rafts. The lookup is stretched along the wind
  // because Langmuir cells organise surface foam into windrows: long streaks
  // running downwind, tens of metres apart. Sampling isotropic noise instead
  // gives a spatter that reads as wet sand once it covers a whole wave face.
  vec2 wd = normalize(uWindDir + vec2(1e-5, 0.0));
  mat2 windFrame = mat2(wd.x, -wd.y, wd.y, wd.x);
  vec2 qs = windFrame * q;
  vec2 stretch = vec2(0.22, 1.0);   // long downwind, narrow across
  float t = uTime;
  vec2 gx = windFrame * ddx, gy = windFrame * ddy;
  vec4 fx0 = textureGrad(uFoamTex, qs * 0.031 * stretch + vec2(t * 0.004, -t * 0.003),
                         gx * 0.031 * stretch, gy * 0.031 * stretch);
  vec4 fx1 = textureGrad(uFoamTex, qs * 0.145 * stretch - vec2(t * 0.011, t * 0.008),
                         gx * 0.145 * stretch, gy * 0.145 * stretch);
  vec4 fx2 = textureGrad(uFoamTex, q * 0.62 + vec2(-t * 0.03, t * 0.021), ddx * 0.62, ddy * 0.62);
  float foamNoise = fx0.a * 0.5 + fx1.a * 0.42 + fx2.a * 0.22;
  float foamDetail = fx1.r * 0.55 + fx2.r * 0.45;
  float foamFine = fx2.g * 0.6 + fx1.g * 0.4;

  // Monahan whitecap coverage sets how easily a raft survives: a light breeze
  // leaves nothing behind, a storm keeps the sea streaked between breakers.
  // The noise multiplies rather than merely modulates, so where the windrow
  // pattern is empty the water stays water no matter how much foam the
  // simulation deposited there.
  float onset = mix(0.62, 0.26, clamp(uWhitecapCoverage / 0.16, 0.0, 1.0));
  float carved = foamMask * (0.10 + foamNoise * 1.55);
  float foam = smoothstep(onset, onset + 0.30, carved);
  foam *= mix(0.35, 1.0, foamDetail);
  float foamThin = smoothstep(onset * 0.55, onset + 0.30, carved);

  // foam perturbs the normal too
  N = normalize(N + vec3(fx2.r - fx2.b, 0.0, fx2.g - fx2.a) * foam * 0.35 * microFade);

  float NoV = max(dot(N, V), 1e-4);
  vec3 L = normalize(uSunDir);
  float NoL = dot(N, L);

  // --------------------------------------------------------------- lighting
  // The sky, the clouds and the spout all take the sun through the atmospheric
  // transmittance LUT; the sea used to take it raw, so at low elevations the
  // water kept a white midday sun while everything above it went red.
  vec3 tluPos = vec3(0.0, groundRadiusMM + max(uCamPos.y, 0.2) * 1e-6, 0.0);
  vec3 sunTrans = getValFromTLUT(uTransmittanceLUT, tluPos, uSunDir);
  vec3 sun = uSunColor * sunTrans * uSunIntensity * cloudShadow(vWorldPos, L);
  vec3 R = reflect(-V, N);

  // bend reflections that dive below the horizon back up along the surface
  float rUp = R.y;
  if (rUp < 0.0) R = normalize(vec3(R.x, mix(0.02, 0.35, roughness) - rUp * 0.15, R.z));

  // The GGX lobe half-angle is ~alpha radians; an equirect probe covers 2pi
  // across its width, so match the mip to the lobe instead of over-blurring —
  // the bright band just above the horizon is most of the water's reflection.
  float lobeTexels = alpha * 0.5 / (6.2831853 / max(uEnvWidth, 8.0));
  float envLod = clamp(log2(max(lobeTexels, 1.0)), 0.0, uEnvMaxLod);
  vec3 env = textureLod(uEnvMap, dirToEquirect(R), envLod).rgb;
  vec3 skyAmb = skyIrradiance(uEnvMap, uEnvMaxLod);

  float F = fresnelWater(NoV, roughness);

  // sun specular (disc-widened GGX)
  vec3 spec = vec3(0.0);
  if (NoL > 0.0) {
    vec3 H = normalize(L + V);
    float NoH = max(dot(N, H), 0.0);
    float VoH = max(dot(V, H), 1e-4);
    float a = alpha;
    float aP = clamp(a + 0.00465 / 2.0, 0.0, 1.0);
    float norm = (a * a) / (aP * aP);
    float D = ggxD(NoH, aP);
    float Vis = smithGGXCorrelated(NoV, max(NoL, 1e-4), a);
    float Fs = 0.02 + 0.98 * pow(1.0 - VoH, 5.0);
    spec = sun * D * Vis * Fs * NoL * norm;
  }
  spec += env * F * 0.0;   // (env already carries the mirror term below)

  // --------------------------------------------------- subsurface scattering
  // Everything the eye sees that did NOT reflect off the surface comes out of
  // the water body. Open ocean has a volume reflectance of a few percent that
  // peaks in the blue-green, and it is driven by the whole downwelling
  // irradiance, so it tracks the cloud deck through the probe.
  vec3 bodyR = uWaterScatter;

  // Light that entered a wave and left toward the eye: peaks looking into a
  // backlit crest, which is what makes a breaking wave glow. Only the wind-wave
  // relief counts — a crest is thin, which is the whole reason it lights up.
  float heightNorm = clamp(vWaveY * 0.35 + 0.35, 0.0, 1.5);
  // A tsunami face is not a backlit sheet, it is tens of metres of opaque
  // water, so the deeper the body behind the surface the less gets through.
  float thinness = 1.0 / (1.0 + max(vEventY, 0.0) * 0.075);
  float backlit = heightNorm * thinness
                * pow(clamp(dot(L, -V), 0.0, 1.0), 4.0)
                * pow(0.5 - 0.5 * dot(L, N), 3.0);
  vec3 scatter = bodyR * sun * backlit * 3.4 / (1.0 + max(0.0, -L.y) * 4.0);

  // Downwelling irradiance just under the surface: the direct beam landing on a
  // horizontal plane, plus the diffuse sky. skyIrradiance already returns E/pi,
  // so the beam needs its own 1/pi to sit on the same scale, and what the
  // surface reflects away never enters the volume.
  float sunUp = max(L.y, 0.0);
  vec3 beam = sun * sunUp * (1.0 - fresnelWater(max(sunUp, 1e-3), 0.0)) / PI_S;
  scatter += bodyR * (beam + skyAmb * 0.94);

  // Entrained bubbles keep scattering for a while after the crest has broken.
  scatter += bodyR * bubbles * 0.55 * (skyAmb * 1.6 + sun * 0.10);

  // Whatever little climbs back out of the deep water below.
  vec3 deep = uWaterAbsorb * skyAmb * 0.8;
  vec3 refracted = scatter + deep;

  // ------------------------------------------------------------- combine
  vec3 color = mix(refracted, env, F) + spec;

  if (backLit) {
    // Looking out through the body of the wave. Almost nothing specular
    // survives — past the critical angle the surface is a mirror pointing back
    // into the dark water — but a great deal of light diffuses through the
    // sheet, which is why the inside of a breaking wave glows green.
    float thickness = clamp(0.35 + vWaveY * 0.04, 0.15, 1.0);
    // What reaches the eye through a sheet of water is the light behind it cut
    // down by absorption — not the two or three percent that backscatters.
    // Driving this off the volume reflectance instead makes the inside of every
    // wave a black hole, which is exactly what a tsunami face used to look like.
    vec3 through = (sun * max(L.y, 0.05) * 0.45 + skyAmb * 1.15)
                 * uWaterAbsorb / (1.0 + thickness * 2.0);
    // plus the light that genuinely scattered inside the body, and the bubbles
    // entrained in it, which is what gives a breaking wave its green core —
    // over a metre or two of water. Through the shoulder of a solitary wave the
    // same term is a wall of jade, so it dies with the depth behind the surface.
    through += bodyR * (sun * 2.2 + skyAmb * 1.8) * thinness;
    through += bodyR * bubbles * skyAmb * 1.4;
    color = mix(through, color, 0.18);
  }

  // ---------------------------------------------------------------- foam mat
  if (foam > 0.002 || foamThin > 0.002) {
    float foamAO = mix(0.62, 1.0, foamFine);
    vec3 foamAlbedo = vec3(0.93, 0.96, 0.985) * foamAO;
    float wrapNoL = clamp((dot(N, L) + 0.45) / 1.45, 0.0, 1.0);
    vec3 foamLit = foamAlbedo * (sun * wrapNoL * 0.30 + skyAmb * 0.95);
    // bubbles scatter the sun through the raft
    foamLit += foamAlbedo * sun * pow(clamp(dot(V, -L), 0.0, 1.0), 3.0) * 0.10 * foamFine;
    vec3 fspec = vec3(0.0);
    if (NoL > 0.0) {
      vec3 H = normalize(L + V);
      float NoH = max(dot(N, H), 0.0);
      float aF = 0.55;
      fspec = sun * ggxD(NoH, aF) * smithGGXCorrelated(NoV, max(NoL, 1e-4), aF) * 0.04 * NoL;
    }
    color = mix(color, foamLit + fspec, foam);
    // The bubble slick trailing a breaker is translucent, not paint: it lifts
    // the water a little and kills the specular, it does not turn it white.
    color = mix(color, mix(color, foamLit, 0.20), foamThin * (1.0 - foam));
  }

  color += vec3(rainRip) * sun * 0.02;
  vec3 preLightning = color;

  // ----------------------------------------------------------- lightning
  color += lightningContribution(vWorldPos, N, V, uLightning0, uLightning1, uLightningColor)
         * (0.55 + foam * 1.6);
  color += uAmbientFlash * uLightningColor * (0.02 + foam * 0.35 + F * 0.25);

  // ------------------------------------------------------ aerial perspective
  vec2 screenUv = gl_FragCoord.xy / uResolution;
  vec4 ap = sampleAerial(screenUv, vDist);
  vec3 tr = pow(vec3(clamp(ap.a, 0.0, 1.0)), vec3(1.0, 1.06, 1.16));
  color = color * tr + ap.rgb * uSunIntensity;

  if (uDebugMode > 0.5) {
    vec3 dbg = vec3(0.0);
    int m = int(uDebugMode + 0.5);
    if (m == 1) dbg = N * 0.5 + 0.5;
    else if (m == 2) dbg = vec3(foam, foamThin, foamMask * 0.3);
    else if (m == 3) dbg = env * 0.05;
    else if (m == 4) dbg = vec3(F);
    else if (m == 5) dbg = abs(vDisp) * 0.1;
    else if (m == 6) dbg = ap.rgb * uSunIntensity * 0.1;
    else if (m == 7) dbg = vec3(t1.r, t1.g, t1.b);
    else if (m == 8) dbg = vec3(roughness);
    else if (m == 9) dbg = refracted * 0.5;
    else if (m == 10) dbg = spec * 0.02;
    else if (m == 11) dbg = vec3(vLods / 8.0);
    else if (m == 12) dbg = vec3(fract(vDist * 0.001), fract(vDist * 0.01), 0.0);
    else if (m == 13) dbg = preLightning / 3.0;
    else if (m == 14) dbg = (color - preLightning * tr) / 3.0;
    else if (m == 15) dbg = vec3(sun) / 3.0;
    else if (m == 16) dbg = color / 3.0;
    else if (m == 17) dbg = lightningContribution(vWorldPos, N, V, uLightning0, uLightning1, uLightningColor) / 3.0;
    else if (m == 18) dbg = vec3(uAmbientFlash, uLightning0.w, uLightning1.w) / 3.0;
    oColor = vec4(dbg * 3.0, 1.0);
    oVelocity = vec4(0.0, 0.0, vDist, 1.0);
    return;
  }

  oColor = vec4(max(color, vec3(0.0)), 1.0);

  vec2 cur = vClipNJ.xy / max(vClipNJ.w, 1e-6);
  vec2 prv = vPrevClipNJ.xy / max(vPrevClipNJ.w, 1e-6);
  oVelocity = vec4((cur - prv) * 0.5, vDist, foam);
}
`,cl=class{constructor(e,t,n,r=null){this.fft=e,this.gridX=0,this.gridY=0;let i={uRMax:{value:68e3},uGridSize:{value:new H(1,1)},uGridMargin:{value:1.04},uSkirt:{value:1.1},uGridPlane:{value:0},uEventSteps:{value:16},uEventBisect:{value:8},uCurrentStrength:{value:26},uDisplaceScale:{value:1},uCascadeGain:{value:new K(1,1,1)},uWaterScatter:{value:new K(.018,.075,.088)},uWaterAbsorb:{value:new K(.004,.021,.036)},uFoamStrength:{value:1},uUnderwater:{value:0},uDebugMode:{value:0},...Z};e.bind(i),t.bind(i),i.uSunDir=Z.uSunDir,i.uSunColor=Z.uSunColor,i.uSunIntensity=Z.uSunIntensity,i.uAtmoTurbidity=Z.uAtmoTurbidity,i.uAtmoMieG=Z.uAtmoMieG,i.uAtmoGroundAlbedo=Z.uAtmoGroundAlbedo,i.uInvViewProjNJ=Z.uInvViewProjNJ;let a=r;i.uWeatherMap=a?.uWeatherMap??{value:null},i.uWeatherScaleM=a?.uWeatherScaleM??{value:58e3},i.uCoverage=a?.uCoverage??{value:0},i.uCloudContrast=a?.uCloudContrast??{value:1.6},i.uCloudDensity=a?.uCloudDensity??{value:.6},i.uCloudBottom=a?.uCloudBottom??{value:1200},i.uCloudWind=a?.uCloudWind??{value:new H},i.uCloudTime=a?.uCloudTime??{value:0},this.uniforms=i,this.material=new As({name:`OceanSurface`,glslVersion:Ve,vertexShader:ol,fragmentShader:sl,uniforms:i,side:2,transparent:!1,depthWrite:!0,depthTest:!0}),this.mesh=new Br(new Or,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=0,this.setResolution(n.oceanGridX,n.oceanGridY)}setResolution(e,t){if(e=Math.max(16,e|0),t=Math.max(12,t|0),this.gridX===e&&this.gridY===t)return;this.gridX=e,this.gridY=t;let n=this.mesh.geometry;this.mesh.geometry=al(e,t),n&&n.dispose(),this.uniforms.uGridSize.value.set(e,t),this.triangles=e*t*2}update(e,t=0){this.uniforms.uUnderwater.value=+(e.y<t)}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},ll=`
uniform sampler2D uSkyViewLUT;
uniform sampler2D uTransmittanceLUT;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform float uStarIntensity;
uniform float uAmbientFlash;
uniform vec3 uLightningColor;
uniform vec4 uLightning0;
uniform vec4 uLightning1;
uniform vec3 uCamPos;

const float SUN_ANGULAR_RADIUS = 0.00465;

vec3 sunDisc(vec3 dir, vec3 sunDir, vec3 transmittance) {
  float cosT = dot(dir, sunDir);
  float ang = acos(clamp(cosT, -1.0, 1.0));
  if (ang > SUN_ANGULAR_RADIUS * 1.6) return vec3(0.0);
  float r = clamp(ang / SUN_ANGULAR_RADIUS, 0.0, 1.0);
  // Limb darkening (Hestroffer & Magnan coefficients)
  float mu = sqrt(max(1.0 - r * r, 0.0));
  vec3 u = vec3(1.0);
  vec3 a = vec3(0.397, 0.503, 0.652);
  vec3 factor = 1.0 - u * (1.0 - pow(vec3(mu), a));
  float edge = 1.0 - smoothstep(1.0, 1.35, ang / SUN_ANGULAR_RADIUS);
  return transmittance * factor * edge * 18000.0;
}

vec3 starField(vec3 dir, float intensity) {
  if (intensity < 0.001) return vec3(0.0);
  vec3 col = vec3(0.0);
  for (int oct = 0; oct < 2; oct++) {
    float scale = (oct == 0) ? 340.0 : 780.0;
    vec3 p = dir * scale;
    vec3 i = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 h = hash33(i);
    if (h.x > (oct == 0 ? 0.982 : 0.9955)) {
      vec3 off = (hash33(i + 7.31) - 0.5) * 0.7;
      float d = length(f - off);
      float mag = pow(h.y, 3.0);
      float twinkle = 0.75 + 0.25 * sin(h.z * 90.0 + uTimeStars * (1.2 + h.z * 2.5));
      float s = exp(-d * d * 900.0) * mag * twinkle;
      vec3 tint = mix(vec3(0.68, 0.78, 1.0), vec3(1.0, 0.82, 0.62), h.z);
      col += tint * s;
    }
  }
  // milky way band
  float band = exp(-pow(dot(normalize(dir), normalize(vec3(0.42, 0.28, -0.86))) * 2.6, 2.0));
  float mw = fbm2Tiled(dirToEquirect(dir) * 26.0, 26.0, 5);
  col += vec3(0.55, 0.62, 0.86) * band * mw * 0.055;
  return col * intensity * 8.0;
}
`,ul=`
vec3 renderSky(vec3 dir, vec3 camPos) {
  vec3 viewPos = vec3(0.0, groundRadiusMM + max(camPos.y, 0.2) * 1e-6, 0.0);
  vec3 lum = getValFromSkyLUT(uSkyViewLUT, viewPos, dir, uSunDir);

  vec3 tr = getValFromTLUT(uTransmittanceLUT, viewPos, dir);
  if (dir.y > -0.02) {
    lum += sunDisc(dir, uSunDir, tr) * 0.00025;
  }

  // night sky
  float night = clamp(1.0 - (uSunDir.y + 0.12) * 6.0, 0.0, 1.0);
  lum += starField(dir, uStarIntensity * night) * 0.0016;

  return lum;
}
`,dl=`
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy, 1.0, 1.0); }
`,fl=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform mat4 uInvViewProj;
uniform mat4 uPrevViewProjNJ;
uniform mat4 uViewProjNJ;
uniform vec2 uResolution;
uniform sampler2D uCloudTex;
uniform float uCloudEnabled;
uniform float uTimeStars;
uniform float uFogDensity;

${Uc}
${il}
${vc}
${ll}
${ul}

in vec2 vUv;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

void main(){
  vec2 ndc = vUv * 2.0 - 1.0;
  vec4 p0 = uInvViewProj * vec4(ndc, -1.0, 1.0); p0 /= p0.w;
  vec4 p1 = uInvViewProj * vec4(ndc,  1.0, 1.0); p1 /= p1.w;
  vec3 dir = normalize(p1.xyz - p0.xyz);

  // The LUTs store radiance per unit solar irradiance, so the sun's strength is
  // applied here. The cloud layer already carries it — folding it in before the
  // composite instead of after is the difference between a lit deck and one
  // that is a hundred times too bright.
  vec3 sky = renderSky(dir, uCamPos) * uSunIntensity;

  if (uCloudEnabled > 0.5) {
    vec4 cl = texture(uCloudTex, vUv);
    sky = sky * cl.a + cl.rgb;
  }

  sky += uAmbientFlash * uLightningColor * 0.012 * max(0.0, 1.0 - abs(dir.y));

  oColor = vec4(sky, 1.0);

  vec3 farPt = uCamPos + dir * 40000.0;
  vec4 cur = uViewProjNJ * vec4(farPt, 1.0);
  vec4 prv = uPrevViewProjNJ * vec4(farPt, 1.0);
  // z is the linear view distance the depth-of-field and fog passes read; the
  // sky is at infinity, and leaving it at zero makes the CoC solver treat the
  // whole dome as if it were pressed against the lens.
  oVelocity = vec4((cur.xy / cur.w - prv.xy / prv.w) * 0.5, 40000.0, 1.0);
}
`,pl=`
precision highp float;
precision highp int;
precision highp sampler2D;

uniform sampler2D uCloudEnvTex;
uniform float uCloudEnabled;
uniform float uTimeStars;

${Uc}
${il}
${vc}
${ll}
${ul}

in vec2 vUv;
layout(location = 0) out vec4 oColor;

void main(){
  vec3 dir = equirectToDir(vUv);

  // Below the horizon the probe stands in for the sea itself. Leaving it black
  // would drain every rough reflection, so mirror the sky and tint it with the
  // water's own colour — that is very close to what a wave actually sees.
  float below = smoothstep(0.0, -0.22, dir.y);
  vec3 lookDir = mix(dir, vec3(dir.x, abs(dir.y) * 0.35 + 0.02, dir.z), below);

  vec3 sky = renderSky(normalize(lookDir), uCamPos) * uSunIntensity;
  if (uCloudEnabled > 0.5) {
    vec4 cl = texture(uCloudEnvTex, vUv);
    sky = sky * cl.a + cl.rgb;
  }
  sky += uAmbientFlash * uLightningColor * 0.012;
  sky = mix(sky, sky * vec3(0.16, 0.30, 0.38), below);
  oColor = vec4(sky, 1.0);
}
`,ml=class{constructor(n,r){this.renderer=n,this.atmosphere=r,this.starIntensity=1;let i={uSkyViewLUT:{value:r.skyViewRT.texture},uTransmittanceLUT:{value:r.transmittanceRT.texture},uSunDir:Z.uSunDir,uMoonDir:Z.uMoonDir,uSunColor:Z.uSunColor,uSunIntensity:Z.uSunIntensity,uCamPos:Z.uCamPos,uStarIntensity:{value:1},uAmbientFlash:Z.uAmbientFlash,uLightningColor:Z.uLightningColor,uLightning0:Z.uLightning0,uLightning1:Z.uLightning1,uAtmoTurbidity:Z.uAtmoTurbidity,uAtmoMieG:Z.uAtmoMieG,uAtmoGroundAlbedo:Z.uAtmoGroundAlbedo,uTimeStars:{value:0},uCloudEnabled:{value:0}};this.shared=i;let a=new Or;a.setAttribute(`position`,new _r(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),a.setAttribute(`uv`,new _r(new Float32Array([0,0,2,0,0,2]),2)),a.boundingSphere=new dn(new K,4),this.bgMaterial=new As({name:`SkyBackground`,glslVersion:Ve,vertexShader:dl,fragmentShader:fl,uniforms:{...i,uInvViewProj:Z.uInvViewProj,uViewProjNJ:Z.uViewProjNJ,uPrevViewProjNJ:Z.uPrevViewProjNJ,uResolution:Z.uResolution,uFogDensity:Z.uFogDensity,uCloudTex:{value:null}},depthTest:!1,depthWrite:!1}),this.mesh=new Br(a,this.bgMaterial),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.envRT=$(256,128,{type:g,name:`envProbe`,wrap:e,minFilter:c,mipmaps:!0}),this.envRT.texture.wrapS=e,this.envRT.texture.wrapT=t,this.envPass=new Q(pl,{...i,uCloudEnvTex:{value:null}},{name:`envProbe`}),Z.uEnvMap.value=this.envRT.texture,Z.uEnvMaxLod.value=Math.log2(256),Z.uEnvWidth.value=256}setCloudTextures(e,t){this.bgMaterial.uniforms.uCloudTex.value=e,this.envPass.uniforms.uCloudEnvTex.value=t;let n=+!!e;this.bgMaterial.uniforms.uCloudEnabled.value=n,this.envPass.uniforms.uCloudEnabled.value=n}update(e){this.shared.uTimeStars.value=e,this.bgMaterial.uniforms.uTimeStars.value=e,this.envPass.uniforms.uTimeStars.value=e,this.bgMaterial.uniforms.uStarIntensity.value=this.starIntensity,this.envPass.uniforms.uStarIntensity.value=this.starIntensity}renderEnv(){this.envPass.render(this.renderer,this.envRT)}},hl=[[0,0],[-1,-1],[1,-1],[-1,1],[1,1]],gl=new K,_l=new K,vl=`
uniform sampler3D uCloudShape;
uniform sampler3D uCloudDetail;
uniform sampler2D uCurlTex;
uniform sampler2D uWeatherMap;
uniform float uWeatherScaleM;   // metres per weather-map repeat
uniform vec4 uShapeLo;
uniform vec4 uShapeHi;
uniform vec4 uDetailLo;
uniform vec4 uDetailHi;

uniform float uCoverage;
uniform float uCloudDensity;
uniform float uCloudBottom;
uniform float uCloudTop;
uniform float uAnvil;
uniform float uStorm;
uniform vec2  uCloudWind;
uniform float uCloudTime;
uniform float uCloudScaleM;    // metres per shape-texture repeat
uniform float uCloudAspect;    // vertical squash: how many cells fit in the deck
uniform float uCloudContrast;  // how hard the weather map breaks the deck up
uniform float uSunIntensity;
uniform vec3  uSunDir;
uniform float uAmbientFlash;

// Skylight reaching the deck, in the same units as everything else in the
// frame. Written once per fragment from the sky LUT rather than carried as a
// uniform, because an ad-hoc ambient constant is impossible to keep in step
// with the sun's intensity and leaves storm cloud undersides pure black.
vec3 gAmbTop = vec3(0.0);
vec3 gAmbBottom = vec3(0.0);
uniform vec3  uLightningColor;
uniform vec4  uLightning0;
uniform vec4  uLightning1;

const float PLANET_R = 6360000.0;

float remap(float v, float a, float b, float c, float d) {
  return c + (v - a) * (d - c) / max(b - a, 1e-5);
}

// normalise a baked channel onto its measured 2..98 percentile range
vec4 shapeTex(vec3 uvw) {
  return clamp((textureLod(uCloudShape, uvw, 0.0) - uShapeLo) / (uShapeHi - uShapeLo), 0.0, 1.0);
}
vec4 detailTex(vec3 uvw) {
  return clamp((textureLod(uCloudDetail, uvw, 0.0) - uDetailLo) / (uDetailHi - uDetailLo), 0.0, 1.0);
}

/**
 * Vertical density profile. The type parameter runs 0 = flat stratus slab,
 * 0.5 = fair weather cumulus, 1 = full cumulonimbus tower with an anvil.
 */
float heightProfile(float h, float type) {
  // Blend where the profile rises and falls, not two already-evaluated curves.
  // Averaging a low stratus slab against a taller cumulus gives a curve that
  // never reaches 1 — above h=0.38 the old blend capped at 0.6, and since the
  // coverage threshold sits near 0.9 that made cloud *impossible* up there. The
  // deck collapsed into flat-lidded slabs all topping out at one altitude,
  // because the only thing still clearing the threshold was the narrow band
  // where both curves happened to overlap.
  float t = clamp(type * 2.0, 0.0, 1.0);
  float rise = mix(0.05, 0.13, t);       // stratus base is crisper than cumulus
  float fallFrom = mix(0.16, 0.48, t);   // where the shoulders start eroding
  float fallTo = mix(0.38, 0.95, t);     // and where nothing is left
  float lo = smoothstep(0.0, rise, h) * (1.0 - smoothstep(fallFrom, fallTo, h));

  // column that punches the whole deck and flares into an anvil
  float tower = smoothstep(0.0, 0.04, h) * (1.0 - smoothstep(0.88, 1.0, h));
  float anvil = smoothstep(0.58, 0.74, h) * (1.0 - smoothstep(0.90, 1.0, h));
  float cb = max(tower * 0.9, anvil);

  return mix(lo, cb, clamp(type * 2.0 - 1.0, 0.0, 1.0));
}

/**
 * Large-scale organisation. A real sky is never statistically uniform: cells
 * come in clusters and bands tens of kilometres across with clear lanes
 * between them, and that structure is most of what the eye uses to judge
 * whether a cloudscape is real. Returns (coverage, type, base lift).
 */
vec3 weatherAt(vec2 xz) {
  // The map drifts as a whole and the cells inside it drift again, so a system
  // evolves as it crosses the sky instead of sliding past rigidly.
  // Explicit level, always. Screen-space derivatives inside a raymarch loop are
  // meaningless — neighbouring fragments are at different steps, or have exited
  // entirely — and letting the hardware pick a mip from them tears the deck
  // along hard seams wherever the chosen level happens to change.
  vec2 w = xz + uCloudWind * uCloudTime * 0.6;
  vec4 m = textureLod(uWeatherMap, w / uWeatherScaleM, 0.0);
  vec4 n = textureLod(uWeatherMap, w / (uWeatherScaleM * 0.27)
                 + vec2(0.37, 0.11) - uCloudWind * uCloudTime * 0.00002, 0.0);

  float field = m.r * 0.62 + m.g * 0.22 + n.g * 0.16;
  // Contrast pivots about the requested coverage: uCoverage says how much sky
  // is cloud, the field says where. Narrowing that spread near the ends is
  // tempting but wrong — it starves exactly the light-coverage case, where each
  // surviving cell is already only a few shape voxels across and turns to
  // cubes. Instead only the zero itself is gated, because the pivot alone lets
  // an above-average field manufacture cloud out of a request for none, and
  // "clear sky" has to actually clear.
  float cover = clamp((field - 0.5) * uCloudContrast + uCoverage, 0.0, 1.0)
              * smoothstep(0.0, 0.05, uCoverage);
  // Cloud type: 0 is a flat stratus slab, 0.5 a fair-weather cumulus, 1 a
  // cumulonimbus tower. Fair weather is made of cumulus, so the floor sits
  // there and the storm control lifts the deepest cells into towers. Running
  // the whole range off uAnvil meant a clear day was drawn as a field of
  // stratus pancakes — the right density in entirely the wrong shape.
  float type = clamp(0.30 + 0.20 * m.b + uAnvil * (0.34 + 0.55 * m.b + 0.6 * m.a), 0.0, 1.0);
  // How far this column's whole profile rides above or below the nominal deck.
  // Without it the base is a geometric plane at a constant altitude, and once
  // coverage is high enough to close the gaps an observer underneath sees a
  // featureless grey ceiling — which is why an overcast storm can end up
  // reading as flat haze while the same cloud model looks fine at a distance.
  float lift = (n.r * 0.6 + m.g * 0.4 - 0.5) * 0.34;
  return vec3(cover, type, lift);
}

// diagnostics: last raw shape value / post-threshold base, read by the probe
float gShapeR = 0.0;
float gBase = 0.0;
// march internals, written unconditionally and only read when uCloudDebug asks
float gT0 = 0.0, gT1 = 0.0, gIters = 0.0, gSpent = 0.0, gCov = 0.0;

/**
 * @param detail how much erosion to apply, 0..2. Continuous on purpose: a hard
 *   LOD switch changes the density, not just its frequency content, and since
 *   the switch happens at a fixed distance it stamps a sharp arc across the sky
 *   wherever the deck crosses it.
 */
float cloudDensity(vec3 p, float h, float detail) {
  // Higher layers outrun the base: the shear is what tilts a tower downwind
  // and smears its anvil, and it costs nothing.
  vec3 q = p;
  q.xz += uCloudWind * uCloudTime * (0.6 + h * 1.5);

  vec3 wm = weatherAt(q.xz);
  float type = wm.y;
  // Anvils spread aloft, so the top of a mature cell covers far more sky — but
  // only a mature cell does. Keyed on plain cumulus this lays a translucent
  // sheet across the entire top of the deck and the sky hazes over.
  float anvilness = smoothstep(0.62, 1.0, type);
  float cov = mix(wm.x, min(wm.x * 1.8 + 0.24, 1.0), smoothstep(0.55, 0.88, h) * anvilness);
  gCov = max(gCov, cov);
  if (cov <= 0.01) return 0.0;

  // Ride the whole profile up or down with the system. heightProfile is zero
  // outside the unit interval, so this carves a ragged base and top rather than
  // merely fading the slab.
  float hs = h - wm.z;
  if (hs <= 0.0 || hs >= 1.0) return 0.0;

  vec3 uvw = q / uCloudScaleM;
  uvw.y *= uCloudAspect;
  // Scattered cloud slices the top few percent of the shape field, and the
  // maxima of a trilinearly interpolated 128^3 volume are its own voxel corners
  // — so at low coverage the sky came out as a field of axis-aligned bricks. A
  // domain warp finer than that lattice moves the isosurface off it without
  // touching the value distribution, so coverage still means what it says.
  vec3 warp = (detailTex(uvw * 11.0).rgb - 0.5) * 0.011;
  vec4 shape = shapeTex(uvw + warp);

  float fbmLow = shape.g * 0.625 + shape.b * 0.25 + shape.a * 0.125;
  // Schneider's dilation: widen the perlin-worley field by its own fbm so the
  // billows stay connected instead of breaking into popcorn
  float base = remap(shape.r, fbmLow * 0.92 - 1.0, 1.0, 0.0, 1.0);
  base *= heightProfile(hs, type);
  gShapeR = max(gShapeR, shape.r);
  gBase = max(gBase, base);

  // Coverage sweeps a threshold across the base distribution. The dilation
  // above lifts the mean of base well past 0.5, so the sweep still has to start
  // near 1.0 for zero coverage to mean a genuinely empty sky. What it must not
  // do is spend the low end of its travel up in the tail: sliced above ~0.85 a
  // cell is only three or four shape-texture voxels across, and a trilinear
  // blob that small is a rounded box that no amount of erosion can rescue. The
  // gamma keeps both endpoints exact and gets off the tail quickly, so light
  // coverage means a few real cumulus rather than a field of bricks.
  float d = remap(base, mix(0.99, 0.20, pow(cov, 0.67)), 1.0, 0.0, 1.0);
  if (d <= 0.0) return 0.0;

  // A cloud is not a soft blob: liquid water content ramps up fast just inside
  // the boundary. The smoothstep puts that hard edge back, which is most of
  // what separates "convincing cumulus" from "grey smudge".
  d = d * d * (3.0 - 2.0 * d);

  float w1 = clamp(detail, 0.0, 1.0);
  if (w1 > 0.001) {
    // Curl-distorted erosion: wispy tendrils at the base where the updraught
    // shears, cauliflower billows at the top where it punches through.
    vec2 curl = textureLod(uCurlTex, uvw.xz * 3.1, 0.0).rg * 2.0 - 1.0;
    vec3 dp = q / (uCloudScaleM * 0.2);
    dp.xz += curl * (1.0 - h) * 3.5;
    vec3 det = detailTex(dp).rgb;
    float detFbm = det.r * 0.625 + det.g * 0.25 + det.b * 0.125;
    float mod3 = mix(1.0 - detFbm, detFbm, clamp(h * 4.0, 0.0, 1.0));
    // Erosion bites hardest at the silhouette and barely at all in the core,
    // which is what turns a smooth blob into billows. It used to be capped low
    // so the boundary could not flicker between amortisation phases — but the
    // cure for that belongs in the resolve, and paying for it here meant never
    // carving a shape in the first place.
    float bite = mix(0.78, 0.14, smoothstep(0.20, 0.78, d));
    d = mix(d, remap(d, mod3 * bite, 1.0, 0.0, 1.0), w1);
    if (d <= 0.0) return 0.0;

    float w2 = clamp(detail - 1.0, 0.0, 1.0);
    if (w2 > 0.001) {
      // The octave that actually reads as cauliflower: tens of metres across,
      // on the lit shoulders. Warped by the curl again at a different rate so
      // it never sits in register with the octave above it.
      vec3 fp = dp * 3.1;
      fp.xz += curl * 0.9;
      vec3 fine = detailTex(fp).rgb;
      float f = fine.r * 0.62 + fine.g * 0.26 + fine.b * 0.12;
      float fbite = mix(0.46, 0.08, smoothstep(0.25, 0.85, d));
      d = mix(d, remap(d, f * fbite, 1.0, 0.0, 1.0), w2);
      if (d <= 0.0) return 0.0;
    }
  }

  return clamp(d, 0.0, 1.0) * uCloudDensity;
}

/** Intersect a ray with a sphere of radius r centred at the planet core. */
vec2 shellIntersect(vec3 ro, vec3 rd, float r) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - r * r;
  float disc = b * b - c;
  if (disc < 0.0) return vec2(-1.0);
  float s = sqrt(disc);
  return vec2(-b - s, -b + s);
}

/**
 * Folds atmospheric extinction between the eye and the cloud into the layer,
 * so distant cells wash out into the horizon haze exactly like the real thing.
 * Returns the premultiplied layer colour for "sky * a + rgb" compositing.
 */
vec3 applyAerial(vec3 scatter, float transmittance, float dist, vec3 hazeColor) {
  if (dist <= 0.0) return scatter;
  // sea-level extinction, thinned a little for the altitude of the deck
  vec3 beta = (vec3(5.802e-6, 13.558e-6, 33.1e-6)
             + vec3(3.996e-6) * uAtmoTurbidity) * 0.72;
  vec3 Ta = exp(-beta * dist);
  return scatter * Ta + hazeColor * (1.0 - Ta) * (1.0 - transmittance);
}

vec3 lightningGlow(vec3 p) {
  vec3 sum = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    vec4 l = (i == 0) ? uLightning0 : uLightning1;
    if (l.w <= 0.0001) continue;
    float d2 = dot(l.xyz - p, l.xyz - p);
    sum += uLightningColor * l.w * 6.0e6 / max(d2, 4.0e4);
  }
  return sum;
}
`,yl=`
uniform int uSteps;
uniform int uLightSteps;
uniform sampler2D uSkyAmbLUT;
// Ranges over which the two erosion octaves fade out, in metres along the ray.
uniform vec3 uDetailFade;

/**
 * Skylight arriving at the deck, split into what reaches the tops and what
 * crawls in under the base. Both come straight out of the sky LUT so they
 * track sunset, overcast and night without any hand-tuned constants.
 */
void skyAmbient(vec3 viewPos, vec3 rd) {
  vec3 up = getValFromSkyLUT(uSkyAmbLUT, viewPos, vec3(0.0, 1.0, 0.0), uSunDir);
  // Under a deck the only light comes in sideways from the bright ring at the
  // horizon, then bounces once off the water on its way up.
  vec3 side = getValFromSkyLUT(uSkyAmbLUT, viewPos,
                normalize(vec3(rd.x, 0.07, rd.z)), uSunDir);
  // Skylight is blue and comes from everywhere, so it is also the term that
  // flattens a cloud. Too much of it and a sunlit cumulus reads as a pale blue
  // smudge with no lit side and no shaded side — which is not a lighting bug
  // you can tonemap your way out of, it is the shape disappearing.
  gAmbTop = up * uSunIntensity * 1.45;
  // Still generous. A deck kilometres thick is optically opaque, so a strictly
  // single-scattering base integrates to black and the overcast stops reading
  // as weather and starts reading as night. The light is really there: it
  // arrives sideways from the bright ring under the deck edge and is piped
  // through the cloud by high-order scattering the light march truncates.
  gAmbBottom = (side * 0.50 + up * 0.15) * uSunIntensity * vec3(0.80, 0.88, 1.0);
}

// Extinction per unit density per metre. Real cumulus sit around 0.05/m, which
// makes a 500 m cell optically thick enough to hide the sun completely; we run
// a little under that because the raymarch cannot afford steps short enough to
// resolve the ~20 m skin where all the visible shading actually happens.
const float SIGMA = 0.022;

/**
 * Energy-conserving multiple-scattering approximation (Wrenninge octaves).
 * Light taps grow exponentially so a handful of samples still cover the deck.
 */
vec3 sampleLight(vec3 p, float mu, vec3 sunColor, float selfDensity, float jitter, int steps) {
  vec3 ld = uSunDir;
  float thickness = uCloudTop - uCloudBottom;
  float stepLen = thickness * 0.045;
  float depth = 0.0;
  // Small: the shadow march is smooth, so jitter here buys almost no banding
  // relief and costs visible noise in the lighting.
  float travelled = stepLen * (0.25 + 0.3 * jitter);
  for (int i = 0; i < 8; i++) {
    if (i >= steps) break;
    travelled += stepLen;
    vec3 sp = p + ld * travelled;
    float sh = clamp((length(sp) - (PLANET_R + uCloudBottom)) / thickness, 0.0, 1.0);
    // base octave only: the shadow of a wisp is not worth a 3D texture fetch
    depth += cloudDensity(sp, sh, 0.0) * stepLen;
    stepLen *= 1.62;
  }

  vec3 lum = vec3(0.0);
  float a = 1.0, b = 1.0, c = 1.0;
  for (int o = 0; o < 3; o++) {
    float beer = exp(-depth * SIGMA * b);
    // Powder: light that scattered back out of a dense edge before it could be
    // absorbed. It is the thing that makes a sunlit cumulus edge read as solid
    // rather than translucent, and it must key off the LOCAL density, not the
    // path integral, or it darkens the whole cloud instead of its rim.
    float powder = 1.0 - exp(-selfDensity * 14.0);
    float phase = dualHG(mu, 0.82 * c, -0.32 * c, 0.55);
    lum += sunColor * a * phase * beer * mix(1.0, powder, 0.6);
    // Successive octaves stand for light that has already bounced: each one is
    // dimmer but penetrates much further, and it is that long tail that keeps
    // the inside of a thick cell luminous grey instead of black. The tail has
    // to keep decaying though — at b = 0.09 the third octave barely attenuates
    // at all, so it acts as a second flat ambient and erases the very gradient
    // between the lit shoulder and the shaded flank it exists to soften.
    a *= 0.5; b *= 0.42; c *= 0.68;
  }
  return lum;
}

/**
 * Two-speed raymarch: long cheap strides (no detail octave) hunt for the cloud
 * boundary, then we back up and integrate with short detailed steps. Leaving a
 * cell reverts to striding. This is what makes a 4 km deck affordable at
 * horizon distances where the ray can cover 200 km inside the shell.
 *
 * @return vec4(scattered radiance, transmittance)
 */
vec4 marchClouds(vec3 ro, vec3 rd, float rayJitter, vec3 sunColor, out vec4 diag) {
  // diag = (first-hit distance, peak raw shape, peak density, taps inside cloud)
  diag = vec4(-1.0, 0.0, 0.0, 0.0);
  float depthOut = -1.0;
  float peakDensity = 0.0;
  vec3 center = vec3(0.0, -PLANET_R, 0.0);
  vec3 o = ro - center;

  float thickness = uCloudTop - uCloudBottom;
  float rInner = PLANET_R + uCloudBottom;
  float rOuter = PLANET_R + uCloudTop;
  vec2 tOuter = shellIntersect(o, rd, rOuter);
  if (tOuter.y < 0.0) return vec4(0.0, 0.0, 0.0, 1.0);
  vec2 tInner = shellIntersect(o, rd, rInner);

  float t0, t1;
  float ro_r = length(o);
  if (ro_r < rInner) {
    if (tInner.y < 0.0) return vec4(0.0, 0.0, 0.0, 1.0);
    t0 = tInner.y; t1 = tOuter.y;
  } else if (ro_r < rOuter) {
    t0 = 0.0;
    t1 = (tInner.x > 0.0) ? tInner.x : tOuter.y;
  } else {
    t0 = max(tOuter.x, 0.0);
    t1 = (tInner.x > 0.0) ? tInner.x : tOuter.y;
  }
  if (t1 <= t0) return vec4(0.0, 0.0, 0.0, 1.0);

  // Beyond this the deck is a few pixels tall on the horizon and the aerial
  // perspective has already washed it into the haze, so marching further only
  // buys banding.
  float maxDist = 140000.0;
  t1 = min(t1, t0 + maxDist);
  float span = t1 - t0;
  gT0 = t0; gT1 = t1;

  // Fine steps resolve the cell; they have to stay short enough that a single
  // step cannot swallow the whole optical depth, or the visible skin of the
  // cloud collapses to one flat sample. Tying this to the deck thickness would
  // make a 12 km storm deck step in 250 m chunks, which is exactly the case
  // where the skin matters most. Distance relaxes it because a far cell is a
  // pixel wide anyway.
  float nearFine = clamp(thickness * 0.005, 22.0, 48.0);

  float mu = dot(rd, uSunDir);
  vec3 scatter = vec3(0.0);
  float transmittance = 1.0;

  float t = t0 + nearFine * rayJitter;
  bool inside = false;
  int emptyRun = 0;
  int spent = 0;

  for (int i = 0; i < 512; i++) {
    gIters = float(i);
    if (spent >= uSteps || t > t1 || transmittance < 0.004) break;
    // Sample spacing is a quality decision and must not be stretched to make
    // the ray reach the far shell: a 500 m step swallows the whole optical
    // depth of a storm cell in one go, which flattens its skin to a single
    // sample and turns the ray-start jitter into salt-and-pepper noise.
    // Instead the step only grows once the budget is nearly gone, smoothly,
    // so a ray that runs long fades out rather than cutting off.
    float budget = float(uSteps - spent) / float(uSteps);
    float fine = nearFine * clamp(1.0 + t / 9000.0, 1.0, 22.0)
               * (1.0 + 7.0 * (1.0 - smoothstep(0.0, 0.35, budget)));
    // The stride is what hunts for the cloud boundary, so it cannot be longer
    // than the features it is hunting for: stride past a wisp and the ray
    // reports empty, and whether it does depends on the jitter, which is
    // precisely how a cloud edge turns into salt-and-pepper. Distance growth
    // is compounding, so this still reaches 140 km in about 120 taps.
    float stride = fine * 3.0;
    vec3 p = o + rd * t;
    float h = clamp((length(p) - rInner) / thickness, 0.0, 1.0);

    if (!inside) {
      if (cloudDensity(p, h, 0.0) > 0.0) {
        // Rewind to just before the boundary. The rewind lands on a grid that
        // is nearly identical for neighbouring rays, so without re-jittering
        // here the sample phase correlates across the screen and prints a comb
        // of stripes across every cloud face. One fine step of jitter is enough
        // to break that up; a whole stride just turns the comb into noise.
        t = max(t - stride + fine * rayJitter, t0);
        inside = true;
        emptyRun = 0;
      } else {
        t += stride;
      }
      continue;
    }

    // Detail octaves retire when what they carve stops resolving. Retiring the
    // fine octave at a kilometre and a bit — nearer than the cloud base itself
    // — meant every cloud in the sky was drawn from the base shape alone, and a
    // 128-cell volume stretched over seven kilometres holds nothing smaller
    // than a three-hundred-metre blob. That, and not the march resolution, is
    // what made the deck read as cotton wool.
    float detail = 2.0 - smoothstep(uDetailFade.x, uDetailFade.y, t)
                       - smoothstep(uDetailFade.y, uDetailFade.z, t);
    float dens = cloudDensity(p, h, detail);
    peakDensity = max(peakDensity, dens);
    spent++;
    if (dens > 0.0005) {
      diag.w += 1.0;
      emptyRun = 0;
      if (depthOut < 0.0) depthOut = t;

      // Once the cloud in front has eaten most of the light, nothing behind it
      // is resolvable, so the light march can drop to a couple of taps.
      int ls = transmittance > 0.25 ? uLightSteps : 2;
      vec3 lum = sampleLight(p, mu, sunColor, dens, rayJitter, ls);
      // Ambient: sky from above, ocean-tinted bounce from below, attenuated by
      // how deep inside the deck we are — that vertical gradient is what gives
      // a cloud its dark base and bright shoulders.
      // Skylight has to fight its way down through whatever cloud stands above
      // this sample. Without this the ambient term is the same everywhere along
      // the base and an overcast deck integrates to a flat grey sheet: the
      // relief is all there in the geometry, but nothing shades it. Two coarse
      // taps are enough, because what matters is the difference between a
      // sample under two hundred metres of cloud and one under two kilometres.
      float above = 0.0;
      {
        float span = max(uCloudTop - uCloudBottom, 200.0);
        vec3 up = normalize(p);
        above += cloudDensity(p + up * span * 0.10, min(h + 0.10, 1.0), 0.0) * span * 0.22;
        above += cloudDensity(p + up * span * 0.34, min(h + 0.34, 1.0), 0.0) * span * 0.46;
      }
      float skyVis = exp(-above * SIGMA * 0.55);

      vec3 amb = mix(gAmbBottom, gAmbTop, h);
      lum += amb * mix(0.55, 1.0, h) * mix(0.16, 1.0, skyVis);
      lum += lightningGlow(p + center);
      lum += uAmbientFlash * uLightningColor * 0.25;

      float tr = exp(-dens * SIGMA * fine);
      // analytic slab integration keeps banding away at low step counts
      scatter += lum * transmittance * (1.0 - tr);
      transmittance *= tr;
    } else if (++emptyRun > 4) {
      inside = false;
    }
    t += fine;
  }

  diag.x = depthOut;
  diag.y = gShapeR;
  diag.z = max(gBase, peakDensity);
  gSpent = float(spent);
  return vec4(scatter, transmittance);
}
`,bl=`
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec2 uLowRes;
uniform vec2 uSlotOffset;
uniform float uFrame;
// Temporary instrument: writes a march internal instead of radiance so the
// buffer can be blitted and read. 0 = off.
uniform int uCloudDebug;

${Uc}
${il}
${vc}
${vl}
${yl}

uniform sampler2D uTransmittanceLUT;
uniform sampler2D uSkyViewLUT;

in vec2 vUv;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oDepth;

void main(){
  vec2 lowPix = floor(gl_FragCoord.xy) * 4.0 + uSlotOffset + 0.5;
  vec2 uv = lowPix / uLowRes;

  vec2 ndc = uv * 2.0 - 1.0;
  vec4 p0 = uInvViewProj * vec4(ndc, -1.0, 1.0); p0 /= p0.w;
  vec4 p1 = uInvViewProj * vec4(ndc,  1.0, 1.0); p1 /= p1.w;
  vec3 rd = normalize(p1.xyz - p0.xyz);

  // Anything below the horizon is covered by the (spherical) ocean, so the
  // cloud march there is pure waste — that is nearly half the frame.
  float dip = -sqrt(2.0 * max(uCamPos.y, 0.0) / 6360000.0) - 0.003;
  if (rd.y < dip) {
    oColor = vec4(0.0, 0.0, 0.0, 1.0);
    oDepth = vec4(-1.0, 0.0, 0.0, 0.0);
    return;
  }

  vec3 viewPos = vec3(0.0, groundRadiusMM + max(uCamPos.y, 0.2) * 1e-6, 0.0);
  vec3 sunColor = getValFromTLUT(uTransmittanceLUT, viewPos, uSunDir) * uSunIntensity;
  skyAmbient(viewPos, rd);

  vec4 diag;
  // Jitter is a pure function of the low-res pixel, deliberately not of time.
  // Each pixel is re-marched on the same phase of the 4x4 amortisation cycle,
  // so a fixed offset means every refresh returns the same radiance and the
  // history can be replaced outright instead of crawling toward it. A temporal
  // offset would decorrelate successive refreshes, force a slow blend, and the
  // slow blend is exactly what drags the image back to the marched resolution
  // and prints its blocks the moment the camera moves.
  //
  // Bayer rather than a hash: the resolve filter averages a 4x4 neighbourhood,
  // and an ordered pattern guarantees those sixteen pixels carry the sixteen
  // distinct offsets exactly once. That is a stratified estimate of the ray
  // integral; white noise would leave clumps and gaps in the offsets and so a
  // visibly grainier average for the same number of samples.
  // Bayer stratifies the offsets across the sixteen pixels of a block, but its
  // period is exactly the period of the amortisation, so on its own every pixel
  // would be re-marched with the same offset forever and its sampling error
  // would freeze into a static 4x4 pattern that no amount of resolve filtering
  // removes. Rotating by the golden ratio once per refresh cycle keeps the
  // spatial stratification and lets the history average the error away instead.
  float cycle = floor(uFrame * 0.0625);
  vec4 cl = marchClouds(uCamPos, rd, fract(bayer4(lowPix) + 0.6180339887 * cycle),
                        sunColor, diag);

  vec3 haze = getValFromSkyLUT(uSkyViewLUT, viewPos, rd, uSunDir) * uSunIntensity;
  cl.rgb = applyAerial(cl.rgb, cl.a, diag.x, haze);

  if (uCloudDebug > 0) {
    // Three internals per pass so one capture answers three questions.
    vec3 v = (uCloudDebug == 1)
      ? vec3(gT0 / 40000.0, gIters / 512.0, gCov)             // entry, budget, weather
      : vec3(gSpent / float(uSteps), diag.z, diag.x / 60000.0); // steps, density, hit
    oColor = vec4(clamp(v, 0.0, 1.0), 1.0);
    oDepth = diag;
    return;
  }

  oColor = cl;
  oDepth = diag;
}
`,xl=`
precision highp float;
precision highp int;
uniform sampler2D uQuarter;      // freshly marched slice
uniform sampler2D uQuarterDiag;
uniform sampler2D uHistory;
uniform sampler2D uHistoryDiag;
uniform mat4 uPrevViewProj;
uniform mat4 uInvViewProj;
uniform vec3 uCamPos;
uniform vec2 uSlotOffset;
uniform float uReset;
uniform float uBlend;
uniform float uShellMid;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oDiag;

void main(){
  ivec2 lp = ivec2(gl_FragCoord.xy);
  ivec2 qp = lp >> 2;
  ivec2 slot = ivec2(uSlotOffset);
  bool fresh = (lp.x & 3) == slot.x && (lp.y & 3) == slot.y;

  vec4 cur = texelFetch(uQuarter, qp, 0);
  vec4 curDiag = texelFetch(uQuarterDiag, qp, 0);

  // Where there is no history to blend against, seed from a bilinear read of
  // the marched buffer rather than the nearest texel: point-sampling it hands
  // every pixel of a 4x4 amortisation cell the same value, so the sky prints as
  // hard rectangles until all sixteen slots have been revisited. Soft and
  // low-resolution converges to sharp; blocky reads as broken.
  vec4 smooth_ = texture(uQuarter, vUv);
  vec4 smoothDiag = texture(uQuarterDiag, vUv);

  if (uReset > 0.5) {
    oColor = fresh ? cur : smooth_;
    oDiag = fresh ? curDiag : smoothDiag;
    return;
  }

  // reproject using this pixel's own history depth; fall back to the shell mid
  float dist = texture(uHistoryDiag, vUv).x;
  if (dist <= 0.0) dist = uShellMid;

  vec2 ndc = vUv * 2.0 - 1.0;
  vec4 p0 = uInvViewProj * vec4(ndc, -1.0, 1.0); p0 /= p0.w;
  vec4 p1 = uInvViewProj * vec4(ndc,  1.0, 1.0); p1 /= p1.w;
  vec3 rd = normalize(p1.xyz - p0.xyz);
  vec4 prevClip = uPrevViewProj * vec4(uCamPos + rd * dist, 1.0);
  vec2 prevUv = (prevClip.xy / max(prevClip.w, 1e-6)) * 0.5 + 0.5;

  // Disoccluded at the edge the camera is panning into — same story as a reset.
  if (any(lessThan(prevUv, vec2(0.0))) || any(greaterThan(prevUv, vec2(1.0)))) {
    oColor = fresh ? cur : smooth_;
    oDiag = fresh ? curDiag : smoothDiag;
    return;
  }

  vec4 hist = texture(uHistory, prevUv);
  vec4 histDiag = texture(uHistoryDiag, prevUv);

  // Reject stale history the same way TAA does: the 3x3 block of freshly
  // marched samples around this pixel bounds what it can plausibly be. Without
  // this, whole regions can hold onto pre-camera-cut content indefinitely.
  vec4 lo = cur, hi = cur;
  ivec2 qmax = textureSize(uQuarter, 0) - 1;
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec4 s = texelFetch(uQuarter, clamp(qp + ivec2(x, y), ivec2(0), qmax), 0);
    lo = min(lo, s); hi = max(hi, s);
  }
  // Generous: this exists to catch history that survived a camera cut, not to
  // police detail. Clamping tightly against a 4x-coarser neighbourhood drags
  // every pixel back toward the marched resolution and prints its blocks.
  vec4 tol = (hi - lo) * 1.5 + vec4(0.06, 0.06, 0.06, 0.12);
  hist = clamp(hist, lo - tol, hi + tol);

  if (fresh) {
    oColor = mix(hist, cur, uBlend);
    oDiag = curDiag;
  } else {
    oColor = hist;
    oDiag = histDiag;
  }
}
`,Sl=`
precision highp float;
uniform sampler2D uSrc;
uniform vec2 uInvSrc;
uniform vec2 uSrcRes;
uniform float uSharpen;   // 0 = trust the low buffer, 1 = hide the block grid
in vec2 vUv;
layout(location = 0) out vec4 oColor;

// Catmull-Rom over the nine nearest texels, gathered as four bilinear taps.
// Straight bilinear magnification turns a half-resolution cumulus into a
// lattice of diamonds; the cubic keeps an edge an edge.
vec4 bicubic(vec2 uv) {
  vec2 pos = uv * uSrcRes - 0.5;
  vec2 base = floor(pos);
  vec2 f = pos - base;
  vec2 f2 = f * f, f3 = f2 * f;
  vec2 w0 = f2 - 0.5 * (f3 + f);
  vec2 w1 = 1.5 * f3 - 2.5 * f2 + 1.0;
  vec2 w3 = 0.5 * (f3 - f2);
  vec2 w2 = 1.0 - w0 - w1 - w3;
  vec2 s0 = w0 + w1, s1 = w2 + w3;
  vec2 t0 = (base - 0.5 + w1 / s0) * uInvSrc;
  vec2 t1 = (base + 1.5 + w3 / s1) * uInvSrc;
  return texture(uSrc, vec2(t0.x, t0.y)) * (s0.x * s0.y)
       + texture(uSrc, vec2(t1.x, t0.y)) * (s1.x * s0.y)
       + texture(uSrc, vec2(t0.x, t1.y)) * (s0.x * s1.y)
       + texture(uSrc, vec2(t1.x, t1.y)) * (s1.x * s1.y);
}

void main(){
  vec4 c = bicubic(vUv);
  if (uSharpen > 0.002) {
    // Snap to the nearest texel corner first. A bilinear tap sitting exactly on
    // a corner is the average of the four texels around it, so four such taps
    // one texel out on each diagonal are an exact 4x4 box. Left unsnapped they
    // land mid-texel, the box stops being a box, and the cancellation is only
    // partial.
    vec2 corner = (floor(vUv / uInvSrc - 0.5) + 1.0) * uInvSrc;
    vec4 wide = texture(uSrc, corner + vec2(-1.0, -1.0) * uInvSrc)
              + texture(uSrc, corner + vec2( 1.0, -1.0) * uInvSrc)
              + texture(uSrc, corner + vec2(-1.0,  1.0) * uInvSrc)
              + texture(uSrc, corner + vec2( 1.0,  1.0) * uInvSrc);
    c = mix(c, wide * 0.25, uSharpen);
  }
  c.a = clamp(c.a, 0.0, 1.0);
  oColor = max(c, vec4(0.0));
}
`,Cl=`
precision highp float;
precision highp int;
precision highp sampler2D;
precision highp sampler3D;

uniform vec3 uCamPos;
uniform float uFrame;

${Uc}
${il}
${vc}
${vl}
${yl}

uniform sampler2D uTransmittanceLUT;
uniform sampler2D uSkyViewLUT;

in vec2 vUv;
layout(location = 0) out vec4 oColor;

void main(){
  vec3 rd = equirectToDir(vUv);
  if (rd.y < -0.02) { oColor = vec4(0.0, 0.0, 0.0, 1.0); return; }

  vec3 viewPos = vec3(0.0, groundRadiusMM + max(uCamPos.y, 0.2) * 1e-6, 0.0);
  vec3 sunColor = getValFromTLUT(uTransmittanceLUT, viewPos, uSunDir) * uSunIntensity;
  skyAmbient(viewPos, rd);

  vec4 diag;
  vec4 cl = marchClouds(uCamPos, rd, hash12(gl_FragCoord.xy + uFrame), sunColor, diag);
  vec3 haze = getValFromSkyLUT(uSkyViewLUT, viewPos, rd, uSunDir) * uSunIntensity;
  cl.rgb = applyAerial(cl.rgb, cl.a, diag.x, haze);
  oColor = cl;
}
`,wl=class{constructor(e,t,n,r){this.renderer=e,this.atmosphere=t,this.enabled=!0,this.frame=0,this.reset=!0;let i=e=>{let t=e?.userData?.percentiles;return t?[new G(...t.lo),new G(...t.hi)]:[new G(0,0,0,0),new G(1,1,1,1)]},[a,o]=i(n.cloudShape),[s,c]=i(n.cloudDetail);this.shared={uCloudShape:{value:n.cloudShape},uCloudDetail:{value:n.cloudDetail},uShapeLo:{value:a},uShapeHi:{value:o},uDetailLo:{value:s},uDetailHi:{value:c},uCurlTex:Z.uCurlTex,uWeatherMap:{value:n.weather},uWeatherScaleM:{value:58e3},uCoverage:{value:.4},uCloudDensity:{value:.6},uCloudBottom:{value:1200},uCloudTop:{value:5200},uAnvil:{value:0},uStorm:Z.uStormFactor,uCloudWind:{value:new H(6,2)},uCloudTime:{value:0},uCloudScaleM:{value:15e3},uCloudAspect:{value:2.6},uCloudContrast:{value:1.6},uSunIntensity:Z.uSunIntensity,uSunDir:Z.uSunDir,uSkyAmbLUT:{value:t.skyViewRT.texture},uAmbientFlash:Z.uAmbientFlash,uLightningColor:Z.uLightningColor,uLightning0:Z.uLightning0,uLightning1:Z.uLightning1,uTransmittanceLUT:{value:t.transmittanceRT.texture},uSkyViewLUT:{value:t.skyViewRT.texture},uAtmoTurbidity:Z.uAtmoTurbidity,uAtmoMieG:Z.uAtmoMieG,uAtmoGroundAlbedo:Z.uAtmoGroundAlbedo,uSteps:{value:64},uLightSteps:{value:6}};let l=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];this.slots=Array(16);for(let e=0;e<16;e++)this.slots[l[e]]=[e%4,e/4|0];this.marchPass=new Q(bl,{...this.shared,uInvViewProj:Z.uInvViewProjNJ,uCamPos:Z.uCamPos,uLowRes:{value:new H(1,1)},uSlotOffset:{value:new H},uFrame:Z.uFrame,uDetailFade:{value:new K(9e3,34e3,95e3)},uCloudDebug:{value:0}},{name:`cloudMarch`}),this.reprojPass=new Q(xl,{uQuarter:{value:null},uQuarterDiag:{value:null},uHistory:{value:null},uHistoryDiag:{value:null},uPrevViewProj:Z.uPrevViewProjNJ,uInvViewProj:Z.uInvViewProjNJ,uCamPos:Z.uCamPos,uSlotOffset:{value:new H},uReset:{value:1},uBlend:{value:.4},uShellMid:{value:2e4}},{name:`cloudReproj`}),this.upsamplePass=new Q(Sl,{uSrc:{value:null},uInvSrc:{value:new H},uSrcRes:{value:new H},uSharpen:{value:0}},{name:`cloudUpsample`}),this._blockHide=0,this.envPass=new Q(Cl,{...this.shared,uCamPos:Z.uCamPos,uFrame:Z.uFrame,uSteps:{value:18},uLightSteps:{value:3},uDetailFade:{value:new K(1500,4e3,12e3)}},{name:`cloudEnv`}),this.setQuality(r)}setQuality(n){this.scale=n.cloudScale,this.enabled=n.cloudEnabled,this.marchPass.uniforms.uSteps.value=n.cloudSteps,this.marchPass.uniforms.uLightSteps.value=n.cloudLightSteps,this.envPass.uniforms.uSteps.value=n.envCloudSteps,this.envSize=Math.max(64,Math.floor(n.envSize/2)),this.envRT&&this.envRT.width!==this.envSize&&(this.envRT.dispose(),this.envRT=null),this.envRT||(this.envRT=$(this.envSize,this.envSize/2,{type:g,name:`cloudEnv`,wrap:e}),this.envRT.texture.wrapS=e,this.envRT.texture.wrapT=t),this.fullW&&this.setSize(this.fullW,this.fullH,!0)}setSize(e,t,n=!1){let r=Math.max(16,Math.ceil(e*this.scale/4)*4),i=Math.max(16,Math.ceil(t*this.scale/4)*4);!n&&this.lowW===r&&this.lowH===i||(this.fullW=e,this.fullH=t,this.lowW=r,this.lowH=i,this.quarterRT?.dispose(),this.history?.dispose(),this.fullRT?.dispose(),this.quarterRT=$(r/4,i/4,{type:g,count:2,name:`cloudQuarter`,minFilter:o,magFilter:o}),this.history=new _c(r,i,{type:g,count:2,name:`cloudHist`}),this.fullRT=$(e,t,{type:g,name:`cloudFull`}),this.marchPass.uniforms.uLowRes.value.set(r,i),this.reset=!0)}_reprojectionShift(e){let t=Z.uInvViewProjNJ.value,n=Z.uPrevViewProjNJ.value,r=Z.uCamPos.value,i=0;for(let a of hl){if(gl.set(a[0],a[1],-1).applyMatrix4(t),_l.set(a[0],a[1],1).applyMatrix4(t),_l.sub(gl).normalize().multiplyScalar(e).add(r).applyMatrix4(n),!Number.isFinite(_l.x)||!Number.isFinite(_l.y))return 1e3;let o=(_l.x-a[0])*.5*this.lowW,s=(_l.y-a[1])*.5*this.lowH;i=Math.max(i,Math.hypot(o,s))}return i}update(e,t){if(!this.enabled)return;let n=this.renderer,r=this.shared;r.uCloudTime.value=e;let i=Math.max(r.uCloudTop.value-r.uCloudBottom.value,200);r.uCloudAspect.value=gt.clamp(r.uCloudScaleM.value/(i*4.4),.8,1.7);let a=this.slots[this.frame%16];this.marchPass.uniforms.uSlotOffset.value.set(a[0],a[1]),this.reprojPass.uniforms.uSlotOffset.value.set(a[0],a[1]),this.frame++,this.marchPass.render(n,this.quarterRT);let o=(r.uCloudBottom.value+r.uCloudTop.value)*.5;this.reprojPass.set(`uQuarter`,this.quarterRT.textures[0]).set(`uQuarterDiag`,this.quarterRT.textures[1]).set(`uHistory`,this.history.read.textures[0]).set(`uHistoryDiag`,this.history.read.textures[1]).set(`uReset`,this.reset||this.forceReset?1:0).set(`uShellMid`,Math.max(o,500)*6),this.reprojPass.render(n,this.history.write),this.history.swap();let s=this._reprojectionShift(Math.max(o,500)*6),c=gt.clamp((s-.3)/1.8,0,1);this._blockHide+=(c-this._blockHide)*(c>this._blockHide?.55:.045),this.upsamplePass.set(`uSrc`,this.history.read.textures[0]),this.upsamplePass.set(`uSharpen`,this._blockHide*.85),this.upsamplePass.uniforms.uInvSrc.value.set(1/this.lowW,1/this.lowH),this.upsamplePass.uniforms.uSrcRes.value.set(this.lowW,this.lowH),this.upsamplePass.render(n,this.fullRT),(this.frame%8==0||this.reset)&&this.envPass.render(n,this.envRT),this.reset=!1}get screenTexture(){return this.enabled?this.fullRT.texture:null}get envTexture(){return this.enabled?this.envRT.texture:null}dispose(){this.quarterRT?.dispose(),this.history?.dispose(),this.fullRT?.dispose(),this.envRT?.dispose()}},Tl=2048,El=`
precision highp float;
in vec3 position;
in vec3 aStart;
in vec3 aEnd;
in vec2 aWidth;       // (core width, glow width)
in vec2 aLife;        // (bolt index, branch fade)

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCamPos;
uniform vec4 uBoltState[4];   // xyz unused, w = current intensity

out vec2 vUv;
out float vIntensity;
out float vGlow;

void main(){
  int bi = int(aLife.x + 0.5);
  float intensity = uBoltState[bi].w * aLife.y;
  vIntensity = intensity;

  vec3 seg = aEnd - aStart;
  vec3 mid = mix(aStart, aEnd, 0.5);
  vec3 toEye = normalize(uCamPos - mid);
  vec3 side = normalize(cross(normalize(seg), toEye));

  // widen with distance so a far bolt never falls below a pixel
  float dist = length(uCamPos - mid);
  float widen = 1.0 + dist * 0.0016;
  float w = mix(aWidth.x, aWidth.y, position.z) * widen * (intensity > 0.001 ? 1.0 : 0.0);
  vGlow = position.z;

  vec3 p = aStart + seg * position.y + side * (position.x * w);
  vUv = vec2(position.x, position.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Dl=`
precision highp float;
in vec2 vUv;
in float vIntensity;
in float vGlow;
uniform vec3 uColor;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

void main(){
  float r = abs(vUv.x);
  // core is a hot near-white filament, glow is a wide soft halo
  float core = exp(-r * r * 26.0);
  float halo = exp(-r * r * 2.4);
  vec3 c = mix(uColor * halo * 0.55, vec3(1.0, 0.98, 0.95) * core, 1.0 - vGlow);
  float ends = smoothstep(0.0, 0.06, vUv.y) * (1.0 - smoothstep(0.94, 1.0, vUv.y));
  oColor = vec4(c * vIntensity * 420.0 * ends, 1.0);
  oVelocity = vec4(0.0, 0.0, 1e5, 0.0);
}
`,Ol=class{constructor(){this.bolts=[],this.time=0,this.ambientFlash=0,this._tmp=new K;let e=new Gs,t=new Float32Array([-1,0,0,1,0,0,1,1,0,-1,0,0,1,1,0,-1,1,0,-1,0,1,1,0,1,1,1,1,-1,0,1,1,1,1,-1,1,1]);e.setAttribute(`position`,new _r(t,3)),this.aStart=new ks(new Float32Array(Tl*3),3),this.aEnd=new ks(new Float32Array(Tl*3),3),this.aWidth=new ks(new Float32Array(Tl*2),2),this.aLife=new ks(new Float32Array(Tl*2),2);for(let e of[this.aStart,this.aEnd,this.aWidth,this.aLife])e.setUsage(Be);e.setAttribute(`aStart`,this.aStart),e.setAttribute(`aEnd`,this.aEnd),e.setAttribute(`aWidth`,this.aWidth),e.setAttribute(`aLife`,this.aLife),e.instanceCount=0,e.boundingSphere=new dn(new K,1e6),this.material=new As({name:`Lightning`,glslVersion:Ve,vertexShader:El,fragmentShader:Dl,uniforms:{uCamPos:Z.uCamPos,uColor:Z.uLightningColor,uBoltState:{value:[new G,new G,new G,new G]}},transparent:!0,blending:2,depthWrite:!1,depthTest:!0}),this.mesh=new Br(e,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.geom=e,this.segCount=0}burst(e,t={}){let n=t.radius??3200,r=t.cloudBase??1400;for(let i=0;i<e;i++){let e=Math.random()*(t.window??3),i=Math.random()*Math.PI*2,a=n*(.25+Math.random()*.95);this.schedule(Math.cos(i)*a,Math.sin(i)*a,r*(.85+Math.random()*.5),e)}}schedule(e,t,n,r){this._pending=this._pending||[],this._pending.push({x:e,z:t,top:n,at:this.time+r})}strike(e,t,n){this.bolts.length>=3&&this.bolts.shift();let r=[],i=new K(e,n,t),a=new K(e+(Math.random()-.5)*n*.5,0,t+(Math.random()-.5)*n*.5);this._grow(r,i,a,n*.42,0,1);let o=2+(Math.random()*3|0);for(let i=0;i<o;i++){let i=Math.random()*Math.PI*2,a=n*(.5+Math.random()),o=new K(e,n*(1+Math.random()*.25),t),s=new K(e+Math.cos(i)*a,n*(1.05+Math.random()*.3),t+Math.sin(i)*a);this._grow(r,o,s,a*.3,2,.45)}let s=1+(Math.random()*3|0),c=[],l=0;for(let e=0;e<s;e++)c.push({at:l,dur:.035+Math.random()*.09,amp:.62**e}),l+=.04+Math.random()*.11;this.bolts.push({segments:r,flashes:c,born:this.time,life:l+.35,pos:new K(e,n*.35,t),intensity:0}),this._dirty=!0}_grow(e,t,n,r,i,a){if(e.length>2040)return;if(i>5||t.distanceTo(n)<40){e.push({a:t.clone(),b:n.clone(),fade:a});return}let o=t.clone().add(n).multiplyScalar(.5),s=n.clone().sub(t).normalize(),c=new K(-s.z,0,s.x);c.lengthSq()<1e-6&&c.set(1,0,0),c.normalize();let l=new K().crossVectors(s,c);if(o.addScaledVector(c,(Math.random()-.5)*r),o.addScaledVector(l,(Math.random()-.5)*r),this._grow(e,t,o,r*.55,i+1,a),this._grow(e,o,n,r*.55,i+1,a),i<3&&Math.random()<.42){let u=t.distanceTo(n)*(.35+Math.random()*.45),d=s.clone().addScaledVector(c,(Math.random()-.5)*1.5).addScaledVector(l,(Math.random()-.5)*1.5).normalize(),f=o.clone().addScaledVector(d,u);this._grow(e,o,f,r*.5,i+2,a*.5)}}update(e,t,n){if(this.time=t,this._pending?.length){for(let e=this._pending.length-1;e>=0;e--)if(this._pending[e].at<=t){let t=this._pending.splice(e,1)[0];this.strike(t.x,t.z,t.top)}}let r=n?.lightningRate??0;r>0&&Math.random()<r*e*.9&&(this.ambientFlash=Math.max(this.ambientFlash,.35+Math.random()*.9)),this.ambientFlash*=Math.exp(-e*5.5);let i=!1;for(let e=this.bolts.length-1;e>=0;e--){let n=this.bolts[e],r=t-n.born;if(r>n.life){this.bolts.splice(e,1),i=!0;continue}let a=0;for(let e of n.flashes){let t=(r-e.at)/e.dur;if(t>=0&&t<=1){let n=(1-t)**1.7*(.75+.25*Math.sin(t*61));a=Math.max(a,e.amp*n)}}a=Math.max(a,Math.exp(-r*7)*.05),n.intensity=a}i&&(this._dirty=!0),this._dirty&&this._rebuild();let a=this.material.uniforms.uBoltState.value;for(let e=0;e<4;e++){let t=this.bolts[e];a[e].set(0,0,0,t?t.intensity:0)}let o=[...this.bolts].sort((e,t)=>t.intensity-e.intensity);for(let e=0;e<2;e++){let t=e===0?Z.uLightning0:Z.uLightning1,n=o[e];n&&n.intensity>.001?t.value.set(n.pos.x,n.pos.y,n.pos.z,n.intensity):t.value.set(0,0,0,0)}Z.uAmbientFlash.value=this.ambientFlash+(o[0]?.intensity??0)*.55,this.mesh.visible=this.bolts.length>0}_rebuild(){this._dirty=!1;let e=0,t=this.aStart.array,n=this.aEnd.array,r=this.aWidth.array,i=this.aLife.array;for(let a=0;a<this.bolts.length&&a<4;a++)for(let o of this.bolts[a].segments){if(e>=Tl)break;t[e*3]=o.a.x,t[e*3+1]=o.a.y,t[e*3+2]=o.a.z,n[e*3]=o.b.x,n[e*3+1]=o.b.y,n[e*3+2]=o.b.z,r[e*2]=2.2*o.fade,r[e*2+1]=26*o.fade,i[e*2]=a,i[e*2+1]=o.fade,e++}this.segCount=e,this.geom.instanceCount=e;for(let e of[this.aStart,this.aEnd,this.aWidth,this.aLife])e.needsUpdate=!0}},kl=`
precision highp float;

in vec3 position;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

out vec3 vWorld;

void main(){
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Al=`
precision highp float;

${Uc}
${il}
${vc}

in vec3 vWorld;

uniform vec3  uCamPos;
uniform float uTime;
uniform vec3  uSunDir;
uniform float uSunIntensity;
uniform sampler2D uTransmittanceLUT;
uniform sampler2D uSkyViewLUT;
uniform vec3  uLightningColor;
uniform float uAmbientFlash;
uniform vec2  uWindDir;

// xy = base position on the sea (world x, z), z = intensity 0..1, w = height
uniform vec4  uSpout;
#define SPOUT_XZ (uSpout.xy)
#define SPOUT_AMP (uSpout.z)
// x = base radius, y = top flare, z = lean, w = age in seconds
uniform vec4  uShape;
uniform int   uSteps;
uniform float uDebug;

layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

const float PLANET_R = 6360000.0;

// --------------------------------------------------------------- funnel form
// Where the axis sits at a given height. Real funnels lean downwind and snake:
// the vortex is embedded in a sheared flow, so each level is displaced a little
// further than the one below it and the whole column writhes on a slow period.
// A straight cone reads as a traffic cone no matter how well it is lit.
vec2 axisAt(float h){
  float t = uTime * 0.45;
  float lean = uShape.z * h * h;
  vec2 downwind = normalize(uWindDir + 1e-5);
  vec2 wander = vec2(
    sin(h * 3.1 + t * 1.1) * 0.55 + sin(h * 6.7 - t * 0.7) * 0.22,
    cos(h * 2.6 - t * 0.9) * 0.55 + cos(h * 5.3 + t * 1.3) * 0.22
  );
  return SPOUT_XZ + downwind * lean + wander * (14.0 + 30.0 * h);
}

// Sheath radius: a rope that necks down toward the water and opens out into the
// parent cloud at the top. The wobble matters as much as the taper — a perfect
// surface of revolution reads as turned metal however well it is shaded.
float radiusAt(float h){
  float tube = uShape.x * (0.48 + 0.85 * pow(h, 1.5));
  float flare = uShape.y * pow(smoothstep(0.58, 1.0, h), 2.6);
  float wob = 1.0 + 0.30 * sin(h * 7.3 - uTime * 0.9) * sin(h * 3.1 + uTime * 0.55)
                  + 0.14 * sin(h * 17.0 + uTime * 1.7);
  return tube * wob + flare;
}

/**
 * The analytic envelope of the column: sheath, hollow core and the spray
 * cascade at the waterline, with no noise at all.
 *
 * Kept separate from the textured density because it answers the two questions
 * that dominate the cost — "is this sample anywhere near the funnel" and "how
 * much water is between here and the sun" — and neither needs the detail. The
 * noise is only paid for on samples that actually contribute to the image.
 */
float funnelShape(vec3 p, float h, out float rn, out float ang, out float cascade){
  rn = 9.0; ang = 0.0; cascade = 0.0;
  vec2 d = p.xz - axisAt(h);
  float r = length(d);
  float R = radiusAt(h);
  if (r > R * 2.9 + 30.0) return 0.0;

  rn = r / max(R, 1.0);
  ang = atan(d.y, d.x);

  // Dense wall, hollow-ish core. Condensation tracks the steepest pressure
  // gradient, which sits at the radius of maximum wind rather than on the axis,
  // and that hollow is what gives a spout its glassy translucent edge.
  float wall = smoothstep(1.06, 0.80, rn) * smoothstep(0.10, 0.46, rn);
  float core = smoothstep(0.62, 0.0, rn) * 0.55;
  float body = wall + core;

  // ragged where it meets the water, dissolving into the parent cloud on top
  body *= mix(0.55, 1.0, smoothstep(0.0, 0.16, h));
  body *= 1.0 - smoothstep(0.86, 1.0, h) * 0.55;

  // Where the circulation reaches the sea it tears a cascade of spray off the
  // surface: far wider than the funnel, only tens of metres tall, and brighter
  // than the sheath because it is dense liquid water rather than vapour. It has
  // to stay low, or it stops reading as spray and becomes a plinth.
  float cascH = 22.0 + uShape.x * 0.7;
  if (p.y < cascH * 3.5) {
    float cr = r / (R * 3.4 + 34.0);
    cascade = exp(-p.y / cascH)
            * smoothstep(1.0, 0.30, cr)
            * smoothstep(0.0, 0.22, cr);
  }

  return max(body, 0.0);
}

// Textured density. Sampled in the rotating frame of the vortex so the noise
// resolves into helical striations climbing the column instead of a static
// crust. Angular speed rises as the radius drops — conservation of angular
// momentum, and the reason the neck of a spout always looks the most violent.
float funnelDetail(float shape, float cascade, float rn, float ang, float h, float y){
  float R = radiusAt(h);
  float omega = 3.4 * uShape.x / max(R, 4.0);
  float phase = ang + uTime * omega + h * 5.5;

  float n = vnoise3(vec3(phase * 1.7, h * 11.0 - uTime * 0.85, rn * 2.2));
  n = n * 0.62 + vnoise3(vec3(phase * 4.1, h * 26.0 - uTime * 1.7, rn * 4.0)) * 0.38;

  // Wide swing, because the striations are the only thing that keeps the sheath
  // from reading as a moulded surface, and a gentle modulation vanishes the
  // moment the column is optically thick.
  float body = shape * mix(0.10, 1.75, n);
  if (cascade > 0.001) {
    float cn = vnoise3(vec3(ang * 3.1 + uTime * 1.9, y * 0.10 - uTime * 0.8, rn * 2.4));
    cn = cn * 0.7 + vnoise3(vec3(ang * 7.0 - uTime * 2.6, y * 0.22, rn * 5.0)) * 0.3;
    // squared: spray is lumpy, with dense knots and torn gaps between them
    body += cascade * cn * cn * 3.4;
  }
  return max(body, 0.0) * SPOUT_AMP;
}

// Shadowing along the sun direction, so the column has a lit and an unlit side
// instead of glowing uniformly. The envelope alone is enough here: the light
// march only needs the bulk optical depth, and the striations average out.
float lightTransmittance(vec3 p, float top){
  float acc = 0.0;
  float step = max(top * 0.06, 8.0);
  for (int i = 1; i <= 2; ++i) {
    vec3 q = p + uSunDir * step * float(i);
    float h = clamp(q.y / top, 0.0, 1.0);
    float rn, ang, casc;
    acc += (funnelShape(q, h, rn, ang, casc) + casc * 1.2) * SPOUT_AMP;
  }
  return exp(-acc * step * 0.055);
}

void main(){
  // uDebug 3: paint every rasterised fragment of the proxy box, before any
  // analytic rejection, to separate "the box never draws" from "the march
  // rejects everything".
  if (uDebug > 2.5) {
    oColor = vec4(0.0, 0.0, 3.0, 0.4);
    oVelocity = vec4(0.0);
    return;
  }
  if (SPOUT_AMP <= 0.001) discard;

  vec3 ro = uCamPos;
  vec3 rd = normalize(vWorld - ro);
  float top = uSpout.w;

  // Bound the march to a vertical cylinder around the whole swept column. This
  // is far tighter than the proxy box and costs one quadratic.
  float Rmax = radiusAt(1.0) + 60.0;
  vec2 oc = ro.xz - SPOUT_XZ;
  float a = dot(rd.xz, rd.xz);
  float b = dot(oc, rd.xz);
  float c = dot(oc, oc) - Rmax * Rmax;
  float disc = b * b - a * c;
  if (disc <= 0.0 || a < 1e-6) discard;
  float sq = sqrt(disc);
  float t0 = (-b - sq) / a;
  float t1 = (-b + sq) / a;
  if (t1 <= 0.0) discard;
  t0 = max(t0, 0.0);

  // clip to the slab between the sea and the cloud base
  if (abs(rd.y) > 1e-5) {
    float ta = (0.0 - ro.y) / rd.y;
    float tb = (top - ro.y) / rd.y;
    float lo = min(ta, tb), hi = max(ta, tb);
    t0 = max(t0, lo); t1 = min(t1, hi);
  } else if (ro.y < 0.0 || ro.y > top) {
    discard;
  }
  if (t1 <= t0) discard;

  // The sea hides everything behind it. Cutting the ray at the water line stops
  // the funnel from painting over the ocean on the far side of the horizon.
  float seaT = 1e9;
  if (rd.y < -1e-5) seaT = (0.0 - ro.y) / rd.y;
  t1 = min(t1, seaT);
  if (t1 <= t0) discard;

  // uDebug 2: paint the bounding volume, so a missing funnel can be told apart
  // from a funnel that is simply too thin to see.
  if (uDebug > 1.5) {
    oColor = vec4(0.0, 3.0, 0.0, 0.35);
    oVelocity = vec4(0.0);
    return;
  }

  float span = t1 - t0;
  int steps = uSteps;
  float dt = span / float(steps);
  float jitter = bayer4(gl_FragCoord.xy);

  vec3 viewPos = vec3(0.0, groundRadiusMM + max(uCamPos.y, 0.2) * 1e-6, 0.0);
  vec3 sunCol = getValFromTLUT(uTransmittanceLUT, viewPos, uSunDir) * uSunIntensity;
  vec3 ambTop = getValFromSkyLUT(uSkyViewLUT, viewPos, vec3(0.0, 1.0, 0.0), uSunDir) * uSunIntensity;
  vec3 ambSide = getValFromSkyLUT(uSkyViewLUT, viewPos, normalize(vec3(rd.x, 0.08, rd.z)), uSunDir) * uSunIntensity;

  float cosT = dot(rd, uSunDir);
  // Water droplets throw most light forward; the strong forward lobe is why a
  // spout between you and the sun turns into a bright pillar.
  float phase = dualHG(cosT, 0.72, -0.15, 0.35) * 4.0;

  vec3 scatter = vec3(0.0);
  float transmit = 1.0;

  for (int i = 0; i < 96; ++i) {
    if (i >= steps || transmit < 0.012) break;
    float t = t0 + (float(i) + jitter) * dt;
    vec3 p = ro + rd * t;
    float h = clamp(p.y / top, 0.0, 1.0);

    float rn, ang, casc;
    float shape = funnelShape(p, h, rn, ang, casc);
    if (shape + casc < 0.004) continue;

    float dens = funnelDetail(shape, casc, rn, ang, h, p.y);
    if (dens > 0.002) {
      float lt = lightTransmittance(p, top);
      // Direct sun has to carry the form. Skylight is nearly isotropic, so
      // leaning on it flattens the column into a paper cut-out; the lit and
      // shadowed sides of the rope are what make it read as a solid volume.
      vec3 lum = sunCol * lt * phase * 1.6;
      lum += mix(ambSide * 0.9, ambTop * 1.15, h) * 0.26;
      // Deeper into the sheath is darker, because less skylight gets in.
      lum *= mix(1.0, 0.45, clamp(dens * 0.7, 0.0, 1.0));
      lum += uLightningColor * uAmbientFlash * 1.4;

      // Dense enough that the rope is solid where the sheath is thick, thin
      // enough that the march still resolves structure through it. Push this up
      // and every ray saturates on its first sample, which throws away the
      // striations and leaves a white plastic tube.
      float sigma = 0.042;
      float tr = exp(-dens * sigma * dt);
      scatter += lum * transmit * (1.0 - tr);
      transmit *= tr;
    }
  }

  float alpha = clamp(1.0 - transmit, 0.0, 1.0);
  if (alpha < 0.003) discard;

  if (uDebug > 0.5) {
    oColor = vec4(vec3(6.0, 0.0, 6.0) * alpha, alpha);
    oVelocity = vec4(0.0);
    return;
  }

  oColor = vec4(scatter, alpha);
  oVelocity = vec4(0.0);
}
`,jl=class{constructor(){this.active=!1,this.x=0,this.z=0,this.age=0,this.life=0,this.maxLife=34,this.strength=1,this.uniforms={uCamPos:Z.uCamPos,uTime:Z.uTime,uSunDir:Z.uSunDir,uSunIntensity:Z.uSunIntensity,uTransmittanceLUT:{value:null},uSkyViewLUT:{value:null},uLightningColor:Z.uLightningColor,uAmbientFlash:Z.uAmbientFlash,uWindDir:Z.uWindDir,uAtmoTurbidity:Z.uAtmoTurbidity,uAtmoMieG:Z.uAtmoMieG,uAtmoGroundAlbedo:Z.uAtmoGroundAlbedo,uSpout:{value:new G(0,0,0,900)},uShape:{value:new G(26,150,90,0)},uSteps:{value:56},uDebug:{value:0}},this.material=new As({name:`Waterspout`,glslVersion:Ve,vertexShader:kl,fragmentShader:Al,uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0,side:1,blending:5,blendSrc:201,blendDst:205}),this.mesh=new Br(new Ur(1,1,1),this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.mesh.visible=!1}setLUTs(e){this.uniforms.uTransmittanceLUT.value=e.transmittanceRT.texture,this.uniforms.uSkyViewLUT.value=e.skyViewRT.texture}setQuality(e){this.uniforms.uSteps.value=e.spoutSteps??56}spawn(e,t,n=30){this.active=!0,this.x=e,this.z=t,this.life=0,this.strength=n,this.maxLife=34}clear(){this.active=!1,this.mesh.visible=!1}update(e,t){if(!this.active){this.mesh.visible=!1;return}this.life+=e;let n=this.life/this.maxLife;if(n>=1){this.clear();return}let r=Math.min(1,this.life/4.5),i=1-Math.max(0,(n-.72)/.28)**1.6,a=Math.max(0,r*i),o=Math.max(300,Math.min(t??900,1500)),s=this.strength/30,c=(9+9*s)*(.7+.3*r),l=30+45*s;this.uniforms.uSpout.value.set(this.x,this.z,a,o),this.uniforms.uShape.value.set(c,l,(30+55*s)*r,this.life);let u=c*1.4+l+60+60;this.mesh.position.set(this.x,o*.5,this.z),this.mesh.scale.set(u*2,o,u*2),this.mesh.visible=!0}},Ml=`
precision highp float;
in vec3 position;
in vec2 uv;
in float aIndex;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 uCamPos;
uniform vec3 uCamFwd;
uniform float uTime;
uniform float uRain;
uniform vec2 uWindDir;
uniform float uWindSpeed;
uniform float uGustiness;
uniform vec2 uBox;          // (half extent, height)
uniform float uCount;
uniform float uStreak;      // shutter length in seconds
uniform float uSeaLevel;
uniform float uPixelScale;  // world units per pixel at one metre of depth
uniform float uDebug;

out vec2 vUv;
out float vFade;
out float vSeed;
out float vThin;
out vec3 vWorld;

${vc}

void main(){
  float id = aIndex;
  vec3 h = hash33(vec3(id * 0.0013, id * 0.0071, id * 0.0037));
  vSeed = h.z;

  // Only a fraction of the slots are live at low rain rates. Fading a drop in
  // rather than popping it keeps the onset of a squall smooth.
  float live = step(h.x, clamp(uRain * 1.15, 0.0, 1.0));

  // Bias the field toward the camera's view direction: rain behind the lens is
  // wasted geometry, so the box is pushed forward along the look vector.
  vec3 anchor = uCamPos + uCamFwd * uBox.x * 0.45;
  anchor.y = uCamPos.y;

  // terminal velocity of a raindrop, 4 m/s for drizzle to 9 m/s for a downpour
  float size = mix(0.35, 1.0, h.y);
  float vy = mix(4.2, 9.4, size) * mix(0.85, 1.15, h.z);
  vec2 gust = uWindDir * uWindSpeed * (0.78 + uGustiness * 0.5 * sin(uTime * 0.7 + h.z * 6.28));

  // wrap the fall so the slot recycles without any state
  float fall = mod(h.z * uBox.y + uTime * vy, uBox.y);
  vec3 wp;
  wp.y = anchor.y + uBox.y * 0.55 - fall;

  // Uniform density in space wastes almost every drop: at 80 m a raindrop is
  // far under a pixel. Biasing the radius toward the camera gives roughly
  // uniform density on screen instead, which is what the eye reads as rain.
  float ang = h.x * 6.2831853;
  float rad = uBox.x * pow(h.y, 1.7);
  vec2 drift = gust * (fall / max(vy, 0.1));
  wp.xz = anchor.xz + vec2(cos(ang), sin(ang)) * rad + drift;
  // keep the slab centred on the camera as the drift carries it away
  wp.xz -= floor((wp.xz - anchor.xz) / (2.0 * uBox.x) + 0.5) * (2.0 * uBox.x);

  vec3 vel = vec3(gust.x, -vy, gust.y);
  float speed = length(vel);
  vec3 dir = vel / max(speed, 1e-4);

  vec3 toEye = uCamPos - wp;
  float dist = length(toEye);
  toEye /= max(dist, 1e-4);
  vec3 side = normalize(cross(dir, toEye));

  // The streak is what the shutter integrates: the drop's own length is
  // irrelevant, only how far it travels while the frame is open.
  float len = clamp(speed * uStreak, 0.30, 3.2) * mix(0.7, 1.3, size);

  // A raindrop is a few millimetres across, which is far under a pixel at any
  // useful distance. Rasterising that honestly gives a flickering dotted mess,
  // so the quad is held at a floor of about one pixel and the opacity is scaled
  // down by exactly the factor it was widened. That keeps the total light the
  // streak contributes correct, and it is what makes distant rain settle into a
  // grey veil instead of a swarm of confetti.
  float worldPerPx = uPixelScale * dist;
  float trueWide = mix(0.006, 0.016, size);
  float wide = max(trueWide, worldPerPx * 1.15);
  vThin = clamp(trueWide / wide, 0.10, 1.0);

  vec3 p = wp + dir * (position.y - 0.5) * len + side * position.x * wide;

  // Rain arrives in curtains, not as a uniform field. A slow noise sheet
  // drifting downwind gates whole swathes of the box, which is most of what
  // sells a squall — and it means the near field breathes as gusts pass.
  vec2 curtainUv = (wp.xz - uWindDir * uTime * 9.0) * 0.0055;
  float curtain = fbm2Tiled(curtainUv, 64.0, 3) * 0.5 + 0.55;
  curtain = smoothstep(0.30, 0.72, curtain + uRain * 0.35);

  // fade at the box edges and kill anything that has fallen into the sea
  float edge = 1.0 - smoothstep(uBox.x * 0.72, uBox.x, length(wp.xz - anchor.xz));
  float above = smoothstep(-0.5, 2.0, wp.y - uSeaLevel);
  vFade = live * edge * above * curtain * clamp(uRain * 1.6, 0.0, 1.0);

  vUv = vec2(position.x, position.y);
  vWorld = wp;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  if (vFade <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); }
}
`,Nl=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in float vFade;
in float vSeed;
in float vThin;
in vec3 vWorld;

uniform sampler2D uEnvMap;
uniform float uEnvMaxLod;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uCamPos;
uniform vec3 uLightningColor;
uniform float uAmbientFlash;
uniform float uDebug;

${il}

layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

void main(){
  // cylindrical cross-section: bright core falling off to the edges
  float r = vUv.x * 2.0;
  float body = sqrt(max(1.0 - r * r, 0.0));
  float ends = smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.88, 1.0, vUv.y));
  if (uDebug > 0.5) {
    float ad = vFade * body * ends;
    oColor = vec4(vec3(30.0, 0.0, 30.0) * ad, ad);
    oVelocity = vec4(0.0);
    return;
  }

  // A drop is a lens. It gathers light from a wide cone and concentrates it
  // toward the eye, which is why rain reads bright against a dark sea even
  // under a flat grey sky — the streak is far brighter than the sky behind it.
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 look = normalize(vWorld - uCamPos);
  vec3 refr = normalize(mix(look, up, 0.55 + r * 0.25));
  vec3 lens = textureLod(uEnvMap, dirToEquirect(refr), uEnvMaxLod * 0.45).rgb;

  // total internal reflection puts a hard glint on the sun side of the drop
  float glint = pow(max(dot(refr, uSunDir), 0.0), 24.0);
  vec3 col = lens * (1.15 + body * 0.7) + uSunColor * uSunIntensity * glint * 0.9;
  col += uLightningColor * uAmbientFlash * 2.5;

  float a = vFade * body * ends * vThin * 0.7;
  oColor = vec4(col * a, a);
  // leave the velocity/depth buffer alone: these are transparent overlays and
  // should inherit the motion of whatever they are drawn over
  oVelocity = vec4(0.0);
}
`,Pl=class{constructor(e){let t=new Gs,n=new Float32Array([-.5,0,0,.5,0,0,.5,1,0,-.5,0,0,.5,1,0,-.5,1,0]),r=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]);t.setAttribute(`position`,new _r(n,3)),t.setAttribute(`uv`,new _r(r,2)),this.max=e.rainCount??24e3;let i=new Float32Array(this.max);for(let e=0;e<this.max;e++)i[e]=e;t.setAttribute(`aIndex`,new ks(i,1)),t.instanceCount=0,t.boundingSphere=new dn(new K,1e6),this.material=new As({name:`Rain`,glslVersion:Ve,vertexShader:Ml,fragmentShader:Nl,uniforms:{uCamPos:Z.uCamPos,uCamFwd:{value:new K(0,0,-1)},uTime:Z.uTime,uRain:Z.uRain,uWindDir:Z.uWindDir,uWindSpeed:Z.uWindSpeed,uGustiness:Z.uGustiness,uSeaLevel:Z.uSeaLevel,uBox:{value:new H(80,52)},uCount:{value:this.max},uStreak:{value:.042},uPixelScale:{value:.002},uEnvMap:Z.uEnvMap,uEnvMaxLod:Z.uEnvMaxLod,uSunDir:Z.uSunDir,uSunColor:Z.uSunColor,uSunIntensity:Z.uSunIntensity,uLightningColor:Z.uLightningColor,uAmbientFlash:Z.uAmbientFlash,uDebug:{value:0}},transparent:!0,depthWrite:!1,depthTest:!0,side:2,blending:5,blendSrc:201,blendDst:205}),this.mesh=new Br(t,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,this.geom=t}setQuality(e){this.max=Math.min(this.max,e.rainCount??this.max),this.budget=e.rainCount??this.max}update(e,t,n){let r=Math.min(this.max,Math.ceil((this.budget??this.max)*Math.min(t*1.2,1)));if(this.geom.instanceCount=r,this.mesh.visible=r>0,r===0)return;e.getWorldDirection(this.material.uniforms.uCamFwd.value);let i=Math.max(n||720,16);this.material.uniforms.uPixelScale.value=2*Math.tan(e.fov*.5*Math.PI/180)/i}},Fl=`
precision highp float;
precision highp sampler2D;

uniform sampler2D uPos;      // xyz = world position, w = age
uniform sampler2D uVel;      // xyz = velocity, w = seed
uniform float uDt;
uniform float uTime;
uniform vec3 uCamPos;
uniform float uSprayAmount;
uniform float uRadius;
uniform float uFrame;

${vc}
OCEAN_SAMPLE_PLACEHOLDER

in vec2 vUv;
layout(location = 0) out vec4 oPos;
layout(location = 1) out vec4 oVel;

/**
 * Sea surface height under a world xz, including the analytic modifiers.
 * The cascades have no mip chain, so every fetch has to be level 0.
 */
float seaHeight(vec2 xz, out float breaking) {
  float foamHint;
  vec2 q = swirlCoords(xz, uTime);
  vec3 d = oceanDisplacementLod(q, vec3(0.0), foamHint);
  float crest, calm;
  vec3 m = oceanModifiers(xz, uTime, crest, calm);
  // spray is torn where the wind sea breaks; the swell cascade contributes the
  // big plunging crests and the capillary one is far too fine to matter
  vec4 t0 = texture(uOceanTurb0, q / uOceanScales.x);
  vec4 t1 = texture(uOceanTurb1, q / uOceanScales.y);
  breaking = max(max(t1.a, t0.a * 0.7), crest);
  return d.y + m.y + uSeaLevel;
}

void main(){
  vec4 P = texture(uPos, vUv);
  vec4 V = texture(uVel, vUv);
  float age = P.w;
  float seed = V.w;

  // NaN never compares true, so a texel that started as uninitialised garbage
  // would stay "alive" forever with a position that never rasterises.
  bool dead = !(age > 0.0) || any(isnan(P.xyz)) || any(isnan(V.xyz));
  if (!dead) {
    // drag toward the local wind, gravity, and a little turbulent jitter
    vec3 wind = vec3(uWindDir.x, 0.0, uWindDir.y) * uWindSpeed;
    vec3 rel = wind - V.xyz;
    // small droplets couple to the air much faster than large ones
    float drag = mix(0.35, 2.6, seed);
    V.xyz += (rel * drag - vec3(0.0, 9.81, 0.0)) * uDt;
    V.xyz += (hash33(P.xyz * 0.7 + uTime) - 0.5) * uWindSpeed * 0.35 * uDt;
    P.xyz += V.xyz * uDt;
    age -= uDt;

    float breaking;
    float sea = seaHeight(P.xz, breaking);
    if (P.y < sea - 0.15) age = 0.0;
    if (length(P.xz - uCamPos.xz) > uRadius * 1.35) age = 0.0;
    dead = age <= 0.0;
  }

  if (dead) {
    // Look for a breaking crest to be born on. Whitecaps cover a few percent of
    // the sea even in a gale, so a single blind candidate per frame would take
    // a hundred frames to fill the budget; three keeps the refill snappy while
    // the cost stays a fixed handful of taps.
    P = vec4(0.0, -1e6, 0.0, 0.0);
    V = vec4(0.0);
    for (int k = 0; k < 3; k++) {
      vec3 r = hash33(vec3(vUv * 512.0, uFrame * 0.017 + float(k) * 7.31));
      float ang = r.x * 6.2831853;
      // Uniform area sampling puts almost every droplet in the far ring where
      // it is sub-pixel. Bias the radius inward so screen density is even.
      float rad = uRadius * pow(r.y, 1.55) + 4.0;
      vec2 xz = uCamPos.xz + vec2(cos(ang), sin(ang)) * rad;
      float breaking;
      float sea = seaHeight(xz, breaking);

      if (r.z < breaking * uSprayAmount * 2.2) {
        vec3 wind = vec3(uWindDir.x, 0.0, uWindDir.y) * uWindSpeed;
        P = vec4(xz.x, sea + 0.3, xz.y, mix(1.1, 3.4, r.z));
        // torn off the crest: mostly downwind, with an upward kick
        vec3 kick = wind * mix(0.45, 1.05, r.x)
                  + vec3(0.0, 1.0, 0.0) * (3.5 + breaking * 9.0) * mix(0.6, 1.5, r.y);
        // splash out sideways as well, so a crest reads as a bursting sheet
        vec2 lat = vec2(-uWindDir.y, uWindDir.x) * (r.x - 0.5) * uWindSpeed * 0.35;
        V = vec4(kick + vec3(lat.x, 0.0, lat.y), r.y);
        break;
      }
    }
  } else {
    P.w = age;
  }

  oPos = P;
  oVel = V;
}
`,Il=`
precision highp float;
precision highp sampler2D;
in vec3 position;
in vec2 aTexel;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform sampler2D uPos;
uniform sampler2D uVel;
uniform vec3 uCamPos;
uniform float uSize;
uniform float uDebug;

out vec2 vUv;
out float vAlpha;
out float vSeed;
out vec3 vWorld;

void main(){
  // explicit level: a vertex stage has no derivatives to pick one from
  vec4 P = textureLod(uPos, aTexel, 0.0);
  vec4 V = textureLod(uVel, aTexel, 0.0);
  vUv = position.xy;

  if (uDebug > 1.5) {
    vAlpha = P.w > 0.0 ? 1.0 : 0.0; vSeed = 0.5;
    vec3 c = P.xyz;
    vWorld = c;
    vec3 te = normalize(uCamPos - c);
    vec3 sd = normalize(cross(vec3(0.0, 1.0, 0.0), te));
    vec3 upv = cross(te, sd);
    gl_Position = projectionMatrix * modelViewMatrix
                * vec4(c + sd * position.x * 2.0 + upv * position.y * 2.0, 1.0);
    return;
  }
  vSeed = V.w;

  if (P.w <= 0.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vAlpha = 0.0; return; }

  // fade in as it is torn off, fade out as the droplet evaporates or falls
  float life = clamp(P.w / 2.6, 0.0, 1.0);
  vAlpha = smoothstep(0.0, 0.12, 1.0 - life) * smoothstep(0.0, 0.35, life);

  vec3 toEye = uCamPos - P.xyz;
  float dist = length(toEye);
  toEye /= max(dist, 1e-4);
  vec3 side = normalize(cross(vec3(0.0, 1.0, 0.0), toEye));
  vec3 up = cross(toEye, side);

  // stretch along the direction of travel: fast droplets read as streaks
  float speed = length(V.xyz);
  vec3 dir = V.xyz / max(speed, 1e-4);
  float stretch = 1.0 + clamp(speed * 0.05, 0.0, 2.2);
  vec3 axis = normalize(dir - toEye * dot(dir, toEye) + side * 1e-5);
  vec3 perp = cross(toEye, axis);

  // grow with distance so a far plume keeps a few pixels instead of aliasing
  float s = uSize * mix(0.55, 1.9, vSeed) * (1.0 + dist * 0.018);
  vec3 wp = P.xyz + axis * (position.y * s * stretch) + perp * (position.x * s);

  vWorld = wp;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(wp, 1.0);
}
`,Ll=`
precision highp float;
precision highp sampler2D;
in vec2 vUv;
in float vAlpha;
in float vSeed;
in vec3 vWorld;

uniform sampler2D uEnvMap;
uniform float uEnvMaxLod;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform float uSunIntensity;
uniform vec3 uCamPos;
uniform vec3 uLightningColor;
uniform float uAmbientFlash;
uniform float uDebug;

${il}

layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oVelocity;

void main(){
  float d = length(vUv);
  if (d > 1.0) discard;
  // soft droplet cluster, denser in the middle
  float a = pow(1.0 - d, 1.6) * vAlpha;
  if (uDebug > 0.5) {
    oColor = vec4(vec3(0.0, 30.0, 10.0) * a, a);
    oVelocity = vec4(0.0);
    return;
  }

  vec3 look = normalize(vWorld - uCamPos);
  // A droplet cloud scatters mostly forward: it lights up when the sun is
  // behind it, which is what makes wind-torn spray glow off a wave crest.
  float mu = dot(look, uSunDir);
  float phase = 0.55 + 1.9 * pow(max(mu, 0.0), 6.0);

  vec3 sky = textureLod(uEnvMap, dirToEquirect(vec3(look.x, abs(look.y) * 0.5 + 0.2, look.z)), uEnvMaxLod * 0.6).rgb;
  vec3 col = sky * 0.85 + uSunColor * uSunIntensity * phase * 0.12;
  col += uLightningColor * uAmbientFlash * 0.5;

  oColor = vec4(col * a, a * 0.85);
  oVelocity = vec4(0.0);
}
`,Rl=class{constructor(e,t,n,r,i,a,o){this.renderer=e,this.size=0,this._FullScreenPass=r,this._makeRT=i,this._PingPong=a,this.oceanFFT=t;let s=Fl.replace(`OCEAN_SAMPLE_PLACEHOLDER`,o);this.simUniforms={uPos:{value:null},uVel:{value:null},uDt:{value:.016},uTime:Z.uTime,uFrame:Z.uFrame,uCamPos:Z.uCamPos,uSprayAmount:Z.uSprayAmount,uRadius:{value:420},...Z},t.bind(this.simUniforms),this.simPass=new r(s,this.simUniforms,{name:`spraySim`}),this.material=new As({name:`Spray`,glslVersion:Ve,vertexShader:Il,fragmentShader:Ll,uniforms:{uPos:{value:null},uVel:{value:null},uCamPos:Z.uCamPos,uSize:{value:.55},uDebug:{value:0},uEnvMap:Z.uEnvMap,uEnvMaxLod:Z.uEnvMaxLod,uSunDir:Z.uSunDir,uSunColor:Z.uSunColor,uSunIntensity:Z.uSunIntensity,uLightningColor:Z.uLightningColor,uAmbientFlash:Z.uAmbientFlash},transparent:!0,depthWrite:!1,depthTest:!0,blending:5,blendSrc:201,blendDst:205});let c=new Gs;c.setAttribute(`position`,new _r(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),3)),c.boundingSphere=new dn(new K,1e6),this.geom=c,this.mesh=new Br(c,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,this.setQuality(n)}setQuality(e){let t=Math.max(8,Math.round(Math.sqrt(e.sprayCount??4096)));if(t===this.size)return;this.size=t,this.state?.dispose(),this.state=new this._PingPong(t,t,{type:h,minFilter:r,magFilter:r,count:2,name:`sprayState`});let n=new Float32Array(t*t*2);for(let e=0,r=0;e<t;e++)for(let i=0;i<t;i++,r+=2)n[r]=(i+.5)/t,n[r+1]=(e+.5)/t;this.geom.setAttribute(`aTexel`,new ks(n,2)),this.geom.instanceCount=t*t,this.reset=!0}update(e,t){let n=t>.005;if(this.mesh.visible=n,!n)return;let r=this.state;this.simPass.set(`uPos`,r.read.textures[0]),this.simPass.set(`uVel`,r.read.textures[1]),this.simPass.uniforms.uDt.value=Math.min(e,.05),this.simPass.uniforms.uRadius.value=420,this.simPass.render(this.renderer,r.write),r.swap(),this.material.uniforms.uPos.value=r.read.textures[0],this.material.uniforms.uVel.value=r.read.textures[1]}dispose(){this.state?.dispose(),this.simPass?.dispose()}},zl=`
${vc}
${il}
uniform sampler2D uCurrent;
uniform sampler2D uHistory;
uniform sampler2D uVelocity;
uniform vec2 uInvResolution;
uniform vec2 uJitter;
uniform float uBlend;
uniform float uReset;
in vec2 vUv;
layout(location = 0) out vec4 oColor;

vec3 rgbToYcocg(vec3 c){ return vec3(0.25*c.r+0.5*c.g+0.25*c.b, 0.5*c.r-0.5*c.b, -0.25*c.r+0.5*c.g-0.25*c.b); }
vec3 ycocgToRgb(vec3 c){ float t = c.x - c.z; return vec3(t + c.y, c.x + c.z, t - c.y); }

vec3 sampleCatmullRom(sampler2D tex, vec2 uv, vec2 texSize) {
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / max(w12, vec2(1e-5));
  vec2 texPos0 = (texPos1 - 1.0) / texSize;
  vec2 texPos3 = (texPos1 + 2.0) / texSize;
  vec2 texPos12 = (texPos1 + offset12) / texSize;
  vec3 result = vec3(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)).rgb * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)).rgb * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)).rgb * w3.x * w0.y;
  result += texture(tex, vec2(texPos0.x, texPos12.y)).rgb * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)).rgb * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)).rgb * w3.x * w12.y;
  result += texture(tex, vec2(texPos0.x, texPos3.y)).rgb * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)).rgb * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)).rgb * w3.x * w3.y;
  return max(result, vec3(0.0));
}

void main(){
  vec2 texSize = 1.0 / uInvResolution;

  // velocity dilation: pick the closest fragment in a 3x3 neighbourhood
  vec2 bestVel = texture(uVelocity, vUv).xy;
  float bestDepth = texture(uVelocity, vUv).z;
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    if (x == 0 && y == 0) continue;
    vec4 s = texture(uVelocity, vUv + vec2(float(x), float(y)) * uInvResolution);
    if (s.z < bestDepth) { bestDepth = s.z; bestVel = s.xy; }
  }

  vec3 cur = texture(uCurrent, vUv).rgb;

  vec2 histUv = vUv - bestVel;
  if (uReset > 0.5 || histUv.x < 0.0 || histUv.x > 1.0 || histUv.y < 0.0 || histUv.y > 1.0) {
    oColor = vec4(cur, 1.0);
    return;
  }

  // neighbourhood statistics in YCoCg for variance clipping
  vec3 m1 = vec3(0.0), m2 = vec3(0.0);
  vec3 minC = vec3(1e9), maxC = vec3(-1e9);
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 c = rgbToYcocg(texture(uCurrent, vUv + vec2(float(x), float(y)) * uInvResolution).rgb);
    m1 += c; m2 += c * c;
    minC = min(minC, c); maxC = max(maxC, c);
  }
  vec3 mu = m1 / 9.0;
  vec3 sigma = sqrt(max(m2 / 9.0 - mu * mu, vec3(0.0)));
  float gamma = 1.35;
  vec3 lo = max(mu - gamma * sigma, minC);
  vec3 hi = min(mu + gamma * sigma, maxC);

  vec3 hist = sampleCatmullRom(uHistory, histUv, texSize);
  vec3 histY = rgbToYcocg(hist);
  histY = clamp(histY, lo, hi);
  hist = ycocgToRgb(histY);

  // luminance weighting kills the "flicker then smear" of HDR fireflies
  float lumCur = luminance(cur), lumHist = luminance(hist);
  float wCur = 1.0 / (1.0 + lumCur);
  float wHist = 1.0 / (1.0 + lumHist);
  float blend = uBlend;
  float velLen = length(bestVel * texSize);
  blend = mix(blend, 0.72, clamp(velLen / 22.0, 0.0, 1.0));

  vec3 result = (cur * wCur * blend + hist * wHist * (1.0 - blend)) /
                max(wCur * blend + wHist * (1.0 - blend), 1e-5);
  oColor = vec4(max(result, vec3(0.0)), 1.0);
}
`,Bl=`
${il}
uniform sampler2D uSrc;
uniform vec2 uInvSrc;
uniform float uFirst;
uniform float uOffset;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  vec4 acc = vec4(0.0);
  for (int y = 0; y < 2; y++)
  for (int x = 0; x < 2; x++) {
    vec2 uv = vUv + (vec2(float(x), float(y)) - 0.5) * uInvSrc * uOffset;
    vec4 s = texture(uSrc, uv);
    if (uFirst > 0.5) acc += vec4(log(clamp(luminance(s.rgb), 3e-4, 6.0e4)));
    else acc += s;
  }
  oColor = acc * 0.25;
}
`,Vl=`
uniform sampler2D uLum;
uniform sampler2D uPrev;
uniform float uDt;
uniform float uSpeedUp;
uniform float uSpeedDown;
uniform float uCompensation;
uniform float uMinEV;
uniform float uMaxEV;
uniform float uReset;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  float logLum = texture(uLum, vec2(0.5)).r;
  float avg = exp(logLum);
  // EV100 from average luminance (ISO 100, K = 12.5)
  float ev = log2(max(avg, 1e-4) * 100.0 / 12.5);
  ev = clamp(ev + uCompensation, uMinEV, uMaxEV);
  float target = 1.0 / (1.2 * exp2(ev));
  float prev = texture(uPrev, vec2(0.5)).r;
  if (uReset > 0.5 || prev <= 0.0) { oColor = vec4(target); return; }
  float speed = (target < prev) ? uSpeedDown : uSpeedUp;
  float v = prev + (target - prev) * (1.0 - exp(-uDt * speed));
  oColor = vec4(v);
}
`,Hl=`
${il}
uniform sampler2D uSrc;
uniform vec2 uInvSrc;
uniform float uFirstMip;
uniform float uThreshold;
uniform float uSoftKnee;
in vec2 vUv;
layout(location = 0) out vec4 oColor;

vec3 fetch(vec2 uv){ return texture(uSrc, uv).rgb; }
float karisWeight(vec3 c){ return 1.0 / (1.0 + luminance(c)); }

void main(){
  vec2 t = uInvSrc;
  vec3 a = fetch(vUv + vec2(-2.0, 2.0) * t);
  vec3 b = fetch(vUv + vec2( 0.0, 2.0) * t);
  vec3 c = fetch(vUv + vec2( 2.0, 2.0) * t);
  vec3 d = fetch(vUv + vec2(-2.0, 0.0) * t);
  vec3 e = fetch(vUv);
  vec3 f = fetch(vUv + vec2( 2.0, 0.0) * t);
  vec3 g = fetch(vUv + vec2(-2.0,-2.0) * t);
  vec3 h = fetch(vUv + vec2( 0.0,-2.0) * t);
  vec3 i = fetch(vUv + vec2( 2.0,-2.0) * t);
  vec3 j = fetch(vUv + vec2(-1.0, 1.0) * t);
  vec3 k = fetch(vUv + vec2( 1.0, 1.0) * t);
  vec3 l = fetch(vUv + vec2(-1.0,-1.0) * t);
  vec3 m = fetch(vUv + vec2( 1.0,-1.0) * t);

  vec3 result;
  if (uFirstMip > 0.5) {
    vec3 g0 = (a + b + d + e) * 0.25;
    vec3 g1 = (b + c + e + f) * 0.25;
    vec3 g2 = (d + e + g + h) * 0.25;
    vec3 g3 = (e + f + h + i) * 0.25;
    vec3 g4 = (j + k + l + m) * 0.25;
    float w0 = karisWeight(g0), w1 = karisWeight(g1), w2 = karisWeight(g2), w3 = karisWeight(g3), w4 = karisWeight(g4);
    float wsum = w0 * 0.125 + w1 * 0.125 + w2 * 0.125 + w3 * 0.125 + w4 * 0.5;
    result = (g0 * w0 * 0.125 + g1 * w1 * 0.125 + g2 * w2 * 0.125 + g3 * w3 * 0.125 + g4 * w4 * 0.5) / max(wsum, 1e-5);
    float lum = luminance(result);
    float knee = uThreshold * uSoftKnee + 1e-5;
    float soft = clamp(lum - uThreshold + knee, 0.0, 2.0 * knee);
    soft = soft * soft / (4.0 * knee);
    float contrib = max(soft, lum - uThreshold) / max(lum, 1e-5);
    result *= contrib;
  } else {
    result = e * 0.125;
    result += (a + c + g + i) * 0.03125;
    result += (b + d + f + h) * 0.0625;
    result += (j + k + l + m) * 0.125;
  }
  oColor = vec4(max(result, vec3(0.0)), 1.0);
}
`,Ul=`
uniform sampler2D uSrc;
uniform sampler2D uBase;
uniform vec2 uInvSrc;
uniform float uRadius;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  vec2 t = uInvSrc * uRadius;
  vec3 s = texture(uSrc, vUv + vec2(-1, 1) * t).rgb * 1.0;
  s += texture(uSrc, vUv + vec2( 0, 1) * t).rgb * 2.0;
  s += texture(uSrc, vUv + vec2( 1, 1) * t).rgb * 1.0;
  s += texture(uSrc, vUv + vec2(-1, 0) * t).rgb * 2.0;
  s += texture(uSrc, vUv).rgb * 4.0;
  s += texture(uSrc, vUv + vec2( 1, 0) * t).rgb * 2.0;
  s += texture(uSrc, vUv + vec2(-1,-1) * t).rgb * 1.0;
  s += texture(uSrc, vUv + vec2( 0,-1) * t).rgb * 2.0;
  s += texture(uSrc, vUv + vec2( 1,-1) * t).rgb * 1.0;
  s /= 16.0;
  oColor = vec4(texture(uBase, vUv).rgb + s, 1.0);
}
`,Wl=`
uniform sampler2D uVelocity;
uniform float uFocusDist;
uniform float uFocalLength;
uniform float uAperture;
uniform float uMaxCoc;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  // anything that did not write a distance is background, i.e. at infinity
  float z = texture(uVelocity, vUv).z;
  if (!(z > 0.0)) z = 1.0e5;
  float f = uFocalLength;
  float s = max(uFocusDist, f * 1.02 + 1e-3);
  float apertureDiameter = f / max(uAperture, 0.7);
  // thin-lens CoC in metres on the sensor, normalised by sensor height (24mm)
  float coc = (apertureDiameter * f * (z - s)) / max(z * (s - f), 1e-6);
  coc = clamp(coc / 0.024, -1.0, 1.0) * uMaxCoc;
  oColor = vec4(coc, abs(coc), z, 1.0);
}
`,Gl=`
${il}
uniform sampler2D uColor;
uniform sampler2D uCoc;
uniform vec2 uInvResolution;
uniform float uMaxCoc;
uniform float uBokehRotation;
uniform float uBokehBlades;
in vec2 vUv;
layout(location = 0) out vec4 oColor;

const int TAPS = 43;

void main(){
  vec4 cc = texture(uCoc, vUv);
  float coc = cc.x;
  vec3 center = texture(uColor, vUv).rgb;
  float aCoc = abs(coc);
  if (aCoc < 0.0015) { oColor = vec4(center, 1.0); return; }

  float radius = aCoc * uMaxCoc;
  vec3 acc = center / (1.0 + luminance(center));
  float wsum = 1.0 / (1.0 + luminance(center));

  float golden = 2.39996323;
  for (int i = 1; i < TAPS; i++) {
    float fi = float(i);
    float r = sqrt(fi / float(TAPS - 1));
    float ang = fi * golden + uBokehRotation;
    // slight aperture-blade polygonalisation
    float blade = cos(PI_S / uBokehBlades) / max(cos(mod(ang, TAU_S / uBokehBlades) - PI_S / uBokehBlades), 1e-3);
    vec2 off = vec2(cos(ang), sin(ang)) * r * blade * radius;
    vec2 uv = vUv + off * uInvResolution;
    vec4 sc = texture(uCoc, uv);
    vec3 s = texture(uColor, uv).rgb;
    // reject background samples bleeding onto sharp foreground
    float sampleR = abs(sc.x) * uMaxCoc;
    float w = clamp((sampleR - length(off) + 1.0) * 0.5, 0.0, 1.0);
    if (sc.x < 0.0 && coc > 0.0) w *= 0.15;
    w /= (1.0 + luminance(s));
    acc += s * w;
    wsum += w;
  }
  oColor = vec4(acc / max(wsum, 1e-5), 1.0);
}
`,Kl=`
uniform sampler2D uSharp;
uniform sampler2D uBlur;
uniform sampler2D uCoc;
uniform vec2 uInvResolution;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  vec3 sharp = texture(uSharp, vUv).rgb;
  // 4-tap tent on the half-res bokeh buffer hides its resolution
  vec2 o = uInvResolution;
  vec3 blur = texture(uBlur, vUv + vec2(-o.x, -o.y)).rgb
            + texture(uBlur, vUv + vec2( o.x, -o.y)).rgb
            + texture(uBlur, vUv + vec2(-o.x,  o.y)).rgb
            + texture(uBlur, vUv + vec2( o.x,  o.y)).rgb;
  blur *= 0.25;
  float coc = abs(texture(uCoc, vUv).x);
  float t = smoothstep(0.012, 0.16, coc);
  oColor = vec4(mix(sharp, blur, t), 1.0);
}
`,ql=`
${vc}
uniform sampler2D uColor;
uniform sampler2D uVelocity;
uniform vec2 uInvResolution;
uniform float uStrength;
uniform float uFrame;
uniform float uMaxRadius;
in vec2 vUv;
layout(location = 0) out vec4 oColor;

const int MB_TAPS = 13;

void main(){
  vec2 texSize = 1.0 / uInvResolution;
  vec2 vel = texture(uVelocity, vUv).xy * uStrength;
  // dilate
  for (int i = -2; i <= 2; i++) {
    vec2 o = vec2(float(i)) * uInvResolution * 3.0;
    vec2 v = texture(uVelocity, vUv + o).xy * uStrength;
    if (dot(v, v) > dot(vel, vel)) vel = v;
    v = texture(uVelocity, vUv + o.yx).xy * uStrength;
    if (dot(v, v) > dot(vel, vel)) vel = v;
  }
  float lenPx = length(vel * texSize);
  if (lenPx < 0.6) { oColor = texture(uColor, vUv); return; }
  float scale = min(1.0, uMaxRadius / lenPx);
  vel *= scale;

  float jitter = ignTemporal(gl_FragCoord.xy, uFrame) - 0.5;
  vec3 acc = vec3(0.0);
  float wsum = 0.0;
  for (int i = 0; i < MB_TAPS; i++) {
    float t = (float(i) + 0.5 + jitter) / float(MB_TAPS) - 0.5;
    vec2 uv = vUv - vel * t;
    float w = 1.0;
    acc += texture(uColor, clamp(uv, vec2(0.0), vec2(1.0))).rgb * w;
    wsum += w;
  }
  oColor = vec4(acc / wsum, 1.0);
}
`,Jl=`
${il}
${vc}
uniform sampler2D uColor;
uniform sampler2D uBloom;
uniform sampler2D uExposure;
uniform vec2 uResolution;
uniform float uBloomStrength;
uniform float uTime;
uniform float uFrame;
uniform float uVignette;
uniform float uGrain;
uniform float uChromatic;
uniform float uSaturation;
uniform float uContrast;
uniform float uLift;
uniform float uWetLens;
uniform float uRainStreaks;
uniform float uFlash;
uniform vec3 uFlashColor;
uniform float uTonemapMode;
uniform float uExposureBias;
uniform float uDebugPass;
in vec2 vUv;
layout(location = 0) out vec4 oColor;

vec3 sampleChromatic(vec2 uv, float amount) {
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  vec2 dir = c * (r2 * amount * 0.006);
  vec3 col;
  col.r = texture(uColor, uv - dir * 1.0).r;
  col.g = texture(uColor, uv).g;
  col.b = texture(uColor, uv + dir * 1.0).b;
  return col;
}

// procedural lens dirt / water beading
float lensDirt(vec2 uv) {
  float d = 0.0;
  d += smoothstep(0.55, 1.0, fbm2Tiled(uv * 6.0, 6.0, 4)) * 0.6;
  d += (1.0 - worley2Tiled(uv * vec2(1.0, uResolution.y / uResolution.x) * 3.0, 8.0)) * 0.35;
  d += smoothstep(0.7, 1.0, vnoise2(uv * 22.0)) * 0.25;
  return clamp(d, 0.0, 1.0);
}

void main(){
  if (uDebugPass > 0.5) {
    oColor = vec4(linearToSrgb(max(texture(uColor, vUv).rgb, vec3(0.0))), 1.0);
    return;
  }
  float exposure = texture(uExposure, vec2(0.5)).r * uExposureBias;

  vec3 col = (uChromatic > 0.0001) ? sampleChromatic(vUv, uChromatic) : texture(uColor, vUv).rgb;

  vec3 bloom = texture(uBloom, vUv).rgb;
  float dirt = lensDirt(vUv);
  col += bloom * uBloomStrength * (1.0 + dirt * uWetLens * 3.0);

  col *= exposure;
  col += uFlash * uFlashColor * exposure;

  // ---- grade
  col = max(col, vec3(0.0));
  float lum = luminance(col);
  col = mix(vec3(lum), col, uSaturation);
  col = (col - 0.5) * uContrast + 0.5 + uLift;
  col = max(col, vec3(0.0));

  // ---- tonemap (returns display-linear 0..1)
  vec3 mapped;
  if (uTonemapMode < 0.5) {
    mapped = agx(col);
    mapped = agxLook(mapped, 1.0, vec3(1.0), vec3(1.04, 1.01, 1.0), 0.0);
    mapped = agxEotf(mapped);
    // AgX's contrast curve is display-encoded; linearise before the OETF
    mapped = pow(max(mapped, vec3(0.0)), vec3(2.2));
  } else {
    mapped = acesFitted(col);
  }
  mapped = clamp(mapped, 0.0, 1.0);

  // ---- vignette
  vec2 vc = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);
  float v = 1.0 - uVignette * dot(vc, vc) * 1.1;
  mapped *= clamp(v, 0.0, 1.0);

  vec3 srgb = linearToSrgb(max(mapped, vec3(0.0)));

  // ---- film grain (luma-dependent) + 8-bit dither
  float g = ignTemporal(gl_FragCoord.xy, uFrame) - 0.5;
  srgb += g * uGrain * mix(1.0, 0.3, luminance(srgb));
  srgb += (hash12(gl_FragCoord.xy + uFrame) - 0.5) / 255.0;

  oColor = vec4(clamp(srgb, 0.0, 1.0), 1.0);
}
`,Yl=`
uniform sampler2D uSrc;
uniform vec2 uInvResolution;
uniform float uSharpness;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
void main(){
  vec2 t = uInvResolution;
  vec3 a = texture(uSrc, vUv + vec2(0.0, -t.y)).rgb;
  vec3 b = texture(uSrc, vUv + vec2(-t.x, 0.0)).rgb;
  vec3 c = texture(uSrc, vUv).rgb;
  vec3 d = texture(uSrc, vUv + vec2(t.x, 0.0)).rgb;
  vec3 e = texture(uSrc, vUv + vec2(0.0, t.y)).rgb;
  vec3 mn = min(min(min(a, b), min(d, e)), c);
  vec3 mx = max(max(max(a, b), max(d, e)), c);
  vec3 amp = clamp(min(mn, 1.0 - mx) / max(mx, vec3(1e-4)), 0.0, 1.0);
  amp = sqrt(amp);
  vec3 w = -amp * (uSharpness * 0.2 + 0.03);
  vec3 res = (c + (a + b + d + e) * w) / (1.0 + 4.0 * w);
  oColor = vec4(clamp(res, 0.0, 1.0), 1.0);
}
`,Xl=[[.5,.333333],[.25,.666667],[.75,.111111],[.125,.444444],[.625,.777778],[.375,.222222],[.875,.555556],[.0625,.888889],[.5625,.037037],[.3125,.37037],[.8125,.703704],[.1875,.148148],[.6875,.481481],[.4375,.814815],[.9375,.259259],[.03125,.592593]],Zl=class{constructor(e,t,n){this.renderer=e,this.width=t,this.height=n,this.frame=0,this.settings={taa:!0,taaBlend:.1,bloom:!0,bloomStrength:.055,bloomThreshold:1.1,bloomRadius:1.15,dof:!0,focusDistance:60,focalLength:.055,aperture:2.2,maxCoc:22,motionBlur:!0,motionBlurStrength:.55,exposureCompensation:-.5,exposureSpeedUp:1.4,exposureSpeedDown:.7,vignette:.42,grain:.022,chromatic:.55,saturation:1.06,contrast:1.04,lift:0,wetLens:0,flash:0,tonemap:0,exposureBias:1,sharpen:.45},this.flashColor=new K(.8,.88,1),this._build(t,n)}_build(e,t){let n={type:g};this.taaHistory=new _c(e,t,{...n,name:`taaHist`}),this.sceneResolved=$(e,t,{...n,name:`resolved`}),this.tmpA=$(e,t,{...n,name:`tmpA`}),this.tmpB=$(e,t,{...n,name:`tmpB`}),this.cocRT=$(e,t,{...n,name:`coc`,minFilter:o}),this.dofW=Math.max(2,e>>1),this.dofH=Math.max(2,t>>1),this.dofRT=$(this.dofW,this.dofH,{...n,name:`dof`}),this.ldrRT=$(e,t,{type:l,name:`ldr`}),this.lumChain=[];let i=Math.max(1,Math.floor(e/8)),a=Math.max(1,Math.floor(t/8));for(;this.lumChain.push($(i,a,{type:h,minFilter:o,name:`lum${i}`})),i!==1||a!==1;)i=Math.max(1,i>>2),a=Math.max(1,a>>2);this.exposureRT||=new _c(1,1,{type:h,minFilter:r,magFilter:r,name:`exposure`}),this.bloomChain=[];let s=e>>1,c=t>>1;for(let e=0;e<7&&s>4&&c>4;e++)this.bloomChain.push($(s,c,{...n,name:`bloom${e}`})),s=Math.max(1,s>>1),c=Math.max(1,c>>1);this.bloomUp=this.bloomChain.map((e,t)=>$(e.width,e.height,{...n,name:`bloomUp${t}`})),this.passes||={taa:new Q(zl,{uCurrent:{value:null},uHistory:{value:null},uVelocity:{value:null},uInvResolution:{value:new H},uJitter:{value:new H},uBlend:{value:.1},uReset:{value:1}},{name:`taa`}),lumDown:new Q(Bl,{uSrc:{value:null},uInvSrc:{value:new H},uFirst:{value:0},uOffset:{value:1}},{name:`lumDown`}),exposure:new Q(Vl,{uLum:{value:null},uPrev:{value:null},uDt:{value:.016},uSpeedUp:{value:1.4},uSpeedDown:{value:.7},uCompensation:{value:.4},uMinEV:{value:-5},uMaxEV:{value:17},uReset:{value:1}},{name:`exposure`}),bloomDown:new Q(Hl,{uSrc:{value:null},uInvSrc:{value:new H},uFirstMip:{value:0},uThreshold:{value:1},uSoftKnee:{value:.6}},{name:`bloomDown`}),bloomUp:new Q(Ul,{uSrc:{value:null},uBase:{value:null},uInvSrc:{value:new H},uRadius:{value:1}},{name:`bloomUp`}),coc:new Q(Wl,{uVelocity:{value:null},uFocusDist:{value:50},uFocalLength:{value:.05},uAperture:{value:2.8},uMaxCoc:{value:1}},{name:`coc`}),dof:new Q(Gl,{uColor:{value:null},uCoc:{value:null},uInvResolution:{value:new H},uMaxCoc:{value:20},uBokehRotation:{value:0},uBokehBlades:{value:7}},{name:`dof`}),dofComposite:new Q(Kl,{uSharp:{value:null},uBlur:{value:null},uCoc:{value:null},uInvResolution:{value:new H}},{name:`dofComposite`}),motionBlur:new Q(ql,{uColor:{value:null},uVelocity:{value:null},uInvResolution:{value:new H},uStrength:{value:.5},uFrame:{value:0},uMaxRadius:{value:48}},{name:`motionBlur`}),composite:new Q(Jl,{uColor:{value:null},uBloom:{value:null},uExposure:{value:null},uResolution:{value:new H},uBloomStrength:{value:.06},uTime:{value:0},uFrame:{value:0},uVignette:{value:.4},uGrain:{value:.02},uChromatic:{value:.5},uSaturation:{value:1.05},uContrast:{value:1.03},uLift:{value:0},uWetLens:{value:0},uRainStreaks:{value:0},uFlash:{value:0},uFlashColor:{value:this.flashColor},uTonemapMode:{value:0},uExposureBias:{value:1},uDebugPass:{value:0}},{name:`composite`}),cas:new Q(Yl,{uSrc:{value:null},uInvResolution:{value:new H},uSharpness:{value:.5}},{name:`cas`})},this.reset=!0}setSize(e,t){(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,[this.sceneResolved,this.tmpA,this.tmpB,this.cocRT,this.dofRT,this.ldrRT].forEach(e=>e&&e.dispose()),this.taaHistory.dispose(),this.lumChain.forEach(e=>e.dispose()),this.bloomChain.forEach(e=>e.dispose()),this.bloomUp.forEach(e=>e.dispose()),this._build(e,t))}getJitter(e){let[t,n]=Xl[e%Xl.length];return[(t-.5)*2/this.width,(n-.5)*2/this.height]}render(e,t,n=null){let r=this.renderer,i=this.settings,a=this.passes,o=this.width,s=this.height,c=[1/o,1/s];this.frame++;let l;i.taa?(a.taa.set(`uCurrent`,e).set(`uHistory`,this.taaHistory.read.texture).set(`uVelocity`,t).set(`uBlend`,i.taaBlend).set(`uReset`,+!!this.reset),a.taa.uniforms.uInvResolution.value.set(c[0],c[1]),a.taa.render(r,this.taaHistory.write),this.taaHistory.swap(),l=this.taaHistory.read.texture):l=e,a.lumDown.set(`uSrc`,l).set(`uFirst`,1).set(`uOffset`,4),a.lumDown.uniforms.uInvSrc.value.set(c[0],c[1]),a.lumDown.render(r,this.lumChain[0]);for(let e=1;e<this.lumChain.length;e++){let t=this.lumChain[e-1];a.lumDown.set(`uSrc`,t.texture).set(`uFirst`,0).set(`uOffset`,2),a.lumDown.uniforms.uInvSrc.value.set(1/t.width,1/t.height),a.lumDown.render(r,this.lumChain[e])}a.exposure.set(`uLum`,this.lumChain[this.lumChain.length-1].texture).set(`uPrev`,this.exposureRT.read.texture).set(`uDt`,Math.min(Z.uDt.value,.1)).set(`uSpeedUp`,i.exposureSpeedUp).set(`uSpeedDown`,i.exposureSpeedDown).set(`uCompensation`,i.exposureCompensation).set(`uReset`,+!!this.reset),a.exposure.render(r,this.exposureRT.write),this.exposureRT.swap(),i.motionBlur&&i.motionBlurStrength>.001&&(a.motionBlur.set(`uColor`,l).set(`uVelocity`,t).set(`uStrength`,i.motionBlurStrength).set(`uFrame`,this.frame),a.motionBlur.uniforms.uInvResolution.value.set(c[0],c[1]),a.motionBlur.render(r,this.tmpA),l=this.tmpA.texture),i.dof&&(a.coc.set(`uVelocity`,t).set(`uFocusDist`,i.focusDistance).set(`uFocalLength`,i.focalLength).set(`uAperture`,i.aperture).set(`uMaxCoc`,1),a.coc.render(r,this.cocRT),a.dof.set(`uColor`,l).set(`uCoc`,this.cocRT.texture).set(`uMaxCoc`,i.maxCoc*(s/1080)*.5).set(`uBokehRotation`,this.frame*.31),a.dof.uniforms.uInvResolution.value.set(1/this.dofW,1/this.dofH),a.dof.render(r,this.dofRT),a.dofComposite.set(`uSharp`,l).set(`uBlur`,this.dofRT.texture).set(`uCoc`,this.cocRT.texture),a.dofComposite.uniforms.uInvResolution.value.set(1/this.dofW,1/this.dofH),a.dofComposite.render(r,this.tmpB),l=this.tmpB.texture);let u=null;if(i.bloom&&this.bloomChain.length){for(let e=0;e<this.bloomChain.length;e++){let t=e===0?l:this.bloomChain[e-1].texture,n=e===0?o:this.bloomChain[e-1].width,c=e===0?s:this.bloomChain[e-1].height;a.bloomDown.set(`uSrc`,t).set(`uFirstMip`,+(e===0)).set(`uThreshold`,i.bloomThreshold),a.bloomDown.uniforms.uInvSrc.value.set(1/n,1/c),a.bloomDown.render(r,this.bloomChain[e])}let e=this.bloomChain.length-1;a.bloomUp.set(`uSrc`,this.bloomChain[e].texture).set(`uBase`,this.bloomChain[e].texture).set(`uRadius`,0),a.bloomUp.uniforms.uInvSrc.value.set(1/this.bloomChain[e].width,1/this.bloomChain[e].height),a.bloomUp.render(r,this.bloomUp[e]);for(let t=e-1;t>=0;t--)a.bloomUp.set(`uSrc`,this.bloomUp[t+1].texture).set(`uBase`,this.bloomChain[t].texture).set(`uRadius`,i.bloomRadius),a.bloomUp.uniforms.uInvSrc.value.set(1/this.bloomUp[t+1].width,1/this.bloomUp[t+1].height),a.bloomUp.render(r,this.bloomUp[t]);u=this.bloomUp[0].texture}let d=a.composite;d.set(`uColor`,l).set(`uBloom`,u||this.bloomChain[0]?.texture||l).set(`uExposure`,this.exposureRT.read.texture).set(`uBloomStrength`,u?i.bloomStrength:0).set(`uTime`,Z.uTime.value).set(`uFrame`,this.frame).set(`uVignette`,i.vignette).set(`uGrain`,i.grain).set(`uChromatic`,i.chromatic).set(`uSaturation`,i.saturation).set(`uContrast`,i.contrast).set(`uLift`,i.lift).set(`uWetLens`,i.wetLens).set(`uFlash`,i.flash).set(`uTonemapMode`,i.tonemap).set(`uExposureBias`,i.exposureBias).set(`uDebugPass`,+!!i.debugPassthrough),d.uniforms.uResolution.value.set(o,s),d.uniforms.uFlashColor.value.copy(this.flashColor),i.sharpen>.001?(d.render(r,this.ldrRT),a.cas.set(`uSrc`,this.ldrRT.texture).set(`uSharpness`,i.sharpen),a.cas.uniforms.uInvResolution.value.set(c[0],c[1]),a.cas.render(r,n)):d.render(r,n),this.reset=!1}},Ql=new K,$l=new Ut,eu=new q,tu=new K(0,1,0);function nu(e,t){return(Math.sin(e*1.13+t*12.9898)*.5+Math.sin(e*2.31+t*78.233)*.28+Math.sin(e*4.77+t*43.512)*.14+Math.sin(e*9.13+t*19.371)*.07)/.99}var ru=class{constructor(e){this.camera=new ni(38,e,.25,1e5),this.camera.position.set(0,14,60),this.target=new K(0,2,0),this.free=!1,this.shot=null,this.shotTime=0,this.shotIndex=0,this.shake=1,this.shakeBoost=0,this.focusDistance=60,this.focusTarget=60,this.fovTarget=38,this.roll=0,this.rollTarget=0,this._pos=new K().copy(this.camera.position),this._look=new K().copy(this.target),this._smoothPos=new K().copy(this.camera.position),this._smoothLook=new K().copy(this.target),this._first=!0,this.keys=new Set,this.yaw=0,this.pitch=0,this.freeSpeed=40,this.sensitivity=.0022,this.invertY=!1,this._dragging=!1,this._locked=!1,this._vel=new K,this._freePos=new K().copy(this.camera.position),this._lastCamPos=new K().copy(this.camera.position),this._touches=new Map,this._pinchDist=0,this.freeFov=55,this.minFov=9,this.maxFov=90,this.seaLevelFn=()=>0,this.eventFloorFn=()=>0,this.waveFloor=0,this.onLockChange=null}get pointerLocked(){return this._locked}requestPointerLock(){let e=this._dom;if(!(!e||!e.requestPointerLock))try{let t=e.requestPointerLock();t&&typeof t.catch==`function`&&t.catch(()=>{})}catch{}}attachInput(e){this._dom=e;let t=(e,t)=>{this.yaw-=e*this.sensitivity;let n=this.invertY?-1:1;this.pitch=gt.clamp(this.pitch-t*this.sensitivity*n,-1.52,1.52)};document.addEventListener(`pointerlockchange`,()=>{this._locked=document.pointerLockElement===e,this.onLockChange?.(this._locked)}),e.addEventListener(`pointerdown`,t=>{if(this.free){if(t.pointerType===`touch`){this._touches.set(t.pointerId,{x:t.clientX,y:t.clientY});return}this._locked||this.requestPointerLock(),this._dragging=!0;try{e.setPointerCapture(t.pointerId)}catch{}}});let n=t=>{this._touches.delete(t.pointerId),this._touches.size<2&&(this._pinchDist=0),this._dragging=!1;try{e.releasePointerCapture(t.pointerId)}catch{}};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n),e.addEventListener(`pointermove`,e=>{if(this.free){if(e.pointerType===`touch`){let n=this._touches.get(e.pointerId);if(!n)return;if(this._touches.set(e.pointerId,{x:e.clientX,y:e.clientY}),this._touches.size>=2){let e=[...this._touches.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y);this._pinchDist>0&&this.zoomBy(this._pinchDist/Math.max(t,1)),this._pinchDist=t}else t(e.clientX-n.x,e.clientY-n.y);return}(this._locked||this._dragging)&&t(e.movementX,e.movementY)}}),window.addEventListener(`wheel`,e=>{if(this.free){for(let t=e.target;t&&t!==document.body;t=t.parentElement)if(t.scrollHeight>t.clientHeight+2){let e=getComputedStyle(t).overflowY;if(e===`auto`||e===`scroll`)return}e.preventDefault(),e.ctrlKey||e.altKey?this.freeSpeed=gt.clamp(this.freeSpeed*(e.deltaY>0?.84:1.19),.5,6e3):this.zoomBy(e.deltaY>0?1.11:1/1.11)}},{passive:!1}),window.addEventListener(`keydown`,e=>this.keys.add(e.code)),window.addEventListener(`keyup`,e=>this.keys.delete(e.code)),window.addEventListener(`blur`,()=>this.keys.clear())}riseTo(e,t=6){this._vantage={y:e,hold:t},this._ceiling=null}dropTo(e,t=6){this._ceiling={y:e,hold:t},this._vantage=null}zoomBy(e){this.freeFov=gt.clamp(this.freeFov*e,this.minFov,this.maxFov),this.free&&(this.fovTarget=this.freeFov)}setZoom(e){this.freeFov=gt.clamp(e,this.minFov,this.maxFov),this.free&&(this.fovTarget=this.freeFov)}aimPoint(e=700){let t=this.camera;Ql.set(0,0,-1).applyQuaternion(t.quaternion);let n=t.position,r=n.x,i=n.z,a=e,o=!1;for(let e=0;e<2;e++){let e=this.seaLevelFn(r,i)+this.eventFloorFn(r,i),t=n.y-e;if(Ql.y>=-.02||t<=.5){o=!1;break}a=Math.min(t/-Ql.y,26e3),r=n.x+Ql.x*a,i=n.z+Ql.z*a,o=!0}if(o)return{x:r,z:i,dist:a};let s=Math.hypot(Ql.x,Ql.z)||1e-4;return{x:n.x+Ql.x/s*e,z:n.z+Ql.z/s*e,dist:e}}setFree(e){if(this.free=e,e){let e=Ql.copy(this._smoothLook).sub(this.camera.position).normalize();this.yaw=Math.atan2(-e.x,-e.z),this.pitch=Math.asin(gt.clamp(e.y,-1,1)),this._vel.set(0,0,0),this._freePos.copy(this.camera.position),this._lastCamPos.copy(this.camera.position),this._floor=void 0,this.freeFov=gt.clamp(this.camera.fov,this.minFov,this.maxFov),this.fovTarget=this.freeFov}else document.pointerLockElement&&document.exitPointerLock();this._first=!0}playShot(e){this.shot=e,this.shotTime=0,this.shotIndex++,e.fov&&(this.fovTarget=e.fov),this.shake=e.shake===void 0?1:e.shake,this.rollTarget=e.roll||0,e.cut!==!1&&(this._first=!0)}_evalShot(e,t,n){let r=this.shot,i=r.ease?r.ease(e):e,a=r.center||{x:0,z:0};switch(r.type){case`orbit`:{let e=(r.angle0||0)+(r.angleSpan||Math.PI*.6)*i,o=gt.lerp(r.radius0??120,r.radius1??90,i),s=gt.lerp(r.height0??25,r.height1??18,i);t.set(a.x+Math.cos(e)*o,s,a.z+Math.sin(e)*o),n.set(a.x+(r.lookOffset?.x||0),r.lookY??4,a.z+(r.lookOffset?.z||0));break}case`dolly`:t.lerpVectors(r.from,r.to,i),r.lookFrom&&r.lookTo?n.lerpVectors(r.lookFrom,r.lookTo,i):n.copy(r.lookAt||this.target);break;case`crane`:{let e=(r.angle0||0)+(r.angleSpan||.4)*i,o=gt.lerp(r.radius0??60,r.radius1??60,i),s=gt.lerp(r.height0??3,r.height1??220,i**+(r.heightEase??1.7));t.set(a.x+Math.cos(e)*o,s,a.z+Math.sin(e)*o),n.set(a.x,gt.lerp(r.lookY0??2,r.lookY1??-30,i),a.z);break}case`skim`:{let e=r.dir||{x:0,z:-1},i=(r.speed??26)*this.shotTime;t.set(a.x+e.x*i,r.height??2.4,a.z+e.z*i);let o=r.lookAhead??60;n.set(t.x+e.x*o,r.lookY??3,t.z+e.z*o);break}case`chase`:{let e=r.follow?r.follow(this.shotTime):{x:0,y:0,z:0},i=r.offset||{x:0,y:40,z:120};t.set(e.x+i.x,i.y,e.z+i.z),n.set(e.x,e.y||0,e.z);break}case`static`:{let e=r.drift??1;t.copy(r.pos),t.x+=Math.sin(this.shotTime*.11)*e,t.y+=Math.sin(this.shotTime*.17+1)*e*.35,n.copy(r.lookAt);break}case`underwater`:{let e=r.dir||{x:0,z:-1},o=(r.speed??5)*this.shotTime;t.set(a.x+e.x*o,gt.lerp(r.depth0??-8,r.depth1??-1.2,i),a.z+e.z*o),n.set(t.x+e.x*30,gt.lerp(r.lookY0??-2,r.lookY1??22,i),t.z+e.z*30);break}default:t.copy(this.camera.position),n.copy(this.target)}}update(e,t){let n=this.camera;if(this.freeze)return;if(this.free){n.position.distanceToSquared(this._lastCamPos)>.01&&this._freePos.copy(n.position);let r=this.keys,i=r.has(`ShiftLeft`)||r.has(`ShiftRight`)?5:1,a=r.has(`ControlLeft`)||r.has(`ControlRight`)?.18:1,o=Math.tan(n.fov*.5*Math.PI/180)/Math.tan(27.5*Math.PI/180),s=this.freeSpeed*i*a*gt.clamp(o,.12,1.6),c=Math.cos(this.pitch),l=Ql.set(-Math.sin(this.yaw)*c,Math.sin(this.pitch),-Math.cos(this.yaw)*c).clone(),u=new K().crossVectors(l,tu).normalize(),d=new K;(r.has(`KeyW`)||r.has(`ArrowUp`))&&d.add(l),(r.has(`KeyS`)||r.has(`ArrowDown`))&&d.sub(l),(r.has(`KeyD`)||r.has(`ArrowRight`))&&d.add(u),(r.has(`KeyA`)||r.has(`ArrowLeft`))&&d.sub(u),(r.has(`KeyE`)||r.has(`Space`))&&d.add(tu),r.has(`KeyQ`)&&d.sub(tu),d.lengthSq()>0&&d.normalize().multiplyScalar(s);let f=this._freePos,p=1-Math.exp(-e*(d.lengthSq()>0?9:6));this._vel.lerp(d,p),f.addScaledVector(this._vel,e);let m=this.seaLevelFn(f.x,f.z)+this.eventFloorFn(f.x,f.z)+1.6+this.waveFloor,h=this._vantage;h&&(h.hold-=e,h.hold<=0||f.y>h.y+40?this._vantage=null:m=Math.max(m,h.y));let g=this._ceiling;if(g){if(g.hold-=e,g.hold<=0||r.has(`Space`)||r.has(`KeyE`))this._ceiling=null;else{let t=Math.max(g.y+m,m);f.y>t&&(f.y+=(t-f.y)*(1-Math.exp(-e*1.3)))}}let _=this._floor??m,v=f.y<=_+3,y=m>_?6:1.2;this._floor=gt.lerp(_,m,1-Math.exp(-e*y)),this._floor=Math.max(this._floor,this.seaLevelFn(f.x,f.z)+this.eventFloorFn(f.x,f.z)+1.2),v&&this._floor<_&&this._vel.y<=0&&(f.y=Math.max(this._floor,f.y+(this._floor-_))),f.y<this._floor&&(f.y=this._floor,this._vel.y<0&&(this._vel.y=0));let b=this.shakeBoost*.5;n.position.copy(f).add(Ql.set(nu(t*.7,7),nu(t*.9,8),nu(t*.6,9)).multiplyScalar(b)),this.shakeBoost*=Math.exp(-e*1.6),eu.lookAt(n.position,Ql.copy(n.position).add(l),tu),n.quaternion.setFromRotationMatrix(eu);let x=this.aimPoint(900);this._smoothLook.set(x.x,this.seaLevelFn(x.x,x.z),x.z),this.focusTarget=gt.clamp(x.dist,6,2e4),this.focusDistance+=(this.focusTarget-this.focusDistance)*Math.min(1,e*2.2),n.fov+=(this.fovTarget-n.fov)*Math.min(1,e*7),n.updateProjectionMatrix(),this._lastCamPos.copy(n.position);return}if(this.shot){this.shotTime+=e;let t=gt.clamp(this.shotTime/Math.max(this.shot.duration||8,.01),0,1);this._evalShot(t,this._pos,this._look)}let r=this._first?1:Math.min(1,e*(this.shot?.responsiveness??4));this._first&&=(this._smoothPos.copy(this._pos),this._smoothLook.copy(this._look),!1),this._smoothPos.lerp(this._pos,r),this._smoothLook.lerp(this._look,Math.min(1,e*(this.shot?.lookResponsiveness??3)));let i=this.shake*(.16+this.shakeBoost),a=nu(t*.9,1)*i,o=nu(t*1.1,2)*i*.8,s=nu(t*.7,3)*i*.5,c=nu(t*1.4,4)*i*.0022,l=nu(t*1.2,5)*i*.0026;if(n.position.copy(this._smoothPos).add(Ql.set(a,o,s)),!this.shot||this.shot.type!==`underwater`){let e=this.seaLevelFn(n.position.x,n.position.z)+(this.shot?.minHeight??1.4);n.position.y<e&&(n.position.y=e)}eu.lookAt(n.position,Ql.copy(this._smoothLook).add(Ql.clone().set(c*40,l*40,0)),tu),$l.setFromRotationMatrix(eu),this.roll+=(this.rollTarget+nu(t*.6,6)*i*.004-this.roll)*Math.min(1,e*2),$l.multiply(new Ut().setFromAxisAngle(new K(0,0,1),this.roll)),n.quaternion.copy($l),this.focusTarget=Math.max(2,n.position.distanceTo(this._smoothLook)),this.focusDistance+=(this.focusTarget-this.focusDistance)*Math.min(1,e*(this.shot?.focusSpeed??1.6)),n.fov+=(this.fovTarget-n.fov)*Math.min(1,e*1.6),this.shakeBoost*=Math.exp(-e*1.6),n.updateProjectionMatrix()}impulse(e){this.shakeBoost=Math.min(this.shakeBoost+e,4)}},iu=class{constructor(e){this.renderer=e,this.gl=e.getContext(),this.ext=this.gl.getExtension(`EXT_disjoint_timer_query_webgl2`),this.zones=new Map,this.enabled=!1,this.cpuFallback=!this.ext,this._active=null,this._order=[]}_zone(e){let t=this.zones.get(e);return t||(t={name:e,pending:[],ms:0,ema:0,cpuMs:0},this.zones.set(e,t),this._order.push(e)),t}begin(e){if(!this.enabled)return;let t=this._zone(e);if(this.cpuFallback){t._t0=performance.now();return}if(this._active)return;let n=this.gl,r=n.createQuery();n.beginQuery(this.ext.TIME_ELAPSED_EXT,r),this._active={z:t,q:r}}end(e){if(!this.enabled)return;let t=this._zone(e);if(this.cpuFallback){this.gl.finish(),t.cpuMs=performance.now()-t._t0,t.ema=t.ema?t.ema*.9+t.cpuMs*.1:t.cpuMs;return}!this._active||this._active.z!==t||(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),t.pending.push(this._active.q),this._active=null)}collect(){if(!this.enabled||this.cpuFallback)return;let e=this.gl,t=e.getParameter(this.ext.GPU_DISJOINT_EXT);for(let n of this.zones.values()){for(;n.pending.length;){let r=n.pending[0];if(t){e.deleteQuery(r),n.pending.shift();continue}if(!e.getQueryParameter(r,e.QUERY_RESULT_AVAILABLE))break;let i=e.getQueryParameter(r,e.QUERY_RESULT);e.deleteQuery(r),n.pending.shift(),n.ms=i/1e6,n.ema=n.ema?n.ema*.85+n.ms*.15:n.ms}for(;n.pending.length>8;)e.deleteQuery(n.pending.shift())}}report(){let e=[];for(let t of this._order){let n=this.zones.get(t);e.push({name:t,ms:+(n.ema||n.ms||n.cpuMs).toFixed(3)})}return e.sort((e,t)=>t.ms-e.ms),{mode:this.cpuFallback?`cpu-finish`:`gpu-timer`,zones:e}}reset(){for(let e of this.zones.values())e.ema=0,e.ms=0}},au=class{constructor(e,t=()=>{}){this.canvas=e,this.onProgress=t,this.time=0,this.frame=0,this.running=!1,this.paused=!1,this._lastT=0,this._projNoJitter=new q}async init(){let e=this.canvas,t=new Es({canvas:e,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:`high-performance`,preserveDrawingBuffer:!1,failIfMajorPerformanceCaveat:!1});t.autoClear=!1,t.outputColorSpace=Me,t.toneMapping=0,t.debug.checkShaderErrors=!0,this.renderer=t;let n=t.getContext();if(!t.capabilities.isWebGL2)throw Error(`WebGL2 is required for this demo.`);if(!n.getExtension(`EXT_color_buffer_float`))throw Error(`EXT_color_buffer_float is required (float render targets).`);n.getExtension(`OES_texture_float_linear`),n.getExtension(`EXT_float_blend`),this.caps={maxTexture:t.capabilities.maxTextureSize,anisotropy:t.capabilities.getMaxAnisotropy(),drawBuffers:n.getParameter(n.MAX_DRAW_BUFFERS),renderer:(()=>{let e=n.getExtension(`WEBGL_debug_renderer_info`);return e?n.getParameter(e.UNMASKED_RENDERER_WEBGL):`unknown`})(),webgpu:typeof navigator<`u`&&!!navigator.gpu};let r=new URLSearchParams(location.search);this.params=r,this.profiler=new iu(t),this.profiler.enabled=r.get(`profile`)===`1`,this.quality=new fc(r.get(`preset`)||pc(this.caps.renderer)),r.get(`adaptive`)===`0`&&(this.quality.adaptive=!1),this.quality.onDowngrade=(e,t)=>this.setQualityPreset(e,t),this.onProgress(`baking procedural textures`,.08),this.textures=await Oc(t,e=>this.onProgress(e,.1)),Z.uFoamTex.value=this.textures.foam,Z.uRippleTex.value=this.textures.ripple,Z.uCurlTex.value=this.textures.curl,this.onProgress(`solving wave spectrum`,.42),this.ocean=new Vc(t,{size:this.quality.fftSize}),this.onProgress(`integrating atmosphere`,.55),this.atmosphere=new nl(t),this.atmosphere.buildStaticLUTs(!0),this.onProgress(`building sky`,.62),this.sky=new ml(t,this.atmosphere),this.onProgress(`seeding cloud volume`,.66),this.clouds=new wl(t,this.atmosphere,this.textures,this.quality),this.onProgress(`tessellating ocean`,.7),this.oceanMesh=new cl(this.ocean,this.atmosphere,this.quality,this.clouds.shared),this.lightning=new Ol,this.waterspout=new jl,this.waterspout.setLUTs(this.atmosphere),this.waterspout.setQuality(this.quality),this.onProgress(`seeding spray`,.76),this.rain=new Pl(this.quality),this.spray=new Rl(this.renderer,this.ocean,this.quality,Q,$,_c,Hc),this.scene=new Ds,this.scene.add(this.sky.mesh),this.scene.add(this.oceanMesh.mesh),this.scene.add(this.waterspout.mesh),this.scene.add(this.spray.mesh),this.scene.add(this.rain.mesh),this.scene.add(this.lightning.mesh),this.onProgress(`setting up camera`,.8),this.cine=new ru(window.innerWidth/window.innerHeight),this.cine.attachInput(e),this.cine.seaLevelFn=()=>Z.uSeaLevel.value,this.cine.eventFloorFn=(e,t)=>this.director?.eventHeight(e,t)||0,this.camera=this.cine.camera,this.onProgress(`compiling post stack`,.86),this._resize(!0),window.addEventListener(`resize`,()=>this._resize()),this.onProgress(`warming shaders`,.94),this.ocean.update(1/60),this.atmosphere.update(this.camera,this.camera.position),this.sky.renderEnv(),t.compile(this.scene,this.camera),this.onProgress(`ready`,1)}setQualityPreset(e,t=1){this.quality.setPreset(e,t),this.oceanMesh?.setResolution(this.quality.oceanGridX,this.quality.oceanGridY),this.clouds?.setQuality(this.quality),this.rain?.setQuality(this.quality),this.spray?.setQuality(this.quality),this.waterspout?.setQuality(this.quality),this._resize(!0),this.onQualityChange?.(this.quality.presetName)}_resize(e=!1){let t=Math.min(window.devicePixelRatio||1,this.quality.maxPixelRatio),n=window.innerWidth,r=window.innerHeight,i=Math.max(2,Math.floor(n*t*this.quality.effectiveScale)),a=Math.max(2,Math.floor(r*t*this.quality.effectiveScale));!e&&this.renderWidth===i&&this.renderHeight===a||(this.renderWidth=i,this.renderHeight=a,this.renderer.setPixelRatio(1),this.renderer.setSize(n,r,!0),this.hdrRT&&this.hdrRT.dispose(),this.hdrRT=$(i,a,{type:g,count:2,depthBuffer:!0,minFilter:o,magFilter:o,name:`hdrMRT`}),this.post?this.post.setSize(i,a):this.post=new Zl(this.renderer,i,a),this.clouds?.setSize(i,a),this.camera.aspect=n/r,this.camera.updateProjectionMatrix(),Z.uResolution.value.set(i,a),Z.uInvResolution.value.set(1/i,1/a))}start(){this.running=!0,this._lastT=performance.now();let e=t=>{if(!this.running)return;requestAnimationFrame(e);let n=(t-this._lastT)/1e3;this._lastT=t;let r=Math.min(Math.max(n,1e-4),.05);this.frameMs=n*1e3,this.render(r)};requestAnimationFrame(e)}render(e){let t=this.paused?0:e*(this.timeScale??1);this.time+=t,this.frame++,this.quality.tick(this.frameMs)&&this._resize(),this.beforeUpdate?.(t,e);let n=this.profiler;this.cine.update(e,this.time),n.begin(`oceanFFT`),this.ocean.update(t),n.end(`oceanFFT`),n.begin(`atmoLUT`),this.atmosphere.update(this.camera,this.camera.position),n.end(`atmoLUT`),this.atmosphere.syncUniforms(Z),Z.uAmbientColor.value.set(this.atmosphere.ambientColor.r,this.atmosphere.ambientColor.g,this.atmosphere.ambientColor.b),this.sky.update(this.time),this.lightning.update(t||e*.001,this.time,this.weather?.state),this.waterspout.update(t||e*.001,this.weather?.state?.cloudBottom),this.cine.waveFloor=(this.ocean?.significantWaveHeight||0)*.75;let r=this.camera.position.y-Z.uSeaLevel.value,i=this.director?.hasEvents()?this.director.eventHeight(this.camera.position.x,this.camera.position.z):0;if(this.oceanMesh.material.uniforms.uGridPlane.value=Math.min(i,r-.5),this.oceanMesh.update(this.camera.position,Z.uSeaLevel.value+i),this.camera.updateProjectionMatrix(),this._projNoJitter.copy(this.camera.projectionMatrix),this.post.settings.taa){let[e,t]=this.post.getJitter(this.frame);this.camera.projectionMatrix.elements[8]+=e,this.camera.projectionMatrix.elements[9]+=t,this.camera.projectionMatrixInverse.copy(this.camera.projectionMatrix).invert(),Z.uJitter.value.set(e,t)}ic(this.camera,this._projNoJitter,e,this.time,this.frame),this.afterUpdate?.(t,e),n.begin(`particles`),this.rain.update(this.camera,Z.uRain.value,this.hdrRT.height),this.spray.update(t||e,Z.uSprayAmount.value),n.end(`particles`),n.begin(`clouds`),this.clouds.update(this.time,e),n.end(`clouds`),this.sky.setCloudTextures(this.clouds.screenTexture,this.clouds.envTexture),n.begin(`envProbe`),this.sky.renderEnv(),n.end(`envProbe`);let a=this.renderer;n.begin(`scene`),a.setRenderTarget(this.hdrRT),a.setClearColor(0,1),a.clear(!0,!0,!1),a.render(this.scene,this.camera),a.setRenderTarget(null),n.end(`scene`),this.post.settings.focusDistance=this.cine.focusDistance,n.begin(`post`),this.post.render(this.hdrRT.textures[0],this.hdrRT.textures[1],null),n.end(`post`),n.collect(),this._debugTex&&this._blit&&this._blit.render(a,null)}setBenchmarkPose(e=0){let t=[{pos:[0,18,0],look:[220,12,-120],fov:45},{pos:[0,240,0],look:[400,40,-260],fov:50},{pos:[0,6,0],look:[60,30,-40],fov:60}],n=t[e%t.length];this.cine.mode=`static`,this.cine.director=null,this.camera.position.set(...n.pos),this.camera.lookAt(...n.look),this.camera.fov=n.fov,this.camera.updateProjectionMatrix(),this.camera.updateMatrixWorld(),this.cine.freeze=!0,this.quality.adaptive=!1,this.profiler.enabled=!0,this.profiler.reset(),this.post.reset=!0}setDebugTexture(e,t=`rgb`,n=1){this._debugTex=e,!this._blit&&e&&(this._blit=new Q(`
        uniform sampler2D uSrc;
        uniform float uMode;
        uniform float uScale;
        in vec2 vUv;
        layout(location = 0) out vec4 oColor;
        void main(){
          vec4 s = texture(uSrc, vUv) * uScale;
          vec3 c = (uMode < 0.5) ? s.rgb
                 : (uMode < 1.5) ? vec3(s.a)
                 : vec3(dot(s.rgb, vec3(0.2126, 0.7152, 0.0722)));
          oColor = vec4(pow(max(c, 0.0), vec3(1.0 / 2.2)), 1.0);
        }`,{uSrc:{value:null},uMode:{value:0},uScale:{value:1}},{name:`debugBlit`})),this._blit&&this._blit.set(`uSrc`,e).set(`uScale`,n).set(`uMode`,t===`alpha`?1:t===`lum`?2:0)}setDebugMode(e){this.debugMode=e,this.oceanMesh&&(this.oceanMesh.uniforms.uDebugMode.value=e),this.post&&(this.post.settings.dof=!e&&this.quality.dof,this.post.settings.bloom=!e,this.post.settings.exposureBias=1,this.post.settings.debugPassthrough=e>0)}sampleFrame(e=8,t=5){let n=this.renderer.getContext(),r=this.canvas.width,i=this.canvas.height,a=new Uint8Array(4),o=[];for(let s=0;s<t;s++){let c=[];for(let o=0;o<e;o++){let l=Math.floor((o+.5)/e*r),u=Math.floor((s+.5)/t*i);n.readPixels(l,u,1,1,n.RGBA,n.UNSIGNED_BYTE,a),c.push([a[0],a[1],a[2]])}o.push(c)}return o}probeOcean(e=64){let t=this.renderer,n=e=>{let t=(e&32768)>>15,n=(e&31744)>>10,r=e&1023;return n===0?(t?-1:1)*2**-14*(r/1024):n===31?r?NaN:t?-1/0:1/0:(t?-1:1)*2**(n-15)*(1+r/1024)},r=t.getContext(),i=t.properties,a=(a,o,s)=>{let c=Math.min(e,a.width),l=Math.min(e,a.height),u=new Uint16Array(c*l*4);try{let e=i.get(a).__webglFramebuffer;r.bindFramebuffer(r.FRAMEBUFFER,e),r.readBuffer(r.COLOR_ATTACHMENT0+o),r.readPixels(0,0,c,l,r.RGBA,r.HALF_FLOAT,u),r.readBuffer(r.COLOR_ATTACHMENT0),r.bindFramebuffer(r.FRAMEBUFFER,null),t.state.reset()}catch(e){return{label:s,error:String(e)}}let d=[1e9,1e9,1e9,1e9],f=[-1e9,-1e9,-1e9,-1e9],p=[0,0,0,0];for(let e=0;e<c*l;e++)for(let t=0;t<4;t++){let r=n(u[e*4+t]);r<d[t]&&(d[t]=r),r>f[t]&&(f[t]=r),p[t]+=r}let m=c*l;return{label:s,min:d.map(e=>+e.toFixed(4)),max:f.map(e=>+e.toFixed(4)),avg:p.map(e=>+(e/m).toFixed(4))}},o=[];return this.ocean.cascades.forEach((e,t)=>{o.push(a(e.out,0,`c${t}.disp(xyz,J)`)),o.push(a(e.out,1,`c${t}.deriv`)),o.push(a(e.out,2,`c${t}.turb(foam,bub,crest,spray)`))}),o}probeHDR(e=9,t=7){let n=this.renderer,r=this.hdrRT,i=e=>{let t=(e&32768)>>15,n=(e&31744)>>10,r=e&1023;return n===0?(t?-1:1)*2**-14*(r/1024):n===31?r?NaN:t?-1/0:1/0:(t?-1:1)*2**(n-15)*(1+r/1024)},a=new Uint16Array(4),o=[];for(let s=t-1;s>=0;s--){let c=[];for(let o=0;o<e;o++){let l=Math.floor((o+.5)/e*r.width),u=Math.floor((s+.5)/t*r.height);try{n.readRenderTargetPixels(r,l,u,1,1,a)}catch{c.push(`   err`);continue}let d=i(a[0]),f=i(a[1]),p=i(a[2]),m=.2126*d+.7152*f+.0722*p;c.push(m>=1e4?m.toExponential(1).padStart(7):m.toFixed(m<10?3:1).padStart(7))}o.push(c.join(` `))}return o}probeClouds(e=7,t=5){let n=this.clouds;if(!n?.history)return null;let r=this.renderer,i=r.getContext(),a=r.properties.get(n.history.read).__webglFramebuffer,o=e=>{let t=(e&32768)>>15,n=(e&31744)>>10,r=e&1023;return n===0?(t?-1:1)*2**-14*(r/1024):n===31?r?NaN:t?-1/0:1/0:(t?-1:1)*2**(n-15)*(1+r/1024)},s=new Uint16Array(4),c=[];i.bindFramebuffer(i.FRAMEBUFFER,a),i.readBuffer(i.COLOR_ATTACHMENT1);for(let r=t-1;r>=0;r--){let a=[];for(let c=0;c<e;c++){let l=Math.floor((c+.5)/e*n.lowW),u=Math.floor((r+.5)/t*n.lowH);i.readPixels(l,u,1,1,i.RGBA,i.HALF_FLOAT,s);let d=o(s[0]),f=o(s[1]),p=o(s[2]),m=o(s[3]);a.push(`${(d>0?(d/1e3).toFixed(0):`-`).padStart(4)}k s${f.toFixed(2)} b${p.toFixed(2)} n${m|0}`)}c.push(a.join(` `))}return i.readBuffer(i.COLOR_ATTACHMENT0),i.bindFramebuffer(i.FRAMEBUFFER,null),r.state.reset(),c}probeSpray(){let e=this.spray?.state;if(!e)return null;let t=this.spray.size,n=new Float32Array(t*t*4),r=new Float32Array(t*t*4),i=this.renderer.getContext(),a=this.renderer.properties.get(e.read).__webglFramebuffer;if(!a)return{error:`no framebuffer`};try{i.bindFramebuffer(i.FRAMEBUFFER,a),i.readBuffer(i.COLOR_ATTACHMENT0),i.readPixels(0,0,t,t,i.RGBA,i.FLOAT,n),i.readBuffer(i.COLOR_ATTACHMENT1),i.readPixels(0,0,t,t,i.RGBA,i.FLOAT,r)}catch(e){return{error:String(e)}}finally{i.readBuffer(i.COLOR_ATTACHMENT0),i.bindFramebuffer(i.FRAMEBUFFER,null),this.renderer.state.reset()}let o=0,s=0,c=0,l=0,u=1e9,d=-1e9,f=0,p=Z.uCamPos.value;for(let e=0;e<t*t;e++){let t=n[e*4],i=n[e*4+1],a=n[e*4+2],m=n[e*4+3];if(!Number.isFinite(t+i+a+m)){s++;continue}m>0&&(o++,c+=i,u=Math.min(u,i),d=Math.max(d,i),f=Math.max(f,Math.hypot(t-p.x,a-p.z)),l+=Math.hypot(r[e*4],r[e*4+1],r[e*4+2]))}return{total:t*t,live:o,nan:s,pct:+(100*o/(t*t)).toFixed(1),avgY:o?+(c/o).toFixed(2):0,minY:o?+u.toFixed(2):0,maxY:o?+d.toFixed(2):0,maxDist:+f.toFixed(0),avgSpeed:o?+(l/o).toFixed(2):0,camY:+p.y.toFixed(2)}}debugStats(){let e=this.renderer,t=new Float32Array(4);try{e.readRenderTargetPixels(this.post.exposureRT.read,0,0,1,1,t)}catch{}let n=new Float32Array(4);try{let t=this.post.lumChain[this.post.lumChain.length-1];e.readRenderTargetPixels(t,0,0,1,1,n)}catch{}return{exposure:t[0],logLum:n[0],avgLum:Math.exp(n[0]),oceanTris:this.oceanMesh?.triangles,preset:this.quality.presetName,dyn:this.quality.dynamicScale,rain:+Z.uRain.value.toFixed(3),rainDrops:this.rain?.geom.instanceCount??0,spray:+Z.uSprayAmount.value.toFixed(3),sprayLive:this.spray?.mesh.visible?this.spray.size**2:0,spout:this.waterspout?{on:this.waterspout.active,vis:this.waterspout.mesh.visible,life:+this.waterspout.life.toFixed(1),u:[...this.waterspout.uniforms.uSpout.value.toArray()].map(e=>+e.toFixed(1)),shape:[...this.waterspout.uniforms.uShape.value.toArray()].map(e=>+e.toFixed(1)),dbg:this.waterspout.uniforms.uDebug.value,inScene:this.scene.children.includes(this.waterspout.mesh),matDbg:this.waterspout.material.uniforms.uDebug.value}:null,cloudBase:this.weather?.state?.cloudBottom,cam:[this.camera.position.x,this.camera.position.y,this.camera.position.z].map(e=>+e.toFixed(1)),camFloor:+(this.cine._floor??0).toFixed(1),free:this.cine.free,sandboxOn:!!this.sandbox?.active,dirOn:this.director?.enabled,eventH:+(this.director?.eventHeight(this.camera.position.x,this.camera.position.z)||0).toFixed(1),soliton:this.director?._solitons?.map(e=>({d:+e.dist.toFixed(0),a:+e.amp.toFixed(1),w:e.width})),eventProfile:(()=>{let e=new K(0,0,-1).applyQuaternion(this.camera.quaternion),t=Math.hypot(e.x,e.z)||1,n=this.camera.position;return[40,80,120,160,220,300,420].map(r=>+(this.director?.eventHeight(n.x+e.x/t*r,n.z+e.z/t*r)||0).toFixed(1))})()}}},ou=`modulepreload`,su=function(e,t){return new URL(e,t).href},cu={},lu=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=su(t,n),t=s(t),t in cu)return;cu[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:ou,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},uu=document.getElementById(`boot`),du=document.querySelector(`#bootbar i`),fu=document.getElementById(`bootmsg`),pu=document.getElementById(`booterr`),mu=document.getElementById(`hud`);function hu(e,t){fu.textContent=e,t!==void 0&&(du.style.width=`${Math.round(t*100)}%`)}function gu(e){console.error(e),fu.textContent=`initialisation failed`,pu.textContent=e&&e.stack?e.stack:String(e)}async function _u(){let e=new au(document.getElementById(`gl`),hu);window.__app=e;try{await e.init()}catch(e){gu(e);return}let{installDirector:t}=await lu(async()=>{let{installDirector:e}=await import(`./Director-BQKXnLIr.js`);return{installDirector:e}},[],import.meta.url),n=t(e),{installUI:r}=await lu(async()=>{let{installUI:e}=await import(`./Overlay-X1-hRO7I.js`);return{installUI:e}},[],import.meta.url);r(e);let i=e.params;i.get(`act`)!==null&&n.gotoAct(parseInt(i.get(`act`),10)||0),i.get(`director`)===`0`&&(n.enabled=!1),i.get(`debug`)!==null&&e.setDebugMode(parseInt(i.get(`debug`),10)||0),i.get(`paused`)===`1`&&(e.paused=!0),e.start(),setTimeout(()=>{uu.classList.add(`hidden`),mu.classList.add(`on`),document.body.classList.add(`cine`)},350),window.addEventListener(`error`,e=>console.error(`[runtime]`,e.error||e.message)),window.addEventListener(`unhandledrejection`,e=>console.error(`[promise]`,e.reason))}_u();export{K as i,Z as n,gt as r,ac as t};