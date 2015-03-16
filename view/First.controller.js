sap.ui.controller("dux.view.First", {

    handleListSelect: function(oEvent) {
        this.navigation.navTo("idViewApp--idViewSecond", oEvent.getParameter("listItem").getBindingContext());
    }


});