System.register("chunks:///_virtual/bridge.ts",["cc","./index.esm.js","./index-77658911.js","./index.esm2017.js","./index.esm20174.js","./tslib.es6.mjs","./index.esm20172.js"],(function(e){var n,t,i,c,o,a,r,u,s,f;return{setters:[function(e){n=e.cclegacy},null,function(e){t=e.ab,i=e.o},function(e){c=e.initializeApp},null,null,function(e){o=e.getDatabase,a=e.onValue,r=e.ref,u=e.set,s=e.get,f=e.child}],execute:function(){n._RF.push({},"38cd6l6cFxNNLIWxKEB712S","bridge",void 0);var l,p={};e("default",function(){function e(){}var n=e.prototype;return n.signInWithGoogleEmail=function(e,n){var a=c({apiKey:"AIzaSyAc5PRwmE14gBH5az8TSoqs9aBrQ8YWa4o",authDomain:"fir-test-756e1.firebaseapp.com",databaseURL:"https://fir-test-756e1.firebaseio.com",projectId:"fir-test-756e1",storageBucket:"fir-test-756e1.appspot.com",messagingSenderId:"182531440628"});return t(i(),e,n).then((function(e){return l=o(a),e.user.uid})).catch((function(e){e.code;return e.message}))},n.connectListener=function(e){var n=this,t=function(t){return n.onReceive(e,t)};a(r(l,"BTP/C/"+e+"/output/"),(function(e){var n=e.val();n&&t&&t(n)}))},n.onReceive=function(e,n){var t=n,i="",c=n.indexOf(" ");c>0&&(t=n.slice(0,c),i=n.slice(c+1)),p[e].forEach((function(n){return n.onReceive(e,t,i)})),console.log("key:",t,"value:",i)},n.addDispatcher=function(e,n,t){if(p[e])!p[e].find((function(e,i,c){if(e.context===n)return Object.keys(t).forEach((function(n){return e.callbackMap[n]=t[n]})),!0}))&&p[e].push(new d(n,t));else{var i=new d(n,t);(p[e]=p[e]||[]).push(i)}},n.removeDispatcher=function(e,n){p[e].find((function(t,i){if(t.context==n)return p[e].splice(i,1),!0}))},n.applicate=function(e,n,t){var i=t?n+" "+t:n;u(r(l,"BTP/C/"+e+"/input/"),i),console.log("applicate:",e,n,t)},n.loadAsync=function(e,n){var t="BTP/D/"+e+"/";return new Promise((function(i){s(n?f(r(l,t),n):r(l,t)).then((function(t){var c=t.val();i(c),console.log(e,n,"::::",c)}))}))},n.disconnect=function(e){u(r(l,"BTP/C/"+e+"/"),null)},e}());function d(e,n){this.context=e,this.callbackMap=n,this.onReceive=function(t,i,c){var o=n[i];o&&o.call(e,t,i,c)}}n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/KLineChart.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,n,o,r,l,a,s,h,c,u,d,g,p,b,m;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,a=t.Graphics,s=t.Node,h=t.Label,c=t.EditBox,u=t.ProgressBar,d=t.v3,g=t.UITransform,p=t.size,b=t.Color,m=t.Component}],execute:function(){var f,L,P,_,N,C,y,v,w,E,M,k,T,F,S,z,R,I,x,D,A,B,W,U,O,G,K,V,H,q,J,Q,j,X,Y,Z;r._RF.push({},"1392eCrNfBFJ5CG3GqahmqI","KLineChart",void 0);var $=l.ccclass,tt=l.property;t("default",(f=tt(a),L=tt(s),P=tt(s),_=tt(s),N=tt(s),C=tt(s),y=tt(s),v=tt(s),w=tt(s),E=tt(h),M=tt(h),k=tt(c),T=tt(h),F=tt(h),S=tt(u),z=tt(h),R=tt(h),$((D=e((x=function(t){function e(){for(var e,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,n(e,"graphics",D,o(e)),n(e,"chartNode",A,o(e)),n(e,"topLineNode",B,o(e)),n(e,"bottomLineNode",W,o(e)),n(e,"sellingLineNode",U,o(e)),n(e,"buyingLineNode",O,o(e)),n(e,"tickPriceLineNode",G,o(e)),n(e,"editModelPanel",K,o(e)),n(e,"resultPanel",V,o(e)),n(e,"resultFundsLabel",H,o(e)),n(e,"resultEarnRateLabel",q,o(e)),n(e,"captialEditBox",J,o(e)),n(e,"fundsLabel",Q,o(e)),n(e,"earnRateLabel",j,o(e)),n(e,"stockProgressBar",X,o(e)),n(e,"filledLabel",Y,o(e)),n(e,"filledRateLabel",Z,o(e)),e.klineData=[],e.chartWidth=760,e.entrust=null,e._controlPriceNode=void 0,e.isEdit=!1,e.mutiTimes=1,e._captial=0,e._funds=0,e._topPrice=0,e._sellingPrice=0,e._buyingPrice=0,e._bottomPrice=0,e._storage=0,e._filled=0,e._ticketPrice=0,e._range=0,e._max=0,e._min=0,e}i(e,t);var r=e.prototype;return r.start=function(){this.onEditMode(!1,!0)},r.onToucStart=function(t){var e=t.getUILocation();this._controlPriceNode=null,Math.abs(e.y-this.topLineNode.worldPosition.y)<25?this._controlPriceNode=this.topLineNode:Math.abs(e.y-this.sellingLineNode.worldPosition.y)<25?this._controlPriceNode=this.sellingLineNode:Math.abs(e.y-this.buyingLineNode.worldPosition.y)<25?this._controlPriceNode=this.buyingLineNode:Math.abs(e.y-this.bottomLineNode.worldPosition.y)<25&&(this._controlPriceNode=this.bottomLineNode)},r.onTouchMove=function(t){var e=t.getUILocation(),i=d(e.x,e.y),n=this.chartNode.getComponent(g).convertToNodeSpaceAR(i);this._controlPriceNode&&this.showPriceAt(n.y)},r.onTouchEnd=function(t){var e=parseFloat(this.topLineNode.getComponentInChildren(h).string),i=parseFloat(this.sellingLineNode.getComponentInChildren(h).string),n=parseFloat(this.buyingLineNode.getComponentInChildren(h).string),o=parseFloat(this.bottomLineNode.getComponentInChildren(h).string);this._max=Math.max(e,i,n,o,this._ticketPrice),this._min=Math.min(e,i,n,o,this._ticketPrice),this.drawKLineChart(this.graphics,this.klineData,this.chartWidth,300)},r.setSize=function(t){this.chartWidth=t,this.chartNode.getComponent(g).setContentSize(p(this.chartWidth,300)),this.topLineNode.getComponent(g).setContentSize(p(this.chartWidth,2)),this.bottomLineNode.getComponent(g).setContentSize(p(this.chartWidth,2)),this.sellingLineNode.getComponent(g).setContentSize(p(this.chartWidth,2)),this.buyingLineNode.getComponent(g).setContentSize(p(this.chartWidth,2)),this.tickPriceLineNode.getComponent(g).setContentSize(p(this.chartWidth,2))},r.onEditMode=function(t,e){if(void 0===e&&(e=!1),this.editModelPanel.active=t,this.isEdit=t,t)this.editModelPanel.on(s.EventType.TOUCH_START,this.onToucStart,this),this.editModelPanel.on(s.EventType.TOUCH_MOVE,this.onTouchMove,this);else if(this.editModelPanel.off(s.EventType.TOUCH_START,this.onToucStart,this),this.editModelPanel.off(s.EventType.TOUCH_MOVE,this.onTouchMove,this),e){if(0===this._topPrice)return;var i=this._min,n=300/this._range,o=this._topPrice;this.topLineNode.position=d(0,(o-i)*n),this.topLineNode.getComponentInChildren(h).string=o.toString();var r=this._sellingPrice;this.sellingLineNode.position=d(0,(r-i)*n),this.sellingLineNode.getComponentInChildren(h).string=r.toString();var l=this._buyingPrice;this.buyingLineNode.position=d(0,(l-i)*n),this.buyingLineNode.getComponentInChildren(h).string=l.toString();var a=this._bottomPrice;this.bottomLineNode.position=d(0,(a-i)*n),this.bottomLineNode.getComponentInChildren(h).string=a.toString()}else{var c,u=parseFloat(this.topLineNode.getComponentInChildren(h).string),g=parseFloat(this.sellingLineNode.getComponentInChildren(h).string),p=parseFloat(this.buyingLineNode.getComponentInChildren(h).string),b=parseFloat(this.bottomLineNode.getComponentInChildren(h).string),m=this._captial;m||(m=parseFloat(this.captialEditBox.string)),console.log("this.mutiTimes:",this.mutiTimes),this.mutiTimes=1,null==(c=this.entrust)||c.call(this,u,g,p,b,m,this.mutiTimes)}},r.showPriceAt=function(t){var e=this.chartNode.getComponent(g).height,i=this._min+t/e*this._range;this._controlPriceNode.position=d(0,(i-this._min)/this._range*e),this._controlPriceNode.getComponentInChildren(h).string=i.toFixed(4)},r.updateTicketPrice=function(t){this._ticketPrice=t},r.setEntrustData=function(t,e,i,n,o,r,l,a,s){this._captial=t,this._funds=e,this._topPrice=i,this._sellingPrice=n,this._buyingPrice=o,this._bottomPrice=r,this._storage=l,this._filled=a,this.mutiTimes=s,this.fundsLabel.string=e.toString();var h=100*(e/t-1);this.earnRateLabel.color=h>=0?b.GREEN:b.RED,this.earnRateLabel.string=(h>=0?"+":"")+h.toFixed(2)+"%",console.log("this.earnRateLabel.string:",this.earnRateLabel.string),this.filledLabel.string=l+" ::: "+a;var c=a/l;this.filledRateLabel.string=(100*c).toFixed(2)+"%",this.stockProgressBar.progress=c,this.captialEditBox.node.active=0===t,this.resultFundsLabel.string=this._funds.toString(),this.resultEarnRateLabel.color=h>=0?b.GREEN:b.RED,this.resultEarnRateLabel.string=(h>=0?"+":"")+h.toFixed(2)+"%"},r.setKlineData=function(t){var e=JSON.parse(t);this.klineData=e.map((function(t){return{time:t[0].toString(),high:parseFloat(t[1]),open:parseFloat(t[2]),close:parseFloat(t[3]),low:parseFloat(t[4])}})),this.drawKLineChart(this.graphics,this.klineData,this.chartWidth,300)},r.getPriceRange=function(t){var e=Number.MAX_VALUE,i=Number.MIN_VALUE;return t.forEach((function(t){t.high>i&&(i=t.high),t.low<e&&(e=t.low)})),e=this._bottomPrice>0?Math.min(e,this._ticketPrice,this._bottomPrice,this._buyingPrice):Math.min(e,this._ticketPrice),i=Math.max(i,this._ticketPrice,this._topPrice),{min:e,max:i,range:i-e}},r.drawKLineChart=function(t,e,i,n){t.clear();var o=this.getPriceRange(e),r=o.min,l=o.max,a=o.range,s=i/e.length,h=n/a,c=r+(l-r)/2,u=this.getQuarterLevel(this.klineData,c,2),d=u[0],g=u[1],p=u[2],m=u[3],f=Math.min(d,g);t.rect(0,(g-r)*h,i,(f-g)*h),t.fillColor=new b(120,0,0,80),t.fill();var L=Math.max(r,m);t.rect(0,(L-r)*h,i,(p-L)*h),t.fillColor=new b(0,120,0,80),t.fill(),this.setStockPriceLabelsAndPosition(u,r,a,n),e.forEach((function(e,i){var n=i*s,o=(e.high-r)*h,l=(e.low-r)*h,a=(e.open-r)*h,c=(e.close-r)*h,u=e.close<e.open?b.RED:b.GREEN;t.moveTo(n+s/2,o),t.lineTo(n+s/2,l),t.strokeColor=u,t.stroke(),t.fillColor=u;var d=Math.abs(c-a);t.rect(n+s/4,Math.min(a,c),s/2,d),t.fill()})),this._min=r,this._range=a},r.setStockPriceLabelsAndPosition=function(t,e,i,n){var o,r,l,a,s=n/i;o=0===this._topPrice?t[0]:this._topPrice,this.topLineNode.position=d(0,(o-e)*s),this.topLineNode.getComponentInChildren(h).string=o.toString(),r=0===this._sellingPrice?t[1]:this._sellingPrice,this.sellingLineNode.position=d(0,(r-e)*s),this.sellingLineNode.getComponentInChildren(h).string=r.toString(),l=0===this._buyingPrice?t[2]:this._buyingPrice,this.buyingLineNode.position=d(0,(l-e)*s),this.buyingLineNode.getComponentInChildren(h).string=l.toString(),a=0===this._bottomPrice?t[3]:this._bottomPrice,this.bottomLineNode.position=d(0,(a-e)*s),this.bottomLineNode.getComponentInChildren(h).string=a.toString(),console.log("this._ticketPrice:",this._ticketPrice),this._ticketPrice&&(this.tickPriceLineNode.position=d(0,(this._ticketPrice-e)*s),this.tickPriceLineNode.getComponentInChildren(h).string=this._ticketPrice.toString())},r.drawTimeLabels=function(t,e,i,n){var o=Math.floor(e.length/6),r=i/e.length;e.forEach((function(t,e){if(e%o==0){var i=e*r;console.log("Draw time label at "+i+", time: "+t.time)}}))},r.drawPriceLabels=function(t,e,i){for(var n=i/5,o=e-t,r=0;r<=5;r++){var l=t+o*(r/5),a=n*r;console.log("Draw price label at "+a+", price: "+l)}},r.getQuarterLevel=function(t,e,i){var n=t.map((function(t){return t.high})),o=t.map((function(t){return t.low}));console.log("highValues:",n),console.log("lowValues:",o);var r=Math.max.apply(Math,n),l=Math.min.apply(Math,o);return[parseFloat(r.toFixed(i)),parseFloat((n.length>0?n.reduce((function(t,e){return t+e}),0)/n.length:r).toFixed(i)),parseFloat((o.length>0?o.reduce((function(t,e){return t+e}),0)/o.length:l).toFixed(i)),parseFloat(l.toFixed(i))]},r.onEntrustCancelClicked=function(){this.onEditMode(!1,!0)},r.onEntrustResult=function(t){this.resultPanel.active=t,t&&(this.editModelPanel.active=!1)},e}(m)).prototype,"graphics",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(x.prototype,"chartNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(x.prototype,"topLineNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(x.prototype,"bottomLineNode",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=e(x.prototype,"sellingLineNode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(x.prototype,"buyingLineNode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=e(x.prototype,"tickPriceLineNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(x.prototype,"editModelPanel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(x.prototype,"resultPanel",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(x.prototype,"resultFundsLabel",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=e(x.prototype,"resultEarnRateLabel",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=e(x.prototype,"captialEditBox",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(x.prototype,"fundsLabel",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),j=e(x.prototype,"earnRateLabel",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),X=e(x.prototype,"stockProgressBar",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=e(x.prototype,"filledLabel",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=e(x.prototype,"filledRateLabel",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=x))||I));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./KLineChart.ts","./bridge.ts","./test.ts","./SymbolTitle.ts"],(function(){return{setters:[null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SymbolTitle.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,r,a,l,s,u,b,c,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Label,s=t.Node,u=t.EditBox,b=t.instantiate,c=t.Button,y=t.Component}],execute:function(){var p,h,m,f,g,S,d,L,D,v,_,w,q,B,E,Q,z;r._RF.push({},"fefee7azLVLdJ22ipH00agW","SymbolTitle",void 0);var C=a.ccclass,P=a.property;t("SymbolTitle",(p=C("SymbolTitle"),h=P(l),m=P(l),f=P(l),g=P(l),S=P(s),d=P(s),L=P(u),p((_=e((v=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"baseSymbolLabel",_,n(e)),i(e,"quoteSymbolLabel",w,n(e)),i(e,"basePriceLabel",q,n(e)),i(e,"quotePriceLabel",B,n(e)),i(e,"baseDropDownLayout",E,n(e)),i(e,"quoteDropDownLayout",Q,n(e)),i(e,"baseEditBox",z,n(e)),e._baseSymbol="BTC",e._quoteSymbol="USDT",e.symbolSigns=[],e.balances=[],e.bridge=void 0,e.guid="",e}o(e,t);var r=e.prototype;return r.start=function(){this.baseSymbolLabel.string=this._baseSymbol,this.quoteSymbolLabel.string=this._quoteSymbol},r.setBaseSymbol=function(t){this.baseSymbolLabel.string=this._baseSymbol=t},r.setQuoteSymbol=function(t){this.quoteSymbolLabel.string=this._quoteSymbol=t},r.setBaseQuanity=function(t){this.basePriceLabel.string=t},r.setQuoteQuanity=function(t){this.quotePriceLabel.string=t},r.selectBaseOption=function(t){var e=t.target.getComponent(l).string;this.setBaseSymbol(e),this.setBaseQuanity(this.balances[e].free),this.baseDropDownLayout.children.forEach((function(t){return t.active=!1}));var o=this._baseSymbol+"_"+this._quoteSymbol;this.bridge.applicate(this.guid,"trade_proxy_symbol",o)},r.selectQuoteOption=function(t){console.log(t.target);var e=t.target.getComponent(l).string;this.setQuoteSymbol(e),this.setQuoteQuanity(this.balances[e].free),this.quoteDropDownLayout.children.forEach((function(t){return t.active=!1}))},r.onBaseSymbolClicked=function(){var t=this,e=this.baseDropDownLayout.children;this.symbolSigns.forEach((function(o,i){var n=e[i];n||((n=b(e[0])).parent=t.baseDropDownLayout),n.active=!0,n.getComponent(c).node.on("click",t.selectBaseOption,t),n.getComponent(l).string=o}))},r.onQuoteSymbolClicked=function(){var t=this,e=this.quoteDropDownLayout.children;this.symbolSigns.forEach((function(o,i){var n=e[i];n||((n=b(e[0])).parent=t.quoteDropDownLayout),n.active=!0,n.getComponent(c).node.on("click",t.selectQuoteOption,t),n.getComponent(l).string=o}))},r.onEditEnd=function(){var t=this.baseEditBox.string;this.setBaseSymbol(t),this.baseDropDownLayout.children.forEach((function(t){return t.active=!1}));var e=this._baseSymbol+"_"+this._quoteSymbol;this.bridge.applicate(this.guid,"trade_proxy_symbol",e)},e}(y)).prototype,"baseSymbolLabel",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=e(v.prototype,"quoteSymbolLabel",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=e(v.prototype,"basePriceLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(v.prototype,"quotePriceLabel",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(v.prototype,"baseDropDownLayout",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(v.prototype,"quoteDropDownLayout",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(v.prototype,"baseEditBox",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=v))||D));r._RF.pop()}}}));

System.register("chunks:///_virtual/test.ts",["./rollupPluginModLoBabelHelpers.js","cc","./bridge.ts","./KLineChart.ts","./SymbolTitle.ts"],(function(t){var i,e,n,o,r,l,s,a,c,u,_,d,g,h,b;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,s=t.EditBox,a=t.Button,c=t.Node,u=t.instantiate,_=t.Label,d=t.Component},function(t){g=t.default},function(t){h=t.default},function(t){b=t.SymbolTitle}],execute:function(){var p,y,f,m,v,k,x,C,S,E,T,w,B,L,R,I,z;r._RF.push({},"99bf61LJxhN+bJG5MmhWW23","test",void 0);var A=l.ccclass,N=l.property;t("test",(p=A("test"),y=N(s),f=N(s),m=N(a),v=N(c),k=N(b),x=N(h),C=N(c),p((T=i((E=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];return i=t.call.apply(t,[this].concat(r))||this,n(i,"mailEditBox",T,o(i)),n(i,"passwordEditBox",w,o(i)),n(i,"enterButton",B,o(i)),n(i,"loginPanel",L,o(i)),n(i,"symbolTitle",R,o(i)),n(i,"klineChart",I,o(i)),n(i,"tabRoot",z,o(i)),i._guid="",i._bridge=void 0,i._balances=[],i._symbolSign="",i}e(i,t);var r=i.prototype;return r.start=function(){this._bridge=new g;var t=localStorage.getItem("login_session");if(t){var i=JSON.parse(t);this.login(i.id,i.pw)}},r.login=function(t,i){var e=this;return this._bridge.signInWithGoogleEmail(t,i).then((function(t){console.log(t),e.loginPanel.active=!1,e._guid=t,e._bridge.addDispatcher(e._guid,e,{account_asset:e.cmd_account_asset,trade_proxy_symbol:e.cmd_trade_proxy_symbol,trade_proxy_get_stock_info:e.cmd_trade_proxy_get_stock_info,trade_proxy_entrust:e.cmd_trade_proxy_entrust,trade_proxy_result:e.cmd_trade_proxy_result,trade_proxy_kline:e.cmd_trade_proxy_kline}),e._bridge.connectListener(e._guid);var i=e._bridge;window.onbeforeunload=function(){i.disconnect(t)}})).then((function(){return e.updateSymbolList()})).then((function(){return e._bridge.applicate(e._guid,"account_asset")})).then((function(){return!0}))},r.cmd_account_asset=function(t,i,e){var n=this;if(this._guid==t){var o=[];JSON.parse(e).forEach((function(t){var i=t.asset,e=t.free,r=t.locked;n._balances[i]={free:e,locked:r},o.push(i)}));var r=this._symbolSign.split("_");console.log("symbols:",r);var l=this._balances[r[0]],s=this._balances[r[1]];console.log("baseAsset:",l),this.symbolTitle.setBaseQuanity(l?l.free:0),this.symbolTitle.setQuoteQuanity(s?s.free:0),this.symbolTitle.balances=this._balances,this.symbolTitle.symbolSigns=o}},r.cmd_trade_proxy_symbol=function(t,i,e){var n=this;if(console.log(i,e),this._guid==t){this.unscheduleAllCallbacks(),this.klineChart.setEntrustData(0,0,0,0,0,0,0,0,1);var o=e.split(" "),r=o[0],l="1"===o[1],s=r.split("_"),a=s[0],c=s[1],u=a+c;if(l){var _=o[2];this._bridge.applicate(this._guid,"trade_proxy_get_stock_info",r),(1===_||2===_)&&this.klineChart.onEntrustResult(!0)}else this._bridge.loadAsync("TICKET_PRICE",u).then((function(t){var i=t;n.klineChart.updateTicketPrice(i),n._bridge.applicate(n._guid,"trade_proxy_kline",r+" 15m "+Math.round(1e6*Math.random()))}));var d=this._balances[a],g=this._balances[c];this.symbolTitle.setBaseQuanity(d?d.free:0),this.symbolTitle.setQuoteQuanity(g?g.free:0),this.symbolTitle.setBaseSymbol(a),this.symbolTitle.setQuoteSymbol(c),this.klineChart.entrust=function(t,i,e,o,r,l){n.unscheduleAllCallbacks(),console.log("委派",a,c,i,e,r),r&&!isNaN(r)?n._bridge.applicate(n._guid,"trade_proxy_entrust",a+" "+c+" "+r+" "+t+" "+i+" "+e+" "+o+" "+l):console.log("未輸入可用的captial:",r)}}},r.cmd_trade_proxy_get_stock_info=function(t,i,e){var n=this;if(this._guid==t){var o=e.split(" "),r=o[0],l="1"===o[1],s=o[2],a=o[3],c=o[4],u=o[5],_=o[6],d=o[7],g=o[8],h=o[9],b=o[10];if(console.log("cmd::::mutiTimes:",b),l){this.klineChart.setEntrustData(s,a,c,u,_,d,g,h,b);var p=r.split("_"),y=p[0]+p[1];this._bridge.loadAsync("TICKET_PRICE",y).then((function(t){var i=t;n.klineChart.updateTicketPrice(i),n.klineChart.isEdit||n._bridge.applicate(n._guid,"trade_proxy_kline",r+" 15m")})),this.scheduleOnce((function(){n.klineChart.isEdit||n._bridge.applicate(n._guid,"trade_proxy_get_stock_info",r)}),60)}else console.log("要了倉位資訊卻沒做事…")}},r.cmd_trade_proxy_entrust=function(t,i,e){var n=this;if(this._guid==t){var o=e.split(" "),r=o[0],l="1"===o[1],s=o[2],a=o[3],c=o[4],u=o[5],_=o[6],d=o[7],g=o[8],h=o[9],b=o[10];l&&(console.log(e,"委托成功",this._symbolSign),this.updateSymbolList(r).then((function(){n.klineChart.setEntrustData(s,a,c,u,_,d,g,h,b)})))}},r.cmd_trade_proxy_result=function(t,i,e){if(console.log(i,e),this._guid==t){var n=e.split(" "),o=n[0];if("1"===n[1]){"1"===n[2]?(this.unscheduleAllCallbacks(),console.log(o+" 已完成結算")):console.log(o+" 結算中"),this.klineChart.onEntrustResult(!0)}else{var r=n[2];console.log(o,"結算錯誤:",r)}}},r.cmd_trade_proxy_kline=function(t,i,e){var n=this;if(console.log(i,e),this._guid==t){var o=e.split(" "),r=o[0];if("1"===o[1]){var l=r.split("_"),s=l[0]+l[1];this._symbolSign=r,console.log("當前頁面為:",r),this.klineChart.setSize(760),this._bridge.loadAsync("KLINE/"+s,"15m").then((function(t){n.klineChart.setKlineData(t)}))}else{var a=o[2];console.log("kline 處理錯誤:",a)}}},r.updateSymbolList=function(t){var i=this;return this._bridge.loadAsync("LIST").then((function(e){if(e){var n=JSON.parse(e),o=n[0];i._symbolSign=t||o;var r=i._symbolSign.split("_");i.symbolTitle.setBaseSymbol(r[0]),i.symbolTitle.setQuoteSymbol(r[1]),i._bridge.applicate(i._guid,"trade_proxy_symbol",i._symbolSign),i.onTabSetting(n)}i.symbolTitle.bridge=i._bridge,i.symbolTitle.guid=i._guid}))},r.onTabSetting=function(t){var i=this,e=this.tabRoot.children;e.forEach((function(t){return t.active=!1})),t.forEach((function(t,n){var o=t.split("_"),r=o[0]+o[1],l=e[n];l||((l=u(e[0])).parent=i.tabRoot),l.active=!0,l.getComponentInChildren(_).string=r,l.getComponent(a).node.on("click",(function(){i._symbolSign!==t&&(i.klineChart.onEntrustResult(!1),i._symbolSign=t,i._bridge.applicate(i._guid,"trade_proxy_symbol",t))}),i)}))},r.onEntrustClicked=function(){this.klineChart.onEditMode(!this.klineChart.isEdit)},r.onEntrustResultClicked=function(){this._bridge.applicate(this._guid,"trade_proxy_result",this._symbolSign)},r.onLoginEnterClicked=function(){var t=this.mailEditBox.string,i=this.passwordEditBox.string;this.login(t,i)&&localStorage.setItem("login_session",JSON.stringify({id:t,pw:i}))},i}(d)).prototype,"mailEditBox",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=i(E.prototype,"passwordEditBox",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(E.prototype,"enterButton",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(E.prototype,"loginPanel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=i(E.prototype,"symbolTitle",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(E.prototype,"klineChart",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=i(E.prototype,"tabRoot",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=E))||S));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});