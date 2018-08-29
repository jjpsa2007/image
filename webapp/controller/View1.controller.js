sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
var controller;
	return Controller.extend("image.controller.View1", {
		onInit: function(){
		controller = this;	
		},
handleUploadPress: function(oEvent) {
		/*	var oFileUploader = this.byId("fileUploader");
			if (!oFileUploader.getValue()) {
				MessageToast.show("Choose a file first");
				return;
			}
			var oModel = this.getOwnerComponent().getModel("proj");
			oFileUploader.upload();*/
			var oModel = this.getOwnerComponent().getModel("proj");
			var oFileUploader = this.byId("fileUploader");
			var reader = new FileReader();
			var domRef = oFileUploader.getFocusDomRef();
			var file = domRef.files[0];
			reader.onload = function(event) {
		    var dataUri = (event.target.result).split(",");
			var oEntry = {};
			oEntry.IMAGE_NAME = oFileUploader.getProperty("value");
			oEntry.IMAGE_CONTENT = dataUri[1];
			oModel.create("/IMAGE", oEntry, {
				success: function(oData){
					sap.m.MessageToast("Record created");
					console.log(oData);
				},
				error: function(err){
					sap.m.MessageToast("Ooops something went wrong");
					console.log(err);
				}
			});
		    };
		reader.onerror = function(event) {
		    console.error("File could not be read! Code " + event.target.error.code);
		};

reader.readAsDataURL(file);
		},
		handleUploadComplete: function(e){
			console.log(e);
		},
		trimSuperfluousBytes: function(oValue){
			var oval = "data:image/png;base64," + oValue;
			return oval;
		}
/*		getImageData: function(event){
			var oModel = this.getOwnerComponent().getModel("proj");
			oModel.read("/IMAGE", null, null, true, function(res) {
				var img = controller.getView().byId("imgId");
				img.setSrc("data:image/png;base64," + res.results[0].IMAGE_CONTENT);
				console.log(res);
				});
		}*/
	});
});