/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/home/joe/Documents/git/forceLayout/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * index.js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-07 17:36:54
	 */
	
	'use strict';
	
	var _data = __webpack_require__(1);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _forceLayout = __webpack_require__(2);
	
	var _forceLayout2 = _interopRequireDefault(_forceLayout);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * the binding render function
	 * @return {[type]} [description]
	 */
	var startRender = function startRender() {
		var approachSel = document.getElementById('approachSel'),
		    repulsion = document.getElementById('repuval').value,
		    stiffness = document.getElementById('stifval').value,
		    damping = document.getElementById('dampval').value,
		    approach = approachSel.options[approachSel.selectedIndex].value,
		    parentid = 'chart',
		    containerId = 'forcedLayoutView';
	
		var style = window.getComputedStyle(document.getElementById(parentid)),
		    height = Number.parseFloat(style.getPropertyValue("height")),
		    width = Number.parseFloat(style.getPropertyValue("width"));
	
		if (!(isNaN(repulsion) || isNaN(stiffness) || isNaN(damping))) {
			var ins = new _forceLayout2.default({
				'parentId': parentid,
				'containerId': containerId,
				'repulsion': Number.parseFloat(repulsion),
				'stiffness': Number.parseFloat(stiffness),
				'damping': Number.parseFloat(damping),
				'approach': approach,
				'width': width,
				'height': height
			});
	
			ins.setData(_data2.default);
			ins.start();
		}
	};
	
	/**
	 * DOM bind events
	 * @type {[type]}
	 */
	window.onload = function () {
		var run = document.getElementById('run'),
		    input = document.getElementsByTagName('input'),
		    inputList = Array.prototype.slice.call(input);
	
		run.addEventListener('click', startRender);
		inputList.forEach(function (ele) {
			ele.addEventListener('keydown', function (e) {
				if (e.which == 13) startRender();
			});
		});
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * data_js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-07 20:21:18
	 * @version $Id$
	 */
	
	var data = {
	  "nodes": [{ "id": "Myriel", "group": 1 }, { "id": "Napoleon", "group": 1 }, { "id": "Mlle_Baptistine", "group": 1 }, { "id": "Mme_Magloire", "group": 1 }, { "id": "CountessdeLo", "group": 1 }, { "id": "Geborand", "group": 1 }, { "id": "Champtercier", "group": 1 }, { "id": "Cravatte", "group": 1 }, { "id": "Count", "group": 1 }, { "id": "OldMan", "group": 1 }, { "id": "Labarre", "group": 2 }, { "id": "Valjean", "group": 2 }, { "id": "Marguerite", "group": 3 }, { "id": "Mme_deR", "group": 2 }, { "id": "Isabeau", "group": 2 }, { "id": "Gervais", "group": 2 }, { "id": "Tholomyes", "group": 3 }, { "id": "Listolier", "group": 3 }, { "id": "Fameuil", "group": 3 }, { "id": "Blacheville", "group": 3 }, { "id": "Favourite", "group": 3 }, { "id": "Dahlia", "group": 3 }, { "id": "Zephine", "group": 3 }, { "id": "Fantine", "group": 3 }, { "id": "Mme_Thenardier", "group": 4 }, { "id": "Thenardier", "group": 4 }, { "id": "Cosette", "group": 5 }, { "id": "Javert", "group": 4 }, { "id": "Fauchelevent", "group": 0 }, { "id": "Bamatabois", "group": 2 }, { "id": "Perpetue", "group": 3 }, { "id": "Simplice", "group": 2 }, { "id": "Scaufflaire", "group": 2 }, { "id": "Woman1", "group": 2 }, { "id": "Judge", "group": 2 }, { "id": "Champmathieu", "group": 2 }, { "id": "Brevet", "group": 2 }, { "id": "Chenildieu", "group": 2 }, { "id": "Cochepaille", "group": 2 }, { "id": "Pontmercy", "group": 4 }, { "id": "Boulatruelle", "group": 6 }, { "id": "Eponine", "group": 4 }, { "id": "Anzelma", "group": 4 }, { "id": "Woman2", "group": 5 }, { "id": "MotherInnocent", "group": 0 }, { "id": "Gribier", "group": 0 }, { "id": "Jondrette", "group": 7 }, { "id": "Mme_Burgon", "group": 7 }, { "id": "Gavroche", "group": 8 }, { "id": "Gillenormand", "group": 5 }, { "id": "Magnon", "group": 5 }, { "id": "Mlle_Gillenormand", "group": 5 }, { "id": "Mme_Pontmercy", "group": 5 }, { "id": "Mlle_Vaubois", "group": 5 }, { "id": "Lt_Gillenormand", "group": 5 }, { "id": "Marius", "group": 8 }, { "id": "BaronessT", "group": 5 }, { "id": "Mabeuf", "group": 8 }, { "id": "Enjolras", "group": 8 }, { "id": "Combeferre", "group": 8 }, { "id": "Prouvaire", "group": 8 }, { "id": "Feuilly", "group": 8 }, { "id": "Courfeyrac", "group": 8 }, { "id": "Bahorel", "group": 8 }, { "id": "Bossuet", "group": 8 }, { "id": "Joly", "group": 8 }, { "id": "Grantaire", "group": 8 }, { "id": "MotherPlutarch", "group": 9 }, { "id": "Gueulemer", "group": 4 }, { "id": "Babet", "group": 4 }, { "id": "Claquesous", "group": 4 }, { "id": "Montparnasse", "group": 4 }, { "id": "Toussaint", "group": 5 }, { "id": "Child1", "group": 10 }, { "id": "Child2", "group": 10 }, { "id": "Brujon", "group": 4 }, { "id": "Mme_Hucheloup", "group": 8 }],
	  "edges": [{ "source": "Napoleon", "target": "Myriel", "value": 1 }, { "source": "Mlle_Baptistine", "target": "Myriel", "value": 8 }, { "source": "Mme_Magloire", "target": "Myriel", "value": 10 }, { "source": "Mme_Magloire", "target": "Mlle_Baptistine", "value": 6 }, { "source": "CountessdeLo", "target": "Myriel", "value": 1 }, { "source": "Geborand", "target": "Myriel", "value": 1 }, { "source": "Champtercier", "target": "Myriel", "value": 1 }, { "source": "Cravatte", "target": "Myriel", "value": 1 }, { "source": "Count", "target": "Myriel", "value": 2 }, { "source": "OldMan", "target": "Myriel", "value": 1 }, { "source": "Valjean", "target": "Labarre", "value": 1 }, { "source": "Valjean", "target": "Mme_Magloire", "value": 3 }, { "source": "Valjean", "target": "Mlle_Baptistine", "value": 3 }, { "source": "Valjean", "target": "Myriel", "value": 5 }, { "source": "Marguerite", "target": "Valjean", "value": 1 }, { "source": "Mme_deR", "target": "Valjean", "value": 1 }, { "source": "Isabeau", "target": "Valjean", "value": 1 }, { "source": "Gervais", "target": "Valjean", "value": 1 }, { "source": "Listolier", "target": "Tholomyes", "value": 4 }, { "source": "Fameuil", "target": "Tholomyes", "value": 4 }, { "source": "Fameuil", "target": "Listolier", "value": 4 }, { "source": "Blacheville", "target": "Tholomyes", "value": 4 }, { "source": "Blacheville", "target": "Listolier", "value": 4 }, { "source": "Blacheville", "target": "Fameuil", "value": 4 }, { "source": "Favourite", "target": "Tholomyes", "value": 3 }, { "source": "Favourite", "target": "Listolier", "value": 3 }, { "source": "Favourite", "target": "Fameuil", "value": 3 }, { "source": "Favourite", "target": "Blacheville", "value": 4 }, { "source": "Dahlia", "target": "Tholomyes", "value": 3 }, { "source": "Dahlia", "target": "Listolier", "value": 3 }, { "source": "Dahlia", "target": "Fameuil", "value": 3 }, { "source": "Dahlia", "target": "Blacheville", "value": 3 }, { "source": "Dahlia", "target": "Favourite", "value": 5 }, { "source": "Zephine", "target": "Tholomyes", "value": 3 }, { "source": "Zephine", "target": "Listolier", "value": 3 }, { "source": "Zephine", "target": "Fameuil", "value": 3 }, { "source": "Zephine", "target": "Blacheville", "value": 3 }, { "source": "Zephine", "target": "Favourite", "value": 4 }, { "source": "Zephine", "target": "Dahlia", "value": 4 }, { "source": "Fantine", "target": "Tholomyes", "value": 3 }, { "source": "Fantine", "target": "Listolier", "value": 3 }, { "source": "Fantine", "target": "Fameuil", "value": 3 }, { "source": "Fantine", "target": "Blacheville", "value": 3 }, { "source": "Fantine", "target": "Favourite", "value": 4 }, { "source": "Fantine", "target": "Dahlia", "value": 4 }, { "source": "Fantine", "target": "Zephine", "value": 4 }, { "source": "Fantine", "target": "Marguerite", "value": 2 }, { "source": "Fantine", "target": "Valjean", "value": 9 }, { "source": "Mme_Thenardier", "target": "Fantine", "value": 2 }, { "source": "Mme_Thenardier", "target": "Valjean", "value": 7 }, { "source": "Thenardier", "target": "Mme_Thenardier", "value": 13 }, { "source": "Thenardier", "target": "Fantine", "value": 1 }, { "source": "Thenardier", "target": "Valjean", "value": 12 }, { "source": "Cosette", "target": "Mme_Thenardier", "value": 4 }, { "source": "Cosette", "target": "Valjean", "value": 31 }, { "source": "Cosette", "target": "Tholomyes", "value": 1 }, { "source": "Cosette", "target": "Thenardier", "value": 1 }, { "source": "Javert", "target": "Valjean", "value": 17 }, { "source": "Javert", "target": "Fantine", "value": 5 }, { "source": "Javert", "target": "Thenardier", "value": 5 }, { "source": "Javert", "target": "Mme_Thenardier", "value": 1 }, { "source": "Javert", "target": "Cosette", "value": 1 }, { "source": "Fauchelevent", "target": "Valjean", "value": 8 }, { "source": "Fauchelevent", "target": "Javert", "value": 1 }, { "source": "Bamatabois", "target": "Fantine", "value": 1 }, { "source": "Bamatabois", "target": "Javert", "value": 1 }, { "source": "Bamatabois", "target": "Valjean", "value": 2 }, { "source": "Perpetue", "target": "Fantine", "value": 1 }, { "source": "Simplice", "target": "Perpetue", "value": 2 }, { "source": "Simplice", "target": "Valjean", "value": 3 }, { "source": "Simplice", "target": "Fantine", "value": 2 }, { "source": "Simplice", "target": "Javert", "value": 1 }, { "source": "Scaufflaire", "target": "Valjean", "value": 1 }, { "source": "Woman1", "target": "Valjean", "value": 2 }, { "source": "Woman1", "target": "Javert", "value": 1 }, { "source": "Judge", "target": "Valjean", "value": 3 }, { "source": "Judge", "target": "Bamatabois", "value": 2 }, { "source": "Champmathieu", "target": "Valjean", "value": 3 }, { "source": "Champmathieu", "target": "Judge", "value": 3 }, { "source": "Champmathieu", "target": "Bamatabois", "value": 2 }, { "source": "Brevet", "target": "Judge", "value": 2 }, { "source": "Brevet", "target": "Champmathieu", "value": 2 }, { "source": "Brevet", "target": "Valjean", "value": 2 }, { "source": "Brevet", "target": "Bamatabois", "value": 1 }, { "source": "Chenildieu", "target": "Judge", "value": 2 }, { "source": "Chenildieu", "target": "Champmathieu", "value": 2 }, { "source": "Chenildieu", "target": "Brevet", "value": 2 }, { "source": "Chenildieu", "target": "Valjean", "value": 2 }, { "source": "Chenildieu", "target": "Bamatabois", "value": 1 }, { "source": "Cochepaille", "target": "Judge", "value": 2 }, { "source": "Cochepaille", "target": "Champmathieu", "value": 2 }, { "source": "Cochepaille", "target": "Brevet", "value": 2 }, { "source": "Cochepaille", "target": "Chenildieu", "value": 2 }, { "source": "Cochepaille", "target": "Valjean", "value": 2 }, { "source": "Cochepaille", "target": "Bamatabois", "value": 1 }, { "source": "Pontmercy", "target": "Thenardier", "value": 1 }, { "source": "Boulatruelle", "target": "Thenardier", "value": 1 }, { "source": "Eponine", "target": "Mme_Thenardier", "value": 2 }, { "source": "Eponine", "target": "Thenardier", "value": 3 }, { "source": "Anzelma", "target": "Eponine", "value": 2 }, { "source": "Anzelma", "target": "Thenardier", "value": 2 }, { "source": "Anzelma", "target": "Mme_Thenardier", "value": 1 }, { "source": "Woman2", "target": "Valjean", "value": 3 }, { "source": "Woman2", "target": "Cosette", "value": 1 }, { "source": "Woman2", "target": "Javert", "value": 1 }, { "source": "MotherInnocent", "target": "Fauchelevent", "value": 3 }, { "source": "MotherInnocent", "target": "Valjean", "value": 1 }, { "source": "Gribier", "target": "Fauchelevent", "value": 2 }, { "source": "Mme_Burgon", "target": "Jondrette", "value": 1 }, { "source": "Gavroche", "target": "Mme_Burgon", "value": 2 }, { "source": "Gavroche", "target": "Thenardier", "value": 1 }, { "source": "Gavroche", "target": "Javert", "value": 1 }, { "source": "Gavroche", "target": "Valjean", "value": 1 }, { "source": "Gillenormand", "target": "Cosette", "value": 3 }, { "source": "Gillenormand", "target": "Valjean", "value": 2 }, { "source": "Magnon", "target": "Gillenormand", "value": 1 }, { "source": "Magnon", "target": "Mme_Thenardier", "value": 1 }, { "source": "Mlle_Gillenormand", "target": "Gillenormand", "value": 9 }, { "source": "Mlle_Gillenormand", "target": "Cosette", "value": 2 }, { "source": "Mlle_Gillenormand", "target": "Valjean", "value": 2 }, { "source": "Mme_Pontmercy", "target": "Mlle_Gillenormand", "value": 1 }, { "source": "Mme_Pontmercy", "target": "Pontmercy", "value": 1 }, { "source": "Mlle_Vaubois", "target": "Mlle_Gillenormand", "value": 1 }, { "source": "Lt_Gillenormand", "target": "Mlle_Gillenormand", "value": 2 }, { "source": "Lt_Gillenormand", "target": "Gillenormand", "value": 1 }, { "source": "Lt_Gillenormand", "target": "Cosette", "value": 1 }, { "source": "Marius", "target": "Mlle_Gillenormand", "value": 6 }, { "source": "Marius", "target": "Gillenormand", "value": 12 }, { "source": "Marius", "target": "Pontmercy", "value": 1 }, { "source": "Marius", "target": "Lt_Gillenormand", "value": 1 }, { "source": "Marius", "target": "Cosette", "value": 21 }, { "source": "Marius", "target": "Valjean", "value": 19 }, { "source": "Marius", "target": "Tholomyes", "value": 1 }, { "source": "Marius", "target": "Thenardier", "value": 2 }, { "source": "Marius", "target": "Eponine", "value": 5 }, { "source": "Marius", "target": "Gavroche", "value": 4 }, { "source": "BaronessT", "target": "Gillenormand", "value": 1 }, { "source": "BaronessT", "target": "Marius", "value": 1 }, { "source": "Mabeuf", "target": "Marius", "value": 1 }, { "source": "Mabeuf", "target": "Eponine", "value": 1 }, { "source": "Mabeuf", "target": "Gavroche", "value": 1 }, { "source": "Enjolras", "target": "Marius", "value": 7 }, { "source": "Enjolras", "target": "Gavroche", "value": 7 }, { "source": "Enjolras", "target": "Javert", "value": 6 }, { "source": "Enjolras", "target": "Mabeuf", "value": 1 }, { "source": "Enjolras", "target": "Valjean", "value": 4 }, { "source": "Combeferre", "target": "Enjolras", "value": 15 }, { "source": "Combeferre", "target": "Marius", "value": 5 }, { "source": "Combeferre", "target": "Gavroche", "value": 6 }, { "source": "Combeferre", "target": "Mabeuf", "value": 2 }, { "source": "Prouvaire", "target": "Gavroche", "value": 1 }, { "source": "Prouvaire", "target": "Enjolras", "value": 4 }, { "source": "Prouvaire", "target": "Combeferre", "value": 2 }, { "source": "Feuilly", "target": "Gavroche", "value": 2 }, { "source": "Feuilly", "target": "Enjolras", "value": 6 }, { "source": "Feuilly", "target": "Prouvaire", "value": 2 }, { "source": "Feuilly", "target": "Combeferre", "value": 5 }, { "source": "Feuilly", "target": "Mabeuf", "value": 1 }, { "source": "Feuilly", "target": "Marius", "value": 1 }, { "source": "Courfeyrac", "target": "Marius", "value": 9 }, { "source": "Courfeyrac", "target": "Enjolras", "value": 17 }, { "source": "Courfeyrac", "target": "Combeferre", "value": 13 }, { "source": "Courfeyrac", "target": "Gavroche", "value": 7 }, { "source": "Courfeyrac", "target": "Mabeuf", "value": 2 }, { "source": "Courfeyrac", "target": "Eponine", "value": 1 }, { "source": "Courfeyrac", "target": "Feuilly", "value": 6 }, { "source": "Courfeyrac", "target": "Prouvaire", "value": 3 }, { "source": "Bahorel", "target": "Combeferre", "value": 5 }, { "source": "Bahorel", "target": "Gavroche", "value": 5 }, { "source": "Bahorel", "target": "Courfeyrac", "value": 6 }, { "source": "Bahorel", "target": "Mabeuf", "value": 2 }, { "source": "Bahorel", "target": "Enjolras", "value": 4 }, { "source": "Bahorel", "target": "Feuilly", "value": 3 }, { "source": "Bahorel", "target": "Prouvaire", "value": 2 }, { "source": "Bahorel", "target": "Marius", "value": 1 }, { "source": "Bossuet", "target": "Marius", "value": 5 }, { "source": "Bossuet", "target": "Courfeyrac", "value": 12 }, { "source": "Bossuet", "target": "Gavroche", "value": 5 }, { "source": "Bossuet", "target": "Bahorel", "value": 4 }, { "source": "Bossuet", "target": "Enjolras", "value": 10 }, { "source": "Bossuet", "target": "Feuilly", "value": 6 }, { "source": "Bossuet", "target": "Prouvaire", "value": 2 }, { "source": "Bossuet", "target": "Combeferre", "value": 9 }, { "source": "Bossuet", "target": "Mabeuf", "value": 1 }, { "source": "Bossuet", "target": "Valjean", "value": 1 }, { "source": "Joly", "target": "Bahorel", "value": 5 }, { "source": "Joly", "target": "Bossuet", "value": 7 }, { "source": "Joly", "target": "Gavroche", "value": 3 }, { "source": "Joly", "target": "Courfeyrac", "value": 5 }, { "source": "Joly", "target": "Enjolras", "value": 5 }, { "source": "Joly", "target": "Feuilly", "value": 5 }, { "source": "Joly", "target": "Prouvaire", "value": 2 }, { "source": "Joly", "target": "Combeferre", "value": 5 }, { "source": "Joly", "target": "Mabeuf", "value": 1 }, { "source": "Joly", "target": "Marius", "value": 2 }, { "source": "Grantaire", "target": "Bossuet", "value": 3 }, { "source": "Grantaire", "target": "Enjolras", "value": 3 }, { "source": "Grantaire", "target": "Combeferre", "value": 1 }, { "source": "Grantaire", "target": "Courfeyrac", "value": 2 }, { "source": "Grantaire", "target": "Joly", "value": 2 }, { "source": "Grantaire", "target": "Gavroche", "value": 1 }, { "source": "Grantaire", "target": "Bahorel", "value": 1 }, { "source": "Grantaire", "target": "Feuilly", "value": 1 }, { "source": "Grantaire", "target": "Prouvaire", "value": 1 }, { "source": "MotherPlutarch", "target": "Mabeuf", "value": 3 }, { "source": "Gueulemer", "target": "Thenardier", "value": 5 }, { "source": "Gueulemer", "target": "Valjean", "value": 1 }, { "source": "Gueulemer", "target": "Mme_Thenardier", "value": 1 }, { "source": "Gueulemer", "target": "Javert", "value": 1 }, { "source": "Gueulemer", "target": "Gavroche", "value": 1 }, { "source": "Gueulemer", "target": "Eponine", "value": 1 }, { "source": "Babet", "target": "Thenardier", "value": 6 }, { "source": "Babet", "target": "Gueulemer", "value": 6 }, { "source": "Babet", "target": "Valjean", "value": 1 }, { "source": "Babet", "target": "Mme_Thenardier", "value": 1 }, { "source": "Babet", "target": "Javert", "value": 2 }, { "source": "Babet", "target": "Gavroche", "value": 1 }, { "source": "Babet", "target": "Eponine", "value": 1 }, { "source": "Claquesous", "target": "Thenardier", "value": 4 }, { "source": "Claquesous", "target": "Babet", "value": 4 }, { "source": "Claquesous", "target": "Gueulemer", "value": 4 }, { "source": "Claquesous", "target": "Valjean", "value": 1 }, { "source": "Claquesous", "target": "Mme_Thenardier", "value": 1 }, { "source": "Claquesous", "target": "Javert", "value": 1 }, { "source": "Claquesous", "target": "Eponine", "value": 1 }, { "source": "Claquesous", "target": "Enjolras", "value": 1 }, { "source": "Montparnasse", "target": "Javert", "value": 1 }, { "source": "Montparnasse", "target": "Babet", "value": 2 }, { "source": "Montparnasse", "target": "Gueulemer", "value": 2 }, { "source": "Montparnasse", "target": "Claquesous", "value": 2 }, { "source": "Montparnasse", "target": "Valjean", "value": 1 }, { "source": "Montparnasse", "target": "Gavroche", "value": 1 }, { "source": "Montparnasse", "target": "Eponine", "value": 1 }, { "source": "Montparnasse", "target": "Thenardier", "value": 1 }, { "source": "Toussaint", "target": "Cosette", "value": 2 }, { "source": "Toussaint", "target": "Javert", "value": 1 }, { "source": "Toussaint", "target": "Valjean", "value": 1 }, { "source": "Child1", "target": "Gavroche", "value": 2 }, { "source": "Child2", "target": "Gavroche", "value": 2 }, { "source": "Child2", "target": "Child1", "value": 3 }, { "source": "Brujon", "target": "Babet", "value": 3 }, { "source": "Brujon", "target": "Gueulemer", "value": 3 }, { "source": "Brujon", "target": "Thenardier", "value": 3 }, { "source": "Brujon", "target": "Gavroche", "value": 1 }, { "source": "Brujon", "target": "Eponine", "value": 1 }, { "source": "Brujon", "target": "Claquesous", "value": 1 }, { "source": "Brujon", "target": "Montparnasse", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Bossuet", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Joly", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Grantaire", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Bahorel", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Courfeyrac", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Gavroche", "value": 1 }, { "source": "Mme_Hucheloup", "target": "Enjolras", "value": 1 }]
	};
	
	exports.default = data;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * forceLayout.js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-06 23:53:07
	 * @version $Id$
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Vector = __webpack_require__(3);
	
	var _Vector2 = _interopRequireDefault(_Vector);
	
	var _Spring = __webpack_require__(4);
	
	var _Spring2 = _interopRequireDefault(_Spring);
	
	var _Elements = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Point Struct
	 * @param {[type]} position [description]
	 * @param {Number} id       [description]
	 * @param {Number} group    [description]
	 * @param {Number} mass     [description]
	 */
	var Point = function Point(position) {
		var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
		var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
		var mass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1.0;
	
		this.p = position; // position of Point, with [x, y] in Vector
		this.m = mass; // mass of Point, default to 1.0
		this.v = new _Vector2.default(0, 0); // velocity, init with x=0, y=0
		this.a = new _Vector2.default(0, 0); // acceleration, init with x=0, y=0
		this.id = id; // id of Point, defaults to -1
		this.group = group; // group of Point, defaults to -1
	
		var self = this;
		/**
	  * Update Point acceleration, acceleration = force/mass
	  * @param  {[type]} force [description]
	  * @return {[type]}       [description]
	  */
		this.updateAcc = function (force) {
			self.a = self.a.add(force.divide(self.m));
		};
	};
	
	/**
	 * set attributes for one element 
	 * @param {[type]} el    [description]
	 * @param {[type]} attrs [description]
	 */
	var setAttributes = function setAttributes(el, attrs) {
		for (var key in attrs) {
			el.setAttribute(key, attrs[key]);
		}
	};
	
	/**
	 * Force Layout class: The main class to construct Force Directed Layout Structure, calculate the Points and Edges state and render them to the page
	 *
	 * setData: clean all stored data and set data with passed variable
	 * start: start to update Points and Edges states and render them until the total energy less than minEnergyThreshold
	 */
	
	var forceLayout = function () {
		function forceLayout(options) {
			_classCallCheck(this, forceLayout);
	
			this.props = {
				approach: 'canvas', // render approach, svg or canvas
				detail: true, // show the details or not
				parentId: 'chart', // id of DOM parentNode
				containerId: 'forcedLayoutView', // DOM id
				width: 800, // Rendered DOM width
				height: 600, // Rendered DOM height
				stiffness: 200.0, // spring stiffness
				repulsion: 200.0, // repulsion
				damping: 0.8, // volocity damping factor
				minEnergyThreshold: 0.1, // threshold to determine whether to stop
				maxSpeed: 1000, // max node speed
				defSpringLen: 20, // default Spring length
				coulombDisScale: 0.01, // default Coulombs Constant
				tickInterval: 0.02 // default time, used in velocity, acceleration and position's updating
			};
	
			this.nodes = [];
			this.edges = [];
			this.nodeSet = {};
			this.edgeSet = {};
			this.nodePoints = new Map();
			this.edgeSprings = new Map();
	
			this.initState = true;
			this.nextEdgeId = 0;
			this.iterations = 0;
			this.renderTime = 0;
	
			this.center = {}; // DOM center position
			this.color = function (n) {
				var schemas = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
	
				return schemas[n % schemas.length];
			}; // color schema
	
			this.canvas = {};
			this.ctx = {};
	
			/**
	   * Iterate options to update this.props
	   */
			if ('undefined' !== typeof options) {
				for (var i in options) {
					if ('undefined' !== typeof options[i]) {
						this.props[i] = options[i];
					}
				}
			}
		}
	
		/**
	  * add one Node
	  * @param {[type]} node [description]
	  */
	
	
		_createClass(forceLayout, [{
			key: 'addNode',
			value: function addNode(node) {
				if (!(node.id in this.nodeSet)) {
					this.nodes.push(node);
				}
	
				this.nodeSet[node.id] = node;
				return node;
			}
		}, {
			key: 'addNodes',
	
			/**
	   * add Nodes
	   * @param {[type]} data [description]
	   */
			value: function addNodes(data) {
				var len = data.length;
				for (var i = 0; i < len; i++) {
					var node = new _Elements.Node(data[i]);
					this.addNode(node);
				}
			}
		}, {
			key: 'addEdge',
	
			/**
	   * add one Edge
	   * @param {[type]} edge [description]
	   */
			value: function addEdge(edge) {
				if (!(edge.id in this.edgeSet)) {
					this.edges.push(edge);
				}
	
				this.edgeSet[edge.id] = edge;
				return edge;
			}
		}, {
			key: 'addEdges',
	
			/**
	   * add Edges
	   * @param {[type]} data [description]
	   */
			value: function addEdges(data) {
				var len = data.length;
				for (var i = 0; i < len; i++) {
					var e = data[i],
					    node1 = this.nodeSet[e['source']];
					if (node1 == undefined) {
						throw new TypeError("invalid node name: " + e[0]);
					}
	
					var node2 = this.nodeSet[e['target']];
					if (node2 == undefined) {
						throw new TypeError("invalid node name: " + e[1]);
					}
	
					var attr = e['value'],
					    edge = new _Elements.Edge(this.nextEdgeId++, node1, node2, attr);
					this.addEdge(edge);
				}
			}
		}, {
			key: 'setData',
	
	
			/**
	   * set init node and edge data for this instance
	   * @param {[type]} data [description]
	   */
			value: function setData(data) {
				// clean all data
				this.nodes = [];
				this.edges = [];
				this.nodeSet = {};
				this.edgeSet = {};
				this.nodePoints = new Map();
				this.edgeSprings = new Map();
	
				// Format data to json object
				if (typeof data == 'string' || data instanceof String) {
					data = JSON.parse(data);
				}
	
				// add nodes and edges
				if ('nodes' in data || 'edges' in data) {
					this.addNodes(data['nodes']);
					this.addEdges(data['edges']);
					this.center = new _Vector2.default(this.props.width / 2, this.props.height / 2);
				}
			}
	
			/**
	   * the calculation and rendering entrance of layout
	   *
	   * nodePoints and edgeSprings should be updated first, then calculate nodes and edges' position frame by frame, until the total energy is less than minEnergyThreshold or iteration time reaches 1000000, as well as render them to page.
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'start',
			value: function start() {
				var self = this,
				    nlen = this.nodes.length,
				    elen = this.edges.length;
	
				var startX = this.props.width * 0.5,
				    startY = this.props.height * 0.5,
				    initSize = 20;
	
				for (var i = 0; i < nlen; i++) {
					// initial the point position
					var node = this.nodes[i],
					    x = startX + initSize * (Math.random() - .5),
					    y = startY + initSize * (Math.random() - .5),
					    vec = new _Vector2.default(x, y);
					this.nodePoints.set(node.id, new Point(vec, node.id, node.data.group));
				}
	
				for (var _i = 0; _i < elen; _i++) {
					var edge = this.edges[_i],
					    source = this.nodePoints.get(edge.source.id),
					    target = this.nodePoints.get(edge.target.id),
					    length = this.props.defSpringLen * Number.parseInt(edge.data);
					// length = source.p.subtract( target.p ).magnitude();
	
					this.edgeSprings.set(edge.id, new _Spring2.default(source, target, length));
				}
	
				var timer = setInterval(function () {
					self.renderTime += 10;
				}, 10);
	
				window.requestAnimationFrame(function step() {
					self.tick(self.props.tickInterval);
					self.render();
					self.iterations++;
					var energy = self.calTotalEnergy();
	
					if (self.props.detail) {
						self.updateDetails(energy);
					}
	
					if (energy < self.props.minEnergyThreshold || self.iterations === 1000000) {
						window.cancelAnimationFrame(step);
						clearInterval(timer);
					} else {
						window.requestAnimationFrame(step);
					}
				});
			}
	
			/**
	   * update details in page (container: table)
	   * @param  {[type]} energy [description]
	   * @return {[type]}        [description]
	   */
	
		}, {
			key: 'updateDetails',
			value: function updateDetails(energy) {
				var ths = document.getElementById('detailTable').getElementsByTagName('td');
				if (this.iterations === 1) {
					/**
	     * Update Items in first time
	     *
	     * {Drawing Approach} [1]
	     * {Node Number} [9]
	     * {Edge Number} [11]
	     * {DOM ChildNodes} [15]
	     */
					ths[1].innerHTML = this.props.approach;
					ths[9].innerHTML = this.nodes.length;
					ths[11].innerHTML = this.edges.length;
					ths[15].innerHTML = this.props.approach === 'canvas' ? 1 : this.nodes.length + this.edges.length;
				}
	
				/**
	    * Regular update items
	    * 
	    * {Render time} [3]
	    * {Iterations} [5]
	    * {Current Energy} [7]
	    * {Used JS Heap Size} [13]
	    */
				ths[3].innerHTML = this.renderTime + 'ms';
				ths[5].innerHTML = this.iterations;
				ths[7].innerHTML = energy.toFixed(2);
				ths[13].innerHTML = '' + window.performance.memory.usedJSHeapSize;
			}
	
			/**
	   * tick event
	   * @param  {[type]} interval [description]
	   * @return {[type]}          [description]
	   */
	
		}, {
			key: 'tick',
			value: function tick(interval) {
				this.updateCoulombsLaw();
				this.updateHookesLaw();
				this.attractToCentre();
				this.updateVelocity(interval);
				this.updatePosition(interval);
			}
	
			/**
	   * Update repulsion forces between nodes
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'updateCoulombsLaw',
			value: function updateCoulombsLaw() {
				var len = this.nodes.length;
	
				for (var i = 0; i < len; i++) {
					for (var j = i + 1; j < len; j++) {
						if (i === j) continue;
	
						var iNode = this.nodes[i],
						    jNode = this.nodes[j],
						    v = this.nodePoints.get(iNode.id).p.subtract(this.nodePoints.get(jNode.id).p),
						    dis = (v.magnitude() + 0.1) * this.props.coulombDisScale,
						    direction = v.normalise();
	
						// console.log('dis', dis);
						this.nodePoints.get(iNode.id).updateAcc(direction.multiply(this.props.repulsion).divide(Math.pow(dis, 2)));
						this.nodePoints.get(jNode.id).updateAcc(direction.multiply(this.props.repulsion).divide(-Math.pow(dis, 2)));
					}
				}
			}
	
			/**
	   * update attraction forces between nodes in each edge
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'updateHookesLaw',
			value: function updateHookesLaw() {
				var len = this.edges.length;
	
				for (var i = 0; i < len; i++) {
					var spring = this.edgeSprings.get(this.edges[i].id),
					    v = spring.target.p.subtract(spring.source.p),
					    displacement = spring.length - v.magnitude(),
					    direction = v.normalise();
	
					// console.log(spring.source, spring.target);
					spring.source.updateAcc(direction.multiply(-this.props.stiffness * displacement));
					spring.target.updateAcc(direction.multiply(this.props.stiffness * displacement));
				}
			}
	
			/**
	   * Attract to center with little repulsion acceleration
	   *
	   * the divisor is set to 100.0 by experience, but lack of provements
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'attractToCentre',
			value: function attractToCentre() {
				var len = this.nodes.length;
	
				for (var i = 0; i < len; i++) {
					var point = this.nodePoints.get(this.nodes[i].id),
					    direction = point.p.subtract(this.center);
	
					point.updateAcc(direction.multiply(-this.props.repulsion / 100.0));
				}
			}
	
			/**
	   * update points' velocity
	   * @param  {[type]} interval [description]
	   * @return {[type]}          [description]
	   */
	
		}, {
			key: 'updateVelocity',
			value: function updateVelocity(interval) {
				var len = this.nodes.length;
	
				for (var i = 0; i < len; i++) {
					var point = this.nodePoints.get(this.nodes[i].id);
					point.v = point.v.add(point.a.multiply(interval)).multiply(this.props.damping);
	
					if (point.v.magnitude() > this.props.maxSpeed) {
						point.v = point.v.normalise().multiply(this.props.maxSpeed);
					}
					point.a = new _Vector2.default(0, 0);
				}
			}
	
			/**
	   * update point's position
	   * @param  {[type]} interval [description]
	   * @return {[type]}          [description]
	   */
	
		}, {
			key: 'updatePosition',
			value: function updatePosition(interval) {
				var len = this.nodes.length;
	
				for (var i = 0; i < len; i++) {
					var point = this.nodePoints.get(this.nodes[i].id);
					point.p = point.p.add(point.v.multiply(interval));
				}
			}
	
			/**
	   * calculate total energy
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'calTotalEnergy',
			value: function calTotalEnergy() {
				var energy = 0.0,
				    len = this.nodes.length;
	
				for (var i = 0; i < len; i++) {
					var point = this.nodePoints.get(this.nodes[i].id),
					    speed = point.v.magnitude();
	
					energy += point.m * Math.pow(speed, 2) * 0.5;
				}
	
				return energy;
			}
	
			/**
	   * Deprecated function: get current points' boundary
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'getBounds',
			value: function getBounds() {
				var bottomleft = new _Vector2.default(-2, -2),
				    topright = new _Vector2.default(2, 2);
	
				this.nodePoints.forEach(function (point, key, map) {
					if (point.p.x < bottomleft.x) {
						bottomleft.x = point.p.x;
					}
					if (point.p.y < bottomleft.y) {
						bottomleft.y = point.p.y;
					}
					if (point.p.x > topright.x) {
						topright.x = point.p.x;
					}
					if (point.p.y > topright.y) {
						topright.y = point.p.y;
					}
				});
	
				var padding = topright.subtract(bottomleft).multiply(0.05);
				return {
					'bottomleft': bottomleft.subtract(padding),
					'topright': topright.add(padding)
				};
			}
	
			/**
	   * render function
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'render',
			value: function render() {
				var self = this,
				    nlen = this.nodes.length,
				    elen = this.edges.length,
				    approach = this.props.approach;
	
				/**
	    * Initiate Container size again
	    * @param  {[type]} this.initState [description]
	    * @return {[type]}                [description]
	    */
				if (this.initState) {
					this.initState = !this.initState;
					initContainerSize();
				}
	
				/**
	    * Clean canvas layout if current approach is canvas
	    */
				if (this.props.approach === 'canvas') {
					this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
				}
	
				this.edgeSprings.forEach(function (val, key, map) {
					drawEdge(key, val);
				});
	
				this.nodePoints.forEach(function (val, key, map) {
					// Map(key, val)
					drawNode(key, val);
				});
	
				/**
	    * initialize container, svg or canvas
	    * @return {[type]} [description]
	    */
				function initContainerSize() {
					var e = document.getElementById(self.props.containerId);
					if (e) {
						e.parentNode.removeChild(e);
					}
	
					if (self.props.approach === 'canvas') {
						var container = document.createElement('canvas');
						container.id = self.props.containerId;
						container.width = self.props.width;
						container.height = self.props.height;
						document.getElementById(self.props.parentId).appendChild(container);
	
						self.canvas = container;
						self.ctx = container.getContext("2d");
						return;
					}
	
					var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
					svg.setAttribute('id', self.props.containerId);
					document.getElementById(self.props.parentId).appendChild(svg);
	
					svg.setAttribute('width', self.props.width);
					svg.setAttribute('height', self.props.height);
				}
	
				function drawNode(key, val) {
					var fillStyle = self.color(val.group),
					    strokeStyle = 'rgb(255,255,255)',
					    r = 5,
					    lineWidth = 1;
	
					if (self.props.approach === 'canvas') {
						self.ctx.strokeStyle = strokeStyle;
						self.ctx.fillStyle = fillStyle;
						self.ctx.lineWidth = lineWidth;
						self.ctx.beginPath();
						self.ctx.arc(val.p.x, val.p.y, r, 0, 2 * Math.PI);
						self.ctx.stroke();
						self.ctx.fill();
	
						return;
					}
	
					// let node = d3.select(`#node-${key}`),
					// 	container = d3.select(`#${self.props.containerId}`);
	
					// if (node.empty()) {
					// 	node = container.append('circle')
					// 		.attr('id', `node-${key}`)
					// 		.attr('r', r)
					// 		.attr('fill', fillStyle)
					// 		.attr('stroke', strokeStyle)
					// 		.attr('stroke-width', lineWidth);
					// }
	
					// node.attr('cx', val.p.x)
					// 	.attr('cy', val.p.y);
	
					var node = document.getElementById('node-' + key),
					    container = document.getElementById(self.props.containerId);
	
					if (!node) {
						node = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
	
						node.id = 'node-' + key;
						setAttributes(node, {
							'r': r,
							'fill': fillStyle,
							'stroke': strokeStyle,
							'stroke-width': lineWidth
						});
	
						container.appendChild(node);
					}
	
					setAttributes(node, {
						'cx': val.p.x,
						'cy': val.p.y
					});
				}
	
				function drawEdge(key, val) {
					var source = val.source,
					    target = val.target,
					    strokeStyle = 'rgb(100,100,100)',
					    strokeWidth = Math.sqrt(val.length) * 0.1;
	
					if (self.props.approach === 'canvas') {
						self.ctx.strokeStyle = strokeStyle;
						self.ctx.lineWidth = strokeWidth;
						self.ctx.beginPath();
						self.ctx.moveTo(source.p.x, source.p.y);
						self.ctx.lineTo(target.p.x, target.p.y);
						self.ctx.stroke();
	
						return;
					}
	
					// let edge = d3.select(`#edge-${key}`),
					// 	container = d3.select(`#${self.props.containerId}`);
	
					// if (edge.empty()) {
					// 	edge = container.append('line')
					// 		.attr('id', `edge-${key}`)
					// 		.style('stroke', strokeStyle)
					// 		.style('stroke-width', strokeWidth);
					// }
	
					// // update nodes and edge position
					// edge.attr('x1', source.p.x)
					// 	.attr('y1', source.p.y)
					// 	.attr('x2', target.p.x)
					// 	.attr('y2', target.p.y);
	
					var edge = document.getElementById('edge-' + key),
					    container = document.getElementById(self.props.containerId);
	
					if (!edge) {
						edge = document.createElementNS("http://www.w3.org/2000/svg", 'line');
	
						edge.id = 'edge-' + key;
	
						setAttributes(edge, {
							'stroke': strokeStyle,
							'stroke-width': strokeWidth
						});
	
						container.appendChild(edge);
					}
	
					// update nodes and edge position
					setAttributes(edge, {
						'x1': source.p.x,
						'y1': source.p.y,
						'x2': target.p.x,
						'y2': target.p.y
					});
				}
			}
		}]);
	
		return forceLayout;
	}();
	
	exports.default = forceLayout;

/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * Vector.js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-08 16:39:46
	 * @version $Id$
	 */
	
	'use strict';
	/**
	 * Vector class
	 */
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Vector = function () {
		function Vector(x, y) {
			_classCallCheck(this, Vector);
	
			this.x = x; // x position
			this.y = y; // y position
		}
	
		_createClass(Vector, [{
			key: 'getvec',
			value: function getvec() {
				return this;
			}
		}, {
			key: 'add',
			value: function add(v2) {
				return new Vector(this.x + v2.x, this.y + v2.y);
			}
		}, {
			key: 'subtract',
			value: function subtract(v2) {
				return new Vector(this.x - v2.x, this.y - v2.y);
			}
		}, {
			key: 'magnitude',
			value: function magnitude() {
				return Math.sqrt(this.x * this.x + this.y * this.y);
			}
		}, {
			key: 'normalise',
			value: function normalise() {
				return this.divide(this.magnitude());
			}
		}, {
			key: 'divide',
			value: function divide(n) {
				return new Vector(this.x / n || 0, this.y / n || 0);
			}
		}, {
			key: 'multiply',
			value: function multiply(n) {
				return new Vector(this.x * n, this.y * n);
			}
		}]);
	
		return Vector;
	}();
	
	exports.default = Vector;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * Spring.js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-08 16:41:07
	 * @version $Id$
	 */
	
	'use strict';
	/**
	 * Spring class
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Spring = function Spring(source, target, length) {
	  _classCallCheck(this, Spring);
	
	  this.source = source;
	  this.target = target;
	  this.length = length;
	};
	
	exports.default = Spring;

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Elements.js
	 * @authors Joe Jiang (hijiangtao@gmail.com)
	 * @date    2017-04-08 16:42:41
	 * @version $Id$
	 */
	
	'use strict';
	/**
	 * Node
	 * @param {[type]} id   [description]
	 * @param {[type]} data [description]
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Node = function Node(data) {
	  this.id = data.id;
	  this.data = data !== undefined ? data : {};
	};
	
	/**
	 * Edge
	 * @param {[type]} id     [description]
	 * @param {[type]} source [description]
	 * @param {[type]} target [description]
	 * @param {[type]} data   [description]
	 */
	var Edge = function Edge(id, source, target, data) {
	  this.id = id;
	  this.source = source;
	  this.target = target;
	  this.data = data !== undefined ? data : {};
	};
	
	exports.Node = Node;
	exports.Edge = Edge;

/***/ }
/******/ ]);
//# sourceMappingURL=home.js.map