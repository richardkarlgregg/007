var bu=Object.defineProperty;var Tu=(i,e,t)=>e in i?bu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var hn=(i,e,t)=>Tu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="180",wu=0,Sl=1,Au=2,Uc=1,Fc=2,Dn=3,Zn=0,Kt=1,Pt=2,qn=0,di=1,Ka=2,El=3,bl=4,Ru=5,ui=100,Cu=101,Pu=102,Iu=103,Du=104,Lu=200,Uu=201,Fu=202,Nu=203,ja=204,Ja=205,Ou=206,Bu=207,zu=208,Hu=209,Vu=210,ku=211,Gu=212,Wu=213,Xu=214,Qa=0,eo=1,to=2,$i=3,no=4,io=5,ro=6,so=7,Nc=0,Yu=1,qu=2,En=0,Zu=1,$u=2,Ku=3,Oc=4,ju=5,Ju=6,Qu=7,Bc=300,Ki=301,ji=302,ao=303,oo=304,Qs=306,_n=1e3,vn=1001,lo=1002,At=1003,eh=1004,ds=1005,xn=1006,ma=1007,Yn=1008,bn=1009,zc=1010,Hc=1011,Kr=1012,Xo=1013,fi=1014,Mn=1015,as=1016,Yo=1017,qo=1018,jr=1020,Vc=35902,kc=35899,Gc=1021,Wc=1022,$t=1023,Jr=1026,Qr=1027,Xc=1028,Zo=1029,Yc=1030,$o=1031,Ko=1033,Gs=33776,Ws=33777,Xs=33778,Ys=33779,co=35840,uo=35841,ho=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,vo=37809,xo=37810,Mo=37811,yo=37812,So=37813,Eo=37814,bo=37815,To=37816,wo=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Io=36492,Do=36494,Lo=36495,Uo=36283,Fo=36284,No=36285,Oo=36286,th=3200,nh=3201,qc=0,ih=1,Xn="",Gt="srgb",pi="srgb-linear",$s="linear",gt="srgb",Ai=7680,Tl=519,rh=512,sh=513,ah=514,Zc=515,oh=516,lh=517,ch=518,uh=519,Bo=35044,wl="300 es",yn=2e3,es=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Al=1234567;const Zr=Math.PI/180,ts=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function jo(i,e){return(i%e+e)%e}function hh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function dh(i,e,t){return i!==e?(t-i)/(e-i):0}function $r(i,e,t){return(1-t)*i+t*e}function fh(i,e,t,n){return $r(i,e,1-Math.exp(-t*n))}function ph(i,e=1){return e-Math.abs(jo(i,e*2)-e)}function mh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function gh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function vh(i,e){return i+Math.random()*(e-i)}function xh(i){return i*(.5-Math.random())}function Mh(i){i!==void 0&&(Al=i);let e=Al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yh(i){return i*Zr}function Sh(i){return i*ts}function Eh(i){return(i&i-1)===0&&i!==0}function bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Th(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dt={DEG2RAD:Zr,RAD2DEG:ts,generateUUID:Un,clamp:it,euclideanModulo:jo,mapLinear:hh,inverseLerp:dh,lerp:$r,damp:fh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:xh,seededRandom:Mh,degToRad:yh,radToDeg:Sh,isPowerOfTwo:Eh,ceilPowerOfTwo:bh,floorPowerOfTwo:Th,setQuaternionFromProperEuler:wh,normalize:ft,denormalize:mn};class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ln{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],m=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==m||u!==g){let p=1-a;const d=c*f+l*m+u*g+h*x,C=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const L=Math.sqrt(w),P=Math.atan2(L,d*C);p=Math.sin(p*P)/L,a=Math.sin(a*P)/L}const E=a*C;if(c=c*p+f*E,l=l*p+m*E,u=u*p+g*E,h=h*p+x*E,p===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*m-l*f,e[t+1]=c*g+u*f+l*h-a*m,e[t+2]=l*g+u*m+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ga.copy(this).projectOnVector(e),this.sub(ga)}reflect(e){return this.sub(ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ga=new I,Rl=new Ln;class $e{constructor(e,t,n,r,s,o,a,c,l){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],x=r[0],p=r[3],d=r[6],C=r[1],w=r[4],E=r[7],L=r[2],P=r[5],A=r[8];return s[0]=o*x+a*C+c*L,s[3]=o*p+a*w+c*P,s[6]=o*d+a*E+c*A,s[1]=l*x+u*C+h*L,s[4]=l*p+u*w+h*P,s[7]=l*d+u*E+h*A,s[2]=f*x+m*C+g*L,s[5]=f*p+m*w+g*P,s[8]=f*d+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,m=l*s-o*c,g=t*h+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-u*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(u*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new $e;function $c(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ah(){const i=ns("canvas");return i.style.display="block",i}const Cl={};function is(i){i in Cl||(Cl[i]=!0,console.warn(i))}function Rh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Pl=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Il=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===gt&&(r.r=Fn(r.r),r.g=Fn(r.g),r.b=Fn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(r.r=Zi(r.r),r.g=Zi(r.g),r.b=Zi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xn?$s:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:n,transfer:$s,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Pl,fromXYZ:Il,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const at=Ch();function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Ph{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ri===void 0&&(Ri=ns("canvas")),Ri.width=e.width,Ri.height=e.height;const r=Ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Fn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fn(t[n]/255)*255):t[n]=Fn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ih=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(va(r[o].image)):s.push(va(r[o]))}else s=va(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ph.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dh=0;const xa=new I;class Ot extends er{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=vn,r=vn,s=xn,o=Yn,a=$t,c=bn,l=Ot.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Un(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xa).x}get height(){return this.source.getSize(xa).y}get depth(){return this.source.getSize(xa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _n:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _n:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=Bc;Ot.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(m+1)/2,L=(d+1)/2,P=(u+f)/4,A=(h+x)/4,O=(g+p)/4;return w>E&&w>L?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=P/n,s=A/n):E>L?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=P/r,s=O/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=A/s,r=O/s),this.set(n,r,s,t),this}let C=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(h-x)/C,this.z=(f-u)/C,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lh extends er{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ot(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Lh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kc extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uh extends Ot{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),ps.subVectors(this.max,zr),Ci.subVectors(e.a,zr),Pi.subVectors(e.b,zr),Ii.subVectors(e.c,zr),zn.subVectors(Pi,Ci),Hn.subVectors(Ii,Pi),ti.subVectors(Ci,Ii);let t=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-ti.z,ti.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,ti.z,0,-ti.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-ti.y,ti.x,0];return!Ma(t,Ci,Pi,Ii,ps)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,Ci,Pi,Ii,ps))?!1:(ms.crossVectors(zn,Hn),t=[ms.x,ms.y,ms.z],Ma(t,Ci,Pi,Ii,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,fs=new tr,Ci=new I,Pi=new I,Ii=new I,zn=new I,Hn=new I,ti=new I,zr=new I,ps=new I,ms=new I,ni=new I;function Ma(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ni.fromArray(i,s);const a=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),c=e.dot(ni),l=t.dot(ni),u=n.dot(ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Fh=new tr,Hr=new I,ya=new I;class os{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(ya)),this.expandByPoint(Hr.copy(e.center).sub(ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Rn=new I,Sa=new I,gs=new I,Vn=new I,Ea=new I,_s=new I,ba=new I;class ea{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),gs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gs),a=Vn.dot(this.direction),c=-Vn.dot(gs),l=Vn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,m=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Sa).addScaledVector(gs,f),m}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),r=Rn.dot(Rn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),_s.subVectors(n,e),ba.crossVectors(Ea,_s);let o=this.direction.dot(ba),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(_s.crossVectors(Vn,_s));if(c<0)return null;const l=a*this.direction.dot(Ea.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(ba);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,n,r,s,o,a,c,l,u,h,f,m,g,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,h,f,m,g,x,p)}set(e,t,n,r,s,o,a,c,l,u,h,f,m,g,x,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,m=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,m=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,m=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Oh)}lookAt(e,t,n){const r=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),kn.crossVectors(n,Qt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),kn.crossVectors(n,Qt)),kn.normalize(),vs.crossVectors(Qt,kn),r[0]=kn.x,r[4]=vs.x,r[8]=Qt.x,r[1]=kn.y,r[5]=vs.y,r[9]=Qt.y,r[2]=kn.z,r[6]=vs.z,r[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],d=n[14],C=n[3],w=n[7],E=n[11],L=n[15],P=r[0],A=r[4],O=r[8],y=r[12],_=r[1],T=r[5],F=r[9],D=r[13],B=r[2],V=r[6],X=r[10],K=r[14],H=r[3],ie=r[7],Q=r[11],le=r[15];return s[0]=o*P+a*_+c*B+l*H,s[4]=o*A+a*T+c*V+l*ie,s[8]=o*O+a*F+c*X+l*Q,s[12]=o*y+a*D+c*K+l*le,s[1]=u*P+h*_+f*B+m*H,s[5]=u*A+h*T+f*V+m*ie,s[9]=u*O+h*F+f*X+m*Q,s[13]=u*y+h*D+f*K+m*le,s[2]=g*P+x*_+p*B+d*H,s[6]=g*A+x*T+p*V+d*ie,s[10]=g*O+x*F+p*X+d*Q,s[14]=g*y+x*D+p*K+d*le,s[3]=C*P+w*_+E*B+L*H,s[7]=C*A+w*T+E*V+L*ie,s[11]=C*O+w*F+E*X+L*Q,s[15]=C*y+w*D+E*K+L*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*m-n*c*m)+x*(+t*c*m-t*l*f+s*o*f-r*o*m+r*l*u-s*c*u)+p*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+d*(-r*a*u-t*c*h+t*a*f+r*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],x=e[13],p=e[14],d=e[15],C=h*p*l-x*f*l+x*c*m-a*p*m-h*c*d+a*f*d,w=g*f*l-u*p*l-g*c*m+o*p*m+u*c*d-o*f*d,E=u*x*l-g*h*l+g*a*m-o*x*m-u*a*d+o*h*d,L=g*h*c-u*x*c-g*a*f+o*x*f+u*a*p-o*h*p,P=t*C+n*w+r*E+s*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=C*A,e[1]=(x*f*s-h*p*s-x*r*m+n*p*m+h*r*d-n*f*d)*A,e[2]=(a*p*s-x*c*s+x*r*l-n*p*l-a*r*d+n*c*d)*A,e[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*m-n*c*m)*A,e[4]=w*A,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*d+t*f*d)*A,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*d-t*c*d)*A,e[7]=(o*f*s-u*c*s+u*r*l-t*f*l-o*r*m+t*c*m)*A,e[8]=E*A,e[9]=(g*h*s-u*x*s-g*n*m+t*x*m+u*n*d-t*h*d)*A,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*d+t*a*d)*A,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=L*A,e[13]=(u*x*r-g*h*r+g*n*f-t*x*f-u*n*p+t*h*p)*A,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*p-t*a*p)*A,e[15]=(o*h*r-u*a*r+u*n*c-t*h*c-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,f=s*l,m=s*u,g=s*h,x=o*u,p=o*h,d=a*h,C=c*l,w=c*u,E=c*h,L=n.x,P=n.y,A=n.z;return r[0]=(1-(x+d))*L,r[1]=(m+E)*L,r[2]=(g-w)*L,r[3]=0,r[4]=(m-E)*P,r[5]=(1-(f+d))*P,r[6]=(p+C)*P,r[7]=0,r[8]=(g+w)*A,r[9]=(p-C)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const l=1/s,u=1/o,h=1/a;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,t.setFromRotationMatrix(fn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=yn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),f=(t+e)/(t-e),m=(n+r)/(n-r);let g,x;if(c)g=s/(o-s),x=o*s/(o-s);else if(a===yn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===es)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=yn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),f=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,x;if(c)g=1/(o-s),x=o/(o-s);else if(a===yn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===es)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new I,fn=new pt,Nh=new I(0,0,0),Oh=new I(1,1,1),kn=new I,vs=new I,Qt=new I,Dl=new pt,Ll=new Ln;class Tn{constructor(e=0,t=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Qo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bh=0;const Ul=new I,Li=new Ln,Cn=new pt,xs=new I,Vr=new I,zh=new I,Hh=new Ln,Fl=new I(1,0,0),Nl=new I(0,1,0),Ol=new I(0,0,1),Bl={type:"added"},Vh={type:"removed"},Ui={type:"childadded",child:null},Ta={type:"childremoved",child:null};class yt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new I,t=new Tn,n=new Ln,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new $e}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.multiply(Li),this}rotateOnWorldAxis(e,t){return Li.setFromAxisAngle(e,t),this.quaternion.premultiply(Li),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ol,e)}translateOnAxis(e,t){return Ul.copy(e).applyQuaternion(this.quaternion),this.position.add(Ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Vr,xs,this.up):Cn.lookAt(xs,Vr,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),Li.setFromRotationMatrix(Cn),this.quaternion.premultiply(Li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vh),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bl),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Pn=new I,wa=new I,In=new I,Fi=new I,Ni=new I,zl=new I,Aa=new I,Ra=new I,Ca=new I,Pa=new bt,Ia=new bt,Da=new bt;class on{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){pn.subVectors(r,t),Pn.subVectors(n,t),wa.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Pn),c=pn.dot(wa),l=Pn.dot(Pn),u=Pn.dot(wa),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,In)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,In.x),c.addScaledVector(o,In.y),c.addScaledVector(a,In.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pa.setScalar(0),Ia.setScalar(0),Da.setScalar(0),Pa.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pa,s.x),o.addScaledVector(Ia,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,n,r){return pn.subVectors(n,t),Pn.subVectors(e,t),pn.cross(Pn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),pn.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return on.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,n),Ni.subVectors(s,n),Aa.subVectors(e,n);const c=Fi.dot(Aa),l=Ni.dot(Aa);if(c<=0&&l<=0)return t.copy(n);Ra.subVectors(e,r);const u=Fi.dot(Ra),h=Ni.dot(Ra);if(u>=0&&h<=u)return t.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Fi,o);Ca.subVectors(e,s);const m=Fi.dot(Ca),g=Ni.dot(Ca);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ni,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return zl.subVectors(s,r),a=(h-u)/(h-u+(m-g)),t.copy(r).addScaledVector(zl,a);const d=1/(p+x+f);return o=x*d,a=f*d,t.copy(n).addScaledVector(Fi,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=jo(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=La(o,s,e+1/3),this.g=La(o,s,e),this.b=La(o,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return at.workingToColorSpace(Ht.copy(this),e),Math.round(it(Ht.r*255,0,255))*65536+Math.round(it(Ht.g*255,0,255))*256+Math.round(it(Ht.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Gt){at.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,r=Ht.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Ms);const n=$r(Gn.h,Ms.h,t),r=$r(Gn.s,Ms.s,t),s=$r(Gn.l,Ms.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Be;Be.NAMES=jc;let kh=0;class $n extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=di,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ja,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gn extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new I,ys=new Ze;let Gh=0;class Wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bo,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bo&&(e.usage=this.usage),e}}class Jc extends Wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qc extends Wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ge extends Wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wh=0;const sn=new pt,Ua=new yt,Oi=new I,en=new tr,kr=new tr,Nt=new I;class xt extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($c(e)?Qc:Jc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $e().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];kr.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(en.min,kr.min),en.expandByPoint(Nt),Nt.addVectors(en.max,kr.max),en.expandByPoint(Nt)):(en.expandByPoint(kr.min),en.expandByPoint(kr.max))}en.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Nt.fromBufferAttribute(a,l),c&&(Oi.fromBufferAttribute(e,l),Nt.add(Oi)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let O=0;O<n.count;O++)a[O]=new I,c[O]=new I;const l=new I,u=new I,h=new I,f=new Ze,m=new Ze,g=new Ze,x=new I,p=new I;function d(O,y,_){l.fromBufferAttribute(n,O),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),f.fromBufferAttribute(s,O),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),m.sub(f),g.sub(f);const T=1/(m.x*g.y-g.x*m.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(T),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(T),a[O].add(x),a[y].add(x),a[_].add(x),c[O].add(p),c[y].add(p),c[_].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let O=0,y=C.length;O<y;++O){const _=C[O],T=_.start,F=_.count;for(let D=T,B=T+F;D<B;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const w=new I,E=new I,L=new I,P=new I;function A(O){L.fromBufferAttribute(r,O),P.copy(L);const y=a[O];w.copy(y),w.sub(L.multiplyScalar(L.dot(y))).normalize(),E.crossVectors(P,y);const T=E.dot(c[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,T)}for(let O=0,y=C.length;O<y;++O){const _=C[O],T=_.start,F=_.count;for(let D=T,B=T+F;D<B;D+=3)A(e.getX(D+0)),A(e.getX(D+1)),A(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?m=c[x]*a.data.stride+a.offset:m=c[x]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new Wt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=e(f,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hl=new pt,ii=new ea,Ss=new os,Vl=new I,Es=new I,bs=new I,Ts=new I,Fa=new I,ws=new I,kl=new I,As=new I;class Tt extends yt{constructor(e=new xt,t=new gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ws.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Fa.fromBufferAttribute(h,e),o?ws.addScaledVector(Fa,u):ws.addScaledVector(Fa.sub(t),u))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),ii.copy(e.ray).recast(e.near),!(Ss.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Ss,Vl)===null||ii.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Hl.copy(s).invert(),ii.copy(e.ray).applyMatrix4(Hl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ii)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,L=w;E<L;E+=3){const P=a.getX(E),A=a.getX(E+1),O=a.getX(E+2);r=Rs(this,d,e,n,l,u,h,P,A,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const C=a.getX(p),w=a.getX(p+1),E=a.getX(p+2);r=Rs(this,o,e,n,l,u,h,C,w,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],d=o[p.materialIndex],C=Math.max(p.start,m.start),w=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=C,L=w;E<L;E+=3){const P=E,A=E+1,O=E+2;r=Rs(this,d,e,n,l,u,h,P,A,O),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){const C=p,w=p+1,E=p+2;r=Rs(this,o,e,n,l,u,h,C,w,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Xh(i,e,t,n,r,s,o,a){let c;if(e.side===Kt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Zn,a),c===null)return null;As.copy(a),As.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:i}}function Rs(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Es),i.getVertexPosition(c,bs),i.getVertexPosition(l,Ts);const u=Xh(i,e,t,n,Es,bs,Ts,kl);if(u){const h=new I;on.getBarycoord(kl,Es,bs,Ts,h),r&&(u.uv=on.getInterpolatedAttribute(r,a,c,l,h,new Ze)),s&&(u.uv1=on.getInterpolatedAttribute(s,a,c,l,h,new Ze)),o&&(u.normal=on.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};on.getNormal(Es,bs,Ts,f.normal),u.face=f,u.barycoord=h}return u}class nr extends xt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ge(l,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(h,2));function g(x,p,d,C,w,E,L,P,A,O,y){const _=E/A,T=L/O,F=E/2,D=L/2,B=P/2,V=A+1,X=O+1;let K=0,H=0;const ie=new I;for(let Q=0;Q<X;Q++){const le=Q*T-D;for(let He=0;He<V;He++){const We=He*_-F;ie[x]=We*C,ie[p]=le*w,ie[d]=B,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[p]=0,ie[d]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(He/A),h.push(1-Q/O),K+=1}}for(let Q=0;Q<O;Q++)for(let le=0;le<A;le++){const He=f+le+V*Q,We=f+le+V*(Q+1),ot=f+(le+1)+V*(Q+1),Ve=f+(le+1)+V*Q;c.push(He,We,Ve),c.push(We,ot,Ve),H+=6}a.addGroup(m,H,y),m+=H,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function kt(i){const e={};for(let t=0;t<i.length;t++){const n=Ji(i[t]);for(const r in n)e[r]=n[r]}return e}function Yh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const qh={clone:Ji,merge:kt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$h=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=$h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class el extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new I,Gl=new Ze,Wl=new Ze;class an extends el{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-e/Wn.z)}getViewSize(e,t){return this.getViewBounds(e,Gl,Wl),t.subVectors(Wl,Gl)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class Kh extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Bi,zi,e,t);r.layers=this.layers,this.add(r);const s=new an(Bi,zi,e,t);s.layers=this.layers,this.add(s);const o=new an(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new an(Bi,zi,e,t);a.layers=this.layers,this.add(a);const c=new an(Bi,zi,e,t);c.layers=this.layers,this.add(c);const l=new an(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tu extends Ot{constructor(e=[],t=Ki,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jh extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new tu(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new nr(5,5,5),s=new tn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:qn});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===Yn&&(t.minFilter=xn),new Kh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Xt extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jh={type:"move"};class Na{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jh)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qh extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ed{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bo,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new I;class Ks{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ta extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const Gr=new I,Vi=new I,ki=new I,Gi=new Ze,Wr=new Ze,nu=new pt,Cs=new I,Xr=new I,Ps=new I,Xl=new Ze,Oa=new Ze,Yl=new Ze;class nl extends yt{constructor(e=new ta){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ed(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Ks(n,3,0,!1)),Hi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new Ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),nu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-ki.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Is(Cs.set(-.5,-.5,0),ki,o,Vi,r,s),Is(Xr.set(.5,-.5,0),ki,o,Vi,r,s),Is(Ps.set(.5,.5,0),ki,o,Vi,r,s),Xl.set(0,0),Oa.set(1,0),Yl.set(1,1);let a=e.ray.intersectTriangle(Cs,Xr,Ps,!1,Gr);if(a===null&&(Is(Xr.set(-.5,.5,0),ki,o,Vi,r,s),Oa.set(0,1),a=e.ray.intersectTriangle(Cs,Ps,Xr,!1,Gr),a===null))return;const c=e.ray.origin.distanceTo(Gr);c<e.near||c>e.far||t.push({distance:c,point:Gr.clone(),uv:on.getInterpolation(Gr,Cs,Xr,Ps,Xl,Oa,Yl,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Is(i,e,t,n,r,s){Gi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Wr.x=s*Gi.x-r*Gi.y,Wr.y=r*Gi.x+s*Gi.y):Wr.copy(Gi),i.copy(e),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(nu)}class il extends Ot{constructor(e=null,t=1,n=1,r,s,o,a,c,l=At,u=At,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ba=new I,td=new I,nd=new $e;class li{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ba.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ba),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nd.getNormalMatrix(e),r=this.coplanarPoint(Ba).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new os,id=new Ze(.5,.5),Ds=new I;class na{constructor(e=new li,t=new li,n=new li,r=new li,s=new li,o=new li){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],m=s[7],g=s[8],x=s[9],p=s[10],d=s[11],C=s[12],w=s[13],E=s[14],L=s[15];if(r[0].setComponents(l-o,m-u,d-g,L-C).normalize(),r[1].setComponents(l+o,m+u,d+g,L+C).normalize(),r[2].setComponents(l+a,m+h,d+x,L+w).normalize(),r[3].setComponents(l-a,m-h,d-x,L-w).normalize(),n)r[4].setComponents(c,f,p,E).normalize(),r[5].setComponents(l-c,m-f,d-p,L-E).normalize();else if(r[4].setComponents(l-c,m-f,d-p,L-E).normalize(),t===yn)r[5].setComponents(l+c,m+f,d+p,L+E).normalize();else if(t===es)r[5].setComponents(c,f,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){ri.center.set(0,0,0);const t=id.distanceTo(e.center);return ri.radius=.7071067811865476+t,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ds.x=r.normal.x>0?e.max.x:e.min.x,Ds.y=r.normal.y>0?e.max.y:e.min.y,Ds.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ds)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gi extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const js=new I,Js=new I,ql=new pt,Yr=new ea,Ls=new os,za=new I,Zl=new I;class rs extends yt{constructor(e=new xt,t=new gi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)js.fromBufferAttribute(t,r-1),Js.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=js.distanceTo(Js);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;ql.copy(r).invert(),Yr.copy(e.ray).applyMatrix4(ql);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const d=u.getX(x),C=u.getX(x+1),w=Us(this,e,Yr,c,d,C,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(m),d=Us(this,e,Yr,c,x,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=m,p=g-1;x<p;x+=l){const d=Us(this,e,Yr,c,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=Us(this,e,Yr,c,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Us(i,e,t,n,r,s,o){const a=i.geometry.attributes.position;if(js.fromBufferAttribute(a,r),Js.fromBufferAttribute(a,s),t.distanceSqToSegment(js,Js,za,Zl)>n)return;za.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(za);if(!(l<e.near||l>e.far))return{distance:l,point:Zl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const $l=new I,Kl=new I;class rl extends rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)$l.fromBufferAttribute(t,r),Kl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+$l.distanceTo(Kl);e.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rd extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jl=new pt,zo=new ea,Fs=new os,Ns=new I;class sd extends yt{constructor(e=new xt,t=new rd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Fs.radius+=s,e.ray.intersectsSphere(Fs)===!1)return;jl.copy(r).invert(),zo.copy(e.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=f,x=m;g<x;g++){const p=l.getX(g);Ns.fromBufferAttribute(h,p),Jl(Ns,p,c,r,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=f,x=m;g<x;g++)Ns.fromBufferAttribute(h,g),Jl(Ns,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jl(i,e,t,n,r,s,o){const a=zo.distanceSqToPoint(i);if(a<t){const c=new I;zo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class ss extends Ot{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Ot{constructor(e,t,n=fi,r,s,o,a=At,c=At,l,u=Jr,h=1){if(u!==Jr&&u!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sl extends xt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],m=[];let g=0;const x=[],p=n/2;let d=0;C(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Ge(h,3)),this.setAttribute("normal",new Ge(f,3)),this.setAttribute("uv",new Ge(m,2));function C(){const E=new I,L=new I;let P=0;const A=(t-e)/n;for(let O=0;O<=s;O++){const y=[],_=O/s,T=_*(t-e)+e;for(let F=0;F<=r;F++){const D=F/r,B=D*c+a,V=Math.sin(B),X=Math.cos(B);L.x=T*V,L.y=-_*n+p,L.z=T*X,h.push(L.x,L.y,L.z),E.set(V,A,X).normalize(),f.push(E.x,E.y,E.z),m.push(D,1-_),y.push(g++)}x.push(y)}for(let O=0;O<r;O++)for(let y=0;y<s;y++){const _=x[y][O],T=x[y+1][O],F=x[y+1][O+1],D=x[y][O+1];(e>0||y!==0)&&(u.push(_,T,D),P+=3),(t>0||y!==s-1)&&(u.push(T,F,D),P+=3)}l.addGroup(d,P,0),d+=P}function w(E){const L=g,P=new Ze,A=new I;let O=0;const y=E===!0?e:t,_=E===!0?1:-1;for(let F=1;F<=r;F++)h.push(0,p*_,0),f.push(0,_,0),m.push(.5,.5),g++;const T=g;for(let F=0;F<=r;F++){const B=F/r*c+a,V=Math.cos(B),X=Math.sin(B);A.x=y*X,A.y=p*_,A.z=y*V,h.push(A.x,A.y,A.z),f.push(0,_,0),P.x=V*.5+.5,P.y=X*.5*_+.5,m.push(P.x,P.y),g++}for(let F=0;F<r;F++){const D=L+F,B=T+F;E===!0?u.push(B,B+1,D):u.push(B+1,B,D),O+=3}l.addGroup(d,O,E===!0?1:2),d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=t/c,m=[],g=[],x=[],p=[];for(let d=0;d<u;d++){const C=d*f-o;for(let w=0;w<l;w++){const E=w*h-s;g.push(E,-C,0),x.push(0,0,1),p.push(w/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let C=0;C<a;C++){const w=C+l*d,E=C+l*(d+1),L=C+1+l*(d+1),P=C+1+l*d;m.push(w,E,P),m.push(E,L,P)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.width,e.height,e.widthSegments,e.heightSegments)}}class ra extends xt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,m=[],g=[],x=[],p=[];for(let d=0;d<=n;d++){const C=[],w=d/n;let E=0;d===0&&o===0?E=.5/t:d===n&&c===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const P=L/t;h.x=-e*Math.cos(r+P*s)*Math.sin(o+w*a),h.y=e*Math.cos(o+w*a),h.z=e*Math.sin(r+P*s)*Math.sin(o+w*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(P+E,1-w),C.push(l++)}u.push(C)}for(let d=0;d<n;d++)for(let C=0;C<t;C++){const w=u[d][C+1],E=u[d][C],L=u[d+1][C],P=u[d+1][C+1];(d!==0||o>0)&&m.push(w,E,P),(d!==n-1||c<Math.PI)&&m.push(E,L,P)}this.setIndex(m),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(x,3)),this.setAttribute("uv",new Ge(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ad extends xt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new I,s=new I;if(e.index!==null){const o=e.attributes.position,a=e.index;let c=e.groups;c.length===0&&(c=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,u=c.length;l<u;++l){const h=c[l],f=h.start,m=h.count;for(let g=f,x=f+m;g<x;g+=3)for(let p=0;p<3;p++){const d=a.getX(g+p),C=a.getX(g+(p+1)%3);r.fromBufferAttribute(o,d),s.fromBufferAttribute(o,C),Ql(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,c=o.count/3;a<c;a++)for(let l=0;l<3;l++){const u=3*a+l,h=3*a+(l+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,h),Ql(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ge(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Ql(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}class Qi extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class od extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=th,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ld extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ha={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class cd{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const ud=new cd;class al{constructor(e){this.manager=e!==void 0?e:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}al.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi=new WeakMap;class hd extends al{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Ha.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Wi.get(o);h===void 0&&(h=[],Wi.set(o,h)),h.push({onLoad:t,onError:r})}return o}const a=ns("img");function c(){u(),t&&t(this);const h=Wi.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onLoad&&m.onLoad(this)}Wi.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),Ha.remove(`image:${e}`);const f=Wi.get(this)||[];for(let m=0;m<f.length;m++){const g=f[m];g.onError&&g.onError(h)}Wi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ha.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class su extends al{constructor(e){super(e)}load(e,t,n,r){const s=new Ot,o=new hd(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ol extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dd extends ol{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Va=new pt,ec=new I,tc=new I;class fd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(ec),tc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tc),t.updateMatrixWorld(),Va.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Va)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class au extends el{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pd extends fd{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nc extends ol{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new pd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class md extends ol{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gd extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _d{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const ic=new pt;class vd{constructor(e,t,n=0,r=1/0){this.ray=new ea(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ic.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(e,t=!0,n=[]){return Ho(e,this,n,t),n.sort(rc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ho(e[r],this,n,t);return n.sort(rc),n}}function rc(i,e){return i.distance-e.distance}function Ho(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Ho(s[o],e,t,!0)}}class xd extends rl{constructor(e=10,t=10,n=4473924,r=8947848){n=new Be(n),r=new Be(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const x=f===s?n:r;x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3,x.toArray(l,m),m+=3}const u=new xt;u.setAttribute("position",new Ge(c,3)),u.setAttribute("color",new Ge(l,3));const h=new gi({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const sc=new I,Os=new I,ac=new I;class Md extends yt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new xt;r.setAttribute("position",new Ge([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new gi({fog:!1,toneMapped:!1});this.lightPlane=new rs(r,s),this.add(this.lightPlane),r=new xt,r.setAttribute("position",new Ge([0,0,0,0,0,1],3)),this.targetLine=new rs(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),sc.setFromMatrixPosition(this.light.matrixWorld),Os.setFromMatrixPosition(this.light.target.matrixWorld),ac.subVectors(Os,sc),this.lightPlane.lookAt(Os),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Os),this.targetLine.scale.z=ac.length()}}const Bs=new I,Et=new el;class yd extends rl{constructor(e){const t=new xt,n=new gi({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(g,x){c(g),c(x)}function c(g){r.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(r.length/3-1)}t.setAttribute("position",new Ge(r,3)),t.setAttribute("color",new Ge(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const l=new Be(16755200),u=new Be(16711680),h=new Be(43775),f=new Be(16777215),m=new Be(3355443);this.setColors(l,u,h,f,m)}setColors(e,t,n,r,s){const a=this.geometry.getAttribute("color");return a.setXYZ(0,e.r,e.g,e.b),a.setXYZ(1,e.r,e.g,e.b),a.setXYZ(2,e.r,e.g,e.b),a.setXYZ(3,e.r,e.g,e.b),a.setXYZ(4,e.r,e.g,e.b),a.setXYZ(5,e.r,e.g,e.b),a.setXYZ(6,e.r,e.g,e.b),a.setXYZ(7,e.r,e.g,e.b),a.setXYZ(8,e.r,e.g,e.b),a.setXYZ(9,e.r,e.g,e.b),a.setXYZ(10,e.r,e.g,e.b),a.setXYZ(11,e.r,e.g,e.b),a.setXYZ(12,e.r,e.g,e.b),a.setXYZ(13,e.r,e.g,e.b),a.setXYZ(14,e.r,e.g,e.b),a.setXYZ(15,e.r,e.g,e.b),a.setXYZ(16,e.r,e.g,e.b),a.setXYZ(17,e.r,e.g,e.b),a.setXYZ(18,e.r,e.g,e.b),a.setXYZ(19,e.r,e.g,e.b),a.setXYZ(20,e.r,e.g,e.b),a.setXYZ(21,e.r,e.g,e.b),a.setXYZ(22,e.r,e.g,e.b),a.setXYZ(23,e.r,e.g,e.b),a.setXYZ(24,t.r,t.g,t.b),a.setXYZ(25,t.r,t.g,t.b),a.setXYZ(26,t.r,t.g,t.b),a.setXYZ(27,t.r,t.g,t.b),a.setXYZ(28,t.r,t.g,t.b),a.setXYZ(29,t.r,t.g,t.b),a.setXYZ(30,t.r,t.g,t.b),a.setXYZ(31,t.r,t.g,t.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,r.r,r.g,r.b),a.setXYZ(39,r.r,r.g,r.b),a.setXYZ(40,s.r,s.g,s.b),a.setXYZ(41,s.r,s.g,s.b),a.setXYZ(42,s.r,s.g,s.b),a.setXYZ(43,s.r,s.g,s.b),a.setXYZ(44,s.r,s.g,s.b),a.setXYZ(45,s.r,s.g,s.b),a.setXYZ(46,s.r,s.g,s.b),a.setXYZ(47,s.r,s.g,s.b),a.setXYZ(48,s.r,s.g,s.b),a.setXYZ(49,s.r,s.g,s.b),a.needsUpdate=!0,this}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;let s,o;if(Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)s=1,o=0;else if(this.camera.coordinateSystem===yn)s=-1,o=1;else if(this.camera.coordinateSystem===es)s=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);wt("c",t,e,Et,0,0,s),wt("t",t,e,Et,0,0,o),wt("n1",t,e,Et,-n,-r,s),wt("n2",t,e,Et,n,-r,s),wt("n3",t,e,Et,-n,r,s),wt("n4",t,e,Et,n,r,s),wt("f1",t,e,Et,-n,-r,o),wt("f2",t,e,Et,n,-r,o),wt("f3",t,e,Et,-n,r,o),wt("f4",t,e,Et,n,r,o),wt("u1",t,e,Et,n*.7,r*1.1,s),wt("u2",t,e,Et,-n*.7,r*1.1,s),wt("u3",t,e,Et,0,r*2,s),wt("cf1",t,e,Et,-n,0,o),wt("cf2",t,e,Et,n,0,o),wt("cf3",t,e,Et,0,-r,o),wt("cf4",t,e,Et,0,r,o),wt("cn1",t,e,Et,-n,0,s),wt("cn2",t,e,Et,n,0,s),wt("cn3",t,e,Et,0,-r,s),wt("cn4",t,e,Et,0,r,s),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function wt(i,e,t,n,r,s,o){Bs.set(r,s,o).unproject(n);const a=e[i];if(a!==void 0){const c=t.getAttribute("position");for(let l=0,u=a.length;l<u;l++)c.setXYZ(a[l],Bs.x,Bs.y,Bs.z)}}function oc(i,e,t,n){const r=Sd(n);switch(t){case Gc:return i*e;case Xc:return i*e/r.components*r.byteLength;case Zo:return i*e/r.components*r.byteLength;case Yc:return i*e*2/r.components*r.byteLength;case $o:return i*e*2/r.components*r.byteLength;case Wc:return i*e*3/r.components*r.byteLength;case $t:return i*e*4/r.components*r.byteLength;case Ko:return i*e*4/r.components*r.byteLength;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:case fo:return Math.max(i,16)*Math.max(e,8)/4;case co:case ho:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Io:case Do:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Uo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case No:case Oo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sd(i){switch(i){case bn:case zc:return{byteLength:1,components:1};case Kr:case Hc:case as:return{byteLength:2,components:1};case Yo:case qo:return{byteLength:2,components:4};case fi:case Xo:case Mn:return{byteLength:4,components:1};case Vc:case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ed(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],x=h[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const x=h[m];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Td=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ad=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pd=`#ifdef USE_AOMAP
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
#endif`,Id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dd=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Od=`#ifdef USE_IRIDESCENCE
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
#endif`,Bd=`#ifdef USE_BUMPMAP
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
#endif`,zd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Zd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,ff=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gf=`uniform bool receiveShadow;
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
#endif`,_f=`#ifdef USE_ENVMAP
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,bf=`
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
#endif`,Tf=`#if defined( RE_IndirectDiffuse )
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
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Af=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qf=`#ifdef USE_NORMALMAP
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
#endif`,Zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$f=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ap=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cp=`float getShadowMask() {
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
}`,up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hp=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_p=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
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
#endif`,xp=`#ifdef USE_TRANSMISSION
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
#endif`,Mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tp=`uniform sampler2D t2D;
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ap=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`#include <common>
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
}`,Ip=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Lp=`#define DISTANCE
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`uniform float scale;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Bp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,kp=`#define MATCAP
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,Yp=`#define PHONG
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
}`,qp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,$p=`#define STANDARD
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
}`,Kp=`#define TOON
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
}`,jp=`#define TOON
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
}`,Jp=`uniform float size;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,tm=`uniform vec3 color;
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
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:bd,alphahash_pars_fragment:Td,alphamap_fragment:wd,alphamap_pars_fragment:Ad,alphatest_fragment:Rd,alphatest_pars_fragment:Cd,aomap_fragment:Pd,aomap_pars_fragment:Id,batching_pars_vertex:Dd,batching_vertex:Ld,begin_vertex:Ud,beginnormal_vertex:Fd,bsdfs:Nd,iridescence_fragment:Od,bumpmap_pars_fragment:Bd,clipping_planes_fragment:zd,clipping_planes_pars_fragment:Hd,clipping_planes_pars_vertex:Vd,clipping_planes_vertex:kd,color_fragment:Gd,color_pars_fragment:Wd,color_pars_vertex:Xd,color_vertex:Yd,common:qd,cube_uv_reflection_fragment:Zd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Kd,displacementmap_vertex:jd,emissivemap_fragment:Jd,emissivemap_pars_fragment:Qd,colorspace_fragment:ef,colorspace_pars_fragment:tf,envmap_fragment:nf,envmap_common_pars_fragment:rf,envmap_pars_fragment:sf,envmap_pars_vertex:af,envmap_physical_pars_fragment:_f,envmap_vertex:of,fog_vertex:lf,fog_pars_vertex:cf,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:df,lightmap_pars_fragment:ff,lights_lambert_fragment:pf,lights_lambert_pars_fragment:mf,lights_pars_begin:gf,lights_toon_fragment:vf,lights_toon_pars_fragment:xf,lights_phong_fragment:Mf,lights_phong_pars_fragment:yf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:bf,lights_fragment_maps:Tf,lights_fragment_end:wf,logdepthbuf_fragment:Af,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Pf,map_fragment:If,map_pars_fragment:Df,map_particle_fragment:Lf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Ff,metalnessmap_pars_fragment:Nf,morphinstance_vertex:Of,morphcolor_vertex:Bf,morphnormal_vertex:zf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:kf,normal_fragment_maps:Gf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:Yf,normalmap_pars_fragment:qf,clearcoat_normal_fragment_begin:Zf,clearcoat_normal_fragment_maps:$f,clearcoat_pars_fragment:Kf,iridescence_pars_fragment:jf,opaque_fragment:Jf,packing:Qf,premultiplied_alpha_fragment:ep,project_vertex:tp,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:ap,shadowmap_pars_vertex:op,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:up,skinning_pars_vertex:hp,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:_p,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:Mp,uv_pars_vertex:yp,uv_vertex:Sp,worldpos_vertex:Ep,background_vert:bp,background_frag:Tp,backgroundCube_vert:wp,backgroundCube_frag:Ap,cube_vert:Rp,cube_frag:Cp,depth_vert:Pp,depth_frag:Ip,distanceRGBA_vert:Dp,distanceRGBA_frag:Lp,equirect_vert:Up,equirect_frag:Fp,linedashed_vert:Np,linedashed_frag:Op,meshbasic_vert:Bp,meshbasic_frag:zp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:kp,meshmatcap_frag:Gp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:Yp,meshphong_frag:qp,meshphysical_vert:Zp,meshphysical_frag:$p,meshtoon_vert:Kp,meshtoon_frag:jp,points_vert:Jp,points_frag:Qp,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},pe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Sn={basic:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Be(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:kt([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:kt([pe.lights,pe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Sn.physical={uniforms:kt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const zs={r:0,b:0,g:0},si=new Tn,rm=new pt;function sm(i,e,t,n,r,s,o){const a=new Be(0);let c=s===!0?0:1,l,u,h=null,f=0,m=null;function g(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const L=g(w);L===null?d(a,c):L&&L.isColor&&(d(L,1),E=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,E){const L=g(E);L&&(L.isCubeTexture||L.mapping===Qs)?(u===void 0&&(u=new Tt(new nr(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Ji(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),si.copy(E.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rm.makeRotationFromEuler(si)),u.material.toneMapped=at.getTransfer(L.colorSpace)!==gt,(h!==L||f!==L.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,m=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Tt(new ia(2,2),new tn({name:"BackgroundMaterial",uniforms:Ji(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=at.getTransfer(L.colorSpace)!==gt,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,f=L.version,m=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function d(w,E){w.getRGB(zs,eu(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,E,o)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),c=E,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,d(a,c)},render:x,addToRenderList:p,dispose:C}}function am(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(_,T,F,D,B){let V=!1;const X=h(D,F,T);s!==X&&(s=X,l(s.object)),V=m(_,D,F,B),V&&g(_,D,F,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,E(_,T,F,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,T,F){const D=F.wireframe===!0;let B=n[_.id];B===void 0&&(B={},n[_.id]=B);let V=B[T.id];V===void 0&&(V={},B[T.id]=V);let X=V[D];return X===void 0&&(X=f(c()),V[D]=X),X}function f(_){const T=[],F=[],D=[];for(let B=0;B<t;B++)T[B]=0,F[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:D,object:_,attributes:{},index:null}}function m(_,T,F,D){const B=s.attributes,V=T.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){const Q=B[H];let le=V[H];if(le===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(le=_.instanceColor)),Q===void 0||Q.attribute!==le||le&&Q.data!==le.data)return!0;X++}return s.attributesNum!==X||s.index!==D}function g(_,T,F,D){const B={},V=T.attributes;let X=0;const K=F.getAttributes();for(const H in K)if(K[H].location>=0){let Q=V[H];Q===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const le={};le.attribute=Q,Q&&Q.data&&(le.data=Q.data),B[H]=le,X++}s.attributes=B,s.attributesNum=X,s.index=D}function x(){const _=s.newAttributes;for(let T=0,F=_.length;T<F;T++)_[T]=0}function p(_){d(_,0)}function d(_,T){const F=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;F[_]=1,D[_]===0&&(i.enableVertexAttribArray(_),D[_]=1),B[_]!==T&&(i.vertexAttribDivisor(_,T),B[_]=T)}function C(){const _=s.newAttributes,T=s.enabledAttributes;for(let F=0,D=T.length;F<D;F++)T[F]!==_[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function w(_,T,F,D,B,V,X){X===!0?i.vertexAttribIPointer(_,T,F,B,V):i.vertexAttribPointer(_,T,F,D,B,V)}function E(_,T,F,D){x();const B=D.attributes,V=F.getAttributes(),X=T.defaultAttributeValues;for(const K in V){const H=V[K];if(H.location>=0){let ie=B[K];if(ie===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor)),ie!==void 0){const Q=ie.normalized,le=ie.itemSize,He=e.get(ie);if(He===void 0)continue;const We=He.buffer,ot=He.type,Ve=He.bytesPerElement,Z=ot===i.INT||ot===i.UNSIGNED_INT||ie.gpuType===Xo;if(ie.isInterleavedBufferAttribute){const j=ie.data,ue=j.stride,Re=ie.offset;if(j.isInstancedInterleavedBuffer){for(let ye=0;ye<H.locationSize;ye++)d(H.location+ye,j.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<H.locationSize;ye++)p(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ye=0;ye<H.locationSize;ye++)w(H.location+ye,le/H.locationSize,ot,Q,ue*Ve,(Re+le/H.locationSize*ye)*Ve,Z)}else{if(ie.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)d(H.location+j,ie.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let j=0;j<H.locationSize;j++)p(H.location+j);i.bindBuffer(i.ARRAY_BUFFER,We);for(let j=0;j<H.locationSize;j++)w(H.location+j,le/H.locationSize,ot,Q,le*Ve,le/H.locationSize*j*Ve,Z)}}else if(X!==void 0){const Q=X[K];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}C()}function L(){O();for(const _ in n){const T=n[_];for(const F in T){const D=T[F];for(const B in D)u(D[B].object),delete D[B];delete T[F]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;const T=n[_.id];for(const F in T){const D=T[F];for(const B in D)u(D[B].object),delete D[B];delete T[F]}delete n[_.id]}function A(_){for(const T in n){const F=n[T];if(F[_.id]===void 0)continue;const D=F[_.id];for(const B in D)u(D[B].object),delete D[B];delete F[_.id]}}function O(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:y,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:C}}function om(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function c(l,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==$t&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const O=A===as&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mn&&!O)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:C,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:L,maxSamples:P}}function cm(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new li,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||r;return r=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const C=s?0:n,w=C*4;let E=d.clippingState||null;c.value=E,E=u(g,f,w,m);for(let L=0;L!==w;++L)E[L]=t[L];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const d=m+x*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(p===null||p.length<d)&&(p=new Float32Array(d));for(let w=0,E=m;w!==x;++w,E+=4)o.copy(h[w]).applyMatrix4(C,a),o.normal.toArray(p,E),p[E+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function um(i){let e=new WeakMap;function t(o,a){return a===ao?o.mapping=Ki:a===oo&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===oo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new jh(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const qi=4,lc=[.125,.215,.35,.446,.526,.582],hi=20,ka=new au,cc=new Be;let Ga=null,Wa=0,Xa=0,Ya=!1;const ci=(1+Math.sqrt(5))/2,Xi=1/ci,uc=[new I(-ci,Xi,0),new I(ci,Xi,0),new I(-Xi,0,ci),new I(Xi,0,ci),new I(0,ci,-Xi),new I(0,ci,Xi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],hm=new I;class hc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=hm}=s;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,Xa),this._renderer.xr.enabled=Ya,e.scissorTest=!1,Hs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),Xa=this._renderer.getActiveMipmapLevel(),Ya=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:as,format:$t,colorSpace:pi,depthBuffer:!1},r=dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dm(s)),this._blurMaterial=fm(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,ka)}_sceneToCubeUV(e,t,n,r,s){const c=new an(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(cc),h.toneMapping=En,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new gn({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),p=new Tt(new nr,x);let d=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,d=!0):(x.color.copy(cc),d=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));const L=this._cubeSize;Hs(r,E*L,w>2?L:0,L,L),h.setRenderTarget(r),d&&h.render(p,c),h.render(e,c)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=C}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ki||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Hs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ka)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uc[(r-s-1)%uc.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*hi-1),x=s/g,p=isFinite(s)?1+Math.floor(u*x):hi;p>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let C=0;for(let A=0;A<hi;++A){const O=A/x,y=Math.exp(-O*O/2);d.push(y),A===0?C+=y:A<p&&(C+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/C;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const E=this._sizeLods[r],L=3*E*(r>w-qi?r-w+qi:0),P=4*(this._cubeSize-E);Hs(t,L,P,3*E,2*E),c.setRenderTarget(t),c.render(h,ka)}}function dm(i){const e=[],t=[],n=[];let r=i;const s=i-qi+1+lc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-qi?c=lc[o-i+qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,x=3,p=2,d=1,C=new Float32Array(x*g*m),w=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let P=0;P<m;P++){const A=P%3*2/3-1,O=P>2?0:-1,y=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];C.set(y,x*g*P),w.set(f,p*g*P);const _=[P,P,P,P,P,P];E.set(_,d*g*P)}const L=new xt;L.setAttribute("position",new Wt(C,x)),L.setAttribute("uv",new Wt(w,p)),L.setAttribute("faceIndex",new Wt(E,d)),e.push(L),r>qi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dc(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fm(i,e,t){const n=new Float32Array(hi),r=new I(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ll(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function fc(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function pc(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function pm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ao||c===oo,u=c===Ki||c===ji;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hc(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new hc(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gm(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,g=h.attributes.position;let x=0;if(m!==null){const C=m.array;x=m.version;for(let w=0,E=C.length;w<E;w+=3){const L=C[w+0],P=C[w+1],A=C[w+2];f.push(L,P,P,A,A,L)}}else if(g!==void 0){const C=g.array;x=g.version;for(let w=0,E=C.length/3-1;w<E;w+=3){const L=w+0,P=w+1,A=w+2;f.push(L,P,P,A,A,L)}}else return;const p=new($c(f)?Qc:Jc)(f,1);p.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function _m(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function h(f,m,g,x){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,x,0,g);let d=0;for(let C=0;C<g;C++)d+=m[C]*x[C];t.update(d,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xm(i,e,t){const n=new WeakMap,r=new bt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let _=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var m=_;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let L=a.attributes.position.count*E,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*P*4*h),O=new Kc(A,L,P,h);O.type=Mn,O.needsUpdate=!0;const y=E*4;for(let T=0;T<h;T++){const F=d[T],D=C[T],B=w[T],V=L*P*4*T;for(let X=0;X<F.count;X++){const K=X*y;g===!0&&(r.fromBufferAttribute(F,X),A[V+K+0]=r.x,A[V+K+1]=r.y,A[V+K+2]=r.z,A[V+K+3]=0),x===!0&&(r.fromBufferAttribute(D,X),A[V+K+4]=r.x,A[V+K+5]=r.y,A[V+K+6]=r.z,A[V+K+7]=0),p===!0&&(r.fromBufferAttribute(B,X),A[V+K+8]=r.x,A[V+K+9]=r.y,A[V+K+10]=r.z,A[V+K+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:O,size:new Ze(L,P)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Mm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const lu=new Ot,mc=new iu(1,1),cu=new Kc,uu=new Uh,hu=new tu,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),Mc=new Float32Array(4);function ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=gc[r];if(s===void 0&&(s=new Float32Array(r),gc[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sa(i,e){let t=_c[e];t===void 0&&(t=new Int32Array(e),_c[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Dt(t,n)}}function wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),Dt(t,n)}}function Am(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Dt(t,n)}}function Rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=Zc,s=mc):s=lu,t.setTexture2D(e||s,r)}function Om(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||uu,r)}function Bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hu,r)}function zm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cu,r)}function Hm(i){switch(i){case 5126:return ym;case 35664:return Sm;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return wm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Dm;case 36294:return Lm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}function Vm(i,e){i.uniform1fv(this.addr,e)}function km(i,e){const t=ir(e,this.size,2);i.uniform2fv(this.addr,t)}function Gm(i,e){const t=ir(e,this.size,3);i.uniform3fv(this.addr,t)}function Wm(i,e){const t=ir(e,this.size,4);i.uniform4fv(this.addr,t)}function Xm(i,e){const t=ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ym(i,e){const t=ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qm(i,e){const t=ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zm(i,e){i.uniform1iv(this.addr,e)}function $m(i,e){i.uniform2iv(this.addr,e)}function Km(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Jm(i,e){i.uniform1uiv(this.addr,e)}function Qm(i,e){i.uniform2uiv(this.addr,e)}function eg(i,e){i.uniform3uiv(this.addr,e)}function tg(i,e){i.uniform4uiv(this.addr,e)}function ng(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||lu,s[o])}function ig(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||uu,s[o])}function rg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hu,s[o])}function sg(i,e,t){const n=this.cache,r=e.length,s=sa(t,r);It(n,s)||(i.uniform1iv(this.addr,s),Dt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cu,s[o])}function ag(i){switch(i){case 5126:return Vm;case 35664:return km;case 35665:return Gm;case 35666:return Wm;case 35674:return Xm;case 35675:return Ym;case 35676:return qm;case 5124:case 35670:return Zm;case 35667:case 35671:return $m;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Jm;case 36294:return Qm;case 36295:return eg;case 36296:return tg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return sg}}class og{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hm(t.type)}}class lg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ag(t.type)}}class cg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function yc(i,e){i.seq.push(e),i.map[e.id]=e}function ug(i,e,t){const n=i.name,r=n.length;for(qa.lastIndex=0;;){const s=qa.exec(n),o=qa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yc(t,l===void 0?new og(a,i,e):new lg(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new cg(a),yc(t,h)),t=h}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ug(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Sc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hg=37297;let dg=0;function fg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Ec=new $e;function pg(i){at._getMatrix(Ec,at.workingColorSpace,i);const e=`mat3( ${Ec.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case $s:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(e),a)}else return s}function mg(i,e){const t=pg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gg(i,e){let t;switch(e){case Zu:t="Linear";break;case $u:t="Reinhard";break;case Ku:t="Cineon";break;case Oc:t="ACESFilmic";break;case Ju:t="AgX";break;case Qu:t="Neutral";break;case ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vs=new I;function _g(){at.getLuminanceCoefficients(Vs);const i=Vs.x.toFixed(4),e=Vs.y.toFixed(4),t=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function xg(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qr(i){return i!==""}function Tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(yg,Eg)}const Sg=new Map;function Eg(i,e){let t=je[e];if(t===void 0){const n=Sg.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(bg,Tg)}function Tg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ki:case ji:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yu:e="ENVMAP_BLENDING_MIX";break;case qu:e="ENVMAP_BLENDING_ADD";break}return e}function Pg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ig(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wg(t),l=Ag(t),u=Rg(t),h=Cg(t),f=Pg(t),m=vg(t),g=xg(s),x=r.createProgram();let p,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),d.length>0&&(d+=`
`)):(p=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),d=[Rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?je.tonemapping_pars_fragment:"",t.toneMapping!==En?gg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,mg("linearToOutputTexel",t.outputColorSpace),_g(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),o=Vo(o),o=Tc(o,t),o=wc(o,t),a=Vo(a),a=Tc(a,t),a=wc(a,t),o=Ac(o),a=Ac(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=C+p+o,E=C+d+a,L=Sc(r,r.VERTEX_SHADER,w),P=Sc(r,r.FRAGMENT_SHADER,E);r.attachShader(x,L),r.attachShader(x,P),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(T){if(i.debug.checkShaderErrors){const F=r.getProgramInfoLog(x)||"",D=r.getShaderInfoLog(L)||"",B=r.getShaderInfoLog(P)||"",V=F.trim(),X=D.trim(),K=B.trim();let H=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,P);else{const Q=bc(r,L,"vertex"),le=bc(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+V+`
`+Q+`
`+le)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(X===""||K==="")&&(ie=!1);ie&&(T.diagnostics={runnable:H,programLog:V,vertexShader:{log:X,prefix:p},fragmentShader:{log:K,prefix:d}})}r.deleteShader(L),r.deleteShader(P),O=new qs(r,x),y=Mg(r,x)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,hg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let Dg=0;class Lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ug(e),t.set(e,n)),n}}class Ug{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function Fg(i,e,t,n,r,s,o){const a=new Qo,c=new Lg,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,_,T,F,D){const B=F.fog,V=D.geometry,X=y.isMeshStandardMaterial?F.environment:null,K=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),H=K&&K.mapping===Qs?K.image.height:null,ie=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const Q=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,le=Q!==void 0?Q.length:0;let He=0;V.morphAttributes.position!==void 0&&(He=1),V.morphAttributes.normal!==void 0&&(He=2),V.morphAttributes.color!==void 0&&(He=3);let We,ot,Ve,Z;if(ie){const et=Sn[ie];We=et.vertexShader,ot=et.fragmentShader}else We=y.vertexShader,ot=y.fragmentShader,c.update(y),Ve=c.getVertexShaderID(y),Z=c.getFragmentShaderID(y);const j=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Re=D.isInstancedMesh===!0,ye=D.isBatchedMesh===!0,ke=!!y.map,Je=!!y.matcap,R=!!K,Xe=!!y.aoMap,Pe=!!y.lightMap,Ce=!!y.bumpMap,_e=!!y.normalMap,qe=!!y.displacementMap,me=!!y.emissiveMap,Fe=!!y.metalnessMap,mt=!!y.roughnessMap,nt=y.anisotropy>0,b=y.clearcoat>0,v=y.dispersion>0,k=y.iridescence>0,$=y.sheen>0,ee=y.transmission>0,Y=nt&&!!y.anisotropyMap,Ee=b&&!!y.clearcoatMap,oe=b&&!!y.clearcoatNormalMap,ge=b&&!!y.clearcoatRoughnessMap,Me=k&&!!y.iridescenceMap,se=k&&!!y.iridescenceThicknessMap,he=$&&!!y.sheenColorMap,Oe=$&&!!y.sheenRoughnessMap,we=!!y.specularMap,de=!!y.specularColorMap,Ye=!!y.specularIntensityMap,S=ee&&!!y.transmissionMap,q=ee&&!!y.thicknessMap,ce=!!y.gradientMap,Se=!!y.alphaMap,re=y.alphaTest>0,J=!!y.alphaHash,be=!!y.extensions;let ze=En;y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ze=i.toneMapping);const st={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:ot,defines:y.defines,customVertexShaderID:Ve,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ye,batchingColor:ye&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:pi,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:Je,envMap:R,envMapMode:R&&K.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Pe,bumpMap:Ce,normalMap:_e,displacementMap:f&&qe,emissiveMap:me,normalMapObjectSpace:_e&&y.normalMapType===ih,normalMapTangentSpace:_e&&y.normalMapType===qc,metalnessMap:Fe,roughnessMap:mt,anisotropy:nt,anisotropyMap:Y,clearcoat:b,clearcoatMap:Ee,clearcoatNormalMap:oe,clearcoatRoughnessMap:ge,dispersion:v,iridescence:k,iridescenceMap:Me,iridescenceThicknessMap:se,sheen:$,sheenColorMap:he,sheenRoughnessMap:Oe,specularMap:we,specularColorMap:de,specularIntensityMap:Ye,transmission:ee,transmissionMap:S,thicknessMap:q,gradientMap:ce,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:re,alphaHash:J,combine:y.combine,mapUv:ke&&x(y.map.channel),aoMapUv:Xe&&x(y.aoMap.channel),lightMapUv:Pe&&x(y.lightMap.channel),bumpMapUv:Ce&&x(y.bumpMap.channel),normalMapUv:_e&&x(y.normalMap.channel),displacementMapUv:qe&&x(y.displacementMap.channel),emissiveMapUv:me&&x(y.emissiveMap.channel),metalnessMapUv:Fe&&x(y.metalnessMap.channel),roughnessMapUv:mt&&x(y.roughnessMap.channel),anisotropyMapUv:Y&&x(y.anisotropyMap.channel),clearcoatMapUv:Ee&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(y.sheenRoughnessMap.channel),specularMapUv:we&&x(y.specularMap.channel),specularColorMapUv:de&&x(y.specularColorMap.channel),specularIntensityMapUv:Ye&&x(y.specularIntensityMap.channel),transmissionMapUv:S&&x(y.transmissionMap.channel),thicknessMapUv:q&&x(y.thicknessMap.channel),alphaMapUv:Se&&x(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(_e||nt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ke||Se),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:He,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&at.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&at.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pt,flipSided:y.side===Kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function d(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)_.push(T),_.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(C(_,y),w(_,y),_.push(i.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function C(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function w(y,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const _=g[y.type];let T;if(_){const F=Sn[_];T=qh.clone(F.uniforms)}else T=y.uniforms;return T}function L(y,_){let T;for(let F=0,D=u.length;F<D;F++){const B=u[F];if(B.cacheKey===_){T=B,++T.usedTimes;break}}return T===void 0&&(T=new Ig(i,_,y,s),u.push(T)),T}function P(y){if(--y.usedTimes===0){const _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function A(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:P,releaseShaderCache:A,programs:u,dispose:O}}function Ng(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Og(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pc(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,m,g,x,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:x,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=x,d.group=p),e++,d}function a(h,f,m,g,x,p){const d=o(h,f,m,g,x,p);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(h,f,m,g,x,p){const d=o(h,f,m,g,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(h,f){t.length>1&&t.sort(h||Og),n.length>1&&n.sort(f||Cc),r.length>1&&r.sort(f||Cc)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function Bg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Pc,i.set(n,[o])):r>=s.length?(o=new Pc,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Be};break;case"SpotLight":t={position:new I,direction:new I,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Hg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Vg=0;function kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gg(i){const e=new zg,t=Hg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new pt,o=new pt;function a(l){let u=0,h=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,g=0,x=0,p=0,d=0,C=0,w=0,E=0,L=0,P=0,A=0;l.sort(kg);for(let y=0,_=l.length;y<_;y++){const T=l[y],F=T.color,D=T.intensity,B=T.distance,V=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=F.r*D,h+=F.g*D,f+=F.b*D;else if(T.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(T.sh.coefficients[X],D);A++}else if(T.isDirectionalLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const K=T.shadow,H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=V,n.directionalShadowMatrix[m]=T.shadow.matrix,C++}n.directional[m]=X,m++}else if(T.isSpotLight){const X=e.get(T);X.position.setFromMatrixPosition(T.matrixWorld),X.color.copy(F).multiplyScalar(D),X.distance=B,X.coneCos=Math.cos(T.angle),X.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),X.decay=T.decay,n.spot[x]=X;const K=T.shadow;if(T.map&&(n.spotLightMap[L]=T.map,L++,K.updateMatrices(T),T.castShadow&&P++),n.spotLightMatrix[x]=K.matrix,T.castShadow){const H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=V,E++}x++}else if(T.isRectAreaLight){const X=e.get(T);X.color.copy(F).multiplyScalar(D),X.halfWidth.set(T.width*.5,0,0),X.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=X,p++}else if(T.isPointLight){const X=e.get(T);if(X.color.copy(T.color).multiplyScalar(T.intensity),X.distance=T.distance,X.decay=T.decay,T.castShadow){const K=T.shadow,H=t.get(T);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=X,g++}else if(T.isHemisphereLight){const X=e.get(T);X.skyColor.copy(T.color).multiplyScalar(D),X.groundColor.copy(T.groundColor).multiplyScalar(D),n.hemi[d]=X,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==C||O.numPointShadows!==w||O.numSpotShadows!==E||O.numSpotMaps!==L||O.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=A,O.directionalLength=m,O.pointLength=g,O.spotLength=x,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=C,O.numPointShadows=w,O.numSpotShadows=E,O.numSpotMaps=L,O.numLightProbes=A,n.version=Vg++)}function c(l,u){let h=0,f=0,m=0,g=0,x=0;const p=u.matrixWorldInverse;for(let d=0,C=l.length;d<C;d++){const w=l[d];if(w.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(w.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function Ic(i){const e=new Gg(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Wg(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ic(i),e.set(r,[a])):s>=o.length?(a=new Ic(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yg=`uniform sampler2D shadow_pass;
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
}`;function qg(i,e,t){let n=new na;const r=new Ze,s=new Ze,o=new bt,a=new od({depthPacking:nh}),c=new ld,l={},u=t.maxTextureSize,h={[Zn]:Kt,[Kt]:Zn,[Pt]:Pt},f=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Xg,fragmentShader:Yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new xt;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let d=this.type;this.render=function(P,A,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const y=i.getRenderTarget(),_=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),F=i.state;F.setBlending(qn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const D=d!==Dn&&this.type===Dn,B=d===Dn&&this.type!==Dn;for(let V=0,X=P.length;V<X;V++){const K=P[V],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const ie=H.getFrameExtents();if(r.multiply(ie),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||D===!0||B===!0){const le=this.type!==Dn?{minFilter:At,magFilter:At}:{};H.map!==null&&H.map.dispose(),H.map=new mi(r.x,r.y,le),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const Q=H.getViewportCount();for(let le=0;le<Q;le++){const He=H.getViewport(le);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),F.viewport(o),H.updateMatrices(K,le),n=H.getFrustum(),E(A,O,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&C(H,O),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,_,T)};function C(P,A){const O=e.update(x);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new mi(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,O,f,x,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,O,m,x,null)}function w(P,A,O,y){let _=null;const T=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(T!==void 0)_=T;else if(_=O.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const F=_.uuid,D=A.uuid;let B=l[F];B===void 0&&(B={},l[F]=B);let V=B[D];V===void 0&&(V=_.clone(),B[D]=V,A.addEventListener("dispose",L)),_=V}if(_.visible=A.visible,_.wireframe=A.wireframe,y===Dn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,O.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=O}return _}function E(P,A,O,y,_){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===Dn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const D=e.update(P),B=P.material;if(Array.isArray(B)){const V=D.groups;for(let X=0,K=V.length;X<K;X++){const H=V[X],ie=B[H.materialIndex];if(ie&&ie.visible){const Q=w(P,ie,y,_);P.onBeforeShadow(i,P,A,O,D,Q,H),i.renderBufferDirect(O,null,D,Q,P,H),P.onAfterShadow(i,P,A,O,D,Q,H)}}}else if(B.visible){const V=w(P,B,y,_);P.onBeforeShadow(i,P,A,O,D,V,null),i.renderBufferDirect(O,null,D,V,P,null),P.onAfterShadow(i,P,A,O,D,V,null)}}const F=P.children;for(let D=0,B=F.length;D<B;D++)E(F[D],A,O,y,_)}function L(P){P.target.removeEventListener("dispose",L);for(const O in l){const y=l[O],_=P.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const Zg={[Qa]:eo,[to]:ro,[no]:so,[$i]:io,[eo]:Qa,[ro]:to,[so]:no,[io]:$i};function $g(i,e){function t(){let S=!1;const q=new bt;let ce=null;const Se=new bt(0,0,0,0);return{setMask:function(re){ce!==re&&!S&&(i.colorMask(re,re,re,re),ce=re)},setLocked:function(re){S=re},setClear:function(re,J,be,ze,st){st===!0&&(re*=ze,J*=ze,be*=ze),q.set(re,J,be,ze),Se.equals(q)===!1&&(i.clearColor(re,J,be,ze),Se.copy(q))},reset:function(){S=!1,ce=null,Se.set(-1,0,0,0)}}}function n(){let S=!1,q=!1,ce=null,Se=null,re=null;return{setReversed:function(J){if(q!==J){const be=e.get("EXT_clip_control");J?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),q=J;const ze=re;re=null,this.setClear(ze)}},getReversed:function(){return q},setTest:function(J){J?j(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(J){ce!==J&&!S&&(i.depthMask(J),ce=J)},setFunc:function(J){if(q&&(J=Zg[J]),Se!==J){switch(J){case Qa:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=J}},setLocked:function(J){S=J},setClear:function(J){re!==J&&(q&&(J=1-J),i.clearDepth(J),re=J)},reset:function(){S=!1,ce=null,Se=null,re=null,q=!1}}}function r(){let S=!1,q=null,ce=null,Se=null,re=null,J=null,be=null,ze=null,st=null;return{setTest:function(et){S||(et?j(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(et){q!==et&&!S&&(i.stencilMask(et),q=et)},setFunc:function(et,jt,Yt){(ce!==et||Se!==jt||re!==Yt)&&(i.stencilFunc(et,jt,Yt),ce=et,Se=jt,re=Yt)},setOp:function(et,jt,Yt){(J!==et||be!==jt||ze!==Yt)&&(i.stencilOp(et,jt,Yt),J=et,be=jt,ze=Yt)},setLocked:function(et){S=et},setClear:function(et){st!==et&&(i.clearStencil(et),st=et)},reset:function(){S=!1,q=null,ce=null,Se=null,re=null,J=null,be=null,ze=null,st=null}}}const s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,C=null,w=null,E=null,L=null,P=null,A=new Be(0,0,0),O=0,y=!1,_=null,T=null,F=null,D=null,B=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,K=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=K>=2);let ie=null,Q={};const le=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),We=new bt().fromArray(le),ot=new bt().fromArray(He);function Ve(S,q,ce,Se){const re=new Uint8Array(4),J=i.createTexture();i.bindTexture(S,J),i.texParameteri(S,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(S,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ce;be++)S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(q+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return J}const Z={};Z[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc($i),Ce(!1),_e(Sl),j(i.CULL_FACE),Xe(qn);function j(S){u[S]!==!0&&(i.enable(S),u[S]=!0)}function ue(S){u[S]!==!1&&(i.disable(S),u[S]=!1)}function Re(S,q){return h[S]!==q?(i.bindFramebuffer(S,q),h[S]=q,S===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=q),S===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=q),!0):!1}function ye(S,q){let ce=m,Se=!1;if(S){ce=f.get(q),ce===void 0&&(ce=[],f.set(q,ce));const re=S.textures;if(ce.length!==re.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let J=0,be=re.length;J<be;J++)ce[J]=i.COLOR_ATTACHMENT0+J;ce.length=re.length,Se=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ce)}function ke(S){return g!==S?(i.useProgram(S),g=S,!0):!1}const Je={[ui]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Pu]:i.FUNC_REVERSE_SUBTRACT};Je[Iu]=i.MIN,Je[Du]=i.MAX;const R={[Lu]:i.ZERO,[Uu]:i.ONE,[Fu]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[zu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[Hu]:i.ONE_MINUS_DST_COLOR,[Bu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Wu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(S,q,ce,Se,re,J,be,ze,st,et){if(S===qn){x===!0&&(ue(i.BLEND),x=!1);return}if(x===!1&&(j(i.BLEND),x=!0),S!==Ru){if(S!==p||et!==y){if((d!==ui||E!==ui)&&(i.blendEquation(i.FUNC_ADD),d=ui,E=ui),et)switch(S){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ka:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}C=null,w=null,L=null,P=null,A.set(0,0,0),O=0,p=S,y=et}return}re=re||q,J=J||ce,be=be||Se,(q!==d||re!==E)&&(i.blendEquationSeparate(Je[q],Je[re]),d=q,E=re),(ce!==C||Se!==w||J!==L||be!==P)&&(i.blendFuncSeparate(R[ce],R[Se],R[J],R[be]),C=ce,w=Se,L=J,P=be),(ze.equals(A)===!1||st!==O)&&(i.blendColor(ze.r,ze.g,ze.b,st),A.copy(ze),O=st),p=S,y=!1}function Pe(S,q){S.side===Pt?ue(i.CULL_FACE):j(i.CULL_FACE);let ce=S.side===Kt;q&&(ce=!ce),Ce(ce),S.blending===di&&S.transparent===!1?Xe(qn):Xe(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),o.setFunc(S.depthFunc),o.setTest(S.depthTest),o.setMask(S.depthWrite),s.setMask(S.colorWrite);const Se=S.stencilWrite;a.setTest(Se),Se&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),me(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(S){_!==S&&(S?i.frontFace(i.CW):i.frontFace(i.CCW),_=S)}function _e(S){S!==wu?(j(i.CULL_FACE),S!==T&&(S===Sl?i.cullFace(i.BACK):S===Au?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),T=S}function qe(S){S!==F&&(X&&i.lineWidth(S),F=S)}function me(S,q,ce){S?(j(i.POLYGON_OFFSET_FILL),(D!==q||B!==ce)&&(i.polygonOffset(q,ce),D=q,B=ce)):ue(i.POLYGON_OFFSET_FILL)}function Fe(S){S?j(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function mt(S){S===void 0&&(S=i.TEXTURE0+V-1),ie!==S&&(i.activeTexture(S),ie=S)}function nt(S,q,ce){ce===void 0&&(ie===null?ce=i.TEXTURE0+V-1:ce=ie);let Se=Q[ce];Se===void 0&&(Se={type:void 0,texture:void 0},Q[ce]=Se),(Se.type!==S||Se.texture!==q)&&(ie!==ce&&(i.activeTexture(ce),ie=ce),i.bindTexture(S,q||Z[S]),Se.type=S,Se.texture=q)}function b(){const S=Q[ie];S!==void 0&&S.type!==void 0&&(i.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function k(){try{i.compressedTexImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $(){try{i.texSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ee(){try{i.texSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{i.texStorage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{i.texStorage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{i.texImage2D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function se(){try{i.texImage3D(...arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(S){We.equals(S)===!1&&(i.scissor(S.x,S.y,S.z,S.w),We.copy(S))}function Oe(S){ot.equals(S)===!1&&(i.viewport(S.x,S.y,S.z,S.w),ot.copy(S))}function we(S,q){let ce=l.get(q);ce===void 0&&(ce=new WeakMap,l.set(q,ce));let Se=ce.get(S);Se===void 0&&(Se=i.getUniformBlockIndex(q,S.name),ce.set(S,Se))}function de(S,q){const Se=l.get(q).get(S);c.get(q)!==Se&&(i.uniformBlockBinding(q,Se,S.__bindingPointIndex),c.set(q,Se))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,Q={},h={},f=new WeakMap,m=[],g=null,x=!1,p=null,d=null,C=null,w=null,E=null,L=null,P=null,A=new Be(0,0,0),O=0,y=!1,_=null,T=null,F=null,D=null,B=null,We.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ue,bindFramebuffer:Re,drawBuffers:ye,useProgram:ke,setBlending:Xe,setMaterial:Pe,setFlipSided:Ce,setCullFace:_e,setLineWidth:qe,setPolygonOffset:me,setScissorTest:Fe,activeTexture:mt,bindTexture:nt,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:k,texImage2D:Me,texImage3D:se,updateUBOMapping:we,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:ge,texSubImage2D:$,texSubImage3D:ee,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ee,scissor:he,viewport:Oe,reset:Ye}}function Kg(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):ns("canvas")}function x(b,v,k){let $=1;const ee=nt(b);if((ee.width>k||ee.height>k)&&($=k/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor($*ee.width),Ee=Math.floor($*ee.height);h===void 0&&(h=g(Y,Ee));const oe=v?g(Y,Ee):h;return oe.width=Y,oe.height=Ee,oe.getContext("2d").drawImage(b,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ee+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function p(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,v,k,$,ee=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=v;if(v===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){const Ee=ee?$s:at.getTransfer($);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=Ee===gt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(b,v){let k;return b?v===null||v===fi||v===jr?k=i.DEPTH24_STENCIL8:v===Mn?k=i.DEPTH32F_STENCIL8:v===Kr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fi||v===jr?k=i.DEPTH_COMPONENT24:v===Mn?k=i.DEPTH_COMPONENT32F:v===Kr&&(k=i.DEPTH_COMPONENT16),k}function L(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function P(b){const v=b.target;v.removeEventListener("dispose",P),O(v),v.isVideoTexture&&u.delete(v)}function A(b){const v=b.target;v.removeEventListener("dispose",A),_(v)}function O(b){const v=n.get(b);if(v.__webglInit===void 0)return;const k=b.source,$=f.get(k);if($){const ee=$[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&y(b),Object.keys($).length===0&&f.delete(k)}n.remove(b)}function y(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const k=b.source,$=f.get(k);delete $[v.__cacheKey],o.memory.textures--}function _(b){const v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let ee=0;ee<v.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=b.textures;for(let $=0,ee=k.length;$<ee;$++){const Y=n.get(k[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(b)}let T=0;function F(){T=0}function D(){const b=T;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),T+=1,b}function B(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function V(b,v){const k=n.get(b);if(b.isVideoTexture&&Fe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&k.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,b,v);return}}else b.isExternalTexture&&(k.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function X(b,v){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Z(k,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function K(b,v){const k=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){Z(k,b,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function H(b,v){const k=n.get(b);if(b.version>0&&k.__version!==b.version){j(k,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}const ie={[_n]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},Q={[At]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},le={[rh]:i.NEVER,[uh]:i.ALWAYS,[sh]:i.LESS,[Zc]:i.LEQUAL,[ah]:i.EQUAL,[ch]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function He(b,v){if(v.type===Mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===ma||v.magFilter===ds||v.magFilter===Yn||v.minFilter===xn||v.minFilter===ma||v.minFilter===ds||v.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ie[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Q[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Q[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,le[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===At||v.minFilter!==ds&&v.minFilter!==Yn||v.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function We(b,v){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",P));const $=v.source;let ee=f.get($);ee===void 0&&(ee={},f.set($,ee));const Y=B(v);if(Y!==b.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[Y].usedTimes++;const Ee=ee[b.__cacheKey];Ee!==void 0&&(ee[b.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(v)),b.__cacheKey=Y,b.__webglTexture=ee[Y].texture}return k}function ot(b,v,k){return Math.floor(Math.floor(b/k)/v)}function Ve(b,v,k,$){const Y=b.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,$,v.data);else{Y.sort((se,he)=>se.start-he.start);let Ee=0;for(let se=1;se<Y.length;se++){const he=Y[Ee],Oe=Y[se],we=he.start+he.count,de=ot(Oe.start,v.width,4),Ye=ot(he.start,v.width,4);Oe.start<=we+1&&de===Ye&&ot(Oe.start+Oe.count-1,v.width,4)===de?he.count=Math.max(he.count,Oe.start+Oe.count-he.start):(++Ee,Y[Ee]=Oe)}Y.length=Ee+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),ge=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,he=Y.length;se<he;se++){const Oe=Y[se],we=Math.floor(Oe.start/4),de=Math.ceil(Oe.count/4),Ye=we%v.width,S=Math.floor(we/v.width),q=de,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,S),t.texSubImage2D(i.TEXTURE_2D,0,Ye,S,q,ce,k,$,v.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function Z(b,v,k){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const ee=We(b,v),Y=v.source;t.bindTexture($,b.__webglTexture,i.TEXTURE0+k);const Ee=n.get(Y);if(Y.version!==Ee.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);const oe=at.getPrimaries(at.workingColorSpace),ge=v.colorSpace===Xn?null:at.getPrimaries(v.colorSpace),Me=v.colorSpace===Xn||oe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let se=x(v.image,!1,r.maxTextureSize);se=mt(v,se);const he=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let we=w(v.internalFormat,he,Oe,v.colorSpace,v.isVideoTexture);He($,v);let de;const Ye=v.mipmaps,S=v.isVideoTexture!==!0,q=Ee.__version===void 0||ee===!0,ce=Y.dataReady,Se=L(v,se);if(v.isDepthTexture)we=E(v.format===Qr,v.type),q&&(S?t.texStorage2D(i.TEXTURE_2D,1,we,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,he,Oe,null));else if(v.isDataTexture)if(Ye.length>0){S&&q&&t.texStorage2D(i.TEXTURE_2D,Se,we,Ye[0].width,Ye[0].height);for(let re=0,J=Ye.length;re<J;re++)de=Ye[re],S?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,de.width,de.height,he,Oe,de.data):t.texImage2D(i.TEXTURE_2D,re,we,de.width,de.height,0,he,Oe,de.data);v.generateMipmaps=!1}else S?(q&&t.texStorage2D(i.TEXTURE_2D,Se,we,se.width,se.height),ce&&Ve(v,se,he,Oe)):t.texImage2D(i.TEXTURE_2D,0,we,se.width,se.height,0,he,Oe,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){S&&q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,we,Ye[0].width,Ye[0].height,se.depth);for(let re=0,J=Ye.length;re<J;re++)if(de=Ye[re],v.format!==$t)if(he!==null)if(S){if(ce)if(v.layerUpdates.size>0){const be=oc(de.width,de.height,v.format,v.type);for(const ze of v.layerUpdates){const st=de.data.subarray(ze*be/de.data.BYTES_PER_ELEMENT,(ze+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ze,de.width,de.height,1,he,st)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,se.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,we,de.width,de.height,se.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else S?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,de.width,de.height,se.depth,he,Oe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,we,de.width,de.height,se.depth,0,he,Oe,de.data)}else{S&&q&&t.texStorage2D(i.TEXTURE_2D,Se,we,Ye[0].width,Ye[0].height);for(let re=0,J=Ye.length;re<J;re++)de=Ye[re],v.format!==$t?he!==null?S?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,re,we,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):S?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,de.width,de.height,he,Oe,de.data):t.texImage2D(i.TEXTURE_2D,re,we,de.width,de.height,0,he,Oe,de.data)}else if(v.isDataArrayTexture)if(S){if(q&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,we,se.width,se.height,se.depth),ce)if(v.layerUpdates.size>0){const re=oc(se.width,se.height,v.format,v.type);for(const J of v.layerUpdates){const be=se.data.subarray(J*re/se.data.BYTES_PER_ELEMENT,(J+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,he,Oe,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Oe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,se.width,se.height,se.depth,0,he,Oe,se.data);else if(v.isData3DTexture)S?(q&&t.texStorage3D(i.TEXTURE_3D,Se,we,se.width,se.height,se.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Oe,se.data)):t.texImage3D(i.TEXTURE_3D,0,we,se.width,se.height,se.depth,0,he,Oe,se.data);else if(v.isFramebufferTexture){if(q)if(S)t.texStorage2D(i.TEXTURE_2D,Se,we,se.width,se.height);else{let re=se.width,J=se.height;for(let be=0;be<Se;be++)t.texImage2D(i.TEXTURE_2D,be,we,re,J,0,he,Oe,null),re>>=1,J>>=1}}else if(Ye.length>0){if(S&&q){const re=nt(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Se,we,re.width,re.height)}for(let re=0,J=Ye.length;re<J;re++)de=Ye[re],S?ce&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,he,Oe,de):t.texImage2D(i.TEXTURE_2D,re,we,he,Oe,de);v.generateMipmaps=!1}else if(S){if(q){const re=nt(se);t.texStorage2D(i.TEXTURE_2D,Se,we,re.width,re.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Oe,se)}else t.texImage2D(i.TEXTURE_2D,0,we,he,Oe,se);p(v)&&d($),Ee.__version=Y.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function j(b,v,k){if(v.image.length!==6)return;const $=We(b,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);const Y=n.get(ee);if(ee.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+k);const Ee=at.getPrimaries(at.workingColorSpace),oe=v.colorSpace===Xn?null:at.getPrimaries(v.colorSpace),ge=v.colorSpace===Xn||Ee===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,he=[];for(let J=0;J<6;J++)!Me&&!se?he[J]=x(v.image[J],!0,r.maxCubemapSize):he[J]=se?v.image[J].image:v.image[J],he[J]=mt(v,he[J]);const Oe=he[0],we=s.convert(v.format,v.colorSpace),de=s.convert(v.type),Ye=w(v.internalFormat,we,de,v.colorSpace),S=v.isVideoTexture!==!0,q=Y.__version===void 0||$===!0,ce=ee.dataReady;let Se=L(v,Oe);He(i.TEXTURE_CUBE_MAP,v);let re;if(Me){S&&q&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,Oe.width,Oe.height);for(let J=0;J<6;J++){re=he[J].mipmaps;for(let be=0;be<re.length;be++){const ze=re[be];v.format!==$t?we!==null?S?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,ze.width,ze.height,we,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Ye,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,ze.width,ze.height,we,de,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Ye,ze.width,ze.height,0,we,de,ze.data)}}}else{if(re=v.mipmaps,S&&q){re.length>0&&Se++;const J=nt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(se){S?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,he[J].width,he[J].height,we,de,he[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,he[J].width,he[J].height,0,we,de,he[J].data);for(let be=0;be<re.length;be++){const st=re[be].image[J].image;S?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,st.width,st.height,we,de,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Ye,st.width,st.height,0,we,de,st.data)}}else{S?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,we,de,he[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,we,de,he[J]);for(let be=0;be<re.length;be++){const ze=re[be];S?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,we,de,ze.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Ye,we,de,ze.image[J])}}}p(v)&&d(i.TEXTURE_CUBE_MAP),Y.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ue(b,v,k,$,ee,Y){const Ee=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),ge=w(k.internalFormat,Ee,oe,k.colorSpace),Me=n.get(v),se=n.get(k);if(se.__renderTarget=v,!Me.__hasExternalTextures){const he=Math.max(1,v.width>>Y),Oe=Math.max(1,v.height>>Y);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,Y,ge,he,Oe,v.depth,0,Ee,oe,null):t.texImage2D(ee,Y,ge,he,Oe,0,Ee,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,ee,se.__webglTexture,0,qe(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,ee,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(b,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){const $=v.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Y=E(v.stencilBuffer,ee),Ee=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=qe(v);me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Y,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,b)}else{const $=v.textures;for(let ee=0;ee<$.length;ee++){const Y=$[ee],Ee=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),ge=w(Y.internalFormat,Ee,oe,Y.colorSpace),Me=qe(v);k&&me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ge,v.width,v.height):me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ge,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const ee=$.__webglTexture,Y=qe(v);if(v.depthTexture.format===Jr)me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===Qr)me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ke(b){const v=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const $=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=$}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const $=b.texture.mipmaps;$&&$.length>0?ye(v.__webglFramebuffer[0],b):ye(v.__webglFramebuffer,b)}else if(k){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Re(v.__webglDepthbuffer[$],b,!1);else{const ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}else{const $=b.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Re(v.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(b,v,k){const $=n.get(b);v!==void 0&&ue($.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&ke(b)}function R(b){const v=b.texture,k=n.get(b),$=n.get(v);b.addEventListener("dispose",A);const ee=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Ee=ee.length>1;if(Ee||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),Y){k.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[oe]=[];for(let ge=0;ge<v.mipmaps.length;ge++)k.__webglFramebuffer[oe][ge]=i.createFramebuffer()}else k.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)k.__webglFramebuffer[oe]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let oe=0,ge=ee.length;oe<ge;oe++){const Me=n.get(ee[oe]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&me(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const ge=ee[oe];k.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[oe]);const Me=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),he=w(ge.internalFormat,Me,se,ge.colorSpace,b.isXRRenderTarget===!0),Oe=qe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,he,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,k.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),He(i.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ue(k.__webglFramebuffer[oe][ge],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ge);else ue(k.__webglFramebuffer[oe],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(v)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let oe=0,ge=ee.length;oe<ge;oe++){const Me=ee[oe],se=n.get(Me);let he=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),He(he,Me),ue(k.__webglFramebuffer,b,Me,i.COLOR_ATTACHMENT0+oe,he,0),p(Me)&&d(he)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),He(oe,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ue(k.__webglFramebuffer[ge],b,v,i.COLOR_ATTACHMENT0,oe,ge);else ue(k.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,oe,0);p(v)&&d(oe),t.unbindTexture()}b.depthBuffer&&ke(b)}function Xe(b){const v=b.textures;for(let k=0,$=v.length;k<$;k++){const ee=v[k];if(p(ee)){const Y=C(b),Ee=n.get(ee).__webglTexture;t.bindTexture(Y,Ee),d(Y),t.unbindTexture()}}}const Pe=[],Ce=[];function _e(b){if(b.samples>0){if(me(b)===!1){const v=b.textures,k=b.width,$=b.height;let ee=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(b),oe=v.length>1;if(oe)for(let Me=0;Me<v.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ge=b.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Me=0;Me<v.length;Me++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const se=n.get(v[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,k,$,0,0,k,$,ee,i.NEAREST),c===!0&&(Pe.length=0,Ce.length=0,Pe.push(i.COLOR_ATTACHMENT0+Me),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Pe.push(Y),Ce.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ce)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Me=0;Me<v.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Me]);const se=n.get(v[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function me(b){const v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Fe(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function mt(b,v){const k=b.colorSpace,$=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==pi&&k!==Xn&&(at.getTransfer(k)===gt?($!==$t||ee!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.setTexture2D=V,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=me}function jg(i,e){function t(n,r=Xn){let s;const o=at.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===Yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===Hc)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Xo)return i.INT;if(n===fi)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===as)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===$t)return i.RGBA;if(n===Jr)return i.DEPTH_COMPONENT;if(n===Qr)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===Yc)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===Gs||n===Ws||n===Xs||n===Ys)if(o===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===po||n===mo)return o===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===go)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===vo||n===xo||n===Mo||n===yo||n===So||n===Eo||n===bo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_o)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===Lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Io)return o===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===Fo||n===No||n===Oo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Uo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`;class e_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new tn({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t_ extends er{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const x=typeof XRWebGLBinding<"u",p=new e_,d={},C=t.getContextAttributes();let w=null,E=null;const L=[],P=[],A=new Ze;let O=null;const y=new an;y.viewport=new bt;const _=new an;_.viewport=new bt;const T=[y,_],F=new gd;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let j=L[Z];return j===void 0&&(j=new Na,L[Z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(Z){let j=L[Z];return j===void 0&&(j=new Na,L[Z]=j),j.getGripSpace()},this.getHand=function(Z){let j=L[Z];return j===void 0&&(j=new Na,L[Z]=j),j.getHandSpace()};function V(Z){const j=P.indexOf(Z.inputSource);if(j===-1)return;const ue=L[j];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,l||o),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",K);for(let Z=0;Z<L.length;Z++){const j=P[Z];j!==null&&(P[Z]=null,L[Z].disconnect(j))}D=null,B=null,p.reset();for(const Z in d)delete d[Z];e.setRenderTarget(w),m=null,f=null,h=null,r=null,E=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",X),r.addEventListener("inputsourceschange",K),C.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Re=null,ye=null;C.depth&&(ye=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=C.stencil?Qr:Jr,Re=C.stencil?jr:fi);const ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new mi(f.textureWidth,f.textureHeight,{format:$t,type:bn,depthTexture:new iu(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ue={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new mi(m.framebufferWidth,m.framebufferHeight,{format:$t,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(Z){for(let j=0;j<Z.removed.length;j++){const ue=Z.removed[j],Re=P.indexOf(ue);Re>=0&&(P[Re]=null,L[Re].disconnect(ue))}for(let j=0;j<Z.added.length;j++){const ue=Z.added[j];let Re=P.indexOf(ue);if(Re===-1){for(let ke=0;ke<L.length;ke++)if(ke>=P.length){P.push(ue),Re=ke;break}else if(P[ke]===null){P[ke]=ue,Re=ke;break}if(Re===-1)break}const ye=L[Re];ye&&ye.connect(ue)}}const H=new I,ie=new I;function Q(Z,j,ue){H.setFromMatrixPosition(j.matrixWorld),ie.setFromMatrixPosition(ue.matrixWorld);const Re=H.distanceTo(ie),ye=j.projectionMatrix.elements,ke=ue.projectionMatrix.elements,Je=ye[14]/(ye[10]-1),R=ye[14]/(ye[10]+1),Xe=(ye[9]+1)/ye[5],Pe=(ye[9]-1)/ye[5],Ce=(ye[8]-1)/ye[0],_e=(ke[8]+1)/ke[0],qe=Je*Ce,me=Je*_e,Fe=Re/(-Ce+_e),mt=Fe*-Ce;if(j.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(Fe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ye[10]===-1)Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const nt=Je+Fe,b=R+Fe,v=qe-mt,k=me+(Re-mt),$=Xe*R/b*nt,ee=Pe*R/b*nt;Z.projectionMatrix.makePerspective(v,k,$,ee,nt,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,j){j===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(j.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let j=Z.near,ue=Z.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),F.near=_.near=y.near=j,F.far=_.far=y.far=ue,(D!==F.near||B!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,B=F.far),F.layers.mask=Z.layers.mask|6,y.layers.mask=F.layers.mask&3,_.layers.mask=F.layers.mask&5;const Re=Z.parent,ye=F.cameras;le(F,Re);for(let ke=0;ke<ye.length;ke++)le(ye[ke],Re);ye.length===2?Q(F,y,_):F.projectionMatrix.copy(y.projectionMatrix),He(Z,F,Re)};function He(Z,j,ue){ue===null?Z.matrix.copy(j.matrixWorld):(Z.matrix.copy(ue.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(j.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(j.projectionMatrix),Z.projectionMatrixInverse.copy(j.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ts*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Z){c=Z,f!==null&&(f.fixedFoveation=Z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Z){return d[Z]};let We=null;function ot(Z,j){if(u=j.getViewerPose(l||o),g=j,u!==null){const ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Re=!1;ue.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let R=0;R<ue.length;R++){const Xe=ue[R];let Pe=null;if(m!==null)Pe=m.getViewport(Xe);else{const _e=h.getViewSubImage(f,Xe);Pe=_e.viewport,R===0&&(e.setRenderTargetTextures(E,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(E))}let Ce=T[R];Ce===void 0&&(Ce=new an,Ce.layers.enable(R),Ce.viewport=new bt,T[R]=Ce),Ce.matrix.fromArray(Xe.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Xe.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),R===0&&(F.matrix.copy(Ce.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Ce)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const R=h.getDepthInformation(ue[0]);R&&R.isValid&&R.texture&&p.init(R,r.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<ue.length;R++){const Xe=ue[R].camera;if(Xe){let Pe=d[Xe];Pe||(Pe=new ru,d[Xe]=Pe);const Ce=h.getCameraImage(Xe);Pe.sourceTexture=Ce}}}}for(let ue=0;ue<L.length;ue++){const Re=P[ue],ye=L[ue];Re!==null&&ye!==void 0&&ye.update(Re,j,l||o)}We&&We(Z,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Ve=new ou;Ve.setAnimationLoop(ot),this.setAnimationLoop=function(Z){We=Z},this.dispose=function(){}}}const ai=new Tn,n_=new pt;function i_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,eu(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,C,w,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),x(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,C,w):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const C=e.get(d),w=C.envMap,E=C.envMapRotation;w&&(p.envMap.value=w,ai.copy(E),ai.x*=-1,ai.y*=-1,ai.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),p.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(ai)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,C,w){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*C,p.scale.value=w*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,C){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){const C=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function r_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,w){const E=w.program;n.uniformBlockBinding(C,E)}function l(C,w){let E=r[C.id];E===void 0&&(g(C),E=u(C),r[C.id]=E,C.addEventListener("dispose",p));const L=w.program;n.updateUBOMapping(C,L);const P=e.render.frame;s[C.id]!==P&&(f(C),s[C.id]=P)}function u(C){const w=h();C.__bindingPointIndex=w;const E=i.createBuffer(),L=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function h(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const w=r[C.id],E=C.uniforms,L=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let P=0,A=E.length;P<A;P++){const O=Array.isArray(E[P])?E[P]:[E[P]];for(let y=0,_=O.length;y<_;y++){const T=O[y];if(m(T,P,y,L)===!0){const F=T.__offset,D=Array.isArray(T.value)?T.value:[T.value];let B=0;for(let V=0;V<D.length;V++){const X=D[V],K=x(X);typeof X=="number"||typeof X=="boolean"?(T.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+B,T.__data)):X.isMatrix3?(T.__data[0]=X.elements[0],T.__data[1]=X.elements[1],T.__data[2]=X.elements[2],T.__data[3]=0,T.__data[4]=X.elements[3],T.__data[5]=X.elements[4],T.__data[6]=X.elements[5],T.__data[7]=0,T.__data[8]=X.elements[6],T.__data[9]=X.elements[7],T.__data[10]=X.elements[8],T.__data[11]=0):(X.toArray(T.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(C,w,E,L){const P=C.value,A=w+"_"+E;if(L[A]===void 0)return typeof P=="number"||typeof P=="boolean"?L[A]=P:L[A]=P.clone(),!0;{const O=L[A];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return L[A]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function g(C){const w=C.uniforms;let E=0;const L=16;for(let A=0,O=w.length;A<O;A++){const y=Array.isArray(w[A])?w[A]:[w[A]];for(let _=0,T=y.length;_<T;_++){const F=y[_],D=Array.isArray(F.value)?F.value:[F.value];for(let B=0,V=D.length;B<V;B++){const X=D[B],K=x(X),H=E%L,ie=H%K.boundary,Q=H+ie;E+=ie,Q!==0&&L-Q<K.storage&&(E+=L-Q),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=K.storage}}}const P=E%L;return P>0&&(E+=L-P),C.__size=E,C.__cache={},this}function x(C){const w={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(w.boundary=4,w.storage=4):C.isVector2?(w.boundary=8,w.storage=8):C.isVector3||C.isColor?(w.boundary=16,w.storage=12):C.isVector4?(w.boundary=16,w.storage=16):C.isMatrix3?(w.boundary=48,w.storage=48):C.isMatrix4?(w.boundary=64,w.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),w}function p(C){const w=C.target;w.removeEventListener("dispose",p);const E=o.indexOf(w.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:c,update:l,dispose:d}}class s_{constructor(e={}){const{canvas:t=Ah(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,d=null;const C=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let L=!1;this._outputColorSpace=Gt;let P=0,A=0,O=null,y=-1,_=null;const T=new bt,F=new bt;let D=null;const B=new Be(0);let V=0,X=t.width,K=t.height,H=1,ie=null,Q=null;const le=new bt(0,0,X,K),He=new bt(0,0,X,K);let We=!1;const ot=new na;let Ve=!1,Z=!1;const j=new pt,ue=new I,Re=new bt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Je(){return O===null?H:1}let R=n;function Xe(M,N){return t.getContext(M,N)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){const N="webgl2";if(R=Xe(N,M),R===null)throw Xe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Pe,Ce,_e,qe,me,Fe,mt,nt,b,v,k,$,ee,Y,Ee,oe,ge,Me,se,he,Oe,we,de,Ye;function S(){Pe=new mm(R),Pe.init(),we=new jg(R,Pe),Ce=new lm(R,Pe,e,we),_e=new $g(R,Pe),Ce.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),qe=new vm(R),me=new Ng,Fe=new Kg(R,Pe,_e,me,Ce,we,qe),mt=new um(E),nt=new pm(E),b=new Ed(R),de=new am(R,b),v=new gm(R,b,qe,de),k=new Mm(R,v,b,qe),se=new xm(R,Ce,Fe),oe=new cm(me),$=new Fg(E,mt,nt,Pe,Ce,de,oe),ee=new i_(E,me),Y=new Bg,Ee=new Wg(Pe),Me=new sm(E,mt,nt,_e,k,m,c),ge=new qg(E,k,Ce),Ye=new r_(R,qe,Ce,_e),he=new om(R,Pe,qe),Oe=new _m(R,Pe,qe),qe.programs=$.programs,E.capabilities=Ce,E.extensions=Pe,E.properties=me,E.renderLists=Y,E.shadowMap=ge,E.state=_e,E.info=qe}S();const q=new t_(E,R);this.xr=q,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(X,K,!1))},this.getSize=function(M){return M.set(X,K)},this.setSize=function(M,N,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,K=N,t.width=Math.floor(M*H),t.height=Math.floor(N*H),G===!0&&(t.style.width=M+"px",t.style.height=N+"px"),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(X*H,K*H).floor()},this.setDrawingBufferSize=function(M,N,G){X=M,K=N,H=G,t.width=Math.floor(M*G),t.height=Math.floor(N*G),this.setViewport(0,0,M,N)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(le)},this.setViewport=function(M,N,G,W){M.isVector4?le.set(M.x,M.y,M.z,M.w):le.set(M,N,G,W),_e.viewport(T.copy(le).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(He)},this.setScissor=function(M,N,G,W){M.isVector4?He.set(M.x,M.y,M.z,M.w):He.set(M,N,G,W),_e.scissor(F.copy(He).multiplyScalar(H).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(M){_e.setScissorTest(We=M)},this.setOpaqueSort=function(M){ie=M},this.setTransparentSort=function(M){Q=M},this.getClearColor=function(M){return M.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,G=!0){let W=0;if(M){let z=!1;if(O!==null){const ne=O.texture.format;z=ne===Ko||ne===$o||ne===Zo}if(z){const ne=O.texture.type,fe=ne===bn||ne===fi||ne===Kr||ne===jr||ne===Yo||ne===qo,xe=Me.getClearColor(),ve=Me.getClearAlpha(),Ie=xe.r,De=xe.g,Ae=xe.b;fe?(g[0]=Ie,g[1]=De,g[2]=Ae,g[3]=ve,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=Ie,x[1]=De,x[2]=Ae,x[3]=ve,R.clearBufferiv(R.COLOR,0,x))}else W|=R.COLOR_BUFFER_BIT}N&&(W|=R.DEPTH_BUFFER_BIT),G&&(W|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Me.dispose(),Y.dispose(),Ee.dispose(),me.dispose(),mt.dispose(),nt.dispose(),k.dispose(),de.dispose(),Ye.dispose(),$.dispose(),q.dispose(),q.removeEventListener("sessionstart",Yt),q.removeEventListener("sessionend",_i),ln.stop()};function ce(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=qe.autoReset,N=ge.enabled,G=ge.autoUpdate,W=ge.needsUpdate,z=ge.type;S(),qe.autoReset=M,ge.enabled=N,ge.autoUpdate=G,ge.needsUpdate=W,ge.type=z}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){const N=M.target;N.removeEventListener("dispose",J),be(N)}function be(M){ze(M),me.remove(M)}function ze(M){const N=me.get(M).programs;N!==void 0&&(N.forEach(function(G){$.releaseProgram(G)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,G,W,z,ne){N===null&&(N=ye);const fe=z.isMesh&&z.matrixWorld.determinant()<0,xe=aa(M,N,G,W,z);_e.setMaterial(W,fe);let ve=G.index,Ie=1;if(W.wireframe===!0){if(ve=v.getWireframeAttribute(G),ve===void 0)return;Ie=2}const De=G.drawRange,Ae=G.attributes.position;let tt=De.start*Ie,lt=(De.start+De.count)*Ie;ne!==null&&(tt=Math.max(tt,ne.start*Ie),lt=Math.min(lt,(ne.start+ne.count)*Ie)),ve!==null?(tt=Math.max(tt,0),lt=Math.min(lt,ve.count)):Ae!=null&&(tt=Math.max(tt,0),lt=Math.min(lt,Ae.count));const Mt=lt-tt;if(Mt<0||Mt===1/0)return;de.setup(z,W,xe,G,ve);let ct,ut=he;if(ve!==null&&(ct=b.get(ve),ut=Oe,ut.setIndex(ct)),z.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*Je()),ut.setMode(R.LINES)):ut.setMode(R.TRIANGLES);else if(z.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),_e.setLineWidth(Ue*Je()),z.isLineSegments?ut.setMode(R.LINES):z.isLineLoop?ut.setMode(R.LINE_LOOP):ut.setMode(R.LINE_STRIP)}else z.isPoints?ut.setMode(R.POINTS):z.isSprite&&ut.setMode(R.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Pe.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ue=z._multiDrawStarts,_t=z._multiDrawCounts,Qe=z._multiDrawCount,Lt=ve?b.get(ve).bytesPerElement:1,cn=me.get(W).currentProgram.getUniforms();for(let St=0;St<Qe;St++)cn.setValue(R,"_gl_DrawID",St),ut.render(Ue[St]/Lt,_t[St])}else if(z.isInstancedMesh)ut.renderInstances(tt,Mt,z.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Ue);ut.renderInstances(tt,Mt,_t)}else ut.render(tt,Mt)};function st(M,N,G){M.transparent===!0&&M.side===Pt&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,nn(M,N,G),M.side=Zn,M.needsUpdate=!0,nn(M,N,G),M.side=Pt):nn(M,N,G)}this.compile=function(M,N,G=null){G===null&&(G=M),d=Ee.get(G),d.init(N),w.push(d),G.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),M!==G&&M.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const W=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const xe=ne[fe];st(xe,G,z),W.add(xe)}else st(ne,G,z),W.add(ne)}),d=w.pop(),W},this.compileAsync=function(M,N,G=null){const W=this.compile(M,N,G);return new Promise(z=>{function ne(){if(W.forEach(function(fe){me.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){z(M);return}setTimeout(ne,10)}Pe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let et=null;function jt(M){et&&et(M)}function Yt(){ln.stop()}function _i(){ln.start()}const ln=new ou;ln.setAnimationLoop(jt),typeof self<"u"&&ln.setContext(self),this.setAnimationLoop=function(M){et=M,q.setAnimationLoop(M),M===null?ln.stop():ln.start()},q.addEventListener("sessionstart",Yt),q.addEventListener("sessionend",_i),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,N,O),d=Ee.get(M,w.length),d.init(N),w.push(d),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ot.setFromProjectionMatrix(j,yn,N.reversedDepth),Z=this.localClippingEnabled,Ve=oe.init(this.clippingPlanes,Z),p=Y.get(M,C.length),p.init(),C.push(p),q.enabled===!0&&q.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&Kn(ne,N,-1/0,E.sortObjects)}Kn(M,N,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(ie,Q),ke=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ke&&Me.addToRenderList(p,M),this.info.render.frame++,Ve===!0&&oe.beginShadows();const G=d.state.shadowsArray;ge.render(G,M,N),Ve===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,z=p.transmissive;if(d.setupLights(),N.isArrayCamera){const ne=N.cameras;if(z.length>0)for(let fe=0,xe=ne.length;fe<xe;fe++){const ve=ne[fe];ls(W,z,M,ve)}ke&&Me.render(M);for(let fe=0,xe=ne.length;fe<xe;fe++){const ve=ne[fe];rr(p,M,ve,ve.viewport)}}else z.length>0&&ls(W,z,M,N),ke&&Me.render(M),rr(p,M,N);O!==null&&A===0&&(Fe.updateMultisampleRenderTarget(O),Fe.updateRenderTargetMipmap(O)),M.isScene===!0&&M.onAfterRender(E,M,N),de.resetDefaultState(),y=-1,_=null,w.pop(),w.length>0?(d=w[w.length-1],Ve===!0&&oe.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,C.pop(),C.length>0?p=C[C.length-1]:p=null};function Kn(M,N,G,W){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ot.intersectsSprite(M)){W&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(j);const fe=k.update(M),xe=M.material;xe.visible&&p.push(M,fe,xe,G,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ot.intersectsObject(M))){const fe=k.update(M),xe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Re.copy(fe.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(j)),Array.isArray(xe)){const ve=fe.groups;for(let Ie=0,De=ve.length;Ie<De;Ie++){const Ae=ve[Ie],tt=xe[Ae.materialIndex];tt&&tt.visible&&p.push(M,fe,tt,G,Re.z,Ae)}}else xe.visible&&p.push(M,fe,xe,G,Re.z,null)}}const ne=M.children;for(let fe=0,xe=ne.length;fe<xe;fe++)Kn(ne[fe],N,G,W)}function rr(M,N,G,W){const z=M.opaque,ne=M.transmissive,fe=M.transparent;d.setupLightsView(G),Ve===!0&&oe.setGlobalState(E.clippingPlanes,G),W&&_e.viewport(T.copy(W)),z.length>0&&jn(z,N,G),ne.length>0&&jn(ne,N,G),fe.length>0&&jn(fe,N,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ls(M,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new mi(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")||Pe.has("EXT_color_buffer_float")?as:bn,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ne=d.state.transmissionRenderTarget[W.id],fe=W.viewport||T;ne.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const xe=E.getRenderTarget(),ve=E.getActiveCubeFace(),Ie=E.getActiveMipmapLevel();E.setRenderTarget(ne),E.getClearColor(B),V=E.getClearAlpha(),V<1&&E.setClearColor(16777215,.5),E.clear(),ke&&Me.render(G);const De=E.toneMapping;E.toneMapping=En;const Ae=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),Ve===!0&&oe.setGlobalState(E.clippingPlanes,W),jn(M,G,W),Fe.updateMultisampleRenderTarget(ne),Fe.updateRenderTargetMipmap(ne),Pe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let lt=0,Mt=N.length;lt<Mt;lt++){const ct=N[lt],ut=ct.object,Ue=ct.geometry,_t=ct.material,Qe=ct.group;if(_t.side===Pt&&ut.layers.test(W.layers)){const Lt=_t.side;_t.side=Kt,_t.needsUpdate=!0,cs(ut,G,W,Ue,_t,Qe),_t.side=Lt,_t.needsUpdate=!0,tt=!0}}tt===!0&&(Fe.updateMultisampleRenderTarget(ne),Fe.updateRenderTargetMipmap(ne))}E.setRenderTarget(xe,ve,Ie),E.setClearColor(B,V),Ae!==void 0&&(W.viewport=Ae),E.toneMapping=De}function jn(M,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ne=M.length;z<ne;z++){const fe=M[z],xe=fe.object,ve=fe.geometry,Ie=fe.group;let De=fe.material;De.allowOverride===!0&&W!==null&&(De=W),xe.layers.test(G.layers)&&cs(xe,N,G,ve,De,Ie)}}function cs(M,N,G,W,z,ne){M.onBeforeRender(E,N,G,W,z,ne),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(E,N,G,W,M,ne),z.transparent===!0&&z.side===Pt&&z.forceSinglePass===!1?(z.side=Kt,z.needsUpdate=!0,E.renderBufferDirect(G,N,W,z,M,ne),z.side=Zn,z.needsUpdate=!0,E.renderBufferDirect(G,N,W,z,M,ne),z.side=Pt):E.renderBufferDirect(G,N,W,z,M,ne),M.onAfterRender(E,N,G,W,z,ne)}function nn(M,N,G){N.isScene!==!0&&(N=ye);const W=me.get(M),z=d.state.lights,ne=d.state.shadowsArray,fe=z.state.version,xe=$.getParameters(M,z.state,ne,N,G),ve=$.getProgramCacheKey(xe);let Ie=W.programs;W.environment=M.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(M.isMeshStandardMaterial?nt:mt).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Ie===void 0&&(M.addEventListener("dispose",J),Ie=new Map,W.programs=Ie);let De=Ie.get(ve);if(De!==void 0){if(W.currentProgram===De&&W.lightsStateVersion===fe)return vi(M,xe),De}else xe.uniforms=$.getUniforms(M),M.onBeforeCompile(xe,E),De=$.acquireProgram(xe,ve),Ie.set(ve,De),W.uniforms=xe.uniforms;const Ae=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),vi(M,xe),W.needsLights=xi(M),W.lightsStateVersion=fe,W.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=De,W.uniformsList=null,De}function sr(M){if(M.uniformsList===null){const N=M.currentProgram.getUniforms();M.uniformsList=qs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function vi(M,N){const G=me.get(M);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function aa(M,N,G,W,z){N.isScene!==!0&&(N=ye),Fe.resetTextureUnits();const ne=N.fog,fe=W.isMeshStandardMaterial?N.environment:null,xe=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pi,ve=(W.isMeshStandardMaterial?nt:mt).get(W.envMap||fe),Ie=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ae=!!G.morphAttributes.position,tt=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let Mt=En;W.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=ct!==void 0?ct.length:0,Ue=me.get(W),_t=d.state.lights;if(Ve===!0&&(Z===!0||M!==_)){const Ft=M===_&&W.id===y;oe.setState(W,M,Ft)}let Qe=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==_t.state.version||Ue.outputColorSpace!==xe||z.isBatchedMesh&&Ue.batching===!1||!z.isBatchedMesh&&Ue.batching===!0||z.isBatchedMesh&&Ue.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ue.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ue.instancing===!1||!z.isInstancedMesh&&Ue.instancing===!0||z.isSkinnedMesh&&Ue.skinning===!1||!z.isSkinnedMesh&&Ue.skinning===!0||z.isInstancedMesh&&Ue.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ue.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ue.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ue.instancingMorph===!1&&z.morphTexture!==null||Ue.envMap!==ve||W.fog===!0&&Ue.fog!==ne||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==oe.numPlanes||Ue.numIntersection!==oe.numIntersection)||Ue.vertexAlphas!==Ie||Ue.vertexTangents!==De||Ue.morphTargets!==Ae||Ue.morphNormals!==tt||Ue.morphColors!==lt||Ue.toneMapping!==Mt||Ue.morphTargetsCount!==ut)&&(Qe=!0):(Qe=!0,Ue.__version=W.version);let Lt=Ue.currentProgram;Qe===!0&&(Lt=nn(W,N,z));let cn=!1,St=!1,wn=!1;const vt=Lt.getUniforms(),Ut=Ue.uniforms;if(_e.useProgram(Lt.program)&&(cn=!0,St=!0,wn=!0),W.id!==y&&(y=W.id,St=!0),cn||_!==M){_e.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",M.projectionMatrix),vt.setValue(R,"viewMatrix",M.matrixWorldInverse);const Bt=vt.map.cameraPosition;Bt!==void 0&&Bt.setValue(R,ue.setFromMatrixPosition(M.matrixWorld)),Ce.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),_!==M&&(_=M,St=!0,wn=!0)}if(z.isSkinnedMesh){vt.setOptional(R,z,"bindMatrix"),vt.setOptional(R,z,"bindMatrixInverse");const Ft=z.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),vt.setValue(R,"boneTexture",Ft.boneTexture,Fe))}z.isBatchedMesh&&(vt.setOptional(R,z,"batchingTexture"),vt.setValue(R,"batchingTexture",z._matricesTexture,Fe),vt.setOptional(R,z,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",z._indirectTexture,Fe),vt.setOptional(R,z,"batchingColorTexture"),z._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",z._colorsTexture,Fe));const qt=G.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&se.update(z,G,Lt),(St||Ue.receiveShadow!==z.receiveShadow)&&(Ue.receiveShadow=z.receiveShadow,vt.setValue(R,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ut.envMap.value=ve,Ut.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Ut.envMapIntensity.value=N.environmentIntensity),St&&(vt.setValue(R,"toneMappingExposure",E.toneMappingExposure),Ue.needsLights&&Le(Ut,wn),ne&&W.fog===!0&&ee.refreshFogUniforms(Ut,ne),ee.refreshMaterialUniforms(Ut,W,H,K,d.state.transmissionRenderTarget[M.id]),qs.upload(R,sr(Ue),Ut,Fe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(qs.upload(R,sr(Ue),Ut,Fe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(R,"center",z.center),vt.setValue(R,"modelViewMatrix",z.modelViewMatrix),vt.setValue(R,"normalMatrix",z.normalMatrix),vt.setValue(R,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ft=W.uniformsGroups;for(let Bt=0,Nn=Ft.length;Bt<Nn;Bt++){const Jt=Ft[Bt];Ye.update(Jt,Lt),Ye.bind(Jt,Lt)}}return Lt}function Le(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function xi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,N,G){const W=me.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),me.get(M.texture).__webglTexture=N,me.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){const G=me.get(M);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const ar=R.createFramebuffer();this.setRenderTarget=function(M,N=0,G=0){O=M,P=N,A=G;let W=!0,z=null,ne=!1,fe=!1;if(M){const ve=me.get(M);if(ve.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(R.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)Fe.setupRenderTarget(M);else if(ve.__hasExternalTextures)Fe.rebindTextures(M,me.get(M.texture).__webglTexture,me.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ae=M.depthTexture;if(ve.__boundDepthTexture!==Ae){if(Ae!==null&&me.has(Ae)&&(M.width!==Ae.image.width||M.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(M)}}const Ie=M.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const De=me.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[N])?z=De[N][G]:z=De[N],ne=!0):M.samples>0&&Fe.useMultisampledRTT(M)===!1?z=me.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[G]:z=De,T.copy(M.viewport),F.copy(M.scissor),D=M.scissorTest}else T.copy(le).multiplyScalar(H).floor(),F.copy(He).multiplyScalar(H).floor(),D=We;if(G!==0&&(z=ar),_e.bindFramebuffer(R.FRAMEBUFFER,z)&&W&&_e.drawBuffers(M,z),_e.viewport(T),_e.scissor(F),_e.setScissorTest(D),ne){const ve=me.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,G)}else if(fe){const ve=N;for(let Ie=0;Ie<M.textures.length;Ie++){const De=me.get(M.textures[Ie]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ie,De.__webglTexture,G,ve)}}else if(M!==null&&G!==0){const ve=me.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ve.__webglTexture,G)}y=-1},this.readRenderTargetPixels=function(M,N,G,W,z,ne,fe,xe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){_e.bindFramebuffer(R.FRAMEBUFFER,ve);try{const Ie=M.textures[xe],De=Ie.format,Ae=Ie.type;if(!Ce.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-W&&G>=0&&G<=M.height-z&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(N,G,W,z,we.convert(De),we.convert(Ae),ne))}finally{const Ie=O!==null?me.get(O).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(M,N,G,W,z,ne,fe,xe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=me.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(N>=0&&N<=M.width-W&&G>=0&&G<=M.height-z){_e.bindFramebuffer(R.FRAMEBUFFER,ve);const Ie=M.textures[xe],De=Ie.format,Ae=Ie.type;if(!Ce.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(N,G,W,z,we.convert(De),we.convert(Ae),0);const lt=O!==null?me.get(O).__webglFramebuffer:null;_e.bindFramebuffer(R.FRAMEBUFFER,lt);const Mt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Rh(R,Mt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(tt),R.deleteSync(Mt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,G=0){const W=Math.pow(2,-G),z=Math.floor(M.image.width*W),ne=Math.floor(M.image.height*W),fe=N!==null?N.x:0,xe=N!==null?N.y:0;Fe.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,fe,xe,z,ne),_e.unbindTexture()};const Mi=R.createFramebuffer(),or=R.createFramebuffer();this.copyTextureToTexture=function(M,N,G=null,W=null,z=0,ne=null){ne===null&&(z!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let fe,xe,ve,Ie,De,Ae,tt,lt,Mt;const ct=M.isCompressedTexture?M.mipmaps[ne]:M.image;if(G!==null)fe=G.max.x-G.min.x,xe=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Ie=G.min.x,De=G.min.y,Ae=G.isBox3?G.min.z:0;else{const qt=Math.pow(2,-z);fe=Math.floor(ct.width*qt),xe=Math.floor(ct.height*qt),M.isDataArrayTexture?ve=ct.depth:M.isData3DTexture?ve=Math.floor(ct.depth*qt):ve=1,Ie=0,De=0,Ae=0}W!==null?(tt=W.x,lt=W.y,Mt=W.z):(tt=0,lt=0,Mt=0);const ut=we.convert(N.format),Ue=we.convert(N.type);let _t;N.isData3DTexture?(Fe.setTexture3D(N,0),_t=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Fe.setTexture2DArray(N,0),_t=R.TEXTURE_2D_ARRAY):(Fe.setTexture2D(N,0),_t=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),Lt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),cn=R.getParameter(R.UNPACK_SKIP_PIXELS),St=R.getParameter(R.UNPACK_SKIP_ROWS),wn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ct.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae);const vt=M.isDataArrayTexture||M.isData3DTexture,Ut=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){const qt=me.get(M),Ft=me.get(N),Bt=me.get(qt.__renderTarget),Nn=me.get(Ft.__renderTarget);_e.bindFramebuffer(R.READ_FRAMEBUFFER,Bt.__webglFramebuffer),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Jt=0;Jt<ve;Jt++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(M).__webglTexture,z,Ae+Jt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(N).__webglTexture,ne,Mt+Jt)),R.blitFramebuffer(Ie,De,fe,xe,tt,lt,fe,xe,R.DEPTH_BUFFER_BIT,R.NEAREST);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||me.has(M)){const qt=me.get(M),Ft=me.get(N);_e.bindFramebuffer(R.READ_FRAMEBUFFER,Mi),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,or);for(let Bt=0;Bt<ve;Bt++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,qt.__webglTexture,z,Ae+Bt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qt.__webglTexture,z),Ut?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ft.__webglTexture,ne,Mt+Bt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,ne),z!==0?R.blitFramebuffer(Ie,De,fe,xe,tt,lt,fe,xe,R.COLOR_BUFFER_BIT,R.NEAREST):Ut?R.copyTexSubImage3D(_t,ne,tt,lt,Mt+Bt,Ie,De,fe,xe):R.copyTexSubImage2D(_t,ne,tt,lt,Ie,De,fe,xe);_e.bindFramebuffer(R.READ_FRAMEBUFFER,null),_e.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Ut?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(_t,ne,tt,lt,Mt,fe,xe,ve,ut,Ue,ct.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(_t,ne,tt,lt,Mt,fe,xe,ve,ut,ct.data):R.texSubImage3D(_t,ne,tt,lt,Mt,fe,xe,ve,ut,Ue,ct):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,tt,lt,fe,xe,ut,Ue,ct.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,tt,lt,ct.width,ct.height,ut,ct.data):R.texSubImage2D(R.TEXTURE_2D,ne,tt,lt,fe,xe,ut,Ue,ct);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,cn),R.pixelStorei(R.UNPACK_SKIP_ROWS,St),R.pixelStorei(R.UNPACK_SKIP_IMAGES,wn),ne===0&&N.generateMipmaps&&R.generateMipmap(_t),_e.unbindTexture()},this.initRenderTarget=function(M){me.get(M).__webglFramebuffer===void 0&&Fe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Fe.setTextureCube(M,0):M.isData3DTexture?Fe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Fe.setTexture2DArray(M,0):Fe.setTexture2D(M,0),_e.unbindTexture()},this.resetState=function(){P=0,A=0,O=null,_e.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function cl(){return{uFogNear:{value:1500},uFogFar:{value:7e3},uFogColor:{value:new Be(16/255,48/255,64/255)},uFogEnabled:{value:1}}}function a_(i){const e=Math.max(0,Math.min(15,i.color.r))*17,t=Math.max(0,Math.min(15,i.color.g))*17,n=Math.max(0,Math.min(15,i.color.b))*17;return e<<16|t<<8|n}function o_(i){const e=[],t=[];for(const s of i){if(s.points.length<3)continue;const o=new Be(a_(s)),a=s.points[0];for(let c=1;c<s.points.length-1;c+=1){const l=s.points[c],u=s.points[c+1];e.push(a.x,a.y,a.z,l.x,l.y,l.z,u.x,u.y,u.z);for(let h=0;h<3;h+=1)t.push(o.r,o.g,o.b)}}const n=new xt;n.setAttribute("position",new Ge(e,3)),n.setAttribute("color",new Ge(t,3)),n.computeVertexNormals();const r=new Qi({side:Pt,vertexColors:!0,metalness:0,roughness:1,transparent:!0,opacity:.9});return new Tt(n,r)}function l_(i){const e=new Xt;e.name="bg-mesh";const t=new Map;i.forEach((r,s)=>{const o=t.get(r.roomIndex)??[];o.push({tri:r,triId:s}),t.set(r.roomIndex,o)});const n=.6180339887;for(const[r,s]of t){const o=[],a=[];for(const{tri:m,triId:g}of s)o.push(m.a.x,m.a.y,m.a.z,m.b.x,m.b.y,m.b.z,m.c.x,m.c.y,m.c.z),a.push(g);const c=new xt;c.setAttribute("position",new Ge(o,3)),c.computeVertexNormals();const l=r*n%1,u=new Be().setHSL(l,.85,.55),h=new Qi({color:u,side:Pt,metalness:0,roughness:.9}),f=new Tt(c,h);f.name=`bg-room-${r}`,f.userData.triangleIds=a,e.add(f)}return e}const ko=`
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
`,Go=`
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
    gl_FragColor = vec4(rgb, outAlpha);
  }
`;function c_(i,e,t,n=new Set,r=cl()){const o=new Float32Array(1e4);for(const[g,x]of Object.entries(e.items)){const p=parseInt(g,10);p>=0&&p<2500&&(o[p*4+0]=x.x,o[p*4+1]=x.y,o[p*4+2]=x.width,o[p*4+3]=x.height)}const a=new il(o,2500,1,$t,Mn);a.magFilter=At,a.minFilter=At,a.needsUpdate=!0,t.flipY=!1,t.wrapS=vn,t.wrapT=vn,t.magFilter=At,t.minFilter=At,t.needsUpdate=!0;function c(g){return{...pe.lights,uAtlas:{value:t},uLookup:{value:a},uAtlasSize:{value:new Ze(e.width,e.height)},uLookupWidth:{value:2500},uAlphaDiscardThreshold:{value:.5},uUseTextureAlpha:{value:g?1:0},uFogNear:r.uFogNear,uFogFar:r.uFogFar,uFogColor:r.uFogColor,uFogEnabled:r.uFogEnabled}}const l=new tn({uniforms:c(!1),vertexShader:ko,fragmentShader:Go,side:Pt,lights:!0}),u=new tn({uniforms:c(!0),vertexShader:ko,fragmentShader:Go,side:Pt,lights:!0,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),h=[];let f=null;i.forEach((g,x)=>{if(n.has(g.materialId))return;(!f||f.materialId!==g.materialId||f.isSecondary!==g.isSecondary)&&(f={materialId:g.materialId,isSecondary:g.isSecondary,pos:[],ids:[],uvs:[],cols:[],alphas:[],triIds:[]},h.push(f)),f.pos.push(g.a.x,g.a.y,g.a.z,g.b.x,g.b.y,g.b.z,g.c.x,g.c.y,g.c.z),f.ids.push(g.materialId,g.materialId,g.materialId),f.uvs.push(g.uvA.u/32,g.uvA.v/32,g.uvB.u/32,g.uvB.v/32,g.uvC.u/32,g.uvC.v/32),f.cols.push(g.colA.r,g.colA.g,g.colA.b,g.colB.r,g.colB.g,g.colB.b,g.colC.r,g.colC.g,g.colC.b);const p=g.layerAlpha??1;f.alphas.push(p,p,p),f.triIds.push(x)});const m=new Xt;return m.name="bg-atlas",h.forEach((g,x)=>{const p=new xt;p.setAttribute("position",new Ge(g.pos,3)),p.setAttribute("aMaterialId",new Ge(g.ids,1)),p.setAttribute("aTexelUV",new Ge(g.uvs,2)),p.setAttribute("aVertexColor",new Ge(g.cols,3)),p.setAttribute("aLayerAlpha",new Ge(g.alphas,1)),p.computeVertexNormals();const d=new Tt(p,g.isSecondary?u:l);d.name=`bg-run-${x}-mat-${g.materialId}-${g.isSecondary?"secondary":"primary"}`,d.userData.triangleIds=g.triIds,d.renderOrder=x,m.add(d)}),m}function u_(i,e,t){const n=new Xt;n.name="bg-pbr-overrides";for(const r of t){let s=function(u,h,f){const m=[],g=[],x=[];for(const C of o.values()){const w=C[u];for(const E of w.pos)m.push(E);for(const E of w.uvs)g.push(E);for(const E of w.triIds)x.push(E)}if(m.length===0)return;const p=new xt;p.setAttribute("position",new Ge(m,3)),p.setAttribute("uv",new Ge(g,2)),p.setAttribute("uv2",new Ge(g,2)),p.computeVertexNormals();const d=new Tt(p,h);d.name=`pbr-override-${r.name}-${u}`,d.userData.triangleIds=x,d.castShadow=!0,d.receiveShadow=!0,d.renderOrder=f,n.add(d)};if(r.materialIds.size===0)continue;const o=new Map;if(i.forEach((u,h)=>{if(!r.materialIds.has(u.materialId))return;const f=e.items[String(u.materialId)];if(!f)return;o.has(u.materialId)||o.set(u.materialId,{primary:{pos:[],uvs:[],triIds:[]},secondary:{pos:[],uvs:[],triIds:[]}});const m=o.get(u.materialId),g=u.isSecondary?m.secondary:m.primary,x=f.width,p=f.height;g.pos.push(u.a.x,u.a.y,u.a.z,u.b.x,u.b.y,u.b.z,u.c.x,u.c.y,u.c.z),g.uvs.push(u.uvA.u/32/x,u.uvA.v/32/p,u.uvB.u/32/x,u.uvB.v/32/p,u.uvC.u/32/x,u.uvC.v/32/p),g.triIds.push(h)}),o.size===0)continue;const{maps:a}=r,c=new Qi({side:Pt,map:a.albedo,normalMap:a.normal,roughnessMap:a.roughness,aoMap:a.ao,aoMapIntensity:1,metalnessMap:a.metallic,alphaMap:a.alpha,transparent:!!a.alpha,displacementMap:a.height,displacementScale:a.heightScale,metalness:a.metallic?1:0,roughness:a.roughness?1:.75,alphaTest:a.alpha?.5:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4}),l=c.clone();l.depthWrite=!1,l.polygonOffsetFactor=-3,l.polygonOffsetUnits=-6,s("primary",c,0),s("secondary",l,1)}return n}let Za=null;function h_(){if(Za)return Za;const i=64,e=new Uint8Array(i*i*4);for(let n=0;n<i;n+=1)for(let r=0;r<i;r+=1){const s=(n*i+r)*4,o=(Math.floor(r/8)+Math.floor(n/8)&1)===0,c=r%8===0||n%8===0?112:o?172:148;e[s+0]=c,e[s+1]=c,e[s+2]=c,e[s+3]=255}const t=new il(e,i,i,$t);return t.colorSpace=Gt,t.wrapS=_n,t.wrapT=_n,t.magFilter=xn,t.minFilter=Yn,t.needsUpdate=!0,Za=t,t}function d_(i,e,t){const n=new Xt;n.name="bg-remaster-placeholders";const r={pos:[],uvs:[],triIds:[]},s={pos:[],uvs:[],triIds:[]};i.forEach((u,h)=>{if(t.has(u.materialId))return;const f=e.items[String(u.materialId)];if(!f)return;const m=u.isSecondary?s:r,g=f.width,x=f.height;m.pos.push(u.a.x,u.a.y,u.a.z,u.b.x,u.b.y,u.b.z,u.c.x,u.c.y,u.c.z),m.uvs.push(u.uvA.u/32/g,u.uvA.v/32/x,u.uvB.u/32/g,u.uvB.v/32/x,u.uvC.u/32/g,u.uvC.v/32/x),m.triIds.push(h)});const o=h_(),a=new Qi({side:Pt,color:15790320,map:o,metalness:0,roughness:.92}),c=new Qi({side:Pt,color:15790320,map:o,depthWrite:!1,metalness:0,roughness:.92,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});function l(u,h,f){if(u.pos.length===0)return;const m=new xt;m.setAttribute("position",new Ge(u.pos,3)),m.setAttribute("uv",new Ge(u.uvs,2)),m.setAttribute("uv2",new Ge(u.uvs,2)),m.computeVertexNormals();const g=new Tt(m,h);g.name=f,g.userData.triangleIds=u.triIds,g.castShadow=!0,g.receiveShadow=!0,n.add(g)}return l(r,a,"bg-remaster-placeholder-primary"),l(s,c,"bg-remaster-placeholder-secondary"),n}function f_(i){const e=new Xt;e.name="pads";const t=new ra(6,8,8),n=new gn({color:55807});for(const r of i){const s=new Tt(t,n);s.position.set(r.position.x,r.position.y,r.position.z),e.add(s);const o=new I(r.orientation.x,r.orientation.y,r.orientation.z).normalize().multiplyScalar(40),a=new gi({color:16776960}),c=new xt().setFromPoints([s.position.clone(),s.position.clone().add(o)]);e.add(new rs(c,a))}return e}function p_(i,e){const r=document.createElement("canvas");r.width=256,r.height=80;const s=r.getContext("2d");s.fillStyle="rgba(0,0,0,0.65)",s.beginPath(),s.roundRect(4,4,248,72,12),s.fill(),s.strokeStyle=e,s.lineWidth=3,s.beginPath(),s.roundRect(4,4,248,72,12),s.stroke(),s.fillStyle=e,s.font="bold 30px 'Courier New', monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(i,256/2,80/2);const o=new ss(r),a=new ta({map:o,depthTest:!1,sizeAttenuation:!0}),c=new nl(a);return c.scale.set(160,50,1),c}function m_(i){const e=new Xt;e.name="room-labels";for(const t of i){const n=t.roomIndex*47%360/360,r=new Be().setHSL(n,.9,.7).getStyle(),s=p_(`Room ${t.roomIndex}`,r);s.position.set(t.center.x,t.center.y+80,t.center.z),e.add(s)}return e}function g_(i){const e=new Xt;e.name="portals";const t=new gi({color:16736095});for(const n of i){if(n.points.length<2)continue;const r=n.points.map(o=>new I(o.x,o.y,o.z));r.push(r[0].clone());const s=new xt().setFromPoints(r);e.add(new rs(s,t))}return e}const __={Guard:{color:16724016,geo:"cylinder",h:80},StandardProp:{color:13943418,geo:"box",h:30},Door:{color:4491519,geo:"box",h:90},AmmoBox:{color:16746496,geo:"box",h:24},Collectable:{color:16772608,geo:"sphere",h:20},Tank:{color:4482628,geo:"box",h:60},SingleMonitor:{color:52428,geo:"box",h:40},Key:{color:16766720,geo:"sphere",h:16},Drone:{color:13387007,geo:"sphere",h:22},Glass:{color:8969727,geo:"box",h:60},GlassWindow:{color:8969727,geo:"box",h:60}},v_={color:11184810,geo:"box",h:30};function x_(i,e){const r=document.createElement("canvas");r.width=320,r.height=64;const s=r.getContext("2d");s.fillStyle="rgba(0,0,0,0.7)",s.beginPath(),s.roundRect(2,2,316,60,8),s.fill();const o=`#${e.toString(16).padStart(6,"0")}`;s.fillStyle=o,s.font="bold 22px 'Courier New', monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(i,320/2,64/2);const a=new ss(r),c=new ta({map:a,depthTest:!1,sizeAttenuation:!0}),l=new nl(c);return l.scale.set(140,28,1),l}function M_(i){const e=[],t=[],n=[],r=[],s=[],o=[];for(const c of i.triangles)for(const l of[c.a,c.b,c.c])e.push(l.x,l.y,l.z),t.push(c.materialId),n.push(l.u/32,l.v/32),r.push(l.r,l.g,l.b),s.push(1),o.push(l.r/255,l.g/255,l.b/255);const a=new xt;return a.setAttribute("position",new Ge(e,3)),a.setAttribute("aMaterialId",new Ge(t,1)),a.setAttribute("aTexelUV",new Ge(n,2)),a.setAttribute("aVertexColor",new Ge(r,3)),a.setAttribute("aLayerAlpha",new Ge(s,1)),a.setAttribute("color",new Ge(o,3)),a.computeVertexNormals(),a}function y_(i,e,t,n={},r={}){const s=n.stageLevelScale??1,o=n.stanTiles??[],a=n.boundPads??[],c=n.fogUniforms??cl();function l(_){const T={zmax:_.bbox.xmin,zmin:_.bbox.xmax,ymax:_.bbox.ymin,ymin:_.bbox.ymax,xmax:_.bbox.zmin,xmin:_.bbox.zmax},F=new I(_.up.x,_.up.y,_.up.z),D=new I(_.orientation.x,_.orientation.y,_.orientation.z),B=new I().crossVectors(F,D);B.lengthSq()<1e-10&&B.set(1,0,0),B.normalize();const V=new I(_.position.x,_.position.y,_.position.z),X=new I(0,0,0).addScaledVector(B,(T.zmax+T.zmin)*.5).addScaledVector(F,(T.ymax+T.ymin)*.5).addScaledVector(D,(T.xmax+T.xmin)*.5);return V.add(X)}function u(_){const T=new I(_.up.x,_.up.y,_.up.z),F=new I(_.orientation.x,_.orientation.y,_.orientation.z),D=new I().crossVectors(T,F);D.lengthSq()<1e-10&&D.set(1,0,0),D.normalize();const B=new I(_.position.x,_.position.y,_.position.z),V=_.bbox,X=new I(0,0,0).addScaledVector(D,(V.zmax+V.zmin)*.5).addScaledVector(T,(V.ymax+V.ymin)*.5).addScaledVector(F,(V.xmax+V.xmin)*.5);return B.add(X)}function h(_){const T=u(_),F=new I(_.up.x,_.up.y,_.up.z);return T.addScaledVector(F,(_.bbox.ymin-_.bbox.ymax)*.5)}function f(_,T,F,D,B){const V=(D.z-B.z)*(F.x-B.x)+(B.x-D.x)*(F.z-B.z);if(Math.abs(V)<1e-8)return null;const X=((D.z-B.z)*(_-B.x)+(B.x-D.x)*(T-B.z))/V,K=((B.z-F.z)*(_-B.x)+(F.x-B.x)*(T-B.z))/V,H=1-X-K;return X<-1e-6||K<-1e-6||H<-1e-6?null:X*F.y+K*D.y+H*B.y}function m(_,T,F){let D=null,B=Number.POSITIVE_INFINITY;for(const V of o){if(!V.points||V.points.length<3)continue;const X=V.points[0];for(let K=1;K+1<V.points.length;K+=1){const H=V.points[K],ie=V.points[K+1],Q=f(_,T,X,H,ie);if(Q===null)continue;const le=Math.abs(Q-F);le<B&&(B=le,D=Q)}}return D}const g=new Xt;g.name="props";const x=[],p=new Map,d=new Map;let C=null;if(n.atlas&&n.atlasTexture){const T=new Float32Array(1e4);for(const[D,B]of Object.entries(n.atlas.items)){const V=parseInt(D,10);V>=0&&V<2500&&(T[V*4+0]=B.x,T[V*4+1]=B.y,T[V*4+2]=B.width,T[V*4+3]=B.height)}const F=new il(T,2500,1,$t,Mn);F.magFilter=At,F.minFilter=At,F.needsUpdate=!0,n.atlasTexture.flipY=!1,n.atlasTexture.wrapS=vn,n.atlasTexture.wrapT=vn,n.atlasTexture.magFilter=At,n.atlasTexture.minFilter=At,n.atlasTexture.needsUpdate=!0,C=new tn({uniforms:{...pe.lights,uAtlas:{value:n.atlasTexture},uLookup:{value:F},uAtlasSize:{value:new Ze(n.atlas.width,n.atlas.height)},uLookupWidth:{value:2500},uAlphaDiscardThreshold:{value:0},uUseTextureAlpha:{value:0},uFogNear:c.uFogNear,uFogFar:c.uFogFar,uFogColor:c.uFogColor,uFogEnabled:c.uFogEnabled},vertexShader:ko,fragmentShader:Go,side:Pt,lights:!0})}function w(_){if(!p.has(_)){const T=r[_];p.set(_,T?M_(T):null)}return p.get(_)}function E(_){return C||(d.has(_)||d.set(_,new gn({vertexColors:!0,side:Pt})),d.get(_))}const L=new Map,P=new Map;function A(_,T){if(!L.has(_)){let F;T.geo==="sphere"?F=new ra(T.h*.55,8,8):T.geo==="cylinder"?F=new sl(12,12,T.h,8):F=new nr(30,T.h,30),L.set(_,F)}return L.get(_)}function O(_){return P.has(_)||P.set(_,new gn({color:_,transparent:!0,opacity:.82})),P.get(_)}function y(_,T){const F=new I(T.up.x,T.up.y,T.up.z),D=new I(T.orientation.x,T.orientation.y,T.orientation.z);F.lengthSq()<1e-10&&F.set(0,1,0),D.lengthSq()<1e-10&&D.set(0,0,1),F.normalize(),D.normalize();const B=new I().crossVectors(F,D);B.lengthSq()<1e-10&&B.set(1,0,0),B.normalize();const V=new I().crossVectors(D,B).normalize(),X=new pt().makeBasis(B,V,D);_.quaternion.setFromRotationMatrix(X)}for(const _ of i){const T=_.type==="Door",F=_.padSource==="boundPad"||T,D=F?void 0:e[_.padIndex],B=F?a[_.padIndex]:void 0;if(!D&&!B)continue;const V=__[_.type]??v_,X=t[_.primaryIndex]??null,K=X?w(X):null;let H;if(K&&X){const ie=(_.renderScale??.1)*s;H=new Tt(K,E(X)),H.scale.setScalar(ie)}else H=new Tt(A(_.type,V),O(V.color));if(K&&X&&T&&B){const ie=r[X],Q=ie.sourceBounds??ie.bounds,le=Q.max.x-Q.min.x,He=Q.max.y-Q.min.y,We=Q.max.z-Q.min.z,ot=Math.abs(le)>1e-6?le:1,Ve=Math.abs(He)>1e-6?He:1,Z=Math.abs(We)>1e-6?We:1,j={zmax:B.bbox.xmin,zmin:B.bbox.xmax,ymax:B.bbox.ymin,ymin:B.bbox.ymax,xmax:B.bbox.zmin,xmin:B.bbox.zmax};let ue=(j.ymin-j.ymax)/ot,Re=(j.xmin-j.xmax)/Ve,ye=(j.zmin-j.zmax)/Z;(Math.abs(ue)<=1e-6||Math.abs(Re)<=1e-6||Math.abs(ye)<=1e-6)&&(ue=1,Re=1,ye=1);const ke=new I(B.up.x,B.up.y,B.up.z),Je=new I(B.orientation.x,B.orientation.y,B.orientation.z),R=new I().crossVectors(ke,Je);ke.lengthSq()<1e-10&&ke.set(0,1,0),Je.lengthSq()<1e-10&&Je.set(0,0,1),R.lengthSq()<1e-10&&R.set(1,0,0),ke.normalize(),Je.normalize(),R.normalize();const Xe=ke.clone().multiplyScalar(ue),Pe=Je.clone().multiplyScalar(Re),Ce=R.clone().multiplyScalar(ye),_e=(Q.min.x+Q.max.x)*.5,qe=(Q.min.y+Q.max.y)*.5,me=(Q.min.z+Q.max.z)*.5,mt=l(B).clone().addScaledVector(Xe,-_e).addScaledVector(Pe,-qe).addScaledVector(Ce,-me),nt=new pt().makeBasis(Xe,Pe,Ce);nt.setPosition(mt),nt.decompose(H.position,H.quaternion,H.scale)}else{const ie=B??D;if(!ie)continue;if(B&&!D){const Q=h(B);H.position.copy(Q)}else H.position.set(ie.position.x,ie.position.y,ie.position.z)}if(!(T&&K&&X&&B)){const ie=B??D;ie&&y(H,ie)}if(K&&X&&!T){const ie=r[X],Q=ie.sourceBounds??ie.bounds,le=(_.renderScale??.1)*s,He=B??D;if(!He)continue;const We=new I(He.up.x,He.up.y,He.up.z);We.lengthSq()<1e-8&&We.set(0,1,0),We.normalize();const ot=_.objectFlags??0,Ve=!!D;if(ot&4)H.position.addScaledVector(We,-(Q.max.y*le));else if(ot&8)H.position.addScaledVector(We,-(Q.min.y*le));else if(Ve){const qe=m(D.position.x,D.position.z,D.position.y),me=-(Q.min.y*le);if(H.position.x+=We.x*me,H.position.z+=We.z*me,qe!==null){let Fe=qe;if(D.position.y>qe){let mt=Number.NEGATIVE_INFINITY;for(const nt of x)D.position.x<nt.minX||D.position.x>nt.maxX||D.position.z<nt.minZ||D.position.z>nt.maxZ||nt.topY<qe||nt.topY>D.position.y+40||nt.topY>mt&&(mt=nt.topY);mt>Number.NEGATIVE_INFINITY&&(Fe=mt)}H.position.y=Fe+We.y*me+4*s}else H.position.y+=We.y*me}else{const qe=-(Q.min.y*le);H.position.addScaledVector(We,qe)}const Z=H.rotation.y,j=Math.cos(Z),ue=Math.sin(Z),Re=Q.min.x*le,ye=Q.max.x*le,ke=Q.min.z*le,Je=Q.max.z*le,R=[{x:Re,z:ke},{x:Re,z:Je},{x:ye,z:ke},{x:ye,z:Je}];let Xe=Number.POSITIVE_INFINITY,Pe=Number.NEGATIVE_INFINITY,Ce=Number.POSITIVE_INFINITY,_e=Number.NEGATIVE_INFINITY;for(const qe of R){const me=qe.x*j-qe.z*ue+H.position.x,Fe=qe.x*ue+qe.z*j+H.position.z;me<Xe&&(Xe=me),me>Pe&&(Pe=me),Fe<Ce&&(Ce=Fe),Fe>_e&&(_e=Fe)}Ve&&x.push({minX:Xe,maxX:Pe,minZ:Ce,maxZ:_e,topY:H.position.y+Q.max.y*le})}if(H.userData={propIndex:_.index,propType:_.type,propPadIndex:_.padIndex,propPrimaryIndex:_.primaryIndex,propObjectFlags:_.objectFlags??0,propModelName:X??`model_${_.primaryIndex}`,hasRealGeometry:K!==null},g.add(H),n.showLabels){const ie=X??_.type,Q=x_(ie,V.color),le=B??D;if(!le)continue;Q.position.set(le.position.x,le.position.y+V.h+24,le.position.z),g.add(Q)}}return g}async function S_(i){const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load stage data from ${i}: ${e.status}`);const t=await e.json();if(!t.stanTiles||!t.pads||!t.portals)throw new Error("Invalid stage JSON format");return t}async function oi(i,e){try{const t=await i.loadAsync(e);return t.wrapS=_n,t.wrapT=_n,t.colorSpace=Gt,t}catch{console.warn(`[overrides] texture not found: ${e}`);return}}function Yi(i){return i&&(i.colorSpace=pi),i}async function E_(i,e){let t;try{const o=await fetch(i);if(!o.ok)return[];t=await o.json()}catch{return[]}const n=new su,r=`${e}${t.basePath}`,s=[];for(const o of t.overrides){if(!o.materialIds||o.materialIds.length===0){console.warn(`[overrides] "${o.name}" has no materialIds — skipped`);continue}const a={heightScale:o.heightScale??0};o.albedo&&(a.albedo=await oi(n,`${r}${o.albedo}`)),o.normal&&(a.normal=Yi(await oi(n,`${r}${o.normal}`))),o.roughness&&(a.roughness=Yi(await oi(n,`${r}${o.roughness}`))),o.ao&&(a.ao=Yi(await oi(n,`${r}${o.ao}`))),o.metallic&&(a.metallic=Yi(await oi(n,`${r}${o.metallic}`))),o.alpha&&(a.alpha=Yi(await oi(n,`${r}${o.alpha}`))),o.height&&(a.height=Yi(await oi(n,`${r}${o.height}`))),console.log(`[overrides] loaded "${o.name}" for ${o.materialIds.length} material(s):`,o.materialIds),s.push({name:o.name,materialIds:new Set(o.materialIds),maps:a})}return s}function b_(i){const e=new Set;for(const t of i)t.materialIds.forEach(n=>e.add(n));return e}class T_{constructor(e,t=1,n=!0){hn(this,"group",new Xt);hn(this,"eyeAnchor",new yt);hn(this,"weaponAnchor",new yt);hn(this,"bodyPivot",new yt);hn(this,"clip");hn(this,"clipDuration");hn(this,"elapsed",0);hn(this,"gunMaterial",new gn({color:16777215,vertexColors:!0}));hn(this,"bodyGraphRuntime",null);hn(this,"headGraphRuntime",null);var s,o,a,c,l,u,h,f,m,g,x,p,d;if(this.asset=e,!e.clips[0])throw new Error("Bond intro asset missing required clip");if(this.clip=e.clips[0],this.clipDuration=Math.max(.001,this.clip.durationSec),n&&((a=(o=(s=e.graph)==null?void 0:s.body)==null?void 0:o.nodes)!=null&&a.length)&&((u=(l=(c=e.graph)==null?void 0:c.body)==null?void 0:l.chunks)!=null&&u.length)){if(this.bodyGraphRuntime=Dc(e.graph.body,new gn({color:16777215,vertexColors:!0})),this.bodyPivot.add(this.bodyGraphRuntime.root),(f=(h=e.graph.head)==null?void 0:h.nodes)!=null&&f.length&&((g=(m=e.graph.head)==null?void 0:m.chunks)!=null&&g.length)){this.headGraphRuntime=Dc(e.graph.head,new gn({color:16777215,vertexColors:!0}));const C=e.graph.body.headPlaceholderNodeId,w=C!==null?this.bodyGraphRuntime.nodesById.get(C):void 0;w?w.object.add(this.headGraphRuntime.root):this.bodyPivot.add(this.headGraphRuntime.root)}Lc(this.bodyGraphRuntime)}else{const C=Zs(e.models.body,new gn({color:16777215,vertexColors:!0}),!1,e.actor.bodyBoundingRadius>0?e.actor.bodyBoundingRadius:void 0);C.position.y=0,this.bodyPivot.add(C);const w=Zs(e.models.head,new gn({color:16777215,vertexColors:!0}),!1,e.actor.headBoundingRadius>0?e.actor.headBoundingRadius:void 0);w.position.set(0,58,1.1),this.bodyPivot.add(w)}this.group.add(this.bodyPivot),this.group.scale.setScalar(t*(e.actor.scale||1));const r=R_(e);if(this.bodyGraphRuntime&&((d=(p=(x=e.graph)==null?void 0:x.body)==null?void 0:p.switchTable)!=null&&d.length)){const C=new Map;for(const A of e.graph.body.switchTable)C.set(A.index,A.nodeId);const w=C.get(4),E=C.get(3),L=w!==void 0?this.bodyGraphRuntime.nodesById.get(w):void 0,P=E!==void 0?this.bodyGraphRuntime.nodesById.get(E):void 0;L?(L.object.add(this.eyeAnchor),this.eyeAnchor.position.set(0,8,1.5)):(this.eyeAnchor.position.copy(r.eye),this.group.add(this.eyeAnchor)),P?(P.object.add(this.weaponAnchor),this.weaponAnchor.position.set(0,0,0)):(this.weaponAnchor.position.copy(r.weapon),this.group.add(this.weaponAnchor))}else this.eyeAnchor.position.copy(r.eye),this.weaponAnchor.position.copy(r.weapon),this.group.add(this.eyeAnchor),this.group.add(this.weaponAnchor)}setWorldPosition(e){this.group.position.copy(e)}setFacingFromOrientation(e){const t=Math.atan2(e.x,e.z);this.group.rotation.y=t}tick(e){this.elapsed=Math.min(this.clipDuration,this.elapsed+e);const t=C_(this.clip,this.elapsed);return this.bodyPivot.rotation.y=t.yawRad,this.bodyPivot.rotation.z=t.lean,this.bodyGraphRuntime&&Lc(this.bodyGraphRuntime),t}get normalizedTime(){return this.elapsed/this.clipDuration}createGunMesh(){const e=Zs(this.asset.models.gun,this.gunMaterial,!0);return e.scale.setScalar(this.asset.models.gunSourceScale),e}}function Dc(i,e,t){var o;const n=new Xt,r=new Map,s=w_();for(const a of i.nodes){const c=new yt;a.origin&&c.position.set(a.origin.x,a.origin.y,a.origin.z),r.set(a.id,{def:a,object:c})}for(const a of r.values())a.def.parentId===null?n.add(a.object):(o=r.get(a.def.parentId))==null||o.object.add(a.object);for(const a of i.chunks){const c={triangles:a.triangles,materialIds:a.materialIds,bounds:a.bounds,sourceBounds:i.sourceBounds},l=new gn({color:A_(a.nodeId),map:s,side:Pt}),u=Zs(c,l,!1),h=r.get(a.nodeId);h&&h.object.add(u)}return{root:n,nodesById:r,rootNodeId:i.rootNodeId}}let ks=null;function w_(){if(ks)return ks;const i=document.createElement("canvas");i.width=128,i.height=128;const e=i.getContext("2d");if(!e){const r=new ss(i);return r.wrapS=_n,r.wrapT=_n,r.repeat.set(2,2),ks=r,r}const t=16;for(let r=0;r<i.height;r+=t)for(let s=0;s<i.width;s+=t){const o=(s/t+r/t)%2===0;e.fillStyle=o?"#d9d9d9":"#3f3f3f",e.fillRect(s,r,t,t)}e.strokeStyle="#202020",e.lineWidth=2,e.strokeRect(0,0,i.width,i.height);const n=new ss(i);return n.wrapS=_n,n.wrapT=_n,n.repeat.set(2,2),n.needsUpdate=!0,ks=n,n}function A_(i){const e=(i*.173%1+1)%1;return new Be().setHSL(e,.55,.62)}function Lc(i){const e=new Set,t=n=>{let r=n,s=0;for(;r!=null&&s<1e5&&(s+=1,!e.has(r));){const o=i.nodesById.get(r);if(!o)break;e.add(r);let a=o.def.childId;o.def.opcode===18?a=o.def.controlsNodeId??o.def.childId:o.def.opcode===8&&(a=o.def.affectsNodeId??o.def.childId),a!=null&&t(a),r=o.def.nextId}};t(i.rootNodeId);for(const[n,r]of i.nodesById.entries())r.object.visible=e.has(n)}function R_(i){var o;const e=new I(0,i.rig.eyeHeight,1.6),t=new I(i.rig.shoulderWidth*.58,i.rig.eyeHeight-7,i.rig.handForward),n=((o=i.switches)==null?void 0:o.body)??[],r=n.find(a=>a.index===4),s=n.find(a=>a.index===3);return r&&e.set(r.accumulatedOrigin.x,r.accumulatedOrigin.y+8,r.accumulatedOrigin.z+1.5),s&&t.set(s.accumulatedOrigin.x,s.accumulatedOrigin.y,s.accumulatedOrigin.z),{eye:e,weapon:t}}function C_(i,e){if(i.keyframes.length===0)return{yawRad:0,weaponRaise:1,lean:0};if(i.keyframes.length===1){const r=i.keyframes[0];return{yawRad:dt.degToRad(r.yawDeg),weaponRaise:r.weaponRaise,lean:r.lean}}const t=dt.clamp(e,0,i.durationSec);for(let r=0;r<i.keyframes.length-1;r+=1){const s=i.keyframes[r],o=i.keyframes[r+1];if(t>o.t)continue;const a=Math.max(1e-4,o.t-s.t),c=dt.clamp((t-s.t)/a,0,1),l=dt.lerp(s.yawDeg,o.yawDeg,c);return{yawRad:dt.degToRad(l),weaponRaise:dt.lerp(s.weaponRaise,o.weaponRaise,c),lean:dt.lerp(s.lean,o.lean,c)}}const n=i.keyframes[i.keyframes.length-1];return{yawRad:dt.degToRad(n.yawDeg),weaponRaise:n.weaponRaise,lean:n.lean}}function Zs(i,e,t=!1,n){if(!i.triangles||i.triangles.length===0)throw new Error("Prop model geometry has no triangles");const r=[],s=[],o=[];for(const c of i.triangles)for(const l of[c.a,c.b,c.c])r.push(l.x,l.y,l.z),s.push(l.r/255,l.g/255,l.b/255),o.push(l.u/32,l.v/32);const a=new xt;return a.setAttribute("position",new Ge(r,3)),a.setAttribute("color",new Ge(s,3)),a.setAttribute("uv",new Ge(o,2)),t&&i.sourceBounds&&P_(a,i),n&&n>0&&I_(a,n),a.computeVertexNormals(),new Tt(a,e)}function P_(i,e){if(!e.sourceBounds)return;i.computeBoundingBox();const t=i.boundingBox,n=i.getAttribute("position");if(!t||!n)return;const r=e.sourceBounds,s=(o,a,c,l,u)=>{const h=c-a;if(Math.abs(h)<1e-8)return l;const f=(o-a)/h;return l+(u-l)*f};for(let o=0;o<n.count;o+=1)n.setXYZ(o,s(n.getX(o),t.min.x,t.max.x,r.min.x,r.max.x),s(n.getY(o),t.min.y,t.max.y,r.min.y,r.max.y),s(n.getZ(o),t.min.z,t.max.z,r.min.z,r.max.z));n.needsUpdate=!0}function I_(i,e){const t=i.getAttribute("position");if(!t)return;const n=[];for(let a=0;a<t.count;a+=1){const c=t.getX(a),l=t.getY(a),u=t.getZ(a),h=c*c+l*l+u*u;n.push(h)}if(n.length===0)return;n.sort((a,c)=>a-c);const r=Math.max(0,Math.min(n.length-1,Math.floor(n.length*.98))),s=Math.sqrt(n[r]);if(!(s>1e-4))return;const o=e/s;for(let a=0;a<t.count;a+=1)t.setXYZ(a,t.getX(a)*o,t.getY(a)*o,t.getZ(a)*o);t.needsUpdate=!0}async function D_(i,e=1,t={}){const n=await fetch(i);if(!n.ok)throw new Error(`Failed to load Bond intro asset: ${n.status}`);const r=await n.json();return new T_(r,e,!t.forceLegacy)}function L_(i){let e=Number.POSITIVE_INFINITY,t=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY,o=Number.NEGATIVE_INFINITY;for(const a of i)for(const c of[a.a,a.b,a.c])c.x<e&&(e=c.x),c.y<t&&(t=c.y),c.z<n&&(n=c.z),c.x>r&&(r=c.x),c.y>s&&(s=c.y),c.z>o&&(o=c.z);return{minX:e,maxX:r,minY:t,maxY:s,minZ:n,maxZ:o}}function $a(i){return i/65536}function U_(i){var t,n;const e=(n=(t=i.intro)==null?void 0:t.spawns.find(r=>r.isDemoPlayback===0))==null?void 0:n.pad;return e!==void 0?i.pads[e]??null:i.pads[0]??null}function F_(i){var e,t;return((t=(e=i.intro)==null?void 0:e.startWeapons.find(n=>n.isDemoPlayback===0))==null?void 0:t.itemRight)??5}function N_(i){return{5:"PP7",8:"KF7 Soviet",26:"D5K Deutsche"}[i]??`ITEM_${i}`}async function O_(){const i=document.getElementById("app");if(!i)throw new Error("Missing #app element");const e=new Be(16/255,48/255,64/255),t=new Be(527380),n=new Be(14213870);let r=0,s=1,o="hazy";const a=cl();function c(){if(o==="off"){l.fog=null,l.background=t.clone(),a.uFogEnabled.value=0;return}const U=q(r,0,2),te=Math.min(1,U),ae=q(s,0,2),Te=Math.min(1,ae),rt=e.clone().lerp(n,.82*te);l.background=rt.clone(),a.uFogEnabled.value=1,a.uFogColor.value.copy(rt);let Ke=200,Ne=1200;o==="gameplay"?(Ke=500,Ne=2500):(Ke=200,Ne=1200);const Rt=dt.lerp(120,40,Te),Zt=dt.lerp(850,360,Te);if(Ke=dt.lerp(Ke,Rt,te),Ne=dt.lerp(Ne,Zt,te),U>1){const un=U-1;Ke=dt.lerp(Ke,24,un*.8),Ne=dt.lerp(Ne,240,un*.8)}l.fog=new tl(rt.clone(),Ke,Ne),a.uFogNear.value=Ke,a.uFogFar.value=Ne}const l=new Qh;c();const u=new an(70,window.innerWidth/window.innerHeight,.1,2e4);u.position.set(850,420,-1250),u.rotation.order="YXZ",u.lookAt(850,0,-900);let h=u.rotation.y,f=u.rotation.x,m=!1,g=280,x=.0012;const p=new s_({antialias:!0});p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.toneMapping=En,p.toneMappingExposure=1,p.shadowMap.enabled=!1,p.shadowMap.type=Fc,i.appendChild(p.domElement);let d=!1;const C=document.getElementById("fly-overlay"),w=document.getElementById("fly-hint");function E(U){d=U,C&&(C.style.display=U?"none":"flex"),w&&(U?w.textContent="Esc — exit fly mode":m?w.textContent="Click canvas to lock pointer":w.textContent="")}E(!1),document.addEventListener("pointerlockchange",()=>{const U=document.pointerLockElement===p.domElement;m&&!U&&dl(!0),E(U&&m)}),document.addEventListener("mousemove",U=>{document.pointerLockElement===p.domElement&&(h-=U.movementX*x,f-=U.movementY*x,f=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,f)),u.rotation.order="YXZ",u.rotation.y=h,u.rotation.x=f)});const L=new md(16777215,0);l.add(L);const P=new dd(14477567,3158080,.25);l.add(P);const A=new nc(16774368,.3);A.position.set(1700,2300,-900),A.castShadow=!1,A.shadow.mapSize.set(4096,4096),A.shadow.camera.near=50,A.shadow.camera.far=9e3,A.shadow.camera.left=-3e3,A.shadow.camera.right=3e3,A.shadow.camera.top=2500,A.shadow.camera.bottom=-2500,A.shadow.bias=-3e-4,A.shadow.normalBias=.55,A.target.position.set(900,0,-1400),l.add(A.target),l.add(A);const O=new nc(11585791,.1);O.position.set(-900,700,500),l.add(O);const y=new Md(A,180,16768426);y.visible=!1,l.add(y);const _=new yd(A.shadow.camera);_.visible=!1,l.add(_);const T=new xd(6e3,120,4146520,2106931);l.add(T),T.visible=!1;const D=await S_("/007/web/dist/data/stages/runway.json"),B=D.stageLevelScale??1,V=U_(D),X=F_(D),K=N_(X);let H="",ie=null;const Q=l_(D.roomTriangles);let le=null;const We=await E_("/007/web/dist/data/stages/runway_overrides.json","/007/web/dist/"),ot=b_(We);let Ve=null,Z=null,j=!0;const ue=L_(D.roomTriangles),Re=V?new I(V.position.x,V.position.y,V.position.z):new I((ue.minX+ue.maxX)*.5,ue.minY+8,(ue.minZ+ue.maxZ)*.5),ye=V?new I(V.orientation.x,V.orientation.y,V.orientation.z):new I(0,0,1),ke=new URLSearchParams(window.location.search).get("bondGraph")==="0",Je=await D_("/007/web/dist/data/actors/bond_intro.json",B,{forceLegacy:ke});Je.setWorldPosition(Re),Je.setFacingFromOrientation(ye),l.add(Je.group);const R=Je.createGunMesh();R.position.set(0,0,.5),R.rotation.set(-.08,-Math.PI*.5,.02),Je.weaponAnchor.add(R);const Xe=Je.createGunMesh();Xe.position.set(.18,-.22,-.56),Xe.rotation.set(-.1,-Math.PI*.5,.04),Xe.visible=!1,u.add(Xe),l.add(u);let Pe="IntroOrbit",Ce=null,_e=0;const qe=.85,me=new I,Fe=new I,mt=new Ln,nt=new Ln,b=new I,v=new Ln;let k=h,$=f;const ee=52*B,Y=new I,Ee=Re.clone();Ee.y=Re.y;const oe=new I(Re.x,Re.y+ee,Re.z),ge=document.createElement("div");if(ge.style.position="fixed",ge.style.left="14px",ge.style.bottom="10px",ge.style.padding="6px 10px",ge.style.background="rgba(4,7,12,0.62)",ge.style.color="#c6d8ea",ge.style.fontFamily="monospace",ge.style.fontSize="12px",ge.style.border="1px solid rgba(141,178,214,0.32)",ge.style.borderRadius="4px",ge.style.zIndex="20",ge.textContent=`start weapon: ${K} | levelscale: ${B.toFixed(6)}`,i.appendChild(ge),D.atlas){H=`/007/web/dist/data/stages/${D.atlas.atlasImage}`;const U=await new su().loadAsync(H);ie=U,le=c_(D.roomTriangles,D.atlas,U,new Set,a),We.length>0&&(Ve=u_(D.roomTriangles,D.atlas,We),l.add(Ve)),Z=d_(D.roomTriangles,D.atlas,ot),l.add(Z)}let Me=le!==null,se=Me?le:Q;l.add(se);let he=!0;function Oe(){const U=!!(Ve&&Ve.children.length>0),te=!!(Z&&Z.children.length>0);return U||te}function we(){return!!(Oe()&&j&&Me&&he)}function de(){const U=we();le&&(le.visible=Me&&he&&!U),Q.visible=!Me&&he,Ve&&(Ve.visible=U),Z&&(Z.visible=U)}de();const Ye={midday:{exposure:1.18,hemiIntensity:.85,sunIntensity:2.55,fillIntensity:.42,ambientIntensity:.08,sunAzimuthDeg:-28,sunElevationDeg:52,sunDistance:3300,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:4096,shadowRadius:2800,shadowNear:50,shadowFar:9e3,shadowBias:-3e-4,shadowNormalBias:.55,flareEnabled:!0,flareIntensity:1,showHelpers:!1},dawn:{exposure:1.23,hemiIntensity:.95,sunIntensity:2.25,fillIntensity:.55,ambientIntensity:.12,sunAzimuthDeg:-70,sunElevationDeg:18,sunDistance:3500,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:4096,shadowRadius:3e3,shadowNear:30,shadowFar:9500,shadowBias:-35e-5,shadowNormalBias:.65,flareEnabled:!0,flareIntensity:.9,showHelpers:!1},overcast:{exposure:1.1,hemiIntensity:1.25,sunIntensity:1.15,fillIntensity:.7,ambientIntensity:.2,sunAzimuthDeg:-40,sunElevationDeg:40,sunDistance:3200,targetX:900,targetY:0,targetZ:-1400,shadowEnabled:!0,shadowMapSize:2048,shadowRadius:2800,shadowNear:50,shadowFar:9e3,shadowBias:-25e-5,shadowNormalBias:.45,flareEnabled:!0,flareIntensity:.55,showHelpers:!1}},S={...Ye.midday};function q(U,te,ae){return Math.max(te,Math.min(ae,U))}function ce(){const U=dt.degToRad(S.sunAzimuthDeg),te=dt.degToRad(S.sunElevationDeg),ae=Math.cos(te)*S.sunDistance;A.target.position.set(S.targetX,S.targetY,S.targetZ),A.position.set(S.targetX+Math.cos(U)*ae,S.targetY+Math.sin(te)*S.sunDistance,S.targetZ+Math.sin(U)*ae),A.target.updateMatrixWorld(),y.update()}function Se(){const U=Number.isFinite(S.shadowMapSize)?S.shadowMapSize:2048;A.shadow.mapSize.set(U,U),A.shadow.map&&(A.shadow.map.dispose(),A.shadow.map=null),A.shadow.camera.near=Math.max(.1,S.shadowNear),A.shadow.camera.far=Math.max(S.shadowNear+1,S.shadowFar);const te=Math.max(100,S.shadowRadius);A.shadow.camera.left=-te,A.shadow.camera.right=te,A.shadow.camera.top=te,A.shadow.camera.bottom=-te,A.shadow.bias=S.shadowBias,A.shadow.normalBias=S.shadowNormalBias,A.shadow.camera.updateProjectionMatrix(),A.shadow.needsUpdate=!0,_.update()}function re(){y.visible=S.showHelpers,_.visible=S.showHelpers}function J(U,te=256){const ae=document.createElement("canvas");ae.width=te,ae.height=te;const Te=ae.getContext("2d");if(!Te){const Ne=new Ot;return Ne.needsUpdate=!0,Ne}const rt=Te.createRadialGradient(te/2,te/2,0,te/2,te/2,te/2);for(const Ne of U)rt.addColorStop(Ne.offset,Ne.color);Te.fillStyle=rt,Te.fillRect(0,0,te,te);const Ke=new ss(ae);return Ke.colorSpace=Gt,Ke.needsUpdate=!0,Ke}const be=J([{offset:0,color:"rgba(255,250,210,1.0)"},{offset:.2,color:"rgba(255,232,170,0.9)"},{offset:.5,color:"rgba(255,200,120,0.45)"},{offset:1,color:"rgba(255,170,90,0.0)"}]),ze=J([{offset:0,color:"rgba(175,210,255,0.85)"},{offset:.55,color:"rgba(140,180,255,0.22)"},{offset:1,color:"rgba(140,180,255,0.0)"}]);function st(U,te){const ae=new ta({map:U,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ka}),Te=new nl(ae);return Te.scale.set(te,te,1),Te.renderOrder=999,Te}const et=new Xt;et.name="sun-flare",et.visible=!1,l.add(et);const jt=st(be,760),Yt=st(be,1600),_i=st(ze,360),ln=st(ze,230),Kn=st(ze,140);et.add(jt,Yt,_i,ln,Kn);function rr(U){jt.material.opacity=.72*U,Yt.material.opacity=.26*U,_i.material.opacity=.22*U,ln.material.opacity=.17*U,Kn.material.opacity=.12*U}function ls(){if(!et.visible)return;const U=A.target.position,te=A.position.clone().sub(U).normalize(),ae=u.position.clone().addScaledVector(te,8500),Te=ae.clone().project(u),rt=Te.z>-1&&Te.z<1,Ke=Math.abs(Te.x)<=1.35&&Math.abs(Te.y)<=1.35;if(!rt||!Ke){rr(0);return}const Ne=1-q(Math.max(Math.abs(Te.x),Math.abs(Te.y)),0,1),Rt=q(Ne*S.flareIntensity,0,2.5);rr(Rt),jt.position.copy(ae),Yt.position.copy(ae);const Zt=(un,hs)=>{const yl=new I(Te.x*(1-2*hs),Te.y*(1-2*hs),Te.z);yl.unproject(u),un.position.copy(yl)};Zt(_i,.25),Zt(ln,.55),Zt(Kn,.82)}function jn(U){l.traverse(te=>{te instanceof Tt&&(te.castShadow=U,te.receiveShadow=U)})}function cs(U){const te=U==="remaster";p.toneMapping=te?Oc:En,p.toneMappingExposure=te?S.exposure:1,p.shadowMap.enabled=te&&S.shadowEnabled,te?(P.intensity=S.hemiIntensity,A.intensity=S.sunIntensity,O.intensity=S.fillIntensity,L.intensity=S.ambientIntensity,A.castShadow=S.shadowEnabled,O.castShadow=!1,jn(S.shadowEnabled),et.visible=S.flareEnabled,ce(),Se()):(P.intensity=.2,A.intensity=.3,O.intensity=.1,L.intensity=0,A.castShadow=!1,O.castShadow=!1,jn(!1),et.visible=!1),re()}function nn(){const U=we();cs(U?"remaster":"n64"),Ue()}const sr=8e3,vi=8e6,aa=12e4,Le={enabled:!0,intensity:12,speed:44,gravity:10,size:3,wind:9,windDirectionDeg:30,driftRandomness:1.15,sizeVariation:.45,hazeIntensity:1,hazeCloseness:1},xi=ue.minX-180,ar=ue.maxX+180,Mi=ue.minZ-180,or=ue.maxZ+180,M=Math.max(1,ar-xi),N=Math.max(1,or-Mi),G=ue.minY-50,W=ue.maxY+600,z=Math.max(1,W-G);let ne=Math.min(aa,vi),fe=new Float32Array(ne*3),xe=new Float32Array(ne);function ve(U,te,ae){const Te=U*3;te[Te+0]=dt.lerp(xi,ar,Math.random()),te[Te+1]=G+Math.random()*z,te[Te+2]=dt.lerp(Mi,or,Math.random()),ae[U]=Math.random()}for(let U=0;U<ne;U+=1)ve(U,fe,xe);const Ie=new xt;Ie.setAttribute("position",new Wt(fe,3)),Ie.setAttribute("aSeed",new Wt(xe,1)),Ie.setDrawRange(0,Math.floor(sr*Le.intensity));const De=new tn({transparent:!0,depthWrite:!1,depthTest:!0,blending:di,uniforms:{uTime:{value:0},uMinX:{value:xi},uRangeX:{value:M},uMinY:{value:G},uRangeY:{value:z},uMinZ:{value:Mi},uRangeZ:{value:N},uFallSpeed:{value:Le.speed},uGravity:{value:Le.gravity},uWindX:{value:0},uWindZ:{value:0},uDriftRandomness:{value:Le.driftRandomness},uSize:{value:Le.size},uOpacity:{value:.85},uSizeVariation:{value:Le.sizeVariation}},vertexShader:`
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
    `}),Ae=new sd(Ie,De);Ae.name="remaster-snow",Ae.frustumCulled=!1,Ae.renderOrder=950,l.add(Ae);const tt=new tr(new I(xi-260,G-120,Mi-260),new I(ar+260,W+120,or+260)),lt=new na,Mt=new pt;let ct=!1;function ut(){if(!ct){Ae.visible=!1;return}u.updateMatrixWorld(),Mt.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),lt.setFromProjectionMatrix(Mt),Ae.visible=lt.intersectsBox(tt)}function Ue(){ct=we()&&Le.enabled&&Ie.drawRange.count>0,ut(),r=ct?q(Le.hazeIntensity,0,2):0,s=ct?q(Le.hazeCloseness,0,2):1,c()}function _t(){const U=q(Le.intensity,0,1e3),te=Math.min(vi,Math.floor(sr*U));if(te>ne){const rt=Math.min(vi,Math.max(te,Math.floor(ne*2))),Ke=new Float32Array(rt*3),Ne=new Float32Array(rt);Ke.set(fe),Ne.set(xe);for(let Rt=ne;Rt<rt;Rt+=1)ve(Rt,Ke,Ne);fe=Ke,xe=Ne,ne=rt,Ie.setAttribute("position",new Wt(fe,3)),Ie.setAttribute("aSeed",new Wt(xe,1))}Ie.setDrawRange(0,te),De.uniforms.uFallSpeed.value=q(Le.speed,.05,220),De.uniforms.uGravity.value=q(Le.gravity,0,80),De.uniforms.uSize.value=q(Le.size,.5,12);const ae=q(Le.wind,0,60),Te=dt.degToRad(Le.windDirectionDeg);De.uniforms.uWindX.value=Math.cos(Te)*ae*.14,De.uniforms.uWindZ.value=Math.sin(Te)*ae*.14,De.uniforms.uDriftRandomness.value=q(Le.driftRandomness,0,4),De.uniforms.uSizeVariation.value=q(Le.sizeVariation,0,.95),De.uniforms.uOpacity.value=.85,Ue()}_t(),nn();const Qe=o_(D.stanTiles);Qe.name="stan",Qe.visible=!1,l.add(Qe);const Lt=f_(D.pads);Lt.visible=!1,l.add(Lt);const cn=g_(D.portals);cn.visible=!1,l.add(cn);let St=null;const wn=document.getElementById("prop-type-panel"),vt=document.getElementById("prop-type-list"),Ut=new Map,qt=new Set(["AmmoBox","Collectable","Guard","Hat"]);function Ft(){St&&St.traverse(U=>{var ae;if(!(U instanceof Tt))return;const te=(ae=U.userData)==null?void 0:ae.propType;te&&(U.visible=Ut.get(te)??!0)})}function Bt(){if(!vt||!D.propPlacements)return;const U=new Map;for(const ae of D.propPlacements)U.set(ae.type,(U.get(ae.type)??0)+1),Ut.has(ae.type)||Ut.set(ae.type,!qt.has(ae.type));const te=[...U.keys()].sort((ae,Te)=>ae.localeCompare(Te));vt.innerHTML="";for(const ae of te){const Te=document.createElement("div");Te.className="prop-type-row";const rt=document.createElement("label"),Ke=document.createElement("input");Ke.type="checkbox",Ke.checked=Ut.get(ae)??!1,Ke.addEventListener("change",()=>{Ut.set(ae,Ke.checked),Ft()});const Ne=document.createElement("span");Ne.textContent=ae,rt.appendChild(Ke),rt.appendChild(Ne);const Rt=document.createElement("span");Rt.className="prop-type-count",Rt.textContent=String(U.get(ae)??0),Te.appendChild(rt),Te.appendChild(Rt),vt.appendChild(Te)}}D.propPlacements&&D.propPlacements.length>0&&(St=y_(D.propPlacements,D.pads,D.propModelNames??[],{showLabels:!1,stageLevelScale:D.stageLevelScale??1,stanTiles:D.stanTiles??[],boundPads:D.boundPads??[],atlas:D.atlas,atlasTexture:ie??void 0,fogUniforms:a},D.propModels??{}),St.visible=!1,l.add(St),Bt(),Ft());const Nn=m_(D.roomCenters);Nn.visible=!1,l.add(Nn),nn();let Jt=!1;const rn={forward:!1,back:!1,left:!1,right:!1},du=new _d,Jn=new I,us=new I,yi=new I,fu=new I,lr=new I,ul=new Ln,hl=(()=>{var te,ae;const U=(ae=(te=D.intro)==null?void 0:te.swirlCams)==null?void 0:ae[0];return U?new I($a(U.x),$a(U.y),$a(U.z)):new I(0,38,-84)})();function pu(U){const te=Je.tick(U);Je.eyeAnchor.getWorldPosition(oe);const ae=fu.copy(oe);ae.y+=dt.lerp(1.2,0,Je.normalizedTime);const Te=Je.normalizedTime,rt=dt.lerp(-1.95,.22,Te),Ke=dt.lerp(Math.max(95,hl.length()+24),14,dt.smoothstep(Te,.2,1)),Ne=dt.lerp(30+hl.y*.25,2.4,Te);if(u.position.set(ae.x+Math.sin(rt)*Ke,ae.y+Ne,ae.z+Math.cos(rt)*Ke),lr.copy(ae),lr.y+=dt.lerp(5,0,Te),u.lookAt(lr),h=u.rotation.y,f=u.rotation.x,R.visible=!0,Xe.visible=!1,Xe.position.y=-.24+.16*te.weaponRaise,Te>=.999){Pe="EnterFirstPerson",_e=0,me.copy(u.position),mt.copy(u.quaternion),Fe.copy(ae),lr.copy(ae).addScaledVector(ye,32);const Rt=new pt().lookAt(ae,lr,new I(0,1,0));nt.setFromRotationMatrix(Rt).invert(),R.visible=!1,Xe.visible=!1,p.domElement.requestPointerLock()}}function mu(U){_e=Math.min(qe,_e+U);const te=dt.smoothstep(_e/qe,0,1);u.position.lerpVectors(me,Fe,te),ul.slerpQuaternions(mt,nt,te),u.quaternion.copy(ul),h=u.rotation.y,f=u.rotation.x,Xe.position.y=dt.lerp(-.08,-.22,te),_e>=qe&&(Pe="FirstPerson",Je.group.visible=!1,Xe.position.y=-.22,Xe.visible=!1,Ee.copy(Fe),Ee.y=Re.y,h=u.rotation.y,f=u.rotation.x)}function gu(U){const rt=(rn.right?1:0)-(rn.left?1:0),Ke=(rn.forward?1:0)-(rn.back?1:0),Ne=new I;(rt!==0||Ke!==0)&&(Jn.set(-Math.sin(h),0,-Math.cos(h)),us.set(-Jn.z,0,Jn.x),Ne.addScaledVector(Jn,Ke),Ne.addScaledVector(us,rt),Ne.lengthSq()>0&&Ne.normalize().multiplyScalar(182)),Y.x=dt.damp(Y.x,Ne.x,10,U),Y.z=dt.damp(Y.z,Ne.z,10,U),Y.x+=(Ne.x-Y.x)*Math.min(1,820*U/182),Y.z+=(Ne.z-Y.z)*Math.min(1,820*U/182),Ee.addScaledVector(Y,U),u.position.set(Ee.x,Ee.y+ee,Ee.z),u.rotation.order="YXZ",u.rotation.y=h,u.rotation.x=f}function _u(){m||(m=!0,Ce=Pe,b.copy(u.position),v.copy(u.quaternion),k=h,$=f,Je.group.visible=!0,R.visible=!0,Xe.visible=!1,p.domElement.requestPointerLock())}function dl(U=!1){m&&(m=!1,U||document.exitPointerLock(),u.position.copy(b),u.quaternion.copy(v),h=k,f=$,Ce&&(Pe=Ce),Pe==="FirstPerson"&&(Je.group.visible=!1,R.visible=!1,Xe.visible=!1),Ce=null)}function fl(U,te){switch(U.toLowerCase()){case"w":case"arrowup":return rn.forward=te,!0;case"s":case"arrowdown":return rn.back=te,!0;case"a":case"arrowleft":return rn.left=te,!0;case"d":case"arrowright":return rn.right=te,!0;default:return!1}}const Qn=document.getElementById("atlas-overlay"),oa=document.getElementById("atlas-img"),pl=document.getElementById("atlas-grid");oa&&H&&(oa.src=H),pl&&D.atlas&&H&&B_(pl,D.atlas,H);function vu(){Qn==null||Qn.classList.toggle("visible")}Qn==null||Qn.addEventListener("click",()=>{Qn.classList.remove("visible")});const ei=document.getElementById("lighting-panel"),la=document.getElementById("light-preset"),ca=document.getElementById("light-apply-preset"),cr=document.getElementById("light-exposure"),ur=document.getElementById("light-hemi"),hr=document.getElementById("light-sun-intensity"),dr=document.getElementById("light-fill"),fr=document.getElementById("light-ambient"),pr=document.getElementById("light-sun-azimuth"),mr=document.getElementById("light-sun-elevation"),gr=document.getElementById("light-sun-distance"),_r=document.getElementById("light-target-x"),vr=document.getElementById("light-target-y"),xr=document.getElementById("light-target-z"),Si=document.getElementById("light-shadows-enabled"),Ei=document.getElementById("light-shadow-size"),Mr=document.getElementById("light-shadow-radius"),yr=document.getElementById("light-shadow-near"),Sr=document.getElementById("light-shadow-far"),Er=document.getElementById("light-shadow-bias"),br=document.getElementById("light-shadow-normal-bias"),bi=document.getElementById("light-flare-enabled"),Tr=document.getElementById("light-flare-intensity"),On=document.getElementById("light-show-helpers"),Bn=document.getElementById("light-snow-enabled"),wr=document.getElementById("light-snow-intensity"),Ar=document.getElementById("light-snow-speed"),Rr=document.getElementById("light-snow-gravity"),Cr=document.getElementById("light-snow-size"),Pr=document.getElementById("light-snow-wind"),Ir=document.getElementById("light-snow-wind-dir"),Dr=document.getElementById("light-snow-drift-rand"),Lr=document.getElementById("light-snow-size-var"),Ur=document.getElementById("light-snow-haze-intensity"),Fr=document.getElementById("light-snow-haze-close"),Nr=document.getElementById("light-fly-speed"),Or=document.getElementById("light-fly-sensitivity");function ua(){ei&&(cr&&(cr.value=S.exposure.toFixed(2)),ur&&(ur.value=S.hemiIntensity.toFixed(2)),hr&&(hr.value=S.sunIntensity.toFixed(2)),dr&&(dr.value=S.fillIntensity.toFixed(2)),fr&&(fr.value=S.ambientIntensity.toFixed(2)),pr&&(pr.value=S.sunAzimuthDeg.toFixed(0)),mr&&(mr.value=S.sunElevationDeg.toFixed(0)),gr&&(gr.value=S.sunDistance.toFixed(0)),_r&&(_r.value=S.targetX.toFixed(0)),vr&&(vr.value=S.targetY.toFixed(0)),xr&&(xr.value=S.targetZ.toFixed(0)),Si&&(Si.checked=S.shadowEnabled),Ei&&(Ei.value=String(S.shadowMapSize)),Mr&&(Mr.value=S.shadowRadius.toFixed(0)),yr&&(yr.value=S.shadowNear.toFixed(0)),Sr&&(Sr.value=S.shadowFar.toFixed(0)),Er&&(Er.value=S.shadowBias.toFixed(5)),br&&(br.value=S.shadowNormalBias.toFixed(2)),bi&&(bi.checked=S.flareEnabled),Tr&&(Tr.value=S.flareIntensity.toFixed(2)),On&&(On.checked=S.showHelpers),Bn&&(Bn.checked=Le.enabled),wr&&(wr.value=Le.intensity.toFixed(1)),Ar&&(Ar.value=Le.speed.toFixed(1)),Rr&&(Rr.value=Le.gravity.toFixed(1)),Cr&&(Cr.value=Le.size.toFixed(1)),Pr&&(Pr.value=Le.wind.toFixed(1)),Ir&&(Ir.value=Le.windDirectionDeg.toFixed(0)),Dr&&(Dr.value=Le.driftRandomness.toFixed(2)),Lr&&(Lr.value=Le.sizeVariation.toFixed(2)),Ur&&(Ur.value=Le.hazeIntensity.toFixed(2)),Fr&&(Fr.value=Le.hazeCloseness.toFixed(2)),Nr&&(Nr.value=g.toFixed(0)),Or&&(Or.value=x.toFixed(4)))}function ht(U,te,ae,Te){var Rt;if(!U||U.dataset.sliderBound==="1"||(U.min=String(te),U.max=String(ae),U.step=String(Te),!U.parentElement))return;const Ke=document.createElement("div");Ke.className="light-dual";const Ne=document.createElement("input");Ne.type="range",Ne.min=String(te),Ne.max=String(ae),Ne.step=String(Te),Ne.value=U.value||String(te),(Rt=U.parentElement)==null||Rt.insertBefore(Ke,U),Ke.appendChild(Ne),Ke.appendChild(U),Ne.addEventListener("input",()=>{U.value=Ne.value,ha()}),U.addEventListener("input",()=>{const Zt=Number.parseFloat(U.value);Number.isFinite(Zt)&&(Ne.value=String(q(Zt,te,ae)))}),U.addEventListener("change",()=>{const Zt=Number.parseFloat(U.value);Number.isFinite(Zt)&&(Ne.value=String(q(Zt,te,ae)))}),U.dataset.sliderBound="1"}function xu(){const U=(te,ae)=>{if(!te)return ae;const Te=Number.parseFloat(te.value);return Number.isFinite(Te)?Te:ae};S.exposure=q(U(cr,S.exposure),.25,3.5),S.hemiIntensity=q(U(ur,S.hemiIntensity),0,4),S.sunIntensity=q(U(hr,S.sunIntensity),0,8),S.fillIntensity=q(U(dr,S.fillIntensity),0,4),S.ambientIntensity=q(U(fr,S.ambientIntensity),0,3),S.sunAzimuthDeg=U(pr,S.sunAzimuthDeg),S.sunElevationDeg=q(U(mr,S.sunElevationDeg),1,89),S.sunDistance=q(U(gr,S.sunDistance),200,1e4),S.targetX=U(_r,S.targetX),S.targetY=U(vr,S.targetY),S.targetZ=U(xr,S.targetZ),S.shadowEnabled=!!(Si!=null&&Si.checked),S.shadowMapSize=Number.parseInt((Ei==null?void 0:Ei.value)??String(S.shadowMapSize),10)||S.shadowMapSize,S.shadowRadius=q(U(Mr,S.shadowRadius),100,1e4),S.shadowNear=q(U(yr,S.shadowNear),.1,5e3),S.shadowFar=q(U(Sr,S.shadowFar),S.shadowNear+1,3e4),S.shadowBias=q(U(Er,S.shadowBias),-.01,.01),S.shadowNormalBias=q(U(br,S.shadowNormalBias),0,3),S.flareEnabled=!!(bi!=null&&bi.checked),S.flareIntensity=q(U(Tr,S.flareIntensity),0,2.5),S.showHelpers=!!(On!=null&&On.checked),Le.enabled=!!((Bn==null?void 0:Bn.checked)??Le.enabled),Le.intensity=q(U(wr,Le.intensity),0,1e3),Le.speed=q(U(Ar,Le.speed),.05,220),Le.gravity=q(U(Rr,Le.gravity),0,80),Le.size=q(U(Cr,Le.size),.5,12),Le.wind=q(U(Pr,Le.wind),0,60),Le.windDirectionDeg=U(Ir,Le.windDirectionDeg),Le.driftRandomness=q(U(Dr,Le.driftRandomness),0,4),Le.sizeVariation=q(U(Lr,Le.sizeVariation),0,.95),Le.hazeIntensity=q(U(Ur,Le.hazeIntensity),0,2),Le.hazeCloseness=q(U(Fr,Le.hazeCloseness),0,2),g=q(U(Nr,g),40,1400),x=q(U(Or,x),1e-4,.01)}function ha(){xu(),ua(),nn(),_t()}function Mu(U){Object.assign(S,Ye[U]),ua(),nn()}ht(cr,.25,3.5,.01),ht(ur,0,4,.01),ht(hr,0,8,.01),ht(dr,0,4,.01),ht(fr,0,3,.01),ht(pr,-180,180,1),ht(mr,1,89,1),ht(gr,200,1e4,10),ht(_r,-1e4,1e4,10),ht(vr,-1e4,1e4,10),ht(xr,-1e4,1e4,10),ht(Mr,100,1e4,10),ht(yr,.1,5e3,1),ht(Sr,10,3e4,10),ht(Er,-.01,.01,5e-5),ht(br,0,3,.01),ht(Tr,0,2.5,.01),ht(wr,0,1e3,1),ht(Ar,.1,220,.1),ht(Rr,0,80,.1),ht(Cr,.5,12,.1),ht(Pr,0,60,.1),ht(Ir,-180,180,1),ht(Dr,0,4,.01),ht(Lr,0,.95,.01),ht(Ur,0,2,.01),ht(Fr,0,2,.01),ht(Nr,40,1400,5),ht(Or,1e-4,.01,1e-4),ua(),[cr,ur,hr,dr,fr,pr,mr,gr,_r,vr,xr,Si,Ei,Mr,yr,Sr,Er,br,bi,Tr,On,Bn,wr,Ar,Cr,Pr,Rr,Ir,Dr,Lr,Ur,Fr,Nr,Or].forEach(U=>{U&&(U.addEventListener("input",ha),U.addEventListener("change",ha))}),ca==null||ca.addEventListener("click",()=>{const U=(la==null?void 0:la.value)??"midday";Mu(U)}),window.addEventListener("keydown",U=>{fl(U.key,!0)&&U.preventDefault()}),window.addEventListener("keyup",U=>{fl(U.key,!1)&&U.preventDefault()});const Br=document.getElementById("poly-popup"),ml=document.getElementById("poly-content"),yu=document.getElementById("poly-preview"),gl=document.getElementById("poly-id-badge"),Ti=document.getElementById("poly-tab-summary"),wi=document.getElementById("poly-tab-json"),da=document.getElementById("poly-panel-summary"),fa=document.getElementById("poly-panel-json"),_l=document.getElementById("poly-json-pre"),vl=new vd,pa=new Ze;function xl(U){Ti==null||Ti.classList.toggle("active",U==="summary"),wi==null||wi.classList.toggle("active",U==="json"),da==null||da.classList.toggle("active",U==="summary"),fa==null||fa.classList.toggle("active",U==="json")}Ti==null||Ti.addEventListener("click",()=>xl("summary")),wi==null||wi.addEventListener("click",()=>xl("json"));function Su(){Br==null||Br.classList.remove("visible")}function Eu(U,te){var rt;if(!Br||!ml)return;const ae=(rt=D.atlas)==null?void 0:rt.items[String(te.materialId)];gl&&(gl.textContent=`#${U}`);const Te=V_(te,ae);if(ml.innerHTML=`
      <div class="poly-row"><span class="poly-key">room:</span> ${te.roomIndex}</div>
      <div class="poly-row"><span class="poly-key">material:</span> ${te.materialId}</div>
      <div class="poly-row"><span class="poly-key">secondary DL:</span> ${te.isSecondary?"yes":"no"}</div>
      <div class="poly-row"><span class="poly-key">uvA:</span> ${Te.a}</div>
      <div class="poly-row"><span class="poly-key">uvB:</span> ${Te.b}</div>
      <div class="poly-row"><span class="poly-key">uvC:</span> ${Te.c}</div>
      <div class="poly-row"><span class="poly-key">atlas item:</span> ${ae?`${ae.width}×${ae.height} @ (${ae.x}, ${ae.y}) — ${ae.imageName}`:"not found"}</div>
    `,z_(yu,oa,D.atlas,te.materialId),_l){const Ke={triId:U,...te};_l.innerHTML=H_(JSON.stringify(Ke,null,2))}Br.classList.add("visible")}p.domElement.addEventListener("click",U=>{if(document.pointerLockElement!==p.domElement)p.domElement.requestPointerLock();else return;if(!he)return;const te=p.domElement.getBoundingClientRect();pa.x=(U.clientX-te.left)/te.width*2-1,pa.y=-((U.clientY-te.top)/te.height)*2+1,vl.setFromCamera(pa,u);const ae=[se];Ve!=null&&Ve.visible&&ae.push(Ve),Z!=null&&Z.visible&&ae.push(Z);const rt=ae.flatMap(un=>vl.intersectObject(un,!0)).sort((un,hs)=>un.distance-hs.distance).find(un=>un.object instanceof Tt&&Array.isArray(un.object.userData.triangleIds));if(!rt||rt.faceIndex===void 0)return;const Ne=rt.object.userData.triangleIds;if(!Ne)return;const Rt=Ne[rt.faceIndex];if(Rt===void 0)return;const Zt=D.roomTriangles[Rt];Zt&&Eu(Rt,Zt)}),window.addEventListener("keydown",U=>{if(U.key==="1")he=!he,de(),nn();else if(U.key==="2")Qe.visible=!Qe.visible;else if(U.key==="3")Lt.visible=!Lt.visible;else if(U.key==="4")cn.visible=!cn.visible;else if(U.key==="5"){Jt=!Jt;const te=Qe.material;te.wireframe=Jt,se.traverse(ae=>{if(ae instanceof Tt&&(ae.material instanceof Qi&&(ae.material.wireframe=Jt),ae.material instanceof tn)){const Te="__wfOverlay";if(Jt)if(ae.userData[Te])ae.userData[Te].visible=!0;else{const rt=new ad(ae.geometry),Ke=new gi({color:65416}),Ne=new rl(rt,Ke);Ne.name=Te,ae.userData[Te]=Ne,ae.add(Ne)}else ae.userData[Te]&&(ae.userData[Te].visible=!1)}})}else if(U.key==="6")T.visible=!T.visible;else if(U.key==="0")St&&(St.visible=!St.visible);else if(U.key==="p"||U.key==="P")wn==null||wn.classList.toggle("hidden");else if(U.key==="7")vu();else if(U.key==="8"){if(le){Me=!Me;const te=Me?le:Q,ae=Me?Q:le;ae.visible=!1,l.children.includes(te)||l.add(te),se=te,de(),nn()}}else U.key==="9"?Nn.visible=!Nn.visible:U.key==="r"||U.key==="R"?Oe()&&(j=!j,de(),nn()):U.key==="g"||U.key==="G"?(o=o==="hazy"?"gameplay":o==="gameplay"?"off":"hazy",c()):U.key==="l"||U.key==="L"?ei==null||ei.classList.toggle("hidden"):U.key==="h"||U.key==="H"?(S.showHelpers=!S.showHelpers,On&&(On.checked=S.showHelpers),re()):U.key==="n"||U.key==="N"?(Le.enabled=!Le.enabled,Bn&&(Bn.checked=Le.enabled),_t()):U.key==="f"||U.key==="F"?(m?dl():_u(),E(m&&document.pointerLockElement===p.domElement)):U.key==="Escape"&&(d?document.exitPointerLock():(Su(),ei==null||ei.classList.add("hidden")))}),window.addEventListener("resize",()=>{u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)});const Ml=()=>{const U=du.getDelta(),te=(rn.right?1:0)-(rn.left?1:0),ae=(rn.forward?1:0)-(rn.back?1:0);if(m&&d){const Te=g;(te!==0||ae!==0)&&(u.getWorldDirection(Jn),us.crossVectors(Jn,u.up).normalize(),yi.set(0,0,0),ae!==0&&yi.addScaledVector(Jn,ae),te!==0&&yi.addScaledVector(us,te),yi.lengthSq()>0&&(yi.normalize().multiplyScalar(Te*U),u.position.add(yi)))}else Pe==="IntroOrbit"?pu(U):Pe==="EnterFirstPerson"?mu(U):gu(U);ge.textContent=`mode: ${Pe} | weapon: ${K}${m?" | dev-fly":""}`,ut(),Ae.visible&&(De.uniforms.uTime.value+=U),ls(),p.render(l,u),requestAnimationFrame(Ml)};Ml()}O_().catch(i=>{console.error(i)});function B_(i,e,t){i.innerHTML="";const n=Object.keys(e.items).map(s=>Number.parseInt(s,10)).filter(s=>Number.isFinite(s)).sort((s,o)=>s-o),r=document.createDocumentFragment();for(const s of n){const o=e.items[String(s)],a=document.createElement("div");a.className="atlas-tile";const c=document.createElement("div");c.className="atlas-swatch-wrap";const l=document.createElement("div");l.className="atlas-swatch";const u=Math.min(72/o.width,72/o.height),h=Math.max(1,Math.round(o.width*u)),f=Math.max(1,Math.round(o.height*u));l.style.width=`${h}px`,l.style.height=`${f}px`,l.style.backgroundImage=`url(${t})`,l.style.backgroundRepeat="no-repeat",l.style.backgroundSize=`${Math.round(e.width*u)}px ${Math.round(e.height*u)}px`,l.style.backgroundPosition=`-${Math.round(o.x*u)}px -${Math.round(o.y*u)}px`,c.appendChild(l);const m=document.createElement("div");m.className="atlas-label",m.innerHTML=`mat ${s}<br>${o.imageName}`,a.appendChild(c),a.appendChild(m),r.appendChild(a)}i.appendChild(r)}function z_(i,e,t,n){const r=i.getContext("2d");if(!r)return;const s=t==null?void 0:t.items[String(n)];if(!s||!e||!e.complete){i.width=0,i.height=0;return}const o=Math.max(1,Math.floor(160/Math.max(s.width,s.height)));i.width=s.width*o,i.height=s.height*o,r.imageSmoothingEnabled=!1,r.clearRect(0,0,i.width,i.height),r.drawImage(e,s.x,s.y,s.width,s.height,0,0,i.width,i.height)}function H_(i){return i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,e=>/^"/.test(e)?/:$/.test(e)?`<span class="jk">${e}</span>`:`<span class="js">${e}</span>`:/true|false/.test(e)?`<span class="jb">${e}</span>`:/null/.test(e)?`<span class="jb">${e}</span>`:`<span class="jn">${e}</span>`)}function V_(i,e){const t=(n,r)=>{const s=n/32,o=r/32;if(!e)return`${n}, ${r} (texel ${s.toFixed(3)}, ${o.toFixed(3)})`;const a=(s%e.width+e.width)%e.width,c=(o%e.height+e.height)%e.height;return`${n}, ${r} (texel ${s.toFixed(3)}, ${o.toFixed(3)} | wrap ${a.toFixed(3)}, ${c.toFixed(3)})`};return{a:t(i.uvA.u,i.uvA.v),b:t(i.uvB.u,i.uvB.v),c:t(i.uvC.u,i.uvC.v)}}
