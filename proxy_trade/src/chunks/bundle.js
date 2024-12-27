System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/index-77658911.js",["./rollupPluginModLoBabelHelpers.js","./index.esm20175.js","./index.esm2017.js","./index.esm20173.js","./tslib.es6.mjs","./index.esm20174.js"],(function(e){var t,r,n,i,s,a,o,u,c,h,p,l,f,d,v,m,g,w,k,y,b,_,x,I,E,T,S,R,P,C,A,N;return{setters:[function(e){t=e.asyncToGenerator,r=e.regeneratorRuntime,n=e.createClass,i=e.inheritsLoose,s=e.assertThisInitialized,a=e.createForOfIteratorHelperLoose},function(e){o=e.ErrorFactory,u=e.getExperimentalSetting,c=e.getModularInstance,h=e.isMobileCordova,p=e.isReactNative,l=e.isBrowserExtension,f=e.getUA,d=e.getDefaultEmulatorHost,v=e.createSubscribe,m=e.deepEqual,g=e.FirebaseError,w=e.querystringDecode,k=e.extractQuerystring,y=e.isIE,b=e.querystring,_=e.base64Decode,x=e.isEmpty},function(e){I=e._registerComponent,E=e.SDK_VERSION,T=e.registerVersion,S=e.getApp,R=e._getProvider},function(e){P=e.LogLevel,C=e.Logger},function(e){A=e.__rest},function(e){N=e.Component}],execute:function(){var O,L;function U(){var e;return(e={})["dependent-sdk-initialized-before-auth"]="Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",e}e({J:bt,K:_t,a1:Xt,aB:K,aC:q,aE:qe,aF:Be,aG:qr,aH:Kr,aJ:lt,aM:at,aN:hr,ab:function(e,n,i){return Xt(c(e),Vt.credential(n,i)).catch(t(r().mark((function t(n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:throw"auth/password-does-not-meet-requirements"===n.code&&Zt(e),n;case 2:case"end":return t.stop()}}),t)}))))},ao:_e,ar:Oe,au:G,av:it,aw:tt,ax:H,ay:wn,az:Xr,o:function(e){void 0===e&&(e=S());var n=R(e,"auth");if(n.isInitialized())return n.getImmediate();var i=bt(e,{popupRedirectResolver:_n,persistence:[Cr,sr,or]}),s=u("authTokenSyncURL");if(s){var a=(o=s,t(r().mark((function e(t){var n,i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t,!e.t0){e.next=5;break}return e.next=4,t.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(n=e.t0,!((i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3)&&i>Sn)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==n?void 0:n.token,Rn!==s){e.next=12;break}return e.abrupt("return");case 12:return Rn=s,e.next=15,fetch(o,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer "+s}:{}});case 15:case"end":return e.stop()}}),e)}))));tr(i,a,(function(){return a(i.currentUser)})),er(i,(function(e){return a(e)}))}var o;var c=d("auth");c&&_t(i,"http://"+c);return i},w:er,x:tr});var M=e("H",U),D=new o("auth","Firebase",U()),V=new C("@firebase/auth");function F(e){if(V.logLevel<=P.WARN){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];V.warn.apply(V,["Auth ("+E+"): "+e].concat(r))}}function j(e){if(V.logLevel<=P.ERROR){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];V.error.apply(V,["Auth ("+E+"): "+e].concat(r))}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function H(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw z.apply(void 0,[e].concat(r))}function K(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return z.apply(void 0,[e].concat(r))}function W(e,t,r){var n,i=Object.assign(Object.assign({},M()),((n={})[t]=r,n));return new o("auth","Firebase",i).create(t,{appName:e.name})}function z(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];if("string"!=typeof e){var i,s=r[0],a=[].concat(r.slice(1));return a[0]&&(a[0].appName=e.name),(i=e._errorFactory).create.apply(i,[s].concat(a))}return D.create.apply(D,[e].concat(r))}function q(e,t){if(!e){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];throw z.apply(void 0,[t].concat(n))}}function J(e){var t="INTERNAL ASSERTION FAILED: "+e;throw j(t),new Error(t)}function G(e,t){e||J(t)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function B(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Y(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function X(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Y()&&"https:"!==Y()&&!l()&&!("connection"in navigator)||navigator.onLine}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
var Q=function(){function e(e,t){this.shortDelay=e,this.longDelay=t,G(t>e,"Short delay should be less than long delay!"),this.isMobile=h()||p()}return e.prototype.get=function(){return X()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)},e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Z(e,t){G(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?""+r+(t.startsWith("/")?t.slice(1):t):r}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var $=e("aP",function(){function e(){}return e.initialize=function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)},e.fetch=function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void J("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")})),e.headers=function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void J("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},e.response=function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void J("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")},e}()),ee=((O={}).CREDENTIAL_MISMATCH="custom-token-mismatch",O.MISSING_CUSTOM_TOKEN="internal-error",O.INVALID_IDENTIFIER="invalid-email",O.MISSING_CONTINUE_URI="internal-error",O.INVALID_PASSWORD="wrong-password",O.MISSING_PASSWORD="missing-password",O.INVALID_LOGIN_CREDENTIALS="invalid-credential",O.EMAIL_EXISTS="email-already-in-use",O.PASSWORD_LOGIN_DISABLED="operation-not-allowed",O.INVALID_IDP_RESPONSE="invalid-credential",O.INVALID_PENDING_TOKEN="invalid-credential",O.FEDERATED_USER_ID_ALREADY_LINKED="credential-already-in-use",O.MISSING_REQ_TYPE="internal-error",O.EMAIL_NOT_FOUND="user-not-found",O.RESET_PASSWORD_EXCEED_LIMIT="too-many-requests",O.EXPIRED_OOB_CODE="expired-action-code",O.INVALID_OOB_CODE="invalid-action-code",O.MISSING_OOB_CODE="internal-error",O.CREDENTIAL_TOO_OLD_LOGIN_AGAIN="requires-recent-login",O.INVALID_ID_TOKEN="invalid-user-token",O.TOKEN_EXPIRED="user-token-expired",O.USER_NOT_FOUND="user-token-expired",O.TOO_MANY_ATTEMPTS_TRY_LATER="too-many-requests",O.PASSWORD_DOES_NOT_MEET_REQUIREMENTS="password-does-not-meet-requirements",O.INVALID_CODE="invalid-verification-code",O.INVALID_SESSION_INFO="invalid-verification-id",O.INVALID_TEMPORARY_PROOF="invalid-credential",O.MISSING_SESSION_INFO="missing-verification-id",O.SESSION_EXPIRED="code-expired",O.MISSING_ANDROID_PACKAGE_NAME="missing-android-pkg-name",O.UNAUTHORIZED_DOMAIN="unauthorized-continue-uri",O.INVALID_OAUTH_CLIENT_ID="invalid-oauth-client-id",O.ADMIN_ONLY_OPERATION="admin-restricted-operation",O.INVALID_MFA_PENDING_CREDENTIAL="invalid-multi-factor-session",O.MFA_ENROLLMENT_NOT_FOUND="multi-factor-info-not-found",O.MISSING_MFA_ENROLLMENT_ID="missing-multi-factor-info",O.MISSING_MFA_PENDING_CREDENTIAL="missing-multi-factor-session",O.SECOND_FACTOR_EXISTS="second-factor-already-in-use",O.SECOND_FACTOR_LIMIT_EXCEEDED="maximum-second-factor-count-exceeded",O.BLOCKING_FUNCTION_ERROR_RESPONSE="internal-error",O.RECAPTCHA_NOT_ENABLED="recaptcha-not-enabled",O.MISSING_RECAPTCHA_TOKEN="missing-recaptcha-token",O.INVALID_RECAPTCHA_TOKEN="invalid-recaptcha-token",O.INVALID_RECAPTCHA_ACTION="invalid-recaptcha-action",O.MISSING_CLIENT_TYPE="missing-client-type",O.MISSING_RECAPTCHA_VERSION="missing-recaptcha-version",O.INVALID_RECAPTCHA_VERSION="invalid-recaptcha-version",O.INVALID_REQ_TYPE="invalid-req-type",O),te=new Q(3e4,6e4);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function re(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function ne(e,t,r,n,i){return ie.apply(this,arguments)}function ie(){return(ie=t(r().mark((function e(n,i,s,a,o){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===o&&(o={}),e.abrupt("return",se(n,o,t(r().mark((function e(){var t,o,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},o={},a&&("GET"===i?o=a:t={body:JSON.stringify(a)}),u=b(Object.assign({key:n.config.apiKey},o)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",$.fetch()(ce(n,n.config.apiHost,s,u),Object.assign({method:i,headers:c,referrerPolicy:"no-referrer"},t)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function se(e,t,r){return ae.apply(this,arguments)}function ae(){return(ae=t(r().mark((function e(t,n,i){var s,a,o,u,c,h,p,l,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._canInitEmulator=!1,s=Object.assign(Object.assign({},ee),n),e.prev=2,a=new pe(t),e.next=6,Promise.race([i(),a.promise]);case 6:return o=e.sent,a.clearNetworkTimeout(),e.next=10,o.json();case 10:if(!("needConfirmation"in(u=e.sent))){e.next=13;break}throw le(t,"account-exists-with-different-credential",u);case 13:if(!o.ok||"errorMessage"in u){e.next=17;break}return e.abrupt("return",u);case 17:if(c=o.ok?u.errorMessage:u.error.message,h=c.split(" : "),p=h[0],l=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==p){e.next=23;break}throw le(t,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==p){e.next=27;break}throw le(t,"email-already-in-use",u);case 27:if("USER_DISABLED"!==p){e.next=29;break}throw le(t,"user-disabled",u);case 29:if(f=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-"),!l){e.next=34;break}throw W(t,f,l);case 34:H(t,f);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof g)){e.next=41;break}throw e.t0;case 41:H(t,"network-request-failed",{message:String(e.t0)});case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function oe(e,t,r,n,i){return ue.apply(this,arguments)}function ue(){return(ue=t(r().mark((function e(t,n,i,s,a){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===a&&(a={}),e.next=3,ne(t,n,i,s,a);case 3:return"mfaPendingCredential"in(o=e.sent)&&H(t,"multi-factor-auth-required",{_serverResponse:o}),e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ce(e,t,r,n){var i=""+t+r+"?"+n;return e.config.emulator?Z(e.config,i):e.config.apiScheme+"://"+i}function he(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var pe=function(){function e(e){var t=this;this.auth=e,this.timer=null,this.promise=new Promise((function(e,r){t.timer=setTimeout((function(){return r(K(t.auth,"network-request-failed"))}),te.get())}))}return e.prototype.clearNetworkTimeout=function(){clearTimeout(this.timer)},e}();function le(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=K(e,t,n);return i.customData._tokenResponse=r,i}function fe(e){return void 0!==e&&void 0!==e.enterprise}var de=function(){function e(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}var t=e.prototype;return t.getProviderEnforcementState=function(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(var t,r=a(this.recaptchaEnforcementState);!(t=r()).done;){var n=t.value;if(n.provider&&n.provider===e)return he(n.enforcementState)}return null},t.isProviderEnabled=function(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)},e}();function ve(e,t){return me.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function me(){return(me=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t,"GET","/v2/recaptchaConfig",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ge(e,t){return we.apply(this,arguments)}function we(){return(we=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ke(e,t){return ye.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ye(){return(ye=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function _e(e,t){return xe.apply(this,arguments)}function xe(){return(xe=t(r().mark((function e(t,n){var i,s,a,o,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n=!1),i=c(t),e.next=4,i.getIdToken(n);case 4:return s=e.sent,q((a=Ee(s))&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error"),o="object"==typeof a.firebase?a.firebase:void 0,u=null==o?void 0:o.sign_in_provider,e.abrupt("return",{claims:a,token:s,authTime:be(Ie(a.auth_time)),issuedAtTime:be(Ie(a.iat)),expirationTime:be(Ie(a.exp)),signInProvider:u||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ie(e){return 1e3*Number(e)}function Ee(e){var t=e.split("."),r=t[0],n=t[1],i=t[2];if(void 0===r||void 0===n||void 0===i)return j("JWT malformed, contained fewer than 3 sections"),null;try{var s=_(n);return s?JSON.parse(s):(j("Failed to decode base64 JWT payload"),null)}catch(e){return j("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Te(e,t,r){return Se.apply(this,arguments)}function Se(){return(Se=t(r().mark((function e(t,n,i){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i=!1),!i){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g&&Re(e.t0))){e.next=15;break}if(t.auth.currentUser!==t){e.next=15;break}return e.next=15,t.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}function Re(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var Pe=function(){function e(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}var n=e.prototype;return n._start=function(){this.isRunning||(this.isRunning=!0,this.schedule())},n._stop=function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))},n.getInterval=function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)},n.schedule=function(e){var n=this;if(void 0===e&&(e=!1),this.isRunning){var i=this.getInterval(e);this.timerId=setTimeout(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),i)}},n.iteration=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&this.schedule(!0),e.abrupt("return");case 9:this.schedule();case 10:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),e}(),Ce=function(){function e(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}var t=e.prototype;return t._initializeTime=function(){this.lastSignInTime=be(this.lastLoginAt),this.creationTime=be(this.createdAt)},t._copy=function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()},t.toJSON=function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}},e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Ae(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=t(r().mark((function e(t){var n,i,s,a,o,u,c,h,p,l,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.auth,e.next=3,t.getIdToken();case 3:return s=e.sent,e.next=6,Te(t,ke(i,{idToken:s}));case 6:q(null==(a=e.sent)?void 0:a.users.length,i,"internal-error"),o=a.users[0],t._notifyReloadListener(o),u=(null===(n=o.providerUserInfo)||void 0===n?void 0:n.length)?Me(o.providerUserInfo):[],c=Ue(t.providerData,u),h=t.isAnonymous,p=!(t.email&&o.passwordHash||(null==c?void 0:c.length)),l=!!h&&p,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new Ce(o.createdAt,o.lastLoginAt),isAnonymous:l},Object.assign(t,f);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oe(e){return Le.apply(this,arguments)}function Le(){return(Le=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c(t),e.next=3,Ae(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ue(e,t){var r=e.filter((function(e){return!t.some((function(t){return t.providerId===e.providerId}))}));return[].concat(r,t)}function Me(e){return e.map((function(e){var t=e.providerId,r=A(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function De(e,t){return Ve.apply(this,arguments)}function Ve(){return(Ve=t(r().mark((function e(n,i){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(n,{},t(r().mark((function e(){var t,s,a,o,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b({grant_type:"refresh_token",refresh_token:i}).slice(1),s=n.config,a=s.tokenApiHost,o=s.apiKey,u=ce(n,a,"/v1/token","key="+o),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",$.fetch()(u,{method:"POST",headers:c,body:t}));case 8:case"end":return e.stop()}}),e)}))));case 2:return s=e.sent,e.abrupt("return",{accessToken:s.access_token,expiresIn:s.expires_in,refreshToken:s.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(e,t){return je.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function je(){return(je=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t,"POST","/v2/accounts:revokeToken",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var He=function(){function e(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}var i=e.prototype;return i.updateFromServerResponse=function(e){q(e.idToken,"internal-error"),q(void 0!==e.idToken,"internal-error"),q(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,q(r=Ee(t),"internal-error"),q(void 0!==r.exp,"internal-error"),q(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)},i.getToken=function(){var e=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n=!1),q(!this.accessToken||this.refreshToken,t,"user-token-expired"),n||!this.accessToken||this.isExpired){e.next=4;break}return e.abrupt("return",this.accessToken);case 4:if(!this.refreshToken){e.next=8;break}return e.next=7,this.refresh(t,this.refreshToken);case 7:return e.abrupt("return",this.accessToken);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),i.clearRefreshToken=function(){this.refreshToken=null},i.refresh=function(){var e=t(r().mark((function e(t,n){var i,s,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,De(t,n);case 2:i=e.sent,s=i.accessToken,a=i.refreshToken,o=i.expiresIn,this.updateTokensAndExpiration(s,a,Number(o));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),i.updateTokensAndExpiration=function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r},e.fromJSON=function(t,r){var n=r.refreshToken,i=r.accessToken,s=r.expirationTime,a=new e;return n&&(q("string"==typeof n,"internal-error",{appName:t}),a.refreshToken=n),i&&(q("string"==typeof i,"internal-error",{appName:t}),a.accessToken=i),s&&(q("number"==typeof s,"internal-error",{appName:t}),a.expirationTime=s),a},i.toJSON=function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}},i._assign=function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime},i._clone=function(){return Object.assign(new e,this.toJSON())},i._performRefresh=function(){return J("not implemented")},n(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}}]),e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Ke(e,t){q("string"==typeof e||void 0===e,"internal-error",{appName:t})}var We=e("aK",function(){function e(e){var t=e.uid,r=e.auth,n=e.stsTokenManager,i=A(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[].concat(i.providerData):[],this.metadata=new Ce(i.createdAt||void 0,i.lastLoginAt||void 0)}var i=e.prototype;return i.getIdToken=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te(this,this.stsTokenManager.getToken(this.auth,t));case 2:if(q(n=e.sent,this.auth,"internal-error"),this.accessToken===n){e.next=9;break}return this.accessToken=n,e.next=8,this.auth._persistUserIfCurrent(this);case 8:this.auth._notifyListenersIfCurrent(this);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.getIdTokenResult=function(e){return _e(this,e)},i.reload=function(){return Oe(this)},i._assign=function(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))},i._clone=function(t){var r=new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r},i._onReload=function(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)},i._notifyReloadListener=function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e},i._startProactiveRefresh=function(){this.proactiveRefresh._start()},i._stopProactiveRefresh=function(){this.proactiveRefresh._stop()},i._updateTokensIfNecessary=function(){var e=t(r().mark((function e(t,n){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n=!1),i=!1,t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),!n){e.next=6;break}return e.next=6,Ae(this);case 6:return e.next=8,this.auth._persistUserIfCurrent(this);case 8:i&&this.auth._notifyListenersIfCurrent(this);case 9:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),i.delete=function(){var e=t(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getIdToken();case 2:return t=e.sent,e.next=5,Te(this,ge(this.auth,{idToken:t}));case 5:return this.stsTokenManager.clearRefreshToken(),e.abrupt("return",this.auth.signOut());case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.toJSON=function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})},e._fromJSON=function(t,r){var n,i,s,a,o,u,c,h,p=null!==(n=r.displayName)&&void 0!==n?n:void 0,l=null!==(i=r.email)&&void 0!==i?i:void 0,f=null!==(s=r.phoneNumber)&&void 0!==s?s:void 0,d=null!==(a=r.photoURL)&&void 0!==a?a:void 0,v=null!==(o=r.tenantId)&&void 0!==o?o:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,w=null!==(h=r.lastLoginAt)&&void 0!==h?h:void 0,k=r.uid,y=r.emailVerified,b=r.isAnonymous,_=r.providerData,x=r.stsTokenManager;q(k&&x,t,"internal-error");var I=He.fromJSON(this.name,x);q("string"==typeof k,t,"internal-error"),Ke(p,t.name),Ke(l,t.name),q("boolean"==typeof y,t,"internal-error"),q("boolean"==typeof b,t,"internal-error"),Ke(f,t.name),Ke(d,t.name),Ke(v,t.name),Ke(m,t.name),Ke(g,t.name),Ke(w,t.name);var E=new e({uid:k,auth:t,email:l,emailVerified:y,displayName:p,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:w});return _&&Array.isArray(_)&&(E.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E},e._fromIdTokenResponse=function(){var n=t(r().mark((function t(n,i,s){var a,o;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===s&&(s=!1),(a=new He).updateFromServerResponse(i),o=new e({uid:i.localId,auth:n,stsTokenManager:a,isAnonymous:s}),t.next=6,Ae(o);case 6:return t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})));return function(e,t,r){return n.apply(this,arguments)}}(),n(e,[{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}]),e}()),ze=new Map;
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function qe(e){G(e instanceof Function,"Expected a class definition");var t=ze.get(e);return t?(G(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ze.set(e,t),t)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var Je=function(){function e(){this.type="NONE",this.storage={}}var n=e.prototype;return n._isAvailable=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n._set=function(){var e=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.storage[t]=n;case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),n._get=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.storage[t],e.abrupt("return",void 0===n?null:n);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n._remove=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete this.storage[t];case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n._addListener=function(e,t){},n._removeListener=function(e,t){},e}();Je.type="NONE";var Ge=e("U",Je);
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Be(e,t,r){return"firebase:"+e+":"+t+":"+r}var Ye=function(){function e(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;var n=this.auth,i=n.config,s=n.name;this.fullUserKey=Be(this.userKey,i.apiKey,s),this.fullPersistenceKey=Be("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}var n=e.prototype;return n.setCurrentUser=function(e){return this.persistence._set(this.fullUserKey,e.toJSON())},n.getCurrentUser=function(){var e=t(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.persistence._get(this.fullUserKey);case 2:return t=e.sent,e.abrupt("return",t?We._fromJSON(this.auth,t):null);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.removeCurrentUser=function(){return this.persistence._remove(this.fullUserKey)},n.savePersistenceForRedirect=function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)},n.setPersistence=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.getCurrentUser();case 4:return n=e.sent,e.next=7,this.removeCurrentUser();case 7:if(this.persistence=t,!n){e.next=10;break}return e.abrupt("return",this.setCurrentUser(n));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.delete=function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)},e.create=function(){var n=t(r().mark((function n(i,s,o){var u,c,h,p,l,f,d,v,m,g;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(void 0===o&&(o="authUser"),s.length){n.next=3;break}return n.abrupt("return",new e(qe(Ge),i,o));case 3:return n.next=5,Promise.all(s.map(t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",t);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})))));case 5:u=n.sent.filter((function(e){return e})),c=u[0]||qe(Ge),h=Be(o,i.config.apiKey,i.name),p=null,l=a(s);case 10:if((f=l()).done){n.next=27;break}return d=f.value,n.prev=12,n.next=15,d._get(h);case 15:if(!(v=n.sent)){n.next=21;break}return m=We._fromJSON(i,v),d!==c&&(p=m),c=d,n.abrupt("break",27);case 21:n.next=25;break;case 23:n.prev=23,n.t0=n.catch(12);case 25:n.next=10;break;case 27:if(g=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&g.length){n.next=30;break}return n.abrupt("return",new e(c,i,o));case 30:if(c=g[0],!p){n.next=34;break}return n.next=34,c._set(h,p.toJSON());case 34:return n.next=36,Promise.all(s.map(t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t===c){e.next=8;break}return e.prev=1,e.next=4,t._remove(h);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})))));case 36:return n.abrupt("return",new e(c,i,o));case 37:case"end":return n.stop()}}),n,null,[[12,23]])})));return function(e,t,r){return n.apply(this,arguments)}}(),e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Xe(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(et(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Qe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rt(t))return"Blackberry";if(nt(t))return"Webos";if(Ze(t))return"Safari";if((t.includes("chrome/")||$e(t))&&!t.includes("edge/"))return"Chrome";if(tt(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function Qe(e){return void 0===e&&(e=f()),/firefox\//i.test(e)}function Ze(e){void 0===e&&(e=f());var t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function $e(e){return void 0===e&&(e=f()),/crios\//i.test(e)}function et(e){return void 0===e&&(e=f()),/iemobile/i.test(e)}function tt(e){return void 0===e&&(e=f()),/android/i.test(e)}function rt(e){return void 0===e&&(e=f()),/blackberry/i.test(e)}function nt(e){return void 0===e&&(e=f()),/webos/i.test(e)}function it(e){return void 0===e&&(e=f()),/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function st(e){return void 0===e&&(e=f()),it(e)||tt(e)||nt(e)||rt(e)||/windows phone/i.test(e)||et(e)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function at(e,t){var r;switch(void 0===t&&(t=[]),e){case"Browser":r=Xe(f());break;case"Worker":r=Xe(f())+"-"+e;break;default:r=e}var n=t.length?t.join(","):"FirebaseCore-web";return r+"/JsCore/"+E+"/"+n}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var ot=function(){function e(e){this.auth=e,this.queue=[]}var n=e.prototype;return n.pushCallback=function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}},n.runMiddleware=function(){var e=t(r().mark((function e(t){var n,i,s,o,u,c,h;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:n=[],e.prev=3,i=a(this.queue);case 5:if((s=i()).done){e.next=12;break}return o=s.value,e.next=9,o(t);case 9:o.onAbort&&n.push(o.onAbort);case 10:e.next=5;break;case 12:e.next=19;break;case 14:for(e.prev=14,e.t0=e.catch(3),n.reverse(),u=a(n);!(c=u()).done;){h=c.value;try{h()}catch(e){}}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 19:case"end":return e.stop()}}),e,this,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),e}();
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ut(e,t){return ct.apply(this,arguments)}
/**
       * @license
       * Copyright 2023 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ct(){return(ct=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),e.abrupt("return",ne(t,"GET","/v2/passwordPolicy",re(t,n)));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ht=function(){function e(e){var t,r,n,i,s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}var t=e.prototype;return t.validatePassword=function(e){var t,r,n,i,s,a,o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(r=o.meetsMaxPasswordLength)||void 0===r||r),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o},t.validatePasswordLengthOptions=function(e,t){var r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)},t.validatePasswordCharacterOptions=function(e,t){var r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(var n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))},t.updatePasswordCharacterOptionsStatuses=function(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))},e}(),pt=e("aL",function(){function e(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.beforeStateQueue=new ot(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=D,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}var i=e.prototype;return i._initializeWithPersistence=function(e,n){var i=this;return n&&(this._popupRedirectResolver=qe(n)),this._initializationPromise=this.queue(t(r().mark((function t(){var s,a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!i._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Ye.create(i,e);case 4:if(i.persistenceManager=t.sent,!i._deleted){t.next=7;break}return t.abrupt("return");case 7:if(!(null===(s=i._popupRedirectResolver)||void 0===s?void 0:s._shouldInitProactively)){t.next=15;break}return t.prev=8,t.next=11,i._popupRedirectResolver._initialize(i);case 11:t.next=15;break;case 13:t.prev=13,t.t0=t.catch(8);case 15:return t.next=17,i.initializeCurrentUser(n);case 17:if(i.lastNotifiedUid=(null===(a=i.currentUser)||void 0===a?void 0:a.uid)||null,!i._deleted){t.next=20;break}return t.abrupt("return");case 20:i._isInitialized=!0;case 21:case"end":return t.stop()}}),t,null,[[8,13]])})))),this._initializationPromise},i._onStorageEvent=function(){var e=t(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.assertedPersistence.getCurrentUser();case 4:if(t=e.sent,this.currentUser||t){e.next=7;break}return e.abrupt("return");case 7:if(!this.currentUser||!t||this.currentUser.uid!==t.uid){e.next=12;break}return this._currentUser._assign(t),e.next=11,this.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,this._updateCurrentUser(t,!0);case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.initializeCurrentUser=function(){var e=t(r().mark((function e(t){var n,i,s,a,o,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.assertedPersistence.getCurrentUser();case 2:if(i=e.sent,s=i,a=!1,!t||!this.config.authDomain){e.next=14;break}return e.next=8,this.getOrInitRedirectPersistenceManager();case 8:return o=null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId,u=null==s?void 0:s._redirectEventId,e.next=12,this.tryRedirectSignIn(t);case 12:c=e.sent,o&&o!==u||!(null==c?void 0:c.user)||(s=c.user,a=!0);case 14:if(s){e.next=16;break}return e.abrupt("return",this.directlySetCurrentUser(null));case 16:if(s._redirectEventId){e.next=32;break}if(!a){e.next=27;break}return e.prev=18,e.next=21,this.beforeStateQueue.runMiddleware(s);case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(18),s=i,this._popupRedirectResolver._overrideRedirectResult(this,(function(){return Promise.reject(e.t0)}));case 27:if(!s){e.next=31;break}return e.abrupt("return",this.reloadAndSetCurrentUserOrClear(s));case 31:return e.abrupt("return",this.directlySetCurrentUser(null));case 32:return q(this._popupRedirectResolver,this,"argument-error"),e.next=35,this.getOrInitRedirectPersistenceManager();case 35:if(!this.redirectUser||this.redirectUser._redirectEventId!==s._redirectEventId){e.next=37;break}return e.abrupt("return",this.directlySetCurrentUser(s));case 37:return e.abrupt("return",this.reloadAndSetCurrentUserOrClear(s));case 38:case"end":return e.stop()}}),e,this,[[18,23]])})));return function(t){return e.apply(this,arguments)}}(),i.tryRedirectSignIn=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,this._popupRedirectResolver._completeRedirectFn(this,t,!0);case 4:n=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,this._setRedirectUser(null);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),i.reloadAndSetCurrentUserOrClear=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ae(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",this.directlySetCurrentUser(null));case 9:return e.abrupt("return",this.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),i.useDeviceLanguage=function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()},i._delete=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._deleted=!0;case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.updateCurrentUser=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t?c(t):null)&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),e.abrupt("return",this._updateCurrentUser(n&&n._clone(this)));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._updateCurrentUser=function(){var e=t(r().mark((function e(n,i){var s=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i=!1),!this._deleted){e.next=3;break}return e.abrupt("return");case 3:if(n&&q(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),i){e.next=7;break}return e.next=7,this.beforeStateQueue.runMiddleware(n);case 7:return e.abrupt("return",this.queue(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.directlySetCurrentUser(n);case 2:s.notifyAuthListeners();case 3:case"end":return e.stop()}}),e)})))));case 8:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),i.signOut=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.beforeStateQueue.runMiddleware(null);case 2:if(!this.redirectPersistenceManager&&!this._popupRedirectResolver){e.next=5;break}return e.next=5,this._setRedirectUser(null);case 5:return e.abrupt("return",this._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i.setPersistence=function(e){var n=this;return this.queue(t(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.assertedPersistence.setPersistence(qe(e));case 2:case"end":return t.stop()}}),t)}))))},i._getRecaptchaConfig=function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]},i.validatePassword=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._getPasswordPolicyInternal()){e.next=3;break}return e.next=3,this._updatePasswordPolicy();case 3:if((n=this._getPasswordPolicyInternal()).schemaVersion===this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION){e.next=6;break}return e.abrupt("return",Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})));case 6:return e.abrupt("return",n.validatePassword(t));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._getPasswordPolicyInternal=function(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]},i._updatePasswordPolicy=function(){var e=t(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ut(this);case 2:t=e.sent,n=new ht(t),null===this.tenantId?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i._getPersistence=function(){return this.assertedPersistence.persistence.type},i._updateErrorMap=function(e){this._errorFactory=new o("auth","Firebase",e())},i.onAuthStateChanged=function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)},i.beforeAuthStateChanged=function(e,t){return this.beforeStateQueue.pushCallback(e,t)},i.onIdTokenChanged=function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)},i.authStateReady=function(){var e=this;return new Promise((function(t,r){if(e.currentUser)t();else var n=e.onAuthStateChanged((function(){n(),t()}),r)}))},i.revokeAccessToken=function(){var e=t(r().mark((function e(t){var n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.currentUser){e.next=8;break}return e.next=3,this.currentUser.getIdToken();case 3:return n=e.sent,i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n},null!=this.tenantId&&(i.tenantId=this.tenantId),e.next=8,Fe(this,i);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.toJSON=function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}},i._setRedirectUser=function(){var e=t(r().mark((function e(t,n){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getOrInitRedirectPersistenceManager(n);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),i.getOrInitRedirectPersistenceManager=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.redirectPersistenceManager){e.next=9;break}return q(n=t&&qe(t)||this._popupRedirectResolver,this,"argument-error"),e.next=5,Ye.create(this,[qe(n._redirectPersistence)],"redirectUser");case 5:return this.redirectPersistenceManager=e.sent,e.next=8,this.redirectPersistenceManager.getCurrentUser();case 8:this.redirectUser=e.sent;case 9:return e.abrupt("return",this.redirectPersistenceManager);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._redirectUserForId=function(){var e=t(r().mark((function e(n){var i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._isInitialized){e.next=3;break}return e.next=3,this.queue(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 3:if((null===(i=this._currentUser)||void 0===i?void 0:i._redirectEventId)!==n){e.next=5;break}return e.abrupt("return",this._currentUser);case 5:if((null===(s=this.redirectUser)||void 0===s?void 0:s._redirectEventId)!==n){e.next=7;break}return e.abrupt("return",this.redirectUser);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._persistUserIfCurrent=function(){var e=t(r().mark((function e(n){var i=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n!==this.currentUser){e.next=2;break}return e.abrupt("return",this.queue(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.directlySetCurrentUser(n));case 1:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._notifyListenersIfCurrent=function(e){e===this.currentUser&&this.notifyAuthListeners()},i._key=function(){return this.config.authDomain+":"+this.config.apiKey+":"+this.name},i._startProactiveRefresh=function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()},i._stopProactiveRefresh=function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()},i.notifyAuthListeners=function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}},i.registerStateListener=function(e,t,r,n){var i=this;if(this._deleted)return function(){};var s="function"==typeof t?t:t.next.bind(t),a=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(o,this,"internal-error"),o.then((function(){a||s(i.currentUser)})),"function"==typeof t){var u=e.addObserver(t,r,n);return function(){a=!0,u()}}var c=e.addObserver(t);return function(){a=!0,c()}},i.directlySetCurrentUser=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,!t){e.next=8;break}return e.next=6,this.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,this.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i.queue=function(e){return this.operations=this.operations.then(e,e),this.operations},i._logFramework=function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=at(this.config.clientPlatform,this._getFrameworks()))},i._getFrameworks=function(){return this.frameworks},i._getAdditionalHeaders=function(){var e=t(r().mark((function e(){var t,n,i,s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t={})["X-Client-Version"]=this.clientVersion,i=t,this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId),e.next=4,null===(n=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 4:return(s=e.sent)&&(i["X-Firebase-Client"]=s),e.next=8,this._getAppCheckToken();case 8:return(a=e.sent)&&(i["X-Firebase-AppCheck"]=a),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),i._getAppCheckToken=function(){var e=t(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken();case 2:return(null==(n=e.sent)?void 0:n.error)&&F("Error while retrieving App Check token: "+n.error),e.abrupt("return",null==n?void 0:n.token);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n(e,[{key:"_currentUser",get:function(){return this.currentUser}},{key:"assertedPersistence",get:function(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}}]),e}());function lt(e){return c(e)}var ft=function(){function e(e){var t=this;this.auth=e,this.observer=null,this.addObserver=v((function(e){return t.observer=e}))}return n(e,[{key:"next",get:function(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}(),dt={loadJS:function(){return t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Unable to load external scripts");case 1:case"end":return e.stop()}}),e)})))()},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function vt(e){return dt.loadJS(e)}var mt=function(){function e(e){this.type="recaptcha-enterprise",this.auth=lt(e)}return e.prototype.verify=function(){var e=t(r().mark((function e(n,i){var s,a,o,u=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(e,t,r){var i=window.grecaptcha;fe(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:n}).then((function(e){t(e)})).catch((function(){t("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))},a=function(){return(a=t(r().mark((function e(n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=5;break}if(null!=n.tenantId||null==n._agentRecaptchaConfig){e.next=3;break}return e.abrupt("return",n._agentRecaptchaConfig.siteKey);case 3:if(null==n.tenantId||void 0===n._tenantRecaptchaConfigs[n.tenantId]){e.next=5;break}return e.abrupt("return",n._tenantRecaptchaConfigs[n.tenantId].siteKey);case 5:return e.abrupt("return",new Promise(t(r().mark((function e(t,i){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:ve(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var r=new de(e);return null==n.tenantId?n._agentRecaptchaConfig=r:n._tenantRecaptchaConfigs[n.tenantId]=r,t(r.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),e)})))));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},s=function(e){return a.apply(this,arguments)},void 0===n&&(n="verify"),void 0===i&&(i=!1),e.abrupt("return",new Promise((function(e,t){s(u.auth).then((function(r){if(!i&&fe(window.grecaptcha))o(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));var n=dt.recaptchaEnterpriseScript;0!==n.length&&(n+=r),vt(n).then((function(){o(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),e}();function gt(e,t,r,n){return wt.apply(this,arguments)}function wt(){return(wt=t(r().mark((function e(t,n,i,s){var a,o,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===s&&(s=!1),a=new mt(t),e.prev=2,e.next=5,a.verify(i);case 5:o=e.sent,e.next=13;break;case 8:return e.prev=8,e.t0=e.catch(2),e.next=12,a.verify(i,!0);case 12:o=e.sent;case 13:return u=Object.assign({},n),s?Object.assign(u,{captchaResp:o}):Object.assign(u,{captchaResponse:o}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 18:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}function kt(e,t,r,n){return yt.apply(this,arguments)}function yt(){return(yt=t(r().mark((function e(n,i,s,a){var o,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(o=n._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))){e.next=7;break}return e.next=3,gt(n,i,s,"getOobCode"===s);case 3:return u=e.sent,e.abrupt("return",a(n,u));case 7:return e.abrupt("return",a(n,i).catch(t(r().mark((function e(t){var o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==t.code){e.next=8;break}return console.log(s+" is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow."),e.next=4,gt(n,i,s,"getOobCode"===s);case 4:return o=e.sent,e.abrupt("return",a(n,o));case 8:return e.abrupt("return",Promise.reject(t));case 9:case"end":return e.stop()}}),e)})))));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bt(e,t){var r=R(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if(m(i,null!=t?t:{}))return n;H(n,"already-initialized")}return r.initialize({options:t})}function _t(e,t,r){var n=lt(e);q(n._canInitEmulator,n,"emulator-config-failed"),q(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");var i=!!(null==r?void 0:r.disableWarnings),s=xt(t),a=function(e){var t=xt(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};var n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){var s=i[1];return{host:s,port:It(n.substr(s.length+1))}}var a=n.split(":");return{host:a[0],port:It(a[1])}}(t),o=a.host,u=a.port,c=null===u?"":":"+u;n.config.emulator={url:s+"//"+o+c+"/"},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */()}function xt(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function It(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Et=e("L",function(){function e(e,t){this.providerId=e,this.signInMethod=t}var t=e.prototype;return t.toJSON=function(){return J("not implemented")},t._getIdTokenResponse=function(e){return J("not implemented")},t._linkToIdToken=function(e,t){return J("not implemented")},t._getReauthenticationResolver=function(e){return J("not implemented")},e}());function Tt(e,t){return St.apply(this,arguments)}function St(){return(St=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ne(t,"POST","/v1/accounts:signUp",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rt(e,t){return Pt.apply(this,arguments)}function Pt(){return(Pt=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe(t,"POST","/v1/accounts:signInWithPassword",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ct(e,t){return At.apply(this,arguments)}function At(){return(At=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe(t,"POST","/v1/accounts:signInWithEmailLink",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nt(e,t){return Ot.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Ot(){return(Ot=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe(t,"POST","/v1/accounts:signInWithEmailLink",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Lt=e("M",function(e){function n(t,r,n,i){var s;return void 0===i&&(i=null),(s=e.call(this,"password",n)||this)._email=t,s._password=r,s._tenantId=i,s}i(n,e),n._fromEmailAndPassword=function(e,t){return new n(e,t,"password")},n._fromEmailAndCode=function(e,t,r){return void 0===r&&(r=null),new n(e,t,"emailLink",r)};var s=n.prototype;return s.toJSON=function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}},n.fromJSON=function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null},s._getIdTokenResponse=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?5:6;break;case 3:return n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},e.abrupt("return",kt(t,n,"signInWithPassword",Rt));case 5:return e.abrupt("return",Ct(t,{email:this._email,oobCode:this._password}));case 6:H(t,"internal-error");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),s._linkToIdToken=function(){var e=t(r().mark((function e(t,n){var i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?5:6;break;case 3:return i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},e.abrupt("return",kt(t,i,"signUpPassword",Tt));case 5:return e.abrupt("return",Nt(t,{idToken:n,email:this._email,oobCode:this._password}));case 6:H(t,"internal-error");case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),s._getReauthenticationResolver=function(e){return this._getIdTokenResponse(e)},n}(Et));
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Ut(e,t){return Mt.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Mt(){return(Mt=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oe(t,"POST","/v1/accounts:signInWithIdp",re(t,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(L={}).USER_NOT_FOUND="user-not-found";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var Dt=e("ai",function(){function e(e){var t,r,n,i,s,a,o=w(k(e)),u=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(r=o.oobCode)&&void 0!==r?r:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}return e.parseLink=function(t){var r=function(e){var t=w(k(e)).link,r=t?w(k(t)).deep_link_id:null,n=w(k(e)).deep_link_id;return(n?w(k(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}},e}()),Vt=e("V",function(){function e(){this.providerId=e.PROVIDER_ID}return e.credential=function(e,t){return Lt._fromEmailAndPassword(e,t)},e.credentialWithLink=function(e,t){var r=Dt.parseLink(t);return q(r,"argument-error"),Lt._fromEmailAndCode(e,r.code,r.tenantId)},e}());
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */Vt.PROVIDER_ID="password",Vt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Vt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
var Ft=function(){function e(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}var t=e.prototype;return t.setDefaultLanguage=function(e){this.defaultLanguageCode=e},t.setCustomParameters=function(e){return this.customParameters=e,this},t.getCustomParameters=function(){return this.customParameters},e}(),jt=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).scopes=[],t}i(t,e);var r=t.prototype;return r.addScope=function(e){return this.scopes.includes(e)||this.scopes.push(e),this},r.getScopes=function(){return[].concat(this.scopes)},t}(Ft),Ht=function(){function e(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}return e._fromIdTokenResponse=function(){var n=t(r().mark((function t(n,i,s,a){var o,u,c;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===a&&(a=!1),t.next=3,We._fromIdTokenResponse(n,s,a);case 3:return o=t.sent,u=Kt(s),c=new e({user:o,providerId:u,_tokenResponse:s,operationType:i}),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e,t,r,i){return n.apply(this,arguments)}}(),e._forOperation=function(){var n=t(r().mark((function t(n,i,s){var a;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._updateTokensIfNecessary(s,!0);case 2:return a=Kt(s),t.abrupt("return",new e({user:n,providerId:a,_tokenResponse:s,operationType:i}));case 4:case"end":return t.stop()}}),t)})));return function(e,t,r){return n.apply(this,arguments)}}(),e}();
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Kt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}var Wt=function(e){function t(r,n,i,a){var o,u;return(o=e.call(this,n.code,n.message)||this).operationType=i,o.user=a,Object.setPrototypeOf(s(o),t.prototype),o.customData={appName:r.name,tenantId:null!==(u=r.tenantId)&&void 0!==u?u:void 0,_serverResponse:n.customData._serverResponse,operationType:i},o}return i(t,e),t._fromErrorAndOperation=function(e,r,n,i){return new t(e,r,n,i)},t}(g);function zt(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Wt._fromErrorAndOperation(e,r,t,n);throw r}))}function qt(e,t,r){return Jt.apply(this,arguments)}function Jt(){return(Jt=t(r().mark((function e(t,n,i){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===i&&(i=!1),e.t0=Te,e.t1=t,e.t2=n,e.t3=t.auth,e.next=7,t.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return s=e.sent,e.abrupt("return",Ht._forOperation(t,"link",s));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Gt(){return(Gt=t(r().mark((function e(t,n,i){var s,a,o,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===i&&(i=!1),s=t.auth,a="reauthenticate",e.prev=3,e.next=6,Te(t,zt(s,a,n,t),i);case 6:return q((o=e.sent).idToken,s,"internal-error"),q(u=Ee(o.idToken),s,"internal-error"),c=u.sub,q(t.uid===c,s,"user-mismatch"),e.abrupt("return",Ht._forOperation(t,a,o));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&H(s,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function Bt(e,t,r){return Yt.apply(this,arguments)}function Yt(){return(Yt=t(r().mark((function e(t,n,i){var s,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===i&&(i=!1),s="signIn",e.next=4,zt(t,s,n);case 4:return a=e.sent,e.next=7,Ht._fromIdTokenResponse(t,s,a);case 7:if(o=e.sent,i){e.next=11;break}return e.next=11,t._updateCurrentUser(o.user);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Xt(e,t){return Qt.apply(this,arguments)}function Qt(){return(Qt=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Bt(lt(t),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Zt(e){return $t.apply(this,arguments)}function $t(){return($t=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=lt(t))._getPasswordPolicyInternal()){e.next=4;break}return e.next=4,n._updatePasswordPolicy();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function er(e,t,r,n){return c(e).onIdTokenChanged(t,r,n)}function tr(e,t,r){return c(e).beforeAuthStateChanged(t,r)}var rr="__sak",nr=function(){function e(e,t){this.storageRetriever=e,this.type=t}var t=e.prototype;return t._isAvailable=function(){try{return this.storage?(this.storage.setItem(rr,"1"),this.storage.removeItem(rr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}},t._set=function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()},t._get=function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)},t._remove=function(e){return this.storage.removeItem(e),Promise.resolve()},n(e,[{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var ir=function(e){function n(){var t,r;return(t=e.call(this,(function(){return window.localStorage}),"LOCAL")||this).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Ze(r=f())||it(r))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=st(),t._shouldAllowMigration=!0,t}i(n,e);var s=n.prototype;return s.forAllChangedKeys=function(e){for(var t=0,r=Object.keys(this.listeners);t<r.length;t++){var n=r[t],i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}},s.onStorageEvent=function(e,t){var r=this;if(void 0===t&&(t=!1),e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var s=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},a=this.storage.getItem(n);y()&&10===document.documentMode&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}else this.forAllChangedKeys((function(e,t,n){r.notifyListeners(e,n)}))},s.notifyListeners=function(e,t){this.localCache[e]=t;var r=this.listeners[e];if(r)for(var n=0,i=Array.from(r);n<i.length;n++){(0,i[n])(t?JSON.parse(t):t)}},s.startPolling=function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){e.forAllChangedKeys((function(t,r,n){e.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:n}),!0)}))}),1e3)},s.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},s.attachListener=function(){window.addEventListener("storage",this.boundEventHandler)},s.detachListener=function(){window.removeEventListener("storage",this.boundEventHandler)},s._addListener=function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)},s._removeListener=function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())},s._set=function(){var n=t(r().mark((function t(n,i){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prototype._set.call(this,n,i);case 2:this.localCache[n]=JSON.stringify(i);case 3:case"end":return t.stop()}}),t,this)})));return function(e,t){return n.apply(this,arguments)}}(),s._get=function(){var n=t(r().mark((function t(n){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prototype._get.call(this,n);case 2:return i=t.sent,this.localCache[n]=JSON.stringify(i),t.abrupt("return",i);case 5:case"end":return t.stop()}}),t,this)})));return function(e){return n.apply(this,arguments)}}(),s._remove=function(){var n=t(r().mark((function t(n){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.prototype._remove.call(this,n);case 2:delete this.localCache[n];case 3:case"end":return t.stop()}}),t,this)})));return function(e){return n.apply(this,arguments)}}(),n}(nr);ir.type="LOCAL";var sr=e("b",ir),ar=function(e){function t(){return e.call(this,(function(){return window.sessionStorage}),"SESSION")||this}i(t,e);var r=t.prototype;return r._addListener=function(e,t){},r._removeListener=function(e,t){},t}(nr);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */ar.type="SESSION";var or=e("a",ar);
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function ur(e){return Promise.all(e.map(t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))))}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var cr=function(){function e(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}e._getInstance=function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n};var n=e.prototype;return n.isListeningto=function(e){return this.eventTarget===e},n.handleEvent=function(){var e=t(r().mark((function e(n){var i,s,a,o,u,c,h,p;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(i=n).data,a=s.eventId,o=s.eventType,u=s.data,null==(c=this.handlersMap[o])?void 0:c.size){e.next=5;break}return e.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:a,eventType:o}),h=Array.from(c).map(t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t(i.origin,u));case 1:case"end":return e.stop()}}),e)})))),e.next=9,ur(h);case 9:p=e.sent,i.ports[0].postMessage({status:"done",eventId:a,eventType:o,response:p});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n._subscribe=function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)},n._unsubscribe=function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)},e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function hr(e,t){void 0===e&&(e=""),void 0===t&&(t=10);for(var r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */cr.receivers=[];var pr=function(){function e(e){this.target=e,this.handlers=new Set}var n=e.prototype;return n.removeMessageHandler=function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)},n._send=function(){var e=t(r().mark((function e(t,n,i){var s,a,o,u=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===i&&(i=50),s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=4;break}throw new Error("connection_unavailable");case 4:return e.abrupt("return",new Promise((function(e,r){var c=hr("",20);s.port1.start();var h=setTimeout((function(){r(new Error("unsupported_event"))}),i);o={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(h),a=setTimeout((function(){r(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),e(n.data.response);break;default:clearTimeout(h),clearTimeout(a),r(new Error("invalid_response"))}}},u.handlers.add(o),s.port1.addEventListener("message",o.onMessage),u.target.postMessage({eventType:t,eventId:c,data:n},[s.port2])})).finally((function(){o&&u.removeMessageHandler(o)})));case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),e}();
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function lr(){return window}function fr(e){lr().location.href=e}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function dr(){return void 0!==lr().WorkerGlobalScope&&"function"==typeof lr().importScripts}function vr(){return mr.apply(this,arguments)}function mr(){return(mr=t(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return t=e.sent,e.abrupt("return",t.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
var gr="firebaseLocalStorageDb",wr="firebaseLocalStorage",kr="fbase_key",yr=function(){function e(e){this.request=e}return e.prototype.toPromise=function(){var e=this;return new Promise((function(t,r){e.request.addEventListener("success",(function(){t(e.request.result)})),e.request.addEventListener("error",(function(){r(e.request.error)}))}))},e}();function br(e,t){return e.transaction([wr],t?"readwrite":"readonly").objectStore(wr)}function _r(){var e=indexedDB.deleteDatabase(gr);return new yr(e).toPromise()}function xr(){var e=indexedDB.open(gr,1);return new Promise((function(n,i){e.addEventListener("error",(function(){i(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(wr,{keyPath:kr})}catch(e){i(e)}})),e.addEventListener("success",t(r().mark((function t(){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(wr)){t.next=12;break}return i.close(),t.next=5,_r();case 5:return t.t0=n,t.next=8,xr();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:n(i);case 13:case"end":return t.stop()}}),t)}))))}))}function Ir(e,t,r){return Er.apply(this,arguments)}function Er(){return(Er=t(r().mark((function e(t,n,i){var s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=br(t,!0).put(((s={}).fbase_key=n,s.value=i,s)),e.abrupt("return",new yr(a).toPromise());case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Tr(e,t){return Sr.apply(this,arguments)}function Sr(){return(Sr=t(r().mark((function e(t,n){var i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=br(t,!1).get(n),e.next=3,new yr(i).toPromise();case 3:return s=e.sent,e.abrupt("return",void 0===s?null:s.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Rr(e,t){var r=br(e,!0).delete(t);return new yr(r).toPromise()}var Pr=function(){function e(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}var n=e.prototype;return n._openDb=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.db){e.next=2;break}return e.abrupt("return",this.db);case 2:return e.next=4,xr();case 4:return this.db=e.sent,e.abrupt("return",this.db);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n._withRetries=function(){var e=t(r().mark((function e(t){var n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:return e.prev=2,e.next=5,this._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(n++>3)){e.next=15;break}throw e.t0;case 15:this.db&&(this.db.close(),this.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),n.initializeServiceWorkerMessaging=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",dr()?this.initializeReceiver():this.initializeSender());case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.initializeReceiver=function(){var e=t(r().mark((function e(){var n=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.receiver=cr._getInstance(dr()?self:null),this.receiver._subscribe("keyChanged",t(r().mark((function e(t,i){var s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._poll();case 2:return s=e.sent,e.abrupt("return",{keyProcessed:s.includes(i.key)});case 4:case"end":return e.stop()}}),e)})))),this.receiver._subscribe("ping",t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.initializeSender=function(){var e=t(r().mark((function e(){var t,n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vr();case 2:if(this.activeServiceWorker=e.sent,this.activeServiceWorker){e.next=5;break}return e.abrupt("return");case 5:return this.sender=new pr(this.activeServiceWorker),e.next=8,this.sender._send("ping",{},800);case 8:if(i=e.sent){e.next=11;break}return e.abrupt("return");case 11:(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=i[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.notifyServiceWorker=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.sender&&this.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===this.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),n._isAvailable=function(){var e=t(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,xr();case 5:return t=e.sent,e.next=8,Ir(t,rr,"1");case 8:return e.next=10,Rr(t,rr);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),n._withPendingWrite=function(){var e=t(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,this.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),e,this,[[1,,4,7]])})));return function(t){return e.apply(this,arguments)}}(),n._set=function(){var e=t(r().mark((function e(n,i){var s=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._withPendingWrite(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._withRetries((function(e){return Ir(e,n,i)}));case 2:return s.localCache[n]=i,e.abrupt("return",s.notifyServiceWorker(n));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),n._get=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._withRetries((function(e){return Tr(e,t)}));case 2:return n=e.sent,this.localCache[t]=n,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n._remove=function(){var e=t(r().mark((function e(n){var i=this;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._withPendingWrite(t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._withRetries((function(e){return Rr(e,n)}));case 2:return delete i.localCache[n],e.abrupt("return",i.notifyServiceWorker(n));case 4:case"end":return e.stop()}}),e)})))));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n._poll=function(){var e=t(r().mark((function e(){var t,n,i,s,o,u,c,h,p,l,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._withRetries((function(e){var t=br(e,!1).getAll();return new yr(t).toPromise()}));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===this.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:if(n=[],i=new Set,0!==t.length)for(s=a(t);!(o=s()).done;)u=o.value,c=u.fbase_key,h=u.value,i.add(c),JSON.stringify(this.localCache[c])!==JSON.stringify(h)&&(this.notifyListeners(c,h),n.push(c));for(p=0,l=Object.keys(this.localCache);p<l.length;p++)f=l[p],this.localCache[f]&&!i.has(f)&&(this.notifyListeners(f,null),n.push(f));return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.notifyListeners=function(e,t){this.localCache[e]=t;var r=this.listeners[e];if(r)for(var n=0,i=Array.from(r);n<i.length;n++){(0,i[n])(t)}},n.startPolling=function(){var e=this;this.stopPolling(),this.pollTimer=setInterval(t(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),t)}))),800)},n.stopPolling=function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)},n._addListener=function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)},n._removeListener=function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()},e}();Pr.type="LOCAL";var Cr=e("i",Pr);new Q(3e4,6e4);
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function Ar(e,t){return t?qe(t):(q(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var Nr=function(e){function t(t){var r;return(r=e.call(this,"custom","custom")||this).params=t,r}i(t,e);var r=t.prototype;return r._getIdTokenResponse=function(e){return Ut(e,this._buildIdpRequest())},r._linkToIdToken=function(e,t){return Ut(e,this._buildIdpRequest(t))},r._getReauthenticationResolver=function(e){return Ut(e,this._buildIdpRequest())},r._buildIdpRequest=function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t},t}(Et);function Or(e){return Bt(e.auth,new Nr(e),e.bypassAuthState)}function Lr(e){var t=e.auth,r=e.user;return q(r,t,"internal-error"),function(e,t,r){return Gt.apply(this,arguments)}(r,new Nr(e),e.bypassAuthState)}function Ur(e){return Mr.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Mr(){return(Mr=t(r().mark((function e(t){var n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.auth,q(i=t.user,n,"internal-error"),e.abrupt("return",qt(i,new Nr(t),t.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Dr=function(){function e(e,t,r,n,i){void 0===i&&(i=!1),this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}var n=e.prototype;return n.execute=function(){var e=this;return new Promise(t(r().mark((function t(n,i){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.pendingPromise={resolve:n,reject:i},t.prev=1,t.next=4,e.resolver._initialize(e.auth);case 4:return e.eventManager=t.sent,t.next=7,e.onExecution();case 7:e.eventManager.registerConsumer(e),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.reject(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))))},n.onAuthEvent=function(){var e=t(r().mark((function e(t){var n,i,s,a,o,u,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.urlResponse,i=t.sessionId,s=t.postBody,a=t.tenantId,o=t.error,u=t.type,!o){e.next=4;break}return this.reject(o),e.abrupt("return");case 4:return c={auth:this.auth,requestUri:n,sessionId:i,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState},e.prev=5,e.t0=this,e.next=9,this.getIdpTask(u)(c);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),this.reject(e.t2);case 16:case"end":return e.stop()}}),e,this,[[5,13]])})));return function(t){return e.apply(this,arguments)}}(),n.onError=function(e){this.reject(e)},n.getIdpTask=function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Or;case"linkViaPopup":case"linkViaRedirect":return Ur;case"reauthViaPopup":case"reauthViaRedirect":return Lr;default:H(this.auth,"internal-error")}},n.resolve=function(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()},n.reject=function(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()},n.unregisterAndCleanUp=function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()},e}(),Vr=(new Q(2e3,1e4),new Map),Fr=function(e){function n(t,r,n){var i;return void 0===n&&(n=!1),(i=e.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n)||this).eventId=null,i}i(n,e);var s=n.prototype;return s.execute=function(){var n=t(r().mark((function t(){var n,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=Vr.get(this.auth._key())){t.next=21;break}return t.prev=2,t.next=5,jr(this.resolver,this.auth);case 5:if(!t.sent){t.next=12;break}return t.next=9,e.prototype.execute.call(this);case 9:t.t0=t.sent,t.next=13;break;case 12:t.t0=null;case 13:i=t.t0,n=function(){return Promise.resolve(i)},t.next=20;break;case 17:t.prev=17,t.t1=t.catch(2),n=function(){return Promise.reject(t.t1)};case 20:Vr.set(this.auth._key(),n);case 21:return this.bypassAuthState||Vr.set(this.auth._key(),(function(){return Promise.resolve(null)})),t.abrupt("return",n());case 23:case"end":return t.stop()}}),t,this,[[2,17]])})));return function(){return n.apply(this,arguments)}}(),s.onAuthEvent=function(){var n=t(r().mark((function t(n){var i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==n.type){t.next=4;break}return t.abrupt("return",e.prototype.onAuthEvent.call(this,n));case 4:if("unknown"!==n.type){t.next=7;break}return this.resolve(null),t.abrupt("return");case 7:if(!n.eventId){t.next=17;break}return t.next=10,this.auth._redirectUserForId(n.eventId);case 10:if(!(i=t.sent)){t.next=16;break}return this.user=i,t.abrupt("return",e.prototype.onAuthEvent.call(this,n));case 16:this.resolve(null);case 17:case"end":return t.stop()}}),t,this)})));return function(e){return n.apply(this,arguments)}}(),s.onExecution=function(){var e=t(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s.cleanUp=function(){},n}(Dr);
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function jr(e,t){return Hr.apply(this,arguments)}function Hr(){return(Hr=t(r().mark((function e(t,n){var i,s,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=zr(n),s=Wr(t),e.next=4,s._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,s._get(i);case 8:return e.t0=e.sent,a="true"===e.t0,e.next=12,s._remove(i);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Kr(e,t){Vr.set(e._key(),t)}function Wr(e){return qe(e._redirectPersistence)}function zr(e){return Be("pendingRedirect",e.config.apiKey,e.name)}function qr(e,t,r){return Jr.apply(this,arguments)}function Jr(){return(Jr=t(r().mark((function e(t,n,i){var s,a,o,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===i&&(i=!1),s=lt(t),a=Ar(s,n),o=new Fr(s,a,i),e.next=6,o.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,s._persistUserIfCurrent(u.user);case 11:return e.next=13,s._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Gr=e("aD",function(){function e(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}var t=e.prototype;return t.registerConsumer=function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)},t.unregisterConsumer=function(e){this.consumers.delete(e)},t.onEvent=function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yr(e);default:return!1}}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r},t.sendToConsumer=function(e,t){var r;if(e.error&&!Yr(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(K(this.auth,n))}else t.onAuthEvent(e)},t.isEventForConsumer=function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r},t.hasEventBeenHandled=function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Br(e))},t.saveEventToCache=function(e){this.cachedEventUids.add(Br(e)),this.lastProcessedEventTime=Date.now()},e}());function Br(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Yr(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Xr(e,t){return Qr.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function Qr(){return(Qr=t(r().mark((function e(t,n){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),e.abrupt("return",ne(t,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Zr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$r=/^https?/;function en(){return(en=t(r().mark((function e(t){var n,i,s,o,u;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Xr(t);case 4:n=e.sent,i=n.authorizedDomains,s=a(i);case 7:if((o=s()).done){e.next=18;break}if(u=o.value,e.prev=9,!tn(u)){e.next=12;break}return e.abrupt("return");case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:e.next=7;break;case 18:H(t,"unauthorized-domain");case 19:case"end":return e.stop()}}),e,null,[[9,14]])})))).apply(this,arguments)}function tn(e){var t=B(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!$r.test(n))return!1;if(Zr.test(e))return i===e;var a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var rn=new Q(3e4,6e4);function nn(){var e=lr().___jsl;if(null==e?void 0:e.H)for(var t=0,r=Object.keys(e.H);t<r.length;t++){var n=r[t];if(e.H[n].r=e.H[n].r||[],e.H[n].L=e.H[n].L||[],e.H[n].r=[].concat(e.H[n].L),e.CP)for(var i=0;i<e.CP.length;i++)e.CP[i]=null}}function sn(e){return new Promise((function(t,r){var n,i,s;function a(){nn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){nn(),r(K(e,"network-request-failed"))},timeout:rn.get()})}if(null===(i=null===(n=lr().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=lr().gapi)||void 0===s?void 0:s.load)){var o="__"+"iframefcb"+Math.floor(1e6*Math.random());return lr()[o]=function(){gapi.load?a():r(K(e,"network-request-failed"))},vt(dt.gapiScript+"?onload="+o).catch((function(e){return r(e)}))}a()}})).catch((function(e){throw an=null,e}))}var an=null;function on(e){return an=an||sn(e)}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var un=new Q(5e3,15e3),cn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pn(e){var t=e.config;q(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Z(t,"emulator/auth/iframe"):"https://"+e.config.authDomain+"/__/auth/iframe",n={apiKey:t.apiKey,appName:e.name,v:E},i=hn.get(e.config.apiHost);i&&(n.eid=i);var s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),r+"?"+b(n).slice(1)}function ln(e){return fn.apply(this,arguments)}
/**
       * @license
       * Copyright 2020 Google LLC.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function fn(){return(fn=t(r().mark((function e(n){var i,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,on(n);case 2:return i=e.sent,q(s=lr().gapi,n,"internal-error"),e.abrupt("return",i.open({where:document.body,url:pn(n),messageHandlersFilter:s.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cn,dontclear:!0},(function(e){return new Promise(t(r().mark((function t(i,s){var a,o,u;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=function(){lr().clearTimeout(o),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:a=K(n,"network-request-failed"),o=lr().setTimeout((function(){s(a)}),un.get()),e.ping(u).then(u,(function(){s(a)}));case 6:case"end":return t.stop()}}),t)}))))})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var dn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vn=e("aO",function(){function e(e){this.window=e,this.associatedEvent=null}return e.prototype.close=function(){if(this.window)try{this.window.close()}catch(e){}},e}());function mn(e,t,r,n,i){void 0===n&&(n=500),void 0===i&&(i=600);var s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),o="",u=Object.assign(Object.assign({},dn),{width:n.toString(),height:i.toString(),top:s,left:a}),c=f().toLowerCase();r&&(o=$e(c)?"_blank":r),Qe(c)&&(t=t||"http://localhost",u.scrollbars="yes");var h=Object.entries(u).reduce((function(e,t){return""+e+t[0]+"="+t[1]+","}),"");if(function(e){var t;return void 0===e&&(e=f()),it(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t||"",o),new vn(null);var p=window.open(t||"",o,h);q(p,e,"popup-blocked");try{p.focus()}catch(e){}return new vn(p)}var gn=encodeURIComponent("fac");function wn(e,t,r,n,i,s){return kn.apply(this,arguments)}function kn(){return(kn=t(r().mark((function e(t,n,i,s,a,o){var u,c,h,p,l,f,d,v,m,g,w,k,y;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key"),u={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:s,v:E,eventId:a},n instanceof Ft)for(n.setDefaultLanguage(t.languageCode),u.providerId=n.providerId||"",x(n.getCustomParameters())||(u.customParameters=JSON.stringify(n.getCustomParameters())),c=0,h=Object.entries(o||{});c<h.length;c++)p=h[c],l=p[0],f=p[1],u[l]=f;for(n instanceof jt&&(d=n.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=d.join(",")),t.tenantId&&(u.tid=t.tenantId),v=u,m=0,g=Object.keys(v);m<g.length;m++)w=g[m],void 0===v[w]&&delete v[w];return e.next=10,t._getAppCheckToken();case 10:return k=e.sent,y=k?"#"+gn+"="+encodeURIComponent(k):"",e.abrupt("return",yn(t)+"?"+b(v).slice(1)+y);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yn(e){var t=e.config;return t.emulator?Z(t,"emulator/auth/handler"):"https://"+t.authDomain+"/__/auth/handler"}
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var bn="webStorageSupport",_n=e("k",function(){function e(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=or,this._completeRedirectFn=qr,this._overrideRedirectResult=Kr}var i=e.prototype;return i._openPopup=function(){var e=t(r().mark((function e(t,n,i,s){var a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(null===(a=this.eventManagers[t._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()"),e.next=3,wn(t,n,i,B(),s);case 3:return o=e.sent,e.abrupt("return",mn(t,o,hr()));case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}(),i._openRedirect=function(){var e=t(r().mark((function e(t,n,i,s){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._originValidation(t);case 2:return e.next=4,wn(t,n,i,B(),s);case 4:return fr(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r,n,i){return e.apply(this,arguments)}}(),i._initialize=function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,s=n.promise;return i?Promise.resolve(i):(G(s,"If manager is not set, promise should be"),s)}var a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch((function(){delete t.eventManagers[r]})),a},i.initAndGetManager=function(){var e=t(r().mark((function e(t){var n,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ln(t);case 2:return n=e.sent,i=new Gr(t),n.register("authEvent",(function(e){return q(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=n,e.abrupt("return",i);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),i._isIframeWebStorageSupported=function(e,t){this.iframes[e._key()].send(bn,{type:bn},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),H(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)},i._originValidation=function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return en.apply(this,arguments)}(e)),this.originValidationPromises[t]},n(e,[{key:"_shouldInitProactively",get:function(){return st()||Ze()||it()}}]),e}()),xn="@firebase/auth",In="1.6.1",En=function(){function e(e){this.auth=e,this.internalListeners=new Map}var n=e.prototype;return n.getUid=function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null},n.getToken=function(){var e=t(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.assertAuthConfigured(),e.next=3,this.auth._initializationPromise;case 3:if(this.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,this.auth.currentUser.getIdToken(t);case 7:return n=e.sent,e.abrupt("return",{accessToken:n});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.addAuthTokenListener=function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}},n.removeAuthTokenListener=function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())},n.assertAuthConfigured=function(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")},n.updateProactiveRefresh=function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()},e}();
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
var Tn,Sn=u("authIdTokenMaxAge")||300,Rn=null;dt={loadJS:function(e){return new Promise((function(t,r){var n,i,s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=function(e){var t=K("internal-error");t.customData=e,r(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(s)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Tn="Browser",I(new N("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),a=n.options,o=a.apiKey,u=a.authDomain;q(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});var c={apiKey:o,authDomain:u,clientPlatform:Tn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:at(Tn)},h=new pt(n,i,s,c);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(qe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(h,r),h}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),I(new N("auth-internal",(function(e){return function(e){return new En(e)}(lt(e.getProvider("auth").getImmediate()))}),"PRIVATE").setInstantiationMode("EXPLICIT")),T(xn,In,
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Tn)),T(xn,In,"esm2017")}}}));

System.register("chunks:///_virtual/index.esm.js",["./index.esm2017.js"],(function(e){var n;return{setters:[function(t){n=t.registerVersion;var i={};i.SDK_VERSION=t.SDK_VERSION,i._DEFAULT_ENTRY_NAME=t._DEFAULT_ENTRY_NAME,i._addComponent=t._addComponent,i._apps=t._apps,i._components=t._components,i._getProvider=t._getProvider,i._registerComponent=t._registerComponent,i.getApp=t.getApp,i.initializeApp=t.initializeApp,i.registerVersion=t.registerVersion,e(i)}],execute:function(){
/**
       * @license
       * Copyright 2020 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
n("firebase","10.8.1","app")}}}));

System.register("chunks:///_virtual/index.esm2017.js",["./rollupPluginModLoBabelHelpers.js","./index.esm20174.js","./index.esm20173.js","./index.esm20175.js","./index.js"],(function(e){var t,r,a,n,i,s,o,c,u,p,h,f,b,l,d;return{setters:[function(e){t=e.createForOfIteratorHelperLoose,r=e.createClass,a=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){i=e.ComponentContainer,s=e.Component},function(e){o=e.Logger},function(t){c=t.getDefaultAppConfig,u=t.deepEqual,p=t.ErrorFactory,h=t.base64urlEncodeWithoutPadding,f=t.validateIndexedDBOpenable,b=t.isIndexedDBAvailable,l=t.FirebaseError,e("FirebaseError",t.FirebaseError)},function(e){d=e.openDB}],execute:function(){var m,g;
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */e({_addComponent:E,_getProvider:function(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});r&&r.triggerHeartbeat();return e.container.getProvider(t)}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */,_registerComponent:I,getApp:function(e){void 0===e&&(e=y);var t=D.get(e);if(!t&&e===y&&c())return N();if(!t)throw P.create("no-app",{appName:e});return t},initializeApp:N,registerVersion:O});var v=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();var w="@firebase/app",_="0.9.28",x=new o("@firebase/app"),y=e("_DEFAULT_ENTRY_NAME","[DEFAULT]"),k=((m={})[w]="fire-core",m["@firebase/app-compat"]="fire-core-compat",m["@firebase/analytics"]="fire-analytics",m["@firebase/analytics-compat"]="fire-analytics-compat",m["@firebase/app-check"]="fire-app-check",m["@firebase/app-check-compat"]="fire-app-check-compat",m["@firebase/auth"]="fire-auth",m["@firebase/auth-compat"]="fire-auth-compat",m["@firebase/database"]="fire-rtdb",m["@firebase/database-compat"]="fire-rtdb-compat",m["@firebase/functions"]="fire-fn",m["@firebase/functions-compat"]="fire-fn-compat",m["@firebase/installations"]="fire-iid",m["@firebase/installations-compat"]="fire-iid-compat",m["@firebase/messaging"]="fire-fcm",m["@firebase/messaging-compat"]="fire-fcm-compat",m["@firebase/performance"]="fire-perf",m["@firebase/performance-compat"]="fire-perf-compat",m["@firebase/remote-config"]="fire-rc",m["@firebase/remote-config-compat"]="fire-rc-compat",m["@firebase/storage"]="fire-gcs",m["@firebase/storage-compat"]="fire-gcs-compat",m["@firebase/firestore"]="fire-fst",m["@firebase/firestore-compat"]="fire-fst-compat",m["fire-js"]="fire-js",m.firebase="fire-js-all",m),D=e("_apps",new Map),C=e("_components",new Map);function E(e,t){try{e.container.addComponent(t)}catch(r){x.debug("Component "+t.name+" failed to register with FirebaseApp "+e.name,r)}}function I(e){var r=e.name;if(C.has(r))return x.debug("There were multiple attempts to register component "+r+"."),!1;C.set(r,e);for(var a,n=t(D.values());!(a=n()).done;){E(a.value,e)}return!0}var S=((g={})["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",g["bad-app-name"]="Illegal App name: '{$appName}",g["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",g["app-deleted"]="Firebase App named '{$appName}' already deleted",g["no-options"]="Need to provide options, when not being deployed to hosting via source.",g["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",g["invalid-log-argument"]="First argument to `onLog` must be null or a function.",g["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",g["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",g["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",g["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",g),P=new p("app","Firebase",S),j=function(){function e(e,t,r){var a=this;this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s("app",(function(){return a}),"PUBLIC"))}return e.prototype.checkDestroyed=function(){if(this.isDeleted)throw P.create("app-deleted",{appName:this._name})},r(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}}]),e}();e("SDK_VERSION","10.8.1");function N(e,r){void 0===r&&(r={});var a=e;"object"!=typeof r&&(r={name:r});var n=Object.assign({name:y,automaticDataCollectionEnabled:!1},r),s=n.name;if("string"!=typeof s||!s)throw P.create("bad-app-name",{appName:String(s)});if(a||(a=c()),!a)throw P.create("no-options");var o=D.get(s);if(o){if(u(a,o.options)&&u(n,o.config))return o;throw P.create("duplicate-app",{appName:s})}for(var p,h=new i(s),f=t(C.values());!(p=f()).done;){var b=p.value;h.addComponent(b)}var l=new j(a,n,h);return D.set(s,l),l}function O(e,t,r){var a,n=null!==(a=k[e])&&void 0!==a?a:e;r&&(n+="-"+r);var i=n.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var c=['Unable to register library "'+n+'" with version "'+t+'":'];return i&&c.push('library name "'+n+'" contains illegal characters (whitespace or "/")'),i&&o&&c.push("and"),o&&c.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void x.warn(c.join(" "))}I(new s(n+"-version",(function(){return{library:n,version:t}}),"VERSION"))}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var A="firebase-heartbeat-store",B=null;function F(){return B||(B=d("firebase-heartbeat-database",1,{upgrade:function(e,t){switch(t){case 0:try{e.createObjectStore(A)}catch(e){console.warn(e)}}}}).catch((function(e){throw P.create("idb-open",{originalErrorMessage:e.message})}))),B}function H(e){return M.apply(this,arguments)}function M(){return(M=a(n().mark((function e(t){var r,a,i,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return r=e.sent,a=r.transaction(A),e.next=7,a.objectStore(A).get(U(t));case 7:return i=e.sent,e.next=10,a.done;case 10:return e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),e.t0 instanceof l?x.warn(e.t0.message):(s=P.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),x.warn(s.message));case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function T(e,t){return $.apply(this,arguments)}function $(){return($=a(n().mark((function e(t,r){var a,i,s,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:return a=e.sent,i=a.transaction(A,"readwrite"),s=i.objectStore(A),e.next=8,s.put(r,U(t));case 8:return e.next=10,i.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof l?x.warn(e.t0.message):(o=P.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),x.warn(o.message));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function U(e){return e.name+"!"+e.options.appId}
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var L=function(){function e(e){var t=this;this.container=e,this._heartbeatsCache=null;var r=this.container.getProvider("app").getImmediate();this._storage=new J(r),this._heartbeatsCachePromise=this._storage.read().then((function(e){return t._heartbeatsCache=e,e}))}var t=e.prototype;return t.triggerHeartbeat=function(){var e=a(n().mark((function e(){var t,r,a,i,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.container.getProvider("platform-logger").getImmediate(),i=a.getPlatformInfoString(),s=R(),null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)){e.next=9;break}return e.next=6,this._heartbeatsCachePromise;case 6:if(this._heartbeatsCache=e.sent,null!=(null===(r=this._heartbeatsCache)||void 0===r?void 0:r.heartbeats)){e.next=9;break}return e.abrupt("return");case 9:if(this._heartbeatsCache.lastSentHeartbeatDate!==s&&!this._heartbeatsCache.heartbeats.some((function(e){return e.date===s}))){e.next=13;break}return e.abrupt("return");case 13:this._heartbeatsCache.heartbeats.push({date:s,agent:i});case 14:return this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",this._storage.overwrite(this._heartbeatsCache));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.getHeartbeatsHeader=function(){var e=a(n().mark((function e(){var t,r,a,i,s,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this._heartbeatsCache){e.next=3;break}return e.next=3,this._heartbeatsCachePromise;case 3:if(null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&0!==this._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=R(),a=V(this._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,s=a.unsentEntries,o=h(JSON.stringify({version:2,heartbeats:i})),this._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return this._heartbeatsCache.heartbeats=s,e.next=13,this._storage.overwrite(this._heartbeatsCache);case 13:e.next=17;break;case 15:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache);case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),e}();function R(){return(new Date).toISOString().substring(0,10)}function V(e,r){void 0===r&&(r=1024);for(var a,n=[],i=e.slice(),s=function(){var e=a.value,t=n.find((function(t){return t.agent===e.agent}));if(t){if(t.dates.push(e.date),q(n)>r)return t.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),q(n)>r)return n.pop(),"break";i=i.slice(1)},o=t(e);!(a=o()).done;){if("break"===s())break}return{heartbeatsToSend:n,unsentEntries:i}}var z,J=function(){function e(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}var t=e.prototype;return t.runIndexedDBEnvironmentCheck=function(){var e=a(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",f().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t.read=function(){var e=a(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,H(this.app);case 9:if(!(null==(t=e.sent)?void 0:t.heartbeats)){e.next=14;break}return e.abrupt("return",t);case 14:return e.abrupt("return",{heartbeats:[]});case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.overwrite=function(){var e=a(n().mark((function e(t){var r,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return a=e.sent,e.abrupt("return",T(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.add=function(){var e=a(n().mark((function e(t){var r,a;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return a=e.sent,e.abrupt("return",T(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:a.lastSentHeartbeatDate,heartbeats:[].concat(a.heartbeats,t.heartbeats)}));case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e}();function q(e){return h(JSON.stringify({version:2,heartbeats:e})).length}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */z="",I(new s("platform-logger",(function(e){return new v(e)}),"PRIVATE")),I(new s("heartbeat",(function(e){return new L(e)}),"PRIVATE")),O(w,_,z),O(w,_,"esm2017"),O("fire-js","")}}}));

System.register("chunks:///_virtual/index.esm20172.js",["./rollupPluginModLoBabelHelpers.js","./index.esm2017.js","./index.esm20174.js","./index.esm20175.js","./index.esm20173.js"],(function(e){var t,n,i,r,o,s,a,u,l,h,c,d,f,p,_,v,g,m,y,C,w,T,I,k,b,E,S,N,P,x,R,D,M,F,q,A,L,O,W;return{setters:[function(e){t=e.inheritsLoose,n=e.assertThisInitialized,i=e.createForOfIteratorHelperLoose,r=e.createClass,o=e.asyncToGenerator,s=e.regeneratorRuntime},function(e){a=e.getApp,u=e._getProvider,l=e._registerComponent,h=e.registerVersion,c=e.SDK_VERSION},function(e){d=e.Component},function(e){f=e.isNodeSdk,p=e.stringify,_=e.assert,v=e.Deferred,g=e.contains,m=e.safeGet,y=e.isAdmin,C=e.isValidFormat,w=e.isEmpty,T=e.isMobileCordova,I=e.isReactNative,k=e.assertionError,b=e.base64,E=e.getModularInstance,S=e.getDefaultEmulatorHostnameAndPort,N=e.createMockUserToken,P=e.stringToByteArray,x=e.Sha1,R=e.map,D=e.stringLength,M=e.errorPrefix,F=e.jsonEval,q=e.querystring,A=e.deepCopy,L=e.base64Encode},function(e){O=e.Logger,W=e.LogLevel}],execute:function(){e({_repoManagerDatabaseFromApp:so,_setSDKVersion:z,child:to,connectDatabaseEmulator:lo,get:function(e){e=E(e);var t=new Jr((function(){})),n=new io(t);return function(e,t,n){var i=function(e,t){var n=t._path,i=null;e.syncPointTree_.foreachOnPath(n,(function(e,t){var r=nt(e,n);i=i||mi(t,r)}));var r=e.syncPointTree_.get(n);r?i=i||mi(r,Ke()):(r=new di,e.syncPointTree_=e.syncPointTree_.set(n,r));var o=null!=i,s=o?new pn(i,!0,!1):null,a=Fn(e.pendingWriteTree_,t._path);return function(e){return Cn(e.viewCache_)}(pi(r,t,a,o?s.getNode():Ot.EMPTY_NODE,o))}(e.serverSyncTree_,t);if(null!=i)return Promise.resolve(i);return e.server_.get(t).then((function(i){var r,o=Ut(i).withIndex(t._queryParams.getIndex());if(Ri(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Ni(e.serverSyncTree_,t._path,o);else{var s=Li(e.serverSyncTree_,t);r=xi(e.serverSyncTree_,t._path,o,s)}return yr(e.eventQueue_,t._path,r),Pi(e.serverSyncTree_,t,n,null,!0),o}),(function(n){return Dr(e,"get for query "+p(t)+" failed: "+n),Promise.reject(new Error(n))}))}(e._repo,e,n).then((function(t){return new eo(t,new Zr(e._repo,e._path),e._queryParams.getIndex())}))},getDatabase:function(e,t){void 0===e&&(e=a());var n=u(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){var i=S("database");i&&lo.apply(void 0,[n].concat(i))}return n},off:function(e,t,n){var i=null,r=n?new Jr(n):null;"value"===t?i=new io(r):t&&(i=new ro(t,r));Rr(e._repo,e,i)},onValue:function(e,t,n,i){return function(e,t,n,i,r){var o;"object"==typeof i&&(o=void 0,r=i);"function"==typeof i&&(o=i);if(r&&r.onlyOnce){var s=n,a=function(t,n){Rr(e._repo,e,l),s(t,n)};a.userCallback=n.userCallback,a.context=n.context,n=a}var u=new Jr(n,o||void 0),l="value"===t?new io(u):new ro(t,u);return function(e,t,n){var i;i=".info"===Qe(t._path)?Ri(e.infoSyncTree_,t,n):Ri(e.serverSyncTree_,t,n);mr(e.eventQueue_,t._path,i)}(e._repo,e,l),function(){return Rr(e._repo,e,l)}}(e,"value",t,n,i)},push:function(e,t){e=E(e),pr("push",e._path),cr("push",t,e._path,!0);var n,i=kr(e._repo),r=Qr(i),o=to(e,r),s=to(e,r);n=null!=t?no(s,t).then((function(){return s})):Promise.resolve(s);return o.then=n.then.bind(n),o.catch=n.then.bind(n,void 0),o},ref:function(e,t){return(e=E(e))._checkNotDeleted("ref"),void 0!==t?to(e._root,t):e._root},remove:function(e){return pr("remove",e._path),no(e,null)},set:no,update:function(e,t){!function(e,t,n,i){if(i&&void 0===t)return;var r=M(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");var o=[];ve(t,(function(e,t){var i,s=new Be(e);if(dr(r,t,et(n,s)),".priority"===Je(s)&&!(null===(i=t)||"string"==typeof i||"number"==typeof i&&!ue(i)||i&&"object"==typeof i&&g(i,".sv")))throw new Error(r+"contains an invalid value for '"+s.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(s)})),function(e,t){var n,i;for(n=0;n<t.length;n++)for(var r=Xe(i=t[n]),o=0;o<r.length;o++)if(".priority"===r[o]&&o===r.length-1);else if(!lr(r[o]))throw new Error(e+"contains an invalid key ("+r[o]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');t.sort(it);var s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&ot(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(r,o)}("update",t,e._path,!1);var n=new v;return xr(e._repo,e._path,t,n.wrapCallback((function(){}))),n.promise}});var U="@firebase/database",j="1.0.3",H="";function z(e){H=e}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var V,Y=function(){function e(e){this.domStorage_=e,this.prefix_="firebase:"}var t=e.prototype;return t.set=function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),p(t))},t.get=function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:F(t)},t.remove=function(e){this.domStorage_.removeItem(this.prefixedName_(e))},t.prefixedName_=function(e){return this.prefix_+e},t.toString=function(){return this.domStorage_.toString()},e}(),B=function(){function e(){this.cache_={},this.isInMemoryStorage=!0}var t=e.prototype;return t.set=function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t},t.get=function(e){return g(this.cache_,e)?this.cache_[e]:null},t.remove=function(e){delete this.cache_[e]},e}(),K=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Y(t)}}catch(e){}return new B},Q=K("localStorage"),G=K("sessionStorage"),$=new O("@firebase/database"),J=(V=1,function(){return V++}),X=function(e){var t=P(e),n=new x;n.update(t);var i=n.digest();return b.encodeByteArray(i)},Z=function e(){for(var t="",n=0;n<arguments.length;n++){var i=n<0||arguments.length<=n?void 0:arguments[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=e.apply(null,i):t+="object"==typeof i?p(i):i,t+=" "}return t},ee=null,te=!0,ne=function(e,t){_(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?($.logLevel=W.VERBOSE,ee=$.log.bind($),t&&G.set("logging_enabled",!0)):"function"==typeof e?ee=e:(ee=null,G.remove("logging_enabled"))},ie=function(){if(!0===te&&(te=!1,null===ee&&!0===G.get("logging_enabled")&&ne(!0)),ee){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=Z.apply(null,t);ee(i)}},re=function(e){return function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];ie.apply(void 0,[e].concat(n))}},oe=function(){var e="FIREBASE INTERNAL ERROR: "+Z.apply(void 0,arguments);$.error(e)},se=function(){var e="FIREBASE FATAL ERROR: "+Z.apply(void 0,arguments);throw $.error(e),new Error(e)},ae=function(){var e="FIREBASE WARNING: "+Z.apply(void 0,arguments);$.warn(e)},ue=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},le="[MIN_NAME]",he="[MAX_NAME]",ce=function(e,t){if(e===t)return 0;if(e===le||t===he)return-1;if(t===le||e===he)return 1;var n=ye(e),i=ye(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1},de=function(e,t){return e===t?0:e<t?-1:1},fe=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+p(t))},pe=function e(t){if("object"!=typeof t||null===t)return p(t);var n=[];for(var i in t)n.push(i);n.sort();for(var r="{",o=0;o<n.length;o++)0!==o&&(r+=","),r+=p(n[o]),r+=":",r+=e(t[n[o]]);return r+="}"},_e=function(e,t){var n=e.length;if(n<=t)return[e];for(var i=[],r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function ve(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var ge=function(e){_(!ue(e),"Invalid JSON number");var t,n,i,r,o,s=1023;0===e?(n=0,i=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(r=Math.min(Math.floor(Math.log(e)/Math.LN2),s))+s,i=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(n=0,i=Math.round(e/Math.pow(2,-1074))));var a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(t?1:0),a.reverse();var u=a.join(""),l="";for(o=0;o<64;o+=8){var h=parseInt(u.substr(o,8),2).toString(16);1===h.length&&(h="0"+h),l+=h}return l.toLowerCase()};var me=new RegExp("^-?(0*)\\d{1,10}$"),ye=function(e){if(me.test(e)){var t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Ce=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw ae("Exception was thrown by user callback.",t),e}),Math.floor(0))}},we=function(e,t){var n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n},Te=function(){function e(e,t){var n=this;this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((function(e){return n.appCheck=e}))}var t=e.prototype;return t.getToken=function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,i){setTimeout((function(){t.appCheck?t.getToken(e).then(n,i):n(null)}),0)}))},t.addTokenChangeListener=function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))},t.notifyForInvalidToken=function(){ae('Provided AppCheck credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly.')},e}(),Ie=function(){function e(e,t,n){var i=this;this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((function(e){return i.auth_=e}))}var t=e.prototype;return t.getToken=function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,i){setTimeout((function(){t.auth_?t.getToken(e).then(n,i):n(null)}),0)}))},t.addTokenChangeListener=function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))},t.removeTokenChangeListener=function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))},t.notifyForInvalidToken=function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ae(e)},e}(),ke=function(){function e(e){this.accessToken=e}var t=e.prototype;return t.getToken=function(e){return Promise.resolve({accessToken:this.accessToken})},t.addTokenChangeListener=function(e){e(this.accessToken)},t.removeTokenChangeListener=function(e){},t.notifyForInvalidToken=function(){},e}();ke.OWNER="owner";
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var be=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ee="websocket",Se="long_polling",Ne=function(){function e(e,t,n,i,r,o,s,a){void 0===r&&(r=!1),void 0===o&&(o=""),void 0===s&&(s=!1),void 0===a&&(a=!1),this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Q.get("host:"+e)||this._host}var t=e.prototype;return t.isCacheableHost=function(){return"s-"===this.internalHost.substr(0,2)},t.isCustomHost=function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain},t.toString=function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e},t.toURLString=function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return""+e+this.host+"/"+t},r(e,[{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Q.set("host:"+this._host,this.internalHost))}}]),e}();function Pe(e,t,n){var i;if(_("string"==typeof t,"typeof type must == string"),_("object"==typeof n,"typeof params must == object"),t===Ee)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Se)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var r=[];return ve(n,(function(e,t){r.push(e+"="+t)})),i+r.join("&")}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var xe=function(){function e(){this.counters_={}}var t=e.prototype;return t.incrementCounter=function(e,t){void 0===t&&(t=1),g(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t},t.get=function(){return A(this.counters_)},e}(),Re={},De={};
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function Me(e){var t=e.toString();return Re[t]||(Re[t]=new xe),Re[t]}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var Fe=function(){function e(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}var t=e.prototype;return t.closeAfter=function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)},t.handleResponse=function(e,t){var n=this;this.pendingResponses[e]=t;for(var i=function(){var e=n.pendingResponses[n.currentResponseNum];delete n.pendingResponses[n.currentResponseNum];for(var t=function(t){e[t]&&Ce((function(){n.onMessage_(e[t])}))},i=0;i<e.length;++i)t(i);if(n.currentResponseNum===n.closeAfterResponse)return n.onClose&&(n.onClose(),n.onClose=null),"break";n.currentResponseNum++};this.pendingResponses[this.currentResponseNum];){if("break"===i())break}},e}(),qe="start",Ae="close",Le=function(){function e(e,t,n,i,r,o,s){var a=this;this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=re(e),this.stats_=Me(t),this.urlFn=function(e){return a.appCheckToken&&(e.ac=a.appCheckToken),Pe(t,Se,e)}}var t=e.prototype;return t.open=function(e,t){var n=this;this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Fe(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){n.log_("Timed out trying to connect."),n.onClosed_(),n.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{var t=!1,n=function n(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){if(!n.isClosed_){n.scriptTagHolder=new Oe((function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=t[0],o=t[1],s=t[2];t[3],t[4];if(n.incrementIncomingBytes_(t),n.scriptTagHolder)if(n.connectTimeoutTimer_&&(clearTimeout(n.connectTimeoutTimer_),n.connectTimeoutTimer_=null),n.everConnected_=!0,r===qe)n.id=o,n.password=s;else{if(r!==Ae)throw new Error("Unrecognized command received: "+r);o?(n.scriptTagHolder.sendNewPolls=!1,n.myPacketOrderer.closeAfter(o,(function(){n.onClosed_()}))):n.onClosed_()}}),(function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=t[0],o=t[1];n.incrementIncomingBytes_(t),n.myPacketOrderer.handleResponse(r,o)}),(function(){n.onClosed_()}),n.urlFn);var e={start:"t"};e.ser=Math.floor(1e8*Math.random()),n.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=n.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",n.transportSessionId&&(e.s=n.transportSessionId),n.lastSessionId&&(e.ls=n.lastSessionId),n.applicationId&&(e.p=n.applicationId),n.appCheckToken&&(e.ac=n.appCheckToken),"undefined"!=typeof location&&location.hostname&&be.test(location.hostname)&&(e.r="f");var t=n.urlFn(e);n.log_("Connecting via long-poll to "+t),n.scriptTagHolder.addTag(t,(function(){}))}}))},t.start=function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)},e.forceAllow=function(){e.forceAllow_=!0},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){return!!e.forceAllow_||!(e.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)},t.markConnectionHealthy=function(){},t.shutdown_=function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)},t.onClosed_=function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))},t.close=function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())},t.send=function(e){var t=p(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=L(t),i=_e(n,1840),r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++},t.addDisconnectPingFrame=function(e,t){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)},t.incrementIncomingBytes_=function(e){var t=p(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)},e}(),Oe=function(){function e(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,this.uniqueCallbackIdentifier=J(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=n,this.myIFrame=e.createIFrame_();var o="";this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)&&(o='<script>document.domain="'+document.domain+'";<\/script>');var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){ie("frame writing exception"),e.stack&&ie(e.stack),ie(e)}}e.createIFrame_=function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e};var t=e.prototype;return t.close=function(){var e=this;this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0)));var t=this.onDisconnect;t&&(this.onDisconnect=null,t())},t.startLongPoll=function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););},t.newRequest_=function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",i=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var r=this.pendingSegs.shift();n=n+"&seg"+i+"="+r.seg+"&ts"+i+"="+r.ts+"&d"+i+"="+r.d,i++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1},t.enqueueSegment=function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()},t.addLongPollTag_=function(e,t){var n=this;this.outstandingRequests.add(t);var i=function(){n.outstandingRequests.delete(t),n.newRequest_()},r=setTimeout(i,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(r),i()}))},t.addTag=function(e,t){var n=this;setTimeout((function(){try{if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){ie("Long-poll script failed to load: "+e),n.sendNewPolls=!1,n.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))},e}(),We=null;
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */"undefined"!=typeof MozWebSocket?We=MozWebSocket:"undefined"!=typeof WebSocket&&(We=WebSocket);var Ue=function(){function e(t,n,i,r,o,s,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=re(this.connId),this.stats_=Me(n),this.connURL=e.connectionURL_(n,s,a,r,i),this.nodeAdmin=n.nodeAdmin}e.connectionURL_=function(e,t,n,i,r){var o={v:"5"};return"undefined"!=typeof location&&location.hostname&&be.test(location.hostname)&&(o.r="f"),t&&(o.s=t),n&&(o.ls=n),i&&(o.ac=i),r&&(o.p=r),Pe(e,Ee,o)};var t=e.prototype;return t.open=function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Q.set("previous_websocket_failure",!0);try{f(),this.mySock=new We(this.connURL,[],undefined)}catch(e){this.log_("Error instantiating WebSocket.");var i=e.message||e.data;return i&&this.log_(i),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}},t.start=function(){},e.forceDisallow=function(){e.forceDisallow_=!0},e.isAvailable=function(){var t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==We&&!e.forceDisallow_},e.previouslyFailed=function(){return Q.isInMemoryStorage||!0===Q.get("previous_websocket_failure")},t.markConnectionHealthy=function(){Q.remove("previous_websocket_failure")},t.appendFrame_=function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=F(t);this.onMessage(n)}},t.handleNewFrameCount_=function(e){this.totalFrames=e,this.frames=[]},t.extractFrameCount_=function(e){if(_(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e},t.handleIncomingFrame=function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}},t.send=function(e){this.resetKeepAlive();var t=p(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=_e(t,16384);n.length>1&&this.sendString_(String(n.length));for(var i=0;i<n.length;i++)this.sendString_(n[i])},t.shutdown_=function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)},t.onClosed_=function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))},t.close=function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())},t.resetKeepAlive=function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))},t.sendString_=function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}},e}();Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var je=function(){function e(e){this.initTransports_(e)}var t=e.prototype;return t.initTransports_=function(t){var n=Ue&&Ue.isAvailable(),r=n&&!Ue.previouslyFailed();if(t.webSocketOnly&&(n||ae("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ue];else{for(var o,s=this.transports_=[],a=i(e.ALL_TRANSPORTS);!(o=a()).done;){var u=o.value;u&&u.isAvailable()&&s.push(u)}e.globalTransportInitialized_=!0}},t.initialTransport=function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")},t.upgradeTransport=function(){return this.transports_.length>1?this.transports_[1]:null},r(e,null,[{key:"ALL_TRANSPORTS",get:function(){return[Le,Ue]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),e}();je.globalTransportInitialized_=!1;
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var He=function(){function e(e,t,n,i,r,o,s,a,u,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=re("c:"+this.id+":"),this.transportManager_=new je(t),this.log_("Connection created"),this.start_()}var t=e.prototype;return t.start_=function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,i)}),Math.floor(0));var r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=we((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(r)))},t.nextTransportId_=function(){return"c:"+this.id+":"+this.connectionCount++},t.disconnReceiver_=function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}},t.connReceiver_=function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}},t.sendRequest=function(e){var t={t:"d",d:e};this.sendData_(t)},t.tryCleanupConnection=function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)},t.onSecondaryControl_=function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}},t.onSecondaryMessageReceived_=function(e){var t=fe("t",e),n=fe("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}},t.upgradeIfSecondaryHealthy_=function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))},t.proceedWithUpgrade_=function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()},t.onPrimaryMessageReceived_=function(e){var t=fe("t",e),n=fe("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)},t.onDataMessage_=function(e){this.onPrimaryResponse_(),this.onMessage_(e)},t.onPrimaryResponse_=function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))},t.onControl_=function(e){var t=fe("t",e);if("d"in e){var n=e.d;if("h"===t){var i=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?oe("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):oe("Unknown control packet command: "+t)}},t.onHandshake_=function(e){var t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ae("Protocol version mismatch detected"),this.tryStartUpgrade_())},t.tryStartUpgrade_=function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)},t.startUpgrade_=function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),we((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))},t.onReset_=function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())},t.onConnectionEstablished_=function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):we((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))},t.sendPingOnPrimaryIfNecessary_=function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))},t.onSecondaryConnectionLost_=function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()},t.onConnectionLost_=function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Q.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()},t.onConnectionShutdown_=function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()},t.sendData_=function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)},t.close=function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))},t.closeConnections_=function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)},e}(),ze=function(){function e(){}var t=e.prototype;return t.put=function(e,t,n,i){},t.merge=function(e,t,n,i){},t.refreshAuthToken=function(e){},t.refreshAppCheckToken=function(e){},t.onDisconnectPut=function(e,t,n){},t.onDisconnectMerge=function(e,t,n){},t.onDisconnectCancel=function(e,t){},t.reportStats=function(e){},e}(),Ve=function(){function e(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}var t=e.prototype;return t.trigger=function(e){if(Array.isArray(this.listeners_[e])){for(var t=[].concat(this.listeners_[e]),n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(var o=0;o<t.length;o++)t[o].callback.apply(t[o].context,i)}},t.on=function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var i=this.getInitialEvent(e);i&&t.apply(n,i)},t.off=function(e,t,n){this.validateEventType_(e);for(var i=this.listeners_[e]||[],r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)},t.validateEventType_=function(e){_(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)},e}(),Ye=function(e){function n(){var t;return(t=e.call(this,["online"])||this).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||T()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}t(n,e),n.getInstance=function(){return new n};var i=n.prototype;return i.getInitialEvent=function(e){return _("online"===e,"Unknown event type: "+e),[this.online_]},i.currentlyOnline=function(){return this.online_},n}(Ve),Be=function(){function e(e,t){if(void 0===t){this.pieces_=e.split("/");for(var n=0,i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[n]=this.pieces_[i],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}return e.prototype.toString=function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"},e}();function Ke(){return new Be("")}function Qe(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ge(e){return e.pieces_.length-e.pieceNum_}function $e(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Be(e.pieces_,t)}function Je(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Xe(e,t){return void 0===t&&(t=0),e.pieces_.slice(e.pieceNum_+t)}function Ze(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Be(t,0)}function et(e,t){for(var n=[],i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Be)for(var r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else for(var o=t.split("/"),s=0;s<o.length;s++)o[s].length>0&&n.push(o[s]);return new Be(n,0)}function tt(e){return e.pieceNum_>=e.pieces_.length}function nt(e,t){var n=Qe(e),i=Qe(t);if(null===n)return t;if(n===i)return nt($e(e),$e(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function it(e,t){for(var n=Xe(e,0),i=Xe(t,0),r=0;r<n.length&&r<i.length;r++){var o=ce(n[r],i[r]);if(0!==o)return o}return n.length===i.length?0:n.length<i.length?-1:1}function rt(e,t){if(Ge(e)!==Ge(t))return!1;for(var n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function ot(e,t){var n=e.pieceNum_,i=t.pieceNum_;if(Ge(e)>Ge(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}var st=function(e,t){this.errorPrefix_=t,this.parts_=Xe(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(var n=0;n<this.parts_.length;n++)this.byteLength_+=D(this.parts_[n]);at(this)};function at(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+ut(e))}function ut(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var lt=function(e){function n(){var t,n,i;return t=e.call(this,["visible"])||this,"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(i="visibilitychange",n="hidden"):void 0!==document.mozHidden?(i="mozvisibilitychange",n="mozHidden"):void 0!==document.msHidden?(i="msvisibilitychange",n="msHidden"):void 0!==document.webkitHidden&&(i="webkitvisibilitychange",n="webkitHidden")),t.visible_=!0,i&&document.addEventListener(i,(function(){var e=!document[n];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return t(n,e),n.getInstance=function(){return new n},n.prototype.getInitialEvent=function(e){return _("visible"===e,"Unknown event type: "+e),[this.visible_]},n}(Ve),ht=1e3,ct=function(e){function r(t,i,o,s,a,u,l,h){var c;if((c=e.call(this)||this).repoInfo_=t,c.applicationId_=i,c.onDataUpdate_=o,c.onConnectStatus_=s,c.onServerInfoUpdate_=a,c.authTokenProvider_=u,c.appCheckTokenProvider_=l,c.authOverride_=h,c.id=r.nextPersistentConnectionId_++,c.log_=re("p:"+c.id+":"),c.interruptReasons_={},c.listens=new Map,c.outstandingPuts_=[],c.outstandingGets_=[],c.outstandingPutCount_=0,c.outstandingGetCount_=0,c.onDisconnectRequestQueue_=[],c.connected_=!1,c.reconnectDelay_=ht,c.maxReconnectDelay_=3e5,c.securityDebugCallback_=null,c.lastSessionId=null,c.establishConnectionTimer_=null,c.visible_=!1,c.requestCBHash_={},c.requestNumber_=0,c.realtime_=null,c.authToken_=null,c.appCheckToken_=null,c.forceTokenRefresh_=!1,c.invalidAuthTokenCount_=0,c.invalidAppCheckTokenCount_=0,c.firstConnection_=!0,c.lastConnectionAttemptTime_=null,c.lastConnectionEstablishedTime_=null,h&&!f())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return lt.getInstance().on("visible",c.onVisible_,n(c)),-1===t.host.indexOf("fblocal")&&Ye.getInstance().on("online",c.onOnline_,n(c)),c}t(r,e);var a=r.prototype;return a.sendRequest=function(e,t,n){var i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(p(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)},a.get=function(e){this.initConnection_();var t=new v,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:function(e){var n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;var i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise},a.listen=function(e,t,n,i){this.initConnection_();var r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");var s={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)},a.sendGet_=function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(i){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(i)}))},a.sendListen_=function(e){var t=this,n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);var s={p:i};e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(function(s){var a=s.d,u=s.s;r.warnOnListenWarnings_(a,n),(t.listens.get(i)&&t.listens.get(i).get(o))===e&&(t.log_("listen response",s),"ok"!==u&&t.removeListen_(i,o),e.onComplete&&e.onComplete(u,a))}))},r.warnOnListenWarnings_=function(e,t){if(e&&"object"==typeof e&&g(e,"w")){var n=m(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ae("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding "+i+" at "+r+" to your security rules for better performance.")}}},a.refreshAuthToken=function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)},a.reduceReconnectDelayIfAdminCredential_=function(e){(e&&40===e.length||y(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)},a.refreshAppCheckToken=function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))},a.tryAuth=function(){var e=this;if(this.connected_&&this.authToken_){var t=this.authToken_,n=C(t)?"auth":"gauth",i={cred:t};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(n,i,(function(n){var i=n.s,r=n.d||"error";e.authToken_===t&&("ok"===i?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(i,r))}))}},a.tryAppCheck=function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,i=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,i)}))},a.unlisten=function(e,t){var n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)},a.sendUnlisten_=function(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);var r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)},a.onDisconnectPut=function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})},a.onDisconnectMerge=function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})},a.onDisconnectCancel=function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})},a.sendOnDisconnect_=function(e,t,n,i){var r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(function(e){i&&setTimeout((function(){i(e.s,e.d)}),Math.floor(0))}))},a.put=function(e,t,n,i){this.putInternal("p",e,t,n,i)},a.merge=function(e,t,n,i){this.putInternal("m",e,t,n,i)},a.putInternal=function(e,t,n,i,r){this.initConnection_();var o={p:t,d:n};void 0!==r&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;var s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)},a.sendPut_=function(e){var t=this,n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,(function(i){t.log_(n+" response",i),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),r&&r(i.s,i.d)}))},a.reportStats=function(e){var t=this;if(this.connected_){var n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}},a.onDataMessage_=function(e){if("r"in e){this.log_("from server: "+p(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}},a.onDataPush_=function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):oe("Unrecognized action received from server: "+p(e)+"\nAre you using the latest client?")},a.onReady_=function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)},a.scheduleConnect_=function(e){var t=this;_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))},a.initConnection_=function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)},a.onVisible_=function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e},a.onOnline_=function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())},a.onRealtimeDisconnect_=function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ht),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)},a.establishConnection_=function(){var e=o(s().mark((function e(){var t,n,i,o,a,u,l,h,c,d,f,p,v,g=this;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.shouldReconnect_()){e.next=29;break}return this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null,t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+r.nextConnectionId_++,a=this.lastSessionId,u=!1,l=null,h=function(){l?l.close():(u=!0,i())},c=function(e){_(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(e)},this.realtime_={close:h,sendRequest:c},d=this.forceTokenRefresh_,this.forceTokenRefresh_=!1,e.prev=16,e.next=19,Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);case 19:f=e.sent,p=f[0],v=f[1],u?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=v&&v.token,l=new He(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(function(e){ae(e+" ("+g.repoInfo_.toString()+")"),g.interrupt("server_kill")}),a)),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(16),this.log_("Failed to get token: "+e.t0),u||(this.repoInfo_.nodeAdmin&&ae(e.t0),h());case 29:case"end":return e.stop()}}),e,this,[[16,25]])})));return function(){return e.apply(this,arguments)}}(),a.interrupt=function(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())},a.resume=function(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],w(this.interruptReasons_)&&(this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0))},a.handleTimestamp_=function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})},a.cancelSentTransactions_=function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])},a.onListenRevoked_=function(e,t){var n;n=t?t.map((function(e){return pe(e)})).join("$"):"default";var i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")},a.removeListen_=function(e,t){var n,i=new Be(e).toString();if(this.listens.has(i)){var r=this.listens.get(i);n=r.get(t),r.delete(t),0===r.size&&this.listens.delete(i)}else n=void 0;return n},a.onAuthRevoked_=function(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))},a.onAppCheckRevoked_=function(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())},a.onSecurityDebugPacket_=function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))},a.restoreState_=function(){this.tryAuth(),this.tryAppCheck();for(var e,t=i(this.listens.values());!(e=t()).done;)for(var n,r=e.value,o=i(r.values());!(n=o()).done;){var s=n.value;this.sendListen_(s)}for(var a=0;a<this.outstandingPuts_.length;a++)this.outstandingPuts_[a]&&this.sendPut_(a);for(;this.onDisconnectRequestQueue_.length;){var u=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(u.action,u.pathString,u.data,u.onComplete)}for(var l=0;l<this.outstandingGets_.length;l++)this.outstandingGets_[l]&&this.sendGet_(l)},a.sendConnectStats_=function(){var e={};e["sdk.js."+H.replace(/\./g,"-")]=1,T()?e["framework.cordova"]=1:I()&&(e["framework.reactnative"]=1),this.reportStats(e)},a.shouldReconnect_=function(){var e=Ye.getInstance().currentlyOnline();return w(this.interruptReasons_)&&e},r}(ze);
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */ct.nextPersistentConnectionId_=0,ct.nextConnectionId_=0;
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var dt,ft=function(){function e(e,t){this.name=e,this.node=t}return e.Wrap=function(t,n){return new e(t,n)},e}(),pt=function(){function e(){}var t=e.prototype;return t.getCompare=function(){return this.compare.bind(this)},t.indexedValueChanged=function(e,t){var n=new ft(le,e),i=new ft(le,t);return 0!==this.compare(n,i)},t.minPost=function(){return ft.MIN},e}(),_t=function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var i=n.prototype;return i.compare=function(e,t){return ce(e.name,t.name)},i.isDefinedOn=function(e){throw k("KeyIndex.isDefinedOn not expected to be called.")},i.indexedValueChanged=function(e,t){return!1},i.minPost=function(){return ft.MIN},i.maxPost=function(){return new ft(he,dt)},i.makePost=function(e,t){return _("string"==typeof e,"KeyIndex indexValue must always be a string."),new ft(e,dt)},i.toString=function(){return".key"},r(n,null,[{key:"__EMPTY_NODE",get:function(){return dt},set:function(e){dt=e}}]),n}(pt),vt=new _t,gt=function(){function e(e,t,n,i,r){void 0===r&&(r=null),this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];for(var o=1;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,i&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}var t=e.prototype;return t.getNext=function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e},t.hasNext=function(){return this.nodeStack_.length>0},t.peek=function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}},e}(),mt=function(){function e(t,n,i,r,o){this.key=t,this.value=n,this.color=null!=i?i:e.RED,this.left=null!=r?r:wt.EMPTY_NODE,this.right=null!=o?o:wt.EMPTY_NODE}var t=e.prototype;return t.copy=function(t,n,i,r,o){return new e(null!=t?t:this.key,null!=n?n:this.value,null!=i?i:this.color,null!=r?r:this.left,null!=o?o:this.right)},t.count=function(){return this.left.count()+1+this.right.count()},t.isEmpty=function(){return!1},t.inorderTraversal=function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)},t.reverseTraversal=function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)},t.min_=function(){return this.left.isEmpty()?this:this.left.min_()},t.minKey=function(){return this.min_().key},t.maxKey=function(){return this.right.isEmpty()?this.key:this.right.maxKey()},t.insert=function(e,t,n){var i=this,r=n(e,i.key);return(i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n))).fixUp_()},t.removeMin_=function(){if(this.left.isEmpty())return wt.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()},t.remove=function(e,t){var n,i;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return wt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()},t.isRed_=function(){return this.color},t.fixUp_=function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e},t.moveRedLeft_=function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e},t.moveRedRight_=function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e},t.rotateLeft_=function(){var t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)},t.rotateRight_=function(){var t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)},t.colorFlip_=function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)},t.checkMaxDepth_=function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1},t.check_=function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)},e}();
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */mt.RED=!0,mt.BLACK=!1;var yt,Ct=function(){function e(){}var t=e.prototype;return t.copy=function(e,t,n,i,r){return this},t.insert=function(e,t,n){return new mt(e,t,null)},t.remove=function(e,t){return this},t.count=function(){return 0},t.isEmpty=function(){return!0},t.inorderTraversal=function(e){return!1},t.reverseTraversal=function(e){return!1},t.minKey=function(){return null},t.maxKey=function(){return null},t.check_=function(){return 0},t.isRed_=function(){return!1},e}(),wt=function(){function e(t,n){void 0===n&&(n=e.EMPTY_NODE),this.comparator_=t,this.root_=n}var t=e.prototype;return t.insert=function(t,n){return new e(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,mt.BLACK,null,null))},t.remove=function(t){return new e(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,mt.BLACK,null,null))},t.get=function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null},t.getPredecessorKey=function(e){for(var t,n=this.root_,i=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")},t.isEmpty=function(){return this.root_.isEmpty()},t.count=function(){return this.root_.count()},t.minKey=function(){return this.root_.minKey()},t.maxKey=function(){return this.root_.maxKey()},t.inorderTraversal=function(e){return this.root_.inorderTraversal(e)},t.reverseTraversal=function(e){return this.root_.reverseTraversal(e)},t.getIterator=function(e){return new gt(this.root_,null,this.comparator_,!1,e)},t.getIteratorFrom=function(e,t){return new gt(this.root_,e,this.comparator_,!1,t)},t.getReverseIteratorFrom=function(e,t){return new gt(this.root_,e,this.comparator_,!0,t)},t.getReverseIterator=function(e){return new gt(this.root_,null,this.comparator_,!0,e)},e}();
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
function Tt(e,t){return ce(e.name,t.name)}function It(e,t){return ce(e,t)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */wt.EMPTY_NODE=new Ct;var kt,bt,Et,St=function(e){return"number"==typeof e?"number:"+ge(e):"string:"+e},Nt=function(e){if(e.isLeafNode()){var t=e.val();_("string"==typeof t||"number"==typeof t||"object"==typeof t&&g(t,".sv"),"Priority must be a string or number.")}else _(e===yt||e.isEmpty(),"priority of unexpected type.");_(e===yt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Pt=function(){function e(t,n){void 0===n&&(n=e.__childrenNodeConstructor.EMPTY_NODE),this.value_=t,this.priorityNode_=n,this.lazyHash_=null,_(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Nt(this.priorityNode_)}var t=e.prototype;return t.isLeafNode=function(){return!0},t.getPriority=function(){return this.priorityNode_},t.updatePriority=function(t){return new e(this.value_,t)},t.getImmediateChild=function(t){return".priority"===t?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},t.getChild=function(t){return tt(t)?this:".priority"===Qe(t)?this.priorityNode_:e.__childrenNodeConstructor.EMPTY_NODE},t.hasChild=function(){return!1},t.getPredecessorChildName=function(e,t){return null},t.updateImmediateChild=function(t,n){return".priority"===t?this.updatePriority(n):n.isEmpty()&&".priority"!==t?this:e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)},t.updateChild=function(t,n){var i=Qe(t);return null===i?n:n.isEmpty()&&".priority"!==i?this:(_(".priority"!==i||1===Ge(t),".priority must be the last token in a path"),this.updateImmediateChild(i,e.__childrenNodeConstructor.EMPTY_NODE.updateChild($e(t),n)))},t.isEmpty=function(){return!1},t.numChildren=function(){return 0},t.forEachChild=function(e,t){return!1},t.val=function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()},t.hash=function(){if(null===this.lazyHash_){var e="";this.priorityNode_.isEmpty()||(e+="priority:"+St(this.priorityNode_.val())+":");var t=typeof this.value_;e+=t+":",e+="number"===t?ge(this.value_):this.value_,this.lazyHash_=X(e)}return this.lazyHash_},t.getValue=function(){return this.value_},t.compareTo=function(t){return t===e.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof e.__childrenNodeConstructor?-1:(_(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))},t.compareToLeafNode_=function(t){var n=typeof t.value_,i=typeof this.value_,r=e.VALUE_TYPE_ORDER.indexOf(n),o=e.VALUE_TYPE_ORDER.indexOf(i);return _(r>=0,"Unknown leaf type: "+n),_(o>=0,"Unknown leaf type: "+i),r===o?"object"===i?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:o-r},t.withIndex=function(){return this},t.isIndexed=function(){return!0},t.equals=function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1},r(e,null,[{key:"__childrenNodeConstructor",get:function(){return kt},set:function(e){kt=e}}]),e}();Pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];var xt,Rt,Dt=new(function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var i=n.prototype;return i.compare=function(e,t){var n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?ce(e.name,t.name):r},i.isDefinedOn=function(e){return!e.getPriority().isEmpty()},i.indexedValueChanged=function(e,t){return!e.getPriority().equals(t.getPriority())},i.minPost=function(){return ft.MIN},i.maxPost=function(){return new ft(he,new Pt("[PRIORITY-POST]",Et))},i.makePost=function(e,t){var n=bt(e);return new ft(t,new Pt("[PRIORITY-POST]",n))},i.toString=function(){return".priority"},n}(pt)),Mt=Math.log(2),Ft=function(){function e(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Mt,10)),this.current_=this.count-1;var n,i=(n=this.count,parseInt(Array(n+1).join("1"),2));this.bits_=e+1&i}return e.prototype.nextBitIsOne=function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e},e}(),qt=function(e,t,n,i){e.sort(t);var r=function t(i,r){var o,s,a=r-i;if(0===a)return null;if(1===a)return o=e[i],s=n?n(o):o,new mt(s,o.node,mt.BLACK,null,null);var u=parseInt(a/2,10)+i,l=t(i,u),h=t(u+1,r);return o=e[u],s=n?n(o):o,new mt(s,o.node,mt.BLACK,l,h)},o=function(t){for(var i=null,o=null,s=e.length,a=function(t,i){var o=s-t,a=s;s-=t;var l=r(o+1,a),h=e[o],c=n?n(h):h;u(new mt(c,h.node,i,null,l))},u=function(e){i?(i.left=e,i=e):(o=e,i=e)},l=0;l<t.count;++l){var h=t.nextBitIsOne(),c=Math.pow(2,t.count-(l+1));h?a(c,mt.BLACK):(a(c,mt.BLACK),a(c,mt.RED))}return o}(new Ft(e.length));return new wt(i||t,o)},At={},Lt=function(){function e(e,t){this.indexes_=e,this.indexSet_=t}var t=e.prototype;return t.get=function(e){var t=m(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof wt?t:null},t.hasIndex=function(e){return g(this.indexSet_,e.toString())},t.addIndex=function(t,n){_(t!==vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var i,r=[],o=!1,s=n.getIterator(ft.Wrap),a=s.getNext();a;)o=o||t.isDefinedOn(a.node),r.push(a),a=s.getNext();i=o?qt(r,t.getCompare()):At;var u=t.toString(),l=Object.assign({},this.indexSet_);l[u]=t;var h=Object.assign({},this.indexes_);return h[u]=i,new e(h,l)},t.addToIndexes=function(t,n){var i=this;return new e(R(this.indexes_,(function(e,r){var o=m(i.indexSet_,r);if(_(o,"Missing index implementation for "+r),e===At){if(o.isDefinedOn(t.node)){for(var s=[],a=n.getIterator(ft.Wrap),u=a.getNext();u;)u.name!==t.name&&s.push(u),u=a.getNext();return s.push(t),qt(s,o.getCompare())}return At}var l=n.get(t.name),h=e;return l&&(h=h.remove(new ft(t.name,l))),h.insert(t,t.node)})),this.indexSet_)},t.removeFromIndexes=function(t,n){return new e(R(this.indexes_,(function(e){if(e===At)return e;var i=n.get(t.name);return i?e.remove(new ft(t.name,i)):e})),this.indexSet_)},r(e,null,[{key:"Default",get:function(){return _(At&&Dt,"ChildrenNode.ts has not been loaded"),xt=xt||new e({".priority":At},{".priority":Dt})}}]),e}(),Ot=function(){function e(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Nt(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}var t=e.prototype;return t.isLeafNode=function(){return!1},t.getPriority=function(){return this.priorityNode_||Rt},t.updatePriority=function(t){return this.children_.isEmpty()?this:new e(this.children_,t,this.indexMap_)},t.getImmediateChild=function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Rt:t},t.getChild=function(e){var t=Qe(e);return null===t?this:this.getImmediateChild(t).getChild($e(e))},t.hasChild=function(e){return null!==this.children_.get(e)},t.updateImmediateChild=function(t,n){if(_(n,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(n);var i,r,o=new ft(t,n);n.isEmpty()?(i=this.children_.remove(t),r=this.indexMap_.removeFromIndexes(o,this.children_)):(i=this.children_.insert(t,n),r=this.indexMap_.addToIndexes(o,this.children_));var s=i.isEmpty()?Rt:this.priorityNode_;return new e(i,s,r)},t.updateChild=function(e,t){var n=Qe(e);if(null===n)return t;_(".priority"!==Qe(e)||1===Ge(e),".priority must be the last token in a path");var i=this.getImmediateChild(n).updateChild($e(e),t);return this.updateImmediateChild(n,i)},t.isEmpty=function(){return this.children_.isEmpty()},t.numChildren=function(){return this.children_.count()},t.val=function(t){if(this.isEmpty())return null;var n={},i=0,r=0,o=!0;if(this.forEachChild(Dt,(function(s,a){n[s]=a.val(t),i++,o&&e.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):o=!1})),!t&&o&&r<2*i){var s=[];for(var a in n)s[a]=n[a];return s}return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n},t.hash=function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+St(this.getPriority().val())+":"),this.forEachChild(Dt,(function(t,n){var i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":X(e)}return this.lazyHash_},t.getPredecessorChildName=function(e,t,n){var i=this.resolveIndex_(n);if(i){var r=i.getPredecessorKey(new ft(e,t));return r?r.name:null}return this.children_.getPredecessorKey(e)},t.getFirstChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()},t.getFirstChild=function(e){var t=this.getFirstChildName(e);return t?new ft(t,this.children_.get(t)):null},t.getLastChildName=function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()},t.getLastChild=function(e){var t=this.getLastChildName(e);return t?new ft(t,this.children_.get(t)):null},t.forEachChild=function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)},t.getIterator=function(e){return this.getIteratorFrom(e.minPost(),e)},t.getIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var i=this.children_.getIteratorFrom(e.name,ft.Wrap),r=i.peek();null!=r&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i},t.getReverseIterator=function(e){return this.getReverseIteratorFrom(e.maxPost(),e)},t.getReverseIteratorFrom=function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var i=this.children_.getReverseIteratorFrom(e.name,ft.Wrap),r=i.peek();null!=r&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i},t.compareTo=function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wt?-1:0},t.withIndex=function(t){if(t===vt||this.indexMap_.hasIndex(t))return this;var n=this.indexMap_.addIndex(t,this.children_);return new e(this.children_,this.priorityNode_,n)},t.isIndexed=function(e){return e===vt||this.indexMap_.hasIndex(e)},t.equals=function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Dt),i=t.getIterator(Dt),r=n.getNext(),o=i.getNext();r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=n.getNext(),o=i.getNext()}return null===r&&null===o}return!1}return!1},t.resolveIndex_=function(e){return e===vt?null:this.indexMap_.get(e.toString())},r(e,null,[{key:"EMPTY_NODE",get:function(){return Rt||(Rt=new e(new wt(It),null,Lt.Default))}}]),e}();Ot.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Wt=new(function(e){function n(){return e.call(this,new wt(It),Ot.EMPTY_NODE,Lt.Default)||this}t(n,e);var i=n.prototype;return i.compareTo=function(e){return e===this?0:1},i.equals=function(e){return e===this},i.getPriority=function(){return this},i.getImmediateChild=function(e){return Ot.EMPTY_NODE},i.isEmpty=function(){return!1},n}(Ot));Object.defineProperties(ft,{MIN:{value:new ft(le,Ot.EMPTY_NODE)},MAX:{value:new ft(he,Wt)}}),_t.__EMPTY_NODE=Ot.EMPTY_NODE,Pt.__childrenNodeConstructor=Ot,yt=Wt,function(e){Et=e}(Wt);function Ut(e,t){if(void 0===t&&(t=null),null===e)return Ot.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),_(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e)return new Pt(e,Ut(t));if(e instanceof Array){var n=Ot.EMPTY_NODE;return ve(e,(function(t,i){if(g(e,t)&&"."!==t.substring(0,1)){var r=Ut(i);!r.isLeafNode()&&r.isEmpty()||(n=n.updateImmediateChild(t,r))}})),n.updatePriority(Ut(t))}var i=[],r=!1;if(ve(e,(function(e,t){if("."!==e.substring(0,1)){var n=Ut(t);n.isEmpty()||(r=r||!n.getPriority().isEmpty(),i.push(new ft(e,n)))}})),0===i.length)return Ot.EMPTY_NODE;var o=qt(i,Tt,(function(e){return e.name}),It);if(r){var s=qt(i,Dt.getCompare());return new Ot(o,Ut(t),new Lt({".priority":s},{".priority":Dt}))}return new Ot(o,Ut(t),Lt.Default)}!function(e){bt=e}(Ut);
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var jt=function(e){function n(t){var n;return(n=e.call(this)||this).indexPath_=t,_(!tt(t)&&".priority"!==Qe(t),"Can't create PathIndex with empty path or .priority key"),n}t(n,e);var i=n.prototype;return i.extractChild=function(e){return e.getChild(this.indexPath_)},i.isDefinedOn=function(e){return!e.getChild(this.indexPath_).isEmpty()},i.compare=function(e,t){var n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?ce(e.name,t.name):r},i.makePost=function(e,t){var n=Ut(e),i=Ot.EMPTY_NODE.updateChild(this.indexPath_,n);return new ft(t,i)},i.maxPost=function(){var e=Ot.EMPTY_NODE.updateChild(this.indexPath_,Wt);return new ft(he,e)},i.toString=function(){return Xe(this.indexPath_,0).join("/")},n}(pt),Ht=new(function(e){function n(){return e.apply(this,arguments)||this}t(n,e);var i=n.prototype;return i.compare=function(e,t){var n=e.node.compareTo(t.node);return 0===n?ce(e.name,t.name):n},i.isDefinedOn=function(e){return!0},i.indexedValueChanged=function(e,t){return!e.equals(t)},i.minPost=function(){return ft.MIN},i.maxPost=function(){return ft.MAX},i.makePost=function(e,t){var n=Ut(e);return new ft(t,n)},i.toString=function(){return".value"},n}(pt));
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
function zt(e){return{type:"value",snapshotNode:e}}function Vt(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yt(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Bt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var Kt=function(){function e(e){this.index_=e}var t=e.prototype;return t.updateChild=function(e,t,n,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");var s=e.getImmediateChild(t);return s.getChild(i).equals(n.getChild(i))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Yt(t,s)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(Vt(t,n)):o.trackChildChange(Bt(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))},t.updateFullNode=function(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Dt,(function(e,i){t.hasChild(e)||n.trackChildChange(Yt(e,i))})),t.isLeafNode()||t.forEachChild(Dt,(function(t,i){if(e.hasChild(t)){var r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Bt(t,i,r))}else n.trackChildChange(Vt(t,i))}))),t.withIndex(this.index_)},t.updatePriority=function(e,t){return e.isEmpty()?Ot.EMPTY_NODE:e.updatePriority(t)},t.filtersNodes=function(){return!1},t.getIndexedFilter=function(){return this},t.getIndex=function(){return this.index_},e}(),Qt=function(){function e(t){this.indexedFilter_=new Kt(t.getIndex()),this.index_=t.getIndex(),this.startPost_=e.getStartPost_(t),this.endPost_=e.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}var t=e.prototype;return t.getStartPost=function(){return this.startPost_},t.getEndPost=function(){return this.endPost_},t.matches=function(e){var t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n},t.updateChild=function(e,t,n,i,r,o){return this.matches(new ft(t,n))||(n=Ot.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,o)},t.updateFullNode=function(e,t,n){t.isLeafNode()&&(t=Ot.EMPTY_NODE);var i=t.withIndex(this.index_);i=i.updatePriority(Ot.EMPTY_NODE);var r=this;return t.forEachChild(Dt,(function(e,t){r.matches(new ft(e,t))||(i=i.updateImmediateChild(e,Ot.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)},t.updatePriority=function(e,t){return e},t.filtersNodes=function(){return!0},t.getIndexedFilter=function(){return this.indexedFilter_},t.getIndex=function(){return this.index_},e.getStartPost_=function(e){if(e.hasStart()){var t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()},e.getEndPost_=function(e){if(e.hasEnd()){var t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()},e}(),Gt=function(){function e(e){var t=this;this.withinDirectionalStart=function(e){return t.reverse_?t.withinEndPost(e):t.withinStartPost(e)},this.withinDirectionalEnd=function(e){return t.reverse_?t.withinStartPost(e):t.withinEndPost(e)},this.withinStartPost=function(e){var n=t.index_.compare(t.rangedFilter_.getStartPost(),e);return t.startIsInclusive_?n<=0:n<0},this.withinEndPost=function(e){var n=t.index_.compare(e,t.rangedFilter_.getEndPost());return t.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Qt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}var t=e.prototype;return t.updateChild=function(e,t,n,i,r,o){return this.rangedFilter_.matches(new ft(t,n))||(n=Ot.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,o):this.fullLimitUpdateChild_(e,t,n,r,o)},t.updateFullNode=function(e,t,n){var i;if(t.isLeafNode()||t.isEmpty())i=Ot.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){var r;i=Ot.EMPTY_NODE.withIndex(this.index_),r=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);for(var o=0;r.hasNext()&&o<this.limit_;){var s=r.getNext();if(this.withinDirectionalStart(s)){if(!this.withinDirectionalEnd(s))break;i=i.updateImmediateChild(s.name,s.node),o++}}}else{var a;i=(i=t.withIndex(this.index_)).updatePriority(Ot.EMPTY_NODE),a=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);for(var u=0;a.hasNext();){var l=a.getNext();u<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?u++:i=i.updateImmediateChild(l.name,Ot.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)},t.updatePriority=function(e,t){return e},t.filtersNodes=function(){return!0},t.getIndexedFilter=function(){return this.rangedFilter_.getIndexedFilter()},t.getIndex=function(){return this.index_},t.fullLimitUpdateChild_=function(e,t,n,i,r){var o;if(this.reverse_){var s=this.index_.getCompare();o=function(e,t){return s(t,e)}}else o=this.index_.getCompare();var a=e;_(a.numChildren()===this.limit_,"");var u=new ft(t,n),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(u);if(a.hasChild(t)){for(var c=a.getImmediateChild(t),d=i.getChildAfterChild(this.index_,l,this.reverse_);null!=d&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);var f=null==d?1:o(d,u);if(h&&!n.isEmpty()&&f>=0)return null!=r&&r.trackChildChange(Bt(t,n,c)),a.updateImmediateChild(t,n);null!=r&&r.trackChildChange(Yt(t,c));var p=a.updateImmediateChild(t,Ot.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=r&&r.trackChildChange(Vt(d.name,d.node)),p.updateImmediateChild(d.name,d.node)):p}return n.isEmpty()?e:h&&o(l,u)>=0?(null!=r&&(r.trackChildChange(Yt(l.name,l.node)),r.trackChildChange(Vt(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(l.name,Ot.EMPTY_NODE)):e},e}(),$t=e("_QueryParams",function(){function e(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dt}var t=e.prototype;return t.hasStart=function(){return this.startSet_},t.isViewFromLeft=function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_},t.getIndexStartValue=function(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_},t.getIndexStartName=function(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:le},t.hasEnd=function(){return this.endSet_},t.getIndexEndValue=function(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_},t.getIndexEndName=function(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:he},t.hasLimit=function(){return this.limitSet_},t.hasAnchoredLimit=function(){return this.limitSet_&&""!==this.viewFrom_},t.getLimit=function(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_},t.getIndex=function(){return this.index_},t.loadsAllData=function(){return!(this.startSet_||this.endSet_||this.limitSet_)},t.isDefault=function(){return this.loadsAllData()&&this.index_===Dt},t.copy=function(){var t=new e;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t},e}());
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function Jt(e){var t,n={};if(e.isDefault())return n;if(e.index_===Dt?t="$priority":e.index_===Ht?t="$value":e.index_===vt?t="$key":(_(e.index_ instanceof jt,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=p(t),e.startSet_){var i=e.startAfterSet_?"startAfter":"startAt";n[i]=p(e.indexStartValue_),e.startNameSet_&&(n[i]+=","+p(e.indexStartName_))}if(e.endSet_){var r=e.endBeforeSet_?"endBefore":"endAt";n[r]=p(e.indexEndValue_),e.endNameSet_&&(n[r]+=","+p(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_),n}function Xt(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Dt&&(t.i=e.index_.toString()),t}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Zt=function(e){function n(t,n,i,r){var o;return(o=e.call(this)||this).repoInfo_=t,o.onDataUpdate_=n,o.authTokenProvider_=i,o.appCheckTokenProvider_=r,o.log_=re("p:rest:"),o.listens_={},o}t(n,e);var i=n.prototype;return i.reportStats=function(e){throw new Error("Method not implemented.")},n.getListenId_=function(e,t){return void 0!==t?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())},i.listen=function(e,t,i,r){var o=this,s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);var a=n.getListenId_(e,i),u={};this.listens_[a]=u;var l=Jt(e._queryParams);this.restRequest_(s+".json",l,(function(e,t){var n=t;(404===e&&(n=null,e=null),null===e&&o.onDataUpdate_(s,n,!1,i),m(o.listens_,a)===u)&&r(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))},i.unlisten=function(e,t){var i=n.getListenId_(e,t);delete this.listens_[i]},i.get=function(e){var t=this,n=Jt(e._queryParams),i=e._path.toString(),r=new v;return this.restRequest_(i+".json",n,(function(e,n){var o=n;404===e&&(o=null,e=null),null===e?(t.onDataUpdate_(i,o,!1,null),r.resolve(o)):r.reject(new Error(o))})),r.promise},i.refreshAuthToken=function(e){},i.restRequest_=function(e,t,n){var i=this;return void 0===t&&(t={}),t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(r){var o=r[0],s=r[1];o&&o.accessToken&&(t.auth=o.accessToken),s&&s.token&&(t.ac=s.token);var a=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+e+"?ns="+i.repoInfo_.namespace+q(t);i.log_("Sending REST request for "+a);var u=new XMLHttpRequest;u.onreadystatechange=function(){if(n&&4===u.readyState){i.log_("REST Response for "+a+" received. status:",u.status,"response:",u.responseText);var e=null;if(u.status>=200&&u.status<300){try{e=F(u.responseText)}catch(e){ae("Failed to parse JSON response for "+a+": "+u.responseText)}n(null,e)}else 401!==u.status&&404!==u.status&&ae("Got unsuccessful REST response for "+a+" Status: "+u.status),n(u.status);n=null}},u.open("GET",a,!0),u.send()}))},n}(ze),en=function(){function e(){this.rootNode_=Ot.EMPTY_NODE}var t=e.prototype;return t.getNode=function(e){return this.rootNode_.getChild(e)},t.updateSnapshot=function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)},e}();
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
function tn(){return{value:null,children:new Map}}function nn(e,t,n){if(tt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var i=Qe(t);e.children.has(i)||e.children.set(i,tn()),nn(e.children.get(i),t=$e(t),n)}}function rn(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e,(function(e,i){rn(i,new Be(t.toString()+"/"+e),n)}))}var on,sn=function(){function e(e){this.collection_=e,this.last_=null}return e.prototype.get=function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ve(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t},e}(),an=function(){function e(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new sn(e);var n=1e4+2e4*Math.random();we(this.reportStats_.bind(this),Math.floor(n))}return e.prototype.reportStats_=function(){var e=this,t=this.statsListener_.get(),n={},i=!1;ve(t,(function(t,r){r>0&&g(e.statsToReport_,t)&&(n[t]=r,i=!0)})),i&&this.server_.reportStats(n),we(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))},e}();
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function un(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(on||(on={}));var ln,hn=function(){function e(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=on.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e.prototype.operationForChild=function(t){if(tt(this.path)){if(null!=this.affectedTree.value)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Be(t));return new e(Ke(),n,this.revert)}return _(Qe(this.path)===t,"operationForChild called for unrelated child."),new e($e(this.path),this.affectedTree,this.revert)},e}(),cn=function(){function e(e,t){this.source=e,this.path=t,this.type=on.LISTEN_COMPLETE}return e.prototype.operationForChild=function(t){return tt(this.path)?new e(this.source,Ke()):new e(this.source,$e(this.path))},e}(),dn=function(){function e(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=on.OVERWRITE}return e.prototype.operationForChild=function(t){return tt(this.path)?new e(this.source,Ke(),this.snap.getImmediateChild(t)):new e(this.source,$e(this.path),this.snap)},e}(),fn=function(){function e(e,t,n){this.source=e,this.path=t,this.children=n,this.type=on.MERGE}var t=e.prototype;return t.operationForChild=function(t){if(tt(this.path)){var n=this.children.subtree(new Be(t));return n.isEmpty()?null:n.value?new dn(this.source,Ke(),n.value):new e(this.source,Ke(),n)}return _(Qe(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new e(this.source,$e(this.path),this.children)},t.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"},e}(),pn=function(){function e(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}var t=e.prototype;return t.isFullyInitialized=function(){return this.fullyInitialized_},t.isFiltered=function(){return this.filtered_},t.isCompleteForPath=function(e){if(tt(e))return this.isFullyInitialized()&&!this.filtered_;var t=Qe(e);return this.isCompleteForChild(t)},t.isCompleteForChild=function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)},t.getNode=function(){return this.node_},e}(),_n=function(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()};
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function vn(e,t,n,i,r,o){var s=i.filter((function(e){return e.type===n}));s.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw k("Should only compare child_ events.");var i=new ft(t.childName,t.snapshotNode),r=new ft(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e,t,n)})),s.forEach((function(n){var i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((function(r){r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function gn(e,t){return{eventCache:e,serverCache:t}}function mn(e,t,n,i){return gn(new pn(t,n,i),e.serverCache)}function yn(e,t,n,i){return gn(e.eventCache,new pn(t,n,i))}function Cn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Tn=function(){function e(e,t){void 0===t&&(ln||(ln=new wt(de)),t=ln),this.value=e,this.children=t}e.fromObject=function(t){var n=new e(null);return ve(t,(function(e,t){n=n.set(new Be(e),t)})),n};var t=e.prototype;return t.isEmpty=function(){return null===this.value&&this.children.isEmpty()},t.findRootMostMatchingPathAndValue=function(e,t){if(null!=this.value&&t(this.value))return{path:Ke(),value:this.value};if(tt(e))return null;var n=Qe(e),i=this.children.get(n);if(null!==i){var r=i.findRootMostMatchingPathAndValue($e(e),t);return null!=r?{path:et(new Be(n),r.path),value:r.value}:null}return null},t.findRootMostValueAndPath=function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))},t.subtree=function(t){if(tt(t))return this;var n=Qe(t),i=this.children.get(n);return null!==i?i.subtree($e(t)):new e(null)},t.set=function(t,n){if(tt(t))return new e(n,this.children);var i=Qe(t),r=(this.children.get(i)||new e(null)).set($e(t),n),o=this.children.insert(i,r);return new e(this.value,o)},t.remove=function(t){if(tt(t))return this.children.isEmpty()?new e(null):new e(null,this.children);var n=Qe(t),i=this.children.get(n);if(i){var r,o=i.remove($e(t));return r=o.isEmpty()?this.children.remove(n):this.children.insert(n,o),null===this.value&&r.isEmpty()?new e(null):new e(this.value,r)}return this},t.get=function(e){if(tt(e))return this.value;var t=Qe(e),n=this.children.get(t);return n?n.get($e(e)):null},t.setTree=function(t,n){if(tt(t))return n;var i,r=Qe(t),o=(this.children.get(r)||new e(null)).setTree($e(t),n);return i=o.isEmpty()?this.children.remove(r):this.children.insert(r,o),new e(this.value,i)},t.fold=function(e){return this.fold_(Ke(),e)},t.fold_=function(e,t){var n={};return this.children.inorderTraversal((function(i,r){n[i]=r.fold_(et(e,i),t)})),t(e,this.value,n)},t.findOnPath=function(e,t){return this.findOnPath_(e,Ke(),t)},t.findOnPath_=function(e,t,n){var i=!!this.value&&n(t,this.value);if(i)return i;if(tt(e))return null;var r=Qe(e),o=this.children.get(r);return o?o.findOnPath_($e(e),et(t,r),n):null},t.foreachOnPath=function(e,t){return this.foreachOnPath_(e,Ke(),t)},t.foreachOnPath_=function(t,n,i){if(tt(t))return this;this.value&&i(n,this.value);var r=Qe(t),o=this.children.get(r);return o?o.foreachOnPath_($e(t),et(n,r),i):new e(null)},t.foreach=function(e){this.foreach_(Ke(),e)},t.foreach_=function(e,t){this.children.inorderTraversal((function(n,i){i.foreach_(et(e,n),t)})),this.value&&t(e,this.value)},t.foreachChild=function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))},e}(),In=function(){function e(e){this.writeTree_=e}return e.empty=function(){return new e(new Tn(null))},e}();function kn(e,t,n){if(tt(t))return new In(new Tn(n));var i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){var r=i.path,o=i.value,s=nt(r,t);return o=o.updateChild(s,n),new In(e.writeTree_.set(r,o))}var a=new Tn(n),u=e.writeTree_.setTree(t,a);return new In(u)}function bn(e,t,n){var i=e;return ve(n,(function(e,n){i=kn(i,et(t,e),n)})),i}function En(e,t){if(tt(t))return In.empty();var n=e.writeTree_.setTree(t,new Tn(null));return new In(n)}function Sn(e,t){return null!=Nn(e,t)}function Nn(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(nt(n.path,t)):null}function Pn(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Dt,(function(e,n){t.push(new ft(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new ft(e,n.value))})),t}function xn(e,t){if(tt(t))return e;var n=Nn(e,t);return new In(null!=n?new Tn(n):e.writeTree_.subtree(t))}function Rn(e){return e.writeTree_.isEmpty()}function Dn(e,t){return Mn(Ke(),e.writeTree_,t)}function Mn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var i=null;return t.children.inorderTraversal((function(t,r){".priority"===t?(_(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Mn(et(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(et(e,".priority"),i)),n}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function Fn(e,t){return Kn(t,e)}function qn(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));_(n>=0,"removeWrite called with nonexistent writeId.");var i=e.allWrites[n];e.allWrites.splice(n,1);for(var r=i.visible,o=!1,s=e.allWrites.length-1;r&&s>=0;){var a=e.allWrites[s];a.visible&&(s>=n&&An(a,i.path)?r=!1:ot(i.path,a.path)&&(o=!0)),s--}if(r){if(o)return function(e){e.visibleWrites=On(e.allWrites,Ln,Ke()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;i.snap?e.visibleWrites=En(e.visibleWrites,i.path):ve(i.children,(function(t){e.visibleWrites=En(e.visibleWrites,et(i.path,t))}));return!0}return!1}function An(e,t){if(e.snap)return ot(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&ot(et(e.path,n),t))return!0;return!1}function Ln(e){return e.visible}function On(e,t,n){for(var i=In.empty(),r=0;r<e.length;++r){var o=e[r];if(t(o)){var s=o.path,a=void 0;if(o.snap)ot(n,s)?i=kn(i,a=nt(n,s),o.snap):ot(s,n)&&(a=nt(s,n),i=kn(i,Ke(),o.snap.getChild(a)));else{if(!o.children)throw k("WriteRecord should have .snap or .children");if(ot(n,s))i=bn(i,a=nt(n,s),o.children);else if(ot(s,n))if(tt(a=nt(s,n)))i=bn(i,Ke(),o.children);else{var u=m(o.children,Qe(a));if(u){var l=u.getChild($e(a));i=kn(i,Ke(),l)}}}}}return i}function Wn(e,t,n,i,r){if(i||r){var o=xn(e.visibleWrites,t);if(!r&&Rn(o))return n;if(r||null!=n||Sn(o,Ke())){return Dn(On(e.allWrites,(function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(ot(e.path,t)||ot(t,e.path))}),t),n||Ot.EMPTY_NODE)}return null}var s=Nn(e.visibleWrites,t);if(null!=s)return s;var a=xn(e.visibleWrites,t);return Rn(a)?n:null!=n||Sn(a,Ke())?Dn(a,n||Ot.EMPTY_NODE):null}function Un(e,t,n,i){return Wn(e.writeTree,e.treePath,t,n,i)}function jn(e,t){return function(e,t,n){var i=Ot.EMPTY_NODE,r=Nn(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Dt,(function(e,t){i=i.updateImmediateChild(e,t)})),i;if(n){var o=xn(e.visibleWrites,t);return n.forEachChild(Dt,(function(e,t){var n=Dn(xn(o,new Be(e)),t);i=i.updateImmediateChild(e,n)})),Pn(o).forEach((function(e){i=i.updateImmediateChild(e.name,e.node)})),i}return Pn(xn(e.visibleWrites,t)).forEach((function(e){i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Hn(e,t,n,i){return function(e,t,n,i,r){_(i||r,"Either existingEventSnap or existingServerSnap must exist");var o=et(t,n);if(Sn(e.visibleWrites,o))return null;var s=xn(e.visibleWrites,o);return Rn(s)?r.getChild(n):Dn(s,r.getChild(n))}(e.writeTree,e.treePath,t,n,i)}function zn(e,t){return function(e,t){return Nn(e.visibleWrites,t)}(e.writeTree,et(e.treePath,t))}function Vn(e,t,n,i,r,o){return function(e,t,n,i,r,o,s){var a,u=xn(e.visibleWrites,t),l=Nn(u,Ke());if(null!=l)a=l;else{if(null==n)return[];a=Dn(u,n)}if((a=a.withIndex(s)).isEmpty()||a.isLeafNode())return[];for(var h=[],c=s.getCompare(),d=o?a.getReverseIteratorFrom(i,s):a.getIteratorFrom(i,s),f=d.getNext();f&&h.length<r;)0!==c(f,i)&&h.push(f),f=d.getNext();return h}(e.writeTree,e.treePath,t,n,i,r,o)}function Yn(e,t,n){return function(e,t,n,i){var r=et(t,n),o=Nn(e.visibleWrites,r);return null!=o?o:i.isCompleteForChild(n)?Dn(xn(e.visibleWrites,r),i.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function Bn(e,t){return Kn(et(e.treePath,t),e.writeTree)}function Kn(e,t){return{treePath:e,writeTree:t}}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Qn=function(){function e(){this.changeMap=new Map}var t=e.prototype;return t.trackChildChange=function(e){var t=e.type,n=e.childName;_("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),_(".priority"!==n,"Only non-priority child changes can be tracked.");var i=this.changeMap.get(n);if(i){var r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Bt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Yt(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Vt(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw k("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Bt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)},t.getChanges=function(){return Array.from(this.changeMap.values())},e}(),Gn=new(function(){function e(){}var t=e.prototype;return t.getCompleteChild=function(e){return null},t.getChildAfterChild=function(e,t,n){return null},e}()),$n=function(){function e(e,t,n){void 0===n&&(n=null),this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}var t=e.prototype;return t.getCompleteChild=function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yn(this.writes_,e,n)},t.getChildAfterChild=function(e,t,n){var i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:wn(this.viewCache_),r=Vn(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]},e}();
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function Jn(e,t,n,i,r){var o,s,a=new Qn;if(n.type===on.OVERWRITE){var u=n;u.source.fromUser?o=ei(e,t,u.path,u.snap,i,r,a):(_(u.source.fromServer,"Unknown source."),s=u.source.tagged||t.serverCache.isFiltered()&&!tt(u.path),o=Zn(e,t,u.path,u.snap,i,r,s,a))}else if(n.type===on.MERGE){var l=n;l.source.fromUser?o=function(e,t,n,i,r,o,s){var a=t;return i.foreach((function(i,u){var l=et(n,i);ti(t,Qe(l))&&(a=ei(e,a,l,u,r,o,s))})),i.foreach((function(i,u){var l=et(n,i);ti(t,Qe(l))||(a=ei(e,a,l,u,r,o,s))})),a}(e,t,l.path,l.children,i,r,a):(_(l.source.fromServer,"Unknown source."),s=l.source.tagged||t.serverCache.isFiltered(),o=ii(e,t,l.path,l.children,i,r,s,a))}else if(n.type===on.ACK_USER_WRITE){var h=n;o=h.revert?function(e,t,n,i,r,o){var s;if(null!=zn(i,n))return t;var a,u=new $n(i,t,r),l=t.eventCache.getNode();if(tt(n)||".priority"===Qe(n)){var h;if(t.serverCache.isFullyInitialized())h=Un(i,wn(t));else{var c=t.serverCache.getNode();_(c instanceof Ot,"serverChildren would be complete if leaf node"),h=jn(i,c)}h=h,a=e.filter.updateFullNode(l,h,o)}else{var d=Qe(n),f=Yn(i,d,t.serverCache);null==f&&t.serverCache.isCompleteForChild(d)&&(f=l.getImmediateChild(d)),(a=null!=f?e.filter.updateChild(l,d,f,$e(n),u,o):t.eventCache.getNode().hasChild(d)?e.filter.updateChild(l,d,Ot.EMPTY_NODE,$e(n),u,o):l).isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Un(i,wn(t))).isLeafNode()&&(a=e.filter.updateFullNode(a,s,o))}return s=t.serverCache.isFullyInitialized()||null!=zn(i,Ke()),mn(t,a,s,e.filter.filtersNodes())}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e,t,h.path,i,r,a):function(e,t,n,i,r,o,s){if(null!=zn(r,n))return t;var a=t.serverCache.isFiltered(),u=t.serverCache;if(null!=i.value){if(tt(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Zn(e,t,n,u.getNode().getChild(n),r,o,a,s);if(tt(n)){var l=new Tn(null);return u.getNode().forEachChild(vt,(function(e,t){l=l.set(new Be(e),t)})),ii(e,t,n,l,r,o,a,s)}return t}var h=new Tn(null);return i.foreach((function(e,t){var i=et(n,e);u.isCompleteForPath(i)&&(h=h.set(e,u.getNode().getChild(i)))})),ii(e,t,n,h,r,o,a,s)}(e,t,h.path,h.affectedTree,i,r,a)}else{if(n.type!==on.LISTEN_COMPLETE)throw k("Unknown operation type: "+n.type);o=function(e,t,n,i,r){var o=t.serverCache,s=yn(t,o.getNode(),o.isFullyInitialized()||tt(n),o.isFiltered());return Xn(e,s,n,i,Gn,r)}(e,t,n.path,i,a)}var c=a.getChanges();return function(e,t,n){var i=t.eventCache;if(i.isFullyInitialized()){var r=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=Cn(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&n.push(zt(Cn(t)))}}(t,o,c),{viewCache:o,changes:c}}function Xn(e,t,n,i,r,o){var s,a,u=t.eventCache;if(null!=zn(i,n))return t;if(tt(n))if(_(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var l=wn(t),h=jn(i,l instanceof Ot?l:Ot.EMPTY_NODE);s=e.filter.updateFullNode(t.eventCache.getNode(),h,o)}else{var c=Un(i,wn(t));s=e.filter.updateFullNode(t.eventCache.getNode(),c,o)}else{var d=Qe(n);if(".priority"===d){_(1===Ge(n),"Can't have a priority with additional path components");var f=u.getNode(),p=Hn(i,n,f,a=t.serverCache.getNode());s=null!=p?e.filter.updatePriority(f,p):u.getNode()}else{var v,g=$e(n);if(u.isCompleteForChild(d)){a=t.serverCache.getNode();var m=Hn(i,n,u.getNode(),a);v=null!=m?u.getNode().getImmediateChild(d).updateChild(g,m):u.getNode().getImmediateChild(d)}else v=Yn(i,d,t.serverCache);s=null!=v?e.filter.updateChild(u.getNode(),d,v,g,r,o):u.getNode()}}return mn(t,s,u.isFullyInitialized()||tt(n),e.filter.filtersNodes())}function Zn(e,t,n,i,r,o,s,a){var u,l=t.serverCache,h=s?e.filter:e.filter.getIndexedFilter();if(tt(n))u=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){var c=l.getNode().updateChild(n,i);u=h.updateFullNode(l.getNode(),c,null)}else{var d=Qe(n);if(!l.isCompleteForPath(n)&&Ge(n)>1)return t;var f=$e(n),p=l.getNode().getImmediateChild(d).updateChild(f,i);u=".priority"===d?h.updatePriority(l.getNode(),p):h.updateChild(l.getNode(),d,p,f,Gn,null)}var _=yn(t,u,l.isFullyInitialized()||tt(n),h.filtersNodes());return Xn(e,_,n,r,new $n(r,_,o),a)}function ei(e,t,n,i,r,o,s){var a,u,l=t.eventCache,h=new $n(r,t,o);if(tt(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,s),a=mn(t,u,!0,e.filter.filtersNodes());else{var c=Qe(n);if(".priority"===c)u=e.filter.updatePriority(t.eventCache.getNode(),i),a=mn(t,u,l.isFullyInitialized(),l.isFiltered());else{var d,f=$e(n),p=l.getNode().getImmediateChild(c);if(tt(f))d=i;else{var _=h.getCompleteChild(c);d=null!=_?".priority"===Je(f)&&_.getChild(Ze(f)).isEmpty()?_:_.updateChild(f,i):Ot.EMPTY_NODE}if(p.equals(d))a=t;else a=mn(t,e.filter.updateChild(l.getNode(),c,d,f,h,s),l.isFullyInitialized(),e.filter.filtersNodes())}}return a}function ti(e,t){return e.eventCache.isCompleteForChild(t)}function ni(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function ii(e,t,n,i,r,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,l=t;u=tt(n)?i:new Tn(null).setTree(n,i);var h=t.serverCache.getNode();return u.children.inorderTraversal((function(n,i){if(h.hasChild(n)){var u=ni(0,t.serverCache.getNode().getImmediateChild(n),i);l=Zn(e,l,new Be(n),u,r,o,s,a)}})),u.children.inorderTraversal((function(n,i){var u=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!h.hasChild(n)&&!u){var c=ni(0,t.serverCache.getNode().getImmediateChild(n),i);l=Zn(e,l,new Be(n),c,r,o,s,a)}})),l}var ri,oi=function(){function e(e,t){this.query_=e,this.eventRegistrations_=[];var n,i=this.query_._queryParams,r=new Kt(i.getIndex()),o=(n=i).loadsAllData()?new Kt(n.getIndex()):n.hasLimit()?new Gt(n):new Qt(n);this.processor_=
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
function(e){return{filter:e}}(o);var s=t.serverCache,a=t.eventCache,u=r.updateFullNode(Ot.EMPTY_NODE,s.getNode(),null),l=o.updateFullNode(Ot.EMPTY_NODE,a.getNode(),null),h=new pn(u,s.isFullyInitialized(),r.filtersNodes()),c=new pn(l,a.isFullyInitialized(),o.filtersNodes());this.viewCache_=gn(c,h),this.eventGenerator_=new _n(this.query_)}return r(e,[{key:"query",get:function(){return this.query_}}]),e}();function si(e,t){var n=wn(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!tt(t)&&!n.getImmediateChild(Qe(t)).isEmpty())?n.getChild(t):null}function ai(e){return 0===e.eventRegistrations_.length}function ui(e,t,n){var i=[];if(n){_(null==t,"A cancel should cancel all event registrations.");var r=e.query._path;e.eventRegistrations_.forEach((function(e){var t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){for(var o=[],s=0;s<e.eventRegistrations_.length;++s){var a=e.eventRegistrations_[s];if(a.matches(t)){if(t.hasAnyCallback()){o=o.concat(e.eventRegistrations_.slice(s+1));break}}else o.push(a)}e.eventRegistrations_=o}else e.eventRegistrations_=[];return i}function li(e,t,n,i){t.type===on.MERGE&&null!==t.source.queryId&&(_(wn(e.viewCache_),"We should always have a full cache before handling merges"),_(Cn(e.viewCache_),"Missing event cache, even though we have a server cache"));var r,o,s=e.viewCache_,a=Jn(e.processor_,s,t,n,i);return r=e.processor_,o=a.viewCache,_(o.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),_(o.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed"),_(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,hi(e,a.changes,a.viewCache.eventCache.getNode(),null)}function hi(e,t,n,i){var r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){var r=[],o=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),vn(e,r,"child_removed",t,i,n),vn(e,r,"child_added",t,i,n),vn(e,r,"child_moved",o,i,n),vn(e,r,"child_changed",t,i,n),vn(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var ci,di=function(){this.views=new Map};function fi(e,t,n,r){var o=t.source.queryId;if(null!==o){var s=e.views.get(o);return _(null!=s,"SyncTree gave us an op for an invalid query."),li(s,t,n,r)}for(var a,u=[],l=i(e.views.values());!(a=l()).done;){var h=a.value;u=u.concat(li(h,t,n,r))}return u}function pi(e,t,n,i,r){var o=t._queryIdentifier,s=e.views.get(o);if(!s){var a=Un(n,r?i:null),u=!1;a?u=!0:i instanceof Ot?(a=jn(n,i),u=!1):(a=Ot.EMPTY_NODE,u=!1);var l=gn(new pn(a,u,!1),new pn(i,r,!1));return new oi(t,l)}return s}function _i(e,t,n,i,r,o){var s=pi(e,t,i,r,o);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,s),function(e,t){e.eventRegistrations_.push(t)}(s,n),function(e,t){var n=e.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Dt,(function(e,t){i.push(Vt(e,t))})),n.isFullyInitialized()&&i.push(zt(n.getNode())),hi(e,i,n.getNode(),t)}(s,n)}function vi(e,t,n,r){var o=t._queryIdentifier,s=[],a=[],u=wi(e);if("default"===o)for(var l,h=i(e.views.entries());!(l=h()).done;){var c=l.value,d=c[0],f=c[1];a=a.concat(ui(f,n,r)),ai(f)&&(e.views.delete(d),f.query._queryParams.loadsAllData()||s.push(f.query))}else{var p=e.views.get(o);p&&(a=a.concat(ui(p,n,r)),ai(p)&&(e.views.delete(o),p.query._queryParams.loadsAllData()||s.push(p.query)))}return u&&!wi(e)&&s.push(new(_(ri,"Reference.ts has not been loaded"),ri)(t._repo,t._path)),{removed:s,events:a}}function gi(e){for(var t,n=[],r=i(e.views.values());!(t=r()).done;){var o=t.value;o.query._queryParams.loadsAllData()||n.push(o)}return n}function mi(e,t){for(var n,r=null,o=i(e.views.values());!(n=o()).done;){var s=n.value;r=r||si(s,t)}return r}function yi(e,t){if(t._queryParams.loadsAllData())return Ti(e);var n=t._queryIdentifier;return e.views.get(n)}function Ci(e,t){return null!=yi(e,t)}function wi(e){return null!=Ti(e)}function Ti(e){for(var t,n=i(e.views.values());!(t=n()).done;){var r=t.value;if(r.query._queryParams.loadsAllData())return r}return null}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Ii=1,ki=function(e){this.listenProvider_=e,this.syncPointTree_=new Tn(null),this.pendingWriteTree_={visibleWrites:In.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function bi(e,t,n,i,r){return function(e,t,n,i,r){_(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=kn(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Mi(e,new dn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ei(e,t,n,i){!function(e,t,n,i){_(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=bn(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);var r=Tn.fromObject(n);return Mi(e,new fn({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,r))}function Si(e,t,n){void 0===n&&(n=!1);var i=function(e,t){for(var n=0;n<e.allWrites.length;n++){var i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(qn(e.pendingWriteTree_,t)){var r=new Tn(null);return null!=i.snap?r=r.set(Ke(),!0):ve(i.children,(function(e){r=r.set(new Be(e),!0)})),Mi(e,new hn(i.path,r,n))}return[]}function Ni(e,t,n){return Mi(e,new dn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Pi(e,t,n,i,r){void 0===r&&(r=!1);var o=t._path,s=e.syncPointTree_.get(o),a=[];if(s&&("default"===t._queryIdentifier||Ci(s,t))){var u=vi(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(o));var l=u.removed;if(a=u.events,!r){var h=-1!==l.findIndex((function(e){return e._queryParams.loadsAllData()})),c=e.syncPointTree_.findOnPath(o,(function(e,t){return wi(t)}));if(h&&!c){var d=e.syncPointTree_.subtree(o);if(!d.isEmpty())for(var f=function(e){return e.fold((function(e,t,n){if(t&&wi(t))return[Ti(t)];var i=[];return t&&(i=gi(t)),ve(n,(function(e,t){i=i.concat(t)})),i}))}(d),p=0;p<f.length;++p){var _=f[p],v=_.query,g=Ai(e,_);e.listenProvider_.startListening(Hi(v),Li(e,v),g.hashFn,g.onComplete)}}if(!c&&l.length>0&&!i)if(h){e.listenProvider_.stopListening(Hi(t),null)}else l.forEach((function(t){var n=e.queryToTagMap.get(Oi(t));e.listenProvider_.stopListening(Hi(t),n)}))}!function(e,t){for(var n=0;n<t.length;++n){var i=t[n];if(!i._queryParams.loadsAllData()){var r=Oi(i),o=e.queryToTagMap.get(r);e.queryToTagMap.delete(r),e.tagToQueryMap.delete(o)}}}(e,l)}return a}function xi(e,t,n,i){var r=Wi(e,i);if(null!=r){var o=Ui(r),s=o.path,a=o.queryId,u=nt(s,t);return ji(e,s,new dn(un(a),u,n))}return[]}function Ri(e,t,n,i){void 0===i&&(i=!1);var r=t._path,o=null,s=!1;e.syncPointTree_.foreachOnPath(r,(function(e,t){var n=nt(e,r);o=o||mi(t,n),s=s||wi(t)}));var a,u=e.syncPointTree_.get(r);(u?(s=s||wi(u),o=o||mi(u,Ke())):(u=new di,e.syncPointTree_=e.syncPointTree_.set(r,u)),null!=o)?a=!0:(a=!1,o=Ot.EMPTY_NODE,e.syncPointTree_.subtree(r).foreachChild((function(e,t){var n=mi(t,Ke());n&&(o=o.updateImmediateChild(e,n))})));var l=Ci(u,t);if(!l&&!t._queryParams.loadsAllData()){var h=Oi(t);_(!e.queryToTagMap.has(h),"View does not exist, but we have a tag");var c=Ii++;e.queryToTagMap.set(h,c),e.tagToQueryMap.set(c,h)}var d=_i(u,t,n,Fn(e.pendingWriteTree_,r),o,a);if(!l&&!s&&!i){var f=yi(u,t);d=d.concat(function(e,t,n){var i=t._path,r=Li(e,t),o=Ai(e,n),s=e.listenProvider_.startListening(Hi(t),r,o.hashFn,o.onComplete),a=e.syncPointTree_.subtree(i);if(r)_(!wi(a.value),"If we're adding a query, it shouldn't be shadowed");else for(var u=a.fold((function(e,t,n){if(!tt(e)&&t&&wi(t))return[Ti(t).query];var i=[];return t&&(i=i.concat(gi(t).map((function(e){return e.query})))),ve(n,(function(e,t){i=i.concat(t)})),i})),l=0;l<u.length;++l){var h=u[l];e.listenProvider_.stopListening(Hi(h),Li(e,h))}return s}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e,t,f))}return d}function Di(e,t,n){var i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,(function(e,n){var i=mi(n,nt(e,t));if(i)return i}));return Wn(i,t,r,n,!0)}function Mi(e,t){return Fi(t,e.syncPointTree_,null,Fn(e.pendingWriteTree_,Ke()))}function Fi(e,t,n,i){if(tt(e.path))return qi(e,t,n,i);var r=t.get(Ke());null==n&&null!=r&&(n=mi(r,Ke()));var o=[],s=Qe(e.path),a=e.operationForChild(s),u=t.children.get(s);if(u&&a){var l=n?n.getImmediateChild(s):null,h=Bn(i,s);o=o.concat(Fi(a,u,l,h))}return r&&(o=o.concat(fi(r,e,i,n))),o}function qi(e,t,n,i){var r=t.get(Ke());null==n&&null!=r&&(n=mi(r,Ke()));var o=[];return t.children.inorderTraversal((function(t,r){var s=n?n.getImmediateChild(t):null,a=Bn(i,t),u=e.operationForChild(t);u&&(o=o.concat(qi(u,r,s,a)))})),r&&(o=o.concat(fi(r,e,i,n))),o}function Ai(e,t){var n=t.query,i=Li(e,n);return{hashFn:function(){return(function(e){return e.viewCache_.serverCache.getNode()}(t)||Ot.EMPTY_NODE).hash()},onComplete:function(t){if("ok"===t)return i?function(e,t,n){var i=Wi(e,n);if(i){var r=Ui(i),o=r.path,s=r.queryId,a=nt(o,t);return ji(e,o,new cn(un(s),a))}return[]}(e,n._path,i):function(e,t){return Mi(e,new cn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);var r=function(e,t){var n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");var i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return Pi(e,n,null,r)}}}function Li(e,t){var n=Oi(t);return e.queryToTagMap.get(n)}function Oi(e){return e._path.toString()+"$"+e._queryIdentifier}function Wi(e,t){return e.tagToQueryMap.get(t)}function Ui(e){var t=e.indexOf("$");return _(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Be(e.substr(0,t))}}function ji(e,t,n){var i=e.syncPointTree_.get(t);return _(i,"Missing sync point for query tag that we're tracking"),fi(i,n,Fn(e.pendingWriteTree_,t),null)}function Hi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(_(ci,"Reference.ts has not been loaded"),ci)(e._repo,e._path):e}var zi=function(){function e(e){this.node_=e}var t=e.prototype;return t.getImmediateChild=function(t){return new e(this.node_.getImmediateChild(t))},t.node=function(){return this.node_},e}(),Vi=function(){function e(e,t){this.syncTree_=e,this.path_=t}var t=e.prototype;return t.getImmediateChild=function(t){var n=et(this.path_,t);return new e(this.syncTree_,n)},t.node=function(){return Di(this.syncTree_,this.path_)},e}(),Yi=function(e,t,n){return e&&"object"==typeof e?(_(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Bi(e[".sv"],t,n):"object"==typeof e[".sv"]?Ki(e[".sv"],t):void _(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Bi=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:_(!1,"Unexpected server value: "+e)}},Ki=function(e,t,n){e.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var i=e.increment;"number"!=typeof i&&_(!1,"Unexpected increment value: "+i);var r=t.node();if(_(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;var o=r.getValue();return"number"!=typeof o?i:o+i},Qi=function(e,t,n,i){return $i(t,new Vi(n,e),i)},Gi=function(e,t,n){return $i(e,new zi(t),n)};function $i(e,t,n){var i,r=e.getPriority().val(),o=Yi(r,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var s=e,a=Yi(s.getValue(),t,n);return a!==s.getValue()||o!==s.getPriority().val()?new Pt(a,Ut(o)):e}var u=e;return i=u,o!==u.getPriority().val()&&(i=i.updatePriority(new Pt(o))),u.forEachChild(Dt,(function(e,r){var o=$i(r,t.getImmediateChild(e),n);o!==r&&(i=i.updateImmediateChild(e,o))})),i}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Ji=function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n={children:{},childCount:0}),this.name=e,this.parent=t,this.node=n};function Xi(e,t){for(var n=t instanceof Be?t:new Be(t),i=e,r=Qe(n);null!==r;){var o=m(i.node.children,r)||{children:{},childCount:0};i=new Ji(r,i,o),r=Qe(n=$e(n))}return i}function Zi(e){return e.node.value}function er(e,t){e.node.value=t,or(e)}function tr(e){return e.node.childCount>0}function nr(e,t){ve(e.node.children,(function(n,i){t(new Ji(n,e,i))}))}function ir(e,t,n,i){n&&!i&&t(e),nr(e,(function(e){ir(e,t,!0,i)})),n&&i&&t(e)}function rr(e){return new Be(null===e.parent?e.name:rr(e.parent)+"/"+e.name)}function or(e){null!==e.parent&&function(e,t,n){var i=function(e){return void 0===Zi(e)&&!tr(e)}(n),r=g(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,or(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,or(e))}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */(e.parent,e.name,e)}var sr=/[\[\].#$\/\u0000-\u001F\u007F]/,ar=/[\[\].#$\u0000-\u001F\u007F]/,ur=10485760,lr=function(e){return"string"==typeof e&&0!==e.length&&!sr.test(e)},hr=function(e){return"string"==typeof e&&0!==e.length&&!ar.test(e)},cr=function(e,t,n,i){i&&void 0===t||dr(M(e,"value"),t,n)},dr=function e(t,n,i){var r=i instanceof Be?new st(i,t):i;if(void 0===n)throw new Error(t+"contains undefined "+ut(r));if("function"==typeof n)throw new Error(t+"contains a function "+ut(r)+" with contents = "+n.toString());if(ue(n))throw new Error(t+"contains "+n.toString()+" "+ut(r));if("string"==typeof n&&n.length>ur/3&&D(n)>ur)throw new Error(t+"contains a string greater than "+"10485760 utf8 bytes "+ut(r)+" ('"+n.substring(0,50)+"...')");if(n&&"object"==typeof n){var o=!1,s=!1;if(ve(n,(function(n,i){if(".value"===n)o=!0;else if(".priority"!==n&&".sv"!==n&&(s=!0,!lr(n)))throw new Error(t+" contains an invalid key ("+n+") "+ut(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,u;u=n,(a=r).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(u),a.byteLength_+=D(u),at(a),e(t,i,r),function(e){var t=e.parts_.pop();e.byteLength_-=D(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),o&&s)throw new Error(t+' contains ".value" child '+ut(r)+" in addition to actual children.")}},fr=e("_validatePathString",(function(e,t,n,i){if(!(i&&void 0===n||hr(n)))throw new Error(M(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')})),pr=e("_validateWritablePath",(function(e,t){if(".info"===Qe(t))throw new Error(e+" failed = Can't modify data under /.info/")})),_r=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!lr(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),hr(e)}(n))throw new Error(M(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},vr=function(){this.eventLists_=[],this.recursionDepth_=0};function gr(e,t){for(var n=null,i=0;i<t.length;i++){var r=t[i],o=r.getPath();null===n||rt(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(r)}n&&e.eventLists_.push(n)}function mr(e,t,n){gr(e,n),Cr(e,(function(e){return rt(e,t)}))}function yr(e,t,n){gr(e,n),Cr(e,(function(e){return ot(e,t)||ot(t,e)}))}function Cr(e,t){e.recursionDepth_++;for(var n=!0,i=0;i<e.eventLists_.length;i++){var r=e.eventLists_[i];if(r)t(r.path)?(wr(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function wr(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var i=n.getEventRunner();ee&&ie("event: "+n.toString()),Ce(i)}}}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var Tr=function(){function e(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vr,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tn(),this.transactionQueueTree_=new Ji,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e.prototype.toString=function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host},e}();function Ir(e,t,n){if(e.stats_=Me(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Zt(e.repoInfo_,(function(t,n,i,r){Er(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return Sr(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{p(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new ct(e.repoInfo_,t,(function(t,n,i,r){Er(e,t,n,i,r)}),(function(t){Sr(e,t)}),(function(t){!function(e,t){ve(t,(function(t,n){Nr(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var i,r,o;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(i=e.repoInfo_,r=function(){return new an(e.stats_,e.server_)},o=i.toString(),De[o]||(De[o]=r()),De[o]),e.infoData_=new en,e.infoSyncTree_=new ki({startListening:function(t,n,i,r){var o=[],s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=Ni(e.infoSyncTree_,t._path,s),setTimeout((function(){r("ok")}),0)),o},stopListening:function(){}}),Nr(e,"connected",!1),e.serverSyncTree_=new ki({startListening:function(t,n,i,r){return e.server_.listen(t,i,n,(function(n,i){var o=r(n,i);yr(e.eventQueue_,t._path,o)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function kr(e){var t=e.infoData_.getNode(new Be(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function br(e){return(t=(t={timestamp:kr(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Er(e,t,n,i,r){e.dataUpdateCount++;var o=new Be(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var s=[];if(r)if(i){var a=R(n,(function(e){return Ut(e)}));s=function(e,t,n,i){var r=Wi(e,i);if(r){var o=Ui(r),s=o.path,a=o.queryId,u=nt(s,t),l=Tn.fromObject(n);return ji(e,s,new fn(un(a),u,l))}return[]}(e.serverSyncTree_,o,a,r)}else{var u=Ut(n);s=xi(e.serverSyncTree_,o,u,r)}else if(i){var l=R(n,(function(e){return Ut(e)}));s=function(e,t,n){var i=Tn.fromObject(n);return Mi(e,new fn({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,o,l)}else{var h=Ut(n);s=Ni(e.serverSyncTree_,o,h)}var c=o;s.length>0&&(c=Ar(e,o)),yr(e.eventQueue_,c,s)}function Sr(e,t){Nr(e,"connected",t),!1===t&&function(e){Dr(e,"onDisconnectEvents");var t=br(e),n=tn();rn(e.onDisconnect_,Ke(),(function(i,r){var o=Qi(i,r,e.serverSyncTree_,t);nn(n,i,o)}));var i=[];rn(n,Ke(),(function(t,n){i=i.concat(Ni(e.serverSyncTree_,t,n));var r=jr(e,t);Ar(e,r)})),e.onDisconnect_=tn(),yr(e.eventQueue_,Ke(),i)}(e)}function Nr(e,t,n){var i=new Be("/.info/"+t),r=Ut(n);e.infoData_.updateSnapshot(i,r);var o=Ni(e.infoSyncTree_,i,r);yr(e.eventQueue_,i,o)}function Pr(e){return e.nextWriteId_++}function xr(e,t,n,i){Dr(e,"update",{path:t.toString(),value:n});var r=!0,o=br(e),s={};if(ve(n,(function(n,i){r=!1,s[n]=Qi(et(t,n),Ut(i),e.serverSyncTree_,o)})),r)ie("update() called with empty data.  Don't do anything."),Mr(e,i,"ok",void 0);else{var a=Pr(e),u=Ei(e.serverSyncTree_,t,s,a);gr(e.eventQueue_,u),e.server_.merge(t.toString(),n,(function(n,r){var o="ok"===n;o||ae("update at "+t+" failed: "+n);var s=Si(e.serverSyncTree_,a,!o),u=s.length>0?Ar(e,t):t;yr(e.eventQueue_,u,s),Mr(e,i,n,r)})),ve(n,(function(n){var i=jr(e,et(t,n));Ar(e,i)})),yr(e.eventQueue_,t,[])}}function Rr(e,t,n){var i;i=".info"===Qe(t._path)?Pi(e.infoSyncTree_,t,n):Pi(e.serverSyncTree_,t,n),mr(e.eventQueue_,t._path,i)}function Dr(e){var t="";e.persistentConnection_&&(t=e.persistentConnection_.id+":");for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];ie.apply(void 0,[t].concat(i))}function Mr(e,t,n,i){t&&Ce((function(){if("ok"===n)t(null);else{var e=(n||"error").toUpperCase(),r=e;i&&(r+=": "+i);var o=new Error(r);o.code=e,t(o)}}))}function Fr(e,t,n){return Di(e.serverSyncTree_,t,n)||Ot.EMPTY_NODE}function qr(e,t){if(void 0===t&&(t=e.transactionQueueTree_),t||Ur(e,t),Zi(t)){var n=Or(e,t);_(n.length>0,"Sending zero length transaction queue"),n.every((function(e){return 0===e.status}))&&function(e,t,n){for(var i=n.map((function(e){return e.currentWriteId})),r=Fr(e,t,i),o=r,s=r.hash(),a=0;a<n.length;a++){var u=n[a];_(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var l=nt(t,u.path);o=o.updateChild(l,u.currentOutputSnapshotRaw)}var h=o.val(!0),c=t;e.server_.put(c.toString(),h,(function(i){Dr(e,"transaction put response",{path:c.toString(),status:i});var r=[];if("ok"===i){for(var o=[],s=function(t){n[t].status=2,r=r.concat(Si(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},a=0;a<n.length;a++)s(a);Ur(e,Xi(e.transactionQueueTree_,t)),qr(e,e.transactionQueueTree_),yr(e.eventQueue_,t,r);for(var u=0;u<o.length;u++)Ce(o[u])}else{if("datastale"===i)for(var l=0;l<n.length;l++)3===n[l].status?n[l].status=4:n[l].status=0;else{ae("transaction at "+c.toString()+" failed: "+i);for(var h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=i}Ar(e,t)}}),s)}(e,rr(t),n)}else tr(t)&&nr(t,(function(t){qr(e,t)}))}function Ar(e,t){var n=Lr(e,t),i=rr(n);return function(e,t,n){if(0===t.length)return;for(var i=[],r=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=function(s){var a,u,l=t[s],h=nt(n,l.path),c=!1;if(_(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)c=!0,a=l.abortReason,r=r.concat(Si(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)c=!0,a="maxretry",r=r.concat(Si(e.serverSyncTree_,l.currentWriteId,!0));else{var d=Fr(e,l.path,o);l.currentInputSnapshot=d;var f=t[s].update(d.val());if(void 0!==f){dr("transaction failed: Data returned ",f,l.path);var p=Ut(f);"object"==typeof f&&null!=f&&g(f,".priority")||(p=p.updatePriority(d.getPriority()));var v=l.currentWriteId,m=br(e),y=Gi(p,d,m);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=y,l.currentWriteId=Pr(e),o.splice(o.indexOf(v),1),r=(r=r.concat(bi(e.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally))).concat(Si(e.serverSyncTree_,v,!0))}else c=!0,a="nodata",r=r.concat(Si(e.serverSyncTree_,l.currentWriteId,!0))}yr(e.eventQueue_,n,r),r=[],c&&(t[s].status=2,u=t[s].unwatcher,setTimeout(u,Math.floor(0)),t[s].onComplete&&("nodata"===a?i.push((function(){return t[s].onComplete(null,!1,t[s].currentInputSnapshot)})):i.push((function(){return t[s].onComplete(new Error(a),!1,null)}))))},a=0;a<t.length;a++)s(a);Ur(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Ce(i[u]);qr(e,e.transactionQueueTree_)}(e,Or(e,n),i),i}function Lr(e,t){var n,i=e.transactionQueueTree_;for(n=Qe(t);null!==n&&void 0===Zi(i);)i=Xi(i,n),n=Qe(t=$e(t));return i}function Or(e,t){var n=[];return Wr(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function Wr(e,t,n){var i=Zi(t);if(i)for(var r=0;r<i.length;r++)n.push(i[r]);nr(t,(function(t){Wr(e,t,n)}))}function Ur(e,t){var n=Zi(t);if(n){for(var i=0,r=0;r<n.length;r++)2!==n[r].status&&(n[i]=n[r],i++);n.length=i,er(t,n.length>0?n:void 0)}nr(t,(function(t){Ur(e,t)}))}function jr(e,t){var n=rr(Lr(e,t)),i=Xi(e.transactionQueueTree_,t);return function(e,t,n){for(var i=n?e:e.parent;null!==i;){if(t(i))return!0;i=i.parent}}(i,(function(t){Hr(e,t)})),Hr(e,i),ir(i,(function(t){Hr(e,t)})),n}function Hr(e,t){var n=Zi(t);if(n){for(var i=[],r=[],o=-1,s=0;s<n.length;s++)3===n[s].status||(1===n[s].status?(_(o===s-1,"All SENT items should be at beginning of queue."),o=s,n[s].status=3,n[s].abortReason="set"):(_(0===n[s].status,"Unexpected transaction status in abort"),n[s].unwatcher(),r=r.concat(Si(e.serverSyncTree_,n[s].currentWriteId,!0)),n[s].onComplete&&i.push(n[s].onComplete.bind(null,new Error("set"),!1,null))));-1===o?er(t,void 0):n.length=o+1,yr(e.eventQueue_,rr(t),r);for(var a=0;a<i.length;a++)Ce(i[a])}}
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */var zr,Vr,Yr=function(e,t){var n=Br(e),i=n.namespace;"firebase.com"===n.domain&&se(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||se("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ae("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ne(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Be(n.pathString)}},Br=function(e){var t="",n="",r="",o="",s="",a=!0,u="https",l=443;if("string"==typeof e){var h=e.indexOf("//");h>=0&&(u=e.substring(0,h-1),e=e.substring(h+2));var c=e.indexOf("/");-1===c&&(c=e.length);var d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(o=function(e){for(var t="",n=e.split("/"),i=0;i<n.length;i++)if(n[i].length>0){var r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(c,d)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));for(var n,r=i(e.split("&"));!(n=r()).done;){var o=n.value;if(0!==o.length){var s=o.split("=");2===s.length?t[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ae("Invalid query segment '"+o+"' in query '"+e+"'")}}return t}(e.substring(Math.min(e.length,d)));(h=t.indexOf(":"))>=0?(a="https"===u||"wss"===u,l=parseInt(t.substring(h+1),10)):h=t.length;var p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{var _=t.indexOf(".");r=t.substring(0,_).toLowerCase(),n=t.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:a,scheme:u,pathString:o,namespace:s}},Kr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Qr=(zr=0,Vr=[],function(e){var t,n=e===zr;zr=e;var i=new Array(8);for(t=7;t>=0;t--)i[t]=Kr.charAt(e%64),e=Math.floor(e/64);_(0===e,"Cannot push at time == 0");var r=i.join("");if(n){for(t=11;t>=0&&63===Vr[t];t--)Vr[t]=0;Vr[t]++}else for(t=0;t<12;t++)Vr[t]=Math.floor(64*Math.random());for(t=0;t<12;t++)r+=Kr.charAt(Vr[t]);return _(20===r.length,"nextPushId: Length should be 20."),r}),Gr=function(){function e(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}var t=e.prototype;return t.getPath=function(){var e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path},t.getEventType=function(){return this.eventType},t.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.toString=function(){return this.getPath().toString()+":"+this.eventType+":"+p(this.snapshot.exportVal())},e}(),$r=function(){function e(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}var t=e.prototype;return t.getPath=function(){return this.path},t.getEventType=function(){return"cancel"},t.getEventRunner=function(){return this.eventRegistration.getEventRunner(this)},t.toString=function(){return this.path.toString()+":cancel"},e}(),Jr=function(){function e(e,t){this.snapshotCallback=e,this.cancelCallback=t}var t=e.prototype;return t.onValue=function(e,t){this.snapshotCallback.call(null,e,t)},t.onCancel=function(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)},t.matches=function(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context},r(e,[{key:"hasCancelCallback",get:function(){return!!this.cancelCallback}}]),e}(),Xr=e("_QueryImpl",function(){function e(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}var t=e.prototype;return t.isEqual=function(t){if(!((t=E(t))instanceof e))return!1;var n=this._repo===t._repo,i=rt(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r},t.toJSON=function(){return this.toString()},t.toString=function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)},r(e,[{key:"key",get:function(){return tt(this._path)?null:Je(this._path)}},{key:"ref",get:function(){return new Zr(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=Xt(this._queryParams),t=pe(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return Xt(this._queryParams)}}]),e}()),Zr=e("_ReferenceImpl",function(e){function n(t,n){return e.call(this,t,n,new $t,!1)||this}return t(n,e),r(n,[{key:"parent",get:function(){var e=Ze(this._path);return null===e?null:new n(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),n}(Xr)),eo=e("DataSnapshot",function(){function e(e,t,n){this._node=e,this.ref=t,this._index=n}var t=e.prototype;return t.child=function(t){var n=new Be(t),i=to(this.ref,t);return new e(this._node.getChild(n),i,Dt)},t.exists=function(){return!this._node.isEmpty()},t.exportVal=function(){return this._node.val(!0)},t.forEach=function(t){var n=this;return!this._node.isLeafNode()&&!!this._node.forEachChild(this._index,(function(i,r){return t(new e(r,to(n.ref,i),Dt))}))},t.hasChild=function(e){var t=new Be(e);return!this._node.getChild(t).isEmpty()},t.hasChildren=function(){return!this._node.isLeafNode()&&!this._node.isEmpty()},t.toJSON=function(){return this.exportVal()},t.val=function(){return this._node.val()},r(e,[{key:"priority",get:function(){return this._node.getPriority().val()}},{key:"key",get:function(){return this.ref.key}},{key:"size",get:function(){return this._node.numChildren()}}]),e}());function to(e,t){var n,i,r,o;return null===Qe((e=E(e))._path)?(n="child",i="path",o=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),fr(n,i,r,o)):fr("child","path",t,!1),new Zr(e._repo,et(e._path,t))}function no(e,t){e=E(e),pr("set",e._path),cr("set",t,e._path,!1);var n=new v;return function(e,t,n,i,r){Dr(e,"set",{path:t.toString(),value:n,priority:i});var o=br(e),s=Ut(n,i),a=Di(e.serverSyncTree_,t),u=Gi(s,a,o),l=Pr(e),h=bi(e.serverSyncTree_,t,u,l,!0);gr(e.eventQueue_,h),e.server_.put(t.toString(),s.val(!0),(function(n,i){var o="ok"===n;o||ae("set at "+t+" failed: "+n);var s=Si(e.serverSyncTree_,l,!o);yr(e.eventQueue_,t,s),Mr(0,r,n,i)}));var c=jr(e,t);Ar(e,c),yr(e.eventQueue_,c,[])}(e._repo,e._path,t,null,n.wrapCallback((function(){}))),n.promise}var io=function(){function e(e){this.callbackContext=e}var t=e.prototype;return t.respondsTo=function(e){return"value"===e},t.createEvent=function(e,t){var n=t._queryParams.getIndex();return new Gr("value",this,new eo(e.snapshotNode,new Zr(t._repo,t._path),n))},t.getEventRunner=function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,null)}},t.createCancelEvent=function(e,t){return this.callbackContext.hasCancelCallback?new $r(this,e,t):null},t.matches=function(t){return t instanceof e&&(!t.callbackContext||!this.callbackContext||t.callbackContext.matches(this.callbackContext))},t.hasAnyCallback=function(){return null!==this.callbackContext},e}(),ro=function(){function e(e,t){this.eventType=e,this.callbackContext=t}var t=e.prototype;return t.respondsTo=function(e){var t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t},t.createCancelEvent=function(e,t){return this.callbackContext.hasCancelCallback?new $r(this,e,t):null},t.createEvent=function(e,t){_(null!=e.childName,"Child events should have a childName.");var n=to(new Zr(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Gr(e.type,this,new eo(e.snapshotNode,n,i),e.prevName)},t.getEventRunner=function(e){var t=this;return"cancel"===e.getEventType()?function(){return t.callbackContext.onCancel(e.error)}:function(){return t.callbackContext.onValue(e.snapshot,e.prevName)}},t.matches=function(t){return t instanceof e&&(this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)))},t.hasAnyCallback=function(){return!!this.callbackContext},e}();!function(e){_(!ri,"__referenceConstructor has already been defined"),ri=e}(Zr),function(e){_(!ci,"__referenceConstructor has already been defined"),ci=e}(Zr);
/**
      * @license
      * Copyright 2020 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */
var oo={};function so(e,t,n,i,r){var o=i||e.options.databaseURL;void 0===o&&(e.options.projectId||se("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",e.options.projectId),o=e.options.projectId+"-default-rtdb.firebaseio.com");var s,a=Yr(o,r),u=a.repoInfo,l=void 0;"undefined"!=typeof process&&process.env&&(l=process.env.FIREBASE_DATABASE_EMULATOR_HOST),l?(s=!0,o="http://"+l+"?ns="+u.namespace,u=(a=Yr(o,r)).repoInfo):s=!a.repoInfo.secure;var h=r&&s?new ke(ke.OWNER):new Ie(e.name,e.options,t);_r("Invalid Firebase Database URL",a),tt(a.path)||se("Database URL must point to the root of a Firebase Database (not including a child path).");var c=function(e,t,n,i){var r=oo[t.name];r||(r={},oo[t.name]=r);var o=r[e.toURLString()];o&&se("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new Tr(e,false,n,i),r[e.toURLString()]=o,o}(u,e,h,new Te(e.name,n));return new uo(c,e)}var ao,uo=e("Database",function(){function e(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}var t=e.prototype;return t._delete=function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=oo[t])&&n[e.key]===e||se("Database "+t+"("+e.repoInfo_+") has already been deleted."),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()},t._checkNotDeleted=function(e){null===this._rootInternal&&se("Cannot call "+e+" on a deleted database.")},r(e,[{key:"_repo",get:function(){return this._instanceStarted||(Ir(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new Zr(this._repo,Ke())),this._rootInternal}}]),e}());function lo(e,t,n,i){void 0===i&&(i={}),(e=E(e))._checkNotDeleted("useEmulator"),e._instanceStarted&&se("Cannot call useEmulator() after instance has already been initialized.");var r=e._repoInternal,o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&se('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ke(ke.OWNER);else if(i.mockUserToken){var s="string"==typeof i.mockUserToken?i.mockUserToken:N(i.mockUserToken,e.app.options.projectId);o=new ke(s)}!function(e,t,n,i){e.repoInfo_=new Ne(t+":"+n,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,o)}
/**
      * @license
      * Copyright 2021 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */ct.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},ct.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},z(c),l(new d("database",(function(e,t){var n=t.instanceIdentifier;return so(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),h(U,j,ao),h(U,j,"esm2017")}}}));

System.register("chunks:///_virtual/index.esm20173.js",["./rollupPluginModLoBabelHelpers.js"],(function(e){var t;return{setters:[function(e){t=e.createClass}],execute:function(){var n,r;e("LogLevel",void 0),function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(r||(r=e("LogLevel",{})));var o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},i=r.INFO,l=((n={})[r.DEBUG]="log",n[r.VERBOSE]="log",n[r.INFO]="info",n[r.WARN]="warn",n[r.ERROR]="error",n),s=function(e,t){if(!(t<e.logLevel)){var n=(new Date).toISOString(),r=l[t];if(!r)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");for(var o,i=arguments.length,s=new Array(i>2?i-2:0),a=2;a<i;a++)s[a-2]=arguments[a];(o=console)[r].apply(o,["["+n+"]  "+e.name+":"].concat(s))}};e("Logger",function(){function e(e){this.name=e,this._logLevel=i,this._logHandler=s,this._userLogHandler=null}var n=e.prototype;return n.setLogLevel=function(e){this._logLevel="string"==typeof e?o[e]:e},n.debug=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,r.DEBUG].concat(t)),this._logHandler.apply(this,[this,r.DEBUG].concat(t))},n.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,r.VERBOSE].concat(t)),this._logHandler.apply(this,[this,r.VERBOSE].concat(t))},n.info=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,r.INFO].concat(t)),this._logHandler.apply(this,[this,r.INFO].concat(t))},n.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,r.WARN].concat(t)),this._logHandler.apply(this,[this,r.WARN].concat(t))},n.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,r.ERROR].concat(t)),this._logHandler.apply(this,[this,r.ERROR].concat(t))},t(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in r))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}}]),e}())}}}));

System.register("chunks:///_virtual/index.esm20174.js",["./rollupPluginModLoBabelHelpers.js","./index.esm20175.js"],(function(t){var n,e,i,r;return{setters:[function(t){n=t.createForOfIteratorHelperLoose,e=t.asyncToGenerator,i=t.regeneratorRuntime},function(t){r=t.Deferred}],execute:function(){t("Component",function(){function t(t,n,e){this.name=t,this.instanceFactory=n,this.type=e,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}var n=t.prototype;return n.setInstantiationMode=function(t){return this.instantiationMode=t,this},n.setMultipleInstances=function(t){return this.multipleInstances=t,this},n.setServiceProps=function(t){return this.serviceProps=t,this},n.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}());
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var s="[DEFAULT]",o=t("Provider",function(){function t(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}var o=t.prototype;return o.get=function(t){var n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){var e=new r;if(this.instancesDeferred.set(n,e),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&e.resolve(i)}catch(t){}}return this.instancesDeferred.get(n).promise},o.getImmediate=function(t){var n,e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(t){if(i)return null;throw t}},o.getComponent=function(){return this.component},o.setComponent=function(t){if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
       * @license
       * Copyright 2019 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(var e,i=n(this.instancesDeferred.entries());!(e=i()).done;){var r=e.value,o=r[0],a=r[1],c=this.normalizeInstanceIdentifier(o);try{var h=this.getOrInitializeService({instanceIdentifier:c});a.resolve(h)}catch(t){}}}},o.clearInstance=function(t){void 0===t&&(t=s),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},o.delete=function(){var t=e(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Array.from(this.instances.values()),t.next=3,Promise.all([].concat(n.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})),n.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()}))));case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o.isComponentSet=function(){return null!=this.component},o.isInitialized=function(t){return void 0===t&&(t=s),this.instances.has(t)},o.getOptions=function(t){return void 0===t&&(t=s),this.instancesOptions.get(t)||{}},o.initialize=function(t){void 0===t&&(t={});var e=t.options,i=void 0===e?{}:e,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(this.name+"("+r+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");for(var s,o=this.getOrInitializeService({instanceIdentifier:r,options:i}),a=n(this.instancesDeferred.entries());!(s=a()).done;){var c=s.value,h=c[0],u=c[1];r===this.normalizeInstanceIdentifier(h)&&u.resolve(o)}return o},o.onInit=function(t,n){var e,i=this.normalizeInstanceIdentifier(n),r=null!==(e=this.onInitCallbacks.get(i))&&void 0!==e?e:new Set;r.add(t),this.onInitCallbacks.set(i,r);var s=this.instances.get(i);return s&&t(s,i),function(){r.delete(t)}},o.invokeOnInitCallbacks=function(t,e){var i=this.onInitCallbacks.get(e);if(i)for(var r,s=n(i);!(r=s()).done;){var o=r.value;try{o(t,e)}catch(t){}}},o.getOrInitializeService=function(t){var n,e=t.instanceIdentifier,i=t.options,r=void 0===i?{}:i,o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===s?void 0:n),options:r}),this.instances.set(e,o),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch(t){}return o||null},o.normalizeInstanceIdentifier=function(t){return void 0===t&&(t=s),this.component?this.component.multipleInstances?t:s:t},o.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}());t("ComponentContainer",function(){function t(t){this.name=t,this.providers=new Map}var n=t.prototype;return n.addComponent=function(t){var n=this.getProvider(t.name);if(n.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);n.setComponent(t)},n.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},n.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var n=new o(t,this);return this.providers.set(t,n),n},n.getProviders=function(){return Array.from(this.providers.values())},t}())}}}));

System.register("chunks:///_virtual/index.esm20175.js",["./rollupPluginModLoBabelHelpers.js"],(function(e){var r,t,n,i;return{setters:[function(e){r=e.inheritsLoose,t=e.wrapNativeSuper,n=e.assertThisInitialized,i=e.createForOfIteratorHelperLoose}],execute:function(){e({contains:
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},createMockUserToken:
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e,r){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var t=r||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var o=Object.assign({iss:"https://securetoken.google.com/"+t,aud:t,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[d(JSON.stringify({alg:"none",type:"JWT"})),d(JSON.stringify(o)),""].join(".")}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */,createSubscribe:function(e,r){var t=new D(e,r);return t.subscribe.bind(t)},deepCopy:
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e){return v(void 0,e)},deepEqual:function e(r,t){if(r===t)return!0;for(var n=Object.keys(r),i=Object.keys(t),o=0,a=n;o<a.length;o++){var s=a[o];if(!i.includes(s))return!1;var c=r[s],u=t[s];if(C(c)&&C(u)){if(!e(c,u))return!1}else if(c!==u)return!1}for(var h=0,f=i;h<f.length;h++){var d=f[h];if(!n.includes(d))return!1}return!0},deepExtend:v,errorPrefix:function(e,r){return e+" failed: "+r+" argument "}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */,extractQuerystring:function(e){var r=e.indexOf("?");if(!r)return"";var t=e.indexOf("#",r);return e.substring(r,t>0?t:void 0)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */,getGlobal:p,getModularInstance:
/**
       * @license
       * Copyright 2021 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e){return e&&e._delegate?e._delegate:e},getUA:y,isBrowserExtension:function(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id},isEmpty:function(e){for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0},isIE:function(){var e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0},isIndexedDBAvailable:function(){try{return"object"==typeof indexedDB}catch(e){return!1}},isMobileCordova:function(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())},isNodeSdk:function(){return!0===o.NODE_ADMIN},isReactNative:function(){return"object"==typeof navigator&&"ReactNative"===navigator.product},jsonEval:m,map:function(e,r,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=r.call(t,e[i],i,e));return n},querystring:
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function(e){for(var r=[],t=function(){var e=i[n],t=e[0],o=e[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(t)+"="+encodeURIComponent(o))},n=0,i=Object.entries(e);n<i.length;n++)t();return r.length?"&"+r.join("&"):""},querystringDecode:function(e){var r={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var t=e.split("="),n=t[0],i=t[1];r[decodeURIComponent(n)]=decodeURIComponent(i)}})),r},safeGet:function(e,r){return Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0},stringify:function(e){return JSON.stringify(e)}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */,validateIndexedDBOpenable:function(){return new Promise((function(e,r){try{var t=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),t||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){t=!1},i.onerror=function(){var e;r((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){r(e)}}))}
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */});
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
var o=e("CONSTANTS",{NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"}),a=e("assert",(function(e,r){if(!e)throw s(r)})),s=e("assertionError",(function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)})),c=function(e){for(var r=[],t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?r[t++]=i:i<2048?(r[t++]=i>>6|192,r[t++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),r[t++]=i>>18|240,r[t++]=i>>12&63|128,r[t++]=i>>6&63|128,r[t++]=63&i|128):(r[t++]=i>>12|224,r[t++]=i>>6&63|128,r[t++]=63&i|128)}return r},u=e("base64",{byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,r){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var t=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var o=e[i],a=i+1<e.length,s=a?e[i+1]:0,c=i+2<e.length,u=c?e[i+2]:0,h=o>>2,f=(3&o)<<4|s>>4,d=(15&s)<<2|u>>6,l=63&u;c||(l=64,a||(d=64)),n.push(t[h],t[f],t[d],t[l])}return n.join("")},encodeString:function(e,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(e):this.encodeByteArray(c(e),r)},decodeString:function(e,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(e):function(e){for(var r=[],t=0,n=0;t<e.length;){var i=e[t++];if(i<128)r[n++]=String.fromCharCode(i);else if(i>191&&i<224){var o=e[t++];r[n++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){var a=((7&i)<<18|(63&e[t++])<<12|(63&e[t++])<<6|63&e[t++])-65536;r[n++]=String.fromCharCode(55296+(a>>10)),r[n++]=String.fromCharCode(56320+(1023&a))}else{var s=e[t++],c=e[t++];r[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&c)}}return r.join("")}(this.decodeStringToByteArray(e,r))},decodeStringToByteArray:function(e,r){this.init_();for(var t=r?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var o=t[e.charAt(i++)],a=i<e.length?t[e.charAt(i)]:0,s=++i<e.length?t[e.charAt(i)]:64,c=++i<e.length?t[e.charAt(i)]:64;if(++i,null==o||null==a||null==s||null==c)throw new h;var u=o<<2|a>>4;if(n.push(u),64!==s){var f=a<<4&240|s>>2;if(n.push(f),64!==c){var d=s<<6&192|c;n.push(d)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}}),h=e("DecodeBase64StringError",function(e){function t(){var r;return(r=e.apply(this,arguments)||this).name="DecodeBase64StringError",r}return r(t,e),t}(t(Error))),f=e("base64Encode",(function(e){var r=c(e);return u.encodeByteArray(r,!0)})),d=e("base64urlEncodeWithoutPadding",(function(e){return f(e).replace(/\./g,"")})),l=e("base64Decode",(function(e){try{return u.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null}));
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function v(e,r){if(!(r instanceof Object))return r;switch(r.constructor){case Date:return new Date(r.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return r}for(var t in r)r.hasOwnProperty(t)&&"__proto__"!==t&&(e[t]=v(e[t],r[t]));return e}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
function p(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
       * @license
       * Copyright 2022 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */var b=e("getDefaults",(function(){try{return p().__FIREBASE_DEFAULTS__||function(){if("undefined"!=typeof process&&void 0!==process.env){var e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0}}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var r=e&&l(e[1]);return r&&JSON.parse(r)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}})),_=e("getDefaultEmulatorHost",(function(e){var r,t;return null===(t=null===(r=b())||void 0===r?void 0:r.emulatorHosts)||void 0===t?void 0:t[e]}));e("getDefaultEmulatorHostnameAndPort",(function(e){var r=_(e);if(r){var t=r.lastIndexOf(":");if(t<=0||t+1===r.length)throw new Error("Invalid host "+r+" with no separate hostname and port!");var n=parseInt(r.substring(t+1),10);return"["===r[0]?[r.substring(1,t-1),n]:[r.substring(0,t),n]}})),e("getDefaultAppConfig",(function(){var e;return null===(e=b())||void 0===e?void 0:e.config})),e("getExperimentalSetting",(function(e){var r;return null===(r=b())||void 0===r?void 0:r["_"+e]})),e("Deferred",function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(r,t){e.resolve=r,e.reject=t}))}return e.prototype.wrapCallback=function(e){var r=this;return function(t,n){t?r.reject(t):r.resolve(n),"function"==typeof e&&(r.promise.catch((function(){})),1===e.length?e(t):e(t,n))}},e}());function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}var g=e("FirebaseError",function(e){function t(r,i,o){var a;return(a=e.call(this,i)||this).code=r,a.customData=o,a.name="FirebaseError",Object.setPrototypeOf(n(a),t.prototype),Error.captureStackTrace&&Error.captureStackTrace(n(a),E.prototype.create),a}return r(t,e),t}(t(Error))),E=e("ErrorFactory",function(){function e(e,r,t){this.service=e,this.serviceName=r,this.errors=t}return e.prototype.create=function(e){var r=(arguments.length<=1?void 0:arguments[1])||{},t=this.service+"/"+e,n=this.errors[e],i=n?S(n,r):"Error",o=this.serviceName+": "+i+" ("+t+").",a=new g(t,o,r);return a},e}());function S(e,r){return e.replace(A,(function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"}))}var A=/\{\$([^}]+)}/g;
/**
       * @license
       * Copyright 2017 Google LLC
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *   http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */function m(e){return JSON.parse(e)}var O=e("decode",(function(e){var r={},t={},n={},i="";try{var o=e.split(".");r=m(l(o[0])||""),t=m(l(o[1])||""),i=o[2],n=t.d||{},delete t.d}catch(e){}return{header:r,claims:t,data:n,signature:i}}));e("isValidFormat",(function(e){var r=O(e).claims;return!!r&&"object"==typeof r&&r.hasOwnProperty("iat")})),e("isAdmin",(function(e){var r=O(e).claims;return"object"==typeof r&&!0===r.admin}));function C(e){return null!==e&&"object"==typeof e}e("Sha1",function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}var r=e.prototype;return r.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},r.compress_=function(e,r){r||(r=0);var t=this.W_;if("string"==typeof e)for(var n=0;n<16;n++)t[n]=e.charCodeAt(r)<<24|e.charCodeAt(r+1)<<16|e.charCodeAt(r+2)<<8|e.charCodeAt(r+3),r+=4;else for(var i=0;i<16;i++)t[i]=e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3],r+=4;for(var o=16;o<80;o++){var a=t[o-3]^t[o-8]^t[o-14]^t[o-16];t[o]=4294967295&(a<<1|a>>>31)}for(var s,c,u=this.chain_[0],h=this.chain_[1],f=this.chain_[2],d=this.chain_[3],l=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=d^h&(f^d),c=1518500249):(s=h^f^d,c=1859775393):v<60?(s=h&f|d&(h|f),c=2400959708):(s=h^f^d,c=3395469782);var p=(u<<5|u>>>27)+s+l+c+t[v]&4294967295;l=d,d=f,f=4294967295&(h<<30|h>>>2),h=u,u=p}this.chain_[0]=this.chain_[0]+u&4294967295,this.chain_[1]=this.chain_[1]+h&4294967295,this.chain_[2]=this.chain_[2]+f&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295},r.update=function(e,r){if(null!=e){void 0===r&&(r=e.length);for(var t=r-this.blockSize,n=0,i=this.buf_,o=this.inbuf_;n<r;){if(0===o)for(;n<=t;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<r;)if(i[o]=e.charCodeAt(n),++n,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;n<r;)if(i[o]=e[n],++n,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=r}},r.digest=function(){var e=[],r=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&r,r/=256;this.compress_(this.buf_);for(var n=0,i=0;i<5;i++)for(var o=24;o>=0;o-=8)e[n]=this.chain_[i]>>o&255,++n;return e},e}());var D=function(){function e(e,r){var t=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){e(t)})).catch((function(e){t.error(e)}))}var r=e.prototype;return r.next=function(e){this.forEachObserver((function(r){r.next(e)}))},r.error=function(e){this.forEachObserver((function(r){r.error(e)})),this.close(e)},r.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},r.subscribe=function(e,r,t){var n,o=this;if(void 0===e&&void 0===r&&void 0===t)throw new Error("Missing Observer.");void 0===(n=function(e,r){if("object"!=typeof e||null===e)return!1;for(var t,n=i(r);!(t=n()).done;){var o=t.value;if(o in e&&"function"==typeof e[o])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:r,complete:t}).next&&(n.next=T),void 0===n.error&&(n.error=T),void 0===n.complete&&(n.complete=T);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{o.finalError?n.error(o.finalError):n.complete()}catch(e){}})),this.observers.push(n),a},r.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},r.forEachObserver=function(e){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,e)},r.sendOne=function(e,r){var t=this;this.task.then((function(){if(void 0!==t.observers&&void 0!==t.observers[e])try{r(t.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},r.close=function(e){var r=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){r.observers=void 0,r.onNoObservers=void 0})))},e}();function T(){}e("stringToByteArray",(function(e){for(var r=[],t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319){var o=i-55296;n++,a(n<e.length,"Surrogate pair missing trail surrogate."),i=65536+(o<<10)+(e.charCodeAt(n)-56320)}i<128?r[t++]=i:i<2048?(r[t++]=i>>6|192,r[t++]=63&i|128):i<65536?(r[t++]=i>>12|224,r[t++]=i>>6&63|128,r[t++]=63&i|128):(r[t++]=i>>18|240,r[t++]=i>>12&63|128,r[t++]=i>>6&63|128,r[t++]=63&i|128)}return r})),e("stringLength",(function(e){for(var r=0,t=0;t<e.length;t++){var n=e.charCodeAt(t);n<128?r++:n<2048?r+=2:n>=55296&&n<=56319?(r+=4,t++):r+=3}return r}))}}}));

System.register("chunks:///_virtual/index.js",["./rollupPluginModLoBabelHelpers.js","./wrap-idb-value.js"],(function(e){var n,t,r,i,o;return{setters:[function(e){n=e.extends,t=e.asyncToGenerator,r=e.regeneratorRuntime},function(n){i=n.r,o=n.w;var t={};t.unwrap=n.u,t.wrap=n.w,e(t)}],execute:function(){e("openDB",(function(e,n,t){var r=void 0===t?{}:t,i=r.blocked,a=r.upgrade,u=r.blocking,s=r.terminated,c=indexedDB.open(e,n),d=o(c);a&&c.addEventListener("upgradeneeded",(function(e){a(o(c.result),e.oldVersion,e.newVersion,o(c.transaction),e)}));i&&c.addEventListener("blocked",(function(e){return i(e.oldVersion,e.newVersion,e)}));return d.then((function(e){s&&e.addEventListener("close",(function(){return s()})),u&&e.addEventListener("versionchange",(function(e){return u(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),d}));var a=["get","getKey","getAll","getAllKeys","count"],u=["put","add","delete","clear"],s=new Map;function c(e,n){if(e instanceof IDBDatabase&&!(n in e)&&"string"==typeof n){if(s.get(n))return s.get(n);var i=n.replace(/FromIndex$/,""),o=n!==i,c=u.includes(i);if(i in(o?IDBIndex:IDBObjectStore).prototype&&(c||a.includes(i))){var d=function(){var e=t(r().mark((function e(n){var t,a,u,s,d,l,f=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=this.transaction(n,c?"readwrite":"readonly"),u=a.store,s=f.length,d=new Array(s>1?s-1:0),l=1;l<s;l++)d[l-1]=f[l];return o&&(u=u.index(d.shift())),e.next=6,Promise.all([(t=u)[i].apply(t,d),c&&a.done]);case 6:return e.abrupt("return",e.sent[0]);case 7:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}();return s.set(n,d),d}}}i((function(e){return n({},e,{get:function(n,t,r){return c(n,t)||e.get(n,t,r)},has:function(n,t){return!!c(n,t)||e.has(n,t)}})}))}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function n(){return(n=t("extends",Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t})).apply(this,arguments)}function o(e){return(o=t("getPrototypeOf",Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)}))(e)}function i(e,r){return(i=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(e,r)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function u(e,r,n){return(u=a()?t("construct",Reflect.construct.bind()):t("construct",(function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&i(o,r.prototype),o}))).apply(null,arguments)}function c(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function l(e){var r="function"==typeof Map?new Map:void 0;return(l=t("wrapNativeSuper",(function(t){if(null===t||!c(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return u(t,arguments,o(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),i(e,t)})))(e)}function f(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function h(t){var e=p(t,"string");return"symbol"==typeof e?e:String(e)}t({applyDecoratedDescriptor:function(t,e,r,n,o){var i={};Object.keys(n).forEach((function(t){i[t]=n[t]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0);i=r.slice().reverse().reduce((function(r,n){return n(t,e,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0);void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null);return i},arrayLikeToArray:s,assertThisInitialized:function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},asyncToGenerator:function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}},construct:u,createClass:function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return Object.defineProperty(t,"prototype",{writable:!1}),t},createForOfIteratorHelperLoose:function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=f(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},extends:n,getPrototypeOf:o,inheritsLoose:function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)},initializerDefineProperty:function(t,e,r,n){if(!r)return;Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})},isNativeFunction:c,isNativeReflectConstruct:a,regeneratorRuntime:function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t("regeneratorRuntime",(function(){return e}));var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),u=new E(n||[]);return o(a,"_invoke",{value:j(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function h(){}function y(){}function v(){}var d={};l(d,a,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(_([])));b&&b!==r&&n.call(b,a)&&(d=b);var m=v.prototype=h.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=v,o(m,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},w(O.prototype),l(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),l(m,c,"Generator"),l(m,a,(function(){return this})),l(m,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e},setPrototypeOf:i,toPrimitive:p,toPropertyKey:h,unsupportedIterableToArray:f,wrapNativeSuper:l})}}}));

System.register("chunks:///_virtual/tslib.es6.mjs",[],(function(e){return{execute:function(){e("__rest",(function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]])}return t}));"function"==typeof SuppressedError&&SuppressedError}}}));

System.register("chunks:///_virtual/wrap-idb-value.js",[],(function(e){return{execute:function(){e({r:function(e){u=e(u)},w:p});var t,n,r=e("i",(function(e,t){return t.some((function(t){return e instanceof t}))}));var o=new WeakMap,a=new WeakMap,i=new WeakMap,s=new WeakMap,c=e("a",new WeakMap);var u={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||i.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function f(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(n||(n=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(D(this),n),p(o.get(this))}:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return p(e.apply(D(this),n))}:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var a=e.call.apply(e,[D(this),t].concat(r));return i.set(a,t.sort?t.sort():[t]),p(a)}}function v(e){return"function"==typeof e?f(e):(e instanceof IDBTransaction&&function(e){if(!a.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)}));a.set(e,t)}}(e),r(e,t||(t=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function p(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",o),t.removeEventListener("error",a)},o=function(){e(p(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&o.set(e,t)})).catch((function(){})),c.set(n,t),n;var t,n;if(s.has(e))return s.get(e);var r=v(e);return r!==e&&(s.set(e,r),c.set(r,e)),r}var D=e("u",(function(e){return c.get(e)}))}}}));

} }; });