//@ui5-bundle ui5/walkthrough/Component-preload.js
sap.ui.predefine("ui5/walkthrough/Component", ["sap/ui/core/UIComponent","sap/ui/model/json/JSONModel","sap/ui/model/resource/ResourceModel"],(e,t,i)=>{"use strict";return e.extend("ui5.walkthrough.Component",{metadata:{interfaces:["sap.ui.core.IAsyncContentCreation"],rootView:{viewName:"ui5.walkthrough.view.App",type:"XML",id:"app"}},init(){e.prototype.init.apply(this,arguments);const o={recipient:{name:"World"}};const n=new t(o);this.setModel(n);const s=new i({bundleName:"ui5.walkthrough.i18n.i18n"});this.setModel(s,"i18n")}})});
sap.ui.predefine("ui5/walkthrough/controller/App.controller", ["sap/ui/core/mvc/Controller","sap/m/MessageToast"],(e,t)=>{"use strict";return e.extend("ui5.walkthrough.controller.App",{onShowHello(){const e=this.getView().getModel("i18n").getResourceBundle();const o=this.getView().getModel().getProperty("/recipient/name");const s=e.getText("helloMsg",[o]);t.show(s)}})});
sap.ui.predefine("ui5/walkthrough/index", ["sap/ui/core/ComponentContainer"],e=>{"use strict";new e({name:"ui5.walkthrough",settings:{id:"walkthrough"},async:true}).placeAt("content")});
sap.ui.require.preload({
	"ui5/walkthrough/i18n/i18n_ko_KR.properties":'showHelloButtonText=Say Hello\nhelloMsg=Hello {0}',
	"ui5/walkthrough/manifest.json":'{"sap.app":{"id":"ui5.walkthrough","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"UI5 Walkthrough","description":"A simple UI5 application"}}',
	"ui5/walkthrough/view/App.view.xml":'<mvc:View\n   controllerName="ui5.walkthrough.controller.App"\n   xmlns="sap.m"\n   xmlns:mvc="sap.ui.core.mvc"><Button\n      text="{i18n>showHelloButtonText}"\n      press=".onShowHello"/><Input\n      value="{/recipient/name}"\n      description="Hello {/recipient/name}"\n      valueLiveUpdate="true"\n      width="60%"/></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
