sap.ui.define(["sap/ui/core/format/DateFormat"], function (DateFormat) {
	"use strict";

	return {
		statusText: function (status) {
		  if (status === "A") {
			return "Active";
		  } else if (status === "B") {
			return "Backordered";
		  } else if (status === "C") {
			return "Cancelled";
		  }
		  return "";
		}
	  };
	});