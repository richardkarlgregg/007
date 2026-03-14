var Sd=Object.defineProperty;var Ed=(i,e,t)=>e in i?Sd(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Lt=(i,e,t)=>Ed(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="180",bd=0,mc=1,Td=2,wu=1,Au=2,kn=3,oi=0,nn=1,Pt=2,ai=0,wi=1,Uo=2,gc=3,_c=4,wd=5,bi=100,Ad=101,Rd=102,Cd=103,Pd=104,Id=200,Dd=201,Ld=202,Ud=203,Fo=204,No=205,Fd=206,Nd=207,Od=208,Bd=209,zd=210,Hd=211,kd=212,Vd=213,Gd=214,Oo=0,Bo=1,zo=2,hr=3,Ho=4,ko=5,Vo=6,Go=7,Ru=0,Wd=1,Xd=2,Cn=0,Yd=1,qd=2,Zd=3,Cu=4,$d=5,jd=6,Kd=7,Pu=300,fr=301,pr=302,Wo=303,Xo=304,Ca=306,Mn=1e3,on=1001,Yo=1002,Et=1003,Jd=1004,Bs=1005,Sn=1006,Ka=1007,si=1008,In=1009,Iu=1010,Du=1011,ms=1012,Al=1013,Ai=1014,mn=1015,Ts=1016,Rl=1017,Cl=1018,gs=1020,Lu=35902,Uu=35899,Fu=1021,Nu=1022,Jt=1023,_s=1026,vs=1027,Ou=1028,Pl=1029,Bu=1030,Il=1031,Dl=1033,_a=33776,va=33777,xa=33778,ya=33779,qo=35840,Zo=35841,$o=35842,jo=35843,Ko=36196,Jo=37492,Qo=37496,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,al=37814,ol=37815,ll=37816,cl=37817,ul=37818,dl=37819,hl=37820,fl=37821,pl=36492,ml=36494,gl=36495,_l=36283,vl=36284,xl=36285,yl=36286,Qd=3200,eh=3201,zu=0,th=1,ri="",Kt="srgb",Ri="srgb-linear",Ea="linear",gt="srgb",Wi=7680,vc=519,nh=512,ih=513,rh=514,Hu=515,sh=516,ah=517,oh=518,lh=519,Ml=35044,xc="300 es",En=2e3,xs=2001;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yc=1234567;const fs=Math.PI/180,ys=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Ll(i,e){return(i%e+e)%e}function ch(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function uh(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function dh(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function hh(i,e=1){return e-Math.abs(Ll(i,e*2)-e)}function fh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function mh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gh(i,e){return i+Math.random()*(e-i)}function _h(i){return i*(.5-Math.random())}function vh(i){i!==void 0&&(yc=i);let e=yc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xh(i){return i*fs}function yh(i){return i*ys}function Mh(i){return(i&i-1)===0&&i!==0}function Sh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:fs,RAD2DEG:ys,generateUUID:Gn,clamp:nt,euclideanModulo:Ll,mapLinear:ch,inverseLerp:uh,lerp:ps,damp:dh,pingpong:hh,smoothstep:fh,smootherstep:ph,randInt:mh,randFloat:gh,randFloatSpread:_h,seededRandom:vh,degToRad:xh,radToDeg:yh,isPowerOfTwo:Mh,ceilPowerOfTwo:Sh,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:bh,normalize:ft,denormalize:yn};class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==f||l!==m||u!==g){let p=1-a;const h=c*f+l*m+u*g+d*y,C=h>=0?1:-1,R=1-h*h;if(R>Number.EPSILON){const D=Math.sqrt(R),P=Math.atan2(D,h*C);p=Math.sin(p*P)/D,a=Math.sin(a*P)/D}const S=a*C;if(c=c*p+f*S,l=l*p+m*S,u=u*p+g*S,d=d*p+y*S,p===1-a){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*f,e[t+1]=c*g+u*f+l*d-a*m,e[t+2]=l*g+u*m+a*f-c*d,e[t+3]=u*g-a*d-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d+f*m*g;break;case"YZX":this._x=f*u*d+l*m*g,this._y=l*m*d+f*u*g,this._z=l*u*g-f*m*d,this._w=l*u*d-f*m*g;break;case"XZY":this._x=f*u*d-l*m*g,this._y=l*m*d-f*u*g,this._z=l*u*g+f*m*d,this._w=l*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new I,Mc=new Vn;class Ke{constructor(e,t,n,r,s,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],y=r[0],p=r[3],h=r[6],C=r[1],R=r[4],S=r[7],D=r[2],P=r[5],A=r[8];return s[0]=o*y+a*C+c*D,s[3]=o*p+a*R+c*P,s[6]=o*h+a*S+c*A,s[1]=l*y+u*C+d*D,s[4]=l*p+u*R+d*P,s[7]=l*h+u*S+d*A,s[2]=f*y+m*C+g*D,s[5]=f*p+m*R+g*P,s[8]=f*h+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*l-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=f*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Ke;function ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Th(){const i=Ms("canvas");return i.style.display="block",i}const Sc={};function Ss(i){i in Sc||(Sc[i]=!0,console.warn(i))}function wh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ec=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ah(){const i={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=dr(r.r),r.g=dr(r.g),r.b=dr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?Ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ri]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:Ec,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Ec,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),i}const at=Ah();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Xi;class Rh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=Ms("canvas")),Xi.width=e.width,Xi.height=e.height;const r=Xi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ch=0;class Ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eo(r[o].image)):s.push(eo(r[o]))}else s=eo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ph=0;const to=new I;class Ot extends gr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=on,r=on,s=Sn,o=si,a=Jt,c=In,l=Ot.DEFAULT_ANISOTROPY,u=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Gn(),this.name="",this.source=new Ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(to).x}get height(){return this.source.getSize(to).y}get depth(){return this.source.getSize(to).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Pu;Ot.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],g=c[9],y=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,S=(m+1)/2,D=(h+1)/2,P=(u+f)/4,A=(d+y)/4,O=(g+p)/4;return R>S&&R>D?R<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(R),r=P/n,s=A/n):S>D?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=P/r,s=O/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=A/s,r=O/s),this.set(n,r,s,t),this}let C=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(d-y)/C,this.z=(f-u)/C,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ih extends gr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ul(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Ih{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vu extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Dh extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Et,this.minFilter=Et,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(e.matrixWorld),this.union(zs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Hs.subVectors(this.max,rs),Yi.subVectors(e.a,rs),qi.subVectors(e.b,rs),Zi.subVectors(e.c,rs),Jn.subVectors(qi,Yi),Qn.subVectors(Zi,qi),mi.subVectors(Yi,Zi);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mi.z,mi.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mi.z,0,-mi.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mi.y,mi.x,0];return!no(t,Yi,qi,Zi,Hs)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Yi,qi,Zi,Hs))?!1:(ks.crossVectors(Jn,Qn),t=[ks.x,ks.y,ks.z],no(t,Yi,qi,Zi,Hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,zs=new Pi,Yi=new I,qi=new I,Zi=new I,Jn=new I,Qn=new I,mi=new I,rs=new I,Hs=new I,ks=new I,gi=new I;function no(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gi.fromArray(i,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Lh=new Pi,ss=new I,io=new I;class ws{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const t=ss.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ss,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(io)),this.expandByPoint(ss.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const On=new I,ro=new I,Vs=new I,ei=new I,so=new I,Gs=new I,ao=new I;class Pa{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ro.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),ei.copy(this.origin).sub(ro);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Vs),a=ei.dot(this.direction),c=-ei.dot(Vs),l=ei.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*c-a,f=o*a-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,m=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ro).addScaledVector(Vs,f),m}intersectSphere(e,t){On.subVectors(e.center,this.origin);const n=On.dot(this.direction),r=On.dot(On)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,r,s){so.subVectors(t,e),Gs.subVectors(n,e),ao.crossVectors(so,Gs);let o=this.direction.dot(ao),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,e);const c=a*this.direction.dot(Gs.crossVectors(ei,Gs));if(c<0)return null;const l=a*this.direction.dot(so.cross(ei));if(l<0||c+l>o)return null;const u=-a*ei.dot(ao);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,a,c,l,u,d,f,m,g,y,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,f,m,g,y,p)}set(e,t,n,r,s,o,a,c,l,u,d,f,m,g,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/$i.setFromMatrixColumn(e,0).length(),s=1/$i.setFromMatrixColumn(e,1).length(),o=1/$i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=f-y*l,t[9]=-a*c,t[2]=y-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*d,g=l*u,y=l*d;t[0]=f+y*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*d,g=l*u,y=l*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+y,t[1]=c*d,t[5]=y*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uh,e,Fh)}lookAt(e,t,n){const r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ti.crossVectors(n,sn),ti.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ti.crossVectors(n,sn)),ti.normalize(),Ws.crossVectors(sn,ti),r[0]=ti.x,r[4]=Ws.x,r[8]=sn.x,r[1]=ti.y,r[5]=Ws.y,r[9]=sn.y,r[2]=ti.z,r[6]=Ws.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],y=n[6],p=n[10],h=n[14],C=n[3],R=n[7],S=n[11],D=n[15],P=r[0],A=r[4],O=r[8],M=r[12],_=r[1],w=r[5],F=r[9],L=r[13],N=r[2],V=r[6],X=r[10],K=r[14],k=r[3],ne=r[7],Q=r[11],ce=r[15];return s[0]=o*P+a*_+c*N+l*k,s[4]=o*A+a*w+c*V+l*ne,s[8]=o*O+a*F+c*X+l*Q,s[12]=o*M+a*L+c*K+l*ce,s[1]=u*P+d*_+f*N+m*k,s[5]=u*A+d*w+f*V+m*ne,s[9]=u*O+d*F+f*X+m*Q,s[13]=u*M+d*L+f*K+m*ce,s[2]=g*P+y*_+p*N+h*k,s[6]=g*A+y*w+p*V+h*ne,s[10]=g*O+y*F+p*X+h*Q,s[14]=g*M+y*L+p*K+h*ce,s[3]=C*P+R*_+S*N+D*k,s[7]=C*A+R*w+S*V+D*ne,s[11]=C*O+R*F+S*X+D*Q,s[15]=C*M+R*L+S*K+D*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],y=e[7],p=e[11],h=e[15];return g*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*m-n*c*m)+y*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+n*o*m+s*a*u-n*l*u)+h*(-r*a*u-t*c*d+t*a*f+r*o*d-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],y=e[13],p=e[14],h=e[15],C=d*p*l-y*f*l+y*c*m-a*p*m-d*c*h+a*f*h,R=g*f*l-u*p*l-g*c*m+o*p*m+u*c*h-o*f*h,S=u*y*l-g*d*l+g*a*m-o*y*m-u*a*h+o*d*h,D=g*d*c-u*y*c-g*a*f+o*y*f+u*a*p-o*d*p,P=t*C+n*R+r*S+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=C*A,e[1]=(y*f*s-d*p*s-y*r*m+n*p*m+d*r*h-n*f*h)*A,e[2]=(a*p*s-y*c*s+y*r*l-n*p*l-a*r*h+n*c*h)*A,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*m-n*c*m)*A,e[4]=R*A,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*A,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*h-t*c*h)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*m+t*c*m)*A,e[8]=S*A,e[9]=(g*d*s-u*y*s-g*n*m+t*y*m+u*n*h-t*d*h)*A,e[10]=(o*y*s-g*a*s+g*n*l-t*y*l-o*n*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*m-t*a*m)*A,e[12]=D*A,e[13]=(u*y*r-g*d*r+g*n*f-t*y*f-u*n*p+t*d*p)*A,e[14]=(g*a*r-o*y*r-g*n*c+t*y*c+o*n*p-t*a*p)*A,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,m=s*u,g=s*d,y=o*u,p=o*d,h=a*d,C=c*l,R=c*u,S=c*d,D=n.x,P=n.y,A=n.z;return r[0]=(1-(y+h))*D,r[1]=(m+S)*D,r[2]=(g-R)*D,r[3]=0,r[4]=(m-S)*P,r[5]=(1-(f+h))*P,r[6]=(p+C)*P,r[7]=0,r[8]=(g+R)*A,r[9]=(p-C)*A,r[10]=(1-(f+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=$i.set(r[0],r[1],r[2]).length();const o=$i.set(r[4],r[5],r[6]).length(),a=$i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);const l=1/s,u=1/o,d=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=En,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,y;if(c)g=s/(o-s),y=o*s/(o-s);else if(a===En)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===xs)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=En,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,y;if(c)g=1/(o-s),y=o/(o-s);else if(a===En)g=-2/(o-s),y=-(o+s)/(o-s);else if(a===xs)g=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $i=new I,vn=new pt,Uh=new I(0,0,0),Fh=new I(1,1,1),ti=new I,Ws=new I,sn=new I,Tc=new pt,wc=new Vn;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Fl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nh=0;const Ac=new I,ji=new Vn,Bn=new pt,Xs=new I,as=new I,Oh=new I,Bh=new Vn,Rc=new I(1,0,0),Cc=new I(0,1,0),Pc=new I(0,0,1),Ic={type:"added"},zh={type:"removed"},Ki={type:"childadded",child:null},oo={type:"childremoved",child:null};class bt extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Dn,n=new Vn,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ke}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Cc,e)}rotateZ(e){return this.rotateOnAxis(Pc,e)}translateOnAxis(e,t){return Ac.copy(e).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Cc,e)}translateZ(e){return this.translateOnAxis(Pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(as,Xs,this.up):Bn.lookAt(Xs,as,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ic),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zh),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ic),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Bh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,zn=new I,lo=new I,Hn=new I,Ji=new I,Qi=new I,Dc=new I,co=new I,uo=new I,ho=new I,fo=new At,po=new At,mo=new At;class pn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),zn.subVectors(n,t),lo.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(zn),c=xn.dot(lo),l=zn.dot(zn),u=zn.dot(lo),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Hn.x),c.addScaledVector(o,Hn.y),c.addScaledVector(a,Hn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(fo,s.x),o.addScaledVector(po,s.y),o.addScaledVector(mo,s.z),o}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),zn.subVectors(e,t),xn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ji.subVectors(r,n),Qi.subVectors(s,n),co.subVectors(e,n);const c=Ji.dot(co),l=Qi.dot(co);if(c<=0&&l<=0)return t.copy(n);uo.subVectors(e,r);const u=Ji.dot(uo),d=Qi.dot(uo);if(u>=0&&d<=u)return t.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ji,o);ho.subVectors(e,s);const m=Ji.dot(ho),g=Qi.dot(ho);if(g>=0&&m<=g)return t.copy(s);const y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Qi,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Dc.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Dc,a);const h=1/(p+y+f);return o=y*h,a=f*h,t.copy(n).addScaledVector(Ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Ll(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=go(o,s,e+1/3),this.g=go(o,s,e),this.b=go(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return at.workingToColorSpace(Xt.copy(this),e),Math.round(nt(Xt.r*255,0,255))*65536+Math.round(nt(Xt.g*255,0,255))*256+Math.round(nt(Xt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Kt){at.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ni),this.setHSL(ni.h+e,ni.s+t,ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Ys);const n=ps(ni.h,Ys.h,t),r=ps(ni.s,Ys.s,t),s=ps(ni.l,Ys.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ze;ze.NAMES=Gu;let Hh=0;class li extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=wi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=No,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new I,qs=new $e;let kh=0;class Yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:kh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class Wu extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xu extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xe extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Vh=0;const hn=new pt,_o=new bt,er=new I,an=new Pi,os=new Pi,Nt=new I;class vt extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?Xu:Wu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return _o.lookAt(e),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];os.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(an.min,os.min),an.expandByPoint(Nt),Nt.addVectors(an.max,os.max),an.expandByPoint(Nt)):(an.expandByPoint(os.min),an.expandByPoint(os.max))}an.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(er.fromBufferAttribute(e,l),Nt.add(er)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new I,c[O]=new I;const l=new I,u=new I,d=new I,f=new $e,m=new $e,g=new $e,y=new I,p=new I;function h(O,M,_){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),f.fromBufferAttribute(s,O),m.fromBufferAttribute(s,M),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(f),g.sub(f);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(w),a[O].add(y),a[M].add(y),a[_].add(y),c[O].add(p),c[M].add(p),c[_].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let O=0,M=C.length;O<M;++O){const _=C[O],w=_.start,F=_.count;for(let L=w,N=w+F;L<N;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const R=new I,S=new I,D=new I,P=new I;function A(O){D.fromBufferAttribute(r,O),P.copy(D);const M=a[O];R.copy(M),R.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(P,M);const w=S.dot(c[O])<0?-1:1;o.setXYZW(O,R.x,R.y,R.z,w)}for(let O=0,M=C.length;O<M;++O){const _=C[O],w=_.start,F=_.count;for(let L=w,N=w+F;L<N;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let h=0;h<u;h++)f[g++]=l[m++]}return new Yt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new pt,_i=new Pa,Zs=new ws,Uc=new I,$s=new I,js=new I,Ks=new I,vo=new I,Js=new I,Fc=new I,Qs=new I;class _t extends bt{constructor(e=new vt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],d=s[c];u!==0&&(vo.fromBufferAttribute(d,e),o?Js.addScaledVector(vo,u):Js.addScaledVector(vo.sub(t),u))}t.add(Js)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),_i.copy(e.ray).recast(e.near),!(Zs.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Zs,Uc)===null||_i.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Lc.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const p=f[g],h=o[p.materialIndex],C=Math.max(p.start,m.start),R=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,D=R;S<D;S+=3){const P=a.getX(S),A=a.getX(S+1),O=a.getX(S+2);r=ea(this,h,e,n,l,u,d,P,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){const C=a.getX(p),R=a.getX(p+1),S=a.getX(p+2);r=ea(this,o,e,n,l,u,d,C,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const p=f[g],h=o[p.materialIndex],C=Math.max(p.start,m.start),R=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=C,D=R;S<D;S+=3){const P=S,A=S+1,O=S+2;r=ea(this,h,e,n,l,u,d,P,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){const C=p,R=p+1,S=p+2;r=ea(this,o,e,n,l,u,d,C,R,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Gh(i,e,t,n,r,s,o,a){let c;if(e.side===nn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===oi,a),c===null)return null;Qs.copy(a),Qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qs);return l<t.near||l>t.far?null:{distance:l,point:Qs.clone(),object:i}}function ea(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,$s),i.getVertexPosition(c,js),i.getVertexPosition(l,Ks);const u=Gh(i,e,t,n,$s,js,Ks,Fc);if(u){const d=new I;pn.getBarycoord(Fc,$s,js,Ks,d),r&&(u.uv=pn.getInterpolatedAttribute(r,a,c,l,d,new $e)),s&&(u.uv1=pn.getInterpolatedAttribute(s,a,c,l,d,new $e)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,c,l,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};pn.getNormal($s,js,Ks,f.normal),u.face=f,u.barycoord=d}return u}class _r extends vt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function g(y,p,h,C,R,S,D,P,A,O,M){const _=S/A,w=D/O,F=S/2,L=D/2,N=P/2,V=A+1,X=O+1;let K=0,k=0;const ne=new I;for(let Q=0;Q<X;Q++){const ce=Q*w-L;for(let ke=0;ke<V;ke++){const Ye=ke*_-F;ne[y]=Ye*C,ne[p]=ce*R,ne[h]=N,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[p]=0,ne[h]=P>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(ke/A),d.push(1-Q/O),K+=1}}for(let Q=0;Q<O;Q++)for(let ce=0;ce<A;ce++){const ke=f+ce+V*Q,Ye=f+ce+V*(Q+1),ot=f+(ce+1)+V*(Q+1),He=f+(ce+1)+V*Q;c.push(ke,Ye,He),c.push(Ye,ot,He),k+=6}a.addGroup(m,k,M),m+=k,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=mr(i[t]);for(const r in n)e[r]=n[r]}return e}function Wh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Xh={clone:mr,merge:jt};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=Wh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nl extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new I,Nc=new $e,Oc=new $e;class fn extends Nl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Oc),t.subVectors(Oc,Nc)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class Zh extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(tr,nr,e,t);r.layers=this.layers,this.add(r);const s=new fn(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new fn(tr,nr,e,t);o.layers=this.layers,this.add(o);const a=new fn(tr,nr,e,t);a.layers=this.layers,this.add(a);const c=new fn(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new fn(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qu extends Ot{constructor(e=[],t=fr,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $h extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ai});s.uniforms.tEquirect.value=t;const o=new _t(r,s),a=t.minFilter;return t.minFilter===si&&(t.minFilter=Sn),new Zh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Qt extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jh={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),h=this._getHandJoint(l,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jh)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ol{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new Ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kh extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $t=new I;class ba{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ba(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ia extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ir;const ls=new I,rr=new I,sr=new I,ar=new $e,cs=new $e,Zu=new pt,ta=new I,us=new I,na=new I,Bc=new $e,yo=new $e,zc=new $e;class Bl extends bt{constructor(e=new Ia){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jh(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new ba(n,3,0,!1)),ir.setAttribute("uv",new ba(n,2,3,!1))}this.geometry=ir,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-sr.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;ia(ta.set(-.5,-.5,0),sr,o,rr,r,s),ia(us.set(.5,-.5,0),sr,o,rr,r,s),ia(na.set(.5,.5,0),sr,o,rr,r,s),Bc.set(0,0),yo.set(1,0),zc.set(1,1);let a=e.ray.intersectTriangle(ta,us,na,!1,ls);if(a===null&&(ia(us.set(-.5,.5,0),sr,o,rr,r,s),yo.set(0,1),a=e.ray.intersectTriangle(ta,na,us,!1,ls),a===null))return;const c=e.ray.origin.distanceTo(ls);c<e.near||c>e.far||t.push({distance:c,point:ls.clone(),uv:pn.getInterpolation(ls,ta,us,na,Bc,yo,zc,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(i,e,t,n,r,s){ar.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(cs.x=s*ar.x-r*ar.y,cs.y=r*ar.x+s*ar.y):cs.copy(ar),i.copy(e),i.x+=cs.x,i.y+=cs.y,i.applyMatrix4(Zu)}class Da extends Ot{constructor(e=null,t=1,n=1,r,s,o,a,c,l=Et,u=Et,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mo=new I,Qh=new I,ef=new Ke;class Si{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Mo.subVectors(n,t).cross(Qh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ef.getNormalMatrix(e),r=this.coplanarPoint(Mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new ws,tf=new $e(.5,.5),ra=new I;class La{constructor(e=new Si,t=new Si,n=new Si,r=new Si,s=new Si,o=new Si){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],m=s[7],g=s[8],y=s[9],p=s[10],h=s[11],C=s[12],R=s[13],S=s[14],D=s[15];if(r[0].setComponents(l-o,m-u,h-g,D-C).normalize(),r[1].setComponents(l+o,m+u,h+g,D+C).normalize(),r[2].setComponents(l+a,m+d,h+y,D+R).normalize(),r[3].setComponents(l-a,m-d,h-y,D-R).normalize(),n)r[4].setComponents(c,f,p,S).normalize(),r[5].setComponents(l-c,m-f,h-p,D-S).normalize();else if(r[4].setComponents(l-c,m-f,h-p,D-S).normalize(),t===En)r[5].setComponents(l+c,m+f,h+p,D+S).normalize();else if(t===xs)r[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=tf.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ra.x=r.normal.x>0?e.max.x:e.min.x,ra.y=r.normal.y>0?e.max.y:e.min.y,ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Di extends li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ta=new I,wa=new I,Hc=new pt,ds=new Pa,sa=new ws,So=new I,kc=new I;class Es extends bt{constructor(e=new vt,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ta.fromBufferAttribute(t,r-1),wa.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ta.distanceTo(wa);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),sa.radius+=s,e.ray.intersectsSphere(sa)===!1)return;Hc.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Hc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=l){const h=u.getX(y),C=u.getX(y+1),R=aa(this,e,ds,c,h,C,y);R&&t.push(R)}if(this.isLineLoop){const y=u.getX(g-1),p=u.getX(m),h=aa(this,e,ds,c,y,p,g-1);h&&t.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=m,p=g-1;y<p;y+=l){const h=aa(this,e,ds,c,y,y+1,y);h&&t.push(h)}if(this.isLineLoop){const y=aa(this,e,ds,c,g-1,m,g-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function aa(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(Ta.fromBufferAttribute(a,r),wa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ta,wa,So,kc)>n)return;So.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(So);if(!(l<e.near||l>e.far))return{distance:l,point:kc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Vc=new I,Gc=new I;class zl extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vc.fromBufferAttribute(t,r),Gc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vc.distanceTo(Gc);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $u extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wc=new pt,Sl=new Pa,oa=new ws,la=new I;class Xc extends bt{constructor(e=new vt,t=new $u){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,e.ray.intersectsSphere(oa)===!1)return;Wc.copy(r).invert(),Sl.copy(e.ray).applyMatrix4(Wc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,y=m;g<y;g++){const p=l.getX(g);la.fromBufferAttribute(d,p),Yc(la,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,y=m;g<y;g++)la.fromBufferAttribute(d,g),Yc(la,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Yc(i,e,t,n,r,s,o){const a=Sl.distanceSqToPoint(i);if(a<t){const c=new I;Sl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bs extends Ot{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ju extends Ot{constructor(e,t,n=Ai,r,s,o,a=Et,c=Et,l,u=_s,d=1){if(u!==_s&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ul(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ku extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hl extends vt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],m=[];let g=0;const y=[],p=n/2;let h=0;C(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(m,2));function C(){const S=new I,D=new I;let P=0;const A=(t-e)/n;for(let O=0;O<=s;O++){const M=[],_=O/s,w=_*(t-e)+e;for(let F=0;F<=r;F++){const L=F/r,N=L*c+a,V=Math.sin(N),X=Math.cos(N);D.x=w*V,D.y=-_*n+p,D.z=w*X,d.push(D.x,D.y,D.z),S.set(V,A,X).normalize(),f.push(S.x,S.y,S.z),m.push(L,1-_),M.push(g++)}y.push(M)}for(let O=0;O<r;O++)for(let M=0;M<s;M++){const _=y[M][O],w=y[M+1][O],F=y[M+1][O+1],L=y[M][O+1];(e>0||M!==0)&&(u.push(_,w,L),P+=3),(t>0||M!==s-1)&&(u.push(w,F,L),P+=3)}l.addGroup(h,P,0),h+=P}function R(S){const D=g,P=new $e,A=new I;let O=0;const M=S===!0?e:t,_=S===!0?1:-1;for(let F=1;F<=r;F++)d.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const w=g;for(let F=0;F<=r;F++){const N=F/r*c+a,V=Math.cos(N),X=Math.sin(N);A.x=M*X,A.y=p*_,A.z=M*V,d.push(A.x,A.y,A.z),f.push(0,_,0),P.x=V*.5+.5,P.y=X*.5*_+.5,m.push(P.x,P.y),g++}for(let F=0;F<r;F++){const L=D+F,N=w+F;S===!0?u.push(N,N+1,L):u.push(N+1,N,L),O+=3}l.addGroup(h,O,S===!0?1:2),h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ua extends vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,m=[],g=[],y=[],p=[];for(let h=0;h<u;h++){const C=h*f-o;for(let R=0;R<l;R++){const S=R*d-s;g.push(S,-C,0),y.push(0,0,1),p.push(R/a),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let C=0;C<a;C++){const R=C+l*h,S=C+l*(h+1),D=C+1+l*(h+1),P=C+1+l*h;m.push(R,S,P),m.push(S,D,P)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fa extends vt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new I,f=new I,m=[],g=[],y=[],p=[];for(let h=0;h<=n;h++){const C=[],R=h/n;let S=0;h===0&&o===0?S=.5/t:h===n&&c===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){const P=D/t;d.x=-e*Math.cos(r+P*s)*Math.sin(o+R*a),d.y=e*Math.cos(o+R*a),d.z=e*Math.sin(r+P*s)*Math.sin(o+R*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(P+S,1-R),C.push(l++)}u.push(C)}for(let h=0;h<n;h++)for(let C=0;C<t;C++){const R=u[h][C+1],S=u[h][C],D=u[h+1][C],P=u[h+1][C+1];(h!==0||o>0)&&m.push(R,S,P),(h!==n-1||c<Math.PI)&&m.push(S,D,P)}this.setIndex(m),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(y,3)),this.setAttribute("uv",new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nf extends vt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const d=c[l],f=d.start,m=d.count;for(let g=f,y=f+m;g<y;g+=3)for(let p=0;p<3;p++){const h=a.getX(g+p),C=a.getX(g+(p+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,C),qc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,d=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),qc(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Xe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function qc(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class Ii extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rf extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sf extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Eo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class af{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){const m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const of=new af;class kl{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kl.DEFAULT_MATERIAL_NAME="__DEFAULT";const or=new WeakMap;class lf extends kl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Eo.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=or.get(o);d===void 0&&(d=[],or.set(o,d)),d.push({onLoad:t,onError:r})}return o}const a=Ms("img");function c(){u(),t&&t(this);const d=or.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onLoad&&m.onLoad(this)}or.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),Eo.remove(`image:${e}`);const f=or.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(d)}or.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Eo.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class El extends kl{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,o=new lf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Vl extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cf extends Vl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bo=new pt,Zc=new I,$c=new I;class uf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ju extends Nl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class df extends uf{constructor(){super(new Ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jc extends Vl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new df}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hf extends Vl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ff extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Kc=new pt;class mf{constructor(e,t,n=0,r=1/0){this.ray=new Pa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Kc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Kc),this}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(Jc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)bl(e[r],this,n,t);return n.sort(Jc),n}}function Jc(i,e){return i.distance-e.distance}function bl(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)bl(s[o],e,t,!0)}}class gf extends zl{constructor(e=10,t=10,n=4473924,r=8947848){n=new ze(n),r=new ze(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const y=f===s?n:r;y.toArray(l,m),m+=3,y.toArray(l,m),m+=3,y.toArray(l,m),m+=3,y.toArray(l,m),m+=3}const u=new vt;u.setAttribute("position",new Xe(c,3)),u.setAttribute("color",new Xe(l,3));const d=new Di({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Qc=new I,ca=new I,eu=new I;class _f extends bt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new vt;r.setAttribute("position",new Xe([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new Di({fog:!1,toneMapped:!1});this.lightPlane=new Es(r,s),this.add(this.lightPlane),r=new vt,r.setAttribute("position",new Xe([0,0,0,0,0,1],3)),this.targetLine=new Es(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Qc.setFromMatrixPosition(this.light.matrixWorld),ca.setFromMatrixPosition(this.light.target.matrixWorld),eu.subVectors(ca,Qc),this.lightPlane.lookAt(ca),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ca),this.targetLine.scale.z=eu.length()}}const ua=new I,wt=new Nl;class vf extends zl{constructor(e){const t=new vt,n=new Di({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,y){c(g),c(y)}function c(g){r.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}t.setAttribute("position",new Xe(r,3)),t.setAttribute("color",new Xe(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new ze(16755200),u=new ze(16711680),d=new ze(43775),f=new ze(16777215),m=new ze(3355443);this.setColors(l,u,d,f,m)}setColors(e,t,n,r,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;let s,o;if(wt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===En)s=-1,o=1;else if(this.camera.coordinateSystem===xs)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Ct("c",t,e,wt,0,0,s),Ct("t",t,e,wt,0,0,o),Ct("n1",t,e,wt,-n,-r,s),Ct("n2",t,e,wt,n,-r,s),Ct("n3",t,e,wt,-n,r,s),Ct("n4",t,e,wt,n,r,s),Ct("f1",t,e,wt,-n,-r,o),Ct("f2",t,e,wt,n,-r,o),Ct("f3",t,e,wt,-n,r,o),Ct("f4",t,e,wt,n,r,o),Ct("u1",t,e,wt,n*.7,r*1.1,s),Ct("u2",t,e,wt,-n*.7,r*1.1,s),Ct("u3",t,e,wt,0,r*2,s),Ct("cf1",t,e,wt,-n,0,o),Ct("cf2",t,e,wt,n,0,o),Ct("cf3",t,e,wt,0,-r,o),Ct("cf4",t,e,wt,0,r,o),Ct("cn1",t,e,wt,-n,0,s),Ct("cn2",t,e,wt,n,0,s),Ct("cn3",t,e,wt,0,-r,s),Ct("cn4",t,e,wt,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(i,e,t,n,r,s,o){ua.set(r,s,o).unproject(n);const a=e[i];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],ua.x,ua.y,ua.z)}}function tu(i,e,t,n){const r=xf(n);switch(t){case Fu:return i*e;case Ou:return i*e/r.components*r.byteLength;case Pl:return i*e/r.components*r.byteLength;case Bu:return i*e*2/r.components*r.byteLength;case Il:return i*e*2/r.components*r.byteLength;case Nu:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case Dl:return i*e*4/r.components*r.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case jo:return Math.max(i,16)*Math.max(e,8)/4;case qo:case $o:return Math.max(i,8)*Math.max(e,8)/2;case Ko:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _l:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xf(i){switch(i){case In:case Iu:return{byteLength:1,components:1};case ms:case Du:case Ts:return{byteLength:2,components:1};case Rl:case Cl:return{byteLength:2,components:4};case Ai:case Al:case mn:return{byteLength:4,components:1};case Lu:case Uu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function yf(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){const g=d[f],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){const y=d[m];i.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
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
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
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
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
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
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,If=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wf=`#define PI 3.141592653589793
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
} // validated`,Xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,op=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lp=`#ifdef USE_GRADIENTMAP
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
}`,cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
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
#endif`,xp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,Mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ap=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pp=`#if defined( USE_POINTS_UV )
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
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
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
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gp=`#ifdef USE_NORMALMAP
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
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sm=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
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
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
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
#endif`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mm=`uniform sampler2D t2D;
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
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
}`,Am=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rm=`#define DISTANCE
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Um=`#include <common>
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
}`,Fm=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define LAMBERT
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
}`,Bm=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Hm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Gm=`#define PHONG
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
}`,Wm=`#define STANDARD
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
}`,Xm=`#define STANDARD
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
}`,Ym=`#define TOON
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
}`,qm=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jm=`#include <common>
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
}`,Km=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:bf,alphatest_fragment:Tf,alphatest_pars_fragment:wf,aomap_fragment:Af,aomap_pars_fragment:Rf,batching_pars_vertex:Cf,batching_vertex:Pf,begin_vertex:If,beginnormal_vertex:Df,bsdfs:Lf,iridescence_fragment:Uf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:Bf,clipping_planes_vertex:zf,color_fragment:Hf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:Gf,common:Wf,cube_uv_reflection_fragment:Xf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:qf,displacementmap_vertex:Zf,emissivemap_fragment:$f,emissivemap_pars_fragment:jf,colorspace_fragment:Kf,colorspace_pars_fragment:Jf,envmap_fragment:Qf,envmap_common_pars_fragment:ep,envmap_pars_fragment:tp,envmap_pars_vertex:np,envmap_physical_pars_fragment:fp,envmap_vertex:ip,fog_vertex:rp,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:op,gradientmap_pars_fragment:lp,lightmap_pars_fragment:cp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:hp,lights_toon_fragment:pp,lights_toon_pars_fragment:mp,lights_phong_fragment:gp,lights_phong_pars_fragment:_p,lights_physical_fragment:vp,lights_physical_pars_fragment:xp,lights_fragment_begin:yp,lights_fragment_maps:Mp,lights_fragment_end:Sp,logdepthbuf_fragment:Ep,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:wp,map_fragment:Ap,map_pars_fragment:Rp,map_particle_fragment:Cp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Lp,morphcolor_vertex:Up,morphnormal_vertex:Fp,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:zp,normal_pars_fragment:Hp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:Gp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:qp,opaque_fragment:Zp,packing:$p,premultiplied_alpha_fragment:jp,project_vertex:Kp,dithering_fragment:Jp,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:hm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:_m,uv_vertex:vm,worldpos_vertex:xm,background_vert:ym,background_frag:Mm,backgroundCube_vert:Sm,backgroundCube_frag:Em,cube_vert:bm,cube_frag:Tm,depth_vert:wm,depth_frag:Am,distanceRGBA_vert:Rm,distanceRGBA_frag:Cm,equirect_vert:Pm,equirect_frag:Im,linedashed_vert:Dm,linedashed_frag:Lm,meshbasic_vert:Um,meshbasic_frag:Fm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:zm,meshnormal_vert:Hm,meshnormal_frag:km,meshphong_vert:Vm,meshphong_frag:Gm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:Ym,meshtoon_frag:qm,points_vert:Zm,points_frag:$m,shadow_vert:jm,shadow_frag:Km,sprite_vert:Jm,sprite_frag:Qm},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Rn={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Rn.physical={uniforms:jt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const da={r:0,b:0,g:0},xi=new Dn,eg=new pt;function tg(i,e,t,n,r,s,o){const a=new ze(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function g(R){let S=R.isScene===!0?R.background:null;return S&&S.isTexture&&(S=(R.backgroundBlurriness>0?t:e).get(S)),S}function y(R){let S=!1;const D=g(R);D===null?h(a,c):D&&D.isColor&&(h(D,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,S){const D=g(S);D&&(D.isCubeTexture||D.mapping===Ca)?(u===void 0&&(u=new _t(new _r(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:mr(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),xi.copy(S.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(xi)),u.material.toneMapped=at.getTransfer(D.colorSpace)!==gt,(d!==D||f!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new _t(new Ua(2,2),new en({name:"BackgroundMaterial",uniforms:mr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=at.getTransfer(D.colorSpace)!==gt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function h(R,S){R.getRGB(da,Yu(i)),n.buffers.color.setClear(da.r,da.g,da.b,S,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(R,S=1){a.set(R),c=S,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,h(a,c)},render:y,addToRenderList:p,dispose:C}}function ng(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(_,w,F,L,N){let V=!1;const X=d(L,F,w);s!==X&&(s=X,l(s.object)),V=m(_,L,F,N),V&&g(_,L,F,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(_,w,F,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,w,F){const L=F.wireframe===!0;let N=n[_.id];N===void 0&&(N={},n[_.id]=N);let V=N[w.id];V===void 0&&(V={},N[w.id]=V);let X=V[L];return X===void 0&&(X=f(c()),V[L]=X),X}function f(_){const w=[],F=[],L=[];for(let N=0;N<t;N++)w[N]=0,F[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:L,object:_,attributes:{},index:null}}function m(_,w,F,L){const N=s.attributes,V=w.attributes;let X=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){const Q=N[k];let ce=V[k];if(ce===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor)),Q===void 0||Q.attribute!==ce||ce&&Q.data!==ce.data)return!0;X++}return s.attributesNum!==X||s.index!==L}function g(_,w,F,L){const N={},V=w.attributes;let X=0;const K=F.getAttributes();for(const k in K)if(K[k].location>=0){let Q=V[k];Q===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const ce={};ce.attribute=Q,Q&&Q.data&&(ce.data=Q.data),N[k]=ce,X++}s.attributes=N,s.attributesNum=X,s.index=L}function y(){const _=s.newAttributes;for(let w=0,F=_.length;w<F;w++)_[w]=0}function p(_){h(_,0)}function h(_,w){const F=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;F[_]=1,L[_]===0&&(i.enableVertexAttribArray(_),L[_]=1),N[_]!==w&&(i.vertexAttribDivisor(_,w),N[_]=w)}function C(){const _=s.newAttributes,w=s.enabledAttributes;for(let F=0,L=w.length;F<L;F++)w[F]!==_[F]&&(i.disableVertexAttribArray(F),w[F]=0)}function R(_,w,F,L,N,V,X){X===!0?i.vertexAttribIPointer(_,w,F,N,V):i.vertexAttribPointer(_,w,F,L,N,V)}function S(_,w,F,L){y();const N=L.attributes,V=F.getAttributes(),X=w.defaultAttributeValues;for(const K in V){const k=V[K];if(k.location>=0){let ne=N[K];if(ne===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),ne!==void 0){const Q=ne.normalized,ce=ne.itemSize,ke=e.get(ne);if(ke===void 0)continue;const Ye=ke.buffer,ot=ke.type,He=ke.bytesPerElement,q=ot===i.INT||ot===i.UNSIGNED_INT||ne.gpuType===Al;if(ne.isInterleavedBufferAttribute){const J=ne.data,fe=J.stride,Re=ne.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<k.locationSize;Se++)h(k.location+Se,J.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<k.locationSize;Se++)p(k.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Se=0;Se<k.locationSize;Se++)R(k.location+Se,ce/k.locationSize,ot,Q,fe*He,(Re+ce/k.locationSize*Se)*He,q)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)h(k.location+J,ne.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<k.locationSize;J++)p(k.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let J=0;J<k.locationSize;J++)R(k.location+J,ce/k.locationSize,ot,Q,ce*He,ce/k.locationSize*J*He,q)}}else if(X!==void 0){const Q=X[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(k.location,Q);break;case 3:i.vertexAttrib3fv(k.location,Q);break;case 4:i.vertexAttrib4fv(k.location,Q);break;default:i.vertexAttrib1fv(k.location,Q)}}}}C()}function D(){O();for(const _ in n){const w=n[_];for(const F in w){const L=w[F];for(const N in L)u(L[N].object),delete L[N];delete w[F]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const F in w){const L=w[F];for(const N in L)u(L[N].object),delete L[N];delete w[F]}delete n[_.id]}function A(_){for(const w in n){const F=n[w];if(F[_.id]===void 0)continue;const L=F[_.id];for(const N in L)u(L[N].object),delete L[N];delete F[_.id]}}function O(){M(),o=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:p,disableUnusedAttributes:C}}function ig(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function c(l,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function rg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Jt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const O=A===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!O)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:C,maxVaryings:R,maxFragmentUniforms:S,vertexTextures:D,maxSamples:P}}function sg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Si,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const C=s?0:n,R=C*4;let S=h.clippingState||null;c.value=S,S=u(g,f,R,m);for(let D=0;D!==R;++D)S[D]=t[D];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,g!==!0||p===null){const h=m+y*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<h)&&(p=new Float32Array(h));for(let R=0,S=m;R!==y;++R,S+=4)o.copy(d[R]).applyMatrix4(C,a),o.normal.toArray(p,S),p[S+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function ag(i){let e=new WeakMap;function t(o,a){return a===Wo?o.mapping=fr:a===Xo&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===Xo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new $h(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ur=4,nu=[.125,.215,.35,.446,.526,.582],Ti=20,To=new Ju,iu=new ze;let wo=null,Ao=0,Ro=0,Co=!1;const Ei=(1+Math.sqrt(5))/2,lr=1/Ei,ru=[new I(-Ei,lr,0),new I(Ei,lr,0),new I(-lr,0,Ei),new I(lr,0,Ei),new I(0,Ei,-lr),new I(0,Ei,lr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],og=new I;class su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=og}=s;wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ou(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo,Ao,Ro),this._renderer.xr.enabled=Co,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Ro=this._renderer.getActiveMipmapLevel(),Co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ts,format:Jt,colorSpace:Ri,depthBuffer:!1},r=au(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(s)),this._blurMaterial=cg(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,n,r,s){const c=new fn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor(iu),d.toneMapping=Cn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new Pn({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),p=new _t(new _r,y);let h=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,h=!0):(y.color.copy(iu),h=!0);for(let R=0;R<6;R++){const S=R%3;S===0?(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[R],s.y,s.z)):S===1?(c.up.set(0,0,l[R]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[R],s.z)):(c.up.set(0,l[R],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[R]));const D=this._cubeSize;ha(r,S*D,R>2?D:0,D,D),d.setRenderTarget(r),h&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===fr||e.mapping===pr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ou());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;ha(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,To)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ru[(r-s-1)%ru.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new _t(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):Ti;p>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const h=[];let C=0;for(let A=0;A<Ti;++A){const O=A/y,M=Math.exp(-O*O/2);h.push(M),A===0?C+=M:A<p&&(C+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/C;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:R}=this;f.dTheta.value=g,f.mipInt.value=R-n;const S=this._sizeLods[r],D=3*S*(r>R-ur?r-R+ur:0),P=4*(this._cubeSize-S);ha(t,D,P,3*S,2*S),c.setRenderTarget(t),c.render(d,To)}}function lg(i){const e=[],t=[],n=[];let r=i;const s=i-ur+1+nu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ur?c=nu[o-i+ur-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,h=1,C=new Float32Array(y*g*m),R=new Float32Array(p*g*m),S=new Float32Array(h*g*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,O=P>2?0:-1,M=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];C.set(M,y*g*P),R.set(f,p*g*P);const _=[P,P,P,P,P,P];S.set(_,h*g*P)}const D=new vt;D.setAttribute("position",new Yt(C,y)),D.setAttribute("uv",new Yt(R,p)),D.setAttribute("faceIndex",new Yt(S,h)),e.push(D),r>ur&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function au(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=Ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function cg(i,e,t){const n=new Float32Array(Ti),r=new I(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ou(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lu(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Gl(){return`

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
	`}function ug(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wo||c===Xo,u=c===fr||c===pr;if(l||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new su(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new su(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function dg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ss("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function hg(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,g=d.attributes.position;let y=0;if(m!==null){const C=m.array;y=m.version;for(let R=0,S=C.length;R<S;R+=3){const D=C[R+0],P=C[R+1],A=C[R+2];f.push(D,P,P,A,A,D)}}else if(g!==void 0){const C=g.array;y=g.version;for(let R=0,S=C.length/3-1;R<S;R+=3){const D=R+0,P=R+1,A=R+2;f.push(D,P,P,A,A,D)}}else return;const p=new(ku(f)?Xu:Wu)(f,1);p.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fg(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,y){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/o,m[h],y[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,y,0,g);let h=0;for(let C=0;C<g;C++)h+=m[C]*y[C];t.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function mg(i,e,t){const n=new WeakMap,r=new At;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let _=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),p===!0&&(S=3);let D=a.attributes.position.count*S,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*P*4*d),O=new Vu(A,D,P,d);O.type=mn,O.needsUpdate=!0;const M=S*4;for(let w=0;w<d;w++){const F=h[w],L=C[w],N=R[w],V=D*P*4*w;for(let X=0;X<F.count;X++){const K=X*M;g===!0&&(r.fromBufferAttribute(F,X),A[V+K+0]=r.x,A[V+K+1]=r.y,A[V+K+2]=r.z,A[V+K+3]=0),y===!0&&(r.fromBufferAttribute(L,X),A[V+K+4]=r.x,A[V+K+5]=r.y,A[V+K+6]=r.z,A[V+K+7]=0),p===!0&&(r.fromBufferAttribute(N,X),A[V+K+8]=r.x,A[V+K+9]=r.y,A[V+K+10]=r.z,A[V+K+11]=N.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new $e(D,P)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const y=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function gg(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const ed=new Ot,cu=new ju(1,1),td=new Vu,nd=new Dh,id=new qu,uu=[],du=[],hu=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function vr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=uu[r];if(s===void 0&&(s=new Float32Array(r),uu[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Na(i,e){let t=du[e];t===void 0&&(t=new Int32Array(e),du[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _g(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Ft(t,n)}}function Sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),Ft(t,n)}}function Eg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;hu.set(n),i.uniformMatrix4fv(this.addr,!1,hu),Ft(t,n)}}function bg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Ig(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cu.compareFunction=Hu,s=cu):s=ed,t.setTexture2D(e||s,r)}function Lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nd,r)}function Ug(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||id,r)}function Fg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||td,r)}function Ng(i){switch(i){case 5126:return _g;case 35664:return vg;case 35665:return xg;case 35666:return yg;case 35674:return Mg;case 35675:return Sg;case 35676:return Eg;case 5124:case 35670:return bg;case 35667:case 35671:return Tg;case 35668:case 35672:return wg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Og(i,e){i.uniform1fv(this.addr,e)}function Bg(i,e){const t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function zg(i,e){const t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function Hg(i,e){const t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){const t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){const t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){const t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Wg(i,e){i.uniform1iv(this.addr,e)}function Xg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function qg(i,e){i.uniform4iv(this.addr,e)}function Zg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function jg(i,e){i.uniform3uiv(this.addr,e)}function Kg(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ed,s[o])}function Qg(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||nd,s[o])}function e_(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||id,s[o])}function t_(i,e,t){const n=this.cache,r=e.length,s=Na(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Ft(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||td,s[o])}function n_(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return Hg;case 35674:return kg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return Zg;case 36294:return $g;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class i_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ng(t.type)}}class r_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}}class s_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Po=/(\w+)(\])?(\[|\.)?/g;function mu(i,e){i.seq.push(e),i.map[e.id]=e}function a_(i,e,t){const n=i.name,r=n.length;for(Po.lastIndex=0;;){const s=Po.exec(n),o=Po.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){mu(t,l===void 0?new i_(a,i,e):new r_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new s_(a),mu(t,d)),t=d}}}class Ma{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);a_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const o_=37297;let l_=0;function c_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const _u=new Ke;function u_(i){at._getMatrix(_u,at.workingColorSpace,i);const e=`mat3( ${_u.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+c_(i.getShaderSource(e),a)}else return s}function d_(i,e){const t=u_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function h_(i,e){let t;switch(e){case Yd:t="Linear";break;case qd:t="Reinhard";break;case Zd:t="Cineon";break;case Cu:t="ACESFilmic";break;case jd:t="AgX";break;case Kd:t="Neutral";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fa=new I;function f_(){at.getLuminanceCoefficients(fa);const i=fa.x.toFixed(4),e=fa.y.toFixed(4),t=fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function m_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function g_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function hs(i){return i!==""}function xu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const __=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(__,x_)}const v_=new Map;function x_(i,e){let t=Qe[e];if(t===void 0){const n=v_.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}const y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(y_,M_)}function M_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Su(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Au?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function E_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function T_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Wd:e="ENVMAP_BLENDING_MIX";break;case Xd:e="ENVMAP_BLENDING_ADD";break}return e}function w_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function A_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=S_(t),l=E_(t),u=b_(t),d=T_(t),f=w_(t),m=p_(t),g=m_(s),y=r.createProgram();let p,h,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(p=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[Su(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cn?"#define TONE_MAPPING":"",t.toneMapping!==Cn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Cn?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),f_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),o=Tl(o),o=xu(o,t),o=yu(o,t),a=Tl(a),a=xu(a,t),a=yu(a,t),o=Mu(o),a=Mu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const R=C+p+o,S=C+h+a,D=gu(r,r.VERTEX_SHADER,R),P=gu(r,r.FRAGMENT_SHADER,S);r.attachShader(y,D),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(D)||"",N=r.getShaderInfoLog(P)||"",V=F.trim(),X=L.trim(),K=N.trim();let k=!0,ne=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,D,P);else{const Q=vu(r,D,"vertex"),ce=vu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+Q+`
`+ce)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||K==="")&&(ne=!1);ne&&(w.diagnostics={runnable:k,programLog:V,vertexShader:{log:X,prefix:p},fragmentShader:{log:K,prefix:h}})}r.deleteShader(D),r.deleteShader(P),O=new Ma(r,y),M=g_(r,y)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(y,o_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=P,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P_(e),t.set(e,n)),n}}class P_{constructor(e){this.id=R_++,this.code=e,this.usedTimes=0}}function I_(i,e,t,n,r,s,o){const a=new Fl,c=new C_,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,_,w,F,L){const N=F.fog,V=L.geometry,X=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),k=K&&K.mapping===Ca?K.image.height:null,ne=g[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=Q!==void 0?Q.length:0;let ke=0;V.morphAttributes.position!==void 0&&(ke=1),V.morphAttributes.normal!==void 0&&(ke=2),V.morphAttributes.color!==void 0&&(ke=3);let Ye,ot,He,q;if(ne){const rt=Rn[ne];Ye=rt.vertexShader,ot=rt.fragmentShader}else Ye=M.vertexShader,ot=M.fragmentShader,c.update(M),He=c.getVertexShaderID(M),q=c.getFragmentShaderID(M);const J=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Re=L.isInstancedMesh===!0,Se=L.isBatchedMesh===!0,We=!!M.map,mt=!!M.matcap,b=!!K,je=!!M.aoMap,xe=!!M.lightMap,De=!!M.bumpMap,Ee=!!M.normalMap,qe=!!M.displacementMap,he=!!M.emissiveMap,Oe=!!M.metalnessMap,dt=!!M.roughnessMap,tt=M.anisotropy>0,E=M.clearcoat>0,x=M.dispersion>0,H=M.iridescence>0,$=M.sheen>0,ee=M.transmission>0,Z=tt&&!!M.anisotropyMap,pe=E&&!!M.clearcoatMap,le=E&&!!M.clearcoatNormalMap,ge=E&&!!M.clearcoatRoughnessMap,Ce=H&&!!M.iridescenceMap,re=H&&!!M.iridescenceThicknessMap,ye=$&&!!M.sheenColorMap,Ne=$&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,_e=!!M.specularColorMap,Ze=!!M.specularIntensityMap,U=ee&&!!M.transmissionMap,oe=ee&&!!M.thicknessMap,de=!!M.gradientMap,we=!!M.alphaMap,se=M.alphaTest>0,j=!!M.alphaHash,Ae=!!M.extensions;let Ve=Cn;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const ht={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:ot,defines:M.defines,customVertexShaderID:He,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Se,batchingColor:Se&&L._colorsTexture!==null,instancing:Re,instancingColor:Re&&L.instanceColor!==null,instancingMorph:Re&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ri,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:mt,envMap:b,envMapMode:b&&K.mapping,envMapCubeUVHeight:k,aoMap:je,lightMap:xe,bumpMap:De,normalMap:Ee,displacementMap:f&&qe,emissiveMap:he,normalMapObjectSpace:Ee&&M.normalMapType===th,normalMapTangentSpace:Ee&&M.normalMapType===zu,metalnessMap:Oe,roughnessMap:dt,anisotropy:tt,anisotropyMap:Z,clearcoat:E,clearcoatMap:pe,clearcoatNormalMap:le,clearcoatRoughnessMap:ge,dispersion:x,iridescence:H,iridescenceMap:Ce,iridescenceThicknessMap:re,sheen:$,sheenColorMap:ye,sheenRoughnessMap:Ne,specularMap:Pe,specularColorMap:_e,specularIntensityMap:Ze,transmission:ee,transmissionMap:U,thicknessMap:oe,gradientMap:de,opaque:M.transparent===!1&&M.blending===wi&&M.alphaToCoverage===!1,alphaMap:we,alphaTest:se,alphaHash:j,combine:M.combine,mapUv:We&&y(M.map.channel),aoMapUv:je&&y(M.aoMap.channel),lightMapUv:xe&&y(M.lightMap.channel),bumpMapUv:De&&y(M.bumpMap.channel),normalMapUv:Ee&&y(M.normalMap.channel),displacementMapUv:qe&&y(M.displacementMap.channel),emissiveMapUv:he&&y(M.emissiveMap.channel),metalnessMapUv:Oe&&y(M.metalnessMap.channel),roughnessMapUv:dt&&y(M.roughnessMap.channel),anisotropyMapUv:Z&&y(M.anisotropyMap.channel),clearcoatMapUv:pe&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(M.sheenRoughnessMap.channel),specularMapUv:Pe&&y(M.specularMap.channel),specularColorMapUv:_e&&y(M.specularColorMap.channel),specularIntensityMapUv:Ze&&y(M.specularIntensityMap.channel),transmissionMapUv:U&&y(M.transmissionMap.channel),thicknessMapUv:oe&&y(M.thicknessMap.channel),alphaMapUv:we&&y(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ee||tt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!V.attributes.uv&&(We||we),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ke,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&at.getTransfer(M.map.colorSpace)===gt,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&at.getTransfer(M.emissiveMap.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pt,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function h(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)_.push(w),_.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(C(_,M),R(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function C(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function R(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const _=g[M.type];let w;if(_){const F=Rn[_];w=Xh.clone(F.uniforms)}else w=M.uniforms;return w}function D(M,_){let w;for(let F=0,L=u.length;F<L;F++){const N=u[F];if(N.cacheKey===_){w=N,++w.usedTimes;break}}return w===void 0&&(w=new A_(i,_,M,s),u.push(w)),w}function P(M){if(--M.usedTimes===0){const _=u.indexOf(M);u[_]=u[u.length-1],u.pop(),M.destroy()}}function A(M){c.remove(M)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:D,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:O}}function D_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bu(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,g,y,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,g,y,p){const h=o(d,f,m,g,y,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function c(d,f,m,g,y,p){const h=o(d,f,m,g,y,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function l(d,f){t.length>1&&t.sort(d||L_),n.length>1&&n.sort(f||Eu),r.length>1&&r.sort(f||Eu)}function u(){for(let d=e,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function U_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new bu,i.set(n,[o])):r>=s.length?(o=new bu,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function F_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ze};break;case"SpotLight":t={position:new I,direction:new I,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function N_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let O_=0;function B_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function z_(i){const e=new F_,t=N_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new pt,o=new pt;function a(l){let u=0,d=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,g=0,y=0,p=0,h=0,C=0,R=0,S=0,D=0,P=0,A=0;l.sort(B_);for(let M=0,_=l.length;M<_;M++){const w=l[M],F=w.color,L=w.intensity,N=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=F.r*L,d+=F.g*L,f+=F.b*L;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],L);A++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const K=w.shadow,k=t.get(w);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[m]=k,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=w.shadow.matrix,C++}n.directional[m]=X,m++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(F).multiplyScalar(L),X.distance=N,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[y]=X;const K=w.shadow;if(w.map&&(n.spotLightMap[D]=w.map,D++,K.updateMatrices(w),w.castShadow&&P++),n.spotLightMatrix[y]=K.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=V,S++}y++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(F).multiplyScalar(L),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=X,p++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const K=w.shadow,k=t.get(w);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=w.shadow.matrix,R++}n.point[g]=X,g++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(L),X.groundColor.copy(w.groundColor).multiplyScalar(L),n.hemi[h]=X,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==p||O.hemiLength!==h||O.numDirectionalShadows!==C||O.numPointShadows!==R||O.numSpotShadows!==S||O.numSpotMaps!==D||O.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=R,n.pointShadowMap.length=R,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=R,n.spotLightMatrix.length=S+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,O.directionalLength=m,O.pointLength=g,O.spotLength=y,O.rectAreaLength=p,O.hemiLength=h,O.numDirectionalShadows=C,O.numPointShadows=R,O.numSpotShadows=S,O.numSpotMaps=D,O.numLightProbes=A,n.version=O_++)}function c(l,u){let d=0,f=0,m=0,g=0,y=0;const p=u.matrixWorldInverse;for(let h=0,C=l.length;h<C;h++){const R=l[h];if(R.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),d++}else if(R.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),m++}else if(R.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(R.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(R.width*.5,0,0),S.halfHeight.set(0,R.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(R.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(R.matrixWorld),S.position.applyMatrix4(p),f++}else if(R.isHemisphereLight){const S=n.hemi[y];S.direction.setFromMatrixPosition(R.matrixWorld),S.direction.transformDirection(p),y++}}}return{setup:a,setupView:c,state:n}}function Tu(i){const e=new z_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function H_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Tu(i),e.set(r,[a])):s>=o.length?(a=new Tu(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const k_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
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
}`;function G_(i,e,t){let n=new La;const r=new $e,s=new $e,o=new At,a=new rf({depthPacking:eh}),c=new sf,l={},u=t.maxTextureSize,d={[oi]:nn,[nn]:oi,[Pt]:Pt},f=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:k_,fragmentShader:V_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let h=this.type;this.render=function(P,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const M=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ai),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=h!==kn&&this.type===kn,N=h===kn&&this.type!==kn;for(let V=0,X=P.length;V<X;V++){const K=P[V],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ne=k.getFrameExtents();if(r.multiply(ne),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y)),k.map===null||L===!0||N===!0){const ce=this.type!==kn?{minFilter:Et,magFilter:Et}:{};k.map!==null&&k.map.dispose(),k.map=new Ci(r.x,r.y,ce),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Q=k.getViewportCount();for(let ce=0;ce<Q;ce++){const ke=k.getViewport(ce);o.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),F.viewport(o),k.updateMatrices(K,ce),n=k.getFrustum(),S(A,O,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===kn&&C(k,O),k.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(M,_,w)};function C(P,A){const O=e.update(y);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ci(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,O,f,y,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,O,m,y,null)}function R(P,A,O,M){let _=null;const w=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(w!==void 0)_=w;else if(_=O.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=_.uuid,L=A.uuid;let N=l[F];N===void 0&&(N={},l[F]=N);let V=N[L];V===void 0&&(V=_.clone(),N[L]=V,A.addEventListener("dispose",D)),_=V}if(_.visible=A.visible,_.wireframe=A.wireframe,M===kn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:d[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=O}return _}function S(P,A,O,M,_){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===kn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const L=e.update(P),N=P.material;if(Array.isArray(N)){const V=L.groups;for(let X=0,K=V.length;X<K;X++){const k=V[X],ne=N[k.materialIndex];if(ne&&ne.visible){const Q=R(P,ne,M,_);P.onBeforeShadow(i,P,A,O,L,Q,k),i.renderBufferDirect(O,null,L,Q,P,k),P.onAfterShadow(i,P,A,O,L,Q,k)}}}else if(N.visible){const V=R(P,N,M,_);P.onBeforeShadow(i,P,A,O,L,V,null),i.renderBufferDirect(O,null,L,V,P,null),P.onAfterShadow(i,P,A,O,L,V,null)}}const F=P.children;for(let L=0,N=F.length;L<N;L++)S(F[L],A,O,M,_)}function D(P){P.target.removeEventListener("dispose",D);for(const O in l){const M=l[O],_=P.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const W_={[Oo]:Bo,[zo]:Vo,[Ho]:Go,[hr]:ko,[Bo]:Oo,[Vo]:zo,[Go]:Ho,[ko]:hr};function X_(i,e){function t(){let U=!1;const oe=new At;let de=null;const we=new At(0,0,0,0);return{setMask:function(se){de!==se&&!U&&(i.colorMask(se,se,se,se),de=se)},setLocked:function(se){U=se},setClear:function(se,j,Ae,Ve,ht){ht===!0&&(se*=Ve,j*=Ve,Ae*=Ve),oe.set(se,j,Ae,Ve),we.equals(oe)===!1&&(i.clearColor(se,j,Ae,Ve),we.copy(oe))},reset:function(){U=!1,de=null,we.set(-1,0,0,0)}}}function n(){let U=!1,oe=!1,de=null,we=null,se=null;return{setReversed:function(j){if(oe!==j){const Ae=e.get("EXT_clip_control");j?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),oe=j;const Ve=se;se=null,this.setClear(Ve)}},getReversed:function(){return oe},setTest:function(j){j?J(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){de!==j&&!U&&(i.depthMask(j),de=j)},setFunc:function(j){if(oe&&(j=W_[j]),we!==j){switch(j){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=j}},setLocked:function(j){U=j},setClear:function(j){se!==j&&(oe&&(j=1-j),i.clearDepth(j),se=j)},reset:function(){U=!1,de=null,we=null,se=null,oe=!1}}}function r(){let U=!1,oe=null,de=null,we=null,se=null,j=null,Ae=null,Ve=null,ht=null;return{setTest:function(rt){U||(rt?J(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(rt){oe!==rt&&!U&&(i.stencilMask(rt),oe=rt)},setFunc:function(rt,ln,rn){(de!==rt||we!==ln||se!==rn)&&(i.stencilFunc(rt,ln,rn),de=rt,we=ln,se=rn)},setOp:function(rt,ln,rn){(j!==rt||Ae!==ln||Ve!==rn)&&(i.stencilOp(rt,ln,rn),j=rt,Ae=ln,Ve=rn)},setLocked:function(rt){U=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){U=!1,oe=null,de=null,we=null,se=null,j=null,Ae=null,Ve=null,ht=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],g=null,y=!1,p=null,h=null,C=null,R=null,S=null,D=null,P=null,A=new ze(0,0,0),O=0,M=!1,_=null,w=null,F=null,L=null,N=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=K>=2);let ne=null,Q={};const ce=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),Ye=new At().fromArray(ce),ot=new At().fromArray(ke);function He(U,oe,de,we){const se=new Uint8Array(4),j=i.createTexture();i.bindTexture(U,j),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<de;Ae++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(oe+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return j}const q={};q[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(hr),De(!1),Ee(mc),J(i.CULL_FACE),je(ai);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Re(U,oe){return d[U]!==oe?(i.bindFramebuffer(U,oe),d[U]=oe,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function Se(U,oe){let de=m,we=!1;if(U){de=f.get(oe),de===void 0&&(de=[],f.set(oe,de));const se=U.textures;if(de.length!==se.length||de[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Ae=se.length;j<Ae;j++)de[j]=i.COLOR_ATTACHMENT0+j;de.length=se.length,we=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,we=!0);we&&i.drawBuffers(de)}function We(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const mt={[bi]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Rd]:i.FUNC_REVERSE_SUBTRACT};mt[Cd]=i.MIN,mt[Pd]=i.MAX;const b={[Id]:i.ZERO,[Dd]:i.ONE,[Ld]:i.SRC_COLOR,[Fo]:i.SRC_ALPHA,[zd]:i.SRC_ALPHA_SATURATE,[Od]:i.DST_COLOR,[Fd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[kd]:i.ONE_MINUS_CONSTANT_COLOR,[Vd]:i.CONSTANT_ALPHA,[Gd]:i.ONE_MINUS_CONSTANT_ALPHA};function je(U,oe,de,we,se,j,Ae,Ve,ht,rt){if(U===ai){y===!0&&(fe(i.BLEND),y=!1);return}if(y===!1&&(J(i.BLEND),y=!0),U!==wd){if(U!==p||rt!==M){if((h!==bi||S!==bi)&&(i.blendEquation(i.FUNC_ADD),h=bi,S=bi),rt)switch(U){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}C=null,R=null,D=null,P=null,A.set(0,0,0),O=0,p=U,M=rt}return}se=se||oe,j=j||de,Ae=Ae||we,(oe!==h||se!==S)&&(i.blendEquationSeparate(mt[oe],mt[se]),h=oe,S=se),(de!==C||we!==R||j!==D||Ae!==P)&&(i.blendFuncSeparate(b[de],b[we],b[j],b[Ae]),C=de,R=we,D=j,P=Ae),(Ve.equals(A)===!1||ht!==O)&&(i.blendColor(Ve.r,Ve.g,Ve.b,ht),A.copy(Ve),O=ht),p=U,M=!1}function xe(U,oe){U.side===Pt?fe(i.CULL_FACE):J(i.CULL_FACE);let de=U.side===nn;oe&&(de=!de),De(de),U.blending===wi&&U.transparent===!1?je(ai):je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const we=U.stencilWrite;a.setTest(we),we&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),he(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(U){_!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),_=U)}function Ee(U){U!==bd?(J(i.CULL_FACE),U!==w&&(U===mc?i.cullFace(i.BACK):U===Td?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),w=U}function qe(U){U!==F&&(X&&i.lineWidth(U),F=U)}function he(U,oe,de){U?(J(i.POLYGON_OFFSET_FILL),(L!==oe||N!==de)&&(i.polygonOffset(oe,de),L=oe,N=de)):fe(i.POLYGON_OFFSET_FILL)}function Oe(U){U?J(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function dt(U){U===void 0&&(U=i.TEXTURE0+V-1),ne!==U&&(i.activeTexture(U),ne=U)}function tt(U,oe,de){de===void 0&&(ne===null?de=i.TEXTURE0+V-1:de=ne);let we=Q[de];we===void 0&&(we={type:void 0,texture:void 0},Q[de]=we),(we.type!==U||we.texture!==oe)&&(ne!==de&&(i.activeTexture(de),ne=de),i.bindTexture(U,oe||q[U]),we.type=U,we.texture=oe)}function E(){const U=Q[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(U){Ye.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ye.copy(U))}function Ne(U){ot.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ot.copy(U))}function Pe(U,oe){let de=l.get(oe);de===void 0&&(de=new WeakMap,l.set(oe,de));let we=de.get(U);we===void 0&&(we=i.getUniformBlockIndex(oe,U.name),de.set(U,we))}function _e(U,oe){const we=l.get(oe).get(U);c.get(oe)!==we&&(i.uniformBlockBinding(oe,we,U.__bindingPointIndex),c.set(oe,we))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,Q={},d={},f=new WeakMap,m=[],g=null,y=!1,p=null,h=null,C=null,R=null,S=null,D=null,P=null,A=new ze(0,0,0),O=0,M=!1,_=null,w=null,F=null,L=null,N=null,Ye.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:fe,bindFramebuffer:Re,drawBuffers:Se,useProgram:We,setBlending:je,setMaterial:xe,setFlipSided:De,setCullFace:Ee,setLineWidth:qe,setPolygonOffset:he,setScissorTest:Oe,activeTexture:dt,bindTexture:tt,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:H,texImage2D:Ce,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:_e,texStorage2D:le,texStorage3D:ge,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:pe,scissor:ye,viewport:Ne,reset:Ze}}function Y_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Ms("canvas")}function y(E,x,H){let $=1;const ee=tt(E);if((ee.width>H||ee.height>H)&&($=H/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor($*ee.width),pe=Math.floor($*ee.height);d===void 0&&(d=g(Z,pe));const le=x?g(Z,pe):d;return le.width=Z,le.height=pe,le.getContext("2d").drawImage(E,0,0,Z,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+pe+")."),le}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(E,x,H,$,ee=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=x;if(x===i.RED&&(H===i.FLOAT&&(Z=i.R32F),H===i.HALF_FLOAT&&(Z=i.R16F),H===i.UNSIGNED_BYTE&&(Z=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.R8UI),H===i.UNSIGNED_SHORT&&(Z=i.R16UI),H===i.UNSIGNED_INT&&(Z=i.R32UI),H===i.BYTE&&(Z=i.R8I),H===i.SHORT&&(Z=i.R16I),H===i.INT&&(Z=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Z=i.RG32F),H===i.HALF_FLOAT&&(Z=i.RG16F),H===i.UNSIGNED_BYTE&&(Z=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RG8UI),H===i.UNSIGNED_SHORT&&(Z=i.RG16UI),H===i.UNSIGNED_INT&&(Z=i.RG32UI),H===i.BYTE&&(Z=i.RG8I),H===i.SHORT&&(Z=i.RG16I),H===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),H===i.UNSIGNED_INT&&(Z=i.RGB32UI),H===i.BYTE&&(Z=i.RGB8I),H===i.SHORT&&(Z=i.RGB16I),H===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),H===i.UNSIGNED_INT&&(Z=i.RGBA32UI),H===i.BYTE&&(Z=i.RGBA8I),H===i.SHORT&&(Z=i.RGBA16I),H===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const pe=ee?Ea:at.getTransfer($);H===i.FLOAT&&(Z=i.RGBA32F),H===i.HALF_FLOAT&&(Z=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Z=pe===gt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(E,x){let H;return E?x===null||x===Ai||x===gs?H=i.DEPTH24_STENCIL8:x===mn?H=i.DEPTH32F_STENCIL8:x===ms&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ai||x===gs?H=i.DEPTH_COMPONENT24:x===mn?H=i.DEPTH_COMPONENT32F:x===ms&&(H=i.DEPTH_COMPONENT16),H}function D(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Et&&E.minFilter!==Sn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function P(E){const x=E.target;x.removeEventListener("dispose",P),O(x),x.isVideoTexture&&u.delete(x)}function A(E){const x=E.target;x.removeEventListener("dispose",A),_(x)}function O(E){const x=n.get(E);if(x.__webglInit===void 0)return;const H=E.source,$=f.get(H);if($){const ee=$[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(E),Object.keys($).length===0&&f.delete(H)}n.remove(E)}function M(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const H=E.source,$=f.get(H);delete $[x.__cacheKey],o.memory.textures--}function _(E){const x=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let ee=0;ee<x.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(x.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=E.textures;for(let $=0,ee=H.length;$<ee;$++){const Z=n.get(H[$]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(E)}let w=0;function F(){w=0}function L(){const E=w;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),w+=1,E}function N(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function V(E,x){const H=n.get(E);if(E.isVideoTexture&&Oe(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&H.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(H,E,x);return}}else E.isExternalTexture&&(H.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function X(E,x){const H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){q(H,E,x);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function K(E,x){const H=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){q(H,E,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function k(E,x){const H=n.get(E);if(E.version>0&&H.__version!==E.version){J(H,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const ne={[Mn]:i.REPEAT,[on]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},Q={[Et]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},ce={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[Hu]:i.LEQUAL,[rh]:i.EQUAL,[oh]:i.GEQUAL,[sh]:i.GREATER,[ah]:i.NOTEQUAL};function ke(E,x){if(x.type===mn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Sn||x.magFilter===Ka||x.magFilter===Bs||x.magFilter===si||x.minFilter===Sn||x.minFilter===Ka||x.minFilter===Bs||x.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ne[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ne[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ne[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Q[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Et||x.minFilter!==Bs&&x.minFilter!==si||x.type===mn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ye(E,x){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const $=x.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const Z=N(x);if(Z!==E.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[Z].usedTimes++;const pe=ee[E.__cacheKey];pe!==void 0&&(ee[E.__cacheKey].usedTimes--,pe.usedTimes===0&&M(x)),E.__cacheKey=Z,E.__webglTexture=ee[Z].texture}return H}function ot(E,x,H){return Math.floor(Math.floor(E/H)/x)}function He(E,x,H,$){const Z=E.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,$,x.data);else{Z.sort((re,ye)=>re.start-ye.start);let pe=0;for(let re=1;re<Z.length;re++){const ye=Z[pe],Ne=Z[re],Pe=ye.start+ye.count,_e=ot(Ne.start,x.width,4),Ze=ot(ye.start,x.width,4);Ne.start<=Pe+1&&_e===Ze&&ot(Ne.start+Ne.count-1,x.width,4)===_e?ye.count=Math.max(ye.count,Ne.start+Ne.count-ye.start):(++pe,Z[pe]=Ne)}Z.length=pe+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),ge=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let re=0,ye=Z.length;re<ye;re++){const Ne=Z[re],Pe=Math.floor(Ne.start/4),_e=Math.ceil(Ne.count/4),Ze=Pe%x.width,U=Math.floor(Pe/x.width),oe=_e,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Ze,U,oe,de,H,$,x.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function q(E,x,H){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const ee=Ye(E,x),Z=x.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+H);const pe=n.get(Z);if(Z.version!==pe.__version||ee===!0){t.activeTexture(i.TEXTURE0+H);const le=at.getPrimaries(at.workingColorSpace),ge=x.colorSpace===ri?null:at.getPrimaries(x.colorSpace),Ce=x.colorSpace===ri||le===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=y(x.image,!1,r.maxTextureSize);re=dt(x,re);const ye=s.convert(x.format,x.colorSpace),Ne=s.convert(x.type);let Pe=R(x.internalFormat,ye,Ne,x.colorSpace,x.isVideoTexture);ke($,x);let _e;const Ze=x.mipmaps,U=x.isVideoTexture!==!0,oe=pe.__version===void 0||ee===!0,de=Z.dataReady,we=D(x,re);if(x.isDepthTexture)Pe=S(x.format===vs,x.type),oe&&(U?t.texStorage2D(i.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,ye,Ne,null));else if(x.isDataTexture)if(Ze.length>0){U&&oe&&t.texStorage2D(i.TEXTURE_2D,we,Pe,Ze[0].width,Ze[0].height);for(let se=0,j=Ze.length;se<j;se++)_e=Ze[se],U?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Ne,_e.data):t.texImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,ye,Ne,_e.data);x.generateMipmaps=!1}else U?(oe&&t.texStorage2D(i.TEXTURE_2D,we,Pe,re.width,re.height),de&&He(x,re,ye,Ne)):t.texImage2D(i.TEXTURE_2D,0,Pe,re.width,re.height,0,ye,Ne,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Pe,Ze[0].width,Ze[0].height,re.depth);for(let se=0,j=Ze.length;se<j;se++)if(_e=Ze[se],x.format!==Jt)if(ye!==null)if(U){if(de)if(x.layerUpdates.size>0){const Ae=tu(_e.width,_e.height,x.format,x.type);for(const Ve of x.layerUpdates){const ht=_e.data.subarray(Ve*Ae/_e.data.BYTES_PER_ELEMENT,(Ve+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ve,_e.width,_e.height,1,ye,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,re.depth,ye,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Pe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,_e.width,_e.height,re.depth,ye,Ne,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Pe,_e.width,_e.height,re.depth,0,ye,Ne,_e.data)}else{U&&oe&&t.texStorage2D(i.TEXTURE_2D,we,Pe,Ze[0].width,Ze[0].height);for(let se=0,j=Ze.length;se<j;se++)_e=Ze[se],x.format!==Jt?ye!==null?U?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,_e.width,_e.height,ye,Ne,_e.data):t.texImage2D(i.TEXTURE_2D,se,Pe,_e.width,_e.height,0,ye,Ne,_e.data)}else if(x.isDataArrayTexture)if(U){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,we,Pe,re.width,re.height,re.depth),de)if(x.layerUpdates.size>0){const se=tu(re.width,re.height,x.format,x.type);for(const j of x.layerUpdates){const Ae=re.data.subarray(j*se/re.data.BYTES_PER_ELEMENT,(j+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,re.width,re.height,1,ye,Ne,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(x.isData3DTexture)U?(oe&&t.texStorage3D(i.TEXTURE_3D,we,Pe,re.width,re.height,re.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ye,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,ye,Ne,re.data);else if(x.isFramebufferTexture){if(oe)if(U)t.texStorage2D(i.TEXTURE_2D,we,Pe,re.width,re.height);else{let se=re.width,j=re.height;for(let Ae=0;Ae<we;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Pe,se,j,0,ye,Ne,null),se>>=1,j>>=1}}else if(Ze.length>0){if(U&&oe){const se=tt(Ze[0]);t.texStorage2D(i.TEXTURE_2D,we,Pe,se.width,se.height)}for(let se=0,j=Ze.length;se<j;se++)_e=Ze[se],U?de&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ye,Ne,_e):t.texImage2D(i.TEXTURE_2D,se,Pe,ye,Ne,_e);x.generateMipmaps=!1}else if(U){if(oe){const se=tt(re);t.texStorage2D(i.TEXTURE_2D,we,Pe,se.width,se.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Ne,re)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ye,Ne,re);p(x)&&h($),pe.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function J(E,x,H){if(x.image.length!==6)return;const $=Ye(E,x),ee=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);const Z=n.get(ee);if(ee.version!==Z.__version||$===!0){t.activeTexture(i.TEXTURE0+H);const pe=at.getPrimaries(at.workingColorSpace),le=x.colorSpace===ri?null:at.getPrimaries(x.colorSpace),ge=x.colorSpace===ri||pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let j=0;j<6;j++)!Ce&&!re?ye[j]=y(x.image[j],!0,r.maxCubemapSize):ye[j]=re?x.image[j].image:x.image[j],ye[j]=dt(x,ye[j]);const Ne=ye[0],Pe=s.convert(x.format,x.colorSpace),_e=s.convert(x.type),Ze=R(x.internalFormat,Pe,_e,x.colorSpace),U=x.isVideoTexture!==!0,oe=Z.__version===void 0||$===!0,de=ee.dataReady;let we=D(x,Ne);ke(i.TEXTURE_CUBE_MAP,x);let se;if(Ce){U&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,Ne.width,Ne.height);for(let j=0;j<6;j++){se=ye[j].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Ve=se[Ae];x.format!==Jt?Pe!==null?U?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,Ve.width,Ve.height,Pe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,Ze,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,Ve.width,Ve.height,Pe,_e,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,Ze,Ve.width,Ve.height,0,Pe,_e,Ve.data)}}}else{if(se=x.mipmaps,U&&oe){se.length>0&&we++;const j=tt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,we,Ze,j.width,j.height)}for(let j=0;j<6;j++)if(re){U?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ye[j].width,ye[j].height,Pe,_e,ye[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,ye[j].width,ye[j].height,0,Pe,_e,ye[j].data);for(let Ae=0;Ae<se.length;Ae++){const ht=se[Ae].image[j].image;U?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,ht.width,ht.height,Pe,_e,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,Ze,ht.width,ht.height,0,Pe,_e,ht.data)}}else{U?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pe,_e,ye[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ze,Pe,_e,ye[j]);for(let Ae=0;Ae<se.length;Ae++){const Ve=se[Ae];U?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,Pe,_e,Ve.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,Ze,Pe,_e,Ve.image[j])}}}p(x)&&h(i.TEXTURE_CUBE_MAP),Z.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function fe(E,x,H,$,ee,Z){const pe=s.convert(H.format,H.colorSpace),le=s.convert(H.type),ge=R(H.internalFormat,pe,le,H.colorSpace),Ce=n.get(x),re=n.get(H);if(re.__renderTarget=x,!Ce.__hasExternalTextures){const ye=Math.max(1,x.width>>Z),Ne=Math.max(1,x.height>>Z);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Z,ge,ye,Ne,x.depth,0,pe,le,null):t.texImage2D(ee,Z,ge,ye,Ne,0,pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,re.__webglTexture,0,qe(x)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,re.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(E,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){const $=x.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Z=S(x.stencilBuffer,ee),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=qe(x);he(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Z,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,E)}else{const $=x.textures;for(let ee=0;ee<$.length;ee++){const Z=$[ee],pe=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),ge=R(Z.internalFormat,pe,le,Z.colorSpace),Ce=qe(x);H&&he(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,ge,x.width,x.height):he(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,ge,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ge,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const ee=$.__webglTexture,Z=qe(x);if(x.depthTexture.format===_s)he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(x.depthTexture.format===vs)he(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function We(E){const x=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=$}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=E.texture.mipmaps;$&&$.length>0?Se(x.__webglFramebuffer[0],E):Se(x.__webglFramebuffer,E)}else if(H){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),Re(x.__webglDepthbuffer[$],E,!1);else{const ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Z)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Re(x.__webglDepthbuffer,E,!1);else{const ee=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(E,x,H){const $=n.get(E);x!==void 0&&fe($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&We(E)}function b(E){const x=E.texture,H=n.get(E),$=n.get(x);E.addEventListener("dispose",A);const ee=E.textures,Z=E.isWebGLCubeRenderTarget===!0,pe=ee.length>1;if(pe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Z){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let ge=0;ge<x.mipmaps.length;ge++)H.__webglFramebuffer[le][ge]=i.createFramebuffer()}else H.__webglFramebuffer[le]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)H.__webglFramebuffer[le]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pe)for(let le=0,ge=ee.length;le<ge;le++){const Ce=n.get(ee[le]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&he(E)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];H.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Ce=s.convert(ge.format,ge.colorSpace),re=s.convert(ge.type),ye=R(ge.internalFormat,Ce,re,ge.colorSpace,E.isXRRenderTarget===!0),Ne=qe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,ye,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,H.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),ke(i.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)fe(H.__webglFramebuffer[le][ge],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else fe(H.__webglFramebuffer[le],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(x)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let le=0,ge=ee.length;le<ge;le++){const Ce=ee[le],re=n.get(Ce);let ye=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ye=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,re.__webglTexture),ke(ye,Ce),fe(H.__webglFramebuffer,E,Ce,i.COLOR_ATTACHMENT0+le,ye,0),p(Ce)&&h(ye)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(le=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),ke(le,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)fe(H.__webglFramebuffer[ge],E,x,i.COLOR_ATTACHMENT0,le,ge);else fe(H.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,le,0);p(x)&&h(le),t.unbindTexture()}E.depthBuffer&&We(E)}function je(E){const x=E.textures;for(let H=0,$=x.length;H<$;H++){const ee=x[H];if(p(ee)){const Z=C(E),pe=n.get(ee).__webglTexture;t.bindTexture(Z,pe),h(Z),t.unbindTexture()}}}const xe=[],De=[];function Ee(E){if(E.samples>0){if(he(E)===!1){const x=E.textures,H=E.width,$=E.height;let ee=i.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(E),le=x.length>1;if(le)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ge=E.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const re=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,ee,i.NEAREST),c===!0&&(xe.length=0,De.length=0,xe.push(i.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(xe.push(Z),De.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ce]);const re=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function qe(E){return Math.min(r.maxSamples,E.samples)}function he(E){const x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Oe(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function dt(E,x){const H=E.colorSpace,$=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||H!==Ri&&H!==ri&&(at.getTransfer(H)===gt?($!==Jt||ee!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=mt,this.setupRenderTarget=b,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=he}function q_(i,e){function t(n,r=ri){let s;const o=at.getTransfer(r);if(n===In)return i.UNSIGNED_BYTE;if(n===Rl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Iu)return i.BYTE;if(n===Du)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===Al)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Fu)return i.ALPHA;if(n===Nu)return i.RGB;if(n===Jt)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===Ou)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===Bu)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Dl)return i.RGBA_INTEGER;if(n===_a||n===va||n===xa||n===ya)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_a)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_a)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===Zo||n===$o||n===jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Jo||n===Qo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ko||n===Jo)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===el||n===tl||n===nl||n===il||n===rl||n===sl||n===al||n===ol||n===ll||n===cl||n===ul||n===dl||n===hl||n===fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===el)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pl)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_l||n===vl||n===xl||n===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_l)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ku(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:Z_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K_ extends gr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,g=null;const y=typeof XRWebGLBinding<"u",p=new j_,h={},C=t.getContextAttributes();let R=null,S=null;const D=[],P=[],A=new $e;let O=null;const M=new fn;M.viewport=new At;const _=new fn;_.viewport=new At;const w=[M,_],F=new ff;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=D[q];return J===void 0&&(J=new xo,D[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=D[q];return J===void 0&&(J=new xo,D[q]=J),J.getGripSpace()},this.getHand=function(q){let J=D[q];return J===void 0&&(J=new xo,D[q]=J),J.getHandSpace()};function V(q){const J=P.indexOf(q.inputSource);if(J===-1)return;const fe=D[J];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let q=0;q<D.length;q++){const J=P[q];J!==null&&(P[q]=null,D[q].disconnect(J))}L=null,N=null,p.reset();for(const q in h)delete h[q];e.setRenderTarget(R),m=null,f=null,d=null,r=null,S=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),C.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Re=null,Se=null;C.depth&&(Se=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=C.stencil?vs:_s,Re=C.stencil?gs:Ai);const We={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(We),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ci(f.textureWidth,f.textureHeight,{format:Jt,type:In,depthTexture:new ju(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const fe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ci(m.framebufferWidth,m.framebufferHeight,{format:Jt,type:In,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(q){for(let J=0;J<q.removed.length;J++){const fe=q.removed[J],Re=P.indexOf(fe);Re>=0&&(P[Re]=null,D[Re].disconnect(fe))}for(let J=0;J<q.added.length;J++){const fe=q.added[J];let Re=P.indexOf(fe);if(Re===-1){for(let We=0;We<D.length;We++)if(We>=P.length){P.push(fe),Re=We;break}else if(P[We]===null){P[We]=fe,Re=We;break}if(Re===-1)break}const Se=D[Re];Se&&Se.connect(fe)}}const k=new I,ne=new I;function Q(q,J,fe){k.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const Re=k.distanceTo(ne),Se=J.projectionMatrix.elements,We=fe.projectionMatrix.elements,mt=Se[14]/(Se[10]-1),b=Se[14]/(Se[10]+1),je=(Se[9]+1)/Se[5],xe=(Se[9]-1)/Se[5],De=(Se[8]-1)/Se[0],Ee=(We[8]+1)/We[0],qe=mt*De,he=mt*Ee,Oe=Re/(-De+Ee),dt=Oe*-De;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(dt),q.translateZ(Oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const tt=mt+Oe,E=b+Oe,x=qe-dt,H=he+(Re-dt),$=je*b/E*tt,ee=xe*b/E*tt;q.projectionMatrix.makePerspective(x,H,$,ee,tt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ce(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,fe=q.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),F.near=_.near=M.near=J,F.far=_.far=M.far=fe,(L!==F.near||N!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,N=F.far),F.layers.mask=q.layers.mask|6,M.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;const Re=q.parent,Se=F.cameras;ce(F,Re);for(let We=0;We<Se.length;We++)ce(Se[We],Re);Se.length===2?Q(F,M,_):F.projectionMatrix.copy(M.projectionMatrix),ke(q,F,Re)};function ke(q,J,fe){fe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(q){return h[q]};let Ye=null;function ot(q,J){if(u=J.getViewerPose(l||o),g=J,u!==null){const fe=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Re=!1;fe.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let b=0;b<fe.length;b++){const je=fe[b];let xe=null;if(m!==null)xe=m.getViewport(je);else{const Ee=d.getViewSubImage(f,je);xe=Ee.viewport,b===0&&(e.setRenderTargetTextures(S,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(S))}let De=w[b];De===void 0&&(De=new fn,De.layers.enable(b),De.viewport=new At,w[b]=De),De.matrix.fromArray(je.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(je.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(xe.x,xe.y,xe.width,xe.height),b===0&&(F.matrix.copy(De.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(De)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const b=d.getDepthInformation(fe[0]);b&&b.isValid&&b.texture&&p.init(b,r.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let b=0;b<fe.length;b++){const je=fe[b].camera;if(je){let xe=h[je];xe||(xe=new Ku,h[je]=xe);const De=d.getCameraImage(je);xe.sourceTexture=De}}}}for(let fe=0;fe<D.length;fe++){const Re=P[fe],Se=D[fe];Re!==null&&Se!==void 0&&Se.update(Re,J,l||o)}Ye&&Ye(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const He=new Qu;He.setAnimationLoop(ot),this.setAnimationLoop=function(q){Ye=q},this.dispose=function(){}}}const yi=new Dn,J_=new pt;function Q_(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Yu(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,C,R,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,S)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),y(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?c(p,h,C,R):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===nn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===nn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const C=e.get(h),R=C.envMap,S=C.envMapRotation;R&&(p.envMap.value=R,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(yi)),p.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,C,R){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*C,p.scale.value=R*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,C){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===nn&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const C=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e0(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,R){const S=R.program;n.uniformBlockBinding(C,S)}function l(C,R){let S=r[C.id];S===void 0&&(g(C),S=u(C),r[C.id]=S,C.addEventListener("dispose",p));const D=R.program;n.updateUBOMapping(C,D);const P=e.render.frame;s[C.id]!==P&&(f(C),s[C.id]=P)}function u(C){const R=d();C.__bindingPointIndex=R;const S=i.createBuffer(),D=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,R,S),S}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const R=r[C.id],S=C.uniforms,D=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let P=0,A=S.length;P<A;P++){const O=Array.isArray(S[P])?S[P]:[S[P]];for(let M=0,_=O.length;M<_;M++){const w=O[M];if(m(w,P,M,D)===!0){const F=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let V=0;V<L.length;V++){const X=L[V],K=y(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+N,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,N),N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,R,S,D){const P=C.value,A=R+"_"+S;if(D[A]===void 0)return typeof P=="number"||typeof P=="boolean"?D[A]=P:D[A]=P.clone(),!0;{const O=D[A];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return D[A]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function g(C){const R=C.uniforms;let S=0;const D=16;for(let A=0,O=R.length;A<O;A++){const M=Array.isArray(R[A])?R[A]:[R[A]];for(let _=0,w=M.length;_<w;_++){const F=M[_],L=Array.isArray(F.value)?F.value:[F.value];for(let N=0,V=L.length;N<V;N++){const X=L[N],K=y(X),k=S%D,ne=k%K.boundary,Q=k+ne;S+=ne,Q!==0&&D-Q<K.storage&&(S+=D-Q),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=K.storage}}}const P=S%D;return P>0&&(S+=D-P),C.__size=S,C.__cache={},this}function y(C){const R={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(R.boundary=4,R.storage=4):C.isVector2?(R.boundary=8,R.storage=8):C.isVector3||C.isColor?(R.boundary=16,R.storage=12):C.isVector4?(R.boundary=16,R.storage=16):C.isMatrix3?(R.boundary=48,R.storage=48):C.isMatrix4?(R.boundary=64,R.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),R}function p(C){const R=C.target;R.removeEventListener("dispose",p);const S=o.indexOf(R.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[R.id]),delete r[R.id],delete s[R.id]}function h(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:h}}class t0{constructor(e={}){const{canvas:t=Th(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),y=new Int32Array(4);let p=null,h=null;const C=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Kt;let P=0,A=0,O=null,M=-1,_=null;const w=new At,F=new At;let L=null;const N=new ze(0);let V=0,X=t.width,K=t.height,k=1,ne=null,Q=null;const ce=new At(0,0,X,K),ke=new At(0,0,X,K);let Ye=!1;const ot=new La;let He=!1,q=!1;const J=new pt,fe=new I,Re=new At,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function mt(){return O===null?k:1}let b=n;function je(v,B){return t.getContext(v,B)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",se,!1),b===null){const B="webgl2";if(b=je(B,v),b===null)throw je(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let xe,De,Ee,qe,he,Oe,dt,tt,E,x,H,$,ee,Z,pe,le,ge,Ce,re,ye,Ne,Pe,_e,Ze;function U(){xe=new dg(b),xe.init(),Pe=new q_(b,xe),De=new rg(b,xe,e,Pe),Ee=new X_(b,xe),De.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),qe=new pg(b),he=new D_,Oe=new Y_(b,xe,Ee,he,De,Pe,qe),dt=new ag(S),tt=new ug(S),E=new yf(b),_e=new ng(b,E),x=new hg(b,E,qe,_e),H=new gg(b,x,E,qe),re=new mg(b,De,Oe),le=new sg(he),$=new I_(S,dt,tt,xe,De,_e,le),ee=new Q_(S,he),Z=new U_,pe=new H_(xe),Ce=new tg(S,dt,tt,Ee,H,m,c),ge=new G_(S,H,De),Ze=new e0(b,qe,De,Ee),ye=new ig(b,xe,qe),Ne=new fg(b,xe,qe),qe.programs=$.programs,S.capabilities=De,S.extensions=xe,S.properties=he,S.renderLists=Z,S.shadowMap=ge,S.state=Ee,S.info=qe}U();const oe=new K_(S,b);this.xr=oe,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=xe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=xe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(v){v!==void 0&&(k=v,this.setSize(X,K,!1))},this.getSize=function(v){return v.set(X,K)},this.setSize=function(v,B,G=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,K=B,t.width=Math.floor(v*k),t.height=Math.floor(B*k),G===!0&&(t.style.width=v+"px",t.style.height=B+"px"),this.setViewport(0,0,v,B)},this.getDrawingBufferSize=function(v){return v.set(X*k,K*k).floor()},this.setDrawingBufferSize=function(v,B,G){X=v,K=B,k=G,t.width=Math.floor(v*G),t.height=Math.floor(B*G),this.setViewport(0,0,v,B)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(ce)},this.setViewport=function(v,B,G,W){v.isVector4?ce.set(v.x,v.y,v.z,v.w):ce.set(v,B,G,W),Ee.viewport(w.copy(ce).multiplyScalar(k).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,B,G,W){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,B,G,W),Ee.scissor(F.copy(ke).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(v){Ee.setScissorTest(Ye=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){Q=v},this.getClearColor=function(v){return v.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(v=!0,B=!0,G=!0){let W=0;if(v){let z=!1;if(O!==null){const ae=O.texture.format;z=ae===Dl||ae===Il||ae===Pl}if(z){const ae=O.texture.type,ve=ae===In||ae===Ai||ae===ms||ae===gs||ae===Rl||ae===Cl,be=Ce.getClearColor(),Me=Ce.getClearAlpha(),Ue=be.r,Be=be.g,Le=be.b;ve?(g[0]=Ue,g[1]=Be,g[2]=Le,g[3]=Me,b.clearBufferuiv(b.COLOR,0,g)):(y[0]=Ue,y[1]=Be,y[2]=Le,y[3]=Me,b.clearBufferiv(b.COLOR,0,y))}else W|=b.COLOR_BUFFER_BIT}B&&(W|=b.DEPTH_BUFFER_BIT),G&&(W|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Ce.dispose(),Z.dispose(),pe.dispose(),he.dispose(),dt.dispose(),tt.dispose(),H.dispose(),_e.dispose(),Ze.dispose(),$.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",rn),oe.removeEventListener("sessionend",cn),qt.stop()};function de(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const v=qe.autoReset,B=ge.enabled,G=ge.autoUpdate,W=ge.needsUpdate,z=ge.type;U(),qe.autoReset=v,ge.enabled=B,ge.autoUpdate=G,ge.needsUpdate=W,ge.type=z}function se(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const B=v.target;B.removeEventListener("dispose",j),Ae(B)}function Ae(v){Ve(v),he.remove(v)}function Ve(v){const B=he.get(v).programs;B!==void 0&&(B.forEach(function(G){$.releaseProgram(G)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,B,G,W,z,ae){B===null&&(B=Se);const ve=z.isMesh&&z.matrixWorld.determinant()<0,be=Mr(v,B,G,W,z);Ee.setMaterial(W,ve);let Me=G.index,Ue=1;if(W.wireframe===!0){if(Me=x.getWireframeAttribute(G),Me===void 0)return;Ue=2}const Be=G.drawRange,Le=G.attributes.position;let Je=Be.start*Ue,st=(Be.start+Be.count)*Ue;ae!==null&&(Je=Math.max(Je,ae.start*Ue),st=Math.min(st,(ae.start+ae.count)*Ue)),Me!==null?(Je=Math.max(Je,0),st=Math.min(st,Me.count)):Le!=null&&(Je=Math.max(Je,0),st=Math.min(st,Le.count));const Mt=st-Je;if(Mt<0||Mt===1/0)return;_e.setup(z,W,be,G,Me);let xt,ct=ye;if(Me!==null&&(xt=E.get(Me),ct=Ne,ct.setIndex(xt)),z.isMesh)W.wireframe===!0?(Ee.setLineWidth(W.wireframeLinewidth*mt()),ct.setMode(b.LINES)):ct.setMode(b.TRIANGLES);else if(z.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),Ee.setLineWidth(Fe*mt()),z.isLineSegments?ct.setMode(b.LINES):z.isLineLoop?ct.setMode(b.LINE_LOOP):ct.setMode(b.LINE_STRIP)}else z.isPoints?ct.setMode(b.POINTS):z.isSprite&&ct.setMode(b.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(xe.get("WEBGL_multi_draw"))ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,lt=z._multiDrawCounts,it=z._multiDrawCount,zt=Me?E.get(Me).bytesPerElement:1,Yn=he.get(W).currentProgram.getUniforms();for(let Te=0;Te<it;Te++)Yn.setValue(b,"_gl_DrawID",Te),ct.render(Fe[Te]/zt,lt[Te])}else if(z.isInstancedMesh)ct.renderInstances(Je,Mt,z.count);else if(G.isInstancedBufferGeometry){const Fe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,lt=Math.min(G.instanceCount,Fe);ct.renderInstances(Je,Mt,lt)}else ct.render(Je,Mt)};function ht(v,B,G){v.transparent===!0&&v.side===Pt&&v.forceSinglePass===!1?(v.side=nn,v.needsUpdate=!0,Xn(v,B,G),v.side=oi,v.needsUpdate=!0,Xn(v,B,G),v.side=Pt):Xn(v,B,G)}this.compile=function(v,B,G=null){G===null&&(G=v),h=pe.get(G),h.init(B),R.push(h),G.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),v!==G&&v.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights();const W=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ae=z.material;if(ae)if(Array.isArray(ae))for(let ve=0;ve<ae.length;ve++){const be=ae[ve];ht(be,G,z),W.add(be)}else ht(ae,G,z),W.add(ae)}),h=R.pop(),W},this.compileAsync=function(v,B,G=null){const W=this.compile(v,B,G);return new Promise(z=>{function ae(){if(W.forEach(function(ve){he.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){z(v);return}setTimeout(ae,10)}xe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let rt=null;function ln(v){rt&&rt(v)}function rn(){qt.stop()}function cn(){qt.start()}const qt=new Qu;qt.setAnimationLoop(ln),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(v){rt=v,oe.setAnimationLoop(v),v===null?qt.stop():qt.start()},oe.addEventListener("sessionstart",rn),oe.addEventListener("sessionend",cn),this.render=function(v,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,B,O),h=pe.get(v,R.length),h.init(B),R.push(h),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ot.setFromProjectionMatrix(J,En,B.reversedDepth),q=this.localClippingEnabled,He=le.init(this.clippingPlanes,q),p=Z.get(v,C.length),p.init(),C.push(p),oe.enabled===!0&&oe.isPresenting===!0){const ae=S.xr.getDepthSensingMesh();ae!==null&&bn(ae,B,-1/0,S.sortObjects)}bn(v,B,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ne,Q),We=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,We&&Ce.addToRenderList(p,v),this.info.render.frame++,He===!0&&le.beginShadows();const G=h.state.shadowsArray;ge.render(G,v,B),He===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,z=p.transmissive;if(h.setupLights(),B.isArrayCamera){const ae=B.cameras;if(z.length>0)for(let ve=0,be=ae.length;ve<be;ve++){const Me=ae[ve];gn(W,z,v,Me)}We&&Ce.render(v);for(let ve=0,be=ae.length;ve<be;ve++){const Me=ae[ve];Bt(p,v,Me,Me.viewport)}}else z.length>0&&gn(W,z,v,B),We&&Ce.render(v),Bt(p,v,B);O!==null&&A===0&&(Oe.updateMultisampleRenderTarget(O),Oe.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(S,v,B),_e.resetDefaultState(),M=-1,_=null,R.pop(),R.length>0?(h=R[R.length-1],He===!0&&le.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function bn(v,B,G,W){if(v.visible===!1)return;if(v.layers.test(B.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(B);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ot.intersectsSprite(v)){W&&Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(J);const ve=H.update(v),be=v.material;be.visible&&p.push(v,ve,be,G,Re.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ot.intersectsObject(v))){const ve=H.update(v),be=v.material;if(W&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Re.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(v.matrixWorld).applyMatrix4(J)),Array.isArray(be)){const Me=ve.groups;for(let Ue=0,Be=Me.length;Ue<Be;Ue++){const Le=Me[Ue],Je=be[Le.materialIndex];Je&&Je.visible&&p.push(v,ve,Je,G,Re.z,Le)}}else be.visible&&p.push(v,ve,be,G,Re.z,null)}}const ae=v.children;for(let ve=0,be=ae.length;ve<be;ve++)bn(ae[ve],B,G,W)}function Bt(v,B,G,W){const z=v.opaque,ae=v.transmissive,ve=v.transparent;h.setupLightsView(G),He===!0&&le.setGlobalState(S.clippingPlanes,G),W&&Ee.viewport(w.copy(W)),z.length>0&&Ln(z,B,G),ae.length>0&&Ln(ae,B,G),ve.length>0&&Ln(ve,B,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function gn(v,B,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[W.id]===void 0&&(h.state.transmissionRenderTarget[W.id]=new Ci(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Ts:In,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ae=h.state.transmissionRenderTarget[W.id],ve=W.viewport||w;ae.setSize(ve.z*S.transmissionResolutionScale,ve.w*S.transmissionResolutionScale);const be=S.getRenderTarget(),Me=S.getActiveCubeFace(),Ue=S.getActiveMipmapLevel();S.setRenderTarget(ae),S.getClearColor(N),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),We&&Ce.render(G);const Be=S.toneMapping;S.toneMapping=Cn;const Le=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),h.setupLightsView(W),He===!0&&le.setGlobalState(S.clippingPlanes,W),Ln(v,G,W),Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let st=0,Mt=B.length;st<Mt;st++){const xt=B[st],ct=xt.object,Fe=xt.geometry,lt=xt.material,it=xt.group;if(lt.side===Pt&&ct.layers.test(W.layers)){const zt=lt.side;lt.side=nn,lt.needsUpdate=!0,xr(ct,G,W,Fe,lt,it),lt.side=zt,lt.needsUpdate=!0,Je=!0}}Je===!0&&(Oe.updateMultisampleRenderTarget(ae),Oe.updateRenderTargetMipmap(ae))}S.setRenderTarget(be,Me,Ue),S.setClearColor(N,V),Le!==void 0&&(W.viewport=Le),S.toneMapping=Be}function Ln(v,B,G){const W=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ae=v.length;z<ae;z++){const ve=v[z],be=ve.object,Me=ve.geometry,Ue=ve.group;let Be=ve.material;Be.allowOverride===!0&&W!==null&&(Be=W),be.layers.test(G.layers)&&xr(be,B,G,Me,Be,Ue)}}function xr(v,B,G,W,z,ae){v.onBeforeRender(S,B,G,W,z,ae),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(S,B,G,W,v,ae),z.transparent===!0&&z.side===Pt&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,S.renderBufferDirect(G,B,W,z,v,ae),z.side=oi,z.needsUpdate=!0,S.renderBufferDirect(G,B,W,z,v,ae),z.side=Pt):S.renderBufferDirect(G,B,W,z,v,ae),v.onAfterRender(S,B,G,W,z,ae)}function Xn(v,B,G){B.isScene!==!0&&(B=Se);const W=he.get(v),z=h.state.lights,ae=h.state.shadowsArray,ve=z.state.version,be=$.getParameters(v,z.state,ae,B,G),Me=$.getProgramCacheKey(be);let Ue=W.programs;W.environment=v.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(v.isMeshStandardMaterial?tt:dt).get(v.envMap||W.environment),W.envMapRotation=W.environment!==null&&v.envMap===null?B.environmentRotation:v.envMapRotation,Ue===void 0&&(v.addEventListener("dispose",j),Ue=new Map,W.programs=Ue);let Be=Ue.get(Me);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ve)return yr(v,be),Be}else be.uniforms=$.getUniforms(v),v.onBeforeCompile(be,S),Be=$.acquireProgram(be,Me),Ue.set(Me,Be),W.uniforms=be.uniforms;const Le=W.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Le.clippingPlanes=le.uniform),yr(v,be),W.needsLights=Zt(v),W.lightsStateVersion=ve,W.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Un(v){if(v.uniformsList===null){const B=v.currentProgram.getUniforms();v.uniformsList=Ma.seqWithValue(B.seq,v.uniforms)}return v.uniformsList}function yr(v,B){const G=he.get(v);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function Mr(v,B,G,W,z){B.isScene!==!0&&(B=Se),Oe.resetTextureUnits();const ae=B.fog,ve=W.isMeshStandardMaterial?B.environment:null,be=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ri,Me=(W.isMeshStandardMaterial?tt:dt).get(W.envMap||ve),Ue=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!G.morphAttributes.position,Je=!!G.morphAttributes.normal,st=!!G.morphAttributes.color;let Mt=Cn;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=S.toneMapping);const xt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ct=xt!==void 0?xt.length:0,Fe=he.get(W),lt=h.state.lights;if(He===!0&&(q===!0||v!==_)){const kt=v===_&&W.id===M;le.setState(W,v,kt)}let it=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==lt.state.version||Fe.outputColorSpace!==be||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Me||W.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==le.numPlanes||Fe.numIntersection!==le.numIntersection)||Fe.vertexAlphas!==Ue||Fe.vertexTangents!==Be||Fe.morphTargets!==Le||Fe.morphNormals!==Je||Fe.morphColors!==st||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==ct)&&(it=!0):(it=!0,Fe.__version=W.version);let zt=Fe.currentProgram;it===!0&&(zt=Xn(W,B,z));let Yn=!1,Te=!1,Tn=!1;const yt=zt.getUniforms(),Ht=Fe.uniforms;if(Ee.useProgram(zt.program)&&(Yn=!0,Te=!0,Tn=!0),W.id!==M&&(M=W.id,Te=!0),Yn||_!==v){Ee.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),yt.setValue(b,"projectionMatrix",v.projectionMatrix),yt.setValue(b,"viewMatrix",v.matrixWorldInverse);const Gt=yt.map.cameraPosition;Gt!==void 0&&Gt.setValue(b,fe.setFromMatrixPosition(v.matrixWorld)),De.logarithmicDepthBuffer&&yt.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),_!==v&&(_=v,Te=!0,Tn=!0)}if(z.isSkinnedMesh){yt.setOptional(b,z,"bindMatrix"),yt.setOptional(b,z,"bindMatrixInverse");const kt=z.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),yt.setValue(b,"boneTexture",kt.boneTexture,Oe))}z.isBatchedMesh&&(yt.setOptional(b,z,"batchingTexture"),yt.setValue(b,"batchingTexture",z._matricesTexture,Oe),yt.setOptional(b,z,"batchingIdTexture"),yt.setValue(b,"batchingIdTexture",z._indirectTexture,Oe),yt.setOptional(b,z,"batchingColorTexture"),z._colorsTexture!==null&&yt.setValue(b,"batchingColorTexture",z._colorsTexture,Oe));const Vt=G.morphAttributes;if((Vt.position!==void 0||Vt.normal!==void 0||Vt.color!==void 0)&&re.update(z,G,zt),(Te||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,yt.setValue(b,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ht.envMap.value=Me,Ht.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(Ht.envMapIntensity.value=B.environmentIntensity),Te&&(yt.setValue(b,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Li(Ht,Tn),ae&&W.fog===!0&&ee.refreshFogUniforms(Ht,ae),ee.refreshMaterialUniforms(Ht,W,k,K,h.state.transmissionRenderTarget[v.id]),Ma.upload(b,Un(Fe),Ht,Oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ma.upload(b,Un(Fe),Ht,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(b,"center",z.center),yt.setValue(b,"modelViewMatrix",z.modelViewMatrix),yt.setValue(b,"normalMatrix",z.normalMatrix),yt.setValue(b,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let Gt=0,qn=kt.length;Gt<qn;Gt++){const wn=kt[Gt];Ze.update(wn,zt),Ze.bind(wn,zt)}}return zt}function Li(v,B){v.ambientLightColor.needsUpdate=B,v.lightProbe.needsUpdate=B,v.directionalLights.needsUpdate=B,v.directionalLightShadows.needsUpdate=B,v.pointLights.needsUpdate=B,v.pointLightShadows.needsUpdate=B,v.spotLights.needsUpdate=B,v.spotLightShadows.needsUpdate=B,v.rectAreaLights.needsUpdate=B,v.hemisphereLights.needsUpdate=B}function Zt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,B,G){const W=he.get(v);W.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),he.get(v.texture).__webglTexture=B,he.get(v.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,B){const G=he.get(v);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0};const As=b.createFramebuffer();this.setRenderTarget=function(v,B=0,G=0){O=v,P=B,A=G;let W=!0,z=null,ae=!1,ve=!1;if(v){const Me=he.get(v);if(Me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(b.FRAMEBUFFER,null),W=!1;else if(Me.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(Me.__hasExternalTextures)Oe.rebindTextures(v,he.get(v.texture).__webglTexture,he.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Le=v.depthTexture;if(Me.__boundDepthTexture!==Le){if(Le!==null&&he.has(Le)&&(v.width!==Le.image.width||v.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}const Ue=v.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ve=!0);const Be=he.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Be[B])?z=Be[B][G]:z=Be[B],ae=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?z=he.get(v).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[G]:z=Be,w.copy(v.viewport),F.copy(v.scissor),L=v.scissorTest}else w.copy(ce).multiplyScalar(k).floor(),F.copy(ke).multiplyScalar(k).floor(),L=Ye;if(G!==0&&(z=As),Ee.bindFramebuffer(b.FRAMEBUFFER,z)&&W&&Ee.drawBuffers(v,z),Ee.viewport(w),Ee.scissor(F),Ee.setScissorTest(L),ae){const Me=he.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,G)}else if(ve){const Me=B;for(let Ue=0;Ue<v.textures.length;Ue++){const Be=he.get(v.textures[Ue]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ue,Be.__webglTexture,G,Me)}}else if(v!==null&&G!==0){const Me=he.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Me.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(v,B,G,W,z,ae,ve,be=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=he.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){Ee.bindFramebuffer(b.FRAMEBUFFER,Me);try{const Ue=v.textures[be],Be=Ue.format,Le=Ue.type;if(!De.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=v.width-W&&G>=0&&G<=v.height-z&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+be),b.readPixels(B,G,W,z,Pe.convert(Be),Pe.convert(Le),ae))}finally{const Ue=O!==null?he.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(v,B,G,W,z,ae,ve,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=he.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(B>=0&&B<=v.width-W&&G>=0&&G<=v.height-z){Ee.bindFramebuffer(b.FRAMEBUFFER,Me);const Ue=v.textures[be],Be=Ue.format,Le=Ue.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+be),b.readPixels(B,G,W,z,Pe.convert(Be),Pe.convert(Le),0);const st=O!==null?he.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(b.FRAMEBUFFER,st);const Mt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await wh(b,Mt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae),b.deleteBuffer(Je),b.deleteSync(Mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,B=null,G=0){const W=Math.pow(2,-G),z=Math.floor(v.image.width*W),ae=Math.floor(v.image.height*W),ve=B!==null?B.x:0,be=B!==null?B.y:0;Oe.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,G,0,0,ve,be,z,ae),Ee.unbindTexture()};const Rs=b.createFramebuffer(),te=b.createFramebuffer();this.copyTextureToTexture=function(v,B,G=null,W=null,z=0,ae=null){ae===null&&(z!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=z,z=0):ae=0);let ve,be,Me,Ue,Be,Le,Je,st,Mt;const xt=v.isCompressedTexture?v.mipmaps[ae]:v.image;if(G!==null)ve=G.max.x-G.min.x,be=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,Ue=G.min.x,Be=G.min.y,Le=G.isBox3?G.min.z:0;else{const Vt=Math.pow(2,-z);ve=Math.floor(xt.width*Vt),be=Math.floor(xt.height*Vt),v.isDataArrayTexture?Me=xt.depth:v.isData3DTexture?Me=Math.floor(xt.depth*Vt):Me=1,Ue=0,Be=0,Le=0}W!==null?(Je=W.x,st=W.y,Mt=W.z):(Je=0,st=0,Mt=0);const ct=Pe.convert(B.format),Fe=Pe.convert(B.type);let lt;B.isData3DTexture?(Oe.setTexture3D(B,0),lt=b.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Oe.setTexture2DArray(B,0),lt=b.TEXTURE_2D_ARRAY):(Oe.setTexture2D(B,0),lt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const it=b.getParameter(b.UNPACK_ROW_LENGTH),zt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Yn=b.getParameter(b.UNPACK_SKIP_PIXELS),Te=b.getParameter(b.UNPACK_SKIP_ROWS),Tn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,xt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ue),b.pixelStorei(b.UNPACK_SKIP_ROWS,Be),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Le);const yt=v.isDataArrayTexture||v.isData3DTexture,Ht=B.isDataArrayTexture||B.isData3DTexture;if(v.isDepthTexture){const Vt=he.get(v),kt=he.get(B),Gt=he.get(Vt.__renderTarget),qn=he.get(kt.__renderTarget);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let wn=0;wn<Me;wn++)yt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,he.get(v).__webglTexture,z,Le+wn),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,he.get(B).__webglTexture,ae,Mt+wn)),b.blitFramebuffer(Ue,Be,ve,be,Je,st,ve,be,b.DEPTH_BUFFER_BIT,b.NEAREST);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||he.has(v)){const Vt=he.get(v),kt=he.get(B);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,Rs),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,te);for(let Gt=0;Gt<Me;Gt++)yt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Vt.__webglTexture,z,Le+Gt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Vt.__webglTexture,z),Ht?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,kt.__webglTexture,ae,Mt+Gt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,kt.__webglTexture,ae),z!==0?b.blitFramebuffer(Ue,Be,ve,be,Je,st,ve,be,b.COLOR_BUFFER_BIT,b.NEAREST):Ht?b.copyTexSubImage3D(lt,ae,Je,st,Mt+Gt,Ue,Be,ve,be):b.copyTexSubImage2D(lt,ae,Je,st,Ue,Be,ve,be);Ee.bindFramebuffer(b.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ht?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(lt,ae,Je,st,Mt,ve,be,Me,ct,Fe,xt.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(lt,ae,Je,st,Mt,ve,be,Me,ct,xt.data):b.texSubImage3D(lt,ae,Je,st,Mt,ve,be,Me,ct,Fe,xt):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ae,Je,st,ve,be,ct,Fe,xt.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ae,Je,st,xt.width,xt.height,ct,xt.data):b.texSubImage2D(b.TEXTURE_2D,ae,Je,st,ve,be,ct,Fe,xt);b.pixelStorei(b.UNPACK_ROW_LENGTH,it),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,zt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Te),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Tn),ae===0&&B.generateMipmaps&&b.generateMipmap(lt),Ee.unbindTexture()},this.initRenderTarget=function(v){he.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),Ee.unbindTexture()},this.resetState=function(){P=0,A=0,O=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function Oa(){return{uFogNear:{value:1500},uFogFar:{value:7e3},uFogColor:{value:new ze(16/255,48/255,64/255)},uFogEnabled:{value:1}}}function n0(i){const e=Math.max(0,Math.min(15,i.color.r))*17,t=Math.max(0,Math.min(15,i.color.g))*17,n=Math.max(0,Math.min(15,i.color.b))*17;return e<<16|t<<8|n}function i0(i){const e=[],t=[];for(const s of i){if(s.points.length<3)continue;const o=new ze(n0(s)),a=s.points[0];for(let c=1;c<s.points.length-1;c+=1){const l=s.points[c],u=s.points[c+1];e.push(a.x,a.y,a.z,l.x,l.y,l.z,u.x,u.y,u.z);for(let d=0;d<3;d+=1)t.push(o.r,o.g,o.b)}}const n=new vt;n.setAttribute("position",new Xe(e,3)),n.setAttribute("color",new Xe(t,3)),n.computeVertexNormals();const r=new Ii({side:Pt,vertexColors:!0,metalness:0,roughness:1,transparent:!0,opacity:.9});return new _t(n,r)}function r0(i){const e=new Qt;e.name="bg-mesh";const t=new Map;i.forEach((r,s)=>{const o=t.get(r.roomIndex)??[];o.push({tri:r,triId:s}),t.set(r.roomIndex,o)});const n=.6180339887;for(const[r,s]of t){const o=[],a=[];for(const{tri:m,triId:g}of s)o.push(m.a.x,m.a.y,m.a.z,m.b.x,m.b.y,m.b.z,m.c.x,m.c.y,m.c.z),a.push(g);const c=new vt;c.setAttribute("position",new Xe(o,3)),c.computeVertexNormals();const l=r*n%1,u=new ze().setHSL(l,.85,.55),d=new Ii({color:u,side:Pt,metalness:0,roughness:.9}),f=new _t(c,d);f.name=`bg-room-${r}`,f.userData.triangleIds=a,e.add(f)}return e}const Aa=`
  #include <common>
  #include <normal_pars_vertex>
  #include <shadowmap_pars_vertex>
  attribute float aMaterialId;
  attribute vec2  aTexelUV;
  attribute vec3  aVertexColor;
  attribute float aLayerAlpha;
  varying   float vMaterialId;
  varying   vec2  vTexelUV;
  varying   vec3  vVertexColor;
  varying   float vLayerAlpha;
  varying   float vFogDepth;
  varying   float vWorldY;

  void main() {
    vec3 transformed = vec3(position);
    #include <beginnormal_vertex>
    #include <defaultnormal_vertex>

    vMaterialId  = aMaterialId;
    vTexelUV     = aTexelUV;
    vVertexColor = aVertexColor;
    vLayerAlpha  = aLayerAlpha;

    vec4 worldPos   = modelMatrix * vec4(transformed, 1.0);
    vWorldY         = worldPos.y;

    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <worldpos_vertex>
    #include <shadowmap_vertex>

    // Eye-space depth (positive = in front of camera).
    vFogDepth = -mvPosition.z;
  }
`,Ra=`
  precision highp float;
  #include <common>
  #include <packing>
  #include <bsdfs>
  #include <lights_pars_begin>
  #include <shadowmap_pars_fragment>
  #include <shadowmask_pars_fragment>

  uniform sampler2D uAtlas;
  // 1-D lookup texture: each texel i stores (x, y, w, h) in atlas pixels
  // for the material whose ID equals i.
  uniform sampler2D uLookup;
  uniform vec2  uAtlasSize;
  uniform float uLookupWidth;
  uniform float uAlphaDiscardThreshold;
  uniform float uUseTextureAlpha;
  uniform float uDecalOpacityScale;
  uniform float uDecalForceOpaque;

  // Fog — controlled directly so the G-key toggle is instant and reliable.
  uniform float uFogNear;
  uniform float uFogFar;
  uniform vec3  uFogColor;
  uniform float uFogEnabled; // 1.0 = on, 0.0 = off

  varying float vMaterialId;
  varying vec2  vTexelUV;
  varying vec3  vVertexColor;
  varying float vLayerAlpha;
  varying float vFogDepth;
  varying float vWorldY;

  void main() {
    float lu   = (vMaterialId + 0.5) / uLookupWidth;
    vec4  info = texture2D(uLookup, vec2(lu, 0.5));

    float itemX = info.r;
    float itemY = info.g;
    float itemW = info.b;
    float itemH = info.a;

    vec3 shade = clamp(vVertexColor / 255.0, 0.0, 1.0);

    if (itemW <= 0.0 || itemH <= 0.0) {
      // Magenta checkerboard for unmapped materials.
      float chk = mod(floor(vTexelUV.x / 256.0) + floor(vTexelUV.y / 256.0), 2.0);
      gl_FragColor = vec4(chk, 0.0, chk, 1.0);
      float chkDist   = clamp((vFogDepth - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
      float chkHeight = clamp((vWorldY - 80.0) / (320.0 - 80.0), 0.0, 1.0) * 0.7;
      float chkFog    = clamp(max(chkDist, chkHeight), 0.0, 1.0) * uFogEnabled;
      gl_FragColor.rgb = mix(gl_FragColor.rgb, uFogColor, chkFog);
      return;
    }

    // vTexelUV is in texel units (raw 10.5-fp / 32).  mod() wraps at texture
    // boundaries; GLSL mod() handles negatives: mod(-x,w) = w - mod(x,w) >= 0.
    float u = mod(vTexelUV.x, itemW) / itemW;
    float v = mod(vTexelUV.y, itemH) / itemH;

    vec2 atlasUV = vec2(
      (itemX + u * itemW) / uAtlasSize.x,
      (itemY + v * itemH) / uAtlasSize.y
    );

    vec4 tex = texture2D(uAtlas, atlasUV);

    // 1-bit alpha: discard fully transparent texels (fences, foliage, etc.)
    if (tex.a < uAlphaDiscardThreshold) discard;

    // N64 SHADE * TEXEL0 combine: vertex shade modulates texture colour.
    vec3 rgb = shade * tex.rgb;

    // Receive directional-light shadows in remaster mode.
    float shadowMask = getShadowMask();
    rgb *= mix(0.55, 1.0, shadowMask);

    // Distance fog — eye-space depth linear ramp.
    float distFog = clamp((vFogDepth - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);

    // Height fog — cliff tops and elevated geometry pick up extra haze even
    // when the camera is nearby.  Map Y range: -239 (floor) → 360 (cliff tops).
    // Ramps from 0 at Y=80 (above runway floor) to 0.7 at Y=320 (cliff summits).
    float heightFog = clamp((vWorldY - 80.0) / (320.0 - 80.0), 0.0, 1.0) * 0.7;

    // Take the stronger of the two, then scale by enabled flag.
    float fogFactor = clamp(max(distFog, heightFog), 0.0, 1.0) * uFogEnabled;
    rgb = mix(rgb, uFogColor, fogFactor);

    float outAlpha = (uUseTextureAlpha > 0.5) ? tex.a : 1.0;
    outAlpha *= clamp(vLayerAlpha, 0.0, 1.0);
    if (uDecalForceOpaque > 0.5) {
      outAlpha = 1.0;
    } else {
      outAlpha *= clamp(uDecalOpacityScale, 0.0, 1.0);
    }
    gl_FragColor = vec4(rgb, outAlpha);
  }
`,pa=2500;function s0(i,e,t=Oa()){const n=new Float32Array(pa*4);for(const[s,o]of Object.entries(i.items)){const a=parseInt(s,10);a>=0&&a<pa&&(n[a*4+0]=o.x,n[a*4+1]=o.y,n[a*4+2]=o.width,n[a*4+3]=o.height)}const r=new Da(n,pa,1,Jt,mn);return r.magFilter=Et,r.minFilter=Et,r.needsUpdate=!0,e.flipY=!1,e.wrapS=on,e.wrapT=on,e.magFilter=Et,e.minFilter=Et,e.needsUpdate=!0,new en({uniforms:{...me.lights,uAtlas:{value:e},uLookup:{value:r},uAtlasSize:{value:new $e(i.width,i.height)},uLookupWidth:{value:pa},uAlphaDiscardThreshold:{value:0},uUseTextureAlpha:{value:0},uDecalOpacityScale:{value:1},uDecalForceOpaque:{value:0},uFogNear:t.uFogNear,uFogFar:t.uFogFar,uFogColor:t.uFogColor,uFogEnabled:t.uFogEnabled},vertexShader:Aa,fragmentShader:Ra,side:Pt,lights:!0})}function a0(i,e,t,n=new Set,r=Oa()){const o=new Float32Array(1e4);for(const[g,y]of Object.entries(e.items)){const p=parseInt(g,10);p>=0&&p<2500&&(o[p*4+0]=y.x,o[p*4+1]=y.y,o[p*4+2]=y.width,o[p*4+3]=y.height)}const a=new Da(o,2500,1,Jt,mn);a.magFilter=Et,a.minFilter=Et,a.needsUpdate=!0,t.flipY=!1,t.wrapS=on,t.wrapT=on,t.magFilter=Et,t.minFilter=Et,t.needsUpdate=!0;function c(g){return{...me.lights,uAtlas:{value:t},uLookup:{value:a},uAtlasSize:{value:new $e(e.width,e.height)},uLookupWidth:{value:2500},uAlphaDiscardThreshold:{value:.5},uUseTextureAlpha:{value:g?1:0},uDecalOpacityScale:{value:1},uDecalForceOpaque:{value:0},uFogNear:r.uFogNear,uFogFar:r.uFogFar,uFogColor:r.uFogColor,uFogEnabled:r.uFogEnabled}}const l=new en({uniforms:c(!1),vertexShader:Aa,fragmentShader:Ra,side:Pt,lights:!0}),u=new en({uniforms:c(!0),vertexShader:Aa,fragmentShader:Ra,side:Pt,lights:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),d=[];let f=null;i.forEach((g,y)=>{if(n.has(g.materialId))return;(!f||f.materialId!==g.materialId||f.isSecondary!==g.isSecondary)&&(f={materialId:g.materialId,isSecondary:g.isSecondary,pos:[],ids:[],uvs:[],cols:[],alphas:[],triIds:[]},d.push(f)),f.pos.push(g.a.x,g.a.y,g.a.z,g.b.x,g.b.y,g.b.z,g.c.x,g.c.y,g.c.z),f.ids.push(g.materialId,g.materialId,g.materialId),f.uvs.push(g.uvA.u/32,g.uvA.v/32,g.uvB.u/32,g.uvB.v/32,g.uvC.u/32,g.uvC.v/32),f.cols.push(g.colA.r,g.colA.g,g.colA.b,g.colB.r,g.colB.g,g.colB.b,g.colC.r,g.colC.g,g.colC.b);const p=g.layerAlpha??1;f.alphas.push(p,p,p),f.triIds.push(y)});const m=new Qt;return m.name="bg-atlas",d.forEach((g,y)=>{const p=new vt;p.setAttribute("position",new Xe(g.pos,3)),p.setAttribute("aMaterialId",new Xe(g.ids,1)),p.setAttribute("aTexelUV",new Xe(g.uvs,2)),p.setAttribute("aVertexColor",new Xe(g.cols,3)),p.setAttribute("aLayerAlpha",new Xe(g.alphas,1)),p.computeVertexNormals();const h=new _t(p,g.isSecondary?u:l);h.name=`bg-run-${y}-mat-${g.materialId}-${g.isSecondary?"secondary":"primary"}`,h.userData.triangleIds=g.triIds,h.renderOrder=y,m.add(h)}),m}function o0(i,e,t){const n=new Qt;n.name="bg-pbr-overrides";for(const r of t){let s=function(u,d,f){const m=[],g=[],y=[];for(const C of o.values()){const R=C[u];for(const S of R.pos)m.push(S);for(const S of R.uvs)g.push(S);for(const S of R.triIds)y.push(S)}if(m.length===0)return;const p=new vt;p.setAttribute("position",new Xe(m,3)),p.setAttribute("uv",new Xe(g,2)),p.setAttribute("uv2",new Xe(g,2)),p.computeVertexNormals();const h=new _t(p,d);h.name=`pbr-override-${r.name}-${u}`,h.userData.triangleIds=y,h.castShadow=!0,h.receiveShadow=!0,h.renderOrder=f,n.add(h)};if(r.materialIds.size===0)continue;const o=new Map;if(i.forEach((u,d)=>{if(!r.materialIds.has(u.materialId))return;const f=e.items[String(u.materialId)];if(!f)return;o.has(u.materialId)||o.set(u.materialId,{primary:{pos:[],uvs:[],triIds:[]},secondary:{pos:[],uvs:[],triIds:[]}});const m=o.get(u.materialId),g=u.isSecondary?m.secondary:m.primary,y=f.width,p=f.height;g.pos.push(u.a.x,u.a.y,u.a.z,u.b.x,u.b.y,u.b.z,u.c.x,u.c.y,u.c.z),g.uvs.push(u.uvA.u/32/y,u.uvA.v/32/p,u.uvB.u/32/y,u.uvB.v/32/p,u.uvC.u/32/y,u.uvC.v/32/p),g.triIds.push(d)}),o.size===0)continue;const{maps:a}=r,c=new Ii({side:Pt,map:a.albedo,normalMap:a.normal,roughnessMap:a.roughness,aoMap:a.ao,aoMapIntensity:1,metalnessMap:a.metallic,alphaMap:a.alpha,transparent:!!a.alpha,displacementMap:a.height,displacementScale:a.heightScale,metalness:a.metallic?1:0,roughness:a.roughness?1:.75,alphaTest:a.alpha?.5:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),l=c.clone();l.depthWrite=!1,l.polygonOffsetFactor=-3,l.polygonOffsetUnits=-6,s("primary",c,0),s("secondary",l,1)}return n}let Io=null;function l0(){if(Io)return Io;const i=64,e=new Uint8Array(i*i*4);for(let n=0;n<i;n+=1)for(let r=0;r<i;r+=1){const s=(n*i+r)*4,o=(Math.floor(r/8)+Math.floor(n/8)&1)===0,c=r%8===0||n%8===0?112:o?172:148;e[s+0]=c,e[s+1]=c,e[s+2]=c,e[s+3]=255}const t=new Da(e,i,i,Jt);return t.colorSpace=Kt,t.wrapS=Mn,t.wrapT=Mn,t.magFilter=Sn,t.minFilter=si,t.needsUpdate=!0,Io=t,t}function c0(i,e,t){const n=new Qt;n.name="bg-remaster-placeholders";const r={pos:[],uvs:[],triIds:[]},s={pos:[],uvs:[],triIds:[]};i.forEach((u,d)=>{if(t.has(u.materialId))return;const f=e.items[String(u.materialId)];if(!f)return;const m=u.isSecondary?s:r,g=f.width,y=f.height;m.pos.push(u.a.x,u.a.y,u.a.z,u.b.x,u.b.y,u.b.z,u.c.x,u.c.y,u.c.z),m.uvs.push(u.uvA.u/32/g,u.uvA.v/32/y,u.uvB.u/32/g,u.uvB.v/32/y,u.uvC.u/32/g,u.uvC.v/32/y),m.triIds.push(d)});const o=l0(),a=new Ii({side:Pt,color:15790320,map:o,metalness:0,roughness:.92}),c=new Ii({side:Pt,color:15790320,map:o,depthWrite:!1,metalness:0,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});function l(u,d,f){if(u.pos.length===0)return;const m=new vt;m.setAttribute("position",new Xe(u.pos,3)),m.setAttribute("uv",new Xe(u.uvs,2)),m.setAttribute("uv2",new Xe(u.uvs,2)),m.computeVertexNormals();const g=new _t(m,d);g.name=f,g.userData.triangleIds=u.triIds,g.castShadow=!0,g.receiveShadow=!0,n.add(g)}return l(r,a,"bg-remaster-placeholder-primary"),l(s,c,"bg-remaster-placeholder-secondary"),n}function u0(i){const e=new Qt;e.name="pads";const t=new Fa(6,8,8),n=new Pn({color:55807});for(const r of i){const s=new _t(t,n);s.position.set(r.position.x,r.position.y,r.position.z),e.add(s);const o=new I(r.orientation.x,r.orientation.y,r.orientation.z).normalize().multiplyScalar(40),a=new Di({color:16776960}),c=new vt().setFromPoints([s.position.clone(),s.position.clone().add(o)]);e.add(new Es(c,a))}return e}function d0(i,e){const r=document.createElement("canvas");r.width=256,r.height=80;const s=r.getContext("2d");s.fillStyle="rgba(0,0,0,0.65)",s.beginPath(),s.roundRect(4,4,248,72,12),s.fill(),s.strokeStyle=e,s.lineWidth=3,s.beginPath(),s.roundRect(4,4,248,72,12),s.stroke(),s.fillStyle=e,s.font="bold 30px 'Courier New', monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256/2,80/2);const o=new bs(r),a=new Ia({map:o,depthTest:!1,sizeAttenuation:!0}),c=new Bl(a);return c.scale.set(160,50,1),c}function h0(i){const e=new Qt;e.name="room-labels";for(const t of i){const n=t.roomIndex*47%360/360,r=new ze().setHSL(n,.9,.7).getStyle(),s=d0(`Room ${t.roomIndex}`,r);s.position.set(t.center.x,t.center.y+80,t.center.z),e.add(s)}return e}function f0(i){const e=new Qt;e.name="portals";const t=new Di({color:16736095});for(const n of i){if(n.points.length<2)continue;const r=n.points.map(o=>new I(o.x,o.y,o.z));r.push(r[0].clone());const s=new vt().setFromPoints(r);e.add(new Es(s,t))}return e}const p0={Guard:{color:16724016,geo:"cylinder",h:80},StandardProp:{color:13943418,geo:"box",h:30},Door:{color:4491519,geo:"box",h:90},AmmoBox:{color:16746496,geo:"box",h:24},Collectable:{color:16772608,geo:"sphere",h:20},Tank:{color:4482628,geo:"box",h:60},SingleMonitor:{color:52428,geo:"box",h:40},Key:{color:16766720,geo:"sphere",h:16},Drone:{color:13387007,geo:"sphere",h:22},Glass:{color:8969727,geo:"box",h:60},GlassWindow:{color:8969727,geo:"box",h:60}},m0={color:11184810,geo:"box",h:30};function g0(i,e){const r=document.createElement("canvas");r.width=320,r.height=64;const s=r.getContext("2d");s.fillStyle="rgba(0,0,0,0.7)",s.beginPath(),s.roundRect(2,2,316,60,8),s.fill();const o=`#${e.toString(16).padStart(6,"0")}`;s.fillStyle=o,s.font="bold 22px 'Courier New', monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(i,320/2,64/2);const a=new bs(r),c=new Ia({map:a,depthTest:!1,sizeAttenuation:!0}),l=new Bl(c);return l.scale.set(140,28,1),l}function Wl(i){const e=[],t=[],n=[],r=[],s=[],o=[];for(const c of i.triangles)for(const l of[c.a,c.b,c.c])e.push(l.x,l.y,l.z),t.push(c.materialId),n.push(l.u/32,l.v/32),r.push(l.r,l.g,l.b),s.push(1),o.push(l.r/255,l.g/255,l.b/255);const a=new vt;return a.setAttribute("position",new Xe(e,3)),a.setAttribute("aMaterialId",new Xe(t,1)),a.setAttribute("aTexelUV",new Xe(n,2)),a.setAttribute("aVertexColor",new Xe(r,3)),a.setAttribute("aLayerAlpha",new Xe(s,1)),a.setAttribute("color",new Xe(o,3)),a.computeVertexNormals(),a}function _0(i,e,t,n={},r={}){const s=n.stageLevelScale??1,o=n.stanTiles??[],a=n.boundPads??[],c=n.fogUniforms??Oa();function l(_){const w={zmax:_.bbox.xmin,zmin:_.bbox.xmax,ymax:_.bbox.ymin,ymin:_.bbox.ymax,xmax:_.bbox.zmin,xmin:_.bbox.zmax},F=new I(_.up.x,_.up.y,_.up.z),L=new I(_.orientation.x,_.orientation.y,_.orientation.z),N=new I().crossVectors(F,L);N.lengthSq()<1e-10&&N.set(1,0,0),N.normalize();const V=new I(_.position.x,_.position.y,_.position.z),X=new I(0,0,0).addScaledVector(N,(w.zmax+w.zmin)*.5).addScaledVector(F,(w.ymax+w.ymin)*.5).addScaledVector(L,(w.xmax+w.xmin)*.5);return V.add(X)}function u(_){const w=new I(_.up.x,_.up.y,_.up.z),F=new I(_.orientation.x,_.orientation.y,_.orientation.z),L=new I().crossVectors(w,F);L.lengthSq()<1e-10&&L.set(1,0,0),L.normalize();const N=new I(_.position.x,_.position.y,_.position.z),V=_.bbox,X=new I(0,0,0).addScaledVector(L,(V.zmax+V.zmin)*.5).addScaledVector(w,(V.ymax+V.ymin)*.5).addScaledVector(F,(V.xmax+V.xmin)*.5);return N.add(X)}function d(_){const w=u(_),F=new I(_.up.x,_.up.y,_.up.z);return w.addScaledVector(F,(_.bbox.ymin-_.bbox.ymax)*.5)}function f(_,w,F,L,N){const V=(L.z-N.z)*(F.x-N.x)+(N.x-L.x)*(F.z-N.z);if(Math.abs(V)<1e-8)return null;const X=((L.z-N.z)*(_-N.x)+(N.x-L.x)*(w-N.z))/V,K=((N.z-F.z)*(_-N.x)+(F.x-N.x)*(w-N.z))/V,k=1-X-K;return X<-1e-6||K<-1e-6||k<-1e-6?null:X*F.y+K*L.y+k*N.y}function m(_,w,F){let L=null,N=Number.POSITIVE_INFINITY;for(const V of o){if(!V.points||V.points.length<3)continue;const X=V.points[0];for(let K=1;K+1<V.points.length;K+=1){const k=V.points[K],ne=V.points[K+1],Q=f(_,w,X,k,ne);if(Q===null)continue;const ce=Math.abs(Q-F);ce<N&&(N=ce,L=Q)}}return L}const g=new Qt;g.name="props";const y=[],p=new Map,h=new Map;let C=null;if(n.atlas&&n.atlasTexture){const w=new Float32Array(1e4);for(const[L,N]of Object.entries(n.atlas.items)){const V=parseInt(L,10);V>=0&&V<2500&&(w[V*4+0]=N.x,w[V*4+1]=N.y,w[V*4+2]=N.width,w[V*4+3]=N.height)}const F=new Da(w,2500,1,Jt,mn);F.magFilter=Et,F.minFilter=Et,F.needsUpdate=!0,n.atlasTexture.flipY=!1,n.atlasTexture.wrapS=on,n.atlasTexture.wrapT=on,n.atlasTexture.magFilter=Et,n.atlasTexture.minFilter=Et,n.atlasTexture.needsUpdate=!0,C=new en({uniforms:{...me.lights,uAtlas:{value:n.atlasTexture},uLookup:{value:F},uAtlasSize:{value:new $e(n.atlas.width,n.atlas.height)},uLookupWidth:{value:2500},uAlphaDiscardThreshold:{value:0},uUseTextureAlpha:{value:0},uFogNear:c.uFogNear,uFogFar:c.uFogFar,uFogColor:c.uFogColor,uFogEnabled:c.uFogEnabled},vertexShader:Aa,fragmentShader:Ra,side:Pt,lights:!0})}function R(_){if(!p.has(_)){const w=r[_];p.set(_,w?Wl(w):null)}return p.get(_)}function S(_){return C||(h.has(_)||h.set(_,new Pn({vertexColors:!0,side:Pt})),h.get(_))}const D=new Map,P=new Map;function A(_,w){if(!D.has(_)){let F;w.geo==="sphere"?F=new Fa(w.h*.55,8,8):w.geo==="cylinder"?F=new Hl(12,12,w.h,8):F=new _r(30,w.h,30),D.set(_,F)}return D.get(_)}function O(_){return P.has(_)||P.set(_,new Pn({color:_,transparent:!0,opacity:.82})),P.get(_)}function M(_,w){const F=new I(w.up.x,w.up.y,w.up.z),L=new I(w.orientation.x,w.orientation.y,w.orientation.z);F.lengthSq()<1e-10&&F.set(0,1,0),L.lengthSq()<1e-10&&L.set(0,0,1),F.normalize(),L.normalize();const N=new I().crossVectors(F,L);N.lengthSq()<1e-10&&N.set(1,0,0),N.normalize();const V=new I().crossVectors(L,N).normalize(),X=new pt().makeBasis(N,V,L);_.quaternion.setFromRotationMatrix(X)}for(const _ of i){const w=_.type==="Door",F=_.padSource==="boundPad"||w,L=F?void 0:e[_.padIndex],N=F?a[_.padIndex]:void 0;if(!L&&!N)continue;const V=p0[_.type]??m0,X=t[_.primaryIndex]??null,K=X?R(X):null;let k;if(K&&X){const ne=(_.renderScale??.1)*s;k=new _t(K,S(X)),k.scale.setScalar(ne)}else k=new _t(A(_.type,V),O(V.color));if(K&&X&&w&&N){const ne=r[X],Q=ne.sourceBounds??ne.bounds,ce=Q.max.x-Q.min.x,ke=Q.max.y-Q.min.y,Ye=Q.max.z-Q.min.z,ot=Math.abs(ce)>1e-6?ce:1,He=Math.abs(ke)>1e-6?ke:1,q=Math.abs(Ye)>1e-6?Ye:1,J={zmax:N.bbox.xmin,zmin:N.bbox.xmax,ymax:N.bbox.ymin,ymin:N.bbox.ymax,xmax:N.bbox.zmin,xmin:N.bbox.zmax};let fe=(J.ymin-J.ymax)/ot,Re=(J.xmin-J.xmax)/He,Se=(J.zmin-J.zmax)/q;(Math.abs(fe)<=1e-6||Math.abs(Re)<=1e-6||Math.abs(Se)<=1e-6)&&(fe=1,Re=1,Se=1);const We=new I(N.up.x,N.up.y,N.up.z),mt=new I(N.orientation.x,N.orientation.y,N.orientation.z),b=new I().crossVectors(We,mt);We.lengthSq()<1e-10&&We.set(0,1,0),mt.lengthSq()<1e-10&&mt.set(0,0,1),b.lengthSq()<1e-10&&b.set(1,0,0),We.normalize(),mt.normalize(),b.normalize();const je=We.clone().multiplyScalar(fe),xe=mt.clone().multiplyScalar(Re),De=b.clone().multiplyScalar(Se),Ee=(Q.min.x+Q.max.x)*.5,qe=(Q.min.y+Q.max.y)*.5,he=(Q.min.z+Q.max.z)*.5,dt=l(N).clone().addScaledVector(je,-Ee).addScaledVector(xe,-qe).addScaledVector(De,-he),tt=new pt().makeBasis(je,xe,De);tt.setPosition(dt),tt.decompose(k.position,k.quaternion,k.scale)}else{const ne=N??L;if(!ne)continue;if(N&&!L){const Q=d(N);k.position.copy(Q)}else k.position.set(ne.position.x,ne.position.y,ne.position.z)}if(!(w&&K&&X&&N)){const ne=N??L;ne&&M(k,ne)}if(K&&X&&!w){const ne=r[X],Q=ne.sourceBounds??ne.bounds,ce=(_.renderScale??.1)*s,ke=N??L;if(!ke)continue;const Ye=new I(ke.up.x,ke.up.y,ke.up.z);Ye.lengthSq()<1e-8&&Ye.set(0,1,0),Ye.normalize();const ot=_.objectFlags??0,He=!!L;if(ot&4)k.position.addScaledVector(Ye,-(Q.max.y*ce));else if(ot&8)k.position.addScaledVector(Ye,-(Q.min.y*ce));else if(He){const qe=m(L.position.x,L.position.z,L.position.y),he=-(Q.min.y*ce);if(k.position.x+=Ye.x*he,k.position.z+=Ye.z*he,qe!==null){let Oe=qe;if(L.position.y>qe){let dt=Number.NEGATIVE_INFINITY;for(const tt of y)L.position.x<tt.minX||L.position.x>tt.maxX||L.position.z<tt.minZ||L.position.z>tt.maxZ||tt.topY<qe||tt.topY>L.position.y+40||tt.topY>dt&&(dt=tt.topY);dt>Number.NEGATIVE_INFINITY&&(Oe=dt)}k.position.y=Oe+Ye.y*he+4*s}else k.position.y+=Ye.y*he}else{const qe=-(Q.min.y*ce);k.position.addScaledVector(Ye,qe)}const q=k.rotation.y,J=Math.cos(q),fe=Math.sin(q),Re=Q.min.x*ce,Se=Q.max.x*ce,We=Q.min.z*ce,mt=Q.max.z*ce,b=[{x:Re,z:We},{x:Re,z:mt},{x:Se,z:We},{x:Se,z:mt}];let je=Number.POSITIVE_INFINITY,xe=Number.NEGATIVE_INFINITY,De=Number.POSITIVE_INFINITY,Ee=Number.NEGATIVE_INFINITY;for(const qe of b){const he=qe.x*J-qe.z*fe+k.position.x,Oe=qe.x*fe+qe.z*J+k.position.z;he<je&&(je=he),he>xe&&(xe=he),Oe<De&&(De=Oe),Oe>Ee&&(Ee=Oe)}He&&y.push({minX:je,maxX:xe,minZ:De,maxZ:Ee,topY:k.position.y+Q.max.y*ce})}if(k.userData={propIndex:_.index,propType:_.type,propPadIndex:_.padIndex,propPrimaryIndex:_.primaryIndex,propObjectFlags:_.objectFlags??0,propModelName:X??`model_${_.primaryIndex}`,hasRealGeometry:K!==null},g.add(k),n.showLabels){const ne=X??_.type,Q=g0(ne,V.color),ce=N??L;if(!ce)continue;Q.position.set(ce.position.x,ce.position.y+V.h+24,ce.position.z),g.add(Q)}}return g}async function v0(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load stage data from ${i}: ${e.status}`);const t=await e.json();if(!t.stanTiles||!t.pads||!t.portals)throw new Error("Invalid stage JSON format");return t}async function Mi(i,e){try{const t=await i.loadAsync(e);return t.wrapS=Mn,t.wrapT=Mn,t.colorSpace=Kt,t}catch{console.warn(`[overrides] texture not found: ${e}`);return}}function cr(i){return i&&(i.colorSpace=Ri),i}async function x0(i,e){let t;try{const o=await fetch(i);if(!o.ok)return[];t=await o.json()}catch{return[]}const n=new El,r=`${e}${t.basePath}`,s=[];for(const o of t.overrides){if(!o.materialIds||o.materialIds.length===0){console.warn(`[overrides] "${o.name}" has no materialIds — skipped`);continue}const a={heightScale:o.heightScale??0};o.albedo&&(a.albedo=await Mi(n,`${r}${o.albedo}`)),o.normal&&(a.normal=cr(await Mi(n,`${r}${o.normal}`))),o.roughness&&(a.roughness=cr(await Mi(n,`${r}${o.roughness}`))),o.ao&&(a.ao=cr(await Mi(n,`${r}${o.ao}`))),o.metallic&&(a.metallic=cr(await Mi(n,`${r}${o.metallic}`))),o.alpha&&(a.alpha=cr(await Mi(n,`${r}${o.alpha}`))),o.height&&(a.height=cr(await Mi(n,`${r}${o.height}`))),console.log(`[overrides] loaded "${o.name}" for ${o.materialIds.length} material(s):`,o.materialIds),s.push({name:o.name,materialIds:new Set(o.materialIds),maps:a})}return s}function y0(i){const e=new Set;for(const t of i)t.materialIds.forEach(n=>e.add(n));return e}class M0{constructor(e,t=1,n=!0,r,s){Lt(this,"group",new Qt);Lt(this,"eyeAnchor",new bt);Lt(this,"weaponAnchor",new bt);Lt(this,"bodyPivot",new bt);Lt(this,"clip");Lt(this,"clipDuration");Lt(this,"elapsed",0);Lt(this,"gunMaterial",new Pn({color:16777215,vertexColors:!0}));Lt(this,"gunAtlasMaterial",null);Lt(this,"bodyGraphRuntime",null);Lt(this,"headGraphRuntime",null);Lt(this,"lodLevel",0);Lt(this,"animPlaying",!1);Lt(this,"animCurrentFrame",0);Lt(this,"animStartFrame",0);Lt(this,"animEndFrame",-1);Lt(this,"animSpeed",.02);Lt(this,"jointIdToObject",new Map);var c,l,u,d,f,m,g,y,p,h,C,R,S;if(this.asset=e,!e.clips[0])throw new Error("Bond intro asset missing required clip");this.clip=e.clips[0],this.clipDuration=Math.max(.001,this.clip.durationSec);const o=e.atlas&&r?s0(e.atlas,r,s):null;if(this.gunAtlasMaterial=o,n&&((u=(l=(c=e.graph)==null?void 0:c.body)==null?void 0:l.nodes)!=null&&u.length)&&((m=(f=(d=e.graph)==null?void 0:d.body)==null?void 0:f.chunks)!=null&&m.length)){if(this.bodyGraphRuntime=Do(e.graph.body,o),this.bodyPivot.add(this.bodyGraphRuntime.root),(y=(g=e.graph.head)==null?void 0:g.nodes)!=null&&y.length&&((h=(p=e.graph.head)==null?void 0:p.chunks)!=null&&h.length)){this.headGraphRuntime=Do(e.graph.head,o);const D=e.graph.body.headPlaceholderNodeId,P=D!==null?this.bodyGraphRuntime.nodesById.get(D):void 0;P?P.object.add(this.headGraphRuntime.root):this.bodyPivot.add(this.headGraphRuntime.root)}ga(this.bodyGraphRuntime,this.lodLevel),this.buildJointIdMap()}else{const D=Sa(e.models.body,new Pn({color:16777215,vertexColors:!0}),!1,e.actor.bodyBoundingRadius>0?e.actor.bodyBoundingRadius:void 0);D.position.y=0,this.bodyPivot.add(D);const P=Sa(e.models.head,new Pn({color:16777215,vertexColors:!0}),!1,e.actor.headBoundingRadius>0?e.actor.headBoundingRadius:void 0);P.position.set(0,58,1.1),this.bodyPivot.add(P)}this.group.add(this.bodyPivot),this.group.scale.setScalar(t*(e.actor.scale||1));const a=T0(e);if(this.bodyGraphRuntime&&((S=(R=(C=e.graph)==null?void 0:C.body)==null?void 0:R.switchTable)!=null&&S.length)){const D=new Map;for(const _ of e.graph.body.switchTable)D.set(_.index,_.nodeId);const P=D.get(4),A=D.get(3),O=P!==void 0?this.bodyGraphRuntime.nodesById.get(P):void 0,M=A!==void 0?this.bodyGraphRuntime.nodesById.get(A):void 0;O?(O.object.add(this.eyeAnchor),this.eyeAnchor.position.set(0,8,1.5)):(this.eyeAnchor.position.copy(a.eye),this.group.add(this.eyeAnchor)),M?(M.object.add(this.weaponAnchor),this.weaponAnchor.position.set(0,0,0)):(this.weaponAnchor.position.copy(a.weapon),this.group.add(this.weaponAnchor))}else this.eyeAnchor.position.copy(a.eye),this.weaponAnchor.position.copy(a.weapon),this.group.add(this.eyeAnchor),this.group.add(this.weaponAnchor)}get introData(){return this.asset.intro}get fpWeaponConfig(){const e=this.asset.fpWeapon??{};return{statsName:e.statsName??"wppk",posX:e.posX??11,posY:e.posY??-20.8,posZ:e.posZ??-33.5,sway:e.sway??8.5}}setLodLevel(e){this.lodLevel=e,this.bodyGraphRuntime&&ga(this.bodyGraphRuntime,this.lodLevel)}resetClip(){this.elapsed=0}setWorldPosition(e){this.group.position.copy(e)}setFacingFromOrientation(e){const t=Math.atan2(e.x,e.z);this.group.rotation.y=t}tick(e){this.elapsed=Math.min(this.clipDuration,this.elapsed+e);const t=w0(this.clip,this.elapsed);return this.bodyPivot.rotation.y=t.yawRad,this.bodyPivot.rotation.z=t.lean,this.animPlaying&&this.tickAnimation(e),this.bodyGraphRuntime&&ga(this.bodyGraphRuntime,this.lodLevel),t}get normalizedTime(){return this.elapsed/this.clipDuration}buildJointIdMap(){var e;if(this.jointIdToObject.clear(),!(!this.bodyGraphRuntime||!((e=this.asset.graph)!=null&&e.body))){for(const t of this.asset.graph.body.nodes)if(t.jointId!==void 0&&t.jointId!==null){const n=this.bodyGraphRuntime.nodesById.get(t.id);n&&this.jointIdToObject.set(t.jointId,n.object)}}}playAnimation(e,t,n){const r=this.asset.animation;!r||this.jointIdToObject.size===0||(this.animPlaying=!0,this.animStartFrame=e,this.animEndFrame=t<0?r.frameCount-1:t,this.animSpeed=n,this.animCurrentFrame=e,this.applyAnimationFrame(e))}stopAnimation(){this.animPlaying=!1}playIntroAnimation(){const e=this.asset.animation;e&&this.playAnimation(e.startFrame,e.endFrame,e.speed)}get hasAnimation(){return!!this.asset.animation&&this.jointIdToObject.size>0}tickAnimation(e){!this.asset.animation||!this.animPlaying||(this.animCurrentFrame+=this.animSpeed*15*e,this.animCurrentFrame>=this.animEndFrame&&(this.animCurrentFrame=this.animEndFrame,this.animPlaying=!1),this.applyAnimationFrame(this.animCurrentFrame))}applyAnimationFrame(e){const t=this.asset.animation;if(!t)return;const n=t.frameCount-1,r=Math.max(0,Math.min(e,n)),s=Math.floor(r),o=Math.min(s+1,n),a=r-s,c=t.frames;if(!(!c[s]||!c[o]))for(const[l,u]of this.jointIdToObject){if(l<0||l>=t.jointCount)continue;const d=c[s][l],f=c[o][l];if(!d||!f)continue;const m=d.rx+(f.rx-d.rx)*a,g=d.ry+(f.ry-d.ry)*a,y=d.rz+(f.rz-d.rz)*a;u.rotation.set(m,g,y,"XYZ")}}createIntroGunMesh(){const e=this.asset.models.gunIntro??this.asset.models.gun,t=this.asset.models.gunIntroSourceScale??this.asset.models.gunSourceScale??1;if(!e)throw new Error("Bond intro asset missing intro gun geometry");return this.createGunMeshFromGeo(e,t)}createFpGunMesh(){var s,o,a;const e=(s=this.asset.graph)==null?void 0:s.gunFp;if(!((o=e==null?void 0:e.nodes)!=null&&o.length)||!((a=e==null?void 0:e.chunks)!=null&&a.length))throw new Error("Bond intro asset missing strict first-person gun graph");const t=Do(e,this.gunAtlasMaterial);ga(t,0),t.root.scale.multiplyScalar(.10000001),t.root.traverse(c=>{if(!(c instanceof _t))return;c.frustumCulled=!1,c.renderOrder=1e4;const l=Array.isArray(c.material)?c.material:[c.material];for(const u of l)u.depthTest=!0,u.depthWrite=!0,u.transparent=!0,u.opacity=1,u.side=Pt,u.needsUpdate=!0});let n=0,r=0;return t.root.traverse(c=>{if(!(c instanceof _t))return;n+=1;const l=c.geometry.getAttribute("position");l&&(r+=l.count)}),console.log("[fpGun:create]",{graphNodes:e.nodes.length,graphChunks:e.chunks.length,meshCount:n,vertexCount:r,scale:t.root.scale.toArray()}),t.root}createGunMeshFromGeo(e,t,n){if(this.gunAtlasMaterial){const s=Wl(e),o=new _t(s,this.gunAtlasMaterial);let a=t;if(n&&n>0){const c=S0(e.sourceBounds??e.bounds);c>1e-4&&(a*=n/c)}return o.scale.setScalar(a),o}const r=Sa(e,this.gunMaterial,!0,n);return r.scale.setScalar(t),r}}function S0(i){if(!i)return 0;const e=[{x:i.min.x,y:i.min.y,z:i.min.z},{x:i.min.x,y:i.min.y,z:i.max.z},{x:i.min.x,y:i.max.y,z:i.min.z},{x:i.min.x,y:i.max.y,z:i.max.z},{x:i.max.x,y:i.min.y,z:i.min.z},{x:i.max.x,y:i.min.y,z:i.max.z},{x:i.max.x,y:i.max.y,z:i.min.z},{x:i.max.x,y:i.max.y,z:i.max.z}];let t=0;for(const n of e){const r=Math.sqrt(n.x*n.x+n.y*n.y+n.z*n.z);r>t&&(t=r)}return t}function Do(i,e,t){var o;const n=new Qt,r=new Map,s=e?null:E0();for(const a of i.nodes){const c=new bt;a.origin&&c.position.set(a.origin.x,a.origin.y,a.origin.z),r.set(a.id,{def:a,object:c})}for(const a of r.values())a.def.parentId===null?n.add(a.object):(o=r.get(a.def.parentId))==null||o.object.add(a.object);for(const a of i.chunks){const c={triangles:a.triangles,materialIds:a.materialIds,bounds:a.bounds,sourceBounds:i.sourceBounds};let l;if(e){const d=Wl(c);l=new _t(d,e)}else{const d=new Pn({color:b0(a.nodeId),map:s,side:Pt});l=Sa(c,d,!1)}const u=r.get(a.nodeId);u&&u.object.add(l)}return{root:n,nodesById:r,rootNodeId:i.rootNodeId}}let ma=null;function E0(){if(ma)return ma;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");if(!e){const r=new bs(i);return r.wrapS=Mn,r.wrapT=Mn,r.repeat.set(2,2),ma=r,r}const t=16;for(let r=0;r<i.height;r+=t)for(let s=0;s<i.width;s+=t){const o=(s/t+r/t)%2===0;e.fillStyle=o?"#d9d9d9":"#3f3f3f",e.fillRect(s,r,t,t)}e.strokeStyle="#202020",e.lineWidth=2,e.strokeRect(0,0,i.width,i.height);const n=new bs(i);return n.wrapS=Mn,n.wrapT=Mn,n.repeat.set(2,2),n.needsUpdate=!0,ma=n,n}function b0(i){const e=(i*.173%1+1)%1;return new ze().setHSL(e,.55,.62)}function ga(i,e=0){const t=new Set,n=new Map,r=(s,o=!0)=>{let a=s,c=0;for(;a!=null&&c<1e5&&(c+=1,!t.has(a));){const l=i.nodesById.get(a);if(!l)break;if(l.def.opcode===8){const d=l.def.parentId??null,f=n.get(d)??0;if(n.set(d,f+1),e>=0&&f!==e){a=l.def.nextId;continue}}t.add(a);let u=l.def.childId;l.def.opcode===18?u=l.def.controlsNodeId??l.def.childId:l.def.opcode===8&&(u=l.def.affectsNodeId??l.def.childId),u!=null&&r(u,l.def.opcode!==18),l.def.opcode===9&&(l.def.leftNodeId!==null&&l.def.leftNodeId!==void 0&&r(l.def.leftNodeId,!0),l.def.rightNodeId!==null&&l.def.rightNodeId!==void 0&&r(l.def.rightNodeId,!0)),a=o?l.def.nextId:null}};r(i.rootNodeId);for(const[s,o]of i.nodesById.entries())o.object.visible=t.has(s)}function T0(i){var o;const e=new I(0,i.rig.eyeHeight,1.6),t=new I(i.rig.shoulderWidth*.58,i.rig.eyeHeight-7,i.rig.handForward),n=((o=i.switches)==null?void 0:o.body)??[],r=n.find(a=>a.index===4),s=n.find(a=>a.index===3);return r&&e.set(r.accumulatedOrigin.x,r.accumulatedOrigin.y+8,r.accumulatedOrigin.z+1.5),s&&t.set(s.accumulatedOrigin.x,s.accumulatedOrigin.y,s.accumulatedOrigin.z),{eye:e,weapon:t}}function w0(i,e){if(i.keyframes.length===0)return{yawRad:0,weaponRaise:1,lean:0};if(i.keyframes.length===1){const r=i.keyframes[0];return{yawRad:St.degToRad(r.yawDeg),weaponRaise:r.weaponRaise,lean:r.lean}}const t=St.clamp(e,0,i.durationSec);for(let r=0;r<i.keyframes.length-1;r+=1){const s=i.keyframes[r],o=i.keyframes[r+1];if(t>o.t)continue;const a=Math.max(1e-4,o.t-s.t),c=St.clamp((t-s.t)/a,0,1),l=St.lerp(s.yawDeg,o.yawDeg,c);return{yawRad:St.degToRad(l),weaponRaise:St.lerp(s.weaponRaise,o.weaponRaise,c),lean:St.lerp(s.lean,o.lean,c)}}const n=i.keyframes[i.keyframes.length-1];return{yawRad:St.degToRad(n.yawDeg),weaponRaise:n.weaponRaise,lean:n.lean}}function Sa(i,e,t=!1,n){if(!i.triangles||i.triangles.length===0)throw new Error("Prop model geometry has no triangles");const r=[],s=[],o=[];for(const c of i.triangles)for(const l of[c.a,c.b,c.c])r.push(l.x,l.y,l.z),s.push(l.r/255,l.g/255,l.b/255),o.push(l.u/32,l.v/32);const a=new vt;return a.setAttribute("position",new Xe(r,3)),a.setAttribute("color",new Xe(s,3)),a.setAttribute("uv",new Xe(o,2)),t&&i.sourceBounds&&A0(a,i),n&&n>0&&R0(a,n),a.computeVertexNormals(),new _t(a,e)}function A0(i,e){if(!e.sourceBounds)return;i.computeBoundingBox();const t=i.boundingBox,n=i.getAttribute("position");if(!t||!n)return;const r=e.sourceBounds,s=(o,a,c,l,u)=>{const d=c-a;if(Math.abs(d)<1e-8)return l;const f=(o-a)/d;return l+(u-l)*f};for(let o=0;o<n.count;o+=1)n.setXYZ(o,s(n.getX(o),t.min.x,t.max.x,r.min.x,r.max.x),s(n.getY(o),t.min.y,t.max.y,r.min.y,r.max.y),s(n.getZ(o),t.min.z,t.max.z,r.min.z,r.max.z));n.needsUpdate=!0}function R0(i,e){const t=i.getAttribute("position");if(!t)return;const n=[];for(let a=0;a<t.count;a+=1){const c=t.getX(a),l=t.getY(a),u=t.getZ(a),d=c*c+l*l+u*u;n.push(d)}if(n.length===0)return;n.sort((a,c)=>a-c);const r=Math.max(0,Math.min(n.length-1,Math.floor(n.length*.98))),s=Math.sqrt(n[r]);if(!(s>1e-4))return;const o=e/s;for(let a=0;a<t.count;a+=1)t.setXYZ(a,t.getX(a)*o,t.getY(a)*o,t.getZ(a)*o);t.needsUpdate=!0}async function C0(i,e=1,t={}){const n=await fetch(i);if(!n.ok)throw new Error(`Failed to load Bond intro asset: ${n.status}`);const r=await n.json();return new M0(r,e,!t.forceLegacy,t.atlasTexture,t.fogUniforms)}function P0(i){let e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const a of i)for(const c of[a.a,a.b,a.c])c.x<e&&(e=c.x),c.y<t&&(t=c.y),c.z<n&&(n=c.z),c.x>r&&(r=c.x),c.y>s&&(s=c.y),c.z>o&&(o=c.z);return{minX:e,maxX:r,minY:t,maxY:s,minZ:n,maxZ:o}}function Lo(i,e,t,n,r){const s=r*r,o=s*r;return .5*(2*e+(-i+t)*r+(2*i-5*e+4*t-n)*s+(-i+3*e-3*t+n)*o)}function I0(i){var t,n;const e=(n=(t=i.intro)==null?void 0:t.spawns.find(r=>r.isDemoPlayback===0))==null?void 0:n.pad;return e!==void 0?i.pads[e]??null:i.pads[0]??null}function D0(i){var e,t;return((t=(e=i.intro)==null?void 0:e.startWeapons.find(n=>n.isDemoPlayback===0))==null?void 0:t.itemRight)??5}function L0(i){return{5:"PP7",8:"KF7 Soviet",26:"D5K Deutsche"}[i]??`ITEM_${i}`}async function U0(){var hc,fc;const i=document.getElementById("app");if(!i)throw new Error("Missing #app element");const e=new ze(16/255,48/255,64/255),t=new ze(527380),n=new ze(14213870);let r=0,s=1,o="hazy";const a=Oa();function c(){if(o==="off"){l.fog=null,l.background=t.clone(),a.uFogEnabled.value=0;return}const T=v(r,0,2),Y=Math.min(1,T),ie=v(s,0,2),ue=Math.min(1,ie),et=e.clone().lerp(n,.82*Y);l.background=et.clone(),a.uFogEnabled.value=1,a.uFogColor.value.copy(et);let Ge=200,Ie=1200;o==="gameplay"?(Ge=500,Ie=2500):(Ge=200,Ie=1200);const Tt=St.lerp(120,40,ue),Rt=St.lerp(850,360,ue);if(Ge=St.lerp(Ge,Tt,Y),Ie=St.lerp(Ie,Rt,Y),T>1){const Dt=T-1;Ge=St.lerp(Ge,24,Dt*.8),Ie=St.lerp(Ie,240,Dt*.8)}l.fog=new Ol(et.clone(),Ge,Ie),a.uFogNear.value=Ge,a.uFogFar.value=Ie}const l=new Kh;c();const u=new fn(70,window.innerWidth/window.innerHeight,.1,2e4);u.position.set(850,420,-1250),u.rotation.order="YXZ",u.lookAt(850,0,-900);let d=u.rotation.y,f=u.rotation.x,m=!1,g=280,y=.0012;const p=new t0({antialias:!0});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.toneMapping=Cn,p.toneMappingExposure=1,p.shadowMap.enabled=!1,p.shadowMap.type=Au,i.appendChild(p.domElement);let h=!1;const C=document.getElementById("fly-overlay"),R=document.getElementById("fly-hint");function S(T){h=T,C&&(C.style.display=T?"none":"flex"),R&&(T?R.textContent="Esc — exit fly mode":m?R.textContent="Click canvas to lock pointer":R.textContent="")}S(!1),document.addEventListener("pointerlockchange",()=>{const T=document.pointerLockElement===p.domElement;m&&!T&&nc(!0),S(T&&m)}),document.addEventListener("mousemove",T=>{document.pointerLockElement===p.domElement&&(d-=T.movementX*y,f-=T.movementY*y,f=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,f)),u.rotation.order="YXZ",u.rotation.y=d,u.rotation.x=f)});const D=new hf(16777215,0);l.add(D);const P=new cf(14477567,3158080,.25);l.add(P);const A=new jc(16774368,.3);A.position.set(1700,2300,-900),A.castShadow=!1,A.shadow.mapSize.set(4096,4096),A.shadow.camera.near=50,A.shadow.camera.far=9e3,A.shadow.camera.left=-3e3,A.shadow.camera.right=3e3,A.shadow.camera.top=2500,A.shadow.camera.bottom=-2500,A.shadow.bias=-3e-4,A.shadow.normalBias=.55,A.target.position.set(900,0,-1400),l.add(A.target),l.add(A);const O=new jc(11585791,.1);O.position.set(-900,700,500),l.add(O);const M=new _f(A,180,16768426);M.visible=!1,l.add(M);const _=new vf(A.shadow.camera);_.visible=!1,l.add(_);const w=new gf(6e3,120,4146520,2106931);l.add(w),w.visible=!1;const L=await v0("/007/web/dist/data/stages/runway.json"),N=L.stageLevelScale??1,V=I0(L),X=D0(L),K=L0(X);let k="",ne=null;const Q=r0(L.roomTriangles);let ce=null;const Ye=await x0("/007/web/dist/data/stages/runway_overrides.json","/007/web/dist/"),ot=y0(Ye);let He=null,q=null,J=!0;const fe=P0(L.roomTriangles),Re=V?new I(V.position.x,V.position.y,V.position.z):new I((fe.minX+fe.maxX)*.5,fe.minY+8,(fe.minZ+fe.maxZ)*.5),Se=V?new I(V.orientation.x,V.orientation.y,V.orientation.z):new I(0,0,1),We=new URLSearchParams(window.location.search).get("bondGraph")==="0";let mt;try{const Y=await fetch("/007/web/dist/data/actors/bond_intro_atlas.json");if(Y.ok){const ue=`/007/web/dist/data/actors/${(await Y.json()).atlasImage}`;mt=await new El().loadAsync(ue)}}catch{}const b=await C0("/007/web/dist/data/actors/bond_intro.json",N,{forceLegacy:We,atlasTexture:mt,fogUniforms:a});b.setWorldPosition(Re),b.setFacingFromOrientation(Se),b.group.visible=!1,l.add(b.group);const je=b.createIntroGunMesh();je.position.set(0,0,.5),je.rotation.set(-.08,-Math.PI*.5,.02),je.visible=!1,b.weaponAnchor.add(je);const xe=b.createFpGunMesh();xe.visible=!1,u.add(xe);const De=new vt;De.setAttribute("position",new Yt(new Float32Array([0,0,0]),3));const Ee=new $u({size:0,colorWrite:!1,depthWrite:!1,depthTest:!1,transparent:!0}),qe=new Xc(De,Ee);qe.frustumCulled=!1,qe.renderOrder=9999,qe.onBeforeRender=T=>{T.clearDepth()},u.add(qe),l.add(u);let he=!1;function Oe(T){if(he!==T)if(he=T,T){l.attach(xe);const Y=new I(0,0,-1).applyQuaternion(u.quaternion).normalize();xe.position.copy(u.position).addScaledVector(Y,5),xe.quaternion.copy(u.quaternion),xe.visible=!0}else u.attach(xe),xe.visible=pe==="EnterFirstPerson"||pe==="FirstPerson",Ae(1/60)}const dt=b.fpWeaponConfig,tt=new I(dt.posX,dt.posY,dt.posZ);xe.rotation.set(0,Math.PI,0);let E=0,x=0,H=0,$=d,ee=f,Z=0,pe="StaticIntro",le=null,ge=0;const Ce=new I,re=new I,ye=5,Ne=((hc=b.introData)==null?void 0:hc.fixedCams)??[];if(Ne.length>0){const T=Ne[Math.floor(Math.random()*Ne.length)];Ce.set(T.x*N,T.y*N,T.z*N);const Y=Math.cos(T.vertRad)*Math.sin(T.horzRad),ie=Math.sin(T.vertRad),ue=-Math.cos(T.vertRad)*Math.cos(T.horzRad);re.copy(Ce).addScaledVector(new I(Y,ie,ue).normalize(),100)}else Ce.set(Re.x+80*N,Re.y+60*N,Re.z+120*N),re.copy(Re);u.position.copy(Ce),u.lookAt(re),d=u.rotation.y,f=u.rotation.x;const Pe=1,_e=.85,Ze=new I,U=new I,oe=new Vn,de=new Vn;let we=1;const se=(()=>{const T=document.createElement("div");return T.style.cssText=["position:fixed","inset:0","background:#000","pointer-events:none","z-index:50","opacity:1"].join(";"),document.body.appendChild(T),T})();function j(T){we=Math.max(0,Math.min(1,T)),se.style.opacity=String(we)}function Ae(T){if(he)return;const Y=Math.max(1e-4,T),ie=(d-$)/Y,ue=(f-ee)/Y;$=d,ee=f,x=St.damp(x,-1.75*ie*.01,12,Y),H=St.damp(H,-2*ue*.01,12,Y),Number.isFinite(x)||(x=0),Number.isFinite(H)||(H=0);const et=x*1.2,Ge=H*1.2,Ie=(1-E)*-8;xe.position.set(tt.x+et,tt.y+Ie+Ge,tt.z),xe.rotation.set(H*.25,Math.PI+-x*.2,0)}const Ve=new I,ht=new Vn;let rt=d,ln=f;const rn=52*N,cn=new I,qt=Re.clone();qt.y=Re.y;const bn=new I(Re.x,Re.y+rn,Re.z),Bt=document.createElement("div");if(Bt.style.position="fixed",Bt.style.left="14px",Bt.style.bottom="10px",Bt.style.padding="6px 10px",Bt.style.background="rgba(4,7,12,0.62)",Bt.style.color="#c6d8ea",Bt.style.fontFamily="monospace",Bt.style.fontSize="12px",Bt.style.border="1px solid rgba(141,178,214,0.32)",Bt.style.borderRadius="4px",Bt.style.zIndex="20",Bt.textContent=`start weapon: ${K} | levelscale: ${N.toFixed(6)}`,i.appendChild(Bt),L.atlas){k=`/007/web/dist/data/stages/${L.atlas.atlasImage}`;const T=await new El().loadAsync(k);ne=T,ce=a0(L.roomTriangles,L.atlas,T,new Set,a),Ye.length>0&&(He=o0(L.roomTriangles,L.atlas,Ye),l.add(He)),q=c0(L.roomTriangles,L.atlas,ot),l.add(q)}let gn=ce!==null,Ln=gn?ce:Q;l.add(Ln);const xr=[],Xn=T=>{T&&T.traverse(Y=>{Y instanceof _t&&Y.name.toLowerCase().includes("secondary")&&xr.push(Y)})};Xn(ce),Xn(He),Xn(q);let Un=!0;function yr(){const T=!!(He&&He.children.length>0),Y=!!(q&&q.children.length>0);return T||Y}function Mr(){return!!(yr()&&J&&gn&&Un)}function Li(){const T=Mr();ce&&(ce.visible=gn&&Un&&!T),Q.visible=!gn&&Un,He&&(He.visible=T),q&&(q.visible=T)}Li();const Zt={enabled:!0,opacity:1,forceOpaque:!1};function As(){const T=St.clamp(Zt.opacity,0,1);for(const Y of xr){Y.visible=Zt.enabled;const ie=Array.isArray(Y.material)?Y.material:[Y.material];for(const ue of ie){if(ue instanceof en){ue.uniforms.uDecalOpacityScale&&(ue.uniforms.uDecalOpacityScale.value=T),ue.uniforms.uDecalForceOpaque&&(ue.uniforms.uDecalForceOpaque.value=Zt.forceOpaque?1:0);continue}(ue instanceof Ii||ue instanceof Pn)&&(ue.transparent=!0,ue.opacity=Zt.forceOpaque?1:T,ue.needsUpdate=!0)}}}As();const Rs={midday:{exposure:1.18,hemiIntensity:.85,sunIntensity:2.55,fillIntensity:.42,ambientIntensity:.08,sunAzimuthDeg:-28,sunElevationDeg:52,sunDistance:3300,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:4096,shadowRadius:2800,shadowNear:50,shadowFar:9e3,shadowBias:-3e-4,shadowNormalBias:.55,flareEnabled:!0,flareIntensity:1,showHelpers:!1},dawn:{exposure:1.23,hemiIntensity:.95,sunIntensity:2.25,fillIntensity:.55,ambientIntensity:.12,sunAzimuthDeg:-70,sunElevationDeg:18,sunDistance:3500,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:4096,shadowRadius:3e3,shadowNear:30,shadowFar:9500,shadowBias:-35e-5,shadowNormalBias:.65,flareEnabled:!0,flareIntensity:.9,showHelpers:!1},overcast:{exposure:1.1,hemiIntensity:1.25,sunIntensity:1.15,fillIntensity:.7,ambientIntensity:.2,sunAzimuthDeg:-40,sunElevationDeg:40,sunDistance:3200,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:2048,shadowRadius:2800,shadowNear:50,shadowFar:9e3,shadowBias:-25e-5,shadowNormalBias:.45,flareEnabled:!0,flareIntensity:.55,showHelpers:!1}},te={...Rs.midday};function v(T,Y,ie){return Math.max(Y,Math.min(ie,T))}function B(){const T=St.degToRad(te.sunAzimuthDeg),Y=St.degToRad(te.sunElevationDeg),ie=Math.cos(Y)*te.sunDistance;A.target.position.set(te.targetX,te.targetY,te.targetZ),A.position.set(te.targetX+Math.cos(T)*ie,te.targetY+Math.sin(Y)*te.sunDistance,te.targetZ+Math.sin(T)*ie),A.target.updateMatrixWorld(),M.update()}function G(){const T=Number.isFinite(te.shadowMapSize)?te.shadowMapSize:2048;A.shadow.mapSize.set(T,T),A.shadow.map&&(A.shadow.map.dispose(),A.shadow.map=null),A.shadow.camera.near=Math.max(.1,te.shadowNear),A.shadow.camera.far=Math.max(te.shadowNear+1,te.shadowFar);const Y=Math.max(100,te.shadowRadius);A.shadow.camera.left=-Y,A.shadow.camera.right=Y,A.shadow.camera.top=Y,A.shadow.camera.bottom=-Y,A.shadow.bias=te.shadowBias,A.shadow.normalBias=te.shadowNormalBias,A.shadow.camera.updateProjectionMatrix(),A.shadow.needsUpdate=!0,_.update()}function W(){M.visible=te.showHelpers,_.visible=te.showHelpers}function z(T,Y=256){const ie=document.createElement("canvas");ie.width=Y,ie.height=Y;const ue=ie.getContext("2d");if(!ue){const Ie=new Ot;return Ie.needsUpdate=!0,Ie}const et=ue.createRadialGradient(Y/2,Y/2,0,Y/2,Y/2,Y/2);for(const Ie of T)et.addColorStop(Ie.offset,Ie.color);ue.fillStyle=et,ue.fillRect(0,0,Y,Y);const Ge=new bs(ie);return Ge.colorSpace=Kt,Ge.needsUpdate=!0,Ge}const ae=z([{offset:0,color:"rgba(255,250,210,1.0)"},{offset:.2,color:"rgba(255,232,170,0.9)"},{offset:.5,color:"rgba(255,200,120,0.45)"},{offset:1,color:"rgba(255,170,90,0.0)"}]),ve=z([{offset:0,color:"rgba(175,210,255,0.85)"},{offset:.55,color:"rgba(140,180,255,0.22)"},{offset:1,color:"rgba(140,180,255,0.0)"}]);function be(T,Y){const ie=new Ia({map:T,transparent:!0,depthWrite:!1,depthTest:!1,blending:Uo}),ue=new Bl(ie);return ue.scale.set(Y,Y,1),ue.renderOrder=999,ue}const Me=new Qt;Me.name="sun-flare",Me.visible=!1,l.add(Me);const Ue=be(ae,760),Be=be(ae,1600),Le=be(ve,360),Je=be(ve,230),st=be(ve,140);Me.add(Ue,Be,Le,Je,st);function Mt(T){Ue.material.opacity=.72*T,Be.material.opacity=.26*T,Le.material.opacity=.22*T,Je.material.opacity=.17*T,st.material.opacity=.12*T}function xt(){if(!Me.visible)return;const T=A.target.position,Y=A.position.clone().sub(T).normalize(),ie=u.position.clone().addScaledVector(Y,8500),ue=ie.clone().project(u),et=ue.z>-1&&ue.z<1,Ge=Math.abs(ue.x)<=1.35&&Math.abs(ue.y)<=1.35;if(!et||!Ge){Mt(0);return}const Ie=1-v(Math.max(Math.abs(ue.x),Math.abs(ue.y)),0,1),Tt=v(Ie*te.flareIntensity,0,2.5);Mt(Tt),Ue.position.copy(ie),Be.position.copy(ie);const Rt=(Dt,Fn)=>{const pi=new I(ue.x*(1-2*Fn),ue.y*(1-2*Fn),ue.z);pi.unproject(u),Dt.position.copy(pi)};Rt(Le,.25),Rt(Je,.55),Rt(st,.82)}function ct(T){l.traverse(Y=>{Y instanceof _t&&(Y.castShadow=T,Y.receiveShadow=T)})}function Fe(T){const Y=T==="remaster";p.toneMapping=Y?Cu:Cn,p.toneMappingExposure=Y?te.exposure:1,p.shadowMap.enabled=Y&&te.shadowEnabled,Y?(P.intensity=te.hemiIntensity,A.intensity=te.sunIntensity,O.intensity=te.fillIntensity,D.intensity=te.ambientIntensity,A.castShadow=te.shadowEnabled,O.castShadow=!1,ct(te.shadowEnabled),Me.visible=te.flareEnabled,B(),G()):(P.intensity=.2,A.intensity=.3,O.intensity=.1,D.intensity=0,A.castShadow=!1,O.castShadow=!1,ct(!1),Me.visible=!1),W()}function lt(){const T=Mr();Fe(T?"remaster":"n64"),jl()}const it=8e3,zt=8e6,Yn=12e4,Te={enabled:!0,intensity:12,speed:44,gravity:10,size:3,wind:9,windDirectionDeg:30,driftRandomness:1.15,sizeVariation:.45,hazeIntensity:1,hazeCloseness:1},Tn=fe.minX-180,yt=fe.maxX+180,Ht=fe.minZ-180,Vt=fe.maxZ+180,kt=Math.max(1,yt-Tn),Gt=Math.max(1,Vt-Ht),qn=fe.minY-50,wn=fe.maxY+600,Xl=Math.max(1,wn-qn);let ci=Math.min(Yn,zt),Sr=new Float32Array(ci*3),Er=new Float32Array(ci);function Yl(T,Y,ie){const ue=T*3;Y[ue+0]=St.lerp(Tn,yt,Math.random()),Y[ue+1]=qn+Math.random()*Xl,Y[ue+2]=St.lerp(Ht,Vt,Math.random()),ie[T]=Math.random()}for(let T=0;T<ci;T+=1)Yl(T,Sr,Er);const Zn=new vt;Zn.setAttribute("position",new Yt(Sr,3)),Zn.setAttribute("aSeed",new Yt(Er,1)),Zn.setDrawRange(0,Math.floor(it*Te.intensity));const An=new en({transparent:!0,depthWrite:!1,depthTest:!0,blending:wi,uniforms:{uTime:{value:0},uMinX:{value:Tn},uRangeX:{value:kt},uMinY:{value:qn},uRangeY:{value:Xl},uMinZ:{value:Ht},uRangeZ:{value:Gt},uFallSpeed:{value:Te.speed},uGravity:{value:Te.gravity},uWindX:{value:0},uWindZ:{value:0},uDriftRandomness:{value:Te.driftRandomness},uSize:{value:Te.size},uOpacity:{value:.85},uSizeVariation:{value:Te.sizeVariation}},vertexShader:`
      attribute float aSeed;
      uniform float uTime;
      uniform float uMinX;
      uniform float uRangeX;
      uniform float uMinY;
      uniform float uRangeY;
      uniform float uMinZ;
      uniform float uRangeZ;
      uniform float uFallSpeed;
      uniform float uGravity;
      uniform float uWindX;
      uniform float uWindZ;
      uniform float uDriftRandomness;
      uniform float uSize;
      uniform float uSizeVariation;
      varying float vAlpha;
      void main() {
        vec3 p = position;
        // Pseudo-physics: per-particle initial velocity + gravity acceleration.
        float speedScale = clamp(uFallSpeed / 40.0, 0.0, 4.0);
        float v0 = uFallSpeed * (0.18 + aSeed * 0.72);
        float g = uGravity * speedScale * (0.35 + aSeed * 0.65);
        float distY = (v0 * uTime) + (0.5 * g * uTime * uTime);
        p.y = uMinY + mod((p.y - uMinY) - distY, uRangeY);
        float drift = (0.25 + aSeed * 1.05) * uDriftRandomness;
        float wobbleX = sin((uTime * (0.35 + aSeed * 1.1)) + (aSeed * 51.3) + (position.z * 0.01));
        float wobbleZ = cos((uTime * (0.30 + aSeed * 0.9)) + (aSeed * 39.7) + (position.x * 0.01));
        p.x = uMinX + mod((p.x - uMinX) + (uTime * uWindX * drift) + wobbleX * (1.6 * uDriftRandomness), uRangeX);
        p.z = uMinZ + mod((p.z - uMinZ) + (uTime * uWindZ * drift) + wobbleZ * (1.3 * uDriftRandomness), uRangeZ);
        vec4 mvPos = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPos;
        float sizeVar = mix(1.0 - uSizeVariation, 1.0 + uSizeVariation, aSeed);
        gl_PointSize = (uSize * sizeVar) * (260.0 / max(1.0, -mvPos.z));
        vAlpha = 0.45 + aSeed * 0.55;
      }
    `,fragmentShader:`
      uniform float uOpacity;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - vec2(0.5);
        float d = length(c);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d) * vAlpha * uOpacity;
        gl_FragColor = vec4(0.95, 0.97, 1.0, a);
      }
    `}),ui=new Xc(Zn,An);ui.name="remaster-snow",ui.frustumCulled=!1,ui.renderOrder=950,l.add(ui);const rd=new Pi(new I(Tn-260,qn-120,Ht-260),new I(yt+260,wn+120,Vt+260)),ql=new La,Zl=new pt;let Cs=!1;function $l(){if(!Cs){ui.visible=!1;return}u.updateMatrixWorld(),Zl.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),ql.setFromProjectionMatrix(Zl),ui.visible=ql.intersectsBox(rd)}function jl(){Cs=Mr()&&Te.enabled&&Zn.drawRange.count>0,$l(),r=Cs?v(Te.hazeIntensity,0,2):0,s=Cs?v(Te.hazeCloseness,0,2):1,c()}function Ba(){const T=v(Te.intensity,0,1e3),Y=Math.min(zt,Math.floor(it*T));if(Y>ci){const et=Math.min(zt,Math.max(Y,Math.floor(ci*2))),Ge=new Float32Array(et*3),Ie=new Float32Array(et);Ge.set(Sr),Ie.set(Er);for(let Tt=ci;Tt<et;Tt+=1)Yl(Tt,Ge,Ie);Sr=Ge,Er=Ie,ci=et,Zn.setAttribute("position",new Yt(Sr,3)),Zn.setAttribute("aSeed",new Yt(Er,1))}Zn.setDrawRange(0,Y),An.uniforms.uFallSpeed.value=v(Te.speed,.05,220),An.uniforms.uGravity.value=v(Te.gravity,0,80),An.uniforms.uSize.value=v(Te.size,.5,12);const ie=v(Te.wind,0,60),ue=St.degToRad(Te.windDirectionDeg);An.uniforms.uWindX.value=Math.cos(ue)*ie*.14,An.uniforms.uWindZ.value=Math.sin(ue)*ie*.14,An.uniforms.uDriftRandomness.value=v(Te.driftRandomness,0,4),An.uniforms.uSizeVariation.value=v(Te.sizeVariation,0,.95),An.uniforms.uOpacity.value=.85,jl()}Ba(),lt();const Ui=i0(L.stanTiles);Ui.name="stan",Ui.visible=!1,l.add(Ui);const Ps=u0(L.pads);Ps.visible=!1,l.add(Ps);const Is=f0(L.portals);Is.visible=!1,l.add(Is);let $n=null;const za=document.getElementById("prop-type-panel"),Ha=document.getElementById("prop-type-list"),br=new Map,sd=new Set(["AmmoBox","Collectable","Guard","Hat"]);function Kl(){$n&&$n.traverse(T=>{var ie;if(!(T instanceof _t))return;const Y=(ie=T.userData)==null?void 0:ie.propType;Y&&(T.visible=br.get(Y)??!0)})}function ad(){if(!Ha||!L.propPlacements)return;const T=new Map;for(const ie of L.propPlacements)T.set(ie.type,(T.get(ie.type)??0)+1),br.has(ie.type)||br.set(ie.type,!sd.has(ie.type));const Y=[...T.keys()].sort((ie,ue)=>ie.localeCompare(ue));Ha.innerHTML="";for(const ie of Y){const ue=document.createElement("div");ue.className="prop-type-row";const et=document.createElement("label"),Ge=document.createElement("input");Ge.type="checkbox",Ge.checked=br.get(ie)??!1,Ge.addEventListener("change",()=>{br.set(ie,Ge.checked),Kl()});const Ie=document.createElement("span");Ie.textContent=ie,et.appendChild(Ge),et.appendChild(Ie);const Tt=document.createElement("span");Tt.className="prop-type-count",Tt.textContent=String(T.get(ie)??0),ue.appendChild(et),ue.appendChild(Tt),Ha.appendChild(ue)}}L.propPlacements&&L.propPlacements.length>0&&($n=_0(L.propPlacements,L.pads,L.propModelNames??[],{showLabels:!1,stageLevelScale:L.stageLevelScale??1,stanTiles:L.stanTiles??[],boundPads:L.boundPads??[],atlas:L.atlas,atlasTexture:ne??void 0,fogUniforms:a},L.propModels??{}),$n.visible=!1,l.add($n),ad(),Kl());const Ds=h0(L.roomCenters);Ds.visible=!1,l.add(Ds),lt();let Tr=!1;const un={forward:!1,back:!1,left:!1,right:!1},od=new pf,di=new I,Ls=new I,Fi=new I;new I;const Us=new I,Jl=new Vn,tn=((fc=L.intro)==null?void 0:fc.swirlCams)??[];let dn=1,Ni=0,ka=!1;const Ql=(()=>{const T=Math.sqrt(Se.x**2+Se.z**2)||1;return Se.x/T})(),ec=(()=>{const T=Math.sqrt(Se.x**2+Se.z**2)||1;return Se.z/T})();function ld(){pe="StaticIntro",ge=0,b.group.visible=!1,je.visible=!1,xe.visible=!1,u.position.copy(Ce),u.lookAt(re),d=u.rotation.y,f=u.rotation.x,j(1)}function cd(T){ge+=T,j(Math.max(0,1-ge/1)),u.position.copy(Ce),u.lookAt(re),d=u.rotation.y,f=u.rotation.x,ge>=ye&&tc()}function tc(){pe="FadeToSwirl",ge=0,j(0)}function ud(T){ge+=T;const Y=Math.min(1,ge/Pe);j(Y),ge>=Pe&&dd()}function dd(){pe="SwirlOrbit",ge=0,dn=1,Ni=0,ka=!1,b.resetClip(),b.group.visible=!0,je.visible=!0,xe.visible=!1,j(0),b.eyeAnchor.getWorldPosition(wr),b.playIntroAnimation()}function Fs(T){let Y=dn+T;if(Y<0&&(Y=0),Y>=tn.length&&(Y=tn.length-1),T>0){for(let ue=dn;ue<Y;ue++)if(ue+1<tn.length&&tn[ue+1].flags&1){Y=ue;break}}const ie=tn[Y];return ie.flags&2?{x:ec*ie.x+ie.z*Ql,y:ie.y,z:ie.z*ec-Ql*ie.x}:{x:ie.x,y:ie.y,z:ie.z}}const wr=new I;function hd(T){var pc;ge+=T,j(Math.max(0,1-ge/1));const ie=b.tick(T);if(tn.length<4){b.eyeAnchor.getWorldPosition(bn),b.normalizedTime>=.999&&Va(bn);return}const ue=T*60;for(Ni+=ue;dn<tn.length&&tn[dn].duration>0&&tn[dn].duration<=Ni;)if(dn+3<tn.length&&!(tn[dn+3].flags&1))Ni-=tn[dn].duration,dn++;else{Ni=tn[dn].duration,ka=!0;break}const et=((pc=tn[dn])==null?void 0:pc.duration)??1,Ge=et>0?Math.min(1,Ni/et):0,Ie=Fs(-1),Tt=Fs(0),Rt=Fs(1),Dt=Fs(2),Fn=Lo(Ie.x,Tt.x,Rt.x,Dt.x,Ge),pi=Lo(Ie.y,Tt.y,Rt.y,Dt.y,Ge),Os=Lo(Ie.z,Tt.z,Rt.z,Dt.z,Ge);u.position.set(wr.x+Fn,wr.y+pi,wr.z+Os),Us.copy(wr),u.lookAt(Us),d=u.rotation.y,f=u.rotation.x,E=ie.weaponRaise,ka&&(b.eyeAnchor.getWorldPosition(bn),Va(bn))}function Va(T){pe="EnterFirstPerson",ge=0,j(0),Ze.copy(u.position),oe.copy(u.quaternion),U.copy(T),Us.copy(T).addScaledVector(Se,32);const Y=new pt().lookAt(T,Us,new I(0,1,0));de.setFromRotationMatrix(Y).invert(),je.visible=!1,xe.visible=!he,E=0,x=0,H=0,Ae(1/60),p.domElement.requestPointerLock()}function fd(T){ge=Math.min(_e,ge+T);const Y=St.smoothstep(ge/_e,0,1);u.position.lerpVectors(Ze,U,Y),Jl.slerpQuaternions(oe,de,Y),u.quaternion.copy(Jl),d=u.rotation.y,f=u.rotation.x,E=Y,Ae(T),ge>=_e&&(pe="FirstPerson",b.group.visible=!1,E=1,xe.visible=!he,qt.copy(U),qt.y=Re.y,d=u.rotation.y,f=u.rotation.x,$=d,ee=f)}function pd(T){const et=(un.right?1:0)-(un.left?1:0),Ge=(un.forward?1:0)-(un.back?1:0),Ie=new I;(et!==0||Ge!==0)&&(di.set(-Math.sin(d),0,-Math.cos(d)),Ls.set(-di.z,0,di.x),Ie.addScaledVector(di,Ge),Ie.addScaledVector(Ls,et),Ie.lengthSq()>0&&Ie.normalize().multiplyScalar(182)),cn.x=St.damp(cn.x,Ie.x,10,T),cn.z=St.damp(cn.z,Ie.z,10,T),cn.x+=(Ie.x-cn.x)*Math.min(1,820*T/182),cn.z+=(Ie.z-cn.z)*Math.min(1,820*T/182),qt.addScaledVector(cn,T),u.position.set(qt.x,qt.y+rn,qt.z),u.rotation.order="YXZ",u.rotation.y=d,u.rotation.x=f,E=1,Ae(T)}function md(){m||(m=!0,le=pe,Ve.copy(u.position),ht.copy(u.quaternion),rt=d,ln=f,b.group.visible=!0,je.visible=!0,xe.visible=he,j(0),p.domElement.requestPointerLock())}function nc(T=!1){if(!m)return;m=!1,T||document.exitPointerLock(),u.position.copy(Ve),u.quaternion.copy(ht),d=rt,f=ln,le&&(pe=le);const Y=pe==="FirstPerson"||pe==="EnterFirstPerson";b.group.visible=!Y,je.visible=pe==="SwirlOrbit",xe.visible=he?!0:Y,x=0,H=0,$=d,ee=f,le=null}function ic(){pe==="StaticIntro"&&ge>.5?tc():pe==="SwirlOrbit"&&ge>1&&(b.eyeAnchor.getWorldPosition(bn),Va(bn))}function rc(T,Y){switch(T.toLowerCase()){case"w":case"arrowup":return un.forward=Y,!0;case"s":case"arrowdown":return un.back=Y,!0;case"a":case"arrowleft":return un.left=Y,!0;case"d":case"arrowright":return un.right=Y,!0;default:return!1}}const hi=document.getElementById("atlas-overlay"),Ga=document.getElementById("atlas-img"),sc=document.getElementById("atlas-grid");Ga&&k&&(Ga.src=k),sc&&L.atlas&&k&&F0(sc,L.atlas,k);function gd(){hi==null||hi.classList.toggle("visible")}hi==null||hi.addEventListener("click",()=>{hi.classList.remove("visible")});const fi=document.getElementById("lighting-panel"),Wa=document.getElementById("light-preset"),Xa=document.getElementById("light-apply-preset"),Ar=document.getElementById("light-exposure"),Rr=document.getElementById("light-hemi"),Cr=document.getElementById("light-sun-intensity"),Pr=document.getElementById("light-fill"),Ir=document.getElementById("light-ambient"),Dr=document.getElementById("light-sun-azimuth"),Lr=document.getElementById("light-sun-elevation"),Ur=document.getElementById("light-sun-distance"),Fr=document.getElementById("light-target-x"),Nr=document.getElementById("light-target-y"),Or=document.getElementById("light-target-z"),Oi=document.getElementById("light-shadows-enabled"),Bi=document.getElementById("light-shadow-size"),Br=document.getElementById("light-shadow-radius"),zr=document.getElementById("light-shadow-near"),Hr=document.getElementById("light-shadow-far"),kr=document.getElementById("light-shadow-bias"),Vr=document.getElementById("light-shadow-normal-bias"),zi=document.getElementById("light-flare-enabled"),Gr=document.getElementById("light-flare-intensity"),jn=document.getElementById("light-show-helpers"),Kn=document.getElementById("light-snow-enabled"),Wr=document.getElementById("light-snow-intensity"),Xr=document.getElementById("light-snow-speed"),Yr=document.getElementById("light-snow-gravity"),qr=document.getElementById("light-snow-size"),Zr=document.getElementById("light-snow-wind"),$r=document.getElementById("light-snow-wind-dir"),jr=document.getElementById("light-snow-drift-rand"),Kr=document.getElementById("light-snow-size-var"),Jr=document.getElementById("light-snow-haze-intensity"),Qr=document.getElementById("light-snow-haze-close"),es=document.getElementById("light-fly-speed"),ts=document.getElementById("light-fly-sensitivity"),Hi=document.getElementById("light-decals-enabled"),ns=document.getElementById("light-decals-opacity"),ki=document.getElementById("light-decals-force-opaque");function Ya(){fi&&(Ar&&(Ar.value=te.exposure.toFixed(2)),Rr&&(Rr.value=te.hemiIntensity.toFixed(2)),Cr&&(Cr.value=te.sunIntensity.toFixed(2)),Pr&&(Pr.value=te.fillIntensity.toFixed(2)),Ir&&(Ir.value=te.ambientIntensity.toFixed(2)),Dr&&(Dr.value=te.sunAzimuthDeg.toFixed(0)),Lr&&(Lr.value=te.sunElevationDeg.toFixed(0)),Ur&&(Ur.value=te.sunDistance.toFixed(0)),Fr&&(Fr.value=te.targetX.toFixed(0)),Nr&&(Nr.value=te.targetY.toFixed(0)),Or&&(Or.value=te.targetZ.toFixed(0)),Oi&&(Oi.checked=te.shadowEnabled),Bi&&(Bi.value=String(te.shadowMapSize)),Br&&(Br.value=te.shadowRadius.toFixed(0)),zr&&(zr.value=te.shadowNear.toFixed(0)),Hr&&(Hr.value=te.shadowFar.toFixed(0)),kr&&(kr.value=te.shadowBias.toFixed(5)),Vr&&(Vr.value=te.shadowNormalBias.toFixed(2)),zi&&(zi.checked=te.flareEnabled),Gr&&(Gr.value=te.flareIntensity.toFixed(2)),jn&&(jn.checked=te.showHelpers),Kn&&(Kn.checked=Te.enabled),Wr&&(Wr.value=Te.intensity.toFixed(1)),Xr&&(Xr.value=Te.speed.toFixed(1)),Yr&&(Yr.value=Te.gravity.toFixed(1)),qr&&(qr.value=Te.size.toFixed(1)),Zr&&(Zr.value=Te.wind.toFixed(1)),$r&&($r.value=Te.windDirectionDeg.toFixed(0)),jr&&(jr.value=Te.driftRandomness.toFixed(2)),Kr&&(Kr.value=Te.sizeVariation.toFixed(2)),Jr&&(Jr.value=Te.hazeIntensity.toFixed(2)),Qr&&(Qr.value=Te.hazeCloseness.toFixed(2)),es&&(es.value=g.toFixed(0)),ts&&(ts.value=y.toFixed(4)),Hi&&(Hi.checked=Zt.enabled),ns&&(ns.value=Zt.opacity.toFixed(2)),ki&&(ki.checked=Zt.forceOpaque))}function ut(T,Y,ie,ue){var Tt;if(!T||T.dataset.sliderBound==="1"||(T.min=String(Y),T.max=String(ie),T.step=String(ue),!T.parentElement))return;const Ge=document.createElement("div");Ge.className="light-dual";const Ie=document.createElement("input");Ie.type="range",Ie.min=String(Y),Ie.max=String(ie),Ie.step=String(ue),Ie.value=T.value||String(Y),(Tt=T.parentElement)==null||Tt.insertBefore(Ge,T),Ge.appendChild(Ie),Ge.appendChild(T),Ie.addEventListener("input",()=>{T.value=Ie.value,qa()}),T.addEventListener("input",()=>{const Rt=Number.parseFloat(T.value);Number.isFinite(Rt)&&(Ie.value=String(v(Rt,Y,ie)))}),T.addEventListener("change",()=>{const Rt=Number.parseFloat(T.value);Number.isFinite(Rt)&&(Ie.value=String(v(Rt,Y,ie)))}),T.dataset.sliderBound="1"}function _d(){const T=(Y,ie)=>{if(!Y)return ie;const ue=Number.parseFloat(Y.value);return Number.isFinite(ue)?ue:ie};te.exposure=v(T(Ar,te.exposure),.25,3.5),te.hemiIntensity=v(T(Rr,te.hemiIntensity),0,4),te.sunIntensity=v(T(Cr,te.sunIntensity),0,8),te.fillIntensity=v(T(Pr,te.fillIntensity),0,4),te.ambientIntensity=v(T(Ir,te.ambientIntensity),0,3),te.sunAzimuthDeg=T(Dr,te.sunAzimuthDeg),te.sunElevationDeg=v(T(Lr,te.sunElevationDeg),1,89),te.sunDistance=v(T(Ur,te.sunDistance),200,1e4),te.targetX=T(Fr,te.targetX),te.targetY=T(Nr,te.targetY),te.targetZ=T(Or,te.targetZ),te.shadowEnabled=!!(Oi!=null&&Oi.checked),te.shadowMapSize=Number.parseInt((Bi==null?void 0:Bi.value)??String(te.shadowMapSize),10)||te.shadowMapSize,te.shadowRadius=v(T(Br,te.shadowRadius),100,1e4),te.shadowNear=v(T(zr,te.shadowNear),.1,5e3),te.shadowFar=v(T(Hr,te.shadowFar),te.shadowNear+1,3e4),te.shadowBias=v(T(kr,te.shadowBias),-.01,.01),te.shadowNormalBias=v(T(Vr,te.shadowNormalBias),0,3),te.flareEnabled=!!(zi!=null&&zi.checked),te.flareIntensity=v(T(Gr,te.flareIntensity),0,2.5),te.showHelpers=!!(jn!=null&&jn.checked),Te.enabled=!!((Kn==null?void 0:Kn.checked)??Te.enabled),Te.intensity=v(T(Wr,Te.intensity),0,1e3),Te.speed=v(T(Xr,Te.speed),.05,220),Te.gravity=v(T(Yr,Te.gravity),0,80),Te.size=v(T(qr,Te.size),.5,12),Te.wind=v(T(Zr,Te.wind),0,60),Te.windDirectionDeg=T($r,Te.windDirectionDeg),Te.driftRandomness=v(T(jr,Te.driftRandomness),0,4),Te.sizeVariation=v(T(Kr,Te.sizeVariation),0,.95),Te.hazeIntensity=v(T(Jr,Te.hazeIntensity),0,2),Te.hazeCloseness=v(T(Qr,Te.hazeCloseness),0,2),g=v(T(es,g),40,1400),y=v(T(ts,y),1e-4,.01),Zt.enabled=!!((Hi==null?void 0:Hi.checked)??Zt.enabled),Zt.opacity=v(T(ns,Zt.opacity),0,1),Zt.forceOpaque=!!((ki==null?void 0:ki.checked)??Zt.forceOpaque)}function qa(){_d(),Ya(),lt(),Ba(),As()}function vd(T){Object.assign(te,Rs[T]),Ya(),lt()}ut(Ar,.25,3.5,.01),ut(Rr,0,4,.01),ut(Cr,0,8,.01),ut(Pr,0,4,.01),ut(Ir,0,3,.01),ut(Dr,-180,180,1),ut(Lr,1,89,1),ut(Ur,200,1e4,10),ut(Fr,-1e4,1e4,10),ut(Nr,-1e4,1e4,10),ut(Or,-1e4,1e4,10),ut(Br,100,1e4,10),ut(zr,.1,5e3,1),ut(Hr,10,3e4,10),ut(kr,-.01,.01,5e-5),ut(Vr,0,3,.01),ut(Gr,0,2.5,.01),ut(Wr,0,1e3,1),ut(Xr,.1,220,.1),ut(Yr,0,80,.1),ut(qr,.5,12,.1),ut(Zr,0,60,.1),ut($r,-180,180,1),ut(jr,0,4,.01),ut(Kr,0,.95,.01),ut(Jr,0,2,.01),ut(Qr,0,2,.01),ut(es,40,1400,5),ut(ts,1e-4,.01,1e-4),ut(ns,0,1,.01);const Ns=document.getElementById("chr-lod-level");Ns==null||Ns.addEventListener("change",()=>{const T=parseInt(Ns.value,10);b.setLodLevel(Number.isFinite(T)?T:0)}),Ya(),[Ar,Rr,Cr,Pr,Ir,Dr,Lr,Ur,Fr,Nr,Or,Oi,Bi,Br,zr,Hr,kr,Vr,zi,Gr,jn,Kn,Wr,Xr,qr,Zr,Yr,$r,jr,Kr,Jr,Qr,es,ts,Hi,ns,ki].forEach(T=>{T&&(T.addEventListener("input",qa),T.addEventListener("change",qa))}),Xa==null||Xa.addEventListener("click",()=>{const T=(Wa==null?void 0:Wa.value)??"midday";vd(T)}),window.addEventListener("keydown",T=>{rc(T.key,!0)&&T.preventDefault()}),window.addEventListener("keyup",T=>{rc(T.key,!1)&&T.preventDefault()});const is=document.getElementById("poly-popup"),ac=document.getElementById("poly-content"),xd=document.getElementById("poly-preview"),oc=document.getElementById("poly-id-badge"),Vi=document.getElementById("poly-tab-summary"),Gi=document.getElementById("poly-tab-json"),Za=document.getElementById("poly-panel-summary"),$a=document.getElementById("poly-panel-json"),lc=document.getElementById("poly-json-pre"),cc=new mf,ja=new $e;function uc(T){Vi==null||Vi.classList.toggle("active",T==="summary"),Gi==null||Gi.classList.toggle("active",T==="json"),Za==null||Za.classList.toggle("active",T==="summary"),$a==null||$a.classList.toggle("active",T==="json")}Vi==null||Vi.addEventListener("click",()=>uc("summary")),Gi==null||Gi.addEventListener("click",()=>uc("json"));function yd(){is==null||is.classList.remove("visible")}function Md(T,Y){var et;if(!is||!ac)return;const ie=(et=L.atlas)==null?void 0:et.items[String(Y.materialId)];oc&&(oc.textContent=`#${T}`);const ue=B0(Y,ie);if(ac.innerHTML=`
      <div class="poly-row"><span class="poly-key">room:</span> ${Y.roomIndex}</div>
      <div class="poly-row"><span class="poly-key">material:</span> ${Y.materialId}</div>
      <div class="poly-row"><span class="poly-key">secondary DL:</span> ${Y.isSecondary?"yes":"no"}</div>
      <div class="poly-row"><span class="poly-key">uvA:</span> ${ue.a}</div>
      <div class="poly-row"><span class="poly-key">uvB:</span> ${ue.b}</div>
      <div class="poly-row"><span class="poly-key">uvC:</span> ${ue.c}</div>
      <div class="poly-row"><span class="poly-key">atlas item:</span> ${ie?`${ie.width}×${ie.height} @ (${ie.x}, ${ie.y}) — ${ie.imageName}`:"not found"}</div>
    `,N0(xd,Ga,L.atlas,Y.materialId),lc){const Ge={triId:T,...Y};lc.innerHTML=O0(JSON.stringify(Ge,null,2))}is.classList.add("visible")}p.domElement.addEventListener("click",T=>{if(ic(),document.pointerLockElement!==p.domElement)p.domElement.requestPointerLock();else return;if(!Un)return;const Y=p.domElement.getBoundingClientRect();ja.x=(T.clientX-Y.left)/Y.width*2-1,ja.y=-((T.clientY-Y.top)/Y.height)*2+1,cc.setFromCamera(ja,u);const ie=[Ln];He!=null&&He.visible&&ie.push(He),q!=null&&q.visible&&ie.push(q);const et=ie.flatMap(Dt=>cc.intersectObject(Dt,!0)).sort((Dt,Fn)=>Dt.distance-Fn.distance).find(Dt=>Dt.object instanceof _t&&Array.isArray(Dt.object.userData.triangleIds));if(!et||et.faceIndex===void 0)return;const Ie=et.object.userData.triangleIds;if(!Ie)return;const Tt=Ie[et.faceIndex];if(Tt===void 0)return;const Rt=L.roomTriangles[Tt];Rt&&Md(Tt,Rt)}),window.addEventListener("keydown",T=>{if((T.key===" "||T.key==="Enter")&&ic(),T.key==="1")Un=!Un,Li(),lt();else if(T.key==="2")Ui.visible=!Ui.visible;else if(T.key==="3")Ps.visible=!Ps.visible;else if(T.key==="4")Is.visible=!Is.visible;else if(T.key==="5"){Tr=!Tr;const Y=Ui.material;Y.wireframe=Tr,Ln.traverse(ie=>{if(ie instanceof _t&&(ie.material instanceof Ii&&(ie.material.wireframe=Tr),ie.material instanceof en)){const ue="__wfOverlay";if(Tr)if(ie.userData[ue])ie.userData[ue].visible=!0;else{const et=new nf(ie.geometry),Ge=new Di({color:65416}),Ie=new zl(et,Ge);Ie.name=ue,ie.userData[ue]=Ie,ie.add(Ie)}else ie.userData[ue]&&(ie.userData[ue].visible=!1)}})}else if(T.key==="6")w.visible=!w.visible;else if(T.key==="0")$n&&($n.visible=!$n.visible);else if(T.key==="p"||T.key==="P")za==null||za.classList.toggle("hidden");else if(T.key==="7")gd();else if(T.key==="8"){if(ce){gn=!gn;const Y=gn?ce:Q,ie=gn?Q:ce;ie.visible=!1,l.children.includes(Y)||l.add(Y),Ln=Y,Li(),lt()}}else T.key==="9"?Ds.visible=!Ds.visible:T.key==="r"||T.key==="R"?yr()&&(J=!J,Li(),lt()):T.key==="g"||T.key==="G"?(o=o==="hazy"?"gameplay":o==="gameplay"?"off":"hazy",c()):T.key==="l"||T.key==="L"?fi==null||fi.classList.toggle("hidden"):T.key==="h"||T.key==="H"?(te.showHelpers=!te.showHelpers,jn&&(jn.checked=te.showHelpers),W()):T.key==="n"||T.key==="N"?(Te.enabled=!Te.enabled,Kn&&(Kn.checked=Te.enabled),Ba()):T.key==="f"||T.key==="F"?(m?nc():md(),S(m&&document.pointerLockElement===p.domElement)):T.key==="k"||T.key==="K"?Oe(!he):T.key==="Escape"&&(h?document.exitPointerLock():(yd(),fi==null||fi.classList.add("hidden")))}),window.addEventListener("resize",()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)}),ld();const dc=()=>{const T=od.getDelta(),Y=(un.right?1:0)-(un.left?1:0),ie=(un.forward?1:0)-(un.back?1:0);if(m&&h){const ue=g;(Y!==0||ie!==0)&&(u.getWorldDirection(di),Ls.crossVectors(di,u.up).normalize(),Fi.set(0,0,0),ie!==0&&Fi.addScaledVector(di,ie),Y!==0&&Fi.addScaledVector(Ls,Y),Fi.lengthSq()>0&&(Fi.normalize().multiplyScalar(ue*T),u.position.add(Fi)))}else pe==="StaticIntro"?cd(T):pe==="FadeToSwirl"?ud(T):pe==="SwirlOrbit"?hd(T):pe==="EnterFirstPerson"?fd(T):pd(T);if(pe==="EnterFirstPerson"||pe==="FirstPerson"){if(Z+=T,Z>=.5){Z=0;let ue=0,et=0;xe.traverse(pi=>{if(!(pi instanceof _t))return;ue+=1;const Os=pi.geometry.getAttribute("position");Os&&(et+=Os.count)});const Ge=new Pi().setFromObject(xe),Ie=Ge.getCenter(new I),Tt=Ge.getSize(new I),Rt=u.worldToLocal(Ie.clone()),Dt=Ie.clone().project(u),Fn={mode:pe,visible:xe.visible,pos:xe.position.toArray(),rot:[xe.rotation.x,xe.rotation.y,xe.rotation.z],meshCount:ue,vertexCount:et,boxCenter:Ie.toArray(),boxSize:Tt.toArray(),cameraLocalCenter:Rt.toArray(),ndcCenter:[Dt.x,Dt.y,Dt.z],centerInFront:Rt.z<0,raise:E,thetaDisp:x,vertaDisp:H};console.log("[fpGun:frame]",Fn),console.log("[fpGun:frame:json]",JSON.stringify(Fn))}}else Z=0;Bt.textContent=`mode: ${pe} | weapon: ${K}${m?" | dev-fly":""}${he?" | fp-gun detached (K)":""}`,$l(),ui.visible&&(An.uniforms.uTime.value+=T),xt(),qe.visible=xe.visible,p.render(l,u),requestAnimationFrame(dc)};dc()}U0().catch(i=>{console.error(i)});function F0(i,e,t){i.innerHTML="";const n=Object.keys(e.items).map(s=>Number.parseInt(s,10)).filter(s=>Number.isFinite(s)).sort((s,o)=>s-o),r=document.createDocumentFragment();for(const s of n){const o=e.items[String(s)],a=document.createElement("div");a.className="atlas-tile";const c=document.createElement("div");c.className="atlas-swatch-wrap";const l=document.createElement("div");l.className="atlas-swatch";const u=Math.min(72/o.width,72/o.height),d=Math.max(1,Math.round(o.width*u)),f=Math.max(1,Math.round(o.height*u));l.style.width=`${d}px`,l.style.height=`${f}px`,l.style.backgroundImage=`url(${t})`,l.style.backgroundRepeat="no-repeat",l.style.backgroundSize=`${Math.round(e.width*u)}px ${Math.round(e.height*u)}px`,l.style.backgroundPosition=`-${Math.round(o.x*u)}px -${Math.round(o.y*u)}px`,c.appendChild(l);const m=document.createElement("div");m.className="atlas-label",m.innerHTML=`mat ${s}<br>${o.imageName}`,a.appendChild(c),a.appendChild(m),r.appendChild(a)}i.appendChild(r)}function N0(i,e,t,n){const r=i.getContext("2d");if(!r)return;const s=t==null?void 0:t.items[String(n)];if(!s||!e||!e.complete){i.width=0,i.height=0;return}const o=Math.max(1,Math.floor(160/Math.max(s.width,s.height)));i.width=s.width*o,i.height=s.height*o,r.imageSmoothingEnabled=!1,r.clearRect(0,0,i.width,i.height),r.drawImage(e,s.x,s.y,s.width,s.height,0,0,i.width,i.height)}function O0(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span class="jk">${e}</span>`:`<span class="js">${e}</span>`:/true|false/.test(e)?`<span class="jb">${e}</span>`:/null/.test(e)?`<span class="jb">${e}</span>`:`<span class="jn">${e}</span>`)}function B0(i,e){const t=(n,r)=>{const s=n/32,o=r/32;if(!e)return`${n}, ${r} (texel ${s.toFixed(3)}, ${o.toFixed(3)})`;const a=(s%e.width+e.width)%e.width,c=(o%e.height+e.height)%e.height;return`${n}, ${r} (texel ${s.toFixed(3)}, ${o.toFixed(3)} | wrap ${a.toFixed(3)}, ${c.toFixed(3)})`};return{a:t(i.uvA.u,i.uvA.v),b:t(i.uvB.u,i.uvB.v),c:t(i.uvC.u,i.uvC.v)}}
