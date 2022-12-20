/*!
 * md5.js
 */
function md5(string){var x=Array();var k,AA,BB,CC,DD,a,b,c,d;var S11=7,S12=12,S13=17,S14=22;var S21=5,S22=9,S23=14,S24=20;var S31=4,S32=11,S33=16,S34=23;var S41=6,S42=10,S43=15,S44=21;string=Utf8Encode(string);x=ConvertToWordArray(string);a=1732584193;b=4023233417;c=2562383102;d=271733878;for(k=0;k<x.length;k+=16){AA=a;BB=b;CC=c;DD=d;a=FF(a,b,c,d,x[k+0],S11,3614090360);d=FF(d,a,b,c,x[k+1],S12,3905402710);c=FF(c,d,a,b,x[k+2],S13,606105819);b=FF(b,c,d,a,x[k+3],S14,3250441966);a=FF(a,b,c,d,x[k+4],S11,4118548399);d=FF(d,a,b,c,x[k+5],S12,1200080426);c=FF(c,d,a,b,x[k+6],S13,2821735955);b=FF(b,c,d,a,x[k+7],S14,4249261313);a=FF(a,b,c,d,x[k+8],S11,1770035416);d=FF(d,a,b,c,x[k+9],S12,2336552879);c=FF(c,d,a,b,x[k+10],S13,4294925233);b=FF(b,c,d,a,x[k+11],S14,2304563134);a=FF(a,b,c,d,x[k+12],S11,1804603682);d=FF(d,a,b,c,x[k+13],S12,4254626195);c=FF(c,d,a,b,x[k+14],S13,2792965006);b=FF(b,c,d,a,x[k+15],S14,1236535329);a=GG(a,b,c,d,x[k+1],S21,4129170786);d=GG(d,a,b,c,x[k+6],S22,3225465664);c=GG(c,d,a,b,x[k+11],S23,643717713);b=GG(b,c,d,a,x[k+0],S24,3921069994);a=GG(a,b,c,d,x[k+5],S21,3593408605);d=GG(d,a,b,c,x[k+10],S22,38016083);c=GG(c,d,a,b,x[k+15],S23,3634488961);b=GG(b,c,d,a,x[k+4],S24,3889429448);a=GG(a,b,c,d,x[k+9],S21,568446438);d=GG(d,a,b,c,x[k+14],S22,3275163606);c=GG(c,d,a,b,x[k+3],S23,4107603335);b=GG(b,c,d,a,x[k+8],S24,1163531501);a=GG(a,b,c,d,x[k+13],S21,2850285829);d=GG(d,a,b,c,x[k+2],S22,4243563512);c=GG(c,d,a,b,x[k+7],S23,1735328473);b=GG(b,c,d,a,x[k+12],S24,2368359562);a=HH(a,b,c,d,x[k+5],S31,4294588738);d=HH(d,a,b,c,x[k+8],S32,2272392833);c=HH(c,d,a,b,x[k+11],S33,1839030562);b=HH(b,c,d,a,x[k+14],S34,4259657740);a=HH(a,b,c,d,x[k+1],S31,2763975236);d=HH(d,a,b,c,x[k+4],S32,1272893353);c=HH(c,d,a,b,x[k+7],S33,4139469664);b=HH(b,c,d,a,x[k+10],S34,3200236656);a=HH(a,b,c,d,x[k+13],S31,681279174);d=HH(d,a,b,c,x[k+0],S32,3936430074);c=HH(c,d,a,b,x[k+3],S33,3572445317);b=HH(b,c,d,a,x[k+6],S34,76029189);a=HH(a,b,c,d,x[k+9],S31,3654602809);d=HH(d,a,b,c,x[k+12],S32,3873151461);c=HH(c,d,a,b,x[k+15],S33,530742520);b=HH(b,c,d,a,x[k+2],S34,3299628645);a=II(a,b,c,d,x[k+0],S41,4096336452);d=II(d,a,b,c,x[k+7],S42,1126891415);c=II(c,d,a,b,x[k+14],S43,2878612391);b=II(b,c,d,a,x[k+5],S44,4237533241);a=II(a,b,c,d,x[k+12],S41,1700485571);d=II(d,a,b,c,x[k+3],S42,2399980690);c=II(c,d,a,b,x[k+10],S43,4293915773);b=II(b,c,d,a,x[k+1],S44,2240044497);a=II(a,b,c,d,x[k+8],S41,1873313359);d=II(d,a,b,c,x[k+15],S42,4264355552);c=II(c,d,a,b,x[k+6],S43,2734768916);b=II(b,c,d,a,x[k+13],S44,1309151649);a=II(a,b,c,d,x[k+4],S41,4149444226);d=II(d,a,b,c,x[k+11],S42,3174756917);c=II(c,d,a,b,x[k+2],S43,718787259);b=II(b,c,d,a,x[k+9],S44,3951481745);a=AddUnsigned(a,AA);b=AddUnsigned(b,BB);c=AddUnsigned(c,CC);d=AddUnsigned(d,DD)}var cpro_psid="u2572954";var cpro_pswidth=966;var cpro_psheight=120;var temp=WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);return temp.toUpperCase()}function RotateLeft(lValue,iShiftBits){return(lValue<<iShiftBits)|(lValue>>>(32-iShiftBits))}function AddUnsigned(lX,lY){var lX4,lY4,lX8,lY8,lResult;lX8=(lX&2147483648);lY8=(lY&2147483648);lX4=(lX&1073741824);lY4=(lY&1073741824);lResult=(lX&1073741823)+(lY&1073741823);if(lX4&lY4){return(lResult^2147483648^lX8^lY8)}if(lX4|lY4){if(lResult&1073741824){return(lResult^3221225472^lX8^lY8)}else{return(lResult^1073741824^lX8^lY8)}}else{return(lResult^lX8^lY8)}}function F(x,y,z){return(x&y)|((~x)&z)}function G(x,y,z){return(x&z)|(y&(~z))}function H(x,y,z){return(x^y^z)}function I(x,y,z){return(y^(x|(~z)))}function FF(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(F(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b)}function GG(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(G(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b)}function HH(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(H(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b)}function II(a,b,c,d,x,s,ac){a=AddUnsigned(a,AddUnsigned(AddUnsigned(I(b,c,d),x),ac));return AddUnsigned(RotateLeft(a,s),b)}function ConvertToWordArray(string){var lWordCount;var lMessageLength=string.length;var lNumberOfWords_temp1=lMessageLength+8;var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1%64))/64;var lNumberOfWords=(lNumberOfWords_temp2+1)*16;var lWordArray=Array(lNumberOfWords-1);var lBytePosition=0;var lByteCount=0;while(lByteCount<lMessageLength){lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=(lWordArray[lWordCount]|(string.charCodeAt(lByteCount)<<lBytePosition));lByteCount++}lWordCount=(lByteCount-(lByteCount%4))/4;lBytePosition=(lByteCount%4)*8;lWordArray[lWordCount]=lWordArray[lWordCount]|(128<<lBytePosition);lWordArray[lNumberOfWords-2]=lMessageLength<<3;lWordArray[lNumberOfWords-1]=lMessageLength>>>29;return lWordArray}function WordToHex(lValue){var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;for(lCount=0;lCount<=3;lCount++){lByte=(lValue>>>(lCount*8))&255;WordToHexValue_temp="0"+lByte.toString(16);WordToHexValue=WordToHexValue+WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2)}return WordToHexValue}function Utf8Encode(string){var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c)}else{if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128)}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128)}}}return utftext};

/*!
 * aes.js
 */
!function(t,n){"object"==typeof exports?module.exports=exports=n():"function"==typeof define&&define.amd?define([],n):t.CryptoJS=n()}(this,function(){var t=t||function(t,n){var i=Object.create||function(){function t(){}return function(n){var i;return t.prototype=n,i=new t,t.prototype=null,i}}(),e={},r=e.lib={},o=r.Base=function(){return{extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=r.WordArray=o.extend({init:function(t,i){t=this.words=t||[],i!=n?this.sigBytes=i:this.sigBytes=4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,i=t.words,e=this.sigBytes,r=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<r;o++){var s=i[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(var o=0;o<r;o+=4)n[e+o>>>2]=i[o>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,i=this.sigBytes;n[i>>>2]&=4294967295<<32-i%4*8,n.length=t.ceil(i/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var i,e=[],r=function(n){var n=n,i=987654321,e=4294967295;return function(){i=36969*(65535&i)+(i>>16)&e,n=18e3*(65535&n)+(n>>16)&e;var r=(i<<16)+n&e;return r/=4294967296,r+=.5,r*(t.random()>.5?1:-1)}},o=0;o<n;o+=4){var a=r(4294967296*(i||t.random()));i=987654071*a(),e.push(4294967296*a()|0)}return new s.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e+=2)i[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new s.init(i,n/2)}},u=a.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e++)i[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new s.init(i,n)}},f=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},h=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var i=this._data,e=i.words,r=i.sigBytes,o=this.blockSize,a=4*o,c=r/a;c=n?t.ceil(c):t.max((0|c)-this._minBufferSize,0);var u=c*o,f=t.min(4*u,r);if(u){for(var h=0;h<u;h+=o)this._doProcessBlock(e,h);var p=e.splice(0,u);i.sigBytes-=f}return new s.init(p,f)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(r.Hasher=h.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var n=this._doFinalize();return n},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new p.HMAC.init(t,i).finalize(n)}}}),e.algo={});return e}(Math);return t});
//# sourceMappingURL=core.min.js.map
!function(e,t,i){"object"==typeof exports?module.exports=exports=t(require("./core.min"),require("./sha1.min"),require("./hmac.min")):"function"==typeof define&&define.amd?define(["./core.min","./sha1.min","./hmac.min"],t):t(e.CryptoJS)}(this,function(e){return function(){var t=e,i=t.lib,r=i.Base,n=i.WordArray,o=t.algo,a=o.MD5,c=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var i=this.cfg,r=i.hasher.create(),o=n.create(),a=o.words,c=i.keySize,f=i.iterations;a.length<c;){s&&r.update(s);var s=r.update(e).finalize(t);r.reset();for(var u=1;u<f;u++)s=r.finalize(s),r.reset();o.concat(s)}return o.sigBytes=4*c,o}});t.EvpKDF=function(e,t,i){return c.create(i).compute(e,t)}}(),e.EvpKDF});
//# sourceMappingURL=evpkdf.min.js.map
!function(r,e){"object"==typeof exports?module.exports=exports=e(require("./core.min")):"function"==typeof define&&define.amd?define(["./core.min"],e):e(r.CryptoJS)}(this,function(r){return function(){function e(r,e,t){for(var n=[],i=0,o=0;o<e;o++)if(o%4){var f=t[r.charCodeAt(o-1)]<<o%4*2,c=t[r.charCodeAt(o)]>>>6-o%4*2;n[i>>>2]|=(f|c)<<24-i%4*8,i++}return a.create(n,i)}var t=r,n=t.lib,a=n.WordArray,i=t.enc;i.Base64={stringify:function(r){var e=r.words,t=r.sigBytes,n=this._map;r.clamp();for(var a=[],i=0;i<t;i+=3)for(var o=e[i>>>2]>>>24-i%4*8&255,f=e[i+1>>>2]>>>24-(i+1)%4*8&255,c=e[i+2>>>2]>>>24-(i+2)%4*8&255,s=o<<16|f<<8|c,h=0;h<4&&i+.75*h<t;h++)a.push(n.charAt(s>>>6*(3-h)&63));var p=n.charAt(64);if(p)for(;a.length%4;)a.push(p);return a.join("")},parse:function(r){var t=r.length,n=this._map,a=this._reverseMap;if(!a){a=this._reverseMap=[];for(var i=0;i<n.length;i++)a[n.charCodeAt(i)]=i}var o=n.charAt(64);if(o){var f=r.indexOf(o);f!==-1&&(t=f)}return e(r,t,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64});
//# sourceMappingURL=enc-base64.min.js.map
!function(e,t,r){"object"==typeof exports?module.exports=exports=t(require("./core.min"),require("./evpkdf.min")):"function"==typeof define&&define.amd?define(["./core.min","./evpkdf.min"],t):t(e.CryptoJS)}(this,function(e){e.lib.Cipher||function(t){var r=e,i=r.lib,n=i.Base,c=i.WordArray,o=i.BufferedBlockAlgorithm,s=r.enc,a=(s.Utf8,s.Base64),f=r.algo,p=f.EvpKDF,d=i.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){e&&this._append(e);var t=this._doFinalize();return t},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?B:x}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()}),h=(i.StreamCipher=d.extend({_doFinalize:function(){var e=this._process(!0);return e},blockSize:1}),r.mode={}),u=i.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),l=h.CBC=function(){function e(e,r,i){var n=this._iv;if(n){var c=n;this._iv=t}else var c=this._prevBlock;for(var o=0;o<i;o++)e[r+o]^=c[o]}var r=u.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize;e.call(this,t,r,n),i.encryptBlock(t,r),this._prevBlock=t.slice(r,r+n)}}),r.Decryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,c=t.slice(r,r+n);i.decryptBlock(t,r),e.call(this,t,r,n),this._prevBlock=c}}),r}(),_=r.pad={},v=_.Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(n);var a=c.create(o,i);e.concat(a)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},y=(i.BlockCipher=d.extend({cfg:d.cfg.extend({mode:l,padding:v}),reset:function(){d.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=r.createEncryptor;else{var i=r.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==i?this._mode.init(this,t&&t.words):(this._mode=i.call(r,this,t&&t.words),this._mode.__creator=i)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);var t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),i.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),m=r.format={},k=m.OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)var i=c.create([1398893684,1701076831]).concat(r).concat(t);else var i=t;return i.toString(a)},parse:function(e){var t=a.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var i=c.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:i})}},x=i.SerializableCipher=n.extend({cfg:n.extend({format:k}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),c=n.finalize(t),o=n.cfg;return y.create({ciphertext:c,key:r,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=e.createDecryptor(r,i).finalize(t.ciphertext);return n},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),g=r.kdf={},S=g.OpenSSL={execute:function(e,t,r,i){i||(i=c.random(8));var n=p.create({keySize:t+r}).compute(e,i),o=c.create(n.words.slice(t),4*r);return n.sigBytes=4*t,y.create({key:n,iv:o,salt:i})}},B=i.PasswordBasedCipher=x.extend({cfg:x.cfg.extend({kdf:S}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=i.kdf.execute(r,e.keySize,e.ivSize);i.iv=n.iv;var c=x.encrypt.call(this,e,t,n.key,i);return c.mixIn(n),c},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);i.iv=n.iv;var c=x.decrypt.call(this,e,t,n.key,i);return c}})}()});
//# sourceMappingURL=cipher-core.min.js.map
!function(e,i){"object"==typeof exports?module.exports=exports=i(require("./core.min")):"function"==typeof define&&define.amd?define(["./core.min"],i):i(e.CryptoJS)}(this,function(e){!function(){var i=e,t=i.lib,n=t.Base,s=i.enc,r=s.Utf8,o=i.algo;o.HMAC=n.extend({init:function(e,i){e=this._hasher=new e.init,"string"==typeof i&&(i=r.parse(i));var t=e.blockSize,n=4*t;i.sigBytes>n&&(i=e.finalize(i)),i.clamp();for(var s=this._oKey=i.clone(),o=this._iKey=i.clone(),a=s.words,f=o.words,c=0;c<t;c++)a[c]^=1549556828,f[c]^=909522486;s.sigBytes=o.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var i=this._hasher,t=i.finalize(e);i.reset();var n=i.finalize(this._oKey.clone().concat(t));return n}})}()});
//# sourceMappingURL=hmac.min.js.map
!function(e,o,r){"object"==typeof exports?module.exports=exports=o(require("./core.min"),require("./cipher-core.min")):"function"==typeof define&&define.amd?define(["./core.min","./cipher-core.min"],o):o(e.CryptoJS)}(this,function(e){return e.mode.ECB=function(){var o=e.lib.BlockCipherMode.extend();return o.Encryptor=o.extend({processBlock:function(e,o){this._cipher.encryptBlock(e,o)}}),o.Decryptor=o.extend({processBlock:function(e,o){this._cipher.decryptBlock(e,o)}}),o}(),e.mode.ECB});
//# sourceMappingURL=mode-ecb.min.js.map
!function(e,r,i){"object"==typeof exports?module.exports=exports=r(require("./core.min"),require("./cipher-core.min")):"function"==typeof define&&define.amd?define(["./core.min","./cipher-core.min"],r):r(e.CryptoJS)}(this,function(e){return e.pad.Pkcs7});
//# sourceMappingURL=pad-pkcs7.min.js.map
!function(e,r,i){"object"==typeof exports?module.exports=exports=r(require("./core.min"),require("./enc-base64.min"),require("./md5.min"),require("./evpkdf.min"),require("./cipher-core.min")):"function"==typeof define&&define.amd?define(["./core.min","./enc-base64.min","./md5.min","./evpkdf.min","./cipher-core.min"],r):r(e.CryptoJS)}(this,function(e){return function(){var r=e,i=r.lib,n=i.BlockCipher,o=r.algo,t=[],c=[],s=[],f=[],a=[],d=[],u=[],v=[],h=[],y=[];!function(){for(var e=[],r=0;r<256;r++)r<128?e[r]=r<<1:e[r]=r<<1^283;for(var i=0,n=0,r=0;r<256;r++){var o=n^n<<1^n<<2^n<<3^n<<4;o=o>>>8^255&o^99,t[i]=o,c[o]=i;var p=e[i],l=e[p],_=e[l],k=257*e[o]^16843008*o;s[i]=k<<24|k>>>8,f[i]=k<<16|k>>>16,a[i]=k<<8|k>>>24,d[i]=k;var k=16843009*_^65537*l^257*p^16843008*i;u[o]=k<<24|k>>>8,v[o]=k<<16|k>>>16,h[o]=k<<8|k>>>24,y[o]=k,i?(i=p^e[e[e[_^p]]],n^=e[e[n]]):i=n=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],l=o.AES=n.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,r=e.words,i=e.sigBytes/4,n=this._nRounds=i+6,o=4*(n+1),c=this._keySchedule=[],s=0;s<o;s++)if(s<i)c[s]=r[s];else{var f=c[s-1];s%i?i>6&&s%i==4&&(f=t[f>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f]):(f=f<<8|f>>>24,f=t[f>>>24]<<24|t[f>>>16&255]<<16|t[f>>>8&255]<<8|t[255&f],f^=p[s/i|0]<<24),c[s]=c[s-i]^f}for(var a=this._invKeySchedule=[],d=0;d<o;d++){var s=o-d;if(d%4)var f=c[s];else var f=c[s-4];d<4||s<=4?a[d]=f:a[d]=u[t[f>>>24]]^v[t[f>>>16&255]]^h[t[f>>>8&255]]^y[t[255&f]]}}},encryptBlock:function(e,r){this._doCryptBlock(e,r,this._keySchedule,s,f,a,d,t)},decryptBlock:function(e,r){var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i,this._doCryptBlock(e,r,this._invKeySchedule,u,v,h,y,c);var i=e[r+1];e[r+1]=e[r+3],e[r+3]=i},_doCryptBlock:function(e,r,i,n,o,t,c,s){for(var f=this._nRounds,a=e[r]^i[0],d=e[r+1]^i[1],u=e[r+2]^i[2],v=e[r+3]^i[3],h=4,y=1;y<f;y++){var p=n[a>>>24]^o[d>>>16&255]^t[u>>>8&255]^c[255&v]^i[h++],l=n[d>>>24]^o[u>>>16&255]^t[v>>>8&255]^c[255&a]^i[h++],_=n[u>>>24]^o[v>>>16&255]^t[a>>>8&255]^c[255&d]^i[h++],k=n[v>>>24]^o[a>>>16&255]^t[d>>>8&255]^c[255&u]^i[h++];a=p,d=l,u=_,v=k}var p=(s[a>>>24]<<24|s[d>>>16&255]<<16|s[u>>>8&255]<<8|s[255&v])^i[h++],l=(s[d>>>24]<<24|s[u>>>16&255]<<16|s[v>>>8&255]<<8|s[255&a])^i[h++],_=(s[u>>>24]<<24|s[v>>>16&255]<<16|s[a>>>8&255]<<8|s[255&d])^i[h++],k=(s[v>>>24]<<24|s[a>>>16&255]<<16|s[d>>>8&255]<<8|s[255&u])^i[h++];e[r]=p,e[r+1]=l,e[r+2]=_,e[r+3]=k},keySize:8});r.AES=n._createHelper(l)}(),e.AES});
//# sourceMappingURL=aes.min.js.map
!function(e,n){"object"==typeof exports?module.exports=exports=n(require("./core.min")):"function"==typeof define&&define.amd?define(["./core.min"],n):n(e.CryptoJS)}(this,function(e){return e.enc.Utf8});
//# sourceMappingURL=enc-utf8.min.js.map

/*!
 * clipboard.js v2.0.4
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}return r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=o(n(1)),c=o(n(3)),u=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function o(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return n.resolveOptions(e),n.listenClick(t),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,c.default),i(o,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===r(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,u.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return s("action",t)}},{key:"defaultTarget",value:function(t){var e=s("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return s("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),o}();function s(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),a=n(2),c=(o=a)&&o.__esModule?o:{default:o};var u=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,c.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,c.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),e}();t.exports=u},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n},function(t,e,n){var d=n(5),h=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(l=t).addEventListener(s,f),{destroy:function(){l.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,u=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,u)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,u)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,u,l,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(7);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])});

let analysisRequest = {
    sign: function (_data) {
        var sortKeys = Object.keys(_data).sort();
        var url = '';
        for (var i = 0; i < sortKeys.length; i++) {
            url += sortKeys[i] + '=' + _data[sortKeys[i]];
        }
        return md5(md5(url.split("").reverse().join("")).toLocaleLowerCase()).toLocaleLowerCase();
    },
    postAnalysis: function (_url, _data, _callBackFunction) {
        if (_data == null) {
            _data = {};
        }

        var data = _data;
        data.t = new Date().getTime();
        data.sign = this.sign(data);

        var callBack = _callBackFunction;
        $.ajax({
            type: "post",
            url: "https://apppublish.maoerduo2018.com" + _url,
            dataType: "json",
            data: data,
            async: true,
            success: function (data) {
                callBack(data);
            },
            error: function (e) {
                console.log(e);
            }
        });
    },
    setCookie: function (name, value) {
        if (value == '{}') {
            return;
        }

        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/;";
    },
    getCookie: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return '';
    },
    channelEncrypt: function (word) {
        var key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");
        var iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');

        var src = CryptoJS.enc.Utf8.parse(word);
        var encrypted = CryptoJS.AES.encrypt(src, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString().toUpperCase();
    },
    guid: function () {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
    }
}

let analysis = {
    analysisOpen: function (appKey, channel, downloadButtonId, responseCallBack) {
        //write to html body
        if (channel == null || channel.length <= 0) {
            channel = "Unknown";
        }
        let encryptChannel = analysisRequest.channelEncrypt(channel);

        var channelDivId = "a" + analysisRequest.guid() + "_from_channel";
        let channelDiv = '<div id="' + channelDivId + '" style="opacity: 0;">' + encryptChannel + '</div>';
        $(document.body).append(channelDiv);

        let downloadButton = document.getElementById(downloadButtonId);
        if(downloadButton != null) {
            downloadButton.setAttribute("data-clipboard-target", "#" + channelDivId);
            new ClipboardJS(downloadButton);
        }

        //post data
        let data = {
            appKey: appKey,
            channel: channel,
            analysisOpenCookie: analysisRequest.getCookie('analysis_open_cookie')
        };

        analysisRequest.postAnalysis('/api/js/analysisOpen', data, function (response) {
            if (response.base_resp.ret == 0) {
                analysisRequest.setCookie('analysis_open_cookie', JSON.stringify(response.cookie));
            }
            responseCallBack(response);
        });
    },
    analysisDownload: function (appKey, responseCallBack) {
        //post data
        let data = {
            appKey: appKey,
            analysisOpenCookie: analysisRequest.getCookie('analysis_open_cookie'),
            analysisDownloadCookie: analysisRequest.getCookie('analysis_download_cookie')
        };

        analysisRequest.postAnalysis('/api/js/analysisDownload', data, function (response) {
            if (response.base_resp.ret == 0) {
                analysisRequest.setCookie('analysis_download_cookie', JSON.stringify(response.cookie));
            }
            responseCallBack(response);
        });
    },
}

/*
import <script src="appPublish.js"></script>

1,initliaze function
$(function(){
    analysis.analysisOpen('your appKey','your channel','downloadButtonId',function(resp){
        //todo something
    });
});

2,click download event function
$(function(){
    $("#demo_button").click(function(event){
        analysis.analysisDownload('your appkey',function(resp){
            //todo something
        });
    });
});
*/