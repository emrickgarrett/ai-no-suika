(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const ka="160",Wi=2,ht=1e3,Kt="",bt="srgb",bi="srgb-linear",Wa="display-p3",Hs="display-p3-linear",Os="linear",st="srgb",Fs="rec709",zs="p3",hn="300 es";class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$s=Math.PI/180,Bs=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function Sl(s,e){return(s%e+e)%e}function Qs(s,e,t){return(1-t)*s+t*e}function un(s){return(s&s-1)===0&&s!==0}function Fa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Mi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}let le=class Lo{constructor(e=0,t=0){Lo.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,n=this.y-e.y;return this.x=a*i-n*r+e.x,this.y=a*r+n*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};class ke{constructor(e,t,i,r,a,n,o,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,n,o,l,c)}set(e,t,i,r,a,n,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=n,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,n=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],_=r[1],x=r[4],M=r[7],R=r[2],C=r[5],T=r[8];return a[0]=n*v+o*_+l*R,a[3]=n*m+o*x+l*C,a[6]=n*p+o*M+l*T,a[1]=c*v+h*_+d*R,a[4]=c*m+h*x+d*C,a[7]=c*p+h*M+d*T,a[2]=u*v+f*_+g*R,a[5]=u*m+f*x+g*C,a[8]=u*p+f*M+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*n*h-t*o*c-i*a*h+i*o*l+r*a*c-r*n*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*n-o*c,u=o*l-h*a,f=c*a-n*l,g=t*d+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*n)*v,e[3]=u*v,e[4]=(h*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(n*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,n,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*n+c*o)+n+e,-r*c,r*l,-r*(-c*n+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new ke;function No(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function jr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ml(){const s=jr("canvas");return s.style.display="block",s}const dn={};function Hr(s){s in dn||(dn[s]=!0,console.warn(s))}const pn=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fn=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[bi]:{transfer:Os,primaries:Fs,toReference:s=>s,fromReference:s=>s},[bt]:{transfer:st,primaries:Fs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Hs]:{transfer:Os,primaries:zs,toReference:s=>s.applyMatrix3(fn),fromReference:s=>s.applyMatrix3(pn)},[Wa]:{transfer:st,primaries:zs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(fn),fromReference:s=>s.applyMatrix3(pn).convertLinearToSRGB()}},wl=new Set([bi,Hs]),Je={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!wl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=is[e].toReference,r=is[t].fromReference;return r(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return is[s].primaries},getTransfer:function(s){return s===Kt?Os:is[s].transfer}};function Sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zi;class Uo{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zi===void 0&&(Zi=jr("canvas")),Zi.width=e.width,Zi.height=e.height;const i=Zi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Zi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=Sr(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Sr(t[i]/255)*255):t[i]=Sr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bl=0;class Do{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bl++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,o=r.length;n<o;n++)r[n].isDataTexture?a.push(ia(r[n].image)):a.push(ia(r[n]))}else a=ia(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ia(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let El=0;class Ot extends Tr{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=1001,r=1001,a=1006,n=1008,o=1023,l=1009,c=Ot.DEFAULT_ANISOTROPY,h=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=wi(),this.name="",this.source=new Do(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=n,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===3001?bt:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?3001:3e3}set encoding(e){Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===3001?bt:Kt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=300;Ot.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r+n[12]*a,this.y=n[1]*t+n[5]*i+n[9]*r+n[13]*a,this.z=n[2]*t+n[6]*i+n[10]*r+n[14]*a,this.w=n[3]*t+n[7]*i+n[11]*r+n[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const n=e.elements,o=n[0],l=n[4],c=n[8],h=n[1],d=n[5],u=n[9],f=n[2],g=n[6],v=n[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,_=(d+1)/2,x=(v+1)/2,M=(l+h)/4,R=(c+f)/4,C=(u+g)/4;return p>_&&p>x?p<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(p),r=M/i,a=R/i):_>x?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=M/r,a=C/r):x<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(x),i=R/a,r=C/a),this.set(i,r,a,t),this}let m=Math.sqrt((g-u)*(g-u)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-f)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tl extends Tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===3001?bt:Kt),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ot(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Do(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Tl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Io extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends Ot{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ui=class{constructor(s=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=s,this._y=e,this._z=t,this._w=i}static slerpFlat(s,e,t,i,r,a,n){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const d=r[a+0],u=r[a+1],f=r[a+2],g=r[a+3];if(n===0){s[e+0]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h;return}if(n===1){s[e+0]=d,s[e+1]=u,s[e+2]=f,s[e+3]=g;return}if(h!==g||o!==d||l!==u||c!==f){let v=1-n;const m=o*d+l*u+c*f+h*g,p=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const M=Math.sqrt(_),R=Math.atan2(M,m*p);v=Math.sin(v*R)/M,n=Math.sin(n*R)/M}const x=n*p;if(o=o*v+d*x,l=l*v+u*x,c=c*v+f*x,h=h*v+g*x,v===1-n){const M=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=M,l*=M,c*=M,h*=M}}s[e]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h}static multiplyQuaternionsFlat(s,e,t,i,r,a){const n=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=r[a],d=r[a+1],u=r[a+2],f=r[a+3];return s[e]=n*f+c*h+o*u-l*d,s[e+1]=o*f+c*d+l*h-n*u,s[e+2]=l*f+c*u+n*d-o*h,s[e+3]=c*f-n*h-o*d-l*u,s}get x(){return this._x}set x(s){this._x=s,this._onChangeCallback()}get y(){return this._y}set y(s){this._y=s,this._onChangeCallback()}get z(){return this._z}set z(s){this._z=s,this._onChangeCallback()}get w(){return this._w}set w(s){this._w=s,this._onChangeCallback()}set(s,e,t,i){return this._x=s,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(s){return this._x=s.x,this._y=s.y,this._z=s.z,this._w=s.w,this._onChangeCallback(),this}setFromEuler(s,e=!0){const t=s._x,i=s._y,r=s._z,a=s._order,n=Math.cos,o=Math.sin,l=n(t/2),c=n(i/2),h=n(r/2),d=o(t/2),u=o(i/2),f=o(r/2);switch(a){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(s,e){const t=e/2,i=Math.sin(t);return this._x=s.x*i,this._y=s.y*i,this._z=s.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(s){const e=s.elements,t=e[0],i=e[4],r=e[8],a=e[1],n=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=t+n+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(t>n&&t>h){const u=2*Math.sqrt(1+t-n-h);this._w=(c-o)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(n>h){const u=2*Math.sqrt(1+n-t-h);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(o+c)/u}else{const u=2*Math.sqrt(1+h-t-n);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(s,e){let t=s.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(s.x)>Math.abs(s.z)?(this._x=-s.y,this._y=s.x,this._z=0,this._w=t):(this._x=0,this._y=-s.z,this._z=s.y,this._w=t)):(this._x=s.y*e.z-s.z*e.y,this._y=s.z*e.x-s.x*e.z,this._z=s.x*e.y-s.y*e.x,this._w=t),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(Pt(this.dot(s),-1,1)))}rotateTowards(s,e){const t=this.angleTo(s);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(s,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(s){return this._x*s._x+this._y*s._y+this._z*s._z+this._w*s._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let s=this.length();return s===0?(this._x=0,this._y=0,this._z=0,this._w=1):(s=1/s,this._x=this._x*s,this._y=this._y*s,this._z=this._z*s,this._w=this._w*s),this._onChangeCallback(),this}multiply(s){return this.multiplyQuaternions(this,s)}premultiply(s){return this.multiplyQuaternions(s,this)}multiplyQuaternions(s,e){const t=s._x,i=s._y,r=s._z,a=s._w,n=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+a*n+i*l-r*o,this._y=i*c+a*o+r*n-t*l,this._z=r*c+a*l+t*o-i*n,this._w=a*c-t*n-i*o-r*l,this._onChangeCallback(),this}slerp(s,e){if(e===0)return this;if(e===1)return this.copy(s);const t=this._x,i=this._y,r=this._z,a=this._w;let n=a*s._w+t*s._x+i*s._y+r*s._z;if(n<0?(this._w=-s._w,this._x=-s._x,this._y=-s._y,this._z=-s._z,n=-n):this.copy(s),n>=1)return this._w=a,this._x=t,this._y=i,this._z=r,this;const o=1-n*n;if(o<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*t+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,n),h=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=a*h+this._w*d,this._x=t*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(s,e,t){return this.copy(s).slerp(e,t)}random(){const s=Math.random(),e=Math.sqrt(1-s),t=Math.sqrt(s),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(s){return s._x===this._x&&s._y===this._y&&s._z===this._z&&s._w===this._w}fromArray(s,e=0){return this._x=s[e],this._y=s[e+1],this._z=s[e+2],this._w=s[e+3],this._onChangeCallback(),this}toArray(s=[],e=0){return s[e]=this._x,s[e+1]=this._y,s[e+2]=this._z,s[e+3]=this._w,s}fromBufferAttribute(s,e){return this._x=s.getX(e),this._y=s.getY(e),this._z=s.getZ(e),this._w=s.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(s){return this._onChangeCallback=s,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mn.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,n=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*n,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*n,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*n,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,n=e.y,o=e.z,l=e.w,c=2*(n*r-o*i),h=2*(o*t-a*r),d=2*(a*i-n*t);return this.x=t+l*c+n*d-o*h,this.y=i+l*h+o*c-a*d,this.z=r+l*d+a*h-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,n=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*n-i*l,this.z=i*o-r*n,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new D,mn=new Ui;class Jr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,o=a.count;n<o;n++)e.isMesh===!0?e.getVertexPosition(n,Jt):Jt.fromBufferAttribute(a,n),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rs.copy(i.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),ss.subVectors(this.max,Pr),Ji.subVectors(e.a,Pr),$i.subVectors(e.b,Pr),Qi.subVectors(e.c,Pr),Ei.subVectors($i,Ji),Ti.subVectors(Qi,$i),Oi.subVectors(Ji,Qi);let t=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Oi.z,Oi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Oi.z,0,-Oi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Oi.y,Oi.x,0];return!sa(t,Ji,$i,Qi,ss)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Ji,$i,Qi,ss))?!1:(as.crossVectors(Ei,Ti),t=[as.x,as.y,as.z],sa(t,Ji,$i,Qi,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pi=[new D,new D,new D,new D,new D,new D,new D,new D],Jt=new D,rs=new Jr,Ji=new D,$i=new D,Qi=new D,Ei=new D,Ti=new D,Oi=new D,Pr=new D,ss=new D,as=new D,Fi=new D;function sa(s,e,t,i,r){for(let a=0,n=s.length-3;a<=n;a+=3){Fi.fromArray(s,a);const o=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=i.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cl=new Jr,Lr=new D,aa=new D;let qa=class{constructor(s=new D,e=-1){this.isSphere=!0,this.center=s,this.radius=e}set(s,e){return this.center.copy(s),this.radius=e,this}setFromPoints(s,e){const t=this.center;e!==void 0?t.copy(e):Cl.setFromPoints(s).getCenter(t);let i=0;for(let r=0,a=s.length;r<a;r++)i=Math.max(i,t.distanceToSquared(s[r]));return this.radius=Math.sqrt(i),this}copy(s){return this.center.copy(s.center),this.radius=s.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(s){return s.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(s){return s.distanceTo(this.center)-this.radius}intersectsSphere(s){const e=this.radius+s.radius;return s.center.distanceToSquared(this.center)<=e*e}intersectsBox(s){return s.intersectsSphere(this)}intersectsPlane(s){return Math.abs(s.distanceToPoint(this.center))<=this.radius}clampPoint(s,e){const t=this.center.distanceToSquared(s);return e.copy(s),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(s){return this.isEmpty()?(s.makeEmpty(),s):(s.set(this.center,this.center),s.expandByScalar(this.radius),s)}applyMatrix4(s){return this.center.applyMatrix4(s),this.radius=this.radius*s.getMaxScaleOnAxis(),this}translate(s){return this.center.add(s),this}expandByPoint(s){if(this.isEmpty())return this.center.copy(s),this.radius=0,this;Lr.subVectors(s,this.center);const e=Lr.lengthSq();if(e>this.radius*this.radius){const t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(Lr,i/t),this.radius+=i}return this}union(s){return s.isEmpty()?this:this.isEmpty()?(this.copy(s),this):(this.center.equals(s.center)===!0?this.radius=Math.max(this.radius,s.radius):(aa.subVectors(s.center,this.center).setLength(s.radius),this.expandByPoint(Lr.copy(s.center).add(aa)),this.expandByPoint(Lr.copy(s.center).sub(aa))),this)}equals(s){return s.center.equals(this.center)&&s.radius===this.radius}clone(){return new this.constructor().copy(this)}};const fi=new D,na=new D,ns=new D,Ai=new D,oa=new D,os=new D,la=new D;let Oo=class{constructor(s=new D,e=new D(0,0,-1)){this.origin=s,this.direction=e}set(s,e){return this.origin.copy(s),this.direction.copy(e),this}copy(s){return this.origin.copy(s.origin),this.direction.copy(s.direction),this}at(s,e){return e.copy(this.origin).addScaledVector(this.direction,s)}lookAt(s){return this.direction.copy(s).sub(this.origin).normalize(),this}recast(s){return this.origin.copy(this.at(s,fi)),this}closestPointToPoint(s,e){e.subVectors(s,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(s){return Math.sqrt(this.distanceSqToPoint(s))}distanceSqToPoint(s){const e=fi.subVectors(s,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(s):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(s))}distanceSqToSegment(s,e,t,i){na.copy(s).add(e).multiplyScalar(.5),ns.copy(e).sub(s).normalize(),Ai.copy(this.origin).sub(na);const r=s.distanceTo(e)*.5,a=-this.direction.dot(ns),n=Ai.dot(this.direction),o=-Ai.dot(ns),l=Ai.lengthSq(),c=Math.abs(1-a*a);let h,d,u,f;if(c>0)if(h=a*o-n,d=a*n-o,f=r*c,h>=0)if(d>=-f)if(d<=f){const g=1/c;h*=g,d*=g,u=h*(h+a*d+2*n)+d*(a*h+d+2*o)+l}else d=r,h=Math.max(0,-(a*d+n)),u=-h*h+d*(d+2*o)+l;else d=-r,h=Math.max(0,-(a*d+n)),u=-h*h+d*(d+2*o)+l;else d<=-f?(h=Math.max(0,-(-a*r+n)),d=h>0?-r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l):d<=f?(h=0,d=Math.min(Math.max(-r,-o),r),u=d*(d+2*o)+l):(h=Math.max(0,-(a*r+n)),d=h>0?r:Math.min(Math.max(-r,-o),r),u=-h*h+d*(d+2*o)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+n)),u=-h*h+d*(d+2*o)+l;return t&&t.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(na).addScaledVector(ns,d),u}intersectSphere(s,e){fi.subVectors(s.center,this.origin);const t=fi.dot(this.direction),i=fi.dot(fi)-t*t,r=s.radius*s.radius;if(i>r)return null;const a=Math.sqrt(r-i),n=t-a,o=t+a;return o<0?null:n<0?this.at(o,e):this.at(n,e)}intersectsSphere(s){return this.distanceSqToPoint(s.center)<=s.radius*s.radius}distanceToPlane(s){const e=s.normal.dot(this.direction);if(e===0)return s.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(s.normal)+s.constant)/e;return t>=0?t:null}intersectPlane(s,e){const t=this.distanceToPlane(s);return t===null?null:this.at(t,e)}intersectsPlane(s){const e=s.distanceToPoint(this.origin);return e===0||s.normal.dot(this.direction)*e<0}intersectBox(s,e){let t,i,r,a,n,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(t=(s.min.x-d.x)*l,i=(s.max.x-d.x)*l):(t=(s.max.x-d.x)*l,i=(s.min.x-d.x)*l),c>=0?(r=(s.min.y-d.y)*c,a=(s.max.y-d.y)*c):(r=(s.max.y-d.y)*c,a=(s.min.y-d.y)*c),t>a||r>i||((r>t||isNaN(t))&&(t=r),(a<i||isNaN(i))&&(i=a),h>=0?(n=(s.min.z-d.z)*h,o=(s.max.z-d.z)*h):(n=(s.max.z-d.z)*h,o=(s.min.z-d.z)*h),t>o||n>i)||((n>t||t!==t)&&(t=n),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(s){return this.intersectBox(s,fi)!==null}intersectTriangle(s,e,t,i,r){oa.subVectors(e,s),os.subVectors(t,s),la.crossVectors(oa,os);let a=this.direction.dot(la),n;if(a>0){if(i)return null;n=1}else if(a<0)n=-1,a=-a;else return null;Ai.subVectors(this.origin,s);const o=n*this.direction.dot(os.crossVectors(Ai,os));if(o<0)return null;const l=n*this.direction.dot(oa.cross(Ai));if(l<0||o+l>a)return null;const c=-n*Ai.dot(la);return c<0?null:this.at(c/a,r)}applyMatrix4(s){return this.origin.applyMatrix4(s),this.direction.transformDirection(s),this}equals(s){return s.origin.equals(this.origin)&&s.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ut{constructor(e,t,i,r,a,n,o,l,c,h,d,u,f,g,v,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,n,o,l,c,h,d,u,f,g,v,m)}set(e,t,i,r,a,n,o,l,c,h,d,u,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=n,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/er.setFromMatrixColumn(e,0).length(),a=1/er.setFromMatrixColumn(e,1).length(),n=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*n,t[9]=i[9]*n,t[10]=i[10]*n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,n=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=n*h,f=n*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+f*c,t[10]=n*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u+v*o,t[4]=g*o-f,t[8]=n*c,t[1]=n*d,t[5]=n*h,t[9]=-o,t[2]=f*o-g,t[6]=v+u*o,t[10]=n*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,v=c*d;t[0]=u-v*o,t[4]=-n*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=n*h,t[9]=v-u*o,t[2]=-n*c,t[6]=o,t[10]=n*l}else if(e.order==="ZYX"){const u=n*h,f=n*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=n*l}else if(e.order==="YZX"){const u=n*l,f=n*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*d,t[8]=g*d+f,t[1]=d,t[5]=n*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-v*d}else if(e.order==="XZY"){const u=n*l,f=n*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=n*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rl,e,Pl)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Ci.crossVectors(i,Gt),Ci.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Ci.crossVectors(i,Gt)),Ci.normalize(),ls.crossVectors(Gt,Ci),r[0]=Ci.x,r[4]=ls.x,r[8]=Gt.x,r[1]=Ci.y,r[5]=ls.y,r[9]=Gt.y,r[2]=Ci.z,r[6]=ls.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,n=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],_=i[3],x=i[7],M=i[11],R=i[15],C=r[0],T=r[4],z=r[8],b=r[12],E=r[1],O=r[5],N=r[9],F=r[13],P=r[2],L=r[6],I=r[10],q=r[14],j=r[3],V=r[7],Z=r[11],$=r[15];return a[0]=n*C+o*E+l*P+c*j,a[4]=n*T+o*O+l*L+c*V,a[8]=n*z+o*N+l*I+c*Z,a[12]=n*b+o*F+l*q+c*$,a[1]=h*C+d*E+u*P+f*j,a[5]=h*T+d*O+u*L+f*V,a[9]=h*z+d*N+u*I+f*Z,a[13]=h*b+d*F+u*q+f*$,a[2]=g*C+v*E+m*P+p*j,a[6]=g*T+v*O+m*L+p*V,a[10]=g*z+v*N+m*I+p*Z,a[14]=g*b+v*F+m*q+p*$,a[3]=_*C+x*E+M*P+R*j,a[7]=_*T+x*O+M*L+R*V,a[11]=_*z+x*N+M*I+R*Z,a[15]=_*b+x*F+M*q+R*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],n=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+a*l*d-r*c*d-a*o*u+i*c*u+r*o*f-i*l*f)+v*(+t*l*f-t*c*u+a*n*u-r*n*f+r*c*h-a*l*h)+m*(+t*c*d-t*o*f-a*n*d+i*n*f+a*o*h-i*c*h)+p*(-r*o*h-t*l*d+t*o*u+r*n*d-i*n*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],n=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=d*m*c-v*u*c+v*l*f-o*m*f-d*l*p+o*u*p,x=g*u*c-h*m*c-g*l*f+n*m*f+h*l*p-n*u*p,M=h*v*c-g*d*c+g*o*f-n*v*f-h*o*p+n*d*p,R=g*d*l-h*v*l-g*o*u+n*v*u+h*o*m-n*d*m,C=t*_+i*x+r*M+a*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=_*T,e[1]=(v*u*a-d*m*a-v*r*f+i*m*f+d*r*p-i*u*p)*T,e[2]=(o*m*a-v*l*a+v*r*c-i*m*c-o*r*p+i*l*p)*T,e[3]=(d*l*a-o*u*a-d*r*c+i*u*c+o*r*f-i*l*f)*T,e[4]=x*T,e[5]=(h*m*a-g*u*a+g*r*f-t*m*f-h*r*p+t*u*p)*T,e[6]=(g*l*a-n*m*a-g*r*c+t*m*c+n*r*p-t*l*p)*T,e[7]=(n*u*a-h*l*a+h*r*c-t*u*c-n*r*f+t*l*f)*T,e[8]=M*T,e[9]=(g*d*a-h*v*a-g*i*f+t*v*f+h*i*p-t*d*p)*T,e[10]=(n*v*a-g*o*a+g*i*c-t*v*c-n*i*p+t*o*p)*T,e[11]=(h*o*a-n*d*a-h*i*c+t*d*c+n*i*f-t*o*f)*T,e[12]=R*T,e[13]=(h*v*r-g*d*r+g*i*u-t*v*u-h*i*m+t*d*m)*T,e[14]=(g*o*r-n*v*r-g*i*l+t*v*l+n*i*m-t*o*m)*T,e[15]=(n*d*r-h*o*r+h*i*l-t*d*l-n*i*u+t*o*u)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,n=e.x,o=e.y,l=e.z,c=a*n,h=a*o;return this.set(c*n+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*n,0,c*l-r*o,h*l+r*n,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,n){return this.set(1,i,a,0,e,1,n,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,n=t._y,o=t._z,l=t._w,c=a+a,h=n+n,d=o+o,u=a*c,f=a*h,g=a*d,v=n*h,m=n*d,p=o*d,_=l*c,x=l*h,M=l*d,R=i.x,C=i.y,T=i.z;return r[0]=(1-(v+p))*R,r[1]=(f+M)*R,r[2]=(g-x)*R,r[3]=0,r[4]=(f-M)*C,r[5]=(1-(u+p))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(g+x)*T,r[9]=(m-_)*T,r[10]=(1-(u+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=er.set(r[0],r[1],r[2]).length();const n=er.set(r[4],r[5],r[6]).length(),o=er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],$t.copy(this);const l=1/a,c=1/n,h=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=c,$t.elements[5]*=c,$t.elements[6]*=c,$t.elements[8]*=h,$t.elements[9]*=h,$t.elements[10]*=h,t.setFromRotationMatrix($t),i.x=a,i.y=n,i.z=o,this}makePerspective(e,t,i,r,a,n,o=2e3){const l=this.elements,c=2*a/(t-e),h=2*a/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r);let f,g;if(o===2e3)f=-(n+a)/(n-a),g=-2*n*a/(n-a);else if(o===2001)f=-n/(n-a),g=-n*a/(n-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,n,o=2e3){const l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(n-a),u=(t+e)*c,f=(i+r)*h;let g,v;if(o===2e3)g=(n+a)*d,v=-2*d;else if(o===2001)g=a*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const er=new D,$t=new ut,Rl=new D(0,0,0),Pl=new D(1,1,1),Ci=new D,ls=new D,Gt=new D,gn=new ut,vn=new Ui;class ks{constructor(e=0,t=0,i=0,r=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],n=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-n,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-n,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-n,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Pt(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gn,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vn.setFromEuler(this),this.setFromQuaternion(vn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ll=0;const _n=new D,tr=new Ui,mi=new ut,cs=new D,Nr=new D,Nl=new D,Ul=new Ui,xn=new D(1,0,0),yn=new D(0,1,0),Sn=new D(0,0,1),Dl={type:"added"},Il={type:"removed"};class xt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new D,t=new ks,i=new Ui,r=new D(1,1,1);function a(){i.setFromEuler(t,!1)}function n(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(n),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new ke}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(xn,e)}rotateY(e){return this.rotateOnAxis(yn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return _n.copy(e).applyQuaternion(this.quaternion),this.position.add(_n.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xn,e)}translateY(e){return this.translateOnAxis(yn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cs.copy(e):cs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Nr,cs,this.up):mi.lookAt(cs,Nr,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(mi),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Dl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,n=r.length;a<n;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,Nl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,Ul,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,n=r.length;a<n;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=n(e.geometries),l=n(e.materials),c=n(e.textures),h=n(e.images),d=n(e.shapes),u=n(e.skeletons),f=n(e.animations),g=n(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function n(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new D,gi=new D,ca=new D,vi=new D,ir=new D,rr=new D,Mn=new D,ha=new D,ua=new D,da=new D;let hs=!1;class Yt{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Qt.subVectors(r,t),gi.subVectors(i,t),ca.subVectors(e,t);const n=Qt.dot(Qt),o=Qt.dot(gi),l=Qt.dot(ca),c=gi.dot(gi),h=gi.dot(ca),d=n*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(n*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,t,i,r,a,n,o,l){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),this.getInterpolation(e,t,i,r,a,n,o,l)}static getInterpolation(e,t,i,r,a,n,o,l){return this.getBarycoord(e,t,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vi.x),l.addScaledVector(n,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),gi.subVectors(e,t),Qt.cross(gi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Qt.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,a){return hs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),hs=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}getInterpolation(e,t,i,r,a){return Yt.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let n,o;ir.subVectors(r,i),rr.subVectors(a,i),ha.subVectors(e,i);const l=ir.dot(ha),c=rr.dot(ha);if(l<=0&&c<=0)return t.copy(i);ua.subVectors(e,r);const h=ir.dot(ua),d=rr.dot(ua);if(h>=0&&d<=h)return t.copy(r);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return n=l/(l-h),t.copy(i).addScaledVector(ir,n);da.subVectors(e,a);const f=ir.dot(da),g=rr.dot(da);if(g>=0&&f<=g)return t.copy(a);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(rr,o);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Mn.subVectors(a,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(Mn,o);const p=1/(m+v+u);return n=v*p,o=u*p,t.copy(i).addScaledVector(ir,n).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},us={h:0,s:0,l:0};function pa(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=Sl(e,1),t=Pt(t,0,1),i=Pt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=pa(n,a,e+1/3),this.g=pa(n,a,e),this.b=pa(n,a,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,t=bt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const n=r[1],o=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bt){const i=Fo[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sr(e.r),this.g=Sr(e.g),this.b=Sr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bt){return Je.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Pt(Ct.r*255,0,255))*65536+Math.round(Pt(Ct.g*255,0,255))*256+Math.round(Pt(Ct.b*255,0,255))}getHexString(e=bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,a=Ct.b,n=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const h=(o+n)/2;if(o===n)l=0,c=0;else{const d=n-o;switch(c=h<=.5?d/(n+o):d/(2-n-o),n){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=bt){Je.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+t,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ri),e.getHSL(us);const i=Qs(Ri.h,us.h,t),r=Qs(Ri.s,us.s,t),a=Qs(Ri.l,us.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Xe;Xe.NAMES=Fo;let Ol=0,Ki=class extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(s){this._alphaTest>0!=s>0&&this.version++,this._alphaTest=s}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(s){if(s!==void 0)for(const e in s){const t=s[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(s){const e=s===void 0||typeof s=="string";e&&(s={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(s).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(s).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(s).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(s).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(s).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(s).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(s).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(s).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(s).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(s).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(s).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(s).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(s).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(s).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(s).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(s).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(s).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(s).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(s).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(s).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(s).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(s).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(s).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(s).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(t.blending=this.blending),this.side!==0&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==204&&(t.blendSrc=this.blendSrc),this.blendDst!==205&&(t.blendDst=this.blendDst),this.blendEquation!==100&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(t.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(r){const a=[];for(const n in r){const o=r[n];delete o.metadata,a.push(o)}return a}if(e){const r=i(s.textures),a=i(s.images);r.length>0&&(t.textures=r),a.length>0&&(t.images=a)}return t}clone(){return new this.constructor().copy(this)}copy(s){this.name=s.name,this.blending=s.blending,this.side=s.side,this.vertexColors=s.vertexColors,this.opacity=s.opacity,this.transparent=s.transparent,this.blendSrc=s.blendSrc,this.blendDst=s.blendDst,this.blendEquation=s.blendEquation,this.blendSrcAlpha=s.blendSrcAlpha,this.blendDstAlpha=s.blendDstAlpha,this.blendEquationAlpha=s.blendEquationAlpha,this.blendColor.copy(s.blendColor),this.blendAlpha=s.blendAlpha,this.depthFunc=s.depthFunc,this.depthTest=s.depthTest,this.depthWrite=s.depthWrite,this.stencilWriteMask=s.stencilWriteMask,this.stencilFunc=s.stencilFunc,this.stencilRef=s.stencilRef,this.stencilFuncMask=s.stencilFuncMask,this.stencilFail=s.stencilFail,this.stencilZFail=s.stencilZFail,this.stencilZPass=s.stencilZPass,this.stencilWrite=s.stencilWrite;const e=s.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=s.clipIntersection,this.clipShadows=s.clipShadows,this.shadowSide=s.shadowSide,this.colorWrite=s.colorWrite,this.precision=s.precision,this.polygonOffset=s.polygonOffset,this.polygonOffsetFactor=s.polygonOffsetFactor,this.polygonOffsetUnits=s.polygonOffsetUnits,this.dithering=s.dithering,this.alphaTest=s.alphaTest,this.alphaHash=s.alphaHash,this.alphaToCoverage=s.alphaToCoverage,this.premultipliedAlpha=s.premultipliedAlpha,this.forceSinglePass=s.forceSinglePass,this.visible=s.visible,this.toneMapped=s.toneMapped,this.userData=JSON.parse(JSON.stringify(s.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(s){s===!0&&this.version++}};class $r extends Ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new D,ds=new le;class ii{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ds.fromBufferAttribute(this,t),ds.applyMatrix3(e),this.setXY(t,ds.x,ds.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$e(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),a=$e(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class zo extends ii{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bo extends ii{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yt extends ii{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Fl=0;const Xt=new ut,fa=new xt,sr=new D,Vt=new Jr,Ur=new Jr,wt=new D;class Zt extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(No(e)?Bo:zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,i){return Xt.makeTranslation(e,t,i),this.applyMatrix4(Xt),this}scale(e,t,i){return Xt.makeScale(e,t,i),this.applyMatrix4(Xt),this}lookAt(e){return fa.lookAt(e),fa.updateMatrix(),this.applyMatrix4(fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Vt.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let a=0,n=t.length;a<n;a++){const o=t[a];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Vt.min,Ur.min),Vt.expandByPoint(wt),wt.addVectors(Vt.max,Ur.max),Vt.expandByPoint(wt)):(Vt.expandByPoint(Ur.min),Vt.expandByPoint(Ur.max))}Vt.getCenter(i);let r=0;for(let a=0,n=e.count;a<n;a++)wt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let a=0,n=t.length;a<n;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)wt.fromBufferAttribute(o,c),l&&(sr.fromBufferAttribute(e,c),wt.add(sr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,a=t.normal.array,n=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<o;E++)c[E]=new D,h[E]=new D;const d=new D,u=new D,f=new D,g=new le,v=new le,m=new le,p=new D,_=new D;function x(E,O,N){d.fromArray(r,E*3),u.fromArray(r,O*3),f.fromArray(r,N*3),g.fromArray(n,E*2),v.fromArray(n,O*2),m.fromArray(n,N*2),u.sub(d),f.sub(d),v.sub(g),m.sub(g);const F=1/(v.x*m.y-m.x*v.y);isFinite(F)&&(p.copy(u).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(F),_.copy(f).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(F),c[E].add(p),c[O].add(p),c[N].add(p),h[E].add(_),h[O].add(_),h[N].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let E=0,O=M.length;E<O;++E){const N=M[E],F=N.start,P=N.count;for(let L=F,I=F+P;L<I;L+=3)x(i[L+0],i[L+1],i[L+2])}const R=new D,C=new D,T=new D,z=new D;function b(E){T.fromArray(a,E*3),z.copy(T);const O=c[E];R.copy(O),R.sub(T.multiplyScalar(T.dot(O))).normalize(),C.crossVectors(z,O);const N=C.dot(h[E])<0?-1:1;l[E*4]=R.x,l[E*4+1]=R.y,l[E*4+2]=R.z,l[E*4+3]=N}for(let E=0,O=M.length;E<O;++E){const N=M[E],F=N.start,P=N.count;for(let L=F,I=F+P;L<I;L+=3)b(i[L+0]),b(i[L+1]),b(i[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const r=new D,a=new D,n=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,v),n.fromBufferAttribute(t,m),h.subVectors(n,a),d.subVectors(r,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),n.fromBufferAttribute(t,u+2),h.subVectors(n,a),d.subVectors(r,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ii(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const n=this.groups;for(let o=0,l=n.length;o<l;o++){const c=n[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const n=this.groups;n.length>0&&(e.data.groups=JSON.parse(JSON.stringify(n)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const n=e.groups;for(let c=0,h=n.length;c<h;c++){const d=n[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wn=new ut,zi=new Oo,ps=new qa,bn=new D,ar=new D,nr=new D,or=new D,ma=new D,fs=new D,ms=new le,gs=new le,vs=new le,En=new D,Tn=new D,An=new D,_s=new D,xs=new D;class Ue extends xt{constructor(e=new Zt,t=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){fs.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(ma.fromBufferAttribute(d,e),n?fs.addScaledVector(ma,h):fs.addScaledVector(ma.sub(t),h))}t.add(fs)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere),ps.applyMatrix4(a),zi.copy(e.ray).recast(e.near),!(ps.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ps,bn)===null||zi.origin.distanceToSquared(bn)>(e.far-e.near)**2))&&(wn.copy(a).invert(),zi.copy(e.ray).applyMatrix4(wn),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let r;const a=this.geometry,n=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(n))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=n[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,R=x;M<R;M+=3){const C=o.getX(M),T=o.getX(M+1),z=o.getX(M+2);r=ys(this,p,e,i,c,h,d,C,T,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=ys(this,n,e,i,c,h,d,_,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let g=0,v=u.length;g<v;g++){const m=u[g],p=n[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=_,R=x;M<R;M+=3){const C=M,T=M+1,z=M+2;r=ys(this,p,e,i,c,h,d,C,T,z),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,M=m+2;r=ys(this,n,e,i,c,h,d,_,x,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zl(s,e,t,i,r,a,n,o){let l;if(e.side===1?l=i.intersectTriangle(n,a,r,!0,o):l=i.intersectTriangle(r,a,n,e.side===0,o),l===null)return null;xs.copy(o),xs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:s}}function ys(s,e,t,i,r,a,n,o,l,c){s.getVertexPosition(o,ar),s.getVertexPosition(l,nr),s.getVertexPosition(c,or);const h=zl(s,e,t,i,ar,nr,or,_s);if(h){r&&(ms.fromBufferAttribute(r,o),gs.fromBufferAttribute(r,l),vs.fromBufferAttribute(r,c),h.uv=Yt.getInterpolation(_s,ar,nr,or,ms,gs,vs,new le)),a&&(ms.fromBufferAttribute(a,o),gs.fromBufferAttribute(a,l),vs.fromBufferAttribute(a,c),h.uv1=Yt.getInterpolation(_s,ar,nr,or,ms,gs,vs,new le),h.uv2=h.uv1),n&&(En.fromBufferAttribute(n,o),Tn.fromBufferAttribute(n,l),An.fromBufferAttribute(n,c),h.normal=Yt.getInterpolation(_s,ar,nr,or,En,Tn,An,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Yt.getNormal(ar,nr,or,d.normal),h.face=d}return h}class Ar extends Zt{constructor(e=1,t=1,i=1,r=1,a=1,n=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:n};const o=this;r=Math.floor(r),a=Math.floor(a),n=Math.floor(n);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,n,a,0),g("z","y","x",1,-1,i,t,-e,n,a,1),g("x","z","y",1,1,e,i,t,r,n,2),g("x","z","y",1,-1,e,i,-t,r,n,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function g(v,m,p,_,x,M,R,C,T,z,b){const E=M/T,O=R/z,N=M/2,F=R/2,P=C/2,L=T+1,I=z+1;let q=0,j=0;const V=new D;for(let Z=0;Z<I;Z++){const $=Z*O-F;for(let K=0;K<L;K++){const k=K*E-N;V[v]=k*_,V[m]=$*x,V[p]=P,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[p]=C>0?1:-1,h.push(V.x,V.y,V.z),d.push(K/T),d.push(1-Z/z),q+=1}}for(let Z=0;Z<z;Z++)for(let $=0;$<T;$++){const K=u+$+L*Z,k=u+$+L*(Z+1),J=u+($+1)+L*(Z+1),he=u+($+1)+L*Z;l.push(K,k,he),l.push(k,J,he),j+=6}o.addGroup(f,j,b),f+=j,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const i=wr(s[t]);for(const r in i)e[r]=i[r]}return e}function Bl(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Go(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const Gl={clone:wr,merge:It};var Vl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vl,this.fragmentShader=Hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Bl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vo extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=2e3}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Vo{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const n=this.view;if(this.view!==null&&this.view.enabled){const l=n.fullWidth,c=n.fullHeight;a+=n.offsetX*r/l,t-=n.offsetY*i/c,r*=n.width/l,i*=n.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=-90,cr=1;class kl extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(lr,cr,e,t);r.layers=this.layers,this.add(r);const a=new Bt(lr,cr,e,t);a.layers=this.layers,this.add(a);const n=new Bt(lr,cr,e,t);n.layers=this.layers,this.add(n);const o=new Bt(lr,cr,e,t);o.layers=this.layers,this.add(o);const l=new Bt(lr,cr,e,t);l.layers=this.layers,this.add(l);const c=new Bt(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,o,l]=t;for(const c of t)this.remove(c);if(e===2e3)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===2001)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,n,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,n),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ho extends Ot{constructor(e,t,i,r,a,n,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:301,super(e,t,i,r,a,n,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wl extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===3001?bt:Kt),this.texture=new Ho(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ar(5,5,5),a=new ji({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});a.uniforms.tEquirect.value=t;const n=new Ue(r,a),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new kl(1,10,this).update(e,n),t.minFilter=o,n.geometry.dispose(),n.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}}const ga=new D,ql=new D,Xl=new ke;class Li{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ga.subVectors(i,t).cross(ql.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xl.getNormalMatrix(e),r=this.coplanarPoint(ga).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new qa,Ss=new D;class ja{constructor(e=new Li,t=new Li,i=new Li,r=new Li,a=new Li,n=new Li){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(n),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){const i=this.planes,r=e.elements,a=r[0],n=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],g=r[9],v=r[10],m=r[11],p=r[12],_=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-a,u-c,m-f,M-p).normalize(),i[1].setComponents(l+a,u+c,m+f,M+p).normalize(),i[2].setComponents(l+n,u+h,m+g,M+_).normalize(),i[3].setComponents(l-n,u-h,m-g,M-_).normalize(),i[4].setComponents(l-o,u-d,m-v,M-x).normalize(),t===2e3)i[5].setComponents(l+o,u+d,m+v,M+x).normalize();else if(t===2001)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ss.x=r.normal.x>0?e.max.x:e.min.x,Ss.y=r.normal.y>0?e.max.y:e.min.y,Ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ko(){let s=null,e=!1,t=null,i=null;function r(a,n){t(a,n),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function jl(s,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const d=c.array,u=c.usage,f=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,u),c.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:f}}function a(c,h,d){const u=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,c),f.count===-1&&g.length===0&&s.bufferSubData(d,0,u),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count):s.bufferSubData(d,p.start*u.BYTES_PER_ELEMENT,u.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):s.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function n(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,h),d.version=c.version}}return{get:n,remove:o,update:l}}class ci extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,n=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*u-n;for(let x=0;x<c;x++){const M=x*d-a;g.push(M,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const x=_+c*p,M=_+c*(p+1),R=_+1+c*(p+1),C=_+1+c*p;f.push(x,M,C),f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kl=`#ifdef USE_ALPHAHASH
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
#endif`,Zl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$l=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ql=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ec=`#ifdef USE_AOMAP
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
#endif`,tc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ic=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,rc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ac=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oc=`#ifdef USE_IRIDESCENCE
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
#endif`,lc=`#ifdef USE_BUMPMAP
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
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,hc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vc=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,_c=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xc=`vec3 transformedNormal = objectNormal;
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
#endif`,yc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ec=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ac=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cc=`#ifdef USE_ENVMAP
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
#endif`,Rc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ic=`#ifdef USE_GRADIENTMAP
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
}`,Oc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gc=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Vc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Hc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xc=`PhysicalMaterial material;
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
#endif`,jc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Yc=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Kc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$c=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,th=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ih=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sh=`#if defined( USE_POINTS_UV )
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
#endif`,ah=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ch=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ph=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gh=`#ifdef USE_NORMALMAP
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
#endif`,vh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_h=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,wh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Th=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ah=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ch=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dh=`#ifdef USE_SKINNING
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
#endif`,Ih=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Oh=`#ifdef USE_SKINNING
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
#endif`,Fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gh=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vh=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yh=`uniform sampler2D t2D;
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
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$h=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qh=`#include <common>
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
}`,eu=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,tu=`#define DISTANCE
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
}`,iu=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ru=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,su=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,au=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ou=`#include <common>
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
}`,lu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cu=`#define LAMBERT
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
}`,hu=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,uu=`#define MATCAP
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
}`,du=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pu=`#define NORMAL
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
}`,fu=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mu=`#define PHONG
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
}`,gu=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vu=`#define STANDARD
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
}`,_u=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xu=`#define TOON
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
}`,yu=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Su=`uniform float size;
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
}`,Mu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,wu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,bu=`uniform vec3 color;
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
}`,Eu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Tu=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Oe={alphahash_fragment:Yl,alphahash_pars_fragment:Kl,alphamap_fragment:Zl,alphamap_pars_fragment:Jl,alphatest_fragment:$l,alphatest_pars_fragment:Ql,aomap_fragment:ec,aomap_pars_fragment:tc,batching_pars_vertex:ic,batching_vertex:rc,begin_vertex:sc,beginnormal_vertex:ac,bsdfs:nc,iridescence_fragment:oc,bumpmap_pars_fragment:lc,clipping_planes_fragment:cc,clipping_planes_pars_fragment:hc,clipping_planes_pars_vertex:uc,clipping_planes_vertex:dc,color_fragment:pc,color_pars_fragment:fc,color_pars_vertex:mc,color_vertex:gc,common:vc,cube_uv_reflection_fragment:_c,defaultnormal_vertex:xc,displacementmap_pars_vertex:yc,displacementmap_vertex:Sc,emissivemap_fragment:Mc,emissivemap_pars_fragment:wc,colorspace_fragment:bc,colorspace_pars_fragment:Ec,envmap_fragment:Tc,envmap_common_pars_fragment:Ac,envmap_pars_fragment:Cc,envmap_pars_vertex:Rc,envmap_physical_pars_fragment:Vc,envmap_vertex:Pc,fog_vertex:Lc,fog_pars_vertex:Nc,fog_fragment:Uc,fog_pars_fragment:Dc,gradientmap_pars_fragment:Ic,lightmap_fragment:Oc,lightmap_pars_fragment:Fc,lights_lambert_fragment:zc,lights_lambert_pars_fragment:Bc,lights_pars_begin:Gc,lights_toon_fragment:Hc,lights_toon_pars_fragment:kc,lights_phong_fragment:Wc,lights_phong_pars_fragment:qc,lights_physical_fragment:Xc,lights_physical_pars_fragment:jc,lights_fragment_begin:Yc,lights_fragment_maps:Kc,lights_fragment_end:Zc,logdepthbuf_fragment:Jc,logdepthbuf_pars_fragment:$c,logdepthbuf_pars_vertex:Qc,logdepthbuf_vertex:eh,map_fragment:th,map_pars_fragment:ih,map_particle_fragment:rh,map_particle_pars_fragment:sh,metalnessmap_fragment:ah,metalnessmap_pars_fragment:nh,morphcolor_vertex:oh,morphnormal_vertex:lh,morphtarget_pars_vertex:ch,morphtarget_vertex:hh,normal_fragment_begin:uh,normal_fragment_maps:dh,normal_pars_fragment:ph,normal_pars_vertex:fh,normal_vertex:mh,normalmap_pars_fragment:gh,clearcoat_normal_fragment_begin:vh,clearcoat_normal_fragment_maps:_h,clearcoat_pars_fragment:xh,iridescence_pars_fragment:yh,opaque_fragment:Sh,packing:Mh,premultiplied_alpha_fragment:wh,project_vertex:bh,dithering_fragment:Eh,dithering_pars_fragment:Th,roughnessmap_fragment:Ah,roughnessmap_pars_fragment:Ch,shadowmap_pars_fragment:Rh,shadowmap_pars_vertex:Ph,shadowmap_vertex:Lh,shadowmask_pars_fragment:Nh,skinbase_vertex:Uh,skinning_pars_vertex:Dh,skinning_vertex:Ih,skinnormal_vertex:Oh,specularmap_fragment:Fh,specularmap_pars_fragment:zh,tonemapping_fragment:Bh,tonemapping_pars_fragment:Gh,transmission_fragment:Vh,transmission_pars_fragment:Hh,uv_pars_fragment:kh,uv_pars_vertex:Wh,uv_vertex:qh,worldpos_vertex:Xh,background_vert:jh,background_frag:Yh,backgroundCube_vert:Kh,backgroundCube_frag:Zh,cube_vert:Jh,cube_frag:$h,depth_vert:Qh,depth_frag:eu,distanceRGBA_vert:tu,distanceRGBA_frag:iu,equirect_vert:ru,equirect_frag:su,linedashed_vert:au,linedashed_frag:nu,meshbasic_vert:ou,meshbasic_frag:lu,meshlambert_vert:cu,meshlambert_frag:hu,meshmatcap_vert:uu,meshmatcap_frag:du,meshnormal_vert:pu,meshnormal_frag:fu,meshphong_vert:mu,meshphong_frag:gu,meshphysical_vert:vu,meshphysical_frag:_u,meshtoon_vert:xu,meshtoon_frag:yu,points_vert:Su,points_frag:Mu,shadow_vert:wu,shadow_frag:bu,sprite_vert:Eu,sprite_frag:Tu},ae={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},hi={basic:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:It([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:It([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:It([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:It([ae.points,ae.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:It([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:It([ae.common,ae.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:It([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:It([ae.sprite,ae.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:It([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:It([ae.lights,ae.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};hi.physical={uniforms:It([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ms={r:0,b:0,g:0};function Au(s,e,t,i,r,a,n){const o=new Xe(0);let l=a===!0?0:1,c,h,d=null,u=0,f=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),_=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,n):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===306)?(h===void 0&&(h=new Ue(new Ar(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:wr(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,(d!==x||u!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ue(new ci(2,2),new ji({name:"BackgroundMaterial",uniforms:wr(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Je.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Ms,Go(s)),i.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,n)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Cu(s,e,t,i){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),n=i.isWebGL2||a!==null,o={},l=m(null);let c=l,h=!1;function d(P,L,I,q,j){let V=!1;if(n){const Z=v(q,I,L);c!==Z&&(c=Z,f(c.object)),V=p(P,q,I,j),V&&_(P,q,I,j)}else{const Z=L.wireframe===!0;(c.geometry!==q.id||c.program!==I.id||c.wireframe!==Z)&&(c.geometry=q.id,c.program=I.id,c.wireframe=Z,V=!0)}j!==null&&t.update(j,s.ELEMENT_ARRAY_BUFFER),(V||h)&&(h=!1,z(P,L,I,q),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function u(){return i.isWebGL2?s.createVertexArray():a.createVertexArrayOES()}function f(P){return i.isWebGL2?s.bindVertexArray(P):a.bindVertexArrayOES(P)}function g(P){return i.isWebGL2?s.deleteVertexArray(P):a.deleteVertexArrayOES(P)}function v(P,L,I){const q=I.wireframe===!0;let j=o[P.id];j===void 0&&(j={},o[P.id]=j);let V=j[L.id];V===void 0&&(V={},j[L.id]=V);let Z=V[q];return Z===void 0&&(Z=m(u()),V[q]=Z),Z}function m(P){const L=[],I=[],q=[];for(let j=0;j<r;j++)L[j]=0,I[j]=0,q[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:q,object:P,attributes:{},index:null}}function p(P,L,I,q){const j=c.attributes,V=L.attributes;let Z=0;const $=I.getAttributes();for(const K in $)if($[K].location>=0){const k=j[K];let J=V[K];if(J===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;Z++}return c.attributesNum!==Z||c.index!==q}function _(P,L,I,q){const j={},V=L.attributes;let Z=0;const $=I.getAttributes();for(const K in $)if($[K].location>=0){let k=V[K];k===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(k=P.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),j[K]=J,Z++}c.attributes=j,c.attributesNum=Z,c.index=q}function x(){const P=c.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function M(P){R(P,0)}function R(P,L){const I=c.newAttributes,q=c.enabledAttributes,j=c.attributeDivisors;I[P]=1,q[P]===0&&(s.enableVertexAttribArray(P),q[P]=1),j[P]!==L&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),j[P]=L)}function C(){const P=c.newAttributes,L=c.enabledAttributes;for(let I=0,q=L.length;I<q;I++)L[I]!==P[I]&&(s.disableVertexAttribArray(I),L[I]=0)}function T(P,L,I,q,j,V,Z){Z===!0?s.vertexAttribIPointer(P,L,I,j,V):s.vertexAttribPointer(P,L,I,q,j,V)}function z(P,L,I,q){if(i.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const j=q.attributes,V=I.getAttributes(),Z=L.defaultAttributeValues;for(const $ in V){const K=V[$];if(K.location>=0){let k=j[$];if(k===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const J=k.normalized,he=k.itemSize,ue=t.get(k);if(ue===void 0)continue;const de=ue.buffer,Ce=ue.type,Te=ue.bytesPerElement,_e=i.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||k.gpuType===1013);if(k.isInterleavedBufferAttribute){const Ge=k.data,H=Ge.stride,at=k.offset;if(Ge.isInstancedInterleavedBuffer){for(let ye=0;ye<K.locationSize;ye++)R(K.location+ye,Ge.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ge.meshPerAttribute*Ge.count)}else for(let ye=0;ye<K.locationSize;ye++)M(K.location+ye);s.bindBuffer(s.ARRAY_BUFFER,de);for(let ye=0;ye<K.locationSize;ye++)T(K.location+ye,he/K.locationSize,Ce,J,H*Te,(at+he/K.locationSize*ye)*Te,_e)}else{if(k.isInstancedBufferAttribute){for(let Ge=0;Ge<K.locationSize;Ge++)R(K.location+Ge,k.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Ge=0;Ge<K.locationSize;Ge++)M(K.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,de);for(let Ge=0;Ge<K.locationSize;Ge++)T(K.location+Ge,he/K.locationSize,Ce,J,he*Te,he/K.locationSize*Ge*Te,_e)}}else if(Z!==void 0){const J=Z[$];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(K.location,J);break;case 3:s.vertexAttrib3fv(K.location,J);break;case 4:s.vertexAttrib4fv(K.location,J);break;default:s.vertexAttrib1fv(K.location,J)}}}}C()}function b(){N();for(const P in o){const L=o[P];for(const I in L){const q=L[I];for(const j in q)g(q[j].object),delete q[j];delete L[I]}delete o[P]}}function E(P){if(o[P.id]===void 0)return;const L=o[P.id];for(const I in L){const q=L[I];for(const j in q)g(q[j].object),delete q[j];delete L[I]}delete o[P.id]}function O(P){for(const L in o){const I=o[L];if(I[P.id]===void 0)continue;const q=I[P.id];for(const j in q)g(q[j].object),delete q[j];delete I[P.id]}}function N(){F(),h=!0,c!==l&&(c=l,f(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:N,resetDefaultState:F,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:M,disableUnusedAttributes:C}}function Ru(s,e,t,i){const r=i.isWebGL2;let a;function n(h){a=h}function o(h,d){s.drawArrays(a,h,d),t.update(d,a,1)}function l(h,d,u){if(u===0)return;let f,g;if(r)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](a,h,d,u),t.update(d,a,u)}function c(h,d,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<u;g++)this.render(h[g],d[g]);else{f.multiDrawArraysWEBGL(a,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v];t.update(g,a,1)}}this.setMode=n,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Pu(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const n=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=n||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,M=n||e.has("OES_texture_float"),R=x&&M,C=n?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:n,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:C}}function Lu(s){const e=this;let t=null,i=0,r=!1,a=!1;const n=new Li,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!r||g===null||g.length===0||a&&!m)a?h(null):c();else{const _=a?0:i,x=_*4;let M=p.clippingState||null;l.value=M,M=h(g,u,x,f);for(let R=0;R!==x;++R)M[R]=t[R];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=f;x!==v;++x,M+=4)n.copy(d[x]).applyMatrix4(_,o),n.normal.toArray(m,M),m[M+3]=n.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Nu(s){let e=new WeakMap;function t(n,o){return o===303?n.mapping=301:o===304&&(n.mapping=302),n}function i(n){if(n&&n.isTexture){const o=n.mapping;if(o===303||o===304)if(e.has(n)){const l=e.get(n).texture;return t(l,n.mapping)}else{const l=n.image;if(l&&l.height>0){const c=new Wl(l.height/2);return c.fromEquirectangularTexture(s,n),e.set(n,c),n.addEventListener("dispose",r),t(c.texture,n.mapping)}else return null}}return n}function r(n){const o=n.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Wo extends Vo{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,n=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,n=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,n,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vr=4,Cn=[.125,.215,.35,.446,.526,.582],Hi=20,va=new Wo,Rn=new Xe;let _a=null,xa=0,ya=0;const Vi=(1+Math.sqrt(5))/2,hr=1/Vi,Pn=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Vi,hr),new D(0,Vi,-hr),new D(hr,0,Vi),new D(-hr,0,Vi),new D(Vi,hr,0),new D(-Vi,hr,0)];class Ln{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Un(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,xa,ya),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),xa=this._renderer.getActiveCubeFace(),ya=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:bi,depthBuffer:!1},r=Nn(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nn(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uu(a)),this._blurMaterial=Du(a,e,t)}return r}_compileMaterial(e){const t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,r){const a=new Bt(90,1,t,i),n=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Rn),l.toneMapping=0,l.autoClear=!1;const d=new $r({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),u=new Ue(new Ar,d);let f=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(Rn),f=!0);for(let v=0;v<6;v++){const m=v%3;m===0?(a.up.set(0,n[v],0),a.lookAt(o[v],0,0)):m===1?(a.up.set(0,0,n[v]),a.lookAt(0,o[v],0)):(a.up.set(0,n[v],0),a.lookAt(0,0,o[v]));const p=this._cubeSize;ws(r,m*p,v>2?p:0,p,p),l.setRenderTarget(r),f&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Un());const a=r?this._cubemapMaterial:this._equirectMaterial,n=new Ue(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(n,va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),n=Pn[(r-1)%Pn.length];this._blur(e,r-1,r,a,n)}t.autoClear=i}_blur(e,t,i,r,a){const n=this._pingPongRenderTarget;this._halfBlur(e,n,t,i,r,"latitudinal",a),this._halfBlur(n,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,n,o){const l=this._renderer,c=this._blurMaterial;n!=="latitudinal"&&n!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ue(this._lodPlanes[r],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),v=a/g,m=isFinite(a)?1+Math.floor(h*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const p=[];let _=0;for(let T=0;T<Hi;++T){const z=T/v,b=Math.exp(-z*z/2);p.push(b),T===0?_+=b:T<m&&(_+=2*b)}for(let T=0;T<p.length;T++)p[T]=p[T]/_;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=n==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-vr?r-x+vr:0),C=4*(this._cubeSize-M);ws(t,R,C,3*M,2*M),l.setRenderTarget(t),l.render(d,va)}}function Uu(s){const e=[],t=[],i=[];let r=s;const a=s-vr+1+Cn.length;for(let n=0;n<a;n++){const o=Math.pow(2,r);t.push(o);let l=1/o;n>s-vr?l=Cn[n-s+vr-1]:n===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),x=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let C=0;C<f;C++){const T=C%3*2/3-1,z=C>2?0:-1,b=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];_.set(b,v*g*C),x.set(u,m*g*C);const E=[C,C,C,C,C,C];M.set(E,p*g*C)}const R=new Zt;R.setAttribute("position",new ii(_,v)),R.setAttribute("uv",new ii(x,m)),R.setAttribute("faceIndex",new ii(M,p)),e.push(R),r>vr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nn(s,e,t){const i=new Xi(s,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ws(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function Du(s,e,t){const i=new Float32Array(Hi),r=new D(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Un(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Dn(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function Iu(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ln(s)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ln(s));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",a),u.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function n(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:n}}function Ou(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Fu(s,e,t,i){const r={},a=new WeakMap;function n(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",n),delete r[u.id];const f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",n),r[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,M=_.length;x<M;x+=3){const R=_[x+0],C=_[x+1],T=_[x+2];u.push(R,C,C,T,T,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,M=_.length/3-1;x<M;x+=3){const R=x+0,C=x+1,T=x+2;u.push(R,C,C,T,T,R)}}else return;const m=new(No(u)?Bo:zo)(u,1);m.version=v;const p=a.get(d);p&&e.remove(p),a.set(d,m)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function zu(s,e,t,i){const r=i.isWebGL2;let a;function n(f){a=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){s.drawElements(a,g,o,f*l),t.update(g,a,1)}function d(f,g,v){if(v===0)return;let m,p;if(r)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](a,g,o,f*l,v),t.update(g,a,v)}function u(f,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(a,g,0,o,f,0,v);let p=0;for(let _=0;_<v;_++)p+=g[_];t.update(p,a,1)}}this.setMode=n,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Bu(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,n,o){switch(t.calls++,n){case s.TRIANGLES:t.triangles+=o*(a/3);break;case s.LINES:t.lines+=o*(a/2);break;case s.LINE_STRIP:t.lines+=o*(a-1);break;case s.LINE_LOOP:t.lines+=o*a;break;case s.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Gu(s,e){return s[0]-e[0]}function Vu(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hu(s,e,t){const i={},r=new Float32Array(8),a=new WeakMap,n=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let _=function(){F.dispose(),a.delete(h),h.removeEventListener("dispose",_)};v!==void 0&&v.texture.dispose();const x=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let b=0;x===!0&&(b=1),M===!0&&(b=2),R===!0&&(b=3);let E=h.attributes.position.count*b,O=1;E>e.maxTextureSize&&(O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const N=new Float32Array(E*O*4*g),F=new Io(N,E,O,g);F.type=1015,F.needsUpdate=!0;const P=b*4;for(let L=0;L<g;L++){const I=C[L],q=T[L],j=z[L],V=E*O*4*L;for(let Z=0;Z<I.count;Z++){const $=Z*P;x===!0&&(n.fromBufferAttribute(I,Z),N[V+$+0]=n.x,N[V+$+1]=n.y,N[V+$+2]=n.z,N[V+$+3]=0),M===!0&&(n.fromBufferAttribute(q,Z),N[V+$+4]=n.x,N[V+$+5]=n.y,N[V+$+6]=n.z,N[V+$+7]=0),R===!0&&(n.fromBufferAttribute(j,Z),N[V+$+8]=n.x,N[V+$+9]=n.y,N[V+$+10]=n.z,N[V+$+11]=j.itemSize===4?n.w:1)}}v={count:g,texture:F,size:new le(E,O)},a.set(h,v),h.addEventListener("dispose",_)}let m=0;for(let _=0;_<u.length;_++)m+=u[_];const p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(s,"morphTargetBaseInfluence",p),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}else{const f=u===void 0?0:u.length;let g=i[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<f;x++){const M=g[x];M[0]=x,M[1]=u[x]}g.sort(Vu);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Gu);const v=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],R=M[0],C=M[1];R!==Number.MAX_SAFE_INTEGER&&C?(v&&h.getAttribute("morphTarget"+x)!==v[R]&&h.setAttribute("morphTarget"+x,v[R]),m&&h.getAttribute("morphNormal"+x)!==m[R]&&h.setAttribute("morphNormal"+x,m[R]),r[x]=C,p+=C):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const _=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",_),d.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function ku(s,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function n(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:n}}class qo extends Ot{constructor(e,t,i,r,a,n,o,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1014),i===void 0&&h===1027&&(i=1020),super(null,r,a,n,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xo=new Ot,jo=new qo(1,1);jo.compareFunction=515;const Yo=new Io,Ko=new Al,Zo=new Ho,In=[],On=[],Fn=new Float32Array(16),zn=new Float32Array(9),Bn=new Float32Array(4);function Cr(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let a=In[r];if(a===void 0&&(a=new Float32Array(r),In[r]=a),e!==0){i.toArray(a,0);for(let n=1,o=0;n!==e;++n)o+=t,s[n].toArray(a,o)}return a}function St(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Ws(s,e){let t=On[e];t===void 0&&(t=new Int32Array(e),On[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Wu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function Xu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function ju(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function Yu(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Bn.set(i),s.uniformMatrix2fv(this.addr,!1,Bn),Mt(t,i)}}function Ku(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;zn.set(i),s.uniformMatrix3fv(this.addr,!1,zn),Mt(t,i)}}function Zu(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Fn.set(i),s.uniformMatrix4fv(this.addr,!1,Fn),Mt(t,i)}}function Ju(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $u(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Qu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function ed(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function td(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function id(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function rd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function sd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function ad(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);const a=this.type===s.SAMPLER_2D_SHADOW?jo:Xo;t.setTexture2D(e||a,r)}function nd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ko,r)}function od(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Zo,r)}function ld(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yo,r)}function cd(s){switch(s){case 5126:return Wu;case 35664:return qu;case 35665:return Xu;case 35666:return ju;case 35674:return Yu;case 35675:return Ku;case 35676:return Zu;case 5124:case 35670:return Ju;case 35667:case 35671:return $u;case 35668:case 35672:return Qu;case 35669:case 35673:return ed;case 5125:return td;case 36294:return id;case 36295:return rd;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return ad;case 35679:case 36299:case 36307:return nd;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}function hd(s,e){s.uniform1fv(this.addr,e)}function ud(s,e){const t=Cr(e,this.size,2);s.uniform2fv(this.addr,t)}function dd(s,e){const t=Cr(e,this.size,3);s.uniform3fv(this.addr,t)}function pd(s,e){const t=Cr(e,this.size,4);s.uniform4fv(this.addr,t)}function fd(s,e){const t=Cr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function md(s,e){const t=Cr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gd(s,e){const t=Cr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vd(s,e){s.uniform1iv(this.addr,e)}function _d(s,e){s.uniform2iv(this.addr,e)}function xd(s,e){s.uniform3iv(this.addr,e)}function yd(s,e){s.uniform4iv(this.addr,e)}function Sd(s,e){s.uniform1uiv(this.addr,e)}function Md(s,e){s.uniform2uiv(this.addr,e)}function wd(s,e){s.uniform3uiv(this.addr,e)}function bd(s,e){s.uniform4uiv(this.addr,e)}function Ed(s,e,t){const i=this.cache,r=e.length,a=Ws(t,r);St(i,a)||(s.uniform1iv(this.addr,a),Mt(i,a));for(let n=0;n!==r;++n)t.setTexture2D(e[n]||Xo,a[n])}function Td(s,e,t){const i=this.cache,r=e.length,a=Ws(t,r);St(i,a)||(s.uniform1iv(this.addr,a),Mt(i,a));for(let n=0;n!==r;++n)t.setTexture3D(e[n]||Ko,a[n])}function Ad(s,e,t){const i=this.cache,r=e.length,a=Ws(t,r);St(i,a)||(s.uniform1iv(this.addr,a),Mt(i,a));for(let n=0;n!==r;++n)t.setTextureCube(e[n]||Zo,a[n])}function Cd(s,e,t){const i=this.cache,r=e.length,a=Ws(t,r);St(i,a)||(s.uniform1iv(this.addr,a),Mt(i,a));for(let n=0;n!==r;++n)t.setTexture2DArray(e[n]||Yo,a[n])}function Rd(s){switch(s){case 5126:return hd;case 35664:return ud;case 35665:return dd;case 35666:return pd;case 35674:return fd;case 35675:return md;case 35676:return gd;case 5124:case 35670:return vd;case 35667:case 35671:return _d;case 35668:case 35672:return xd;case 35669:case 35673:return yd;case 5125:return Sd;case 36294:return Md;case 36295:return wd;case 36296:return bd;case 35678:case 36198:case 36298:case 36306:case 35682:return Ed;case 35679:case 36299:case 36307:return Td;case 35680:case 36300:case 36308:case 36293:return Ad;case 36289:case 36303:case 36311:case 36292:return Cd}}class Pd{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cd(t.type)}}class Ld{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rd(t.type)}}class Nd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,n=r.length;a!==n;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Gn(s,e){s.seq.push(e),s.map[e.id]=e}function Ud(s,e,t){const i=s.name,r=i.length;for(Sa.lastIndex=0;;){const a=Sa.exec(i),n=Sa.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&n+2===r){Gn(t,c===void 0?new Pd(o,s,e):new Ld(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Nd(o),Gn(t,h)),t=h}}}class Is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),n=e.getUniformLocation(t,a.name);Ud(a,n,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const n=e[r];n.id in t&&i.push(n)}return i}}function Vn(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const Dd=37297;let Id=0;function Od(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let n=r;n<a;n++){const o=n+1;i.push(`${o===e?">":" "} ${o}: ${t[n]}`)}return i.join(`
`)}function Fd(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let i;switch(e===t?i="":e===zs&&t===Fs?i="LinearDisplayP3ToLinearSRGB":e===Fs&&t===zs&&(i="LinearSRGBToLinearDisplayP3"),s){case bi:case Hs:return[i,"LinearTransferOETF"];case bt:case Wa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function Hn(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const n=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Od(s.getShaderSource(e),n)}else return r}function zd(s,e){const t=Fd(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Bd(s,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_r).join(`
`)}function Vd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_r).join(`
`)}function Hd(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kd(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=s.getActiveAttrib(e,r),n=a.name;let o=1;a.type===s.FLOAT_MAT2&&(o=2),a.type===s.FLOAT_MAT3&&(o=3),a.type===s.FLOAT_MAT4&&(o=4),t[n]={type:a.type,location:s.getAttribLocation(e,n),locationSize:o}}return t}function _r(s){return s!==""}function kn(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wn(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wd=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(s){return s.replace(Wd,Xd)}const qd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xd(s,e){let t=Oe[e];if(t===void 0){const i=qd.get(e);if(i!==void 0)t=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return za(t)}const jd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qn(s){return s.replace(jd,Yd)}function Yd(s,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Xn(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kd(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function Zd(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jd(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function $d(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Qd(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ep(s,e,t,i){const r=s.getContext(),a=t.defines;let n=t.vertexShader,o=t.fragmentShader;const l=Kd(t),c=Zd(t),h=Jd(t),d=$d(t),u=Qd(t),f=t.isWebGL2?"":Gd(t),g=Vd(t),v=Hd(a),m=r.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_r).join(`
`),p.length>0&&(p+=`
`),_=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(_r).join(`
`),_.length>0&&(_+=`
`)):(p=[Xn(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),_=[f,Xn(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Oe.tonemapping_pars_fragment:"",t.toneMapping!==0?Bd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,zd("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),n=za(n),n=kn(n,t),n=Wn(n,t),o=za(o),o=kn(o,t),o=Wn(o,t),n=qn(n),o=qn(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const M=x+p+n,R=x+_+o,C=Vn(r,r.VERTEX_SHADER,M),T=Vn(r,r.FRAGMENT_SHADER,R);r.attachShader(m,C),r.attachShader(m,T),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function z(N){if(s.debug.checkShaderErrors){const F=r.getProgramInfoLog(m).trim(),P=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(T).trim();let I=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(I=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,m,C,T);else{const j=Hn(r,C,"vertex"),V=Hn(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+F+`
`+j+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(P===""||L==="")&&(q=!1);q&&(N.diagnostics={runnable:I,programLog:F,vertexShader:{log:P,prefix:p},fragmentShader:{log:L,prefix:_}})}r.deleteShader(C),r.deleteShader(T),b=new Is(r,m),E=kd(r,m)}let b;this.getUniforms=function(){return b===void 0&&z(this),b};let E;this.getAttributes=function(){return E===void 0&&z(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(m,Dd)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Id++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=T,this}let tp=0;class ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),n=this._getShaderCacheForMaterial(e);return n.has(r)===!1&&(n.add(r),r.usedTimes++),n.has(a)===!1&&(n.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rp(e),t.set(e,i)),i}}class rp{constructor(e){this.id=tp++,this.code=e,this.usedTimes=0}}function sp(s,e,t,i,r,a,n){const o=new Xa,l=new ip,c=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,E,O,N,F){const P=N.fog,L=F.geometry,I=b.isMeshStandardMaterial?N.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||I),j=q&&q.mapping===306?q.image.height:null,V=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,$=Z!==void 0?Z.length:0;let K=0;L.morphAttributes.position!==void 0&&(K=1),L.morphAttributes.normal!==void 0&&(K=2),L.morphAttributes.color!==void 0&&(K=3);let k,J,he,ue;if(V){const pt=hi[V];k=pt.vertexShader,J=pt.fragmentShader}else k=b.vertexShader,J=b.fragmentShader,l.update(b),he=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);const de=s.getRenderTarget(),Ce=F.isInstancedMesh===!0,Te=F.isBatchedMesh===!0,_e=!!b.map,Ge=!!b.matcap,H=!!q,at=!!b.aoMap,ye=!!b.lightMap,ge=!!b.bumpMap,ve=!!b.normalMap,Qe=!!b.displacementMap,Ae=!!b.emissiveMap,w=!!b.metalnessMap,S=!!b.roughnessMap,B=b.anisotropy>0,Q=b.clearcoat>0,ee=b.iridescence>0,ie=b.sheen>0,xe=b.transmission>0,oe=B&&!!b.anisotropyMap,fe=Q&&!!b.clearcoatMap,be=Q&&!!b.clearcoatNormalMap,Fe=Q&&!!b.clearcoatRoughnessMap,te=ee&&!!b.iridescenceMap,Ze=ee&&!!b.iridescenceThicknessMap,We=ie&&!!b.sheenColorMap,Pe=ie&&!!b.sheenRoughnessMap,Me=!!b.specularMap,me=!!b.specularColorMap,Ie=!!b.specularIntensityMap,Ye=xe&&!!b.transmissionMap,ct=xe&&!!b.thicknessMap,Ve=!!b.gradientMap,re=!!b.alphaMap,U=b.alphaTest>0,se=!!b.alphaHash,ce=!!b.extensions,Ne=!!L.attributes.uv1,we=!!L.attributes.uv2,et=!!L.attributes.uv3;let tt=0;return b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(tt=s.toneMapping),{isWebGL2:h,shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:k,fragmentShader:J,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Te,instancing:Ce,instancingColor:Ce&&F.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:bi,map:_e,matcap:Ge,envMap:H,envMapMode:H&&q.mapping,envMapCubeUVHeight:j,aoMap:at,lightMap:ye,bumpMap:ge,normalMap:ve,displacementMap:u&&Qe,emissiveMap:Ae,normalMapObjectSpace:ve&&b.normalMapType===1,normalMapTangentSpace:ve&&b.normalMapType===0,metalnessMap:w,roughnessMap:S,anisotropy:B,anisotropyMap:oe,clearcoat:Q,clearcoatMap:fe,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,iridescence:ee,iridescenceMap:te,iridescenceThicknessMap:Ze,sheen:ie,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:Me,specularColorMap:me,specularIntensityMap:Ie,transmission:xe,transmissionMap:Ye,thicknessMap:ct,gradientMap:Ve,opaque:b.transparent===!1&&b.blending===1,alphaMap:re,alphaTest:U,alphaHash:se,combine:b.combine,mapUv:_e&&v(b.map.channel),aoMapUv:at&&v(b.aoMap.channel),lightMapUv:ye&&v(b.lightMap.channel),bumpMapUv:ge&&v(b.bumpMap.channel),normalMapUv:ve&&v(b.normalMap.channel),displacementMapUv:Qe&&v(b.displacementMap.channel),emissiveMapUv:Ae&&v(b.emissiveMap.channel),metalnessMapUv:w&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:oe&&v(b.anisotropyMap.channel),clearcoatMapUv:fe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&v(b.sheenRoughnessMap.channel),specularMapUv:Me&&v(b.specularMap.channel),specularColorMapUv:me&&v(b.specularColorMap.channel),specularIntensityMapUv:Ie&&v(b.specularIntensityMap.channel),transmissionMapUv:Ye&&v(b.transmissionMap.channel),thicknessMapUv:ct&&v(b.thicknessMap.channel),alphaMapUv:re&&v(b.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ve||B),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:we,vertexUv3s:et,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(_e||re),fog:!!P,useFog:b.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:_e&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===2,flipSided:b.side===1,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ce&&b.extensions.derivatives===!0,extensionFragDepth:ce&&b.extensions.fragDepth===!0,extensionDrawBuffers:ce&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)E.push(O),E.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(_(E,b),x(E,b),E.push(s.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function _(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function M(b){const E=g[b.type];let O;if(E){const N=hi[E];O=Gl.clone(N.uniforms)}else O=b.uniforms;return O}function R(b,E){let O;for(let N=0,F=c.length;N<F;N++){const P=c[N];if(P.cacheKey===E){O=P,++O.usedTimes;break}}return O===void 0&&(O=new ep(s,E,b,a),c.push(O)),O}function C(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function T(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:R,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:z}}function ap(){let s=new WeakMap;function e(a){let n=s.get(a);return n===void 0&&(n={},s.set(a,n)),n}function t(a){s.delete(a)}function i(a,n,o){s.get(a)[n]=o}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function np(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jn(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yn(){const s=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function n(d,u,f,g,v,m){let p=s[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},s[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,u,f,g,v,m){const p=n(d,u,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,u,f,g,v,m){const p=n(d,u,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||np),i.length>1&&i.sort(u||jn),r.length>1&&r.sort(u||jn)}function h(){for(let d=e,u=s.length;d<u;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:h,sort:c}}function op(){let s=new WeakMap;function e(i,r){const a=s.get(i);let n;return a===void 0?(n=new Yn,s.set(i,[n])):r>=a.length?(n=new Yn,a.push(n)):n=a[r],n}function t(){s=new WeakMap}return{get:e,dispose:t}}function lp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Xe};break;case"SpotLight":t={position:new D,direction:new D,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function cp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hp=0;function up(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dp(s,e){const t=new lp,i=cp(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new D);const a=new D,n=new ut,o=new ut;function l(h,d){let u=0,f=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let v=0,m=0,p=0,_=0,x=0,M=0,R=0,C=0,T=0,z=0,b=0;h.sort(up);const E=d===!0?Math.PI:1;for(let N=0,F=h.length;N<F;N++){const P=h[N],L=P.color,I=P.intensity,q=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*I*E,f+=L.g*I*E,g+=L.b*I*E;else if(P.isLightProbe){for(let V=0;V<9;V++)r.probe[V].addScaledVector(P.sh.coefficients[V],I);b++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const Z=P.shadow,$=i.get(P);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=j,r.directionalShadowMatrix[v]=P.shadow.matrix,M++}r.directional[v]=V,v++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(I*E),V.distance=q,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,r.spot[p]=V;const Z=P.shadow;if(P.map&&(r.spotLightMap[T]=P.map,T++,Z.updateMatrices(P),P.castShadow&&z++),r.spotLightMatrix[p]=Z.matrix,P.castShadow){const $=i.get(P);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,r.spotShadow[p]=$,r.spotShadowMap[p]=j,C++}p++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(L).multiplyScalar(I),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),r.rectArea[_]=V,_++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*E),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Z=P.shadow,$=i.get(P);$.shadowBias=Z.bias,$.shadowNormalBias=Z.normalBias,$.shadowRadius=Z.radius,$.shadowMapSize=Z.mapSize,$.shadowCameraNear=Z.camera.near,$.shadowCameraFar=Z.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=j,r.pointShadowMatrix[m]=P.shadow.matrix,R++}r.point[m]=V,m++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(I*E),V.groundColor.copy(P.groundColor).multiplyScalar(I*E),r.hemi[x]=V,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=g;const O=r.hash;(O.directionalLength!==v||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==_||O.hemiLength!==x||O.numDirectionalShadows!==M||O.numPointShadows!==R||O.numSpotShadows!==C||O.numSpotMaps!==T||O.numLightProbes!==b)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+T-z,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=b,O.directionalLength=v,O.pointLength=m,O.spotLength=p,O.rectAreaLength=_,O.hemiLength=x,O.numDirectionalShadows=M,O.numPointShadows=R,O.numSpotShadows=C,O.numSpotMaps=T,O.numLightProbes=b,r.version=hp++)}function c(h,d){let u=0,f=0,g=0,v=0,m=0;const p=d.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const M=h[_];if(M.isDirectionalLight){const R=r.directional[u];R.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(p),u++}else if(M.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(p),g++}else if(M.isRectAreaLight){const R=r.rectArea[v];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),o.identity(),n.copy(M.matrixWorld),n.premultiply(p),o.extractRotation(n),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const R=r.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Kn(s,e){const t=new dp(s,e),i=[],r=[];function a(){i.length=0,r.length=0}function n(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:n,pushShadow:o}}function pp(s,e){let t=new WeakMap;function i(a,n=0){const o=t.get(a);let l;return o===void 0?(l=new Kn(s,e),t.set(a,[l])):n>=o.length?(l=new Kn(s,e),o.push(l)):l=o[n],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class fp extends Ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mp extends Ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vp=`uniform sampler2D shadow_pass;
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
}`;function _p(s,e,t){let i=new ja;const r=new le,a=new le,n=new nt,o=new fp({depthPacking:3201}),l=new mp,c={},h=t.maxTextureSize,d={0:1,1:0,2:2},u=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:gp,fragmentShader:vp}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Zt;g.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ue(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(C,T,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),E=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),N=s.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==3&&this.type===3,P=p===3&&this.type!==3;for(let L=0,I=C.length;L<I;L++){const q=C[L],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const V=j.getFrameExtents();if(r.multiply(V),a.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/V.x),r.x=a.x*V.x,j.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/V.y),r.y=a.y*V.y,j.mapSize.y=a.y)),j.map===null||F===!0||P===!0){const $=this.type!==3?{minFilter:1003,magFilter:1003}:{};j.map!==null&&j.map.dispose(),j.map=new Xi(r.x,r.y,$),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const Z=j.getViewportCount();for(let $=0;$<Z;$++){const K=j.getViewport($);n.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),N.viewport(n),j.updateMatrices(q,$),i=j.getFrustum(),M(T,z,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===3&&_(j,z),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,E,O)};function _(C,T){const z=e.update(v);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xi(r.x,r.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(T,null,z,u,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(T,null,z,f,v,null)}function x(C,T,z,b){let E=null;const O=z.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)E=O;else if(E=z.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=E.uuid,F=T.uuid;let P=c[N];P===void 0&&(P={},c[N]=P);let L=P[F];L===void 0&&(L=E.clone(),P[F]=L,T.addEventListener("dispose",R)),E=L}if(E.visible=T.visible,E.wireframe=T.wireframe,b===3?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,z.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=s.properties.get(E);N.light=z}return E}function M(C,T,z,b,E){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===3)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,C.matrixWorld);const N=e.update(C),F=C.material;if(Array.isArray(F)){const P=N.groups;for(let L=0,I=P.length;L<I;L++){const q=P[L],j=F[q.materialIndex];if(j&&j.visible){const V=x(C,j,b,E);C.onBeforeShadow(s,C,T,z,N,V,q),s.renderBufferDirect(z,null,N,V,C,q),C.onAfterShadow(s,C,T,z,N,V,q)}}}else if(F.visible){const P=x(C,F,b,E);C.onBeforeShadow(s,C,T,z,N,P,null),s.renderBufferDirect(z,null,N,P,C,null),C.onAfterShadow(s,C,T,z,N,P,null)}}const O=C.children;for(let N=0,F=O.length;N<F;N++)M(O[N],T,z,b,E)}function R(C){C.target.removeEventListener("dispose",R);for(const T in c){const z=c[T],b=C.target.uuid;b in z&&(z[b].dispose(),delete z[b])}}}function xp(s,e,t){const i=t.isWebGL2;function r(){let U=!1;const se=new nt;let ce=null;const Ne=new nt(0,0,0,0);return{setMask:function(we){ce!==we&&!U&&(s.colorMask(we,we,we,we),ce=we)},setLocked:function(we){U=we},setClear:function(we,et,tt,pt,kt){kt===!0&&(we*=pt,et*=pt,tt*=pt),se.set(we,et,tt,pt),Ne.equals(se)===!1&&(s.clearColor(we,et,tt,pt),Ne.copy(se))},reset:function(){U=!1,ce=null,Ne.set(-1,0,0,0)}}}function a(){let U=!1,se=null,ce=null,Ne=null;return{setTest:function(we){we?Te(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(we){se!==we&&!U&&(s.depthMask(we),se=we)},setFunc:function(we){if(ce!==we){switch(we){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=we}},setLocked:function(we){U=we},setClear:function(we){Ne!==we&&(s.clearDepth(we),Ne=we)},reset:function(){U=!1,se=null,ce=null,Ne=null}}}function n(){let U=!1,se=null,ce=null,Ne=null,we=null,et=null,tt=null,pt=null,kt=null;return{setTest:function(it){U||(it?Te(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(it){se!==it&&!U&&(s.stencilMask(it),se=it)},setFunc:function(it,Lt,ri){(ce!==it||Ne!==Lt||we!==ri)&&(s.stencilFunc(it,Lt,ri),ce=it,Ne=Lt,we=ri)},setOp:function(it,Lt,ri){(et!==it||tt!==Lt||pt!==ri)&&(s.stencilOp(it,Lt,ri),et=it,tt=Lt,pt=ri)},setLocked:function(it){U=it},setClear:function(it){kt!==it&&(s.clearStencil(it),kt=it)},reset:function(){U=!1,se=null,ce=null,Ne=null,we=null,et=null,tt=null,pt=null,kt=null}}}const o=new r,l=new a,c=new n,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,M=null,R=null,C=null,T=null,z=null,b=new Xe(0,0,0),E=0,O=!1,N=null,F=null,P=null,L=null,I=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,V=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),j=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),j=V>=2);let $=null,K={};const k=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),he=new nt().fromArray(k),ue=new nt().fromArray(J);function de(U,se,ce,Ne){const we=new Uint8Array(4),et=s.createTexture();s.bindTexture(U,et),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let tt=0;tt<ce;tt++)i&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(se,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(se+tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return et}const Ce={};Ce[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ce[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Te(s.DEPTH_TEST),l.setFunc(3),Ae(!1),w(1),Te(s.CULL_FACE),ve(0);function Te(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function _e(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Ge(U,se){return f[U]!==se?(s.bindFramebuffer(U,se),f[U]=se,i&&(U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=se),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=se)),!0):!1}function H(U,se){let ce=v,Ne=!1;if(U)if(ce=g.get(se),ce===void 0&&(ce=[],g.set(se,ce)),U.isWebGLMultipleRenderTargets){const we=U.texture;if(ce.length!==we.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let et=0,tt=we.length;et<tt;et++)ce[et]=s.COLOR_ATTACHMENT0+et;ce.length=we.length,Ne=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ne=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function at(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const ye={100:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)ye[103]=s.MIN,ye[104]=s.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ye[103]=U.MIN_EXT,ye[104]=U.MAX_EXT)}const ge={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,204:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,205:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function ve(U,se,ce,Ne,we,et,tt,pt,kt,it){if(U===0){p===!0&&(_e(s.BLEND),p=!1);return}if(p===!1&&(Te(s.BLEND),p=!0),U!==5){if(U!==_||it!==O){if((x!==100||C!==100)&&(s.blendEquation(s.FUNC_ADD),x=100,C=100),it)switch(U){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,R=null,T=null,z=null,b.set(0,0,0),E=0,_=U,O=it}return}we=we||se,et=et||ce,tt=tt||Ne,(se!==x||we!==C)&&(s.blendEquationSeparate(ye[se],ye[we]),x=se,C=we),(ce!==M||Ne!==R||et!==T||tt!==z)&&(s.blendFuncSeparate(ge[ce],ge[Ne],ge[et],ge[tt]),M=ce,R=Ne,T=et,z=tt),(pt.equals(b)===!1||kt!==E)&&(s.blendColor(pt.r,pt.g,pt.b,kt),b.copy(pt),E=kt),_=U,O=!1}function Qe(U,se){U.side===2?_e(s.CULL_FACE):Te(s.CULL_FACE);let ce=U.side===1;se&&(ce=!ce),Ae(ce),U.blending===1&&U.transparent===!1?ve(0):ve(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const Ne=U.stencilWrite;c.setTest(Ne),Ne&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),B(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Te(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(U){N!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),N=U)}function w(U){U!==0?(Te(s.CULL_FACE),U!==F&&(U===1?s.cullFace(s.BACK):U===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),F=U}function S(U){U!==P&&(j&&s.lineWidth(U),P=U)}function B(U,se,ce){U?(Te(s.POLYGON_OFFSET_FILL),(L!==se||I!==ce)&&(s.polygonOffset(se,ce),L=se,I=ce)):_e(s.POLYGON_OFFSET_FILL)}function Q(U){U?Te(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function ee(U){U===void 0&&(U=s.TEXTURE0+q-1),$!==U&&(s.activeTexture(U),$=U)}function ie(U,se,ce){ce===void 0&&($===null?ce=s.TEXTURE0+q-1:ce=$);let Ne=K[ce];Ne===void 0&&(Ne={type:void 0,texture:void 0},K[ce]=Ne),(Ne.type!==U||Ne.texture!==se)&&($!==ce&&(s.activeTexture(ce),$=ce),s.bindTexture(U,se||Ce[U]),Ne.type=U,Ne.texture=se)}function xe(){const U=K[$];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(U){he.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),he.copy(U))}function Ye(U){ue.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ue.copy(U))}function ct(U,se){let ce=d.get(se);ce===void 0&&(ce=new WeakMap,d.set(se,ce));let Ne=ce.get(U);Ne===void 0&&(Ne=s.getUniformBlockIndex(se,U.name),ce.set(U,Ne))}function Ve(U,se){const ce=d.get(se).get(U);h.get(se)!==ce&&(s.uniformBlockBinding(se,ce,U.__bindingPointIndex),h.set(se,ce))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},$=null,K={},f={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,M=null,R=null,C=null,T=null,z=null,b=new Xe(0,0,0),E=0,O=!1,N=null,F=null,P=null,L=null,I=null,he.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Te,disable:_e,bindFramebuffer:Ge,drawBuffers:H,useProgram:at,setBlending:ve,setMaterial:Qe,setFlipSided:Ae,setCullFace:w,setLineWidth:S,setPolygonOffset:B,setScissorTest:Q,activeTexture:ee,bindTexture:ie,unbindTexture:xe,compressedTexImage2D:oe,compressedTexImage3D:fe,texImage2D:Me,texImage3D:me,updateUBOMapping:ct,uniformBlockBinding:Ve,texStorage2D:We,texStorage3D:Pe,texSubImage2D:be,texSubImage3D:Fe,compressedTexSubImage2D:te,compressedTexSubImage3D:Ze,scissor:Ie,viewport:Ye,reset:re}}function yp(s,e,t,i,r,a,n){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return f?new OffscreenCanvas(w,S):jr("canvas")}function v(w,S,B,Q){let ee=1;if((w.width>Q||w.height>Q)&&(ee=Q/Math.max(w.width,w.height)),ee<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ie=S?Fa:Math.floor,xe=ie(ee*w.width),oe=ie(ee*w.height);d===void 0&&(d=g(xe,oe));const fe=B?g(xe,oe):d;return fe.width=xe,fe.height=oe,fe.getContext("2d").drawImage(w,0,0,xe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+xe+"x"+oe+")."),fe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return un(w.width)&&un(w.height)}function p(w){return o?!1:w.wrapS!==1001||w.wrapT!==1001||w.minFilter!==1003&&w.minFilter!==1006}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==1003&&w.minFilter!==1006}function x(w){s.generateMipmap(w)}function M(w,S,B,Q,ee=!1){if(o===!1)return S;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ie=S;if(S===s.RED&&(B===s.FLOAT&&(ie=s.R32F),B===s.HALF_FLOAT&&(ie=s.R16F),B===s.UNSIGNED_BYTE&&(ie=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ie=s.R8UI),B===s.UNSIGNED_SHORT&&(ie=s.R16UI),B===s.UNSIGNED_INT&&(ie=s.R32UI),B===s.BYTE&&(ie=s.R8I),B===s.SHORT&&(ie=s.R16I),B===s.INT&&(ie=s.R32I)),S===s.RG&&(B===s.FLOAT&&(ie=s.RG32F),B===s.HALF_FLOAT&&(ie=s.RG16F),B===s.UNSIGNED_BYTE&&(ie=s.RG8)),S===s.RGBA){const xe=ee?Os:Je.getTransfer(Q);B===s.FLOAT&&(ie=s.RGBA32F),B===s.HALF_FLOAT&&(ie=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ie=xe===st?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(w,S,B){return _(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function C(w){return w===1003||w===1004||w===1005?s.NEAREST:s.LINEAR}function T(w){const S=w.target;S.removeEventListener("dispose",T),b(S),S.isVideoTexture&&h.delete(S)}function z(w){const S=w.target;S.removeEventListener("dispose",z),O(S)}function b(w){const S=i.get(w);if(S.__webglInit===void 0)return;const B=w.source,Q=u.get(B);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(w),Object.keys(Q).length===0&&u.delete(B)}i.remove(w)}function E(w){const S=i.get(w);s.deleteTexture(S.__webglTexture);const B=w.source,Q=u.get(B);delete Q[S.__cacheKey],n.memory.textures--}function O(w){const S=w.texture,B=i.get(w),Q=i.get(S);if(Q.__webglTexture!==void 0&&(s.deleteTexture(Q.__webglTexture),n.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(B.__webglFramebuffer[ee]))for(let ie=0;ie<B.__webglFramebuffer[ee].length;ie++)s.deleteFramebuffer(B.__webglFramebuffer[ee][ie]);else s.deleteFramebuffer(B.__webglFramebuffer[ee]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[ee])}else{if(Array.isArray(B.__webglFramebuffer))for(let ee=0;ee<B.__webglFramebuffer.length;ee++)s.deleteFramebuffer(B.__webglFramebuffer[ee]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ee=0;ee<B.__webglColorRenderbuffer.length;ee++)B.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[ee]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ee=0,ie=S.length;ee<ie;ee++){const xe=i.get(S[ee]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),n.memory.textures--),i.remove(S[ee])}i.remove(S),i.remove(w)}let N=0;function F(){N=0}function P(){const w=N;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function L(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function I(w,S){const B=i.get(w);if(w.isVideoTexture&&Qe(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(B,w,S);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function q(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){he(B,w,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function j(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){he(B,w,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function V(w,S){const B=i.get(w);if(w.version>0&&B.__version!==w.version){ue(B,w,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const Z={1e3:s.REPEAT,1001:s.CLAMP_TO_EDGE,1002:s.MIRRORED_REPEAT},$={1003:s.NEAREST,1004:s.NEAREST_MIPMAP_NEAREST,1005:s.NEAREST_MIPMAP_LINEAR,1006:s.LINEAR,1007:s.LINEAR_MIPMAP_NEAREST,1008:s.LINEAR_MIPMAP_LINEAR},K={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function k(w,S,B){if(B?(s.texParameteri(w,s.TEXTURE_WRAP_S,Z[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Z[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Z[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,$[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,$[S.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==1001||S.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,C(S.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==1003&&S.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(s.texParameterf(w,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function J(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const Q=S.source;let ee=u.get(Q);ee===void 0&&(ee={},u.set(Q,ee));const ie=L(S);if(ie!==w.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:s.createTexture(),usedTimes:0},n.memory.textures++,B=!0),ee[ie].usedTimes++;const xe=ee[w.__cacheKey];xe!==void 0&&(ee[w.__cacheKey].usedTimes--,xe.usedTimes===0&&E(S)),w.__cacheKey=ie,w.__webglTexture=ee[ie].texture}return B}function he(w,S,B){let Q=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=s.TEXTURE_3D);const ee=J(w,S),ie=S.source;t.bindTexture(Q,w.__webglTexture,s.TEXTURE0+B);const xe=i.get(ie);if(ie.version!==xe.__version||ee===!0){t.activeTexture(s.TEXTURE0+B);const oe=Je.getPrimaries(Je.workingColorSpace),fe=S.colorSpace===Kt?null:Je.getPrimaries(S.colorSpace),be=S.colorSpace===Kt||oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Fe=p(S)&&m(S.image)===!1;let te=v(S.image,Fe,!1,r.maxTextureSize);te=Ae(S,te);const Ze=m(te)||o,We=a.convert(S.format,S.colorSpace);let Pe=a.convert(S.type),Me=M(S.internalFormat,We,Pe,S.colorSpace,S.isVideoTexture);k(Q,S,Ze);let me;const Ie=S.mipmaps,Ye=o&&S.isVideoTexture!==!0&&Me!==36196,ct=xe.__version===void 0||ee===!0,Ve=R(S,te,Ze);if(S.isDepthTexture)Me=s.DEPTH_COMPONENT,o?S.type===1015?Me=s.DEPTH_COMPONENT32F:S.type===1014?Me=s.DEPTH_COMPONENT24:S.type===1020?Me=s.DEPTH24_STENCIL8:Me=s.DEPTH_COMPONENT16:S.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===1026&&Me===s.DEPTH_COMPONENT&&S.type!==1012&&S.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=1014,Pe=a.convert(S.type)),S.format===1027&&Me===s.DEPTH_COMPONENT&&(Me=s.DEPTH_STENCIL,S.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=1020,Pe=a.convert(S.type))),ct&&(Ye?t.texStorage2D(s.TEXTURE_2D,1,Me,te.width,te.height):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,We,Pe,null));else if(S.isDataTexture)if(Ie.length>0&&Ze){Ye&&ct&&t.texStorage2D(s.TEXTURE_2D,Ve,Me,Ie[0].width,Ie[0].height);for(let re=0,U=Ie.length;re<U;re++)me=Ie[re],Ye?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,We,Pe,me.data):t.texImage2D(s.TEXTURE_2D,re,Me,me.width,me.height,0,We,Pe,me.data);S.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(s.TEXTURE_2D,Ve,Me,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,te.width,te.height,We,Pe,te.data)):t.texImage2D(s.TEXTURE_2D,0,Me,te.width,te.height,0,We,Pe,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Me,Ie[0].width,Ie[0].height,te.depth);for(let re=0,U=Ie.length;re<U;re++)me=Ie[re],S.format!==1023?We!==null?Ye?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,We,me.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,Me,me.width,me.height,te.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,te.depth,We,Pe,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,re,Me,me.width,me.height,te.depth,0,We,Pe,me.data)}else{Ye&&ct&&t.texStorage2D(s.TEXTURE_2D,Ve,Me,Ie[0].width,Ie[0].height);for(let re=0,U=Ie.length;re<U;re++)me=Ie[re],S.format!==1023?We!==null?Ye?t.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,We,me.data):t.compressedTexImage2D(s.TEXTURE_2D,re,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?t.texSubImage2D(s.TEXTURE_2D,re,0,0,me.width,me.height,We,Pe,me.data):t.texImage2D(s.TEXTURE_2D,re,Me,me.width,me.height,0,We,Pe,me.data)}else if(S.isDataArrayTexture)Ye?(ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Me,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,We,Pe,te.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,We,Pe,te.data);else if(S.isData3DTexture)Ye?(ct&&t.texStorage3D(s.TEXTURE_3D,Ve,Me,te.width,te.height,te.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,We,Pe,te.data)):t.texImage3D(s.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,We,Pe,te.data);else if(S.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(s.TEXTURE_2D,Ve,Me,te.width,te.height);else{let re=te.width,U=te.height;for(let se=0;se<Ve;se++)t.texImage2D(s.TEXTURE_2D,se,Me,re,U,0,We,Pe,null),re>>=1,U>>=1}}else if(Ie.length>0&&Ze){Ye&&ct&&t.texStorage2D(s.TEXTURE_2D,Ve,Me,Ie[0].width,Ie[0].height);for(let re=0,U=Ie.length;re<U;re++)me=Ie[re],Ye?t.texSubImage2D(s.TEXTURE_2D,re,0,0,We,Pe,me):t.texImage2D(s.TEXTURE_2D,re,Me,We,Pe,me);S.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(s.TEXTURE_2D,Ve,Me,te.width,te.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Pe,te)):t.texImage2D(s.TEXTURE_2D,0,Me,We,Pe,te);_(S,Ze)&&x(Q),xe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ue(w,S,B){if(S.image.length!==6)return;const Q=J(w,S),ee=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);const ie=i.get(ee);if(ee.version!==ie.__version||Q===!0){t.activeTexture(s.TEXTURE0+B);const xe=Je.getPrimaries(Je.workingColorSpace),oe=S.colorSpace===Kt?null:Je.getPrimaries(S.colorSpace),fe=S.colorSpace===Kt||xe===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const be=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,te=[];for(let re=0;re<6;re++)!be&&!Fe?te[re]=v(S.image[re],!1,!0,r.maxCubemapSize):te[re]=Fe?S.image[re].image:S.image[re],te[re]=Ae(S,te[re]);const Ze=te[0],We=m(Ze)||o,Pe=a.convert(S.format,S.colorSpace),Me=a.convert(S.type),me=M(S.internalFormat,Pe,Me,S.colorSpace),Ie=o&&S.isVideoTexture!==!0,Ye=ie.__version===void 0||Q===!0;let ct=R(S,Ze,We);k(s.TEXTURE_CUBE_MAP,S,We);let Ve;if(be){Ie&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,me,Ze.width,Ze.height);for(let re=0;re<6;re++){Ve=te[re].mipmaps;for(let U=0;U<Ve.length;U++){const se=Ve[U];S.format!==1023?Pe!==null?Ie?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,se.width,se.height,Pe,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,me,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,0,0,se.width,se.height,Pe,Me,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U,me,se.width,se.height,0,Pe,Me,se.data)}}}else{Ve=S.mipmaps,Ie&&Ye&&(Ve.length>0&&ct++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,me,te[0].width,te[0].height));for(let re=0;re<6;re++)if(Fe){Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,te[re].width,te[re].height,Pe,Me,te[re].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,te[re].width,te[re].height,0,Pe,Me,te[re].data);for(let U=0;U<Ve.length;U++){const se=Ve[U].image[re].image;Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,se.width,se.height,Pe,Me,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,me,se.width,se.height,0,Pe,Me,se.data)}}else{Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Pe,Me,te[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,me,Pe,Me,te[re]);for(let U=0;U<Ve.length;U++){const se=Ve[U];Ie?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,0,0,Pe,Me,se.image[re]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+re,U+1,me,Pe,Me,se.image[re])}}}_(S,We)&&x(s.TEXTURE_CUBE_MAP),ie.__version=ee.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function de(w,S,B,Q,ee,ie){const xe=a.convert(B.format,B.colorSpace),oe=a.convert(B.type),fe=M(B.internalFormat,xe,oe,B.colorSpace);if(!i.get(S).__hasExternalTextures){const be=Math.max(1,S.width>>ie),Fe=Math.max(1,S.height>>ie);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,fe,be,Fe,S.depth,0,xe,oe,null):t.texImage2D(ee,ie,fe,be,Fe,0,xe,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ve(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ee,i.get(B).__webglTexture,0,ge(S)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ee,i.get(B).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(w,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let Q=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||ve(S)){const ee=S.depthTexture;ee&&ee.isDepthTexture&&(ee.type===1015?Q=s.DEPTH_COMPONENT32F:ee.type===1014&&(Q=s.DEPTH_COMPONENT24));const ie=ge(S);ve(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,Q,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Q,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const Q=ge(S);B&&ve(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ee=0;ee<Q.length;ee++){const ie=Q[ee],xe=a.convert(ie.format,ie.colorSpace),oe=a.convert(ie.type),fe=M(ie.internalFormat,xe,oe,ie.colorSpace),be=ge(S);B&&ve(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,S.width,S.height):ve(S)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,fe,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I(S.depthTexture,0);const B=i.get(S.depthTexture).__webglTexture,Q=ge(S);if(S.depthTexture.format===1026)ve(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,B,0);else if(S.depthTexture.format===1027)ve(S)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function _e(w){const S=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Te(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=s.createRenderbuffer(),Ce(S.__webglDepthbuffer[Q],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ce(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(w,S,B){const Q=i.get(w);S!==void 0&&de(Q.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&_e(w)}function H(w){const S=w.texture,B=i.get(w),Q=i.get(S);w.addEventListener("dispose",z),w.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=S.version,n.memory.textures++);const ee=w.isWebGLCubeRenderTarget===!0,ie=w.isWebGLMultipleRenderTargets===!0,xe=m(w)||o;if(ee){B.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[oe]=[];for(let fe=0;fe<S.mipmaps.length;fe++)B.__webglFramebuffer[oe][fe]=s.createFramebuffer()}else B.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)B.__webglFramebuffer[oe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(ie)if(r.drawBuffers){const oe=w.texture;for(let fe=0,be=oe.length;fe<be;fe++){const Fe=i.get(oe[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),n.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&ve(w)===!1){const oe=ie?S:[S];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const be=oe[fe];B.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[fe]);const Fe=a.convert(be.format,be.colorSpace),te=a.convert(be.type),Ze=M(be.internalFormat,Fe,te,be.colorSpace,w.isXRRenderTarget===!0),We=ge(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ze,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,B.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),k(s.TEXTURE_CUBE_MAP,S,xe);for(let oe=0;oe<6;oe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)de(B.__webglFramebuffer[oe][fe],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else de(B.__webglFramebuffer[oe],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(S,xe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=w.texture;for(let fe=0,be=oe.length;fe<be;fe++){const Fe=oe[fe],te=i.get(Fe);t.bindTexture(s.TEXTURE_2D,te.__webglTexture),k(s.TEXTURE_2D,Fe,xe),de(B.__webglFramebuffer,w,Fe,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,0),_(Fe,xe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?oe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,Q.__webglTexture),k(oe,S,xe),o&&S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)de(B.__webglFramebuffer[fe],w,S,s.COLOR_ATTACHMENT0,oe,fe);else de(B.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,oe,0);_(S,xe)&&x(oe),t.unbindTexture()}w.depthBuffer&&_e(w)}function at(w){const S=m(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Q=0,ee=B.length;Q<ee;Q++){const ie=B[Q];if(_(ie,S)){const xe=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,oe=i.get(ie).__webglTexture;t.bindTexture(xe,oe),x(xe),t.unbindTexture()}}}function ye(w){if(o&&w.samples>0&&ve(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,Q=w.height;let ee=s.COLOR_BUFFER_BIT;const ie=[],xe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=i.get(w),fe=w.isWebGLMultipleRenderTargets===!0;if(fe)for(let be=0;be<S.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let be=0;be<S.length;be++){ie.push(s.COLOR_ATTACHMENT0+be),w.depthBuffer&&ie.push(xe);const Fe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(Fe===!1&&(w.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),fe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,oe.__webglColorRenderbuffer[be]),Fe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xe])),fe){const te=i.get(S[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,te,0)}s.blitFramebuffer(0,0,B,Q,0,0,B,Q,ee,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let be=0;be<S.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,oe.__webglColorRenderbuffer[be]);const Fe=i.get(S[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function ge(w){return Math.min(r.maxSamples,w.samples)}function ve(w){const S=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Qe(w){const S=n.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function Ae(w,S){const B=w.colorSpace,Q=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===1035||B!==bi&&B!==Kt&&(Je.getTransfer(B)===st?o===!1?e.has("EXT_sRGB")===!0&&Q===1023?(w.format=1035,w.minFilter=1006,w.generateMipmaps=!1):S=Uo.sRGBToLinear(S):(Q!==1023||ee!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=I,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=V,this.rebindTextures=Ge,this.setupRenderTarget=H,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function Sp(s,e,t){const i=t.isWebGL2;function r(a,n=Kt){let o;const l=Je.getTransfer(n);if(a===1009)return s.UNSIGNED_BYTE;if(a===1017)return s.UNSIGNED_SHORT_4_4_4_4;if(a===1018)return s.UNSIGNED_SHORT_5_5_5_1;if(a===1010)return s.BYTE;if(a===1011)return s.SHORT;if(a===1012)return s.UNSIGNED_SHORT;if(a===1013)return s.INT;if(a===1014)return s.UNSIGNED_INT;if(a===1015)return s.FLOAT;if(a===1016)return i?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===1021)return s.ALPHA;if(a===1023)return s.RGBA;if(a===1024)return s.LUMINANCE;if(a===1025)return s.LUMINANCE_ALPHA;if(a===1026)return s.DEPTH_COMPONENT;if(a===1027)return s.DEPTH_STENCIL;if(a===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===1028)return s.RED;if(a===1029)return s.RED_INTEGER;if(a===1030)return s.RG;if(a===1031)return s.RG_INTEGER;if(a===1033)return s.RGBA_INTEGER;if(a===33776||a===33777||a===33778||a===33779)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===35840||a===35841||a===35842||a===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===37492||a===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===37492)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===37496)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===37808||a===37809||a===37810||a===37811||a===37812||a===37813||a===37814||a===37815||a===37816||a===37817||a===37818||a===37819||a===37820||a===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===37808)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===37809)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===37810)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===37811)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===37812)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===37813)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===37814)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===37815)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===37816)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===37817)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===37818)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===37819)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===37820)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===37821)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===36492||a===36494||a===36495)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===36492)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===36494)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===36495)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===36283||a===36284||a===36285||a===36286)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===36492)return o.COMPRESSED_RED_RGTC1_EXT;if(a===36284)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===36285)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===36286)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===1020?i?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[a]!==void 0?s[a]:null}return{convert:r}}class Mp extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wp={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){n=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bp extends Tr{constructor(e,t){super();const i=this;let r=null,a=1,n=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const _=[],x=[],M=new le;let R=null;const C=new Bt;C.layers.enable(1),C.viewport=new nt;const T=new Bt;T.layers.enable(2),T.viewport=new nt;const z=[C,T],b=new Mp;b.layers.enable(1),b.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=_[k];return J===void 0&&(J=new Ma,_[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=_[k];return J===void 0&&(J=new Ma,_[k]=J),J.getGripSpace()},this.getHand=function(k){let J=_[k];return J===void 0&&(J=new Ma,_[k]=J),J.getHandSpace()};function N(k){const J=x.indexOf(k.inputSource);if(J===-1)return;const he=_[J];he!==void 0&&(he.update(k.inputSource,k.frame,c||n),he.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",P);for(let k=0;k<_.length;k++){const J=x[k];J!==null&&(x[k]=null,_[k].disconnect(J))}E=null,O=null,e.setRenderTarget(m),f=null,u=null,d=null,r=null,p=null,K.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||n},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",F),r.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Xi(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,he=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?1027:1026,he=v.stencil?1020:1014);const de={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:a};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(de),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),p=new Xi(u.textureWidth,u.textureHeight,{format:1023,type:1009,depthTexture:new qo(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=u.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,n=await r.requestReferenceSpace(o),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(k){for(let J=0;J<k.removed.length;J++){const he=k.removed[J],ue=x.indexOf(he);ue>=0&&(x[ue]=null,_[ue].disconnect(he))}for(let J=0;J<k.added.length;J++){const he=k.added[J];let ue=x.indexOf(he);if(ue===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=x.length){x.push(he),ue=Ce;break}else if(x[Ce]===null){x[Ce]=he,ue=Ce;break}if(ue===-1)break}const de=_[ue];de&&de.connect(he)}}const L=new D,I=new D;function q(k,J,he){L.setFromMatrixPosition(J.matrixWorld),I.setFromMatrixPosition(he.matrixWorld);const ue=L.distanceTo(I),de=J.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Te=de[14]/(de[10]-1),_e=de[14]/(de[10]+1),Ge=(de[9]+1)/de[5],H=(de[9]-1)/de[5],at=(de[8]-1)/de[0],ye=(Ce[8]+1)/Ce[0],ge=Te*at,ve=Te*ye,Qe=ue/(-at+ye),Ae=Qe*-at;J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ae),k.translateZ(Qe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const w=Te+Qe,S=_e+Qe,B=ge-Ae,Q=ve+(ue-Ae),ee=Ge*_e/S*w,ie=H*_e/S*w;k.projectionMatrix.makePerspective(B,Q,ee,ie,w,S),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function j(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;b.near=T.near=C.near=k.near,b.far=T.far=C.far=k.far,(E!==b.near||O!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,O=b.far);const J=k.parent,he=b.cameras;j(b,J);for(let ue=0;ue<he.length;ue++)j(he[ue],J);he.length===2?q(b,C,T):b.projectionMatrix.copy(C.projectionMatrix),V(k,b,J)};function V(k,J,he){he===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(he.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Bs*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)};let Z=null;function $(k,J){if(h=J.getViewerPose(c||n),g=J,h!==null){const he=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let ue=!1;he.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let de=0;de<he.length;de++){const Ce=he[de];let Te=null;if(f!==null)Te=f.getViewport(Ce);else{const Ge=d.getViewSubImage(u,Ce);Te=Ge.viewport,de===0&&(e.setRenderTargetTextures(p,Ge.colorTexture,u.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(p))}let _e=z[de];_e===void 0&&(_e=new Bt,_e.layers.enable(de),_e.viewport=new nt,z[de]=_e),_e.matrix.fromArray(Ce.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ce.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Te.x,Te.y,Te.width,Te.height),de===0&&(b.matrix.copy(_e.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(_e)}}for(let he=0;he<_.length;he++){const ue=x[he],de=_[he];ue!==null&&de!==void 0&&de.update(ue,J,c||n)}Z&&Z(k,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const K=new ko;K.setAnimationLoop($),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}function Ep(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Go(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),h(m,p)):p.isMeshStandardMaterial?(a(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),v(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(n(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function n(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Tp(s,e,t,i){let r={},a={},n=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const M=x.program;i.uniformBlockBinding(_,M)}function c(_,x){let M=r[_.id];M===void 0&&(g(_),M=h(_),r[_.id]=M,_.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(_,R);const C=e.render.frame;a[_.id]!==C&&(u(_),a[_.id]=C)}function h(_){const x=d();_.__bindingPointIndex=x;const M=s.createBuffer(),R=_.__size,C=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function d(){for(let _=0;_<o;_++)if(n.indexOf(_)===-1)return n.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const x=r[_.id],M=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,T=M.length;C<T;C++){const z=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,E=z.length;b<E;b++){const O=z[b];if(f(O,C,b,R)===!0){const N=O.__offset,F=Array.isArray(O.value)?O.value:[O.value];let P=0;for(let L=0;L<F.length;L++){const I=F[L],q=v(I);typeof I=="number"||typeof I=="boolean"?(O.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,N+P,O.__data)):I.isMatrix3?(O.__data[0]=I.elements[0],O.__data[1]=I.elements[1],O.__data[2]=I.elements[2],O.__data[3]=0,O.__data[4]=I.elements[3],O.__data[5]=I.elements[4],O.__data[6]=I.elements[5],O.__data[7]=0,O.__data[8]=I.elements[6],O.__data[9]=I.elements[7],O.__data[10]=I.elements[8],O.__data[11]=0):(I.toArray(O.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,M,R){const C=_.value,T=x+"_"+M;if(R[T]===void 0)return typeof C=="number"||typeof C=="boolean"?R[T]=C:R[T]=C.clone(),!0;{const z=R[T];if(typeof C=="number"||typeof C=="boolean"){if(z!==C)return R[T]=C,!0}else if(z.equals(C)===!1)return z.copy(C),!0}return!1}function g(_){const x=_.uniforms;let M=0;const R=16;for(let T=0,z=x.length;T<z;T++){const b=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,O=b.length;E<O;E++){const N=b[E],F=Array.isArray(N.value)?N.value:[N.value];for(let P=0,L=F.length;P<L;P++){const I=F[P],q=v(I),j=M%R;j!==0&&R-j<q.boundary&&(M+=R-j),N.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=q.storage}}}const C=M%R;return C>0&&(M+=R-C),_.__size=M,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const M=n.indexOf(x.__bindingPointIndex);n.splice(M,1),s.deleteBuffer(r[x.id]),delete r[x.id],delete a[x.id]}function p(){for(const _ in r)s.deleteBuffer(r[_]);n=[],r={},a={}}return{bind:l,update:c,dispose:p}}class Jo{constructor(e={}){const{canvas:t=Ml(),context:i=null,depth:r=!0,stencil:a=!0,alpha:n=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=n;const f=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=bt,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const x=this;let M=!1,R=0,C=0,T=null,z=-1,b=null;const E=new nt,O=new nt;let N=null;const F=new Xe(0);let P=0,L=t.width,I=t.height,q=1,j=null,V=null;const Z=new nt(0,0,L,I),$=new nt(0,0,L,I);let K=!1;const k=new ja;let J=!1,he=!1,ue=null;const de=new ut,Ce=new le,Te=new D,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ge(){return T===null?q:1}let H=i;function at(A,G){for(let X=0;X<A.length;X++){const Y=A[X],W=t.getContext(Y,G);if(W!==null)return W}return null}try{const A={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",se,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&G.shift(),H=at(G,A),H===null)throw at(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ye,ge,ve,Qe,Ae,w,S,B,Q,ee,ie,xe,oe,fe,be,Fe,te,Ze,We,Pe,Me,me,Ie,Ye;function ct(){ye=new Ou(H),ge=new Pu(H,ye,e),ye.init(ge),me=new Sp(H,ye,ge),ve=new xp(H,ye,ge),Qe=new Bu(H),Ae=new ap,w=new yp(H,ye,ve,Ae,ge,me,Qe),S=new Nu(x),B=new Iu(x),Q=new jl(H,ge),Ie=new Cu(H,ye,Q,ge),ee=new Fu(H,Q,Qe,Ie),ie=new ku(H,ee,Q,Qe),We=new Hu(H,ge,w),Fe=new Lu(Ae),xe=new sp(x,S,B,ye,ge,Ie,Fe),oe=new Ep(x,Ae),fe=new op,be=new pp(ye,ge),Ze=new Au(x,S,B,ve,ie,u,l),te=new _p(x,ie,ge),Ye=new Tp(H,Qe,ge,ve),Pe=new Ru(H,ye,Qe,ge),Me=new zu(H,ye,Qe,ge),Qe.programs=xe.programs,x.capabilities=ge,x.extensions=ye,x.properties=Ae,x.renderLists=fe,x.shadowMap=te,x.state=ve,x.info=Qe}ct();const Ve=new bp(x,H);this.xr=Ve,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const A=ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(L,I,!1))},this.getSize=function(A){return A.set(L,I)},this.setSize=function(A,G,X=!0){if(Ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=A,I=G,t.width=Math.floor(A*q),t.height=Math.floor(G*q),X===!0&&(t.style.width=A+"px",t.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(L*q,I*q).floor()},this.setDrawingBufferSize=function(A,G,X){L=A,I=G,q=X,t.width=Math.floor(A*X),t.height=Math.floor(G*X),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(E)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,G,X,Y){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,G,X,Y),ve.viewport(E.copy(Z).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy($)},this.setScissor=function(A,G,X,Y){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,G,X,Y),ve.scissor(O.copy($).multiplyScalar(q).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){ve.setScissorTest(K=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){V=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,G=!0,X=!0){let Y=0;if(A){let W=!1;if(T!==null){const ne=T.texture.format;W=ne===1033||ne===1031||ne===1029}if(W){const ne=T.texture.type,Se=ne===1009||ne===1014||ne===1012||ne===1020||ne===1017||ne===1018,Ee=Ze.getClearColor(),Re=Ze.getClearAlpha(),qe=Ee.r,ze=Ee.g,Be=Ee.b;Se?(f[0]=qe,f[1]=ze,f[2]=Be,f[3]=Re,H.clearBufferuiv(H.COLOR,0,f)):(g[0]=qe,g[1]=ze,g[2]=Be,g[3]=Re,H.clearBufferiv(H.COLOR,0,g))}else Y|=H.COLOR_BUFFER_BIT}G&&(Y|=H.DEPTH_BUFFER_BIT),X&&(Y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",se,!1),fe.dispose(),be.dispose(),Ae.dispose(),S.dispose(),B.dispose(),ie.dispose(),Ie.dispose(),Ye.dispose(),xe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",kt),Ve.removeEventListener("sessionend",it),ue&&(ue.dispose(),ue=null),Lt.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Qe.autoReset,G=te.enabled,X=te.autoUpdate,Y=te.needsUpdate,W=te.type;ct(),Qe.autoReset=A,te.enabled=G,te.autoUpdate=X,te.needsUpdate=Y,te.type=W}function se(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const G=A.target;G.removeEventListener("dispose",ce),Ne(G)}function Ne(A){we(A),Ae.remove(A)}function we(A){const G=Ae.get(A).programs;G!==void 0&&(G.forEach(function(X){xe.releaseProgram(X)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,X,Y,W,ne){G===null&&(G=_e);const Se=W.isMesh&&W.matrixWorld.determinant()<0,Ee=vl(A,G,X,Y,W);ve.setMaterial(Y,Se);let Re=X.index,qe=1;if(Y.wireframe===!0){if(Re=ee.getWireframeAttribute(X),Re===void 0)return;qe=2}const ze=X.drawRange,Be=X.attributes.position;let Et=ze.start*qe,vt=(ze.start+ze.count)*qe;ne!==null&&(Et=Math.max(Et,ne.start*qe),vt=Math.min(vt,(ne.start+ne.count)*qe)),Re!==null?(Et=Math.max(Et,0),vt=Math.min(vt,Re.count)):Be!=null&&(Et=Math.max(Et,0),vt=Math.min(vt,Be.count));const Wt=vt-Et;if(Wt<0||Wt===1/0)return;Ie.setup(W,Y,Ee,X,Re);let di,dt=Pe;if(Re!==null&&(di=Q.get(Re),dt=Me,dt.setIndex(di)),W.isMesh)Y.wireframe===!0?(ve.setLineWidth(Y.wireframeLinewidth*Ge()),dt.setMode(H.LINES)):dt.setMode(H.TRIANGLES);else if(W.isLine){let He=Y.linewidth;He===void 0&&(He=1),ve.setLineWidth(He*Ge()),W.isLineSegments?dt.setMode(H.LINES):W.isLineLoop?dt.setMode(H.LINE_LOOP):dt.setMode(H.LINE_STRIP)}else W.isPoints?dt.setMode(H.POINTS):W.isSprite&&dt.setMode(H.TRIANGLES);if(W.isBatchedMesh)dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)dt.renderInstances(Et,Wt,W.count);else if(X.isInstancedBufferGeometry){const He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,js=Math.min(X.instanceCount,He);dt.renderInstances(Et,Wt,js)}else dt.render(Et,Wt)};function et(A,G,X){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=1,A.needsUpdate=!0,ts(A,G,X),A.side=0,A.needsUpdate=!0,ts(A,G,X),A.side=2):ts(A,G,X)}this.compile=function(A,G,X=null){X===null&&(X=A),m=be.get(X),m.init(),_.push(m),X.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),A!==X&&A.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights(x._useLegacyLights);const Y=new Set;return A.traverse(function(W){const ne=W.material;if(ne)if(Array.isArray(ne))for(let Se=0;Se<ne.length;Se++){const Ee=ne[Se];et(Ee,X,W),Y.add(Ee)}else et(ne,X,W),Y.add(ne)}),_.pop(),m=null,Y},this.compileAsync=function(A,G,X=null){const Y=this.compile(A,G,X);return new Promise(W=>{function ne(){if(Y.forEach(function(Se){Ae.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){W(A);return}setTimeout(ne,10)}ye.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let tt=null;function pt(A){tt&&tt(A)}function kt(){Lt.stop()}function it(){Lt.start()}const Lt=new ko;Lt.setAnimationLoop(pt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(A){tt=A,Ve.setAnimationLoop(A),A===null?Lt.stop():Lt.start()},Ve.addEventListener("sessionstart",kt),Ve.addEventListener("sessionend",it),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(G),G=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,G,T),m=be.get(A,_.length),m.init(),_.push(m),de.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),k.setFromProjectionMatrix(de),he=this.localClippingEnabled,J=Fe.init(this.clippingPlanes,he),v=fe.get(A,p.length),v.init(),p.push(v),ri(A,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(j,V),this.info.render.frame++,J===!0&&Fe.beginShadows();const X=m.state.shadowsArray;if(te.render(X,A,G),J===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(v,A),m.setupLights(x._useLegacyLights),G.isArrayCamera){const Y=G.cameras;for(let W=0,ne=Y.length;W<ne;W++){const Se=Y[W];sn(v,A,Se,Se.viewport)}}else sn(v,A,G);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(x,A,G),Ie.resetDefaultState(),z=-1,b=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ri(A,G,X,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||k.intersectsSprite(A)){Y&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const ne=ie.update(A),Se=A.material;Se.visible&&v.push(A,ne,Se,X,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||k.intersectsObject(A))){const ne=ie.update(A),Se=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(ne.boundingSphere===null&&ne.computeBoundingSphere(),Te.copy(ne.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(Se)){const Ee=ne.groups;for(let Re=0,qe=Ee.length;Re<qe;Re++){const ze=Ee[Re],Be=Se[ze.materialIndex];Be&&Be.visible&&v.push(A,ne,Be,X,Te.z,ze)}}else Se.visible&&v.push(A,ne,Se,X,Te.z,null)}}const W=A.children;for(let ne=0,Se=W.length;ne<Se;ne++)ri(W[ne],G,X,Y)}function sn(A,G,X,Y){const W=A.opaque,ne=A.transmissive,Se=A.transparent;m.setupLightsView(X),J===!0&&Fe.setGlobalState(x.clippingPlanes,X),ne.length>0&&gl(W,ne,G,X),Y&&ve.viewport(E.copy(Y)),W.length>0&&es(W,G,X),ne.length>0&&es(ne,G,X),Se.length>0&&es(Se,G,X),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function gl(A,G,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const W=ge.isWebGL2;ue===null&&(ue=new Xi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?1016:1009,minFilter:1008,samples:W?4:0})),x.getDrawingBufferSize(Ce),W?ue.setSize(Ce.x,Ce.y):ue.setSize(Fa(Ce.x),Fa(Ce.y));const ne=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(F),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();const Se=x.toneMapping;x.toneMapping=0,es(A,X,Y),w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue);let Ee=!1;for(let Re=0,qe=G.length;Re<qe;Re++){const ze=G[Re],Be=ze.object,Et=ze.geometry,vt=ze.material,Wt=ze.group;if(vt.side===2&&Be.layers.test(Y.layers)){const di=vt.side;vt.side=1,vt.needsUpdate=!0,an(Be,X,Y,Et,vt,Wt),vt.side=di,vt.needsUpdate=!0,Ee=!0}}Ee===!0&&(w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue)),x.setRenderTarget(ne),x.setClearColor(F,P),x.toneMapping=Se}function es(A,G,X){const Y=G.isScene===!0?G.overrideMaterial:null;for(let W=0,ne=A.length;W<ne;W++){const Se=A[W],Ee=Se.object,Re=Se.geometry,qe=Y===null?Se.material:Y,ze=Se.group;Ee.layers.test(X.layers)&&an(Ee,G,X,Re,qe,ze)}}function an(A,G,X,Y,W,ne){A.onBeforeRender(x,G,X,Y,W,ne),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(x,G,X,Y,A,ne),W.transparent===!0&&W.side===2&&W.forceSinglePass===!1?(W.side=1,W.needsUpdate=!0,x.renderBufferDirect(X,G,Y,W,A,ne),W.side=0,W.needsUpdate=!0,x.renderBufferDirect(X,G,Y,W,A,ne),W.side=2):x.renderBufferDirect(X,G,Y,W,A,ne),A.onAfterRender(x,G,X,Y,W,ne)}function ts(A,G,X){G.isScene!==!0&&(G=_e);const Y=Ae.get(A),W=m.state.lights,ne=m.state.shadowsArray,Se=W.state.version,Ee=xe.getParameters(A,W.state,ne,G,X),Re=xe.getProgramCacheKey(Ee);let qe=Y.programs;Y.environment=A.isMeshStandardMaterial?G.environment:null,Y.fog=G.fog,Y.envMap=(A.isMeshStandardMaterial?B:S).get(A.envMap||Y.environment),qe===void 0&&(A.addEventListener("dispose",ce),qe=new Map,Y.programs=qe);let ze=qe.get(Re);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===Se)return on(A,Ee),ze}else Ee.uniforms=xe.getUniforms(A),A.onBuild(X,Ee,x),A.onBeforeCompile(Ee,x),ze=xe.acquireProgram(Ee,Re),qe.set(Re,ze),Y.uniforms=Ee.uniforms;const Be=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Fe.uniform),on(A,Ee),Y.needsLights=xl(A),Y.lightsStateVersion=Se,Y.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function nn(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Is.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function on(A,G){const X=Ae.get(A);X.outputColorSpace=G.outputColorSpace,X.batching=G.batching,X.instancing=G.instancing,X.instancingColor=G.instancingColor,X.skinning=G.skinning,X.morphTargets=G.morphTargets,X.morphNormals=G.morphNormals,X.morphColors=G.morphColors,X.morphTargetsCount=G.morphTargetsCount,X.numClippingPlanes=G.numClippingPlanes,X.numIntersection=G.numClipIntersection,X.vertexAlphas=G.vertexAlphas,X.vertexTangents=G.vertexTangents,X.toneMapping=G.toneMapping}function vl(A,G,X,Y,W){G.isScene!==!0&&(G=_e),w.resetTextureUnits();const ne=G.fog,Se=Y.isMeshStandardMaterial?G.environment:null,Ee=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:bi,Re=(Y.isMeshStandardMaterial?B:S).get(Y.envMap||Se),qe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!X.morphAttributes.position,Et=!!X.morphAttributes.normal,vt=!!X.morphAttributes.color;let Wt=0;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Wt=x.toneMapping);const di=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=di!==void 0?di.length:0,He=Ae.get(Y),js=m.state.lights;if(J===!0&&(he===!0||A!==b)){const qt=A===b&&Y.id===z;Fe.setState(Y,A,qt)}let Ys=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==js.state.version||He.outputColorSpace!==Ee||W.isBatchedMesh&&He.batching===!1||!W.isBatchedMesh&&He.batching===!0||W.isInstancedMesh&&He.instancing===!1||!W.isInstancedMesh&&He.instancing===!0||W.isSkinnedMesh&&He.skinning===!1||!W.isSkinnedMesh&&He.skinning===!0||W.isInstancedMesh&&He.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&He.instancingColor===!1&&W.instanceColor!==null||He.envMap!==Re||Y.fog===!0&&He.fog!==ne||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Fe.numPlanes||He.numIntersection!==Fe.numIntersection)||He.vertexAlphas!==qe||He.vertexTangents!==ze||He.morphTargets!==Be||He.morphNormals!==Et||He.morphColors!==vt||He.toneMapping!==Wt||ge.isWebGL2===!0&&He.morphTargetsCount!==dt)&&(Ys=!0):(Ys=!0,He.__version=Y.version);let Di=He.currentProgram;Ys===!0&&(Di=ts(Y,G,W));let ln=!1,Rr=!1,Ks=!1;const Tt=Di.getUniforms(),Ii=He.uniforms;if(ve.useProgram(Di.program)&&(ln=!0,Rr=!0,Ks=!0),Y.id!==z&&(z=Y.id,Rr=!0),ln||b!==A){Tt.setValue(H,"projectionMatrix",A.projectionMatrix),Tt.setValue(H,"viewMatrix",A.matrixWorldInverse);const qt=Tt.map.cameraPosition;qt!==void 0&&qt.setValue(H,Te.setFromMatrixPosition(A.matrixWorld)),ge.logarithmicDepthBuffer&&Tt.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Rr=!0,Ks=!0)}if(W.isSkinnedMesh){Tt.setOptional(H,W,"bindMatrix"),Tt.setOptional(H,W,"bindMatrixInverse");const qt=W.skeleton;qt&&(ge.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Tt.setValue(H,"boneTexture",qt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Tt.setOptional(H,W,"batchingTexture"),Tt.setValue(H,"batchingTexture",W._matricesTexture,w));const Zs=X.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0&&ge.isWebGL2===!0)&&We.update(W,X,Di),(Rr||He.receiveShadow!==W.receiveShadow)&&(He.receiveShadow=W.receiveShadow,Tt.setValue(H,"receiveShadow",W.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ii.envMap.value=Re,Ii.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Rr&&(Tt.setValue(H,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&_l(Ii,Ks),ne&&Y.fog===!0&&oe.refreshFogUniforms(Ii,ne),oe.refreshMaterialUniforms(Ii,Y,q,I,ue),Is.upload(H,nn(He),Ii,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Is.upload(H,nn(He),Ii,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(H,"center",W.center),Tt.setValue(H,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(H,"normalMatrix",W.normalMatrix),Tt.setValue(H,"modelMatrix",W.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const qt=Y.uniformsGroups;for(let Js=0,yl=qt.length;Js<yl;Js++)if(ge.isWebGL2){const cn=qt[Js];Ye.update(cn,Di),Ye.bind(cn,Di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Di}function _l(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function xl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,G,X){Ae.get(A.texture).__webglTexture=G,Ae.get(A.depthTexture).__webglTexture=X;const Y=Ae.get(A);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const X=Ae.get(A);X.__webglFramebuffer=G,X.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,X=0){T=A,R=G,C=X;let Y=!0,W=null,ne=!1,Se=!1;if(A){const Ee=Ae.get(A);Ee.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(H.FRAMEBUFFER,null),Y=!1):Ee.__webglFramebuffer===void 0?w.setupRenderTarget(A):Ee.__hasExternalTextures&&w.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);const Re=A.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const qe=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?W=qe[G][X]:W=qe[G],ne=!0):ge.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?W=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?W=qe[X]:W=qe,E.copy(A.viewport),O.copy(A.scissor),N=A.scissorTest}else E.copy(Z).multiplyScalar(q).floor(),O.copy($).multiplyScalar(q).floor(),N=K;if(ve.bindFramebuffer(H.FRAMEBUFFER,W)&&ge.drawBuffers&&Y&&ve.drawBuffers(A,W),ve.viewport(E),ve.scissor(O),ve.setScissorTest(N),ne){const Ee=Ae.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ee.__webglTexture,X)}else if(Se){const Ee=Ae.get(A.texture),Re=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ee.__webglTexture,X||0,Re)}z=-1},this.readRenderTargetPixels=function(A,G,X,Y,W,ne,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ee=Ee[Se]),Ee){ve.bindFramebuffer(H.FRAMEBUFFER,Ee);try{const Re=A.texture,qe=Re.format,ze=Re.type;if(qe!==1023&&me.convert(qe)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===1016&&(ye.has("EXT_color_buffer_half_float")||ge.isWebGL2&&ye.has("EXT_color_buffer_float"));if(ze!==1009&&me.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===1015&&(ge.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&X>=0&&X<=A.height-W&&H.readPixels(G,X,Y,W,me.convert(qe),me.convert(ze),ne)}finally{const Re=T!==null?Ae.get(T).__webglFramebuffer:null;ve.bindFramebuffer(H.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,G,X=0){const Y=Math.pow(2,-X),W=Math.floor(G.image.width*Y),ne=Math.floor(G.image.height*Y);w.setTexture2D(G,0),H.copyTexSubImage2D(H.TEXTURE_2D,X,0,0,A.x,A.y,W,ne),ve.unbindTexture()},this.copyTextureToTexture=function(A,G,X,Y=0){const W=G.image.width,ne=G.image.height,Se=me.convert(X.format),Ee=me.convert(X.type);w.setTexture2D(X,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment),G.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,W,ne,Se,Ee,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Se,G.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,Y,A.x,A.y,Se,Ee,G.image),Y===0&&X.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,G,X,Y,W=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ne=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ee=A.max.z-A.min.z+1,Re=me.convert(Y.format),qe=me.convert(Y.type);let ze;if(Y.isData3DTexture)w.setTexture3D(Y,0),ze=H.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)w.setTexture2DArray(Y,0),ze=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Be=H.getParameter(H.UNPACK_ROW_LENGTH),Et=H.getParameter(H.UNPACK_IMAGE_HEIGHT),vt=H.getParameter(H.UNPACK_SKIP_PIXELS),Wt=H.getParameter(H.UNPACK_SKIP_ROWS),di=H.getParameter(H.UNPACK_SKIP_IMAGES),dt=X.isCompressedTexture?X.mipmaps[W]:X.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,dt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,dt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,A.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,A.min.z),X.isDataTexture||X.isData3DTexture?H.texSubImage3D(ze,W,G.x,G.y,G.z,ne,Se,Ee,Re,qe,dt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ze,W,G.x,G.y,G.z,ne,Se,Ee,Re,dt.data)):H.texSubImage3D(ze,W,G.x,G.y,G.z,ne,Se,Ee,Re,qe,dt),H.pixelStorei(H.UNPACK_ROW_LENGTH,Be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et),H.pixelStorei(H.UNPACK_SKIP_PIXELS,vt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Wt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,di),W===0&&Y.generateMipmaps&&H.generateMipmap(ze),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){R=0,C=0,T=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Wa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Hs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===bt?3001:3e3}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===3001?bt:bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ap extends Jo{}Ap.prototype.isWebGL1Renderer=!0;class Cp extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new D;class Gs{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),a=$e(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $o extends Ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ur;const Dr=new D,dr=new D,pr=new D,fr=new le,Ir=new le,Qo=new ut,bs=new D,Or=new D,Es=new D,Zn=new le,wa=new le,Jn=new le;class Pp extends xt{constructor(e=new $o){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Rp(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new Gs(i,3,0,!1)),ur.setAttribute("uv",new Gs(i,2,3,!1))}this.geometry=ur,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),dr.setFromMatrixScale(this.matrixWorld),Qo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&dr.multiplyScalar(-pr.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const n=this.center;Ts(bs.set(-.5,-.5,0),pr,n,dr,r,a),Ts(Or.set(.5,-.5,0),pr,n,dr,r,a),Ts(Es.set(.5,.5,0),pr,n,dr,r,a),Zn.set(0,0),wa.set(1,0),Jn.set(1,1);let o=e.ray.intersectTriangle(bs,Or,Es,!1,Dr);if(o===null&&(Ts(Or.set(-.5,.5,0),pr,n,dr,r,a),wa.set(0,1),o=e.ray.intersectTriangle(bs,Es,Or,!1,Dr),o===null))return;const l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:Yt.getInterpolation(Dr,bs,Or,Es,Zn,wa,Jn,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ts(s,e,t,i,r,a){fr.subVectors(s,t).addScalar(.5).multiply(i),r!==void 0?(Ir.x=a*fr.x-r*fr.y,Ir.y=r*fr.x+a*fr.y):Ir.copy(fr),s.copy(e),s.x+=Ir.x,s.y+=Ir.y,s.applyMatrix4(Qo)}class jt extends Ot{constructor(e,t,i,r,a,n,o,l,c){super(e,t,i,r,a,n,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const a=i.length;let n;t?n=t:n=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-n,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===n)return r/(a-1);const h=i[r],d=i[r+1]-h,u=(n-h)/d;return(r+u)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),n=this.getPoint(r),o=t||(a.isVector2?new le:new D);return o.copy(n).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],a=[],n=[],o=new D,l=new ut;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new D)}a[0]=new D,n[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],o),n[0].crossVectors(r[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),n[f]=n[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pt(r[f-1].dot(r[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}n[f].crossVectors(r[f],a[f])}if(t===!0){let f=Math.acos(Pt(a[0].dot(a[e]),-1,1));f/=e,r[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),n[g].crossVectors(r[g],a[g])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ka extends ui{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new le,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Lp extends Ka{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let s=0,e=0,t=0,i=0;function r(a,n,o,l){s=a,e=o,t=-3*a+3*n-2*o-l,i=2*a-2*n+o+l}return{initCatmullRom:function(a,n,o,l,c){r(n,o,c*(o-a),c*(l-n))},initNonuniformCatmullRom:function(a,n,o,l,c,h,d){let u=(n-a)/c-(o-a)/(c+h)+(o-n)/h,f=(o-n)/h-(l-n)/(h+d)+(l-o)/d;u*=h,f*=h,r(n,o,u,f)},calc:function(a){const n=a*a,o=n*a;return s+e*a+t*n+i*o}}}const As=new D,ba=new Za,Ea=new Za,Ta=new Za;class Np extends ui{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e;let o=Math.floor(n),l=n-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%a]:(As.subVectors(r[0],r[1]).add(r[0]),c=As);const d=r[o%a],u=r[(o+1)%a];if(this.closed||o+2<a?h=r[(o+2)%a]:(As.subVectors(r[a-1],r[a-2]).add(r[a-1]),h=As),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),ba.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),Ea.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),Ta.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Ea.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ta.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(ba.calc(l),Ea.calc(l),Ta.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $n(s,e,t,i,r){const a=(i-e)*.5,n=(r-t)*.5,o=s*s,l=s*o;return(2*t-2*i+a+n)*l+(-3*t+3*i-2*a-n)*o+a*s+t}function Up(s,e){const t=1-s;return t*t*e}function Dp(s,e){return 2*(1-s)*s*e}function Ip(s,e){return s*s*e}function kr(s,e,t,i){return Up(s,e)+Dp(s,t)+Ip(s,i)}function Op(s,e){const t=1-s;return t*t*t*e}function Fp(s,e){const t=1-s;return 3*t*t*s*e}function zp(s,e){return 3*(1-s)*s*s*e}function Bp(s,e){return s*s*s*e}function Wr(s,e,t,i,r){return Op(s,e)+Fp(s,t)+zp(s,i)+Bp(s,r)}class el extends ui{constructor(e=new le,t=new le,i=new le,r=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new le){const i=t,r=this.v0,a=this.v1,n=this.v2,o=this.v3;return i.set(Wr(e,r.x,a.x,n.x,o.x),Wr(e,r.y,a.y,n.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gp extends ui{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,a=this.v1,n=this.v2,o=this.v3;return i.set(Wr(e,r.x,a.x,n.x,o.x),Wr(e,r.y,a.y,n.y,o.y),Wr(e,r.z,a.z,n.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class tl extends ui{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vp extends ui{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class il extends ui{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){const i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(kr(e,r.x,a.x,n.x),kr(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hp extends ui{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(kr(e,r.x,a.x,n.x),kr(e,r.y,a.y,n.y),kr(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rl extends ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),o=a-n,l=r[n===0?n:n-1],c=r[n],h=r[n>r.length-2?r.length-1:n+1],d=r[n>r.length-3?r.length-1:n+2];return i.set($n(o,l.x,c.x,h.x,d.x),$n(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new le().fromArray(r))}return this}}var Qn=Object.freeze({__proto__:null,ArcCurve:Lp,CatmullRomCurve3:Np,CubicBezierCurve:el,CubicBezierCurve3:Gp,EllipseCurve:Ka,LineCurve:tl,LineCurve3:Vp,QuadraticBezierCurve:il,QuadraticBezierCurve3:Hp,SplineCurve:rl});class kp extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qn[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let a=0;for(;a<r.length;){if(r[a]>=i){const n=r[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-n/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,a=this.curves;r<a.length;r++){const n=a[r],o=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,l=n.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Qn[r.type]().fromJSON(r))}return this}}class eo extends kp{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new tl(this.currentPoint.clone(),new le(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const a=new il(this.currentPoint.clone(),new le(e,t),new le(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){const o=new el(this.currentPoint.clone(),new le(e,t),new le(i,r),new le(a,n));return this.curves.push(o),this.currentPoint.set(a,n),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new rl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,a,n,o,l),this}absellipse(e,t,i,r,a,n,o,l){const c=new Ka(e,t,i,r,a,n,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ja extends Zt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const a=[],n=[],o=[],l=[],c=new D,h=new le;n.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=i+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),n.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(n[u]/e+1)/2,h.y=(n[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new yt(n,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class li extends Zt{constructor(e=1,t=1,i=1,r=32,a=1,n=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const h=[],d=[],u=[],f=[];let g=0;const v=[],m=i/2;let p=0;_(),n===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function _(){const M=new D,R=new D;let C=0;const T=(t-e)/i;for(let z=0;z<=a;z++){const b=[],E=z/a,O=E*(t-e)+e;for(let N=0;N<=r;N++){const F=N/r,P=F*l+o,L=Math.sin(P),I=Math.cos(P);R.x=O*L,R.y=-E*i+m,R.z=O*I,d.push(R.x,R.y,R.z),M.set(L,T,I).normalize(),u.push(M.x,M.y,M.z),f.push(F,1-E),b.push(g++)}v.push(b)}for(let z=0;z<r;z++)for(let b=0;b<a;b++){const E=v[b][z],O=v[b+1][z],N=v[b+1][z+1],F=v[b][z+1];h.push(E,O,F),h.push(O,N,F),C+=6}c.addGroup(p,C,0),p+=C}function x(M){const R=g,C=new le,T=new D;let z=0;const b=M===!0?e:t,E=M===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,m*E,0),u.push(0,E,0),f.push(.5,.5),g++;const O=g;for(let N=0;N<=r;N++){const F=N/r*l+o,P=Math.cos(F),L=Math.sin(F);T.x=b*L,T.y=m*E,T.z=b*P,d.push(T.x,T.y,T.z),u.push(0,E,0),C.x=P*.5+.5,C.y=L*.5*E+.5,f.push(C.x,C.y),g++}for(let N=0;N<r;N++){const F=R+N,P=O+N;M===!0?h.push(P,P+1,F):h.push(P+1,P,F),z+=3}c.addGroup(p,z,M===!0?1:2),p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}let xr=class extends eo{constructor(s){super(s),this.uuid=wi(),this.type="Shape",this.holes=[]}getPointsHoles(s){const e=[];for(let t=0,i=this.holes.length;t<i;t++)e[t]=this.holes[t].getPoints(s);return e}extractPoints(s){return{shape:this.getPoints(s),holes:this.getPointsHoles(s)}}copy(s){super.copy(s),this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(i.clone())}return this}toJSON(){const s=super.toJSON();s.uuid=this.uuid,s.holes=[];for(let e=0,t=this.holes.length;e<t;e++){const i=this.holes[e];s.holes.push(i.toJSON())}return s}fromJSON(s){super.fromJSON(s),this.uuid=s.uuid,this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(new eo().fromJSON(i))}return this}};const Wp={triangulate:function(s,e,t=2){const i=e&&e.length,r=i?e[0]*t:s.length;let a=sl(s,0,r,t,!0);const n=[];if(!a||a.next===a.prev)return n;let o,l,c,h,d,u,f;if(i&&(a=Kp(s,e,a,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<r;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Yr(a,n,t,o,l,f,0),n}};function sl(s,e,t,i,r){let a,n;if(r===of(s,e,t,i)>0)for(a=e;a<t;a+=i)n=to(a,s[a],s[a+1],n);else for(a=t-i;a>=e;a-=i)n=to(a,s[a],s[a+1],n);return n&&qs(n,n.next)&&(Zr(n),n=n.next),n}function Yi(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(qs(t,t.next)||lt(t.prev,t,t.next)===0)){if(Zr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Yr(s,e,t,i,r,a,n){if(!s)return;!n&&a&&ef(s,i,r,a);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,a?Xp(s,i,r,a):qp(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Zr(s),s=c.next,o=c.next;continue}if(s=c,s===o){n?n===1?(s=jp(Yi(s),e,t),Yr(s,e,t,i,r,a,2)):n===2&&Yp(s,e,t,i,r,a):Yr(Yi(s),e,t,i,r,a,1);break}}}function qp(s){const e=s.prev,t=s,i=s.next;if(lt(e,t,i)>=0)return!1;const r=e.x,a=t.x,n=i.x,o=e.y,l=t.y,c=i.y,h=r<a?r<n?r:n:a<n?a:n,d=o<l?o<c?o:c:l<c?l:c,u=r>a?r>n?r:n:a>n?a:n,f=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&yr(r,o,a,l,n,c,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xp(s,e,t,i){const r=s.prev,a=s,n=s.next;if(lt(r,a,n)>=0)return!1;const o=r.x,l=a.x,c=n.x,h=r.y,d=a.y,u=n.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,v=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=Ba(f,g,e,t,i),_=Ba(v,m,e,t,i);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==n&&yr(o,h,l,d,c,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==n&&yr(o,h,l,d,c,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==n&&yr(o,h,l,d,c,u,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=f&&M.x<=v&&M.y>=g&&M.y<=m&&M!==r&&M!==n&&yr(o,h,l,d,c,u,M.x,M.y)&&lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jp(s,e,t){let i=s;do{const r=i.prev,a=i.next.next;!qs(r,a)&&al(r,i,i.next,a)&&Kr(r,a)&&Kr(a,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),Zr(i),Zr(i.next),i=s=a),i=i.next}while(i!==s);return Yi(i)}function Yp(s,e,t,i,r,a){let n=s;do{let o=n.next.next;for(;o!==n.prev;){if(n.i!==o.i&&sf(n,o)){let l=nl(n,o);n=Yi(n,n.next),l=Yi(l,l.next),Yr(n,e,t,i,r,a,0),Yr(l,e,t,i,r,a,0);return}o=o.next}n=n.next}while(n!==s)}function Kp(s,e,t,i){const r=[];let a,n,o,l,c;for(a=0,n=e.length;a<n;a++)o=e[a]*i,l=a<n-1?e[a+1]*i:s.length,c=sl(s,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(rf(c));for(r.sort(Zp),a=0;a<r.length;a++)t=Jp(r[a],t);return t}function Zp(s,e){return s.x-e.x}function Jp(s,e){const t=$p(s,e);if(!t)return e;const i=nl(t,s);return Yi(i,i.next),Yi(t,t.next)}function $p(s,e){let t=e,i=-1/0,r;const a=s.x,n=s.y;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=a&&u>i&&(i=u,r=t.x<t.next.x?t:t.next,u===a))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,d;t=r;do a>=t.x&&t.x>=l&&a!==t.x&&yr(n<c?a:i,n,l,c,n<c?i:a,n,t.x,t.y)&&(d=Math.abs(n-t.y)/(a-t.x),Kr(t,s)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&Qp(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function Qp(s,e){return lt(s.prev,s,e.prev)<0&&lt(e.next,s,s.next)<0}function ef(s,e,t,i){let r=s;do r.z===0&&(r.z=Ba(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,tf(r)}function tf(s){let e,t,i,r,a,n,o,l,c=1;do{for(t=s,s=null,a=null,n=0;t;){for(n++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),a?a.nextZ=r:s=r,r.prevZ=a,a=r;t=i}a.nextZ=null,c*=2}while(n>1);return s}function Ba(s,e,t,i,r){return s=(s-t)*r|0,e=(e-i)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function rf(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function yr(s,e,t,i,r,a,n,o){return(r-n)*(e-o)>=(s-n)*(a-o)&&(s-n)*(i-o)>=(t-n)*(e-o)&&(t-n)*(a-o)>=(r-n)*(i-o)}function sf(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!af(s,e)&&(Kr(s,e)&&Kr(e,s)&&nf(s,e)&&(lt(s.prev,s,e.prev)||lt(s,e.prev,e))||qs(s,e)&&lt(s.prev,s,s.next)>0&&lt(e.prev,e,e.next)>0)}function lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function qs(s,e){return s.x===e.x&&s.y===e.y}function al(s,e,t,i){const r=Rs(lt(s,e,t)),a=Rs(lt(s,e,i)),n=Rs(lt(t,i,s)),o=Rs(lt(t,i,e));return!!(r!==a&&n!==o||r===0&&Cs(s,t,e)||a===0&&Cs(s,i,e)||n===0&&Cs(t,s,i)||o===0&&Cs(t,e,i))}function Cs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Rs(s){return s>0?1:s<0?-1:0}function af(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&al(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Kr(s,e){return lt(s.prev,s,s.next)<0?lt(s,e,s.next)>=0&&lt(s,s.prev,e)>=0:lt(s,e,s.prev)<0||lt(s,s.next,e)<0}function nf(s,e){let t=s,i=!1;const r=(s.x+e.x)/2,a=(s.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&r<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function nl(s,e){const t=new Ga(s.i,s.x,s.y),i=new Ga(e.i,e.x,e.y),r=s.next,a=e.prev;return s.next=e,e.prev=s,t.next=r,r.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function to(s,e,t,i){const r=new Ga(s,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ga(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function of(s,e,t,i){let r=0;for(let a=e,n=t-i;a<t;a+=i)r+=(s[n]-s[a])*(s[a+1]+s[n+1]),n=a;return r}class qr{static area(e){const t=e.length;let i=0;for(let r=t-1,a=0;a<t;r=a++)i+=e[r].x*e[a].y-e[a].x*e[r].y;return i*.5}static isClockWise(e){return qr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],a=[];io(e),ro(i,e);let n=e.length;t.forEach(io);for(let l=0;l<t.length;l++)r.push(n),n+=t[l].length,ro(i,t[l]);const o=Wp.triangulate(i,r);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function io(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ro(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class qi extends Zt{constructor(e=new xr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],a=[],n=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(n,2));function c(h){const d=r.length/3,u=h.extractPoints(t);let f=u.shape;const g=u.holes;qr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];qr.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=qr.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];f=f.concat(_)}for(let m=0,p=f.length;m<p;m++){const _=f[m];r.push(_.x,_.y,0),a.push(0,0,1),n.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],x=_[0]+d,M=_[1]+d,R=_[2]+d;i.push(x,M,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lf(t,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const n=t[e.shapes[r]];i.push(n)}return new qi(i,e.curveSegments)}}function lf(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const r=s[t];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e}class zt extends Zt{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,n=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:n,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(n+o,Math.PI);let c=0;const h=[],d=new D,u=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const _=[],x=p/i;let M=0;p===0&&n===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const C=R/t;d.x=-e*Math.cos(r+C*a)*Math.sin(n+x*o),d.y=e*Math.cos(n+x*o),d.z=e*Math.sin(r+C*a)*Math.sin(n+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(C+M,1-x),_.push(c++)}h.push(_)}for(let p=0;p<i;p++)for(let _=0;_<t;_++){const x=h[p][_+1],M=h[p][_],R=h[p+1][_],C=h[p+1][_+1];(p!==0||n>0)&&f.push(x,M,C),(p!==i-1||l<Math.PI)&&f.push(M,R,C)}this.setIndex(f),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oi extends Ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dt extends Ki{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const so={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class cf{constructor(e,t,i){const r=this;let a=!1,n=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&r.onStart!==void 0&&r.onStart(h,n,o),a=!0},this.itemEnd=function(h){n++,r.onProgress!==void 0&&r.onProgress(h,n,o),n===o&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const hf=new cf;class $a{constructor(e){this.manager=e!==void 0?e:hf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$a.DEFAULT_MATERIAL_NAME="__DEFAULT";class uf extends $a{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,n=so.get(e);if(n!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0),n;const o=jr("img");function l(){h(),so.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(d){h(),r&&r(d),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class df extends $a{constructor(e){super(e)}load(e,t,i,r){const a=new Ot,n=new uf(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}}class Xs extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Aa=new ut,ao=new D,no=new D;class Qa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ja,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ao.setFromMatrixPosition(e.matrixWorld),t.position.copy(ao),no.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(no),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pf extends Qa{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Bs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ff extends Xs{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new pf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const oo=new ut,Fr=new D,Ca=new D;class mf extends Qa{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fr),Ca.copy(i.position),Ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ca),i.updateMatrixWorld(),r.makeTranslation(-Fr.x,-Fr.y,-Fr.z),oo.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oo)}}class gf extends Xs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new mf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vf extends Qa{constructor(){super(new Wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _f extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new vf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xf extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class yf{constructor(e,t,i=0,r=1/0){this.ray=new Oo(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Va(e,this,i,t),i.sort(lo),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)Va(e[r],this,i,t);return i.sort(lo),i}}function lo(s,e){return s.distance-e.distance}function Va(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const r=s.children;for(let a=0,n=r.length;a<n;a++)Va(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);class ti{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new y);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new y);const i=this.elements,r=e.x,a=e.y,n=e.z;return t.x=i[0]*r+i[1]*a+i[2]*n,t.y=i[3]*r+i[4]*a+i[5]*n,t.z=i[6]*r+i[7]*a+i[8]*n,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new ti);const i=this.elements,r=e.elements,a=t.elements,n=i[0],o=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],f=i[7],g=i[8],v=r[0],m=r[1],p=r[2],_=r[3],x=r[4],M=r[5],R=r[6],C=r[7],T=r[8];return a[0]=n*v+o*_+l*R,a[1]=n*m+o*x+l*C,a[2]=n*p+o*M+l*T,a[3]=c*v+h*_+d*R,a[4]=c*m+h*x+d*C,a[5]=c*p+h*M+d*T,a[6]=u*v+f*_+g*R,a[7]=u*m+f*x+g*C,a[8]=u*p+f*M+g*T,t}scale(e,t){t===void 0&&(t=new ti);const i=this.elements,r=t.elements;for(let a=0;a!==3;a++)r[3*a+0]=e.x*i[3*a+0],r[3*a+1]=e.y*i[3*a+1],r[3*a+2]=e.z*i[3*a+2];return t}solve(e,t){t===void 0&&(t=new y);const i=3,r=4,a=[];let n,o;for(n=0;n<i*r;n++)a.push(0);for(n=0;n<3;n++)for(o=0;o<3;o++)a[n+r*o]=this.elements[n+3*o];a[3+4*0]=e.x,a[3+4*1]=e.y,a[3+4*2]=e.z;let l=3;const c=l;let h;const d=4;let u;do{if(n=c-l,a[n+r*n]===0){for(o=n+1;o<c;o++)if(a[n+r*o]!==0){h=d;do u=d-h,a[u+r*n]+=a[u+r*o];while(--h);break}}if(a[n+r*n]!==0)for(o=n+1;o<c;o++){const f=a[n+r*o]/a[n+r*n];h=d;do u=d-h,a[u+r*o]=u<=n?0:a[u+r*o]-a[u+r*n]*f;while(--h)}}while(--l);if(t.z=a[2*r+3]/a[2*r+2],t.y=(a[1*r+3]-a[1*r+2]*t.z)/a[1*r+1],t.x=(a[0*r+3]-a[0*r+2]*t.z-a[0*r+1]*t.y)/a[0*r+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new ti);const t=3,i=6,r=Sf;let a,n;for(a=0;a<3;a++)for(n=0;n<3;n++)r[a+i*n]=this.elements[a+3*n];r[3+6*0]=1,r[3+6*1]=0,r[3+6*2]=0,r[4+6*0]=0,r[4+6*1]=1,r[4+6*2]=0,r[5+6*0]=0,r[5+6*1]=0,r[5+6*2]=1;let o=3;const l=o;let c;const h=i;let d;do{if(a=l-o,r[a+i*a]===0){for(n=a+1;n<l;n++)if(r[a+i*n]!==0){c=h;do d=h-c,r[d+i*a]+=r[d+i*n];while(--c);break}}if(r[a+i*a]!==0)for(n=a+1;n<l;n++){const u=r[a+i*n]/r[a+i*a];c=h;do d=h-c,r[d+i*n]=d<=a?0:r[d+i*n]-r[d+i*a]*u;while(--c)}}while(--o);a=2;do{n=a-1;do{const u=r[a+i*n]/r[a+i*a];c=i;do d=i-c,r[d+i*n]=r[d+i*n]-r[d+i*a]*u;while(--c)}while(n--)}while(--a);a=2;do{const u=1/r[a+i*a];c=i;do d=i-c,r[d+i*a]=r[d+i*a]*u;while(--c)}while(a--);a=2;do{n=2;do{if(d=r[t+n+i*a],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(a,n,d)}while(n--)}while(a--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,r=e.z,a=e.w,n=t+t,o=i+i,l=r+r,c=t*n,h=t*o,d=t*l,u=i*o,f=i*l,g=r*l,v=a*n,m=a*o,p=a*l,_=this.elements;return _[3*0+0]=1-(u+g),_[3*0+1]=h-p,_[3*0+2]=d+m,_[3*1+0]=h+p,_[3*1+1]=1-(c+g),_[3*1+2]=f-v,_[3*2+0]=d-m,_[3*2+1]=f+v,_[3*2+2]=1-(c+u),this}transpose(e){e===void 0&&(e=new ti);const t=this.elements,i=e.elements;let r;return i[0]=t[0],i[4]=t[4],i[8]=t[8],r=t[1],i[1]=t[3],i[3]=r,r=t[2],i[2]=t[6],i[6]=r,r=t[5],i[5]=t[7],i[7]=r,e}}const Sf=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class y{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new y);const i=e.x,r=e.y,a=e.z,n=this.x,o=this.y,l=this.z;return t.x=o*a-l*r,t.y=l*i-n*a,t.z=n*r-o*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new y(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new y(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new ti([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,r=Math.sqrt(e*e+t*t+i*i);if(r>0){const a=1/r;this.x*=a,this.y*=a,this.z*=a}else this.x=0,this.y=0,this.z=0;return r}unit(e){e===void 0&&(e=new y);const t=this.x,i=this.y,r=this.z;let a=Math.sqrt(t*t+i*i+r*r);return a>0?(a=1/a,e.x=t*a,e.y=i*a,e.z=r*a):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,r=this.z,a=e.x,n=e.y,o=e.z;return Math.sqrt((a-t)*(a-t)+(n-i)*(n-i)+(o-r)*(o-r))}distanceSquared(e){const t=this.x,i=this.y,r=this.z,a=e.x,n=e.y,o=e.z;return(a-t)*(a-t)+(n-i)*(n-i)+(o-r)*(o-r)}scale(e,t){t===void 0&&(t=new y);const i=this.x,r=this.y,a=this.z;return t.x=e*i,t.y=e*r,t.z=e*a,t}vmul(e,t){return t===void 0&&(t=new y),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new y),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new y),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const r=Mf,a=1/i;r.set(this.x*a,this.y*a,this.z*a);const n=wf;Math.abs(r.x)<.9?(n.set(1,0,0),r.cross(n,e)):(n.set(0,1,0),r.cross(n,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const r=this.x,a=this.y,n=this.z;i.x=r+(e.x-r)*t,i.y=a+(e.y-a)*t,i.z=n+(e.z-n)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(co),co.almostEquals(e,t)}clone(){return new y(this.x,this.y,this.z)}}y.ZERO=new y(0,0,0);y.UNIT_X=new y(1,0,0);y.UNIT_Y=new y(0,1,0);y.UNIT_Z=new y(0,0,1);const Mf=new y,wf=new y,co=new y;class Ht{constructor(e){e===void 0&&(e={}),this.lowerBound=new y,this.upperBound=new y,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,r){const a=this.lowerBound,n=this.upperBound,o=i;a.copy(e[0]),o&&o.vmult(a,a),n.copy(a);for(let l=1;l<e.length;l++){let c=e[l];o&&(o.vmult(c,ho),c=ho),c.x>n.x&&(n.x=c.x),c.x<a.x&&(a.x=c.x),c.y>n.y&&(n.y=c.y),c.y<a.y&&(a.y=c.y),c.z>n.z&&(n.z=c.z),c.z<a.z&&(a.z=c.z)}return t&&(t.vadd(a,a),t.vadd(n,n)),r&&(a.x-=r,a.y-=r,a.z-=r,n.x+=r,n.y+=r,n.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ht().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,a=e.upperBound,n=r.x<=i.x&&i.x<=a.x||t.x<=a.x&&a.x<=i.x,o=r.y<=i.y&&i.y<=a.y||t.y<=a.y&&a.y<=i.y,l=r.z<=i.z&&i.z<=a.z||t.z<=a.z&&a.z<=i.z;return n&&o&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,r=e.lowerBound,a=e.upperBound;return t.x<=r.x&&i.x>=a.x&&t.y<=r.y&&i.y>=a.y&&t.z<=r.z&&i.z>=a.z}getCorners(e,t,i,r,a,n,o,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),i.set(h.x,h.y,c.z),r.set(c.x,h.y,h.z),a.set(h.x,c.y,h.z),n.set(c.x,h.y,c.z),o.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const i=uo,r=i[0],a=i[1],n=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(r,a,n,o,l,c,h,d);for(let u=0;u!==8;u++){const f=i[u];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=uo,r=i[0],a=i[1],n=i[2],o=i[3],l=i[4],c=i[5],h=i[6],d=i[7];this.getCorners(r,a,n,o,l,c,h,d);for(let u=0;u!==8;u++){const f=i[u];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,r=1/t.x,a=1/t.y,n=1/t.z,o=(this.lowerBound.x-i.x)*r,l=(this.upperBound.x-i.x)*r,c=(this.lowerBound.y-i.y)*a,h=(this.upperBound.y-i.y)*a,d=(this.lowerBound.z-i.z)*n,u=(this.upperBound.z-i.z)*n,f=Math.max(Math.max(Math.min(o,l),Math.min(c,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,h)),Math.max(d,u));return!(g<0||f>g)}}const ho=new y,uo=[new y,new y,new y,new y,new y,new y,new y,new y];class po{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:r}=t;if(r>i){const a=r;r=i,i=a}return this.matrix[(i*(i+1)>>1)+r-1]}set(e,t,i){let{index:r}=e,{index:a}=t;if(a>r){const n=a;a=r,r=n}this.matrix[(r*(r+1)>>1)+a-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class ol{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const r=i[e].indexOf(t);return r!==-1&&i[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let i=0,r=t.length;i<r;i++)t[i].call(this,e)}return this}}class ot{constructor(e,t,i,r){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=i,this.w=r}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new y),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=bf,r=Ef;e.tangents(i,r),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new ot);const i=this.x,r=this.y,a=this.z,n=this.w,o=e.x,l=e.y,c=e.z,h=e.w;return t.x=i*h+n*o+r*c-a*l,t.y=r*h+n*l+a*o-i*c,t.z=a*h+n*c+i*l-r*o,t.w=n*h-i*o-r*l-a*c,t}inverse(e){e===void 0&&(e=new ot);const t=this.x,i=this.y,r=this.z,a=this.w;this.conjugate(e);const n=1/(t*t+i*i+r*r+a*a);return e.x*=n,e.y*=n,e.z*=n,e.w*=n,e}conjugate(e){return e===void 0&&(e=new ot),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new y);const i=e.x,r=e.y,a=e.z,n=this.x,o=this.y,l=this.z,c=this.w,h=c*i+o*a-l*r,d=c*r+l*i-n*a,u=c*a+n*r-o*i,f=-n*i-o*r-l*a;return t.x=h*c+f*-n+d*-l-u*-o,t.y=d*c+f*-o+u*-n-h*-l,t.z=u*c+f*-l+h*-o-d*-n,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,r,a;const n=this.x,o=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=n*o+l*c;if(h>.499&&(i=2*Math.atan2(n,c),r=Math.PI/2,a=0),h<-.499&&(i=-2*Math.atan2(n,c),r=-Math.PI/2,a=0),i===void 0){const d=n*n,u=o*o,f=l*l;i=Math.atan2(2*o*c-2*n*l,1-2*u-2*f),r=Math.asin(2*h),a=Math.atan2(2*n*c-2*o*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=r,e.x=a}setFromEuler(e,t,i,r){r===void 0&&(r="XYZ");const a=Math.cos(e/2),n=Math.cos(t/2),o=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(i/2);return r==="XYZ"?(this.x=l*n*o+a*c*h,this.y=a*c*o-l*n*h,this.z=a*n*h+l*c*o,this.w=a*n*o-l*c*h):r==="YXZ"?(this.x=l*n*o+a*c*h,this.y=a*c*o-l*n*h,this.z=a*n*h-l*c*o,this.w=a*n*o+l*c*h):r==="ZXY"?(this.x=l*n*o-a*c*h,this.y=a*c*o+l*n*h,this.z=a*n*h+l*c*o,this.w=a*n*o-l*c*h):r==="ZYX"?(this.x=l*n*o-a*c*h,this.y=a*c*o+l*n*h,this.z=a*n*h-l*c*o,this.w=a*n*o+l*c*h):r==="YZX"?(this.x=l*n*o+a*c*h,this.y=a*c*o+l*n*h,this.z=a*n*h-l*c*o,this.w=a*n*o-l*c*h):r==="XZY"&&(this.x=l*n*o-a*c*h,this.y=a*c*o-l*n*h,this.z=a*n*h+l*c*o,this.w=a*n*o+l*c*h),this}clone(){return new ot(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new ot);const r=this.x,a=this.y,n=this.z,o=this.w;let l=e.x,c=e.y,h=e.z,d=e.w,u,f,g,v,m;return f=r*l+a*c+n*h+o*d,f<0&&(f=-f,l=-l,c=-c,h=-h,d=-d),1-f>1e-6?(u=Math.acos(f),g=Math.sin(u),v=Math.sin((1-t)*u)/g,m=Math.sin(t*u)/g):(v=1-t,m=t),i.x=v*r+m*l,i.y=v*a+m*c,i.z=v*n+m*h,i.w=v*o+m*d,i}integrate(e,t,i,r){r===void 0&&(r=new ot);const a=e.x*i.x,n=e.y*i.y,o=e.z*i.z,l=this.x,c=this.y,h=this.z,d=this.w,u=t*.5;return r.x+=u*(a*d+n*h-o*c),r.y+=u*(n*d+o*l-a*h),r.z+=u*(o*d+a*c-n*l),r.w+=u*(-a*l-n*c-o*h),r}}const bf=new y,Ef=new y,Tf={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};let pe=class ll{constructor(e){e===void 0&&(e={}),this.id=ll.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};pe.idCounter=0;pe.types=Tf;class je{constructor(e){e===void 0&&(e={}),this.position=new y,this.quaternion=new ot,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return je.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return je.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,r){return r===void 0&&(r=new y),i.vsub(e,r),t.conjugate(fo),fo.vmult(r,r),r}static pointToWorldFrame(e,t,i,r){return r===void 0&&(r=new y),t.vmult(i,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new y),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,r){return r===void 0&&(r=new y),t.w*=-1,t.vmult(i,r),t.w*=-1,r}}const fo=new ot;class Xr extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:r=[],axes:a,boundingSphereRadius:n}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),n?this.boundingSphereRadius=n:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=a?a.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const r=new y;for(let a=0;a!==e.length;a++){const n=e[a],o=n.length;for(let l=0;l!==o;l++){const c=(l+1)%o;t[n[l]].vsub(t[n[c]],r),r.normalize();let h=!1;for(let d=0;d!==i.length;d++)if(i[d].almostEquals(r)||i[d].almostEquals(r)){h=!0;break}h||i.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let r=0;r<this.faces[e].length;r++)if(!this.vertices[this.faces[e][r]])throw new Error(`Vertex ${this.faces[e][r]} not found!`);const t=this.faceNormals[e]||new y;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[e].length;r++)console.warn(`.vertices[${this.faces[e][r]}] = Vec3(${this.vertices[this.faces[e][r]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],r=this.vertices[i[0]],a=this.vertices[i[1]],n=this.vertices[i[2]];Xr.computeNormal(r,a,n,t)}static computeNormal(e,t,i,r){const a=new y,n=new y;t.vsub(e,n),i.vsub(t,a),a.cross(n,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,i,r,a,n,o,l,c){const h=new y;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){h.copy(i.faceNormals[g]),a.vmult(h,h);const v=h.dot(n);v>u&&(u=v,d=g)}const f=[];for(let g=0;g<i.faces[d].length;g++){const v=i.vertices[i.faces[d][g]],m=new y;m.copy(v),a.vmult(m,m),r.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(n,e,t,f,o,l,c)}findSeparatingAxis(e,t,i,r,a,n,o,l){const c=new y,h=new y,d=new y,u=new y,f=new y,g=new y;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){i.vmult(m.uniqueAxes[p],c);const _=m.testSepAxis(c,e,t,i,r,a);if(_===!1)return!1;_<v&&(v=_,n.copy(c))}else{const p=o?o.length:m.faces.length;for(let _=0;_<p;_++){const x=o?o[_]:_;c.copy(m.faceNormals[x]),i.vmult(c,c);const M=m.testSepAxis(c,e,t,i,r,a);if(M===!1)return!1;M<v&&(v=M,n.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){a.vmult(e.uniqueAxes[p],h);const _=m.testSepAxis(h,e,t,i,r,a);if(_===!1)return!1;_<v&&(v=_,n.copy(h))}else{const p=l?l.length:e.faces.length;for(let _=0;_<p;_++){const x=l?l[_]:_;h.copy(e.faceNormals[x]),a.vmult(h,h);const M=m.testSepAxis(h,e,t,i,r,a);if(M===!1)return!1;M<v&&(v=M,n.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){i.vmult(m.uniqueEdges[p],u);for(let _=0;_!==e.uniqueEdges.length;_++)if(a.vmult(e.uniqueEdges[_],f),u.cross(f,g),!g.almostZero()){g.normalize();const x=m.testSepAxis(g,e,t,i,r,a);if(x===!1)return!1;x<v&&(v=x,n.copy(g))}}return r.vsub(t,d),d.dot(n)>0&&n.negate(n),!0}testSepAxis(e,t,i,r,a,n){const o=this;Xr.project(o,e,i,r,Ra),Xr.project(t,e,a,n,Pa);const l=Ra[0],c=Ra[1],h=Pa[0],d=Pa[1];if(l<d||h<c)return!1;const u=l-d,f=h-c;return u<f?u:f}calculateLocalInertia(e,t){const i=new y,r=new y;this.computeLocalAABB(r,i);const a=i.x-r.x,n=i.y-r.y,o=i.z-r.z;t.x=1/12*e*(2*n*2*n+2*o*2*o),t.y=1/12*e*(2*a*2*a+2*o*2*o),t.z=1/12*e*(2*n*2*n+2*a*2*a)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],r=this.vertices[t[0]];return-i.dot(r)}clipFaceAgainstHull(e,t,i,r,a,n,o){const l=new y,c=new y,h=new y,d=new y,u=new y,f=new y,g=new y,v=new y,m=this,p=[],_=r,x=p;let M=-1,R=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){l.copy(m.faceNormals[E]),i.vmult(l,l);const O=l.dot(e);O<R&&(R=O,M=E)}if(M<0)return;const C=m.faces[M];C.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let O=0;O<m.faces[E].length;O++)C.indexOf(m.faces[E][O])!==-1&&E!==M&&C.connectedFaces.indexOf(E)===-1&&C.connectedFaces.push(E);const T=C.length;for(let E=0;E<T;E++){const O=m.vertices[C[E]],N=m.vertices[C[(E+1)%T]];O.vsub(N,c),h.copy(c),i.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[M]),i.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),f.copy(O),i.vmult(f,f),t.vadd(f,f);const F=C.connectedFaces[E];g.copy(this.faceNormals[F]);const P=this.getPlaneConstantOfFace(F);v.copy(g),i.vmult(v,v);const L=P-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,L);_.length;)_.shift();for(;x.length;)_.push(x.shift())}g.copy(this.faceNormals[M]);const z=this.getPlaneConstantOfFace(M);v.copy(g),i.vmult(v,v);const b=z-v.dot(t);for(let E=0;E<_.length;E++){let O=v.dot(_[E])+b;if(O<=a&&(console.log(`clamped: depth=${O} to minDist=${a}`),O=a),O<=n){const N=_[E];if(O<=1e-6){const F={point:N,normal:v,depth:O};o.push(F)}}}}clipFaceAgainstPlane(e,t,i,r){let a,n;const o=e.length;if(o<2)return t;let l=e[e.length-1],c=e[0];a=i.dot(l)+r;for(let h=0;h<o;h++){if(c=e[h],n=i.dot(c)+r,a<0)if(n<0){const d=new y;d.copy(c),t.push(d)}else{const d=new y;l.lerp(c,a/(a-n),d),t.push(d)}else if(n<0){const d=new y;l.lerp(c,a/(a-n),d),t.push(d),t.push(c)}l=c,a=n}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new y);const i=this.vertices,r=this.worldVertices;for(let a=0;a!==this.vertices.length;a++)t.vmult(i[a],r[a]),e.vadd(r[a],r[a]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const a=i[r];a.x<e.x?e.x=a.x:a.x>t.x&&(t.x=a.x),a.y<e.y?e.y=a.y:a.y>t.y&&(t.y=a.y),a.z<e.z?e.z=a.z:a.z>t.z&&(t.z=a.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new y);const i=this.faceNormals,r=this.worldFaceNormals;for(let a=0;a!==t;a++)e.vmult(i[a],r[a]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const r=t[i].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,r){const a=this.vertices;let n,o,l,c,h,d,u=new y;for(let f=0;f<a.length;f++){u.copy(a[f]),t.vmult(u,u),e.vadd(u,u);const g=u;(n===void 0||g.x<n)&&(n=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}i.set(n,o,l),r.set(c,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new y);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,r=this.vertices;if(t){for(let a=0;a<i;a++){const n=r[a];t.vmult(n,n)}for(let a=0;a<this.faceNormals.length;a++){const n=this.faceNormals[a];t.vmult(n,n)}}if(e)for(let a=0;a<i;a++){const n=r[a];n.vadd(e,n)}}pointIsInside(e){const t=this.vertices,i=this.faces,r=this.faceNormals,a=new y;this.getAveragePointLocal(a);for(let n=0;n<this.faces.length;n++){let o=r[n];const l=t[i[n][0]],c=new y;e.vsub(l,c);const h=o.dot(c),d=new y;a.vsub(l,d);const u=o.dot(d);if(h<0&&u>0||h>0&&u<0)return!1}return-1}static project(e,t,i,r,a){const n=e.vertices.length,o=Af;let l=0,c=0;const h=Cf,d=e.vertices;h.setZero(),je.vectorToLocalFrame(i,r,t,o),je.pointToLocalFrame(i,r,h,h);const u=h.dot(o);c=l=d[0].dot(o);for(let f=1;f<n;f++){const g=d[f].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=u,l-=u,c>l){const f=c;c=l,l=f}a[0]=l,a[1]=c}}const Ra=[],Pa=[];new y;const Af=new y,Cf=new y;class Mr extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,r=y,a=[new r(-e,-t,-i),new r(e,-t,-i),new r(e,t,-i),new r(-e,t,-i),new r(-e,-t,i),new r(e,-t,i),new r(e,t,i),new r(-e,t,i)],n=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],l=new Xr({vertices:a,faces:n,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new y),Mr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const r=e;i.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),i.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),i.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){const i=e,r=this.halfExtents;if(i[0].set(r.x,0,0),i[1].set(0,r.y,0),i[2].set(0,0,r.z),i[3].set(-r.x,0,0),i[4].set(0,-r.y,0),i[5].set(0,0,-r.z),t!==void 0)for(let a=0;a!==i.length;a++)t.vmult(i[a],i[a]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const r=this.halfExtents,a=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let n=0;n<a.length;n++)Pi.set(a[n][0],a[n][1],a[n][2]),t.vmult(Pi,Pi),e.vadd(Pi,Pi),i(Pi.x,Pi.y,Pi.z)}calculateWorldAABB(e,t,i,r){const a=this.halfExtents;si[0].set(a.x,a.y,a.z),si[1].set(-a.x,a.y,a.z),si[2].set(-a.x,-a.y,a.z),si[3].set(-a.x,-a.y,-a.z),si[4].set(a.x,-a.y,-a.z),si[5].set(a.x,a.y,-a.z),si[6].set(-a.x,a.y,-a.z),si[7].set(a.x,-a.y,a.z);const n=si[0];t.vmult(n,n),e.vadd(n,n),r.copy(n),i.copy(n);for(let o=1;o<8;o++){const l=si[o];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,d=l.z;c>r.x&&(r.x=c),h>r.y&&(r.y=h),d>r.z&&(r.z=d),c<i.x&&(i.x=c),h<i.y&&(i.y=h),d<i.z&&(i.z=d)}}}const Pi=new y,si=[new y,new y,new y,new y,new y,new y,new y,new y],en={DYNAMIC:1,STATIC:2,KINEMATIC:4},tn={AWAKE:0,SLEEPY:1,SLEEPING:2};let Le=class Ke extends ol{constructor(e){e===void 0&&(e={}),super(),this.id=Ke.idCounter++,this.index=-1,this.world=null,this.vlambda=new y,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new y,this.previousPosition=new y,this.interpolatedPosition=new y,this.initPosition=new y,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new y,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new y,this.force=new y;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?Ke.STATIC:Ke.DYNAMIC,typeof e.type==typeof Ke.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=Ke.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new y,this.quaternion=new ot,this.initQuaternion=new ot,this.previousQuaternion=new ot,this.interpolatedQuaternion=new ot,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new y,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new y,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new y,this.invInertia=new y,this.invInertiaWorld=new ti,this.invMassSolve=0,this.invInertiaSolve=new y,this.invInertiaWorldSolve=new ti,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new y(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new y(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ht,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new y,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=Ke.AWAKE,this.wakeUpAfterNarrowphase=!1,e===Ke.SLEEPING&&this.dispatchEvent(Ke.wakeupEvent)}sleep(){this.sleepState=Ke.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;t===Ke.AWAKE&&i<r?(this.sleepState=Ke.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(Ke.sleepyEvent)):t===Ke.SLEEPY&&i>r?this.wakeUp():t===Ke.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ke.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ke.SLEEPING||this.type===Ke.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new y),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new y),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new y),this.quaternion.vmult(e,t),t}addShape(e,t,i){const r=new y,a=new ot;return t&&r.copy(t),i&&a.copy(i),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(a),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let r=0;for(let a=0;a!==i;a++){const n=e[a];n.updateBoundingSphereRadius();const o=t[a].length(),l=n.boundingSphereRadius;o+l>r&&(r=o+l)}this.boundingRadius=r}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,r=e.length,a=Rf,n=Pf,o=this.quaternion,l=this.aabb,c=Lf;for(let h=0;h!==r;h++){const d=e[h];o.vmult(t[h],a),a.vadd(this.position,a),o.mult(i[h],n),d.calculateWorldAABB(a,n,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Nf,r=Uf;i.setRotationFromQuaternion(this.quaternion),i.transpose(r),i.scale(t,i),i.mmult(r,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new y),this.type!==Ke.DYNAMIC)return;this.sleepState===Ke.SLEEPING&&this.wakeUp();const i=Df;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new y),this.type!==Ke.DYNAMIC)return;const i=If,r=Of;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyForce(i,r)}applyTorque(e){this.type===Ke.DYNAMIC&&(this.sleepState===Ke.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new y),this.type!==Ke.DYNAMIC)return;this.sleepState===Ke.SLEEPING&&this.wakeUp();const i=t,r=Ff;r.copy(e),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const a=zf;i.cross(e,a),this.invInertiaWorld.vmult(a,a),this.angularVelocity.vadd(a,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new y),this.type!==Ke.DYNAMIC)return;const i=Bf,r=Gf;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,r),this.applyImpulse(i,r)}updateMassProperties(){const e=Vf;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Mr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new y;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ke.DYNAMIC||this.type===Ke.KINEMATIC)||this.sleepState===Ke.SLEEPING)return;const r=this.velocity,a=this.angularVelocity,n=this.position,o=this.force,l=this.torque,c=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,f=h*e;r.x+=o.x*f*u.x,r.y+=o.y*f*u.y,r.z+=o.z*f*u.z;const g=d.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,_=l.z*v.z;a.x+=e*(g[0]*m+g[1]*p+g[2]*_),a.y+=e*(g[3]*m+g[4]*p+g[5]*_),a.z+=e*(g[6]*m+g[7]*p+g[8]*_),n.x+=r.x*e,n.y+=r.y*e,n.z+=r.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};Le.idCounter=0;Le.COLLIDE_EVENT_NAME="collide";Le.DYNAMIC=en.DYNAMIC;Le.STATIC=en.STATIC;Le.KINEMATIC=en.KINEMATIC;Le.AWAKE=tn.AWAKE;Le.SLEEPY=tn.SLEEPY;Le.SLEEPING=tn.SLEEPING;Le.wakeupEvent={type:"wakeup"};Le.sleepyEvent={type:"sleepy"};Le.sleepEvent={type:"sleep"};const Rf=new y,Pf=new ot,Lf=new Ht,Nf=new ti,Uf=new ti;new ti;const Df=new y,If=new y,Of=new y,Ff=new y,zf=new y,Bf=new y,Gf=new y,Vf=new y;class Hf{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&Le.STATIC||e.sleepState===Le.SLEEPING)&&(t.type&Le.STATIC||t.sleepState===Le.SLEEPING))}intersectionTest(e,t,i,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,r):this.doBoundingSphereBroadphase(e,t,i,r)}doBoundingSphereBroadphase(e,t,i,r){const a=kf;t.position.vsub(e.position,a);const n=(e.boundingRadius+t.boundingRadius)**2;a.lengthSquared()<n&&(i.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,i,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),r.push(t))}makePairsUnique(e,t){const i=Wf,r=qf,a=Xf,n=e.length;for(let o=0;o!==n;o++)r[o]=e[o],a[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==n;o++){const l=r[o].id,c=a[o].id,h=l<c?`${l},${c}`:`${c},${l}`;i[h]=o,i.keys.push(h)}for(let o=0;o!==i.keys.length;o++){const l=i.keys.pop(),c=i[l];e.push(r[c]),t.push(a[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new y;e.position.vsub(t.position,i);const r=e.shapes[0],a=t.shapes[0];return Math.pow(r.boundingSphereRadius+a.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const kf=new y;new y;new ot;new y;const Wf={keys:[]},qf=[],Xf=[];new y;new y;new y;class jf extends Hf{constructor(){super()}collisionPairs(e,t,i){const r=e.bodies,a=r.length;let n,o;for(let l=0;l!==a;l++)for(let c=0;c!==l;c++)n=r[l],o=r[c],this.needBroadphaseCollision(n,o)&&this.intersectionTest(n,o,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let r=0;r<e.bodies.length;r++){const a=e.bodies[r];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(t)&&i.push(a)}return i}}class Vs{constructor(){this.rayFromWorld=new y,this.rayToWorld=new y,this.hitNormalWorld=new y,this.hitPointWorld=new y,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,r,a,n,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(r),this.shape=a,this.body=n,this.distance=o}}let cl,hl,ul,dl,pl,fl,ml;const rn={CLOSEST:1,ANY:2,ALL:4};cl=pe.types.SPHERE;hl=pe.types.PLANE;ul=pe.types.BOX;dl=pe.types.CYLINDER;pl=pe.types.CONVEXPOLYHEDRON;fl=pe.types.HEIGHTFIELD;ml=pe.types.TRIMESH;class gt{get[cl](){return this._intersectSphere}get[hl](){return this._intersectPlane}get[ul](){return this._intersectBox}get[dl](){return this._intersectConvex}get[pl](){return this._intersectConvex}get[fl](){return this._intersectHeightfield}get[ml](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new y),t===void 0&&(t=new y),this.from=e.clone(),this.to=t.clone(),this.direction=new y,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=gt.ANY,this.result=new Vs,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||gt.ANY,this.result=t.result||new Vs,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(mo),La.length=0,e.broadphase.aabbQuery(e,mo,La),this.intersectBodies(La),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const r=Yf,a=Kf;for(let n=0,o=e.shapes.length;n<o;n++){const l=e.shapes[n];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[n],a),e.quaternion.vmult(e.shapeOffsets[n],r),r.vadd(e.position,r),this.intersectShape(l,a,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,r=e.length;!this.result.shouldStop&&i<r;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,r){const a=this.from;if(cm(a,this.direction,i)>e.boundingSphereRadius)return;const n=this[e.type];n&&n.call(this,e,t,i,r,e)}_intersectBox(e,t,i,r,a){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,r,a)}_intersectPlane(e,t,i,r,a){const n=this.from,o=this.to,l=this.direction,c=new y(0,0,1);t.vmult(c,c);const h=new y;n.vsub(i,h);const d=h.dot(c);o.vsub(i,h);const u=h.dot(c);if(d*u>0||n.distanceTo(o)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new y,v=new y,m=new y;n.vsub(i,g);const p=-c.dot(g)/f;l.scale(p,v),n.vadd(v,m),this.reportIntersection(c,m,a,r,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,r=this.to,a=this.from;t.x=Math.min(r.x,a.x),t.y=Math.min(r.y,a.y),t.z=Math.min(r.z,a.z),i.x=Math.max(r.x,a.x),i.y=Math.max(r.y,a.y),i.z=Math.max(r.z,a.z)}_intersectHeightfield(e,t,i,r,a){e.data,e.elementSize;const n=Zf;n.from.copy(this.from),n.to.copy(this.to),je.pointToLocalFrame(i,t,n.from,n.from),je.pointToLocalFrame(i,t,n.to,n.to),n.updateDirection();const o=Jf;let l,c,h,d;l=c=0,h=d=e.data.length-1;const u=new Ht;n.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let f=l;f<h;f++)for(let g=c;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,u),!!u.overlapsRay(n)){if(e.getConvexTrianglePillar(f,g,!1),je.pointToWorldFrame(i,t,e.pillarOffset,Ps),this._intersectConvex(e.pillarConvex,t,Ps,r,a,go),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),je.pointToWorldFrame(i,t,e.pillarOffset,Ps),this._intersectConvex(e.pillarConvex,t,Ps,r,a,go)}}}_intersectSphere(e,t,i,r,a){const n=this.from,o=this.to,l=e.radius,c=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2,h=2*((o.x-n.x)*(n.x-i.x)+(o.y-n.y)*(n.y-i.y)+(o.z-n.z)*(n.z-i.z)),d=(n.x-i.x)**2+(n.y-i.y)**2+(n.z-i.z)**2-l**2,u=h**2-4*c*d,f=$f,g=Qf;if(!(u<0))if(u===0)n.lerp(o,u,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,a,r,-1);else{const v=(-h-Math.sqrt(u))/(2*c),m=(-h+Math.sqrt(u))/(2*c);if(v>=0&&v<=1&&(n.lerp(o,v,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,a,r,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(n.lerp(o,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,a,r,-1))}}_intersectConvex(e,t,i,r,a,n){const o=em,l=vo,c=n&&n.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<p;x++){const M=c?c[x]:x,R=h[M],C=u[M],T=t,z=i;l.copy(d[R[0]]),T.vmult(l,l),l.vadd(z,l),l.vsub(g,l),T.vmult(C,o);const b=f.dot(o);if(Math.abs(b)<this.precision)continue;const E=o.dot(l)/b;if(!(E<0)){f.scale(E,Ft),Ft.vadd(g,Ft),ei.copy(d[R[0]]),T.vmult(ei,ei),z.vadd(ei,ei);for(let O=1;!_.shouldStop&&O<R.length-1;O++){ai.copy(d[R[O]]),ni.copy(d[R[O+1]]),T.vmult(ai,ai),T.vmult(ni,ni),z.vadd(ai,ai),z.vadd(ni,ni);const N=Ft.distanceTo(g);!(gt.pointInTriangle(Ft,ei,ai,ni)||gt.pointInTriangle(Ft,ai,ei,ni))||N>m||this.reportIntersection(o,Ft,a,r,M)}}}}_intersectTrimesh(e,t,i,r,a,n){const o=tm,l=om,c=lm,h=vo,d=im,u=rm,f=sm,g=nm,v=am,m=e.indices;e.vertices;const p=this.from,_=this.to,x=this.direction;c.position.copy(i),c.quaternion.copy(t),je.vectorToLocalFrame(i,t,x,d),je.pointToLocalFrame(i,t,p,u),je.pointToLocalFrame(i,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,f.vsub(u,d),d.normalize();const M=u.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let R=0,C=l.length;!this.result.shouldStop&&R!==C;R++){const T=l[R];e.getNormal(T,o),e.getVertex(m[T*3],ei),ei.vsub(u,h);const z=d.dot(o),b=o.dot(h)/z;if(b<0)continue;d.scale(b,Ft),Ft.vadd(u,Ft),e.getVertex(m[T*3+1],ai),e.getVertex(m[T*3+2],ni);const E=Ft.distanceSquared(u);!(gt.pointInTriangle(Ft,ai,ei,ni)||gt.pointInTriangle(Ft,ei,ai,ni))||E>M||(je.vectorToWorldFrame(t,o,v),je.pointToWorldFrame(i,t,Ft,g),this.reportIntersection(v,g,a,r,T))}l.length=0}reportIntersection(e,t,i,r,a){const n=this.from,o=this.to,l=n.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof a<"u"?a:-1,this.mode){case gt.ALL:this.hasHit=!0,c.set(n,o,e,t,i,r,l),c.hasHit=!0,this.callback(c);break;case gt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(n,o,e,t,i,r,l));break;case gt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(n,o,e,t,i,r,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,r){r.vsub(t,ki),i.vsub(t,zr),e.vsub(t,Na);const a=ki.dot(ki),n=ki.dot(zr),o=ki.dot(Na),l=zr.dot(zr),c=zr.dot(Na);let h,d;return(h=l*o-n*c)>=0&&(d=a*c-n*o)>=0&&h+d<a*l-n*n}}gt.CLOSEST=rn.CLOSEST;gt.ANY=rn.ANY;gt.ALL=rn.ALL;const mo=new Ht,La=[],zr=new y,Na=new y,Yf=new y,Kf=new ot,Ft=new y,ei=new y,ai=new y,ni=new y;new y;new Vs;const go={faceList:[0]},Ps=new y,Zf=new gt,Jf=[],$f=new y,Qf=new y,em=new y;new y;new y;const vo=new y,tm=new y,im=new y,rm=new y,sm=new y,am=new y,nm=new y;new Ht;const om=[],lm=new je,ki=new y,Ls=new y;function cm(s,e,t){t.vsub(s,ki);const i=ki.dot(e);return e.scale(i,Ls),Ls.vadd(s,Ls),t.distanceTo(Ls)}class hm{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class _o{constructor(){this.spatial=new y,this.rotational=new y}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Qr{constructor(e,t,i,r){i===void 0&&(i=-1e6),r===void 0&&(r=1e6),this.id=Qr.idCounter++,this.minForce=i,this.maxForce=r,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new _o,this.jacobianElementB=new _o,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const r=t,a=e,n=i;this.a=4/(n*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(n*n*a*(1+4*r))}computeB(e,t,i){const r=this.computeGW(),a=this.computeGq(),n=this.computeGiMf();return-a*e-r*t-n*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,a=i.position,n=r.position;return e.spatial.dot(a)+t.spatial.dot(n)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,a=i.velocity,n=r.velocity,o=i.angularVelocity,l=r.angularVelocity;return e.multiplyVectors(a,o)+t.multiplyVectors(n,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,a=i.vlambda,n=r.vlambda,o=i.wlambda,l=r.wlambda;return e.multiplyVectors(a,o)+t.multiplyVectors(n,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,a=i.force,n=i.torque,o=r.force,l=r.torque,c=i.invMassSolve,h=r.invMassSolve;return a.scale(c,xo),o.scale(h,yo),i.invInertiaWorldSolve.vmult(n,So),r.invInertiaWorldSolve.vmult(l,Mo),e.multiplyVectors(xo,So)+t.multiplyVectors(yo,Mo)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,r=this.bj,a=i.invMassSolve,n=r.invMassSolve,o=i.invInertiaWorldSolve,l=r.invInertiaWorldSolve;let c=a+n;return o.vmult(e.rotational,Ns),c+=Ns.dot(e.rotational),l.vmult(t.rotational,Ns),c+=Ns.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,a=this.bj,n=um;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),a.vlambda.addScaledVector(a.invMassSolve*e,i.spatial,a.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,n),r.wlambda.addScaledVector(e,n,r.wlambda),a.invInertiaWorldSolve.vmult(i.rotational,n),a.wlambda.addScaledVector(e,n,a.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Qr.idCounter=0;const xo=new y,yo=new y,So=new y,Mo=new y,Ns=new y,um=new y;class dm extends Qr{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new y,this.rj=new y,this.ni=new y}computeB(e){const t=this.a,i=this.b,r=this.bi,a=this.bj,n=this.ri,o=this.rj,l=pm,c=fm,h=r.velocity,d=r.angularVelocity;r.force,r.torque;const u=a.velocity,f=a.angularVelocity;a.force,a.torque;const g=mm,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;n.cross(p,l),o.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(a.position),g.vadd(o,g),g.vsub(r.position,g),g.vsub(n,g);const _=p.dot(g),x=this.restitution+1,M=x*u.dot(p)-x*h.dot(p)+f.dot(c)-d.dot(l),R=this.computeGiMf();return-_*t-M*i-e*R}getImpactVelocityAlongNormal(){const e=gm,t=vm,i=_m,r=xm,a=ym;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,a),this.ni.dot(a)}}const pm=new y,fm=new y,mm=new y,gm=new y,vm=new y,_m=new y,xm=new y,ym=new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class wo extends Qr{constructor(e,t,i){super(e,t,-i,i),this.ri=new y,this.rj=new y,this.t=new y}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,r=this.rj,a=Sm,n=Mm,o=this.t;i.cross(o,a),r.cross(o,n);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),a.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(n);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const Sm=new y,Mm=new y;class br{constructor(e,t,i){i=hm.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=br.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}br.idCounter=0;class Er{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Er.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Er.idCounter=0;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new gt;new y;new y;new y;new y(1,0,0),new y(0,1,0),new y(0,0,1);new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;class Ha extends pe{constructor(e){if(super({type:pe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new y);const i=2*e*this.radius*this.radius/5;return t.x=i,t.y=i,t.z=i,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,i,r){const a=this.radius,n=["x","y","z"];for(let o=0;o<n.length;o++){const l=n[o];i[l]=e[l]-a,r[l]=e[l]+a}}}new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new y;new Ht;new y;new Ht;new y;new y;new y;new y;new y;new y;new y;new Ht;new y;new je;new Ht;class wm{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class bm extends wm{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const r=this.iterations,a=this.tolerance*this.tolerance,n=this.equations,o=n.length,l=t.bodies,c=l.length,h=e;let d,u,f,g,v,m;if(o!==0)for(let M=0;M!==c;M++)l[M].updateSolveMassProperties();const p=Tm,_=Am,x=Em;p.length=o,_.length=o,x.length=o;for(let M=0;M!==o;M++){const R=n[M];x[M]=0,_[M]=R.computeB(h),p[M]=1/R.computeC()}if(o!==0){for(let C=0;C!==c;C++){const T=l[C],z=T.vlambda,b=T.wlambda;z.set(0,0,0),b.set(0,0,0)}for(i=0;i!==r;i++){g=0;for(let C=0;C!==o;C++){const T=n[C];d=_[C],u=p[C],m=x[C],v=T.computeGWlambda(),f=u*(d-v-T.eps*m),m+f<T.minForce?f=T.minForce-m:m+f>T.maxForce&&(f=T.maxForce-m),x[C]+=f,g+=f>0?f:-f,T.addToWlambda(f)}if(g*g<a)break}for(let C=0;C!==c;C++){const T=l[C],z=T.velocity,b=T.angularVelocity;T.vlambda.vmul(T.linearFactor,T.vlambda),z.vadd(T.vlambda,z),T.wlambda.vmul(T.angularFactor,T.wlambda),b.vadd(T.wlambda,b)}let M=n.length;const R=1/h;for(;M--;)n[M].multiplier=x[M]*R}return i}}const Em=[],Tm=[],Am=[];class Cm{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class Rm extends Cm{constructor(){super(...arguments),this.type=y}constructObject(){return new y}}const rt={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class Pm{get[rt.sphereSphere](){return this.sphereSphere}get[rt.spherePlane](){return this.spherePlane}get[rt.boxBox](){return this.boxBox}get[rt.sphereBox](){return this.sphereBox}get[rt.planeBox](){return this.planeBox}get[rt.convexConvex](){return this.convexConvex}get[rt.sphereConvex](){return this.sphereConvex}get[rt.planeConvex](){return this.planeConvex}get[rt.boxConvex](){return this.boxConvex}get[rt.sphereHeightfield](){return this.sphereHeightfield}get[rt.boxHeightfield](){return this.boxHeightfield}get[rt.convexHeightfield](){return this.convexHeightfield}get[rt.sphereParticle](){return this.sphereParticle}get[rt.planeParticle](){return this.planeParticle}get[rt.boxParticle](){return this.boxParticle}get[rt.convexParticle](){return this.convexParticle}get[rt.cylinderCylinder](){return this.convexConvex}get[rt.sphereCylinder](){return this.sphereConvex}get[rt.planeCylinder](){return this.planeConvex}get[rt.boxCylinder](){return this.boxConvex}get[rt.convexCylinder](){return this.convexConvex}get[rt.heightfieldCylinder](){return this.heightfieldCylinder}get[rt.particleCylinder](){return this.particleCylinder}get[rt.sphereTrimesh](){return this.sphereTrimesh}get[rt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Rm,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,r,a,n){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new dm(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&r.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,h=r.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(o.restitution=c.restitution*h.restitution),o.si=a||i,o.sj=n||r,o}createFrictionEquationsFromContact(e,t){const i=e.bi,r=e.bj,a=e.si,n=e.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const h=a.material||i.material,d=n.material||r.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(c=h.friction*d.friction),c>0){const u=c*(o.frictionGravity||o.gravity).length();let f=i.invMass+r.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new wo(i,r,u*f),m=g.length?g.pop():new wo(i,r,u*f);return v.bi=m.bi=i,v.bj=m.bj=r,v.minForce=m.minForce=-u*f,v.maxForce=m.maxForce=u*f,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Gi.setZero(),mr.setZero(),gr.setZero();const a=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==a?(Gi.vadd(t.ni,Gi),mr.vadd(t.ri,mr),gr.vadd(t.rj,gr)):(Gi.vsub(t.ni,Gi),mr.vadd(t.rj,mr),gr.vadd(t.ri,gr));const n=1/e;mr.scale(n,i.ri),gr.scale(n,i.rj),r.ri.copy(i.ri),r.rj.copy(i.rj),Gi.normalize(),Gi.tangents(i.t,r.t)}getContacts(e,t,i,r,a,n,o){this.contactPointPool=a,this.frictionEquationPool=o,this.result=r,this.frictionResult=n;const l=Um,c=Dm,h=Lm,d=Nm;for(let u=0,f=e.length;u!==f;u++){const g=e[u],v=t[u];let m=null;g.material&&v.material&&(m=i.getContactMaterial(g.material,v.material)||null);const p=g.type&Le.KINEMATIC&&v.type&Le.STATIC||g.type&Le.STATIC&&v.type&Le.KINEMATIC||g.type&Le.KINEMATIC&&v.type&Le.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const x=g.shapes[_];for(let M=0;M<v.shapes.length;M++){v.quaternion.mult(v.shapeOrientations[M],c),v.quaternion.vmult(v.shapeOffsets[M],d),d.vadd(v.position,d);const R=v.shapes[M];if(!(x.collisionFilterMask&R.collisionFilterGroup&&R.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(d)>x.boundingSphereRadius+R.boundingSphereRadius)continue;let C=null;x.material&&R.material&&(C=i.getContactMaterial(x.material,R.material)||null),this.currentContactMaterial=C||m||i.defaultContactMaterial;const T=x.type|R.type,z=this[T];if(z){let b=!1;x.type<R.type?b=z.call(this,x,R,h,d,l,c,g,v,x,R,p):b=z.call(this,R,x,d,h,c,l,v,g,x,R,p),b&&p&&(i.shapeOverlapKeeper.set(x.id,R.id),i.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,t,i,r,a,n,o,l,c,h,d){if(d)return i.distanceSquared(r)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,l,e,t,c,h);r.vsub(i,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(i,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(r,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,i,r,a,n,o,l,c,h,d){const u=this.createContactEquation(o,l,e,t,c,h);if(u.ni.set(0,0,1),n.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),i.vsub(r,Us),u.ni.scale(u.ni.dot(Us),bo),Us.vsub(bo,u.rj),-Us.dot(u.ni)<=e.radius){if(d)return!0;const f=u.ri,g=u.rj;f.vadd(i,f),f.vsub(o.position,f),g.vadd(r,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,i,r,a,n,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,r,a,n,o,l,e,t,d)}sphereBox(e,t,i,r,a,n,o,l,c,h,d){const u=this.v3pool,f=ng;i.vsub(r,Ds),t.getSideNormals(f,n);const g=e.radius;let v=!1;const m=lg,p=cg,_=hg;let x=null,M=0,R=0,C=0,T=null;for(let I=0,q=f.length;I!==q&&v===!1;I++){const j=rg;j.copy(f[I]);const V=j.length();j.normalize();const Z=Ds.dot(j);if(Z<V+g&&Z>0){const $=sg,K=ag;$.copy(f[(I+1)%3]),K.copy(f[(I+2)%3]);const k=$.length(),J=K.length();$.normalize(),K.normalize();const he=Ds.dot($),ue=Ds.dot(K);if(he<k&&he>-k&&ue<J&&ue>-J){const de=Math.abs(Z-V-g);if((T===null||de<T)&&(T=de,R=he,C=ue,x=V,m.copy(j),p.copy($),_.copy(K),M++,d))return!0}}}if(M){v=!0;const I=this.createContactEquation(o,l,e,t,c,h);m.scale(-g,I.ri),I.ni.copy(m),I.ni.negate(I.ni),m.scale(x,m),p.scale(R,p),m.vadd(p,m),_.scale(C,_),m.vadd(_,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(r,I.rj),I.rj.vsub(l.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let z=u.get();const b=og;for(let I=0;I!==2&&!v;I++)for(let q=0;q!==2&&!v;q++)for(let j=0;j!==2&&!v;j++)if(z.set(0,0,0),I?z.vadd(f[0],z):z.vsub(f[0],z),q?z.vadd(f[1],z):z.vsub(f[1],z),j?z.vadd(f[2],z):z.vsub(f[2],z),r.vadd(z,b),b.vsub(i,b),b.lengthSquared()<g*g){if(d)return!0;v=!0;const V=this.createContactEquation(o,l,e,t,c,h);V.ri.copy(b),V.ri.normalize(),V.ni.copy(V.ri),V.ri.scale(g,V.ri),V.rj.copy(z),V.ri.vadd(i,V.ri),V.ri.vsub(o.position,V.ri),V.rj.vadd(r,V.rj),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}u.release(z),z=null;const E=u.get(),O=u.get(),N=u.get(),F=u.get(),P=u.get(),L=f.length;for(let I=0;I!==L&&!v;I++)for(let q=0;q!==L&&!v;q++)if(I%3!==q%3){f[q].cross(f[I],E),E.normalize(),f[I].vadd(f[q],O),N.copy(i),N.vsub(O,N),N.vsub(r,N);const j=N.dot(E);E.scale(j,F);let V=0;for(;V===I%3||V===q%3;)V++;P.copy(i),P.vsub(F,P),P.vsub(O,P),P.vsub(r,P);const Z=Math.abs(j),$=P.length();if(Z<f[V].length()&&$<g){if(d)return!0;v=!0;const K=this.createContactEquation(o,l,e,t,c,h);O.vadd(F,K.rj),K.rj.copy(K.rj),P.negate(K.ni),K.ni.normalize(),K.ri.copy(K.rj),K.ri.vadd(r,K.ri),K.ri.vsub(i,K.ri),K.ri.normalize(),K.ri.scale(g,K.ri),K.ri.vadd(i,K.ri),K.ri.vsub(o.position,K.ri),K.rj.vadd(r,K.rj),K.rj.vsub(l.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}}u.release(E,O,N,F,P)}planeBox(e,t,i,r,a,n,o,l,c,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,r,a,n,o,l,e,t,d)}convexConvex(e,t,i,r,a,n,o,l,c,h,d,u,f){const g=Eg;if(!(i.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,a,r,n,g,u,f)){const v=[],m=Tg;e.clipAgainstHull(i,a,t,r,n,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(o,l,e,t,c,h),M=x.ri,R=x.rj;g.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,M),R.copy(v[_].point),M.vsub(i,M),R.vsub(r,R),M.vadd(i,M),M.vsub(o.position,M),R.vadd(r,R),R.vsub(l.position,R),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,i,r,a,n,o,l,c,h,d){const u=this.v3pool;i.vsub(r,ug);const f=t.faceNormals,g=t.faces,v=t.vertices,m=e.radius;let p=!1;for(let _=0;_!==v.length;_++){const x=v[_],M=mg;n.vmult(x,M),r.vadd(M,M);const R=fg;if(M.vsub(i,R),R.lengthSquared()<m*m){if(d)return!0;p=!0;const C=this.createContactEquation(o,l,e,t,c,h);C.ri.copy(R),C.ri.normalize(),C.ni.copy(C.ri),C.ri.scale(m,C.ri),M.vsub(r,C.rj),C.ri.vadd(i,C.ri),C.ri.vsub(o.position,C.ri),C.rj.vadd(r,C.rj),C.rj.vsub(l.position,C.rj),this.result.push(C),this.createFrictionEquationsFromContact(C,this.frictionResult);return}}for(let _=0,x=g.length;_!==x&&p===!1;_++){const M=f[_],R=g[_],C=gg;n.vmult(M,C);const T=vg;n.vmult(v[R[0]],T),T.vadd(r,T);const z=_g;C.scale(-m,z),i.vadd(z,z);const b=xg;z.vsub(T,b);const E=b.dot(C),O=yg;if(i.vsub(T,O),E<0&&O.dot(C)>0){const N=[];for(let F=0,P=R.length;F!==P;F++){const L=u.get();n.vmult(v[R[F]],L),r.vadd(L,L),N.push(L)}if(ig(N,C,i)){if(d)return!0;p=!0;const F=this.createContactEquation(o,l,e,t,c,h);C.scale(-m,F.ri),C.negate(F.ni);const P=u.get();C.scale(-E,P);const L=u.get();C.scale(-m,L),i.vsub(r,F.rj),F.rj.vadd(L,F.rj),F.rj.vadd(P,F.rj),F.rj.vadd(r,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(o.position,F.ri),u.release(P),u.release(L),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let I=0,q=N.length;I!==q;I++)u.release(N[I]);return}else for(let F=0;F!==R.length;F++){const P=u.get(),L=u.get();n.vmult(v[R[(F+1)%R.length]],P),n.vmult(v[R[(F+2)%R.length]],L),r.vadd(P,P),r.vadd(L,L);const I=dg;L.vsub(P,I);const q=pg;I.unit(q);const j=u.get(),V=u.get();i.vsub(P,V);const Z=V.dot(q);q.scale(Z,j),j.vadd(P,j);const $=u.get();if(j.vsub(i,$),Z>0&&Z*Z<I.lengthSquared()&&$.lengthSquared()<m*m){if(d)return!0;const K=this.createContactEquation(o,l,e,t,c,h);j.vsub(r,K.rj),j.vsub(i,K.ni),K.ni.normalize(),K.ni.scale(m,K.ri),K.rj.vadd(r,K.rj),K.rj.vsub(l.position,K.rj),K.ri.vadd(i,K.ri),K.ri.vsub(o.position,K.ri),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult);for(let k=0,J=N.length;k!==J;k++)u.release(N[k]);u.release(P),u.release(L),u.release(j),u.release($),u.release(V);return}u.release(P),u.release(L),u.release(j),u.release($),u.release(V)}for(let F=0,P=N.length;F!==P;F++)u.release(N[F])}}}planeConvex(e,t,i,r,a,n,o,l,c,h,d){const u=Sg,f=Mg;f.set(0,0,1),a.vmult(f,f);let g=0;const v=wg;for(let m=0;m!==t.vertices.length;m++)if(u.copy(t.vertices[m]),n.vmult(u,u),r.vadd(u,u),u.vsub(i,v),f.dot(v)<=0){if(d)return!0;const p=this.createContactEquation(o,l,e,t,c,h),_=bg;f.scale(f.dot(v),_),u.vsub(_,_),_.vsub(i,p.ri),p.ni.copy(f),u.vsub(r,p.rj),p.ri.vadd(i,p.ri),p.ri.vsub(o.position,p.ri),p.rj.vadd(r,p.rj),p.rj.vsub(l.position,p.rj),this.result.push(p),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(p,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,r,a,n,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,r,a,n,o,l,e,t,d)}sphereHeightfield(e,t,i,r,a,n,o,l,c,h,d){const u=t.data,f=e.radius,g=t.elementSize,v=zg,m=Fg;je.pointToLocalFrame(r,n,i,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,x=Math.floor((m.y-f)/g)-1,M=Math.ceil((m.y+f)/g)+1;if(_<0||M<0||p>u.length||x>u[0].length)return;p<0&&(p=0),_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),p>=u.length&&(p=u.length-1),_>=u.length&&(_=u.length-1),M>=u[0].length&&(M=u[0].length-1),x>=u[0].length&&(x=u[0].length-1);const R=[];t.getRectMinMax(p,x,_,M,R);const C=R[0],T=R[1];if(m.z-f>T||m.z+f<C)return;const z=this.result;for(let b=p;b<_;b++)for(let E=x;E<M;E++){const O=z.length;let N=!1;if(t.getConvexTrianglePillar(b,E,!1),je.pointToWorldFrame(r,n,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,v,a,n,o,l,e,t,d)),d&&N||(t.getConvexTrianglePillar(b,E,!0),je.pointToWorldFrame(r,n,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(N=this.sphereConvex(e,t.pillarConvex,i,v,a,n,o,l,e,t,d)),d&&N))return!0;if(z.length-O>2)return}}boxHeightfield(e,t,i,r,a,n,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,r,a,n,o,l,e,t,d)}convexHeightfield(e,t,i,r,a,n,o,l,c,h,d){const u=t.data,f=t.elementSize,g=e.boundingSphereRadius,v=Ig,m=Og,p=Dg;je.pointToLocalFrame(r,n,i,p);let _=Math.floor((p.x-g)/f)-1,x=Math.ceil((p.x+g)/f)+1,M=Math.floor((p.y-g)/f)-1,R=Math.ceil((p.y+g)/f)+1;if(x<0||R<0||_>u.length||M>u[0].length)return;_<0&&(_=0),x<0&&(x=0),M<0&&(M=0),R<0&&(R=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),R>=u[0].length&&(R=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);const C=[];t.getRectMinMax(_,M,x,R,C);const T=C[0],z=C[1];if(!(p.z-g>z||p.z+g<T))for(let b=_;b<x;b++)for(let E=M;E<R;E++){let O=!1;if(t.getConvexTrianglePillar(b,E,!1),je.pointToWorldFrame(r,n,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.convexConvex(e,t.pillarConvex,i,v,a,n,o,l,null,null,d,m,null)),d&&O||(t.getConvexTrianglePillar(b,E,!0),je.pointToWorldFrame(r,n,t.pillarOffset,v),i.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.convexConvex(e,t.pillarConvex,i,v,a,n,o,l,null,null,d,m,null)),d&&O))return!0}}sphereParticle(e,t,i,r,a,n,o,l,c,h,d){const u=Pg;if(u.set(0,0,1),r.vsub(i,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const f=this.createContactEquation(l,o,t,e,c,h);u.normalize(),f.rj.copy(u),f.rj.scale(e.radius,f.rj),f.ni.copy(u),f.ni.negate(f.ni),f.ri.set(0,0,0),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}}planeParticle(e,t,i,r,a,n,o,l,c,h,d){const u=Ag;u.set(0,0,1),o.quaternion.vmult(u,u);const f=Cg;if(r.vsub(o.position,f),u.dot(f)<=0){if(d)return!0;const g=this.createContactEquation(l,o,t,e,c,h);g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0);const v=Rg;u.scale(u.dot(r),v),r.vsub(v,v),g.rj.copy(v),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(e,t,i,r,a,n,o,l,c,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,r,a,n,o,l,e,t,d)}convexParticle(e,t,i,r,a,n,o,l,c,h,d){let u=-1;const f=Ng,g=Ug;let v=null;const m=Lg;if(m.copy(r),m.vsub(i,m),a.conjugate(Eo),Eo.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,a),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(a);for(let p=0,_=e.faces.length;p!==_;p++){const x=[e.worldVertices[e.faces[p][0]]],M=e.worldFaceNormals[p];r.vsub(x[0],To);const R=-M.dot(To);if(v===null||Math.abs(R)<Math.abs(v)){if(d)return!0;v=R,u=p,f.copy(M)}}if(u!==-1){const p=this.createContactEquation(l,o,t,e,c,h);f.scale(v,g),g.vadd(r,g),g.vsub(i,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,x=p.rj;_.vadd(r,_),_.vsub(l.position,_),x.vadd(i,x),x.vsub(o.position,x),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,r,a,n,o,l,c,h,d){return this.convexHeightfield(t,e,r,i,n,a,l,o,c,h,d)}particleCylinder(e,t,i,r,a,n,o,l,c,h,d){return this.convexParticle(t,e,r,i,n,a,l,o,c,h,d)}sphereTrimesh(e,t,i,r,a,n,o,l,c,h,d){const u=Hm,f=km,g=Wm,v=qm,m=Xm,p=jm,_=Jm,x=Vm,M=Bm,R=$m;je.pointToLocalFrame(r,n,i,m);const C=e.radius;_.lowerBound.set(m.x-C,m.y-C,m.z-C),_.upperBound.set(m.x+C,m.y+C,m.z+C),t.getTrianglesInAABB(_,R);const T=Gm,z=e.radius*e.radius;for(let F=0;F<R.length;F++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[R[F]*3+P],T),T.vsub(m,M),M.lengthSquared()<=z){if(x.copy(T),je.pointToWorldFrame(r,n,x,T),T.vsub(i,M),d)return!0;let L=this.createContactEquation(o,l,e,t,c,h);L.ni.copy(M),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(e.radius,L.ri),L.ri.vadd(i,L.ri),L.ri.vsub(o.position,L.ri),L.rj.copy(T),L.rj.vsub(l.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let F=0;F<R.length;F++)for(let P=0;P<3;P++){t.getVertex(t.indices[R[F]*3+P],u),t.getVertex(t.indices[R[F]*3+(P+1)%3],f),f.vsub(u,g),m.vsub(f,p);const L=p.dot(g);m.vsub(u,p);let I=p.dot(g);if(I>0&&L<0&&(m.vsub(u,p),v.copy(g),v.normalize(),I=p.dot(v),v.scale(I,p),p.vadd(u,p),p.distanceTo(m)<e.radius)){if(d)return!0;const q=this.createContactEquation(o,l,e,t,c,h);p.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(i,q.ri),q.ri.vsub(o.position,q.ri),je.pointToWorldFrame(r,n,p,p),p.vsub(l.position,q.rj),je.vectorToWorldFrame(n,q.ni,q.ni),je.vectorToWorldFrame(n,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const b=Ym,E=Km,O=Zm,N=zm;for(let F=0,P=R.length;F!==P;F++){t.getTriangleVertices(R[F],b,E,O),t.getNormal(R[F],N),m.vsub(b,p);let L=p.dot(N);if(N.scale(L,p),m.vsub(p,p),L=p.distanceTo(m),gt.pointInTriangle(p,b,E,O)&&L<e.radius){if(d)return!0;let I=this.createContactEquation(o,l,e,t,c,h);p.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(i,I.ri),I.ri.vsub(o.position,I.ri),je.pointToWorldFrame(r,n,p,p),p.vsub(l.position,I.rj),je.vectorToWorldFrame(n,I.ni,I.ni),je.vectorToWorldFrame(n,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}R.length=0}planeTrimesh(e,t,i,r,a,n,o,l,c,h,d){const u=new y,f=Im;f.set(0,0,1),a.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const v=new y;v.copy(u),je.pointToWorldFrame(r,n,v,u);const m=Om;if(u.vsub(i,m),f.dot(m)<=0){if(d)return!0;const p=this.createContactEquation(o,l,e,t,c,h);p.ni.copy(f);const _=Fm;f.scale(m.dot(f),_),u.vsub(_,_),p.ri.copy(_),p.ri.vsub(o.position,p.ri),p.rj.copy(u),p.rj.vsub(l.position,p.rj),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}}}const Gi=new y,mr=new y,gr=new y,Lm=new y,Nm=new y,Um=new ot,Dm=new ot,Im=new y,Om=new y,Fm=new y,zm=new y,Bm=new y;new y;const Gm=new y,Vm=new y,Hm=new y,km=new y,Wm=new y,qm=new y,Xm=new y,jm=new y,Ym=new y,Km=new y,Zm=new y,Jm=new Ht,$m=[],Us=new y,bo=new y,Qm=new y,eg=new y,tg=new y;function ig(s,e,t){let i=null;const r=s.length;for(let a=0;a!==r;a++){const n=s[a],o=Qm;s[(a+1)%r].vsub(n,o);const l=eg;o.cross(e,l);const c=tg;t.vsub(n,c);const h=l.dot(c);if(i===null||h>0&&i===!0||h<=0&&i===!1){i===null&&(i=h>0);continue}else return!1}return!0}const Ds=new y,rg=new y,sg=new y,ag=new y,ng=[new y,new y,new y,new y,new y,new y],og=new y,lg=new y,cg=new y,hg=new y,ug=new y,dg=new y,pg=new y,fg=new y,mg=new y,gg=new y,vg=new y,_g=new y,xg=new y,yg=new y;new y;new y;const Sg=new y,Mg=new y,wg=new y,bg=new y,Eg=new y,Tg=new y,Ag=new y,Cg=new y,Rg=new y,Pg=new y,Eo=new ot,Lg=new y;new y;const Ng=new y,To=new y,Ug=new y,Dg=new y,Ig=new y,Og=[0],Fg=new y,zg=new y;class Ao{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),r=this.current;let a=0;for(;i>r[a];)a++;if(i!==r[a]){for(let n=r.length-1;n>=a;n--)r[n+1]=r[n];r[a]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,r=this.previous,a=i.length,n=r.length;let o=0;for(let l=0;l<a;l++){let c=!1;const h=i[l];for(;h>r[o];)o++;c=h===r[o],c||Co(e,h)}o=0;for(let l=0;l<n;l++){let c=!1;const h=r[l];for(;h>i[o];)o++;c=i[o]===h,c||Co(t,h)}}}function Co(s,e){s.push((e&4294901760)>>16,e&65535)}const Ua=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class Bg{constructor(){this.data={keys:[]}}get(e,t){const i=Ua(e,t);return this.data[i]}set(e,t,i){const r=Ua(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=i}delete(e,t){const i=Ua(e,t),r=this.data.keys.indexOf(i);r!==-1&&this.data.keys.splice(r,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class Gg extends ol{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new y,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new y,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new jf,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new bm,this.constraints=[],this.narrowphase=new Pm(this),this.collisionMatrix=new po,this.collisionMatrixPrevious=new po,this.bodyOverlapKeeper=new Ao,this.shapeOverlapKeeper=new Ao,this.contactmaterials=[],this.contactMaterialTable=new Bg,this.defaultMaterial=new Er("default"),this.defaultContactMaterial=new br(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof Vs?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,r){return i===void 0&&(i={}),i.mode=gt.ALL,i.from=e,i.to=t,i.callback=r,Da.intersectWorld(this,i)}raycastAny(e,t,i,r){return i===void 0&&(i={}),i.mode=gt.ANY,i.from=e,i.to=t,i.result=r,Da.intersectWorld(this,i)}raycastClosest(e,t,i,r){return i===void 0&&(i={}),i.mode=gt.CLOSEST,i.from=e,i.to=t,i.result=r,Da.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof Le&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,r=i.indexOf(e);if(r!==-1){i.splice(r,1);for(let a=0;a!==i.length;a++)i[a].index=a;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const r=t[i].shapes;for(let a=0;a<r.length;a++){const n=r[a];if(n.id===e)return n}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=_t.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const r=i-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const r=_t.now();let a=0;for(;this.accumulator>=e&&a<i&&(this.internalStep(e),this.accumulator-=e,a++,!(_t.now()-r>e*1e3)););this.accumulator=this.accumulator%e;const n=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,n,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,n,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=qg,r=Xg,a=this.bodies.length,n=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,d=Le.DYNAMIC;let u=-1/0;const f=this.constraints,g=Wg;l.length();const v=l.x,m=l.y,p=l.z;let _=0;for(c&&(u=_t.now()),_=0;_!==a;_++){const N=n[_];if(N.type===d){const F=N.force,P=N.mass;F.x+=P*v,F.y+=P*m,F.z+=P*p}}for(let N=0,F=this.subsystems.length;N!==F;N++)this.subsystems[N].update();c&&(u=_t.now()),i.length=0,r.length=0,this.broadphase.collisionPairs(this,i,r),c&&(h.broadphase=_t.now()-u);let x=f.length;for(_=0;_!==x;_++){const N=f[_];if(!N.collideConnected)for(let F=i.length-1;F>=0;F-=1)(N.bodyA===i[F]&&N.bodyB===r[F]||N.bodyB===i[F]&&N.bodyA===r[F])&&(i.splice(F,1),r.splice(F,1))}this.collisionMatrixTick(),c&&(u=_t.now());const M=kg,R=t.length;for(_=0;_!==R;_++)M.push(t[_]);t.length=0;const C=this.frictionEquations.length;for(_=0;_!==C;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,r,this,t,M,this.frictionEquations,g),c&&(h.narrowphase=_t.now()-u),c&&(u=_t.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);const T=t.length;for(let N=0;N!==T;N++){const F=t[N],P=F.bi,L=F.bj,I=F.si,q=F.sj;let j;if(P.material&&L.material?j=this.getContactMaterial(P.material,L.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,P.material&&L.material&&(P.material.friction>=0&&L.material.friction>=0&&P.material.friction*L.material.friction,P.material.restitution>=0&&L.material.restitution>=0&&(F.restitution=P.material.restitution*L.material.restitution)),o.addEquation(F),P.allowSleep&&P.type===Le.DYNAMIC&&P.sleepState===Le.SLEEPING&&L.sleepState===Le.AWAKE&&L.type!==Le.STATIC){const V=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),Z=L.sleepSpeedLimit**2;V>=Z*2&&(P.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===Le.DYNAMIC&&L.sleepState===Le.SLEEPING&&P.sleepState===Le.AWAKE&&P.type!==Le.STATIC){const V=P.velocity.lengthSquared()+P.angularVelocity.lengthSquared(),Z=P.sleepSpeedLimit**2;V>=Z*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(P,L,!0),this.collisionMatrixPrevious.get(P,L)||(Br.body=L,Br.contact=F,P.dispatchEvent(Br),Br.body=P,L.dispatchEvent(Br)),this.bodyOverlapKeeper.set(P.id,L.id),this.shapeOverlapKeeper.set(I.id,q.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=_t.now()-u,u=_t.now()),_=0;_!==a;_++){const N=n[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const N=f[_];N.update();for(let F=0,P=N.equations.length;F!==P;F++){const L=N.equations[F];o.addEquation(L)}}o.solve(e,this),c&&(h.solve=_t.now()-u),o.removeAllEquations();const z=Math.pow;for(_=0;_!==a;_++){const N=n[_];if(N.type&d){const F=z(1-N.linearDamping,e),P=N.velocity;P.scale(F,P);const L=N.angularVelocity;if(L){const I=z(1-N.angularDamping,e);L.scale(I,L)}}}this.dispatchEvent(Hg),c&&(u=_t.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,E=this.quatNormalizeFast;for(_=0;_!==a;_++)n[_].integrate(e,b,E);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=_t.now()-u),this.stepnumber+=1,this.dispatchEvent(Vg);let O=!0;if(this.allowSleep)for(O=!1,_=0;_!==a;_++){const N=n[_];N.sleepTick(this.time),N.sleepState!==Le.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(_i,xi),e){for(let a=0,n=_i.length;a<n;a+=2)Gr.bodyA=this.getBodyById(_i[a]),Gr.bodyB=this.getBodyById(_i[a+1]),this.dispatchEvent(Gr);Gr.bodyA=Gr.bodyB=null}if(t){for(let a=0,n=xi.length;a<n;a+=2)Vr.bodyA=this.getBodyById(xi[a]),Vr.bodyB=this.getBodyById(xi[a+1]),this.dispatchEvent(Vr);Vr.bodyA=Vr.bodyB=null}_i.length=xi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((i||r)&&this.shapeOverlapKeeper.getDiff(_i,xi),i){for(let a=0,n=_i.length;a<n;a+=2){const o=this.getShapeById(_i[a]),l=this.getShapeById(_i[a+1]);yi.shapeA=o,yi.shapeB=l,o&&(yi.bodyA=o.body),l&&(yi.bodyB=l.body),this.dispatchEvent(yi)}yi.bodyA=yi.bodyB=yi.shapeA=yi.shapeB=null}if(r){for(let a=0,n=xi.length;a<n;a+=2){const o=this.getShapeById(xi[a]),l=this.getShapeById(xi[a+1]);Si.shapeA=o,Si.shapeB=l,o&&(Si.bodyA=o.body),l&&(Si.bodyB=l.body),this.dispatchEvent(Si)}Si.bodyA=Si.bodyB=Si.shapeA=Si.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const r=e[i];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new Ht;const Da=new gt,_t=globalThis.performance||{};if(!_t.now){let s=Date.now();_t.timing&&_t.timing.navigationStart&&(s=_t.timing.navigationStart),_t.now=()=>Date.now()-s}new y;const Vg={type:"postStep"},Hg={type:"preStep"},Br={type:Le.COLLIDE_EVENT_NAME,body:null,contact:null},kg=[],Wg=[],qg=[],Xg=[],_i=[],xi=[],Gr={type:"beginContact",bodyA:null,bodyB:null},Vr={type:"endContact",bodyA:null,bodyB:null},yi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Si={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const mt=6,De=10,Ut=4,Ro=350,jg=300,Yg=De-1.5,Kg=10506797,Zg=4004866,Jg=.6,$g=.05,Qg=.3,ev=1.5,tv=1,iv=1.2,rv=1;class sv{constructor(){this.audioContext=null,this.sounds={},this.musicNodes=null,this.musicPlaying=!1,this.soundEffectsVolume=Qg,this.musicVolume=$g,this.lastScheduledTime=0,this.loopCheckInterval=null}init(){try{if(this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.audioContext.state==="suspended"){const e=async()=>{await this.audioContext.resume(),["touchstart","touchend","click"].forEach(t=>{document.removeEventListener(t,e)})};["touchstart","touchend","click"].forEach(t=>{document.addEventListener(t,e)})}}catch(e){console.error("Web Audio API not supported:",e)}this.loadSounds(),this.createMusicControls(),this.createVolumeControls(),this.createBackgroundMusic()}loadSounds(){this.audioContext&&(this.sounds={drop:()=>this.playDropSound(),hit:()=>this.playCollisionSound(),merge:()=>this.playMergeSound()})}playDropSound(){if(!this.audioContext)return;const e=this.audioContext.currentTime,t=this.audioContext.createOscillator();t.type="triangle",t.frequency.value=350,t.frequency.exponentialRampToValueAtTime(250,e+.1);const i=this.audioContext.createBiquadFilter();i.type="lowpass",i.frequency.value=800;const r=this.audioContext.createGain();r.gain.value=0,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(this.soundEffectsVolume*.5,e+.01),r.gain.linearRampToValueAtTime(0,e+.3),t.connect(i),i.connect(r),r.connect(this.audioContext.destination),t.start(e),t.stop(e+.3)}playCollisionSound(){if(!this.audioContext)return;const e=this.audioContext.currentTime,t=this.audioContext.sampleRate*.1,i=this.audioContext.createBuffer(1,t,this.audioContext.sampleRate),r=i.getChannelData(0);for(let l=0;l<t;l++)r[l]=(Math.random()*2-1)*Math.pow(1-l/t,2)*.5;const a=this.audioContext.createBufferSource();a.buffer=i;const n=this.audioContext.createBiquadFilter();n.type="bandpass",n.frequency.value=600,n.Q.value=1;const o=this.audioContext.createGain();o.gain.value=this.soundEffectsVolume*.4,o.gain.setValueAtTime(this.soundEffectsVolume*.4,e),o.gain.exponentialRampToValueAtTime(.001,e+.15),a.connect(n),n.connect(o),o.connect(this.audioContext.destination),a.start(e)}playMergeSound(){if(!this.audioContext)return;const e=this.audioContext.currentTime,t=this.audioContext.createOscillator();t.type="sine",t.frequency.value=80,t.frequency.exponentialRampToValueAtTime(40,e+.3);const i=this.audioContext.createDynamicsCompressor();i.threshold.value=-24,i.knee.value=30,i.ratio.value=12,i.attack.value=.003,i.release.value=.25;const r=this.audioContext.createBiquadFilter();r.type="lowpass",r.frequency.value=800,r.frequency.exponentialRampToValueAtTime(80,e+.4),r.Q.value=1;const a=this.audioContext.createGain();a.gain.value=0,a.gain.setValueAtTime(0,e),a.gain.linearRampToValueAtTime(this.soundEffectsVolume*.8,e+.02),a.gain.exponentialRampToValueAtTime(.001,e+.5),t.connect(r),r.connect(i),i.connect(a),a.connect(this.audioContext.destination);const n=this.audioContext.sampleRate*.2,o=this.audioContext.createBuffer(1,n,this.audioContext.sampleRate),l=o.getChannelData(0);for(let g=0;g<n;g++){const v=Math.pow(1-g/n,3);l[g]=(Math.random()*2-1)*v*.7}const c=this.audioContext.createBufferSource();c.buffer=o;const h=this.audioContext.createBiquadFilter();h.type="bandpass",h.frequency.value=250,h.Q.value=.7;const d=this.audioContext.createGain();d.gain.value=this.soundEffectsVolume*.25,d.gain.setValueAtTime(this.soundEffectsVolume*.25,e),d.gain.exponentialRampToValueAtTime(.001,e+.15),c.connect(h),h.connect(d),d.connect(this.audioContext.destination);const u=this.audioContext.createOscillator();u.type="triangle",u.frequency.value=180,u.frequency.exponentialRampToValueAtTime(120,e+.1);const f=this.audioContext.createGain();f.gain.value=0,f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(this.soundEffectsVolume*.3,e+.01),f.gain.exponentialRampToValueAtTime(.001,e+.2),u.connect(f),f.connect(this.audioContext.destination),t.start(e),t.stop(e+.5),c.start(e),u.start(e),u.stop(e+.2)}playTone(e,t,i){if(!e)return;const r=e.createOscillator(),a=e.createGain();r.type="sine",r.frequency.value=t,a.gain.value=this.soundEffectsVolume,r.connect(a),a.connect(e.destination),r.start(),r.stop(e.currentTime+i)}playSound(e){try{const t=this.sounds[e];t&&typeof t=="function"&&t()}catch(t){console.error("Error playing sound:",t)}}createMusicControls(){}createVolumeControls(){const e=document.createElement("div");e.style.position="absolute",e.style.bottom="10px",e.style.left="10px",e.style.zIndex="1000",e.style.backgroundColor="rgba(0, 0, 0, 0.6)",e.style.padding="10px",e.style.borderRadius="4px",e.style.fontFamily="Arial, sans-serif",e.style.color="white",e.style.display="flex",e.style.flexDirection="column",e.style.gap="8px";const t=document.createElement("div");t.style.display="flex",t.style.alignItems="center",t.style.gap="8px";const i=document.createElement("label");i.textContent="🔊 Effects:",i.style.width="80px";const r=document.createElement("input");r.type="range",r.min="0",r.max="100",r.value=Math.round(this.soundEffectsVolume*100),r.style.width="100px",r.addEventListener("input",l=>{this.soundEffectsVolume=parseInt(l.target.value)/100}),t.appendChild(i),t.appendChild(r);const a=document.createElement("div");a.style.display="flex",a.style.alignItems="center",a.style.gap="8px";const n=document.createElement("label");n.textContent="🎵 Music:",n.style.width="80px";const o=document.createElement("input");o.type="range",o.min="0",o.max="100",o.value=Math.round(this.musicVolume*100),o.style.width="100px",o.addEventListener("input",l=>{this.musicVolume=parseInt(l.target.value)/100,this.updateMusicVolume()}),a.appendChild(n),a.appendChild(o),e.appendChild(t),e.appendChild(a),document.body.appendChild(e)}updateMusicVolume(){this.musicNodes&&this.musicNodes.mainGainNode&&(this.musicNodes.mainGainNode.gain.value=this.musicVolume)}createBackgroundMusic(){this.musicNodes={bassOscillators:[],melodySynths:[],drumSounds:[],mainGainNode:null}}playBackgroundMusic(){if(this.musicPlaying)return;(!this.audioContext||this.audioContext.state==="closed")&&(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.audioContext.state==="suspended"&&this.audioContext.resume();const e=this.audioContext.createGain();e.gain.value=this.musicVolume,e.connect(this.audioContext.destination),this.musicNodes.mainGainNode=e,this.createSynthwaveBass(e),this.createSynthwaveMelody(e),this.createSynthwaveDrums(e),this.musicPlaying=!0,this.loopCheckInterval=setInterval(()=>{if(this.musicPlaying&&this.audioContext&&this.audioContext.state==="running"){const t=this.audioContext.currentTime;t>this.lastScheduledTime-60&&(this.createSynthwaveBass(e,t+1),this.createSynthwaveMelody(e,t+1),this.createSynthwaveDrums(e,t+1))}},3e4)}stopBackgroundMusic(){if(this.musicPlaying){if(this.loopCheckInterval&&(clearInterval(this.loopCheckInterval),this.loopCheckInterval=null),this.musicNodes&&this.musicNodes.mainGainNode){const e=this.audioContext.currentTime;this.musicNodes.mainGainNode.gain.setValueAtTime(this.musicNodes.mainGainNode.gain.value,e),this.musicNodes.mainGainNode.gain.linearRampToValueAtTime(0,e+1),setTimeout(()=>{this.musicNodes.bassOscillators.forEach(t=>{t&&t.stop&&t.stop()}),this.musicNodes.melodySynths.forEach(t=>{t&&t.stop&&t.stop()}),this.musicNodes.bassOscillators=[],this.musicNodes.melodySynths=[],this.musicNodes.drumSounds=[],this.musicNodes.mainGainNode=null},1e3)}this.musicPlaying=!1}}createSynthwaveBass(e,t=0){const i=this.audioContext.currentTime+t,r=[262,196,220,196],a=1,n=r.length*a,o=this.audioContext.createOscillator();o.type="sine";const l=this.audioContext.createBiquadFilter();l.type="lowpass",l.frequency.value=500;const c=this.audioContext.createGain();o.connect(l),l.connect(c),c.connect(e);const h=1e3;for(let d=0;d<h;d++)for(let u=0;u<r.length;u++){const f=i+d*n+u*a;o.frequency.setValueAtTime(r[u],f),c.gain.setValueAtTime(0,f),c.gain.linearRampToValueAtTime(.3,f+.1),c.gain.linearRampToValueAtTime(.2,f+a*.9),this.lastScheduledTime=Math.max(this.lastScheduledTime||0,f+a)}o.start(),this.musicNodes.bassOscillators.push(o)}createSynthwaveMelody(e,t=0){const i=this.audioContext.currentTime+t,r=[523,587,659,698,784],a=[1,1,2,1.5,1.5];this.scheduleMelodyPattern(r,a,100,e,i)}scheduleMelodyPattern(e,t,i,r,a){const n=60/i;let o=a;const l=200;for(let c=0;c<l;c++){c>0&&(o+=n*2);const h=[0,1,2,1,4,2,3,2];for(let d=0;d<h.length;d++){if(Math.random()>.2){const u=e[h[d]],f=t[d%t.length]*n;this.playMelodyNote(u,o,f,r)}o+=t[d%t.length]*n,this.lastScheduledTime=Math.max(this.lastScheduledTime||0,o)}}}playMelodyNote(e,t,i,r){const a=this.audioContext.createOscillator();a.type="sine",a.frequency.value=e;const n=this.audioContext.createBiquadFilter();n.type="lowpass",n.frequency.value=1500;const o=this.audioContext.createGain();o.gain.value=0,a.connect(n),n.connect(o),o.connect(r),o.gain.setValueAtTime(0,t),o.gain.linearRampToValueAtTime(.2,t+.1),o.gain.linearRampToValueAtTime(.15,t+i*.6),o.gain.linearRampToValueAtTime(0,t+i),a.start(t),a.stop(t+i),this.musicNodes.melodySynths.push(a)}createSynthwaveDrums(e,t=0){const i=this.audioContext.currentTime+t;for(let r=0;r<100;r++){const a=i+r*.6*4;this.playKickDrum(a,e),r%2===0&&this.playHiHat(a+.6*2,e,.1),this.lastScheduledTime=Math.max(this.lastScheduledTime||0,a+.6*4)}}playKickDrum(e,t){if(!this.audioContext)return;const i=this.audioContext.createOscillator();i.type="sine";const r=this.audioContext.createGain();r.gain.value=0,i.connect(r),r.connect(t),i.frequency.setValueAtTime(80,e),i.frequency.exponentialRampToValueAtTime(40,e+.1),r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.2,e+.02),r.gain.exponentialRampToValueAtTime(.01,e+.3),i.start(e),i.stop(e+.3),this.musicNodes.drumSounds.push(i)}playHiHat(e,t,i=.1){if(!this.audioContext)return;const r=this.audioContext.createOscillator();r.type="sine",r.frequency.value=8e3;const a=this.audioContext.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const n=this.audioContext.createGain();n.gain.value=0,r.connect(a),a.connect(n),n.connect(t),n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(i,e+.001),n.gain.exponentialRampToValueAtTime(.001,e+.05),r.start(e),r.stop(e+.05),this.musicNodes.drumSounds.push(r)}playSnare(e,t,i=.1){}}const Ni=new sv;class av{constructor(){this.orangeTexture=null,this.strawberryTexture=null,this.watermelonTexture=null,this.grapeTexture=null,this.grapeAltTexture=null,this.appleTexture=null,this.pearTexture=null,this.peachTexture=null,this.pumpkinTexture=null,this.melonTexture=null,this.paperTexture=null,this.createProceduralTextures(),this.createPaperTexture()}createPaperTexture(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d");t.fillStyle="#C49A6C",t.fillRect(0,0,512,512);const i=t.getImageData(0,0,512,512),r=i.data;for(let l=0;l<r.length;l+=4){const c=Math.random()*20-10;r[l]=Math.max(0,Math.min(255,r[l]+c)),r[l+1]=Math.max(0,Math.min(255,r[l+1]+c*.9)),r[l+2]=Math.max(0,Math.min(255,r[l+2]+c*.8))}t.putImageData(i,0,0);const a=t.createRadialGradient(512/2,512/2,512/2*.7,512/2,512/2,512/2);a.addColorStop(0,"rgba(0, 0, 0, 0)"),a.addColorStop(1,"rgba(0, 0, 0, 0.2)"),t.fillStyle=a,t.fillRect(0,0,512,512);for(let l=0;l<10;l++){const c=Math.random()*512,h=Math.random()*512,d=c+(Math.random()*200-100),u=h+(Math.random()*200-100),f=1+Math.random()*3;t.beginPath(),t.moveTo(c,h),t.lineTo(d,u),t.strokeStyle=`rgba(90, 60, 40, ${.05+Math.random()*.1})`,t.lineWidth=f,t.stroke()}for(let l=0;l<20;l++){const c=Math.random()*512,h=Math.random()*512,d=5+Math.random()*20,u=t.createRadialGradient(c,h,0,c,h,d),f=.03+Math.random()*.08;Math.random()<.7?(u.addColorStop(0,`rgba(80, 50, 30, ${f})`),u.addColorStop(1,"rgba(80, 50, 30, 0)")):(u.addColorStop(0,`rgba(190, 160, 100, ${f})`),u.addColorStop(1,"rgba(190, 160, 100, 0)")),t.fillStyle=u,t.beginPath(),t.arc(c,h,d,0,Math.PI*2),t.fill()}for(let l=1;l<3;l++){const c=512*(l/3);t.beginPath(),t.moveTo(c,0),t.lineTo(c,512),t.strokeStyle="rgba(90, 60, 40, 0.15)",t.lineWidth=3,t.stroke(),t.beginPath(),t.moveTo(c+3,0),t.lineTo(c+3,512),t.strokeStyle="rgba(255, 255, 255, 0.1)",t.lineWidth=2,t.stroke()}const n=512*.15,o=512*.85;t.beginPath(),t.moveTo(0,n),t.lineTo(512,n),t.strokeStyle="rgba(90, 60, 40, 0.2)",t.lineWidth=4,t.stroke(),t.beginPath(),t.moveTo(0,o),t.lineTo(512,o),t.strokeStyle="rgba(90, 60, 40, 0.2)",t.lineWidth=4,t.stroke(),this.paperTexture=new jt(e),this.paperTexture.wrapS=ht,this.paperTexture.wrapT=ht}createProceduralTextures(){const e=document.createElement("canvas");e.width=512,e.height=512;const t=e.getContext("2d"),i=t.createRadialGradient(512/2,512/2,0,512/2,512/2,512/2);i.addColorStop(0,"#FFAA20"),i.addColorStop(.7,"#FF8C00"),i.addColorStop(1,"#E67300"),t.fillStyle=i,t.fillRect(0,0,512,512);const r=t.getImageData(0,0,512,512),a=r.data;for(let w=0;w<a.length;w+=4){const S=Math.random()*15-5;a[w]=Math.max(0,Math.min(255,a[w]+S)),a[w+1]=Math.max(0,Math.min(255,a[w+1]+S)),a[w+2]=Math.max(0,Math.min(255,a[w+2]+S))}t.putImageData(r,0,0),this.orangeTexture=new jt(e),this.orangeTexture.wrapS=ht,this.orangeTexture.wrapT=ht;const n=512,o=document.createElement("canvas");o.width=n,o.height=n;const l=o.getContext("2d"),c=l.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);c.addColorStop(0,"#FF4070"),c.addColorStop(.5,"#FF2052"),c.addColorStop(.85,"#E01040"),c.addColorStop(1,"#C00030"),l.fillStyle=c,l.fillRect(0,0,n,n);const h=l.getImageData(0,0,n,n),d=h.data;for(let w=0;w<d.length;w+=4){const S=Math.random()*20-7;d[w]=Math.max(0,Math.min(255,d[w]+S)),d[w+1]=Math.max(0,Math.min(255,d[w+1]+S*.6)),d[w+2]=Math.max(0,Math.min(255,d[w+2]+S*.4))}l.putImageData(h,0,0),this.strawberryTexture=new jt(o),this.strawberryTexture.wrapS=ht,this.strawberryTexture.wrapT=ht;const u=512,f=document.createElement("canvas");f.width=u,f.height=u;const g=f.getContext("2d"),v="#006400";g.fillStyle=v,g.fillRect(0,0,u,u);for(let w=0;w<u;w++)for(let S=0;S<u;S++){const B=S-u/2,Q=w-u/2,ee=Math.atan2(Q,B);Math.sqrt(B*B+Q*Q)/(u/2)>1||((Math.sin(ee*8)+1)/2>1-.5?(g.fillStyle="#32CD32",g.fillRect(S,w,1,1)):(g.fillStyle="#004200",g.fillRect(S,w,1,1)))}this.watermelonTexture=new jt(f),this.watermelonTexture.wrapS=ht,this.watermelonTexture.wrapT=ht;const m=512,p=document.createElement("canvas");p.width=m,p.height=m;const _=p.getContext("2d"),x=_.createRadialGradient(m/2,m/2,0,m/2,m/2,m/2);x.addColorStop(0,"#9040F0"),x.addColorStop(.5,"#8030E0"),x.addColorStop(1,"#6020C0"),_.fillStyle=x,_.fillRect(0,0,m,m);const M=_.getImageData(0,0,m,m),R=M.data;for(let w=0;w<R.length;w+=4){const S=(Math.random()-.5)*30;R[w]=Math.max(0,Math.min(255,R[w]+S)),R[w+1]=Math.max(0,Math.min(255,R[w+1]+S)),R[w+2]=Math.max(0,Math.min(255,R[w+2]+S))}_.putImageData(M,0,0),this.grapeTexture=new jt(p),this.grapeTexture.wrapS=ht,this.grapeTexture.wrapT=ht;const C=document.createElement("canvas");C.width=m,C.height=m;const T=C.getContext("2d");T.drawImage(p,0,0);const z=m*.5,b=m*.5,E=m*.035,O=m*.08,N=b-m*.03,F=z-O,P=z+O;T.fillStyle="black",T.beginPath(),T.arc(F,N,E,0,Math.PI*2),T.arc(P,N,E,0,Math.PI*2),T.fill(),T.fillStyle="white",T.beginPath(),T.arc(F-E*.2,N-E*.2,E*.5,0,Math.PI*2),T.arc(P-E*.2,N-E*.2,E*.5,0,Math.PI*2),T.fill(),T.fillStyle="rgba(0,0,0,0.8)";const L=E*.8,I=E*1.2,q=b+m*.01;T.beginPath(),T.ellipse(z,q,L,I,0,0,Math.PI*2),T.fill(),T.strokeStyle="rgba(0,0,0,0.6)",T.lineWidth=E*.3,T.lineCap="round";const j=b+m*.06,V=m*.04;T.beginPath(),T.moveTo(z-V*1.2,j),T.quadraticCurveTo(z-V*.6,j+V*.3,z-V*.3,j),T.stroke(),T.beginPath(),T.moveTo(z+V*1.2,j),T.quadraticCurveTo(z+V*.6,j+V*.3,z+V*.3,j),T.stroke(),this.grapeAltTexture=new jt(C),this.grapeAltTexture.center.set(.5,.5),this.grapeAltTexture.rotation=Math.PI,this.grapeAltTexture.wrapS=ht,this.grapeAltTexture.wrapT=ht;const Z=512,$=document.createElement("canvas");$.width=Z,$.height=Z;const K=$.getContext("2d");K.fillStyle="#FF3300",K.fillRect(0,0,Z,Z);const k=K.createRadialGradient(Z*.5,Z*.5,0,Z*.5,Z*.5,Z*.8);k.addColorStop(0,"rgba(255, 99, 71, 0.95)"),k.addColorStop(.3,"rgba(255, 69, 0, 0.9)"),k.addColorStop(.6,"rgba(255, 45, 0, 0.85)"),k.addColorStop(1,"rgba(215, 40, 0, 0.8)"),K.fillStyle=k,K.fillRect(0,0,Z,Z);for(let w=0;w<3e3;w++){const S=Math.random()*Z,B=Math.random()*Z,Q=.2+Math.random()*.4;K.beginPath(),K.arc(S,B,Q,0,Math.PI*2);const ee=.01+Math.random()*.02;Math.random()>.7?K.fillStyle=`rgba(255, 160, 120, ${ee})`:K.fillStyle=`rgba(255, 80, 40, ${ee})`,K.fill()}this.peachTexture=new jt($),this.peachTexture.wrapS=ht,this.peachTexture.wrapT=ht;const J=512,he=document.createElement("canvas");he.width=J,he.height=J;const ue=he.getContext("2d");ue.fillStyle="#FF0000",ue.fillRect(0,0,J,J);for(let w=0;w<1e3;w++){const S=Math.random()*J,B=Math.random()*J,Q=5+Math.random()*10;ue.beginPath(),ue.arc(S,B,Q,0,Math.PI*2),ue.fillStyle=`rgba(200, 0, 0, ${Math.random()*.3})`,ue.fill()}this.appleTexture=new jt(he),this.appleTexture.wrapS=ht,this.appleTexture.wrapT=ht;const de=512,Ce=document.createElement("canvas");Ce.width=de,Ce.height=de;const Te=Ce.getContext("2d");Te.fillStyle="#FFD700",Te.fillRect(0,0,de,de);for(let w=0;w<2e3;w++){const S=Math.random()*de,B=Math.random()*de;Te.beginPath(),Te.arc(S,B,1,0,Math.PI*2),Te.fillStyle=`rgba(139, 69, 19, ${Math.random()*.3})`,Te.fill()}this.pearTexture=new jt(Ce),this.pearTexture.wrapS=ht,this.pearTexture.wrapT=ht;const _e=512,Ge=document.createElement("canvas");Ge.width=_e,Ge.height=_e;const H=Ge.getContext("2d");H.fillStyle="#FF7518",H.fillRect(0,0,_e,_e);for(let w=0;w<8;w++){const S=_e/8+w*_e/8;H.beginPath(),H.moveTo(S,0),H.lineTo(S,_e),H.lineWidth=10,H.strokeStyle="#E86100",H.stroke()}for(let w=0;w<3e3;w++){const S=Math.random()*_e,B=Math.random()*_e,Q=1+Math.random()*2;H.beginPath(),H.arc(S,B,Q,0,Math.PI*2),H.fillStyle=`rgba(255, 138, 36, ${Math.random()*.3})`,H.fill()}this.pumpkinTexture=new jt(Ge),this.pumpkinTexture.wrapS=ht,this.pumpkinTexture.wrapT=ht;const at=512,ye=document.createElement("canvas");ye.width=at,ye.height=at;const ge=ye.getContext("2d"),ve="#F4E5C3";ge.fillStyle=ve,ge.fillRect(0,0,at,at);const Qe=ge.getImageData(0,0,at,at),Ae=Qe.data;for(let w=0;w<Ae.length;w+=4){const S=Math.random()*15-7;Ae[w]=Math.max(0,Math.min(255,Ae[w]+S)),Ae[w+1]=Math.max(0,Math.min(255,Ae[w+1]+S*.8)),Ae[w+2]=Math.max(0,Math.min(255,Ae[w+2]+S*.6))}ge.putImageData(Qe,0,0);for(let w=0;w<2e3;w++){const S=Math.random()*at,B=Math.random()*at,Q=10+Math.random()*20,ee=Math.random()*Math.PI*2;ge.beginPath(),ge.moveTo(S,B),ge.lineTo(S+Math.cos(ee)*Q,B+Math.sin(ee)*Q),ge.lineWidth=1+Math.random()*2,ge.strokeStyle="rgba(255, 245, 220, 0.4)",ge.stroke(),ge.beginPath(),ge.moveTo(S+1,B+1),ge.lineTo(S+Math.cos(ee)*Q+1,B+Math.sin(ee)*Q+1),ge.strokeStyle="rgba(150, 140, 110, 0.4)",ge.stroke()}this.melonTexture=new jt(ye),this.melonTexture.wrapS=ht,this.melonTexture.wrapT=ht}loadTextureFromDataUrl(e){return new df().load(e)}}class nv{constructor(){this.currentScore=0,this.highScore=this.loadHighScore(),this.scoreElement=document.getElementById("score"),this.highScoreElement=null,this.initHighScoreDisplay()}initHighScoreDisplay(){this.highScoreElement=document.getElementById("high-score"),this.highScoreElement||(this.highScoreElement=document.createElement("div"),this.highScoreElement.id="high-score",this.highScoreElement.style.position="absolute",this.highScoreElement.style.top="50px",this.highScoreElement.style.left="20px",this.highScoreElement.style.color="white",this.highScoreElement.style.fontFamily="Arial, sans-serif",this.highScoreElement.style.fontSize="18px",document.body.appendChild(this.highScoreElement)),this.updateHighScoreDisplay()}loadHighScore(){const e=localStorage.getItem("suikaHighScore");return e?parseInt(e):0}saveHighScore(e){localStorage.setItem("suikaHighScore",e.toString())}updateScore(e){return this.currentScore=e,this.updateScoreDisplay(),e>this.highScore?(this.highScore=e,this.saveHighScore(e),this.updateHighScoreDisplay(),!0):!1}addPoints(e){return this.updateScore(this.currentScore+e)}getHighScore(){return this.highScore}getCurrentScore(){return this.currentScore}setHighScore(e){this.highScore=e,this.saveHighScore(e),this.updateHighScoreDisplay()}resetCurrentScore(){this.updateScore(0)}updateScoreDisplay(){this.scoreElement&&(this.scoreElement.textContent=`Score: ${this.currentScore}`)}updateHighScoreDisplay(){this.highScoreElement&&(this.highScoreElement.textContent=`High Score: ${this.highScore}`)}clearHighScore(){this.highScore=0,this.saveHighScore(0),this.updateHighScoreDisplay()}}class ov{constructor(e){this.scene=e,this.particles=new Map,this.starGeometry=this.createStarGeometry()}createStarGeometry(){const e=[];for(let i=0;i<5*2;i++){const r=i%2===0?.15:.05,a=i/(5*2)*Math.PI*2;e.push(new le(Math.cos(a)*r,Math.sin(a)*r))}const t=new xr(e);return new qi(t)}createParticleSystem(e,t){const i=new Rt;for(let r=0;r<20;r++){const a=new Ue(this.starGeometry,new $r({color:t,transparent:!0,opacity:0,side:Wi}));a.rotation.z=Math.random()*Math.PI*2,a.visible=!1,i.add(a)}this.scene.add(i),this.particles.set(e,{group:i,lastPosition:e.position.clone(),nextParticleIndex:0,updateCounter:0})}removeParticleSystem(e){const t=this.particles.get(e);t&&(this.scene.remove(t.group),this.particles.delete(e))}update(){this.particles.forEach((e,t)=>{if(t.position.distanceTo(e.lastPosition)>.05){if(e.updateCounter++,e.updateCounter%2===0){const i=e.group.children[e.nextParticleIndex];i.position.copy(t.position),i.material.opacity=.8,i.scale.set(1,1,1),i.visible=!0,e.nextParticleIndex=(e.nextParticleIndex+1)%e.group.children.length}e.lastPosition.copy(t.position)}e.group.children.forEach(i=>{i.visible&&(i.material.opacity*=.95,i.scale.multiplyScalar(.95),i.material.opacity<.1&&(i.visible=!1))})})}}class lv{constructor(e,t,i,r){this.world=e,this.fruitMaterial=t,this.textureManager=i,this.scene=r,this.particleSystem=new ov(r)}createFruitGeometry(e){switch(e.shape){case"cherry":{const t=new Rt,i=new Ue(new zt(e.radius),new Dt({color:e.color,shininess:100,specular:4473924}));t.add(i);const r=new Ue(new li(.05,.05,e.radius*1.5,8),new Dt({color:e.stemColor}));return r.position.y=e.radius*.8,r.rotation.x=Math.PI/6,t.add(r),t}case"strawberry":{const t=new Rt,i=new zt(e.radius,32,32),r=i.attributes.position.array;for(let c=0;c<r.length;c+=3){const h=r[c+1];if(h<0){const g=.8+h/e.radius*.2;r[c]*=g,r[c+2]*=g}h>e.radius*.5&&(r[c+1]*=.9);const d=r[c],u=r[c+2],f=Math.sqrt(d*d+u*u)/e.radius;if(f>.5&&f<.95){const g=Math.atan2(u,d),v=.03*Math.sin(g*38)*Math.sin(h*40);r[c]+=r[c]*v,r[c+2]+=r[c+2]*v}}i.attributes.position.needsUpdate=!0,i.computeVertexNormals();const a=new oi({color:e.color,roughness:.7,metalness:.1,map:this.textureManager.strawberryTexture,bumpMap:this.textureManager.strawberryTexture,bumpScale:.04,normalMap:this.textureManager.strawberryTexture,normalScale:new le(.05,.05),envMapIntensity:.8}),n=new Ue(i,a);t.add(n);const o=new Rt;for(let c=0;c<5;c++){const h=new xr,d=e.radius*(.25+Math.random()*.1),u=e.radius*(.3+Math.random()*.1);h.moveTo(0,0),h.quadraticCurveTo(d/2,u/2,d,0),h.quadraticCurveTo(d/2,-u/6,0,0);const f=new qi(h),g=new Ue(f,new Dt({color:e.leafColor,shininess:10,side:Wi}));g.rotation.x=Math.PI/2-Math.random()*.3,g.rotation.z=c/5*Math.PI*2,o.add(g)}o.position.y=e.radius*.9,t.add(o);const l=new Ue(new li(e.radius*.05,e.radius*.08,e.radius*.2,8),new Dt({color:8016432,shininess:5}));return l.position.y=e.radius*.8,t.add(l),t}case"apple":{const t=new Rt,i=new Ue(new zt(e.radius,32,32),new oi({color:e.color,roughness:.7,metalness:.1,map:this.textureManager.appleTexture,bumpMap:this.textureManager.appleTexture,bumpScale:.02,normalMap:this.textureManager.appleTexture,normalScale:new le(.04,.04)}));t.add(i);const r=new li(e.radius*.12,e.radius*.12,e.radius*.1,8),a=new Ue(r,new oi({color:5909760,roughness:.9,metalness:0}));a.position.y=e.radius*.92,t.add(a);const n=new li(e.radius*.03,e.radius*.05,e.radius*.3,8),o=n.attributes.position.array;for(let g=0;g<o.length;g+=3){const v=o[g+1];v>0&&(o[g]+=e.radius*.05*(v/(e.radius*.3)))}n.attributes.position.needsUpdate=!0,n.computeVertexNormals();const l=new Ue(n,new oi({color:e.stemColor||4878371,roughness:.9,metalness:.05}));l.position.y=e.radius*1.05,l.rotation.x=Math.PI/12,l.rotation.z=Math.PI/8,t.add(l);const c=new xr,h=e.radius*.25,d=e.radius*.3;c.moveTo(0,0),c.quadraticCurveTo(h/3,d/2,h,0),c.quadraticCurveTo(h/3,-d/4,0,0);const u=new qi(c),f=new Ue(u,new oi({color:e.stemColor||4878371,roughness:.8,metalness:.05,side:Wi}));return f.position.set(e.radius*.05,e.radius*.9,e.radius*.05),f.rotation.set(Math.PI/3,0,Math.PI/8),t.add(f),t}case"pear":{const t=new Rt,i=new zt(e.radius,32,32),r=i.attributes.position.array;for(let l=0;l<r.length;l+=3){const c=r[l+1];if(c<0){const h=1+Math.abs(c/e.radius)*.3;r[l]*=h,r[l+2]*=h}else if(c>0){const h=1-c/e.radius*.3;r[l]*=h,r[l+2]*=h}}i.attributes.position.needsUpdate=!0;const a=new Ue(i,new Dt({color:e.color,shininess:30,map:this.textureManager.pearTexture,bumpMap:this.textureManager.pearTexture,bumpScale:.01}));t.add(a);const n=new li(e.radius*.05,e.radius*.05,e.radius*.3,8),o=new Ue(n,new Dt({color:8011008}));return o.position.y=e.radius*1.1,t.add(o),t}case"peach":{const t=new Rt,i=new zt(e.radius,32,32),r=i.attributes.position.array;for(let v=0;v<r.length;v+=3){const m=r[v],p=r[v+1],_=r[v+2];if(r[v]*=1.05,r[v+2]*=1.05,_>0&&Math.abs(m)<e.radius*.2){const x=Math.exp(-Math.pow(m/(e.radius*.15),2)),M=1-Math.pow(p/(e.radius*1.1),2),R=.1*x*Math.max(0,M);r[v+2]*=1-R}}i.attributes.position.needsUpdate=!0,i.computeVertexNormals();const a=new oi({map:this.textureManager.peachTexture,roughness:.8,metalness:0}),n=new Ue(i,a);n.rotation.x=Math.PI*.5,t.add(n);const o=new li(e.radius*.02,e.radius*.04,e.radius*.15,8),l=o.attributes.position.array;for(let v=0;v<l.length;v+=3){const m=l[v+1];m>0&&(l[v]+=e.radius*.03*(m/(e.radius*.15)))}o.attributes.position.needsUpdate=!0,o.computeVertexNormals();const c=new Ue(o,new oi({color:5911296,roughness:.9,metalness:0}));c.position.set(0,e.radius*.85,0),c.rotation.x=Math.PI/12,c.rotation.x+=Math.PI*.5,t.add(c);const h=new xr,d=e.radius*.2,u=e.radius*.25;h.moveTo(0,0),h.quadraticCurveTo(d/3,u/2,d,0),h.quadraticCurveTo(d/3,-u/4,0,0);const f=new qi(h),g=new Ue(f,new oi({color:5081642,roughness:.8,metalness:0,side:Wi}));return g.position.set(e.radius*.05,e.radius*.85,e.radius*.05),g.rotation.set(Math.PI/3,0,Math.PI/6),g.rotation.x+=Math.PI*.5,t.add(g),t}case"pumpkin":{const t=new Rt,i=16,r=e.radius,a=new zt(r,i,i),n=new Dt({color:e.color,shininess:5,map:this.textureManager.pumpkinTexture,bumpMap:this.textureManager.pumpkinTexture,bumpScale:.05}),o=new Ue(a,n),l=a.attributes.position;for(let u=0;u<l.count;u++){const f=l.getX(u);l.getY(u);const g=l.getZ(u),v=Math.atan2(g,f),m=Math.sin(v*8)*.08*r,p=f*(1+m),_=g*(1+m);l.setX(u,p),l.setZ(u,_)}l.needsUpdate=!0,a.computeVertexNormals(),t.add(o);const c=new li(.1,.15,r*.4,8),h=new Dt({color:e.stemColor,shininess:5}),d=new Ue(c,h);return d.position.y=r*.9,d.rotation.x=Math.PI*.05,d.rotation.z=Math.PI*.1,t.add(d),t}case"melon":{const t=new zt(e.radius,32,32),i=new Dt({color:e.color,shininess:40,map:this.textureManager.melonTexture,bumpMap:this.textureManager.melonTexture,bumpScale:.02});return new Ue(t,i)}case"watermelon":{const t=new Rt,i=new zt(e.radius,32,32),r=i.attributes.position.array;for(let o=0;o<r.length;o+=3){r[o]*=1.02,r[o+2]*=1.02;const l=r[o],c=r[o+2],h=(Math.random()-.5)*.005,d=r[o+1];Math.abs(d/e.radius)<.7&&(r[o]+=l*h,r[o+2]+=c*h)}i.attributes.position.needsUpdate=!0,i.computeVertexNormals();const a=new oi({map:this.textureManager.watermelonTexture,roughness:.5,metalness:0,bumpScale:.01}),n=new Ue(i,a);return t.add(n),t}case"orange":{const t=new Rt,i=new zt(e.radius,32,32),r=i.attributes.position.array;for(let u=0;u<r.length;u+=3){const f=r[u],g=r[u+1],v=r[u+2],m=Math.atan2(v,f),p=.02*Math.sin(m*10)*Math.sin(g*12);r[u]+=r[u]*p,r[u+1]+=r[u+1]*p,r[u+2]+=r[u+2]*p,Math.abs(g/e.radius)>.8&&(r[u+1]*=.95)}i.attributes.position.needsUpdate=!0,i.computeVertexNormals();const a=new Dt({color:e.color,shininess:80,specular:8921600,map:this.textureManager.orangeTexture,bumpMap:this.textureManager.orangeTexture,bumpScale:e.bumpScale||.03,emissive:2228224,emissiveIntensity:.05}),n=new Ue(i,a);t.add(n);const o=new Rt,l=new Ue(new li(e.radius*.05,e.radius*.08,e.radius*.06,8),new Dt({color:8934690}));o.add(l);const c=new xr,h=e.radius*.15;c.moveTo(0,0),c.quadraticCurveTo(h*.5,h,h,0),c.quadraticCurveTo(h*.5,-h*.3,0,0);const d=new Ue(new qi(c),new Dt({color:2972199,side:Wi}));return d.rotation.set(Math.PI/2-.2,0,0),d.position.set(e.radius*.05,e.radius*.06,0),o.add(d),o.position.y=e.radius*.9,o.rotation.x=Math.PI*.1,t.add(o),t}case"grape":{const t=new zt(e.radius,32,32),i=Math.random()<.001;if(i){const a=t.attributes.uv,n=t.attributes.position;for(let o=0;o<a.count;o++){const l=n.getX(o),c=n.getY(o),h=n.getZ(o),d=Math.acos(c/e.radius),u=.5+Math.atan2(l,h)/(2*Math.PI),f=1-d/Math.PI;a.setXY(o,u,f)}a.needsUpdate=!0}const r=new Dt({color:e.color,shininess:120,transparent:!1,opacity:1,map:i?this.textureManager.grapeAltTexture:this.textureManager.grapeTexture,bumpMap:i?this.textureManager.grapeAltTexture:this.textureManager.grapeTexture,bumpScale:.01});return new Ue(t,r)}default:{const t=new zt(e.radius,32,32),i=new Dt({color:e.color});return new Ue(t,i)}}}createFruitBody(e,t={x:0,y:0},i=!1){const r=e.radius;let a,n;return e.shape==="watermelon"?a=new Ha(r*1.02):a=new Ha(r),n=new Le({mass:1,shape:a,position:new y(t.x,t.y,0),material:this.fruitMaterial,linearDamping:.1,angularDamping:.3,collisionFilterGroup:i?0:1,collisionFilterMask:i?0:1}),n.linearFactor=new y(1,1,0),n.angularFactor=new y(0,0,1),this.world.addBody(n),n.addEventListener("collide",o=>{if(!i&&window.audioManager){const l=o.contact.getImpactVelocityAlongNormal(),c=Math.min(Math.abs(l)/10,1);if(c>.1){const h=.8+Math.random()*.4;window.audioManager.playSound("hit",h,c)}}}),n}createFruit(e,t,i=!1){try{const r=this.createFruitGeometry(e);r.position.copy(t);const a=this.createFruitBody(e,t,i);return i&&r.traverse(n=>{n.isMesh&&n.material&&(n.material=n.material.clone(),n.material.transparent=!0,n.material.opacity=.7)}),this.scene&&this.scene.add(r),this.particleSystem.createParticleSystem(r,e.color),{mesh:r,body:a,type:e,dropTime:null}}catch(r){return console.error("Error in FruitFactory.createFruit:",r),{mesh:{position:new D(t.x,t.y,0),quaternion:new Ui},body:{position:new y(t.x,t.y,0),quaternion:new ot,velocity:new y(0,0,0),angularVelocity:new y(0,0,0),type:0,addEventListener:()=>{}},type:e}}}update(){this.particleSystem.update()}}class cv{constructor(){this.gameUrl="https://www.ainosuika.com",this.defaultMessage="I scored {score} in Ai-No-Suika Game! Can you beat my score?",this.previewImageUrl="https://www.ainosuika.com/main/preview.png"}createSocialButtons(e){console.log("Creating social buttons for score:",e);const t=document.createElement("div");t.className="social-share-container",t.style.display="flex",t.style.flexDirection="row",t.style.justifyContent="center",t.style.gap="10px",t.style.marginTop="15px",t.style.width="100%";const i=this.defaultMessage.replace("{score}",e),r=this.createShareButton("X","#000000",()=>this.shareOnTwitter(i,e)),a=this.createShareButton("👍 Facebook","#4267B2",()=>this.shareOnFacebook(e)),n=this.createShareButton("💬 WhatsApp","#25D366",()=>this.shareOnWhatsApp(i)),o=this.createShareButton("📋 Share","#7289DA",()=>this.copyShareText(i,e));return t.appendChild(r),t.appendChild(a),t.appendChild(n),t.appendChild(o),console.log("Social buttons created, count:",t.childNodes.length),t}createShareButton(e,t,i){const r=document.createElement("button");return r.innerText=e,r.style.padding="8px 15px",r.style.margin="5px",r.style.borderRadius="5px",r.style.border="none",r.style.backgroundColor=t,r.style.color="white",r.style.cursor="pointer",r.style.fontWeight="bold",r.style.display="inline-block",r.style.minWidth="100px",r.addEventListener("click",i),r}shareOnTwitter(e,t){this.updateMetaTags(t);const i=`${this.previewImageUrl}?v=${Date.now()}`;this.updateMetaTag("twitter:image",i);const r=`https://twitter.com/intent/tweet?text=${encodeURIComponent(e)}&url=${encodeURIComponent(this.gameUrl)}&hashtags=AiNoSuikaGame,VibeJam`;window.open(r,"_blank")}shareOnFacebook(e){this.updateMetaTags(e);const t=`I just scored ${e} points in Ai-No-Suika Game! Think you can beat my score? Challenge accepted? #AiNoSuikaGame #VibeJam`,i=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.gameUrl)}&quote=${encodeURIComponent(t)}`;window.open(i,"_blank")}shareOnWhatsApp(e){const t=`https://wa.me/?text=${encodeURIComponent(e+" "+this.gameUrl)}`;window.open(t,"_blank")}copyShareText(e,t){const i=`I just scored ${t} points in Ai-No-Suika Game! Think you can beat my score? Challenge accepted! Play at ${this.gameUrl} #AiNoSuikaGame #VibeJam`,r=document.createElement("textarea");r.value=i,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),alert("Share text copied to clipboard! Now you can paste it anywhere.")}updateMetaTags(e){const t=this.defaultMessage.replace("{score}",e);this.updateMetaTag("og:title","Ai-No-Suika Game - Score: "+e),this.updateMetaTag("og:description",t),this.updateMetaTag("twitter:title","Ai-No-Suika Game - Score: "+e),this.updateMetaTag("twitter:description",t),this.updateMetaTag("og:image",this.previewImageUrl),this.updateMetaTag("twitter:image",this.previewImageUrl)}updateMetaTag(e,t){let i=document.querySelector(`meta[property="${e}"]`)||document.querySelector(`meta[name="${e}"]`);i?i.setAttribute("content",t):(i=document.createElement("meta"),i.setAttribute(e.includes(":")?"property":"name",e),i.setAttribute("content",t),document.head.appendChild(i))}}const hv=new cv;class uv{constructor(e){this.scene=e,this.comboCount=0,this.lastComboTime=0,this.comboTimeout=1500,this.comboText=null,this.comboParticles=new Rt,this.scene.add(this.comboParticles);const t=document.createElement("canvas"),i=t.getContext("2d");t.width=512,t.height=128,this.textCanvas=t,this.textContext=i;const r=new jt(t),a=new $o({map:r,transparent:!0});this.comboText=new Pp(a),this.comboText.scale.set(4,1,1),this.comboText.visible=!1,this.scene.add(this.comboText)}getComboMultiplier(){return this.comboCount<2?1:Math.min(1+(this.comboCount-1)*.5,5)}getComboMultiplierText(){const e=this.getComboMultiplier();return e>1?`${e.toFixed(1)}x`:""}incrementCombo(e,t){const i=Date.now();return i-this.lastComboTime>this.comboTimeout&&(this.comboCount=0),this.comboCount++,this.lastComboTime=i,this.updateComboText(e),this.createComboParticles(e,t),this.getComboMultiplier()}updateComboText(e){if(this.comboCount<2){this.comboText.visible=!1;return}const t=this.textContext;t.clearRect(0,0,this.textCanvas.width,this.textCanvas.height),t.fillStyle="rgba(0, 0, 0, 0.5)",t.fillRect(0,0,this.textCanvas.width,this.textCanvas.height),t.fillStyle=this.getComboColor(),t.strokeStyle="white",t.lineWidth=4,t.font="bold 64px Arial",t.textAlign="center",t.textBaseline="middle";const i=`${this.comboCount}x COMBO!`,r=this.textCanvas.width/2,a=this.textCanvas.height/2;t.strokeText(i,r,a),t.fillText(i,r,a),this.comboText.material.map.needsUpdate=!0,this.comboText.position.set(0,De-1,0),this.comboText.visible=!0}createComboParticles(e,t){const i=Math.min(this.comboCount*5,20),r=typeof t=="number"?new Xe(t):t;for(let a=0;a<i;a++){const n=new Ue(new Ja(.1,8),new $r({color:r,transparent:!0,opacity:1}));n.position.copy(e);const o=Math.random()*Math.PI*2,l=.1+Math.random()*.2;n.userData.velocity=new D(Math.cos(o)*l,Math.sin(o)*l,0),this.comboParticles.add(n)}}getComboColor(){return this.comboCount>=8?"#FF0000":this.comboCount>=6?"#FF6600":this.comboCount>=4?"#FFCC00":"#FFFFFF"}update(){this.comboText.visible&&Date.now()-this.lastComboTime>this.comboTimeout&&(this.comboText.visible=!1,this.comboCount=0);for(let e=this.comboParticles.children.length-1;e>=0;e--){const t=this.comboParticles.children[e];t.position.add(t.userData.velocity),t.material.opacity*=.95,t.material.opacity<.1&&(t.geometry.dispose(),t.material.dispose(),this.comboParticles.remove(t))}}dispose(){this.comboText&&(this.comboText.material.map.dispose(),this.comboText.material.dispose(),this.scene.remove(this.comboText)),this.comboParticles.children.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.scene.remove(this.comboParticles)}}class dv{constructor(){this.storageKey="aiNoSuikaLeaderboard",this.maxEntries=10,this.scores=this.loadScores()}loadScores(){const e=localStorage.getItem(this.storageKey);return e?JSON.parse(e):[]}saveScores(){localStorage.setItem(this.storageKey,JSON.stringify(this.scores))}addScore(e){const t={score:e,date:new Date().toISOString()},i=this.scores.findIndex(r=>r.score<e);return i===-1?this.scores.push(t):this.scores.splice(i,0,t),this.scores.length>this.maxEntries&&(this.scores=this.scores.slice(0,this.maxEntries)),this.saveScores(),{isHighScore:i===0,rank:i===-1?this.scores.length:i+1,isTopTen:i<this.maxEntries}}createLeaderboardUI(e){const t=document.createElement("div");t.style.marginTop="20px",t.style.marginBottom="30px",t.style.textAlign="center",t.style.color="white",t.style.fontFamily="Arial, sans-serif";const i=document.createElement("h2");i.textContent="High Scores",i.style.marginBottom="15px",t.appendChild(i);const r=document.createElement("div");if(r.style.display="flex",r.style.flexDirection="column",r.style.gap="5px",r.style.maxWidth="300px",r.style.margin="0 auto",r.style.marginBottom="30px",r.style.backgroundColor="rgba(0, 0, 0, 0.5)",r.style.padding="15px",r.style.borderRadius="8px",this.scores.forEach((a,n)=>{const o=document.createElement("div");o.style.display="flex",o.style.justifyContent="space-between",o.style.padding="5px",a.score===e&&(o.style.backgroundColor="rgba(255, 255, 255, 0.2)",o.style.borderRadius="4px");const l=document.createElement("span");l.textContent=`#${n+1}`,l.style.fontWeight="bold";const c=document.createElement("span");c.textContent=a.score.toLocaleString(),o.appendChild(l),o.appendChild(c),r.appendChild(o)}),t.appendChild(r),this.scores.some(a=>a.score===e)){const a=hv.createSocialButtons(e);a.style.marginTop="15px",t.appendChild(a)}return t}}const Po=new dv,Ia=[{name:"Cherry",radius:.4,color:14949143,points:1,emoji:"🍒",stemColor:4878371,shape:"cherry"},{name:"Strawberry",radius:.5,color:16719954,points:2,emoji:"🍓",leafColor:2972199,shape:"strawberry"},{name:"Grape",radius:.6,color:10040319,points:3,emoji:"🍇",shape:"grape"},{name:"Orange",radius:.65,color:16747520,points:4,emoji:"🍊",bumpScale:.05,shape:"orange"},{name:"Apple",radius:.85,color:16711680,points:5,emoji:"🍎",stemColor:4878371,shape:"apple"},{name:"Pear",radius:.95,color:16766720,points:6,emoji:"🍐",shape:"pear"},{name:"Peach",radius:1.2,color:16763812,points:7,emoji:"🍑",shape:"peach"},{name:"Pumpkin",radius:1.4,color:16741656,points:8,emoji:"🎃",stemColor:2263842,shape:"pumpkin"},{name:"Melon",radius:1.6,color:10026904,points:9,emoji:"🍈",stripeColor:2263842,shape:"melon"},{name:"Watermelon",radius:1.8,color:47917,points:10,emoji:"🍉",stripeColor:25600,shape:"watermelon"}];class pv{constructor(){this.fruits=[],this.currentFruit=null,this.mousePosition=new le,this.mouseDown=!1,this.gameOver=!1,this.musicPlaying=!1,this.dropCooldown=!1,this.textureManager=new av,this.scoreManager=new nv,this.lastDropTime=0,this.gameStarted=!1,this.animationFrameId=null,this.fruitFactory=null,this.lastTimestamp=0,this.recentFruits=[],this.maxRecentFruits=3,this.comboSystem=null}init(){this.scene=new Cp,this.camera=new Bt(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,De/2,7),this.camera.lookAt(0,De/2,0),this.setupLighting(),this.renderer=new Jo({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(1710618),document.body.appendChild(this.renderer.domElement),Ni.init(),this.initPhysics(),this.fruitFactory=new lv(this.world,this.fruitMaterial,this.textureManager,this.scene),this.camera.position.set(0,De/2,12),this.camera.lookAt(0,De/2,0),this.createContainer(),this.nextFruitType=this.getRandomSmallFruit(),this.scoreManager.updateScore(0),this.raycaster=new yf,this.mousePlane=new Li(new D(0,0,1),0),this.intersectionPoint=new D,window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("mousemove",e=>this.onMouseMove(e)),window.addEventListener("click",()=>this.dropFruit()),this.comboSystem=new uv(this.scene),this.animate(0)}initPhysics(){this.world=new Gg({gravity:new y(0,-25,0)}),this.fruitMaterial=new Er("fruit"),this.wallMaterial=new Er("wall");const e=new br(this.fruitMaterial,this.wallMaterial,{friction:.35,restitution:.25});this.world.addContactMaterial(e);const t=new br(this.fruitMaterial,this.fruitMaterial,{friction:.5,restitution:.15,contactEquationStiffness:1e6,contactEquationRelaxation:3,frictionEquationStiffness:1e6,frictionEquationRelaxation:3});this.world.addContactMaterial(t),this.world.solver.iterations=20,this.world.solver.tolerance=.001,this.createContainerWalls()}createContainerWalls(){console.log("Creating container walls");const e=this.createWall(new y(0,0,0),new y(mt/2+.5,.5,.5),this.wallMaterial);e.isWall=!0;const t=this.createWall(new y(-6/2-.5,De/2,0),new y(.5,De/2,.5),this.wallMaterial);t.isWall=!0;const i=this.createWall(new y(mt/2+.5,De/2,0),new y(.5,De/2,.5),this.wallMaterial);i.isWall=!0;const r=this.createWall(new y(0,De/2,-4/2),new y(mt/2+.5,De/2,.5),this.wallMaterial);r.isWall=!0;const a=new Le({type:Le.STATIC,shape:new Mr(new y(mt*2,.1,Ut*2)),position:new y(0,-5,0),material:this.wallMaterial,isTrigger:!0,collisionResponse:!1});a.isSensor=!0,this.world.addBody(a),this.floorSensor=a}createWall(e,t,i=this.world.defaultMaterial){const r=new Mr(t),a=new Le({mass:0,shape:r,material:i,position:e});return a.isWall=!0,this.world.addBody(a),a}setupLighting(){const e=new _f(16777215,ev);e.position.set(5,10,5),e.castShadow=!0,this.scene.add(e);const t=new xf(16777215,tv);this.scene.add(t);const i=new gf(16777215,iv,15);i.position.set(0,De,2),this.scene.add(i);const r=new ff(16777215,rv);r.position.set(0,De+3,5),r.angle=Math.PI/4,r.penumbra=.1,r.decay=2,r.distance=20,r.target.position.set(0,De/2,0),this.scene.add(r),this.scene.add(r.target)}createContainer(){const e=new Le({type:Le.STATIC,material:this.wallMaterial}),t=new Mr(new y(mt/2,.2,Ut/2));e.addShape(t,new y(0,0,0)),e.position.set(0,0,0),e.isWall=!0,this.world.addBody(e),this.createWall(new y(-3.2,De/2,0),new y(.2,De/2,Ut/2)),this.createWall(new y(mt/2+.2,De/2,0),new y(.2,De/2,Ut/2)),this.createWall(new y(0,De/2,-4/2),new y(mt/2+.2,De/2,.2)),this.createPaperBag()}createPaperBag(){const e=this.textureManager.paperTexture,t=new oi({color:Kg,metalness:0,roughness:.7,map:e,side:Wi,emissive:Zg,emissiveIntensity:Jg}),i=new Ue(new Ar(mt,.1,Ut),t);i.position.set(0,.05,0),this.scene.add(i);const r=new Ue(new ci(Ut,De),t);r.position.set(-6/2,De/2,0),r.rotation.y=Math.PI/2,this.scene.add(r);const a=new Ue(new ci(Ut,De),t);a.position.set(mt/2,De/2,0),a.rotation.y=-Math.PI/2,this.scene.add(a);const n=new Ue(new ci(mt,De),t);n.position.set(0,De/2,-4/2),this.scene.add(n);const o=.6,l=new Ue(new ci(Ut,o),t);l.position.set(-6/2,De+o/2,0),l.rotation.y=Math.PI/2,l.rotation.x=Math.PI/8,this.scene.add(l);const c=new Ue(new ci(Ut,o),t);c.position.set(mt/2,De+o/2,0),c.rotation.y=-Math.PI/2,c.rotation.x=Math.PI/8,this.scene.add(c);const h=new Ue(new ci(mt,o),t);h.position.set(0,De+o/2,-4/2),h.rotation.x=Math.PI/8,this.scene.add(h);const d=(u,f,g,v,m,p)=>{const _=new Ue(new ci(u,f),new $r({color:8084284,transparent:!0,opacity:.3,side:Wi}));_.position.set(g,v,m),_.rotation.y=p||0,this.scene.add(_)};d(mt/2,.05,-6/4,De/2,-4/2+.01),d(mt/2,.05,mt/4,De/2,-4/2+.01),d(Ut/2,.05,-6/2-.01,De/2,-4/4,Math.PI/2),d(Ut/2,.05,-6/2-.01,De/2,Ut/4,Math.PI/2),d(Ut/2,.05,mt/2+.01,De/2,-4/4,Math.PI/2),d(Ut/2,.05,mt/2+.01,De/2,Ut/4,Math.PI/2)}getRandomSmallFruit(){const e=Ia.slice(0,3);if(this.recentFruits.length>0){const i=this.recentFruits[0],r=e.filter(n=>n.name!==i.name),a=r[Math.floor(Math.random()*r.length)];return this.recentFruits.unshift({name:a.name}),this.recentFruits.length>this.maxRecentFruits&&this.recentFruits.pop(),a}const t=e[Math.floor(Math.random()*e.length)];return this.recentFruits.unshift({name:t.name}),t}updateScore(e){this.scoreManager.updateScore(e)}createFruitGeometry(e){switch(e.shape){case"cherry":return this.fruitFactory.createFruitGeometry(e);case"strawberry":return this.fruitFactory.createFruitGeometry(e);case"orange":return this.fruitFactory.createFruitGeometry(e);case"watermelon":return this.fruitFactory.createFruitGeometry(e);case"grape":return this.fruitFactory.createFruitGeometry(e);case"apple":return this.fruitFactory.createFruitGeometry(e);case"pear":return this.fruitFactory.createFruitGeometry(e);case"peach":return this.fruitFactory.createFruitGeometry(e);case"melon":return this.fruitFactory.createFruitGeometry(e);case"pumpkin":return this.fruitFactory.createFruitGeometry(e);default:{const t=new zt(e.radius,32,32),i=new Dt({color:e.color});return new Ue(t,i)}}}createFruitBody(e,t,i=!1,r){this.world||(console.log("World not initialized, initializing physics first"),this.initPhysics());let a,n;return a=new Ha(e),this.world?(n=new Le({mass:1,shape:a,position:new y(t.x,t.y,0),material:this.fruitMaterial,linearDamping:.1,angularDamping:.05,collisionFilterGroup:i?0:1,collisionFilterMask:i?0:1}),n.lastCollisionTime=0,n.collisionCooldown=100,n.creationTime=Date.now(),n.addEventListener("collide",o=>{if(!this.world)return;n.velocity.z=0,n.position.z=0;const l=Date.now();o.body&&o.body.material===this.wallMaterial&&l-n.lastCollisionTime>n.collisionCooldown&&(typeof Ni<"u"&&Ni&&Ni.playSound("hit"),n.lastCollisionTime=l)}),this.world.addBody(n),n):(console.error("Failed to create physics body - world is null"),{position:new y(t.x,t.y,0),quaternion:new ot,velocity:new y(0,0,0),angularVelocity:new y(0,0,0),type:0,addEventListener:()=>{},fixedRotation:!1,updateMassProperties:()=>{}})}createFruit(e,t,i=!1){if(!this.scene)return console.error("Scene is not initialized - cannot create fruit"),{mesh:{position:t,quaternion:new Ui},body:{position:new y(t.x,t.y,0),quaternion:new ot,velocity:new y(0,0,0),angularVelocity:new y(0,0,0),type:0,addEventListener:()=>{}},type:e};try{const r=this.createFruitGeometry(e);r.position.copy(t);const a=this.createFruitBody(e.radius,t,i,e);i&&r.traverse(o=>{o.isMesh&&o.material&&(o.material=o.material.clone(),o.material.transparent=!0,o.material.opacity=.7)}),this.scene&&this.scene.add(r);const n={mesh:r,body:a,type:e,dropTime:null};return i||this.fruits.push(n),n}catch(r){return console.error("Error creating fruit:",r),{mesh:{position:t,quaternion:new Ui},body:{position:new y(t.x,t.y,0),quaternion:new ot,velocity:new y(0,0,0),angularVelocity:new y(0,0,0),type:0,addEventListener:()=>{}},type:e}}}checkFruitCombinations(){let e=0;const t=new Set;for(let i=0;i<this.fruits.length;i++){const r=this.fruits[i];if(!(!r.body||!r.mesh))for(let a=i+1;a<this.fruits.length;a++){const n=this.fruits[a];if(!n.body||!n.mesh)continue;const o=`${r.id}-${n.id}`;if(!t.has(o)&&r.mesh.position.distanceTo(n.mesh.position)<r.type.radius+n.type.radius&&r.type.name===n.type.name){t.add(o);const l=new D().addVectors(r.mesh.position,n.mesh.position).multiplyScalar(.5);this.removeFruit(r),this.removeFruit(n);const c=Ia[Ia.findIndex(h=>h.name===r.type.name)+1];if(c){this.createFruit(c,l),e++;const h=this.comboSystem.incrementCombo(l,c.color),d=c.points,u=Math.floor(d*(h-1));this.scoreManager.addPoints(d+u),Ni.playMergeSound()}}}}return e}checkGameOver(){const e=this.fruits.some(i=>{const r=i.body.position.y>Yg,a=i.body.velocity.lengthSquared()<.1,n=Date.now()-i.body.creationTime<1e3;return r&&a&&!n}),t=this.fruits.some(i=>i.body.position.y<-2||i.body.position.y<0&&Math.abs(i.body.position.x)>mt/2+.5);(e||t)&&!this.gameOver&&(this.gameOver=!0,console.log("Game over triggered"),console.log(t?"Game over caused by fruit falling out of container":"Game over caused by fruit above height limit"),this.showGameOverScreen())}showGameOverScreen(){const e=document.getElementById("game-over");e.innerHTML="",e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.justifyContent="center",e.style.color="white",e.style.backgroundColor="rgba(0, 0, 0, 0.7)";const t=document.createElement("h1");t.innerText="Game Over",t.style.color="white",t.style.marginBottom="10px";const i=this.scoreManager.getCurrentScore(),r=document.createElement("div");r.innerText=`Final Score: ${i}`,r.style.fontSize="24px",r.style.margin="10px 0",r.style.color="white";const a=Po.addScore(i),n=document.createElement("div");a.isHighScore?(n.innerText="🏆 New High Score! 🏆",n.style.color="#FFD700"):a.isTopTen&&(n.innerText=`🌟 Top ${a.rank} Score! 🌟`,n.style.color="#FFA500"),n.style.fontSize="20px",n.style.marginBottom="10px";const o=document.createElement("button");o.id="restart-button",o.innerText="Play Again",o.style.marginTop="10px",o.style.marginBottom="40px",o.style.padding="12px 30px",o.style.fontSize="18px",o.style.backgroundColor="#4CAF50",o.style.color="white",o.style.border="none",o.style.borderRadius="8px",o.style.cursor="pointer",o.style.transition="background-color 0.3s",e.appendChild(t),e.appendChild(r),(a.isHighScore||a.isTopTen)&&e.appendChild(n);const l=Po.createLeaderboardUI(i);e.appendChild(l),e.appendChild(o),o.addEventListener("click",()=>{location.reload()})}preventBottomClipping(){for(const e of this.fruits)if(e.body&&e.body.position.y<.5&&e.body.velocity.y<=.1){const t=.05+Math.max(0,.5-e.body.position.y)*.2;e.body.applyForce(new y(0,t,0),e.body.position),e.body.position.y<.05&&(e.body.position.y=.05,e.body.velocity.y<0&&(e.body.velocity.y=0))}}stabilizeStackedFruits(){for(const e of this.fruits){if(!e.body||e.dropTime&&Date.now()-e.dropTime<2e3)continue;const t=e.body.velocity.length(),i=e.body.angularVelocity.length();let r=0,a=!1,n=!1;if(e.body.world&&e.body.world.contacts)for(let o=0;o<e.body.world.contacts.length;o++){const l=e.body.world.contacts[o];if(l.bi===e.body||l.bj===e.body){r++,l.bi===e.body?l.bj:l.bi;const c=l.ni.y;c>.7?a=!0:Math.abs(c)<.3&&(n=!0)}}t<.3&&a&&n&&r>=3&&(e.body.linearDamping=.9,e.body.angularDamping=.9,t>.1&&e.body.velocity.scale(.9,e.body.velocity),i>.3&&e.body.angularVelocity.scale(.8,e.body.angularVelocity),e.body.position.y<De/4&&Date.now()-e.dropTime>5e3&&r>4&&(e.body.velocity.scale(.5,e.body.velocity),e.body.angularVelocity.scale(.5,e.body.angularVelocity)))}}dispose(){console.log("Disposing game resources"),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),window.removeEventListener("mousemove",this.onMouseMoveBound),document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("click",this.clickHandler),window.removeEventListener("resize",this.onWindowResizeBound),this.scene&&this.scene.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>{t.map&&t.map.dispose(),t.dispose()}):(e.material.map&&e.material.map.dispose(),e.material.dispose()))}),this.renderer&&(this.renderer.dispose(),document.body.removeChild(this.renderer.domElement)),this.comboSystem&&this.comboSystem.dispose(),this.fruits=[],this.currentFruit=null}removeFruit(e){this.scene.remove(e.mesh),this.world.removeBody(e.body),this.fruits=this.fruits.filter(t=>t!==e)}spawnFruit(){if(this.gameOver||this.currentFruit)return;this.nextFruitType||this.generateNextFruit();let e=0;if(this.intersectionPoint){const i=this.nextFruitType?this.nextFruitType.radius:.5,r=mt/2-i;e=Math.max(-r,Math.min(r,this.intersectionPoint.x))}const t=new D(e,De+1,0);this.currentFruit=this.fruitFactory.createFruit(this.nextFruitType,t,!0),this.currentFruit.body.type=Le.KINEMATIC,this.currentFruit.body.velocity.set(0,0,0),this.currentFruit.body.angularVelocity.set(0,0,0),this.generateNextFruit()}initDebugPanel(){}onMouseMove(e){if(this.gameOver)return;this.mousePosition.x=e.clientX/window.innerWidth*2-1,this.mousePosition.y=-(e.clientY/window.innerHeight*2-1),this.raycaster.setFromCamera(this.mousePosition,this.camera),this.raycaster.ray.intersectPlane(this.mousePlane,this.intersectionPoint);const t=this.nextFruitType?this.nextFruitType.radius:.5,i=mt/2-t,r=Math.max(-i,Math.min(i,this.intersectionPoint.x));if(this.currentFruit)this.currentFruit.mesh.position.x=r,this.currentFruit.body.position.x=r,this.currentFruit.mesh.position.y=De+1,this.currentFruit.mesh.position.z=0,this.currentFruit.body.position.y=De+1,this.currentFruit.body.position.z=0;else{const a=new D(r,De+1,0);this.currentFruit=this.fruitFactory.createFruit(this.nextFruitType,a,!0),this.currentFruit.body.type=Le.KINEMATIC,this.currentFruit.body.velocity.set(0,0,0),this.currentFruit.body.angularVelocity.set(0,0,0)}}dropFruit(){if(this.gameOver||this.dropCooldown)return;const e=Date.now();if(!(e-this.lastDropTime<jg)&&this.currentFruit){this.dropCooldown=!0,this.lastDropTime=e;try{this.currentFruit.body.type=Le.DYNAMIC,this.currentFruit.body.collisionFilterGroup=1,this.currentFruit.body.collisionFilterMask=1,this.currentFruit.body.angularDamping=.1,this.currentFruit.dropTime=e,this.currentFruit.mesh&&typeof this.currentFruit.mesh.traverse=="function"&&this.currentFruit.mesh.traverse(t=>{t.isMesh&&t.material&&(t.material=t.material.clone(),t.material.opacity=1)}),this.currentFruit.body.position.z=0,this.currentFruit.mesh&&(this.currentFruit.mesh.position.z=0),this.currentFruit.body.velocity.set(0,-1,0),this.currentFruit.body.angularVelocity.set(0,0,(Math.random()-.5)*10),this.currentFruit.body.fixedRotation=!1,typeof this.currentFruit.body.updateMassProperties=="function"&&this.currentFruit.body.updateMassProperties(),Ni.playDropSound(),this.fruits.push(this.currentFruit),this.currentFruit=null,setTimeout(()=>{this.dropCooldown=!1,this.gameOver||this.spawnFruit()},Ro)}catch(t){console.error("Error dropping fruit:",t),this.currentFruit=null,setTimeout(()=>{this.dropCooldown=!1,this.gameOver||this.spawnFruit()},Ro)}}}onWindowResize(){this.gameOver||(this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight))}animate(e){if(this.gameOver)return;this.animationFrameId=requestAnimationFrame(i=>this.animate(i)),this.lastTimestamp||(this.lastTimestamp=e||0);const t=e?Math.min((e-this.lastTimestamp)/1e3,.1):1/60;if(this.lastTimestamp=e||0,this.world){this.world.step(.016666666666666666,t,3);for(const i of this.fruits)i.body.position.z!==0&&(i.body.position.z=0,i.mesh.position.z=0),i.body.velocity.z!==0&&(i.body.velocity.z=0);for(const i of this.fruits)i.body&&i.mesh&&(i.mesh.position.copy(i.body.position),i.mesh.quaternion.copy(i.body.quaternion))}this.fruitFactory.update(),this.checkFruitCombinations(),this.checkGameOver(),this.preventBottomClipping(),this.stabilizeStackedFruits(),this.comboSystem&&this.comboSystem.update(),this.renderer.render(this.scene,this.camera)}generateNextFruit(){const e=this.nextFruitType;do this.nextFruitType=this.getRandomSmallFruit();while(e&&this.nextFruitType.name===e.name);const t=document.getElementById("next-fruit");if(t){for(;t.firstChild;)t.removeChild(t.firstChild);t.textContent=`Next: ${this.nextFruitType.name}`}}}let Oa;document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("score"),e=document.getElementById("next-fruit");s.textContent="Score: 0",s.style.display="block",e.style.display="block",Oa=new pv,Oa.init(),Oa.animate(0);const t=()=>{Ni.init(),Ni.playBackgroundMusic(),document.removeEventListener("click",t),document.removeEventListener("touchstart",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("touchstart",t),document.addEventListener("keydown",t)});
//# sourceMappingURL=index-BuU3ID9_.js.map
