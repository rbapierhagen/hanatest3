/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"testgitter/testGitUI5/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"testgitter/testGitUI5/test/integration/pages/View12",
	"testgitter/testGitUI5/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "testgitter.testGitUI5.view.",
		autoWait: true
	});
});