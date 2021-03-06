require.config({
	//"baseUrl": ".",
	//skipDirOptimize: true,
	paths: {
		"free-jqgrid": [
			"https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.13.1/js/jquery.jqgrid.min"
		],
		"free-jqgrid-js": [
			"https://cdn.jsdelivr.net/free-jqgrid/4.13.1/js"
		],
		"free-jqgrid-js-min": [
			"https://cdn.jsdelivr.net/free-jqgrid/4.13.1/js/min"
		],
		jquery: [
			"https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min"
		],
		"jquery-ui": [
			"https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min"
		],
		"jquery-ui-i18n": [
			"https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/i18n/jquery-ui-i18n"
		],
		"prettify": [
			"https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/run_prettify.min"
		],
		"prettify-css": [
			"https://cdnjs.cloudflare.com/ajax/libs/prettify/r298/lang-css.min"
		]
	}
});

define(
[
	"jquery",
	"prettify",
	//"prettify-css",
	"jquery-ui",
	"free-jqgrid"
	//"free-jqgrid-js/i18n/grid.locale-de.min",
	//"free-jqgrid-js-min/grid.base",
	//"free-jqgrid-js-min/jquery.fmatter",
	//"free-jqgrid-js-min/jqdnr",
	//"free-jqgrid-js-min/jqmodal",
	//"free-jqgrid-js-min/grid.common",
	//"free-jqgrid-js-min/grid.custom"
], function($) {
    $(function () {
		"use strict";
		$("#api").jqGrid({
			url: "methods.json",
			datatype: "json",
			colModel: [
				{ name: "base", hidden: true },
				{ name: "fullName", width: 300,
					jsonmap: function (obj) {
						return obj.base + "." + obj.name;
					} },
				{ name: "name",
					cellattr: function (rowId, cellValue, rawObject, cm, rdata) {
						return "title='" + rdata.base + "." + rdata.name + "'";
					} },
				{ name: "methodType", stype: "select",
					searchoptions: {
						sopt: ["eq", "ne"],
						value: ":Any;standard:standard;static:static;static-this-grid:static-this-grid"
					} },
				{ name: "category", width: 300 }
			],
			rowNum: 10,
			pager: true,
			cmTemplate: { autoResizable: true, editable: true },
			iconSet: "fontAwesome",
			autoResizing: { compact: true },
			rowList: [5, 10, 20, "10000:All"],
			viewrecords: true,
			sortable: true,
			loadonce: true,
			sortname: "name",
			forceClientSorting: true
		}).jqGrid("filterToolbar");
    });
});
