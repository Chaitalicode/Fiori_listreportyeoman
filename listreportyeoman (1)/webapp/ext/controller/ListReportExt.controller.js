sap.ui.controller("LRY.listreportyeoman.ext.controller.ListReportExt", {
    onActionOrders: function (oEvent) {
        debugger;
        alert('Hi Chaitali');
       var oSelectedObject = this.extensionAPI.getSelectedContexts();
       var oSmartTable = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--listReport");
        var oTable = oSmartTable.getTable();
        this.myFrag  = new sap.m.Dialog("idDialog",{
            content:[
                new sap.m.Label({
                    text:"OrderID"
                }),
                new sap.m.Text({
                    text:"{OrderID}"
                })              

            ],
            	beginButton: new sap.m.Button({
						text: "Close",
						press: function () {
							this.myFrag.destroy();
						}.bind(this)
					})
        });
        this.getView().addDependent(this.myFrag);
        this.myFrag.bindElement(oSelectedObject[0].sPath);
        this.myFrag.open();
    },
    onInit: function () {
        debugger;
        alert("hello debugger");
            var oSmartTable = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--listReport");
        var oSmartFilterBar = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--listReportFilter");
        
        oSmartTable.setRequestAtLeastFields(["OrderID", "CustomerID", "ShipName"]);
        oSmartTable.setInitiallyVisibleFields(["OrderID", "CustomerID", "ShipName"]);
        // oSmartTable.setEnableAutoBinding(true);
        var oSegBtn = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--template::SegmentedButton");
        // oSegBtn.getSelectedItem().firePress();
        // oSmartTable.rebindTable();
             
    },
    onAfterRendering: function () {
        // var oSegBtn = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--template::SegmentedButton");
        // oSegBtn.fireSelect();
        // oSegBtn.getSelectedButton().firePress()

        var oSmartTable = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--listReport");
        var oSmartFilterBar = this.getView().byId("LRY.listreportyeoman::sap.suite.ui.generic.template.ListReport.view.ListReport::Orders--listReportFilter");
        
        // oSmartTable.fireInitialise();
        oSmartFilterBar.fireSearch();
    }
});
