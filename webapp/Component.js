sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"image/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("image.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			var proj = new sap.ui.model.odata.ODataModel("/FUZZY_data/ASIAN/TSD_DISC.xsodata/", true);
			this.setModel(proj, "proj");
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});