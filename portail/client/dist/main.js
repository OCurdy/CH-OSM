(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiadresse/apiadresse.component.css":
/*!*****************************************************!*\
  !*** ./src/app/apiadresse/apiadresse.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".apiadresse-input{\n    max-width: 180px;\n}"

/***/ }),

/***/ "./src/app/apiadresse/apiadresse.component.html":
/*!******************************************************!*\
  !*** ./src/app/apiadresse/apiadresse.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- doc utile dans https://www.npmjs.com/package/ng2-auto-complete -->\n<input class=\"apiadresse-input\" placeholder=\" {{ 'apiadresse.location' | translate }}\" ngui-auto-complete [(ngModel)]=\"selected\" loading-text=\"Chargement...\" [list-formatter]=\"myListFormatter\"\n  [value-formatter]=\"myValueFormatter\" (valueChanged)=\"onSelect($event)\" [source]=\"observableSource.bind(this)\" no-match-found-text=\"Pas de résultat\" />\n\n<!--\n    <br/>selected model: {{selected | json}}<br/><br/>\n-->"

/***/ }),

/***/ "./src/app/apiadresse/apiadresse.component.ts":
/*!****************************************************!*\
  !*** ./src/app/apiadresse/apiadresse.component.ts ***!
  \****************************************************/
/*! exports provided: ApiAdresseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAdresseComponent", function() { return ApiAdresseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiAdresseComponent = /** @class */ (function () {
    function ApiAdresseComponent(http, _sanitizer) {
        var _this = this;
        this.http = http;
        this._sanitizer = _sanitizer;
        this.values = [];
        this.value = '';
        this.longitude = null;
        this.latitude = null;
        this.citySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.observableSource = function (keyword) {
            var url = 'https://api3.geo.admin.ch/rest/services/api/SearchServer?';
            if (keyword) {
                var parametres = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
                parametres = parametres.set('searchText', keyword);
                parametres = parametres.set('type', 'locations');
                if (_this.latitude && _this.longitude) {
                    parametres = parametres.set('lat', _this.latitude);
                    parametres = parametres.set('lon', _this.longitude);
                }
                return _this.http.get(url, { params: parametres })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                    return res['results'];
                }));
            }
            else {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].of([]);
            }
        };
        this.myListFormatter = function (data) {
            var html = "<div style=\"line-height: 100%; font-size: small\"><b>" + data["attrs"]["label"] + "</b></div>";
            return _this._sanitizer.bypassSecurityTrustHtml(html);
        };
    }
    ApiAdresseComponent.prototype.myValueFormatter = function (data) {
        return "" + data["attrs"]["detail"];
    };
    ApiAdresseComponent.prototype.ngOnInit = function () {
    };
    ApiAdresseComponent.prototype.onSelect = function (event) {
        this.citySelected.emit(this.selected);
        _paq.push(['trackEvent', 'api_adresse', true]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ApiAdresseComponent.prototype, "citySelected", void 0);
    ApiAdresseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apiadresse',
            template: __webpack_require__(/*! ./apiadresse.component.html */ "./src/app/apiadresse/apiadresse.component.html"),
            styles: [__webpack_require__(/*! ./apiadresse.component.css */ "./src/app/apiadresse/apiadresse.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ApiAdresseComponent);
    return ApiAdresseComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngui/auto-complete */ "./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngui_auto_complete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apiadresse_apiadresse_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apiadresse/apiadresse.component */ "./src/app/apiadresse/apiadresse.component.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _feature_panel_feature_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feature-panel/feature-panel.component */ "./src/app/feature-panel/feature-panel.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _map_panel_switcher_map_panel_switcher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./map-panel-switcher/map-panel-switcher.component */ "./src/app/map-panel-switcher/map-panel-switcher.component.ts");
/* harmony import */ var _map_panel_switcher_components_legend_legend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./map-panel-switcher-components/legend/legend.component */ "./src/app/map-panel-switcher-components/legend/legend.component.ts");
/* harmony import */ var _map_panel_switcher_components_map_controller_map_controller_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map-panel-switcher-components/map-controller/map-controller.component */ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.ts");
/* harmony import */ var _map_panel_switcher_components_layer_tree_layer_tree_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./map-panel-switcher-components/layer-tree/layer-tree.component */ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.ts");
/* harmony import */ var _orderbypipe_orderbypipe_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./orderbypipe/orderbypipe.component */ "./src/app/orderbypipe/orderbypipe.component.ts");
/* harmony import */ var _service_layer_change_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/layer-change.service */ "./src/app/service/layer-change.service.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _permalink_permalink_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./permalink/permalink.component */ "./src/app/permalink/permalink.component.ts");
/* harmony import */ var _service_user_context_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/user-context.service */ "./src/app/service/user-context.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _feature_panel_components_feature_main_info_feature_main_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./feature-panel-components/feature-main-info/feature-main-info.component */ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.ts");
/* harmony import */ var _changes_changes_main_changes_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./changes/changes-main/changes-main.component */ "./src/app/changes/changes-main/changes-main.component.ts");
/* harmony import */ var _changes_changes_detailled_map_changes_detailled_map_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./changes/changes-detailled-map/changes-detailled-map.component */ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.ts");
/* harmony import */ var _changes_change_details_change_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./changes/change-details/change-details.component */ "./src/app/changes/change-details/change-details.component.ts");
/* harmony import */ var _changes_changes_config_panel_changes_config_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./changes/changes-config-panel/changes-config-panel.component */ "./src/app/changes/changes-config-panel/changes-config-panel.component.ts");
/* harmony import */ var _changes_changes_map_changes_map_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./changes/changes-map/changes-map.component */ "./src/app/changes/changes-map/changes-map.component.ts");
/* harmony import */ var mydaterangepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! mydaterangepicker */ "./node_modules/mydaterangepicker/index.js");
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _help_components_help_help_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./help-components/help/help.component */ "./src/app/help-components/help/help.component.ts");
/* harmony import */ var _help_components_help_subsection_help_subsection_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./help-components/help-subsection/help-subsection.component */ "./src/app/help-components/help-subsection/help-subsection.component.ts");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var _utils_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utils/load-spinner/load-spinner.component */ "./src/app/utils/load-spinner/load-spinner.component.ts");
/* harmony import */ var _layer_attribute_table_layer_attribute_table_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./layer-attribute-table/layer-attribute-table.component */ "./src/app/layer-attribute-table/layer-attribute-table.component.ts");
/* harmony import */ var _common_directive_draggable_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./common/directive/draggable.directive */ "./src/app/common/directive/draggable.directive.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: '/carte',
        pathMatch: 'full',
    },
    {
        path: 'changements-aide',
        component: _help_components_help_help_component__WEBPACK_IMPORTED_MODULE_30__["HelpComponent"],
        data: { title: 'Aide au suivi de changement' }
    },
    {
        path: 'carte',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
        data: { title: 'Portail' }
    },
    {
        path: 'changements',
        component: _changes_changes_main_changes_main_component__WEBPACK_IMPORTED_MODULE_23__["ChangesMainComponent"],
        data: { title: 'Suivi de changement' }
    },
    { path: '**', redirectTo: '/carte' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _apiadresse_apiadresse_component__WEBPACK_IMPORTED_MODULE_6__["ApiAdresseComponent"],
                _app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _feature_panel_feature_panel_component__WEBPACK_IMPORTED_MODULE_8__["FeaturePanelComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_9__["MainComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_11__["MapComponent"],
                _map_panel_switcher_map_panel_switcher_component__WEBPACK_IMPORTED_MODULE_12__["MapPanelSwitcherComponent"],
                _map_panel_switcher_components_legend_legend_component__WEBPACK_IMPORTED_MODULE_13__["LegendComponent"],
                _map_panel_switcher_components_map_controller_map_controller_component__WEBPACK_IMPORTED_MODULE_14__["MapControllerComponent"],
                _map_panel_switcher_components_layer_tree_layer_tree_component__WEBPACK_IMPORTED_MODULE_15__["LayerTreeComponent"],
                _orderbypipe_orderbypipe_component__WEBPACK_IMPORTED_MODULE_16__["OrderByPipeComponent"],
                _permalink_permalink_component__WEBPACK_IMPORTED_MODULE_19__["PermalinkComponent"],
                _feature_panel_components_feature_main_info_feature_main_info_component__WEBPACK_IMPORTED_MODULE_22__["FeatureMainInfoComponent"],
                _changes_changes_main_changes_main_component__WEBPACK_IMPORTED_MODULE_23__["ChangesMainComponent"],
                _changes_changes_detailled_map_changes_detailled_map_component__WEBPACK_IMPORTED_MODULE_24__["ChangesDetailledMapComponent"],
                _changes_change_details_change_details_component__WEBPACK_IMPORTED_MODULE_25__["ChangeDetailsComponent"],
                _changes_changes_config_panel_changes_config_panel_component__WEBPACK_IMPORTED_MODULE_26__["ChangesConfigPanelComponent"],
                _changes_changes_map_changes_map_component__WEBPACK_IMPORTED_MODULE_27__["ChangesMapComponent"],
                _help_components_help_help_component__WEBPACK_IMPORTED_MODULE_30__["HelpComponent"],
                _help_components_help_subsection_help_subsection_component__WEBPACK_IMPORTED_MODULE_31__["HelpChangeTypeComponent"],
                _utils_load_spinner_load_spinner_component__WEBPACK_IMPORTED_MODULE_33__["LoadSpinnerComponent"],
                _layer_attribute_table_layer_attribute_table_component__WEBPACK_IMPORTED_MODULE_34__["LayerAttributeTableComponent"],
                _common_directive_draggable_directive__WEBPACK_IMPORTED_MODULE_35__["DraggableDirective"],
            ],
            imports: [
                _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_5__["NguiAutoCompleteModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(
                // [
                //   {
                //     path: 'carte',
                //     component: MainComponent
                //   }
                // ]
                ROUTES),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_36__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
                    }
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(ROUTES),
                mydaterangepicker__WEBPACK_IMPORTED_MODULE_28__["MyDateRangePickerModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_32__["Ng5SliderModule"]
            ],
            providers: [
                _service_config_service__WEBPACK_IMPORTED_MODULE_29__["ConfigService"],
                _service_map_service__WEBPACK_IMPORTED_MODULE_18__["MapService"],
                _service_layer_change_service__WEBPACK_IMPORTED_MODULE_17__["LayerChangeService"],
                _service_user_context_service__WEBPACK_IMPORTED_MODULE_20__["UserContextService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());

// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_37__["TranslateHttpLoader"](http);
}


/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    /*
    * From CH-OSM-website : app.component.ts
     */
    /*
    * FROM https://stackoverflow.com/questions/38644314/changing-the-page-title-using-the-angular-2-new-router
     */
    function AppComponent(titleService, router, activatedRoute, translate) {
        var _this = this;
        this.translate = translate;
        translate.setDefaultLang('fr');
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                var title = _this.getTitle(router.routerState, router.routerState.root).join('-');
                titleService.setTitle(title);
            }
        });
    }
    // collect that title data properties from all child routes
    // there might be a better way but this worked for me
    AppComponent.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }
        if (state && parent) {
            data.push.apply(data, this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    };
    //use language selected
    AppComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/changes/change-details/change-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/changes/change-details/change-details.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#detailspanel-close.toggle {\n    position:absolute;\n    right:0px;\n    margin: 5px 5px 0 0;\n    line-height: .5;\n}\n\n/* The panel is hidden when the close button is pushed */\n\n#detailspanel {\n    margin-right: -600px;\n    right: 0;\n    top: 0vw;\n    width: 600px;\n    position: fixed;\n    height: 100%;\n    overflow: auto;\n    z-index: 1000;\n    transition: all 0.5s ease-in 0s;\n    -webkit-transition: all 0.5s ease-in 0s;\n    -moz-transition: all 0.5s ease-in 0s;\n    -ms-transition: all 0.5s ease-in 0s;\n    -o-transition: all 0.5s ease-in 0s;\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n\n#detailspanel.active {\n    right: 600px;\n    width: 600px;\n    transition: all 0.5s ease-out 0s;\n    -webkit-transition: all 0.5s ease-out 0s;\n    -moz-transition: all 0.5s ease-out 0s;\n    -ms-transition: all 0.5s ease-out 0s;\n    -o-transition: all 0.5s ease-out 0s;\n  }\n\n#changeType, #dropdownMenuButton{\n  text-align:center;\n  /* right:2%; */\n  position:relative;\n  margin-left:auto;\n  margin-right:auto;\n  width:97%;\n}\n\n.dropdown-menu{\n  width:97%;\n  /* text-align:center; */\n}\n\n.cercle {\n\twidth: 12px;\n\theight: 12px;\n\tborder-radius: 50%;\n\tmargin : 5px 20px auto 5px;\n  }\n\n.metadata-circle {\n  cursor:pointer;\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  font-size: 10px;\n  color: #fff;\n  line-height: 12px;\n  text-align: center;\n  background: #CC1517;\n}\n\ntable th{\n  vertical-align: middle;\n\n}\n\ntable#tags thead .th{\n  text-align:center;\n}\n\n.logo{\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\ntable#tags{\n  width:97%;\n  line-height:0.8em;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom:1px;\n  word-break: break-word;\n  -webkit-hyphens:auto;\n      -ms-hyphens:auto;\n          hyphens:auto;\n}\n\na[href]{\n  padding-left:2px;\n  padding-right:2px;\n}\n\n/* slider */\n\n.custom-slider .ng5-slider .ng5-slider-tick {\n       z-index: 1000;\n   }\n\n.custom-slider .ng5-slider .ng5-slider-selection {\n     background: orange;\n   }\n\n/* \n We need to use ::ng-deep to overcome view encapsulation\n::ng-deep {\n  .custom-slider .ng5-slider .ng5-slider-bar {\n    background:#ffe4d1;\n    height: 2px;\n    opacity: 0.1;\n  }*/\n\n/* ::ng-slider .custom-slider .ng5-slider .ng5-slider-selection {\n     background: orange;\n   }\n    */\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n    width: 8px;\n    height: 25px;\n    top: auto; /*to remove the default positioning*/\n    bottom: -10px;\n    background-color: #333;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n    display: none;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n    bottom: 14px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-tick-legend{\n    max-width: none;\n    font-size : 0.7em;\n  }\n\n/* ::ng-deep .custom-slider .ng5-slider .ng5-slider-limit {\n     font-weight: bold;\n     color: orange;\n   } */\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-tick {\n    width: 2px;\n    height: 20px;\n    margin-left: 4px;\n    border-radius: 0;\n    top: -1px;\n    background-color : black !important;\n    left:10px;\n  }\n\n/* ::ng-deep .custom-slider .ng5-slider .ng5-slider-ticks .ng5-slider-tick.ng5-slider-selected {\n     background-color: blue !important;\n   } */\n\napp-load-spinner{\n  display: table;\n  margin: 0 auto;\n}\n"

/***/ }),

/***/ "./src/app/changes/change-details/change-details.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/changes/change-details/change-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row active\" id=\"detailspanel\">\n    <div id=\"details-panel-nav\" style=\"width:100%;\">\n        <a id=\"detailspanel-close\" href=\"#/changements\" class=\"btn btn-outline-secondary btn-sm toggle\">\n            <b class=\"glyphicon glyphicon-remove\">X</b>\n        </a>\n        <!-- Title -->\n        <div class=\"card-header p-2 text-center\" role=\"tab\" id=\"headingDetailsPanel\" style=\"word-wrap: break-word;\">\n            <b>{{ 'change.info' | translate }}</b>\n        </div>\n        <app-load-spinner *ngIf=\"displayLoadSpinner\"></app-load-spinner>\n        <div *ngIf=\"selectedFeatures.length>1\" id=\"featuresNearbyArray\">\n            <div class=\"dropdown\">\n                <button class=\"btn btn-secondary btn-lg btn-block btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" \n                data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"font-size:0.8em;\">\n                    <a>{{selectedFeatures.length-1}} {{ 'change.elements' | translate }}</a> <!-- -1 because the selectedFeature is in the selectedFeatureS -->\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                    <ng-container *ngFor=\"let feature of selectedFeatures\">\n                        <button *ngIf=\"feature != selectedFeature\" class=\"dropdown-item\" (click)=\"onSelect(feature)\">\n                            <span style=\"text-align:left;float:left; text-transform : capitalize;\">{{this.mapService.getOsmTypeOfFeature(feature.get('osmId'), feature.get('geom_type'))}} {{feature.get('osmId') > 0 ? feature.get('osmId') : feature.get('osmId')*(-1) }}</span>\n                            <div style=\"text-align:right;float:right;\" class=\"cercle\" [ngStyle]=\"{'background-color' : getColor(feature.get('changeType'))}\"></div>\n                        </button>\n                        <!-- [ngStyle]=\"{'background-color': changeTypesList.filter(x => x.id === feature.get('changeType'))[0].relatedColor.getRGBA()}\" -->\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n\n\n        <div id=\"detailsContainer\" *ngIf=\"mainChange\" style=\"position:relative;\">\n        <div style=\"text-transform : capitalize;\">\n            <p style=\"text-align: left; width:50%; display: inline-block;\">\n                <a style=\"font-size:1.5rem;margin-left:10px;margin-right:5px;\"><b>{{osmType}} {{osmId}}</b></a>\n                <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmDotOrg_obj')\" title=\"Voir l'objet sur openstreetmap.org\" target=\"_blank\" href=\"https://www.openstreetmap.org/{{osmType}}/{{osmId}}\"><img src=\"assets/images/osm_logo_25px.png\"></a>\n            </p>\n\n            <p style=\"text-align: right; width:50%;  display: inline-block;\">\n                <a (click)=\"onExternalOSMToolSelected('osmHistBrowser')\" title=\"Comparer les différentes versions sur OSM History Browser\" target=\"_blank\" href=\"http://osm.virtuelle-loipe.de/history/?type={{osmType}}&ref={{osmId}}\"><span class=\"badge badge-info\">History Browser</span></a>\n                <a (click)=\"onExternalOSMToolSelected('osmHistViewer')\" title=\"Comparer et visualiser les différentes versions sur OSM History Viewer\" target=\"_blank\" href=\"https://pewu.github.io/osm-history/#/{{osmType}}/{{osmId}}\"><span class=\"badge badge-info\">History Viewer</span></a>\n            </p>\n        </div>\n\n        <div class=\"custom-slider\" style=\"width:90%;margin: 0px auto 5px auto\">\n            <ng5-slider [hidden]=\"!displaySlider\" \n                [(value)]=\"minValue\"\n                [(highValue)]=\"maxValue\"\n                [options]=\"options\"\n                (userChangeEnd)=\"onUserChangeEnd($event)\"\n                [manualRefresh]=\"manualRefresh\"\n                style=\"margin-bottom:30px;\">\n            </ng5-slider>\n        </div>\n        \n\n            <div id=\"top_infos\" style=\"background-color: rgba(255,255,255,0.3);\">\n\n                <div id=\"changeType\">\n                    <div *ngIf=\"noChangeInInterval; else badge\" class=\"alert alert-danger\" role=\"alert\">\n                        {{ 'change.interval' | translate }}\n                    </div>\n                    <ng-template #badge>\n                        <h4><span class=\"badge badge-secondary\" [ngStyle]=\"{'background-color': changeType.relatedColor.getRGBA()}\">{{changeType.name}}</span></h4>\n                    </ng-template>\n                </div>\n\n                <app-changes-detailled-map\n                [hidden]=\"!userContext\"\n                [userContext]=\"userContext\"\n                [mainChange]=\"mainChange\"\n                [changeTypesList]=\"changeTypesList\"\n                id=\"MapChangement\">\n                </app-changes-detailled-map>\n\n\n                <table class=\"table table-bordered\" style=\"width:97%;line-height:0.8em;margin: 2px auto 5px auto\">\n                    <colgroup>\n                        <col style=\"width:50%;\">\n                        <col style=\"width:50%;\">\n                    </colgroup>\n                    <tbody>\n                        <tr>\n                            <th>{{ 'change.timestamp' | translate }} (UTC)</th>\n                            <td>{{timestampDate.toLocaleString('fr-FR', {timeZone: 'UTC'})}}</td>\n                        </tr>\n                        <tr *ngIf=\"lastUser\">\n                            <th style=\"vertical-align: middle;\">{{ 'change.user' | translate }}</th>\n                            <td>\n                                <a>{{lastUser}}</a>\n                                <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmDotOrg_user')\" title=\"Voir l'utilisateur sur openstreetmap.org\" target=\"_blank\" href=\"https://www.openstreetmap.org/user/{{lastUser}}\"><img src=\"assets/images/osm_logo_25px.png\"></a>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"lastChangeset\" >\n                            <th>{{ 'change.changeset' | translate }}\n                                <a class=\"metadata-circle\" target=\"_blank\" href=\"https://wiki.openstreetmap.org/wiki/FR:Groupes_de_modifications\" title=\"Voir la définition sur le wiki\"><b>?</b></a>\n                            </th>\n                            <td>\n                                <a>{{lastChangeset}}</a>\n                                <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmDotOrg_chset')\" title=\"Voir le changeset sur openstreetmap.org\" target=\"_blank\" href=\"https://www.openstreetmap.org/changeset/{{lastChangeset}}\"><img src=\"assets/images/osm_logo_25px.png\"></a>\n                                <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmCha')\" title=\"Analyse du changeset sur OSMCha\" target=\"_blank\" href=\"https://osmcha.mapbox.com/changesets/{{lastChangeset}}/\"><img src=\"https://osmcha.mapbox.com/favicon.ico\" style=\"height:25px;width:25px;\"></a>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"transitionalChangesetMap && transitionalChangesetMap.size > 0\">\n                            <th>{{ 'change.transitions' | translate }}\n                                <a class=\"metadata-circle\" target=\"_blank\" href=\"https://wiki.openstreetmap.org/wiki/FR:Groupes_de_modifications\" title=\"Voir la définition sur le wiki\"><b>?</b></a>\n                            </th>\n                            <td>\n                                <div *ngFor=\"let changeset of transitionalChangesetMap | keyvalue \">\n                                    <a>v{{changeset.key}} : {{changeset.value}}</a>\n                                    <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmDotOrg_chset')\" title=\"Voir le changeset sur openstreetmap.org\" target=\"_blank\" href=\"https://www.openstreetmap.org/changeset/{{changeset.value}}\"><img src=\"assets/images/osm_logo_25px.png\"></a>\n                                    <a class=\"logo\" (click)=\"onExternalOSMToolSelected('osmCha')\" title=\"Analyse du changeset sur OSMCha\" target=\"_blank\" href=\"https://osmcha.mapbox.com/changesets/{{changeset.value}}/\"><img src=\"https://osmcha.mapbox.com/favicon.ico\" style=\"height:25px;width:25px;\"></a>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            <table class=\"table table-hover table-bordered\" id=\"tags\">\n                <colgroup>\n                    <col style=\"width:30%\">\n                    <col *ngIf=\"mainChange.versionOld\" style=\"width:35%;\">\n                    <col *ngIf=\"mainChange.versionNew\" style=\"width:35%;\">\n                </colgroup>\n                <thead>\n                    <tr style=\"text-align: center\">\n                        <th>Version</th>\n                        <th *ngIf=\"mainChange.versionOld\">{{mainChange.versionOld}}</th>\n                        <th *ngIf=\"mainChange.versionNew\">{{mainChange.versionNew}}</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let tag of tagsList\" [ngClass]=\"getHTMLTableClass(tag)\">\n                        <th>{{tag.key}}</th>\n                        <td *ngIf=\"mainChange.versionOld\">{{tag.valueOld ? tag.valueOld.replace(deleteDoubleApostrophe,\"'\") : \"\"}}</td>\n                        <td *ngIf=\"mainChange.versionNew\">{{tag.valueNew ? tag.valueNew.replace(deleteDoubleApostrophe,\"'\") : \"\"}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/changes/change-details/change-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/changes/change-details/change-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ChangeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeDetailsComponent", function() { return ChangeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_api_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/api-request.service */ "./src/app/service/api-request.service.ts");
/* harmony import */ var app_service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_service_slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/slider.service */ "./src/app/service/slider.service.ts");
/* harmony import */ var app_model_ChangesClasses_FeatureChangesRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/ChangesClasses/FeatureChangesRequest */ "./src/app/model/ChangesClasses/FeatureChangesRequest.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_model_ChangesClasses_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/ChangesClasses/Tag */ "./src/app/model/ChangesClasses/Tag.ts");
/* harmony import */ var app_model_UserContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ChangeDetailsComponent = /** @class */ (function () {
    function ChangeDetailsComponent(apiRequestService, mapService, sliderService, sanitizer) {
        this.apiRequestService = apiRequestService;
        this.mapService = mapService;
        this.sliderService = sliderService;
        this.sanitizer = sanitizer;
        this.panelOpen = true;
        this.displayLoadSpinner = false;
        this.featureChangesRequest = new app_model_ChangesClasses_FeatureChangesRequest__WEBPACK_IMPORTED_MODULE_4__["FeatureChangesRequest"]();
        this.mapLoader = false;
        this.noChangeInInterval = false;
        // To replace double apostrophes in hstore by only one.
        this.deleteDoubleApostrophe = new RegExp("''");
        //slider
        this.displaySlider = false;
        this.manualRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.background = this.sanitizer.bypassSecurityTrustStyle('rgba(100,100,100)');
    }
    ChangeDetailsComponent.prototype.ngOnInit = function () {
        this.selectedFeature = this.selectedFeatures[0];
        var self = this;
        $("#detailspanel-close").click(function (e) {
            console.log("Au clic sur la croix !");
            self.mapService.clearSelection();
            e.preventDefault();
            $("#detailspanel").toggleClass("active");
            self.panelOpen = false;
        });
    };
    ChangeDetailsComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.selectedFeature = this.selectedFeatures[0];
        this.mapService.addFeatureToSelection(this.selectedFeature);
        this.setFeatureChangesRequest();
        this.getFeatureChanges();
        if (!this.panelOpen) { //si le panel est fermé, on l'ouvre
            console.log('onChange fired');
            console.log('changing', args);
            this.panelOpen = true;
            if (!$("#detailspanel").hasClass("active")) {
                $("#detailspanel").toggleClass("active");
            }
        }
        //// Matomo
        _paq.push(['trackEvent', 'change-feature_selected', true]);
    };
    ChangeDetailsComponent.prototype.onSelect = function (feature) {
        this.selectedFeature = feature;
        this.mapService.clearSelection();
        this.mapService.addFeatureToSelection(this.selectedFeature);
        this.setFeatureChangesRequest();
        this.getFeatureChanges();
    };
    ChangeDetailsComponent.prototype.setFeatureChangesRequest = function () {
        this.featureChangesRequest.osm_id = this.selectedFeature.get('osmId');
        this.featureChangesRequest.type = this.selectedFeature.get('geom_type');
        this.featureChangesRequest.beginDate = this.apiRequestService.beginDate;
        this.featureChangesRequest.endDate = this.apiRequestService.endDate;
        this.featureChangesRequest.thematic = this.apiRequestService.thematic.id;
    };
    ChangeDetailsComponent.prototype.getFeatureChanges = function () {
        var _this = this;
        this.displayLoadSpinner = true;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestMethod"].Post,
            headers: headers
        });
        var data = JSON.stringify(this.featureChangesRequest);
        console.log(data);
        this.apiRequestService.searchFeatureChanges(data, options)
            .subscribe(function (res) {
            _this.featureChangesList = JSON.parse(res['_body']);
            console.log(_this.featureChangesList);
            _this.numberOfChangesToDisplay = _this.featureChangesList.length;
            _this.mainChange = _this.mapService.getChangesMergeForOneFeature(JSON.parse(JSON.stringify(_this.featureChangesList)));
            _this.setDataToDisplay();
            _this.initSlider();
            _this.displayLoadSpinner = false;
        });
    };
    ChangeDetailsComponent.prototype.setDataToDisplay = function () {
        var _this = this;
        this.osmId = Math.abs(this.mainChange.osmId);
        this.osmType = this.mapService.getOsmTypeOfFeature(this.mainChange.osmId, this.mainChange.type);
        this.changeType = this.changeTypesList.filter(function (x) { return x.id === _this.mainChange.changeType; })[0];
        this.timestampDate = new Date(this.mainChange.timestamp);
        this.lastUser = this.mainChange.tagsNew ? this.mainChange.tagsNew.osm_user : undefined;
        this.lastChangeset = this.mainChange.tagsNew ? this.mainChange.tagsNew.osm_changeset : undefined;
        this.getTagsList();
        if (this.mainChange.changeType == 6) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var xmlDoc = xmlhttp.responseXML;
                    var x = xmlDoc.getElementsByTagName(this.osmType);
                    for (var i = 0; i < x.length; i++) {
                        if (x[i].attributes.getNamedItem("visible").value == "false" || i == x.length - 1) {
                            this.timestampDate = new Date(x[i].attributes.getNamedItem("timestamp").value);
                            this.lastUser = x[i].attributes.getNamedItem("user").value;
                            this.lastChangeset = x[i].attributes.getNamedItem("changeset").value;
                            this.mainChange.versionNew = x[i].attributes.getNamedItem("version").value;
                        }
                    }
                    this.getTransitionalChangesets();
                }
            }.bind(this);
            xmlhttp.open("GET", "https://www.openstreetmap.org/api/0.6/" + this.osmType + "/" + this.osmId + "/history", true);
            xmlhttp.send();
        }
        else {
            this.getTransitionalChangesets();
        }
    };
    ChangeDetailsComponent.prototype.getTransitionalChangesets = function () {
        var transitionalVersionArray = [];
        this.transitionalChangesetMap = new Map();
        // (If creation and more than 2 changes) OR (if deletion and more than 2 changes) OR (if versionOld and versionNew exists and more than 2 changes)
        if ((this.mainChange.changeType == 1 || this.mainChange.versionNew > 1) || (this.mainChange.changeType == 6 || this.mainChange.versionNew || this.mainChange.versionNew > this.mainChange.versionOld + 1) || (this.mainChange.versionNew && this.mainChange.versionOld && this.mainChange.versionNew - 1 > this.mainChange.versionOld)) {
            for (var i = (this.mainChange.versionOld ? this.mainChange.versionOld : 0) + 1; i < (this.mainChange.versionNew); i++) {
                transitionalVersionArray.push(i); //We have all the versions numbers we have to find !
            }
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var xmlDoc = xmlhttp.responseXML;
                    var x = xmlDoc.getElementsByTagName(this.osmType);
                    for (var i_1 = 0; i_1 < x.length; i_1++) {
                        if (transitionalVersionArray.indexOf(Number(x[i_1].attributes.getNamedItem("version").value)) > -1) {
                            this.transitionalChangesetMap.set(Number(x[i_1].attributes.getNamedItem("version").value), x[i_1].attributes.getNamedItem("changeset").value);
                        }
                    }
                }
            }.bind(this);
            xmlhttp.open("GET", "https://www.openstreetmap.org/api/0.6/" + this.osmType + "/" + this.osmId + "/history", true);
            xmlhttp.send();
        }
    };
    ChangeDetailsComponent.prototype.getTagsList = function () {
        var _this = this;
        this.tagsList = [];
        var keys = new Array();
        var usedKeys = new Array();
        if (this.mainChange.tagsNew != null) {
            keys = keys.concat(Object.keys(this.mainChange.tagsNew));
        }
        if (this.mainChange.tagsOld != null) {
            keys = keys.concat(Object.keys(this.mainChange.tagsOld));
        }
        keys.forEach(function (key) {
            if (['osm_changeset', 'osm_uid', 'osm_user'].indexOf(key) < 0 && usedKeys.indexOf(key) < 0) {
                _this.tagsList.push(new app_model_ChangesClasses_Tag__WEBPACK_IMPORTED_MODULE_6__["Tag"](key, _this.mainChange.tagsNew === null ? null : _this.mainChange.tagsNew[key], _this.mainChange.tagsOld === null ? null : _this.mainChange.tagsOld[key]));
                usedKeys.push(key);
            }
        });
    };
    ChangeDetailsComponent.prototype.getHTMLTableClass = function (tag) {
        if (tag.valueNew == null) {
            return 'table-danger';
        }
        if (tag.valueOld == null) {
            return 'table-success';
        }
        if (tag.valueNew != tag.valueOld) {
            return 'table-warning';
        }
    };
    // Slider part //
    ChangeDetailsComponent.prototype.initSlider = function () {
        var _this = this;
        this.sliderService.initSlider(this.featureChangesRequest.beginDate, this.featureChangesRequest.endDate, this.featureChangesList, this.changeType);
        this.minValue = this.sliderService.getMinValue();
        this.maxValue = this.sliderService.getMaxValue();
        this.options = this.sliderService.getOptions();
        this.options.getSelectionBarColor = function (minValue, maxValue) {
            return _this.changeType.relatedColor.getRGBA();
        };
        this.displaySlider = true;
    };
    ChangeDetailsComponent.prototype.onUserChangeEnd = function (event) {
        var changesList = [];
        var numberofChangesOld = this.numberOfChangesToDisplay;
        this.featureChangesList.forEach(function (change) {
            var changeTime = new Date(change.timestamp).getTime();
            if (changeTime > event.value && changeTime < event.highValue /*+1000*60*60*24*/) {
                changesList.push(change);
            }
        });
        this.numberOfChangesToDisplay = changesList.length;
        if (numberofChangesOld != this.numberOfChangesToDisplay) {
            console.log(changesList);
            if (changesList.length > 0) {
                this.noChangeInInterval = false;
                this.mainChange = this.mapService.getChangesMergeForOneFeature(JSON.parse(JSON.stringify(changesList)));
                this.setDataToDisplay();
                //refresh the slider to change the color of the bar
                this.manualRefresh.emit();
            }
            else {
                this.noChangeInInterval = true;
            }
        }
    };
    ChangeDetailsComponent.prototype.getColor = function (changeTypeId) {
        var changeType = this.changeTypesList.filter(function (x) { return x.id === changeTypeId; })[0];
        return changeType.relatedColor.getRGBA();
    };
    ChangeDetailsComponent.prototype.onExternalOSMToolSelected = function (tool_name) {
        _paq.push(['trackEvent', 'change-ext_osmtool_selected', tool_name]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangeDetailsComponent.prototype, "selectedFeatures", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChangeDetailsComponent.prototype, "changeTypesList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_model_UserContext__WEBPACK_IMPORTED_MODULE_7__["UserContext"])
    ], ChangeDetailsComponent.prototype, "userContext", void 0);
    ChangeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-change-details',
            template: __webpack_require__(/*! ./change-details.component.html */ "./src/app/changes/change-details/change-details.component.html"),
            styles: [__webpack_require__(/*! ./change-details.component.css */ "./src/app/changes/change-details/change-details.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_api_request_service__WEBPACK_IMPORTED_MODULE_1__["ApiRequestService"],
            app_service_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            app_service_slider_service__WEBPACK_IMPORTED_MODULE_3__["SliderService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]])
    ], ChangeDetailsComponent);
    return ChangeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/changes/changes-config-panel/changes-config-panel.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/changes/changes-config-panel/changes-config-panel.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body{\n    background-clip: border-box;\n    border: 1px solid rgba(0,0,0,.125);\n    background-color: rgba(255,255,255,0.8);\n    border-radius: .25rem;\n    overflow-y: auto;\n    max-height:80vh;\n}\n\nform{\n    margin-bottom: 5px;\n}\n\n.title{\n    font-size:1rem;\n    font-weight: bolder;\n    text-align: center !important;\n    margin:5px;\n}\n\n.invalid-tooltip{\n    position: relative;\n}\n\n#report{\n    border:15px;\n}\n\ntable{\n    width:100%;\n}\n\n.reportTable{\n    font-size: 0.8em;\n    border:2px;\n}\n\n.metadata-circle {\n    cursor:pointer;\n    display: inline-block;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    font-size: 10px;\n    color: #fff;\n    line-height: 12px;\n    text-align: center;\n    background: #CC1517;\n  }\n\n.categorie{\n    padding-left:5px;\n}\n\napp-load-spinner{\n    display: table;\n    margin: 0 auto;\n}\n\n.alert{\n    text-align:center;\n    padding:5px;\n    font-size:80%\n}\n"

/***/ }),

/***/ "./src/app/changes/changes-config-panel/changes-config-panel.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/changes/changes-config-panel/changes-config-panel.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\n  <div>\n    <div class=\"card-header p-2 text-center\" style=\"word-wrap: break-word;\">\n        <b>Rechercher des changements</b>\n    </div>\n    <form [formGroup]=\"changesFilterForm\" class=\"container\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"mydaterange\" style=\"margin-top:5px\">Période de temps</label>\n        <my-date-range-picker id=\"mydaterange\" name=\"mydaterange\" placeholder=\"Dates de début et de fin\"\n          [options]=\"myDateRangePickerOptions\" [selDateRange]=\"model\" formControlName=\"dates\" required></my-date-range-picker>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"thematicSelection\">Thématique</label>\n        <select class=\"custom-select mr-sm-2\" id=\"thematicSelection\" formControlName=\"thematic\" required>\n          <ng-container *ngFor=\"let category of categoryMap | keyvalue\">\n            <option class=\"mb-2 bg-secondary text-white\" disabled>{{category.key}}</option>\n            <ng-container *ngFor=\"let thematic of category.value\">\n              <option value=\"{{thematic.id}}\">{{thematic.name}}</option>\n            </ng-container>\n          </ng-container>\n        </select>\n        <div *ngIf=\"thematic.invalid && (thematic.dirty || thematic.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"thematic.errors.required\">\n            Sélectionnez une thématique\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"zone\">Emprise géographique</label>\n        <div id=\"zone\" style=\"font-size:0.8rem; margin-left:10px;\">\n          Déplacez-vous sur la carte pour sélectionner la zone de recherche\n        </div>\n      </div>\n      <div class=submitButton style=\"text-align:center;padding:5px\">\n        <button type=\"button\" class=\"btn btn-success\" (click)=\"onSubmit()\">Lancer la recherche</button>\n      </div>\n      <div  style=\"font-size:80%;text-align:center;padding:5px\" *ngIf=\"lastChange\">\n        <i>Dernière mise à jour le {{lastChange.toLocaleString('fr-FR', {timeZone: 'UTC'})}}</i>\n      </div>\n      <app-load-spinner *ngIf=\"displayLoadSpinner\"></app-load-spinner>\n    </form>\n\n    <div *ngIf=\"changesList && changesList.length < 1\" class=\"alert alert-danger\" role=\"alert\">\n      Aucun changement n'a été trouvé pour cette requête.\n    </div>\n    <div *ngIf=\"changesList && changesList.length > 0 && !tooMuchResult\" class=\"alert alert-success\" role=\"alert\">\n      {{changesList.length}} résultats ont été trouvés\n    </div>\n    <div *ngIf=\"changesList && tooMuchResult\" class=\"alert alert-warning\">\n      <i class='fa fa-warning' aria-hidden='true'></i>&nbsp;La taille de la réponse ({{responseSizeInMo}} Mo) est importante et  les résultats risquent d'être lourds à afficher.<br>\n      Vous pouvez zoomer pour réduire la zone de recherche ou limiter la plage de dates, puis relancer la recherche ou poursuivre le chargement des données.<br>\n      <button type=\"button\" class=\"btn btn-small btn-success\" (click)=\"showDatas()\">Poursuivre</button>\n    </div>\n    <div *ngIf=\"searchChangesTimedOut\" class=\"alert alert-warning\">\n      <i class='fa fa-warning' aria-hidden='true'></i>&nbsp;La requête a expiré. Il est possible que Le volume de changements soit trop important.<br>\n      Vous pouvez zoomer pour réduire la zone de recherche ou limiter la plage de dates, puis relancer la recherche.<br>\n    </div>\n    <div *ngIf=\"unhandledError\" class=\"alert alert-danger\">\n      <i class='fa fa-danger' aria-hidden='true'></i>&nbsp;Désolé, une erreur s'est produite.<br>\n    </div>\n  </div>\n\n  <div *ngIf=\"displayReport\" id=\"report\" style=\"border-top: 1px solid rgba(253, 159, 159, 0.125);\">\n      <div class=\"card-header p-2 text-center\" style=\"word-wrap: break-word;\">\n          <b>Récapitulatif</b>\n      </div>\n      <div style=\"text-align:center; font-size:0.8em\">\n        Du {{changesRequest.beginDate.toLocaleString('fr-FR', {timeZone: 'UTC'})}}\n         au {{changesRequest.endDate.toLocaleString('fr-FR', {timeZone: 'UTC'})}}\n      </div>\n    <table style=\"border-left : 5px;max-height:100px;\">\n      <tr>\n        <th style=\"padding-left:5px\">Catégorie</th>\n        <th style=\"text-align:center;\">Nombre d'entités</th>\n      </tr>\n      <tr *ngFor=\"let type of reportInfos | keyvalue\" class=\"reportTable\">\n        <td class=\"categorie\">\n            <a>{{type.key.short_name}}</a>\n            <span [routerLink]=\"['/changements-aide']\" fragment=\"{{type.key.ref}}\" class=\"metadata-circle\" title=\"Description sur la page d'aide\"><b>?</b></span>\n        </td>\n        <td style=\"text-align:center\">{{type.value}}</td>\n      </tr>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/changes/changes-config-panel/changes-config-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/changes/changes-config-panel/changes-config-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangesConfigPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesConfigPanelComponent", function() { return ChangesConfigPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var app_model_ChangesClasses_ChangesRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/ChangesClasses/ChangesRequest */ "./src/app/model/ChangesClasses/ChangesRequest.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _service_api_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/api-request.service */ "./src/app/service/api-request.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ChangesConfigPanelComponent = /** @class */ (function () {
    function ChangesConfigPanelComponent(http, mapService, apiRequestService) {
        this.http = http;
        this.mapService = mapService;
        this.apiRequestService = apiRequestService;
        this.criteriaFilter = {};
        this.categoryMap = new Map();
        this.changesRequest = new app_model_ChangesClasses_ChangesRequest__WEBPACK_IMPORTED_MODULE_2__["ChangesRequest"]();
        this.displayReport = false;
        this.displayLoadSpinner = false;
        //to ask confirmation to user before showing results
        this.tooMuchResult = false;
        //searchChanges timeout on huge requests
        this.searchChangesTimeoutValue = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].searchChangesTimeoutValue;
        this.searchChangesTimedOut = false;
        this.unhandledError = false;
        //report
        this.reportInfos = new Map();
    }
    ChangesConfigPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiRequestService.getLastChange().subscribe(function (data) {
            _this.lastChange = JSON.parse(data['_body']);
            _this.lastChange = new Date(_this.lastChange.timestamp);
        });
        this.apiRequestService.searchThematics().subscribe(function (data) {
            _this.thematicsList = JSON.parse(data['_body']);
            console.log(_this.thematicsList);
            // Group thematics by category to display them
            _this.thematicsList.forEach(function (thematic) {
                var value = _this.categoryMap.has(thematic.category.name);
                if (value) {
                    _this.categoryMap.get(thematic.category.name).push(thematic);
                }
                else {
                    _this.categoryMap.set(thematic.category.name, [thematic]);
                }
            });
            console.log(_this.categoryMap);
        });
        var date = new Date();
        this.initDateForm(date);
        this.initForm();
    };
    ChangesConfigPanelComponent.prototype.ngAfterViewInit = function () {
        var dropdownMenu = $('#mydatepicker');
        //   // detach it and append it to the body
        $('body').append(dropdownMenu.detach());
    };
    ChangesConfigPanelComponent.prototype.onSubmit = function () {
        if (this.formValidation()) {
            this.searchChangesTimedOut = false;
            this.unhandledError = false;
            this.clearResults();
            this.getChangesRequestValues();
            console.log(this.selectedThematic);
            this.changesRequest.bbox = this.mapService.getBoundingBox();
            console.log(this.changesRequest);
            this.emitChanges(this.changesRequest);
        }
    };
    ChangesConfigPanelComponent.prototype.showDatas = function () {
        this.tooMuchResult = false;
        this.mapService.addChanges(this.changesList);
        this.initReport();
    };
    ChangesConfigPanelComponent.prototype.emitChanges = function (changesRequest) {
        var _this = this;
        this.displayLoadSpinner = true;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post,
            headers: headers
        });
        var data = JSON.stringify(changesRequest);
        console.log(data);
        this.apiRequestService.beginDate = this.changesRequest.beginDate;
        this.apiRequestService.endDate = this.changesRequest.endDate;
        this.apiRequestService.thematic = this.selectedThematic;
        this.apiRequestService.searchChanges(data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["timeout"])(this.searchChangesTimeoutValue))
            .subscribe(function (res) {
            console.log(res['_body'].length / (1024 * 1024) + " Mo");
            _this.responseSizeInMo = Number((res['_body'].length / (1024 * 1024)).toFixed(2));
            _this.displayLoadSpinner = false;
            _this.changesList = JSON.parse(res['_body']);
            console.log(_this.changesList);
            if (_this.responseSizeInMo < config.MAX_RESPONSE_SIZE_WITHOUT_WARNING_IN_MO) {
                _this.mapService.addChanges(_this.changesList);
                _this.tooMuchResult = false;
            }
            else {
                _this.tooMuchResult = true;
            }
            if (_this.changesList.length < 1 || _this.tooMuchResult) {
                _this.displayReport = false;
            }
            else {
                _this.initReport();
            }
            ;
            _paq.push(['trackEvent', 'change-thematic_search', _this.selectedThematic.viewName]);
        }, function (err) {
            console.log(err);
            _this.displayLoadSpinner = false;
            if (err.name == "TimeoutError") {
                _this.searchChangesTimedOut = true;
                _paq.push(['trackEvent', 'change-thematic_search-timeout', _this.selectedThematic.viewName]);
            }
            else {
                _paq.push(['trackEvent', 'change-thematic_search-unhandledError', _this.selectedThematic.viewName]);
                _this.unhandledError = true;
            }
        });
    };
    ChangesConfigPanelComponent.prototype.getChangesRequestValues = function () {
        var _this = this;
        this.changesRequest.thematic = this.changesFilterForm.controls.thematic.value;
        this.selectedThematic = this.thematicsList.filter(function (x) { return x.id === Number(_this.changesRequest.thematic); })[0];
        //To have the time in UTC and not with the local timezone.
        var iMyBeginDate = this.changesFilterForm.controls.dates.value.beginDate;
        var beginDate = new Date(Date.UTC(iMyBeginDate.year, iMyBeginDate.month - 1, iMyBeginDate.day));
        var iMyEndDate = this.changesFilterForm.controls.dates.value.endDate;
        var endDate = new Date(Date.UTC(iMyEndDate.year, iMyEndDate.month - 1, iMyEndDate.day));
        endDate.setUTCSeconds(endDate.getUTCSeconds() - 1);
        this.changesRequest.beginDate = beginDate;
        this.changesRequest.endDate = endDate;
    };
    ChangesConfigPanelComponent.prototype.initForm = function () {
        this.changesFilterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            'thematic': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](15, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            'dates': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.model, []),
        });
    };
    Object.defineProperty(ChangesConfigPanelComponent.prototype, "thematic", {
        get: function () { return this.changesFilterForm.get('thematic'); },
        enumerable: true,
        configurable: true
    });
    ChangesConfigPanelComponent.prototype.initDateForm = function (today) {
        var disableUntil = new Date(new Date().setDate(today.getDate() - 1 - config.DAYS_INTERVAL_FOR_CHANGES_MONITORING));
        var twoWeeksBefore = new Date(new Date().setDate(today.getDate() - 14));
        this.myDateRangePickerOptions = {
            // options du composant pour les deux dates
            dayLabels: { su: "Dim", mo: "Lun", tu: "Mar", we: "Mer", th: "Jeu", fr: "Ven", sa: "Sam" },
            monthLabels: { 1: "Jan", 2: "Fév", 3: "Mar", 4: "Avr", 5: "Mai", 6: "Juin", 7: "Juil", 8: "Aoû", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Déc" },
            disableSince: {
                year: today.getFullYear(),
                month: today.getMonth() + 1,
                day: today.getDate() + 1
            },
            disableUntil: {
                year: disableUntil.getFullYear(),
                month: disableUntil.getMonth() + 1,
                day: disableUntil.getDate()
            },
            dateFormat: "dd/mm/yyyy",
            selectBeginDateTxt: "Choisir la date de début",
            selectEndDateTxt: "Choisir la date de fin",
            editableDateRangeField: false,
            openSelectorOnInputClick: true,
            width: '100%',
        };
        var td = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate(),
        };
        var twoWksBefore = {
            year: twoWeeksBefore.getFullYear(),
            month: twoWeeksBefore.getMonth() + 1,
            day: twoWeeksBefore.getDate(),
        };
        this.model = { endDate: td, beginDate: twoWksBefore };
    };
    ChangesConfigPanelComponent.prototype.initReport = function () {
        this.reportInfos = this.mapService.numberOfChangeByType;
        this.displayReport = true;
    };
    ChangesConfigPanelComponent.prototype.clearResults = function () {
        this.reportInfos = new Map();
        this.displayReport = false;
        this.changesList = undefined;
        this.mapService.addChanges([]);
    };
    ChangesConfigPanelComponent.prototype.formValidation = function () {
        if (this.changesFilterForm.controls.thematic.value == null) {
            alert('Renseignez une thématique !');
            return false;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChangesConfigPanelComponent.prototype, "changeTypesList", void 0);
    ChangesConfigPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes-config-panel',
            template: __webpack_require__(/*! ./changes-config-panel.component.html */ "./src/app/changes/changes-config-panel/changes-config-panel.component.html"),
            styles: [__webpack_require__(/*! ./changes-config-panel.component.css */ "./src/app/changes/changes-config-panel/changes-config-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _service_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _service_api_request_service__WEBPACK_IMPORTED_MODULE_4__["ApiRequestService"]])
    ], ChangesConfigPanelComponent);
    return ChangesConfigPanelComponent;
}());



/***/ }),

/***/ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/changes/changes-detailled-map/changes-detailled-map.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n\twidth: 97%;\n\tmargin: 2px auto 5px auto;\n\tbackground-clip: border-box;\n\tborder: 1px solid rgba(0,0,0,.125);\n\tborder-radius: .25rem;\n\toverflow: auto;\n}\n\n#detailled-map {\n\theight: 300px;\n\tbackground-color: rgba(255,255,255,1);\n}\n\n.cercle {\n\twidth: 12px;\n\theight: 12px;\n\tborder-radius: 50%;\n\tmargin-left:5px;\n\tmargin-right:20px;\n  }\n\ntable{\n\ttext-align:center;\n\tposition:relative;\n\tmargin-left:auto;\n\tmargin-right:auto;\n  }"

/***/ }),

/***/ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/changes/changes-detailled-map/changes-detailled-map.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\n    <div id=\"detailled-map\"></div>\n    <div *ngIf=\"layer\" id=\"legend\">\n        <table>\n            <ng-container *ngFor=\"let feature of layer.getSource().getFeatures()\">\n                <td>{{feature.get('label')}}</td>\n                <td>\n                    <div class=\"cercle\" [ngStyle]=\"{'background-color':feature.get('color')}\"></div>\n                </td>\n            </ng-container>\n        </table>\n    </div>\n</div>\n<!-- <div id=\"length\">Distance moyenne de déplacement : </div> -->"

/***/ }),

/***/ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/changes/changes-detailled-map/changes-detailled-map.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChangesDetailledMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesDetailledMapComponent", function() { return ChangesDetailledMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_model_ChangesClasses_Change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/ChangesClasses/Change */ "./src/app/model/ChangesClasses/Change.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangesDetailledMapComponent = /** @class */ (function () {
    function ChangesDetailledMapComponent(mapService) {
        this.mapService = mapService;
        //To prevent ngOnChanges before ngOnInit
        this.initialized = false;
    }
    ChangesDetailledMapComponent.prototype.ngOnInit = function () {
        this.initMap();
        this.initLayer();
        this.updateMap();
        this.initialized = true;
    };
    ChangesDetailledMapComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.initialized) {
            this.updateMap();
        }
    };
    ChangesDetailledMapComponent.prototype.initMap = function () {
        var center = [this.userContext.lon, this.userContext.lat];
        this.view = new ol.View({
            projection: 'EPSG:3857',
            center: ol.proj.transform(center, 'EPSG:4326', 'EPSG:3857'),
            zoom: 14,
            minZoom: 3,
        });
        //Map creation
        this.map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).extend([
                new ol.control.ScaleLine(),
                new ol.control.FullScreen({ tipLabel: "Mode plein-écran" }),
            ]),
            target: 'detailled-map',
            view: this.view,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    projection: 'EPSG:3857',
                    opacity: 0.5
                })
            ]
        });
    };
    ChangesDetailledMapComponent.prototype.updateMap = function () {
        this.updateLayer();
        var extent = this.layer.getSource().getExtent();
        this.map.getView().fit(extent, { size: this.map.getSize(), maxZoom: 19 });
    };
    ChangesDetailledMapComponent.prototype.updateLayer = function () {
        var self = this;
        var features = [];
        this.layer.getSource().clear();
        if (this.mainChange.theGeomOld != null && this.mainChange.changeType != 3) {
            var oldFeature = (new ol.format.GeoJSON()).readFeature(this.mainChange.theGeomOld);
            oldFeature.setStyle(function (feature, resolution) {
                return self.mapService.mainStyleFunction(feature, resolution, false, 6, true);
            });
            oldFeature.set('label', 'Ancienne géométrie');
            oldFeature.set('color', this.changeTypesList.filter(function (x) { return x.id === 6; })[0].relatedColor.getRGBA());
            features.push(oldFeature);
        }
        if (this.mainChange.theGeomNew != null) {
            self = this;
            var changeId_1 = (self.mainChange.changeType == 3) ? 3 : 1;
            var newFeature = (new ol.format.GeoJSON()).readFeature(this.mainChange.theGeomNew);
            newFeature.setStyle(function (feature, resolution) {
                return self.mapService.mainStyleFunction(feature, resolution, false, changeId_1, true);
            });
            features.push(newFeature);
            newFeature.set('color', this.changeTypesList.filter(function (x) { return x.id === changeId_1; })[0].relatedColor.getRGBA());
            newFeature.set('label', (changeId_1 == 3) ? "Géométrie de l'objet" : 'Nouvelle géométrie');
        }
        this.layer.getSource().addFeatures(features);
    };
    ChangesDetailledMapComponent.prototype.initLayer = function () {
        this.layer = new ol.layer.Vector({
            source: new ol.source.Vector({ attributions: [
                    new ol.Attribution({
                        html: '' +
                            '<a href="http://magosm.magellium.com/">© Magellium</a>'
                    })
                ]
            }),
        });
        this.map.addLayer(this.layer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"])
    ], ChangesDetailledMapComponent.prototype, "userContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", app_model_ChangesClasses_Change__WEBPACK_IMPORTED_MODULE_3__["Change"])
    ], ChangesDetailledMapComponent.prototype, "mainChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChangesDetailledMapComponent.prototype, "changeTypesList", void 0);
    ChangesDetailledMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes-detailled-map',
            template: __webpack_require__(/*! ./changes-detailled-map.component.html */ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.html"),
            styles: [__webpack_require__(/*! ./changes-detailled-map.component.css */ "./src/app/changes/changes-detailled-map/changes-detailled-map.component.css")]
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"]])
    ], ChangesDetailledMapComponent);
    return ChangesDetailledMapComponent;
}());



/***/ }),

/***/ "./src/app/changes/changes-main/changes-main.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/changes/changes-main/changes-main.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#panel-config{\n        position: absolute;\n        top: 120px;\n        z-index: 2;\n        left: 0px;\n        width: 20%;\n        min-width: 200px;\n        /* overflow: hidden;\n        overflow-y: hidden; */\n}\n\n@media (max-width:800px){\n    #panel-config{\n        position: absolute;\n        top: 50px;\n    }\n}\n\napp-permalink {\n    position: absolute;\n    top: 12px;\n    left: 350px;\n}\n\n#help {\n    position: absolute;\n    top: 12px;\n    left: 350px;\n\n  }\n\n#report-bug{\n      position : absolute;\n      top : 12px;\n      left : 425px;\n\n  }\n\n:host > div > div > div > span > a {\n    color: #CC1517;\n  }"

/***/ }),

/***/ "./src/app/changes/changes-main/changes-main.component.html":
/*!******************************************************************!*\
  !*** ./src/app/changes/changes-main/changes-main.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"userContext\" class=\"container-fluid\" style=\"overflow-x:hidden;\">\n    <div>\n        <div id=\"panel-config\">\n        <app-changes-config-panel [changeTypesList]=\"changeTypesList\"></app-changes-config-panel>\n        </div>\n    </div>\n    <div *ngIf=\"userContext!=null\" class=\"row\">\n        <div class=\"map\">\n            <app-header></app-header>\n            <app-changes-map [userContext]=\"userContext\"></app-changes-map>\n            <span id=\"help\" class=\"d-none d-md-block\">\n                    <a [routerLink]=\"['/changements-aide']\" target=\"_blank\">{{ 'change_config.help' | translate }}</a>\n            </span>\n            <span id=\"report-bug\" class=\"d-none d-md-block\">-\n                <a href=\"https://gitlab.com/g2600/ch-osm\" target=\"_blank\">{{ 'main.bug' | translate }}</a>\n            </span>\n            \n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/changes/changes-main/changes-main.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/changes/changes-main/changes-main.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangesMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesMainComponent", function() { return ChangesMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_service_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/api-request.service */ "./src/app/service/api-request.service.ts");
/* harmony import */ var app_service_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var app_service_user_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/user-context.service */ "./src/app/service/user-context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangesMainComponent = /** @class */ (function () {
    function ChangesMainComponent(mapService, apiRequestService, configService, userContextService) {
        this.mapService = mapService;
        this.apiRequestService = apiRequestService;
        this.configService = configService;
        this.userContextService = userContextService;
        this.jsonContextLoaded = false;
        this.loadConfigAndUserContext();
    }
    ChangesMainComponent.prototype.ngOnInit = function () {
        //this.loadConfigAndUserContext();
    };
    ChangesMainComponent.prototype.loadConfigAndUserContext = function () {
        var _this = this;
        var self = this;
        this.configService.getConfig()
            .subscribe(function (resp) {
            window["config"] = resp;
            // on charge le  contexte utilisateur
            // self.userContext = this.userContextService.loadUserContextFromPermalink();
            _this.userContextService.setContext().subscribe({
                next: function (val) {
                    self.userContext = val;
                }
            });
        });
    };
    ChangesMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes-main',
            template: __webpack_require__(/*! ./changes-main.component.html */ "./src/app/changes/changes-main/changes-main.component.html"),
            styles: [__webpack_require__(/*! ./changes-main.component.css */ "./src/app/changes/changes-main/changes-main.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            app_service_api_request_service__WEBPACK_IMPORTED_MODULE_2__["ApiRequestService"],
            app_service_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"],
            app_service_user_context_service__WEBPACK_IMPORTED_MODULE_4__["UserContextService"]])
    ], ChangesMainComponent);
    return ChangesMainComponent;
}());



/***/ }),

/***/ "./src/app/changes/changes-map/changes-map.component.css":
/*!***************************************************************!*\
  !*** ./src/app/changes/changes-map/changes-map.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n\theight: 100vh;\n\twidth: 100vw;\n}\n\n#mouse-position-2, #layername, #layerswitcher {\n\tpadding: 1px 5px;\n\tborder-radius: 3px;\n\tdisplay: inline-block;\n\tcolor: #444;\n\tbackground: rgba(255, 255, 255, 0.6);\n}\n\n#mouse-position-2{\n\tposition:absolute;\n\tleft: 165px;\n\tbottom: 10px;\n\tfont-size: 0.7em;\n}\n\n#layerswitcher {\n\tposition:absolute;\n\tright:5px;\n\ttop:5px;\n\tline-height:1.2;\n}\n\n.panelSwitcherLayerName{\n\tpadding-left:5px; \n\tfont-size:0.8em;\n}\n\nb.cercle {\n  display: block;\n  width: 12px;\n  height: 12px;\n  margin: 2px auto;\n  border-radius: 50%;\n}\n\napp-apiadresse{\n\tposition:absolute;\n\ttop:10px;\n\tleft:160px;\n}\n\n#featureDetailsPanel{\n\tposition:absolute;\n\tright:0px;\n\ttop:0px;\n\twidth: 500px;\n\theight: 100vh;\n}\n"

/***/ }),

/***/ "./src/app/changes/changes-map/changes-map.component.html":
/*!****************************************************************!*\
  !*** ./src/app/changes/changes-map/changes-map.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative\">\n    <div id=\"map\" class=\"map\"></div>\n    <app-apiadresse (citySelected)=\"onCitySelected($event)\"></app-apiadresse>\n    <div id=\"mouse-position-2\"></div>\n    <app-change-details \n        id=\"featureDetailsPanel\"\n        *ngIf=\"selectedFeatures && selectedFeatures.length > 0\" \n        [selectedFeatures]=\"selectedFeatures\"\n        [changeTypesList]=\"changeTypesList\"\n        [userContext]=\"userContext\">\n    </app-change-details>\n    <div *ngIf=\"layerswitcherdisplay\" id=\"layerswitcher\">\n            <div class=\"card-header p-2 text-center\" style=\"word-wrap: break-word;\">\n                <b style=\"margin-left:10px\">{{ 'change_config.legende' | translate }}</b>\n            </div>\n        <table>\n            <tr>\n                <td>\n                    <input type=\"checkbox\" id=\"selectAll\" name=\"selectAll\" (click)=\"onSelectAll($event)\" checked>\n                    <label class=\"panelSwitcherLayerName\">{{ 'change_config.select' | translate }}</label>\n                </td>\n            </tr>\n            <tr *ngFor=\"let changetype of changeTypesList\">\n                <td>\n                    <input type=\"checkbox\" id=\"{{changetype.id}}\" name=\"layer\" (click)=\"onSelect(changetype.id)\" checked>\n                    <label class=\"panelSwitcherLayerName\">{{changetype.short_name}}</label>\n                </td>\n                <td>\n                    <a [routerLink]=\"['/changements-aide']\" fragment=\"{{changetype.ref}}\" target=\"_blank\" style=\"cursor:pointer;\"\n                     title=\"Voir + sur la page d'aide\">\n                    <b class=\"cercle\" [ngStyle]=\"{'background-color': changetype.relatedColor.getRGBA()}\"></b>\n                    </a>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <input type=\"checkbox\" id=\"heatMap\" name=\"heatMap\" (click)=\"onSelect('heatMap')\" checked>\n                    <label class=\"panelSwitcherLayerName\">{{ 'change_config.heatmap' | translate }}</label>\n                </td>\n                <td>\n                    <b class=\"cercle\" style=\"background: linear-gradient(0.25turn,#00f, #0ff, #0f0, #ff0, #f00);\"></b>\n                </td>\n            </tr>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/changes/changes-map/changes-map.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/changes/changes-map/changes-map.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangesMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesMapComponent", function() { return ChangesMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _service_user_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user-context.service */ "./src/app/service/user-context.service.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/service/config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var app_service_api_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/service/api-request.service */ "./src/app/service/api-request.service.ts");
/* harmony import */ var app_model_ChangesClasses_ChangeType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/model/ChangesClasses/ChangeType */ "./src/app/model/ChangesClasses/ChangeType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangesMapComponent = /** @class */ (function () {
    function ChangesMapComponent(mapService, userContextService, configService, apiRequestService) {
        this.mapService = mapService;
        this.userContextService = userContextService;
        this.configService = configService;
        this.apiRequestService = apiRequestService;
        this.layerswitcherdisplay = true;
        $("#selectAll").click(function () {
            $("input[type=checkbox]").prop('checked', $(this).prop('checked'));
        });
    }
    ChangesMapComponent.prototype.ngOnInit = function () {
        console.log("Init Map !");
        this.initMap();
    };
    ChangesMapComponent.prototype.initMap = function () {
        var _this = this;
        var mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: function (coords) {
                return ol.coordinate.format(coords, 'Lat : {y}° Lon : {x}° (WGS84)', 4);
            },
            projection: 'EPSG:4326',
            className: 'custom-mouse-position-2',
            target: document.getElementById('mouse-position-2'),
            undefinedHTML: '&nbsp;'
        });
        var center;
        if (this.userContext) {
            center = [this.userContext.lon, this.userContext.lat];
        }
        this.view = new ol.View({
            projection: 'EPSG:3857',
            center: center ? ol.proj.transform(center, 'EPSG:4326', 'EPSG:3857') : null,
            zoom: this.userContext.z,
        });
        //Map creation
        this.map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).extend([
                mousePositionControl,
                new ol.control.ScaleLine(),
            ]),
            target: 'map',
            view: this.view,
        });
        this.mapService.setMap(this.map, this.userContext);
        this.apiRequestService.searchChangeTypes().subscribe(function (data) {
            var array = JSON.parse(data['_body']);
            _this.changeTypesList = array.map(function (element) { return new app_model_ChangesClasses_ChangeType__WEBPACK_IMPORTED_MODULE_6__["ChangeType"](element); });
            _this.changeTypesList.sort(function (a, b) { return a.id - b.id; });
            console.log(_this.changeTypesList);
            _this.mapService.initLayers(_this.changeTypesList);
            _this.mapService.initHeatMap();
            _this.mapService.initInteractions();
            _this.layersArray = _this.mapService.changesLayersArray;
        });
        //// Pour ajouter de la surbrillance au passage de la souris et au clic sur un objet
        //// Désactivé car ralentit très fortement lorsqu'il y a beaucoup d'objets (> 500)
        var self = this;
        // var selectPointerMove = new ol.interaction.Select({
        //   condition: ol.events.condition.pointerMove,
        //   style : function(feature,resolution){
        //     return self.mapService.mainStyleFunction(feature, resolution, true);},
        //   hitTolerance : 2,
        //   filter: function(feature, layer){return self.heatMapFilter (layer);}
        // })
        // this.map.addInteraction(selectPointerMove);
        // Au passage de la souris, change le curseur
        this.map.on('pointermove', this.onPointerMove.bind(this));
        // Au clic sur un objet
        this.map.on('click', this.onClick.bind(this));
    };
    ChangesMapComponent.prototype.onPointerMove = function (e) {
        if (e.dragging)
            return; // si il y a déplacement de la carte, on arrête
        var pixel = this.map.getEventPixel(e.originalEvent);
        var hit = this.map.hasFeatureAtPixel(pixel, { hitTolerance: 2, layerFilter: this.mapService.heatMapFilter }); // on vérifie si il y a un objet à l'endroit de l'événement
        this.map.getTargetElement().style.cursor = hit ? 'pointer' : ''; // si besoin, on change le curseur
    };
    ChangesMapComponent.prototype.onClick = function (event) {
        this.mapService.clearSelection();
        this.selectedFeatures = new Array();
        var pixel = this.map.getEventPixel(event.originalEvent);
        var hit = this.map.hasFeatureAtPixel(pixel, { hitTolerance: 2, layerFilter: this.mapService.heatMapFilter });
        if (hit) {
            this.selectedFeatures = this.map.getFeaturesAtPixel(pixel, { hitTolerance: 2, layerFilter: this.mapService.heatMapFilter });
            console.log(this.selectedFeatures);
        }
    };
    // Actions pour la légende //
    ChangesMapComponent.prototype.onSelect = function (id) {
        var elem = document.getElementById(id);
        var isChecked = elem.checked;
        if (id != "heatMap") {
            var layer = this.mapService.changesLayersArray.filter(function (x) { return x.get('id') === Number(id); })[0];
            layer.setVisible(isChecked);
            this.mapService.refreshHeatMap();
        }
        else {
            this.mapService.heatMapLayer.setVisible(isChecked);
        }
    };
    ChangesMapComponent.prototype.onSelectAll = function (event) {
        var _this = this;
        var isChecked = event.target.checked;
        var checkboxes = document.getElementsByName("layer");
        Array.from(checkboxes).forEach(function (checkbox) {
            if (checkbox.checked != isChecked) {
                checkbox.checked = isChecked;
                _this.onSelect(checkbox.id);
            }
        });
    };
    // Recherche de lieux //
    ChangesMapComponent.prototype.onCitySelected = function (city) {
        if (city.geometry) {
            // on calcule le zoom pour l'adapter au résultat de la recherche en fonction du type d'objet trouvé :
            // type : (housenumber | street  | locality | municipality)
            var zoomlevel = 14;
            var type = city.properties.type;
            if (type == 'housenumber') {
                zoomlevel = 19;
            }
            else if (type == 'street') {
                zoomlevel = 16;
            }
            else if (type == 'locality') {
                zoomlevel = 16;
            }
            else if (type == 'municipality') {
                zoomlevel = 14;
            }
            ;
            // On fait le zoom
            this.zoomTo(city.geometry.coordinates, zoomlevel);
        }
    };
    ChangesMapComponent.prototype.zoomTo = function (location, zoomlevel) {
        this.map.getView().setCenter(ol.proj.transform(location, 'EPSG:4326', config.PROJECTION_CODE), 16);
        this.map.getView().setZoom(zoomlevel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChangesMapComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userContext'),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_1__["UserContext"])
    ], ChangesMapComponent.prototype, "userContext", void 0);
    ChangesMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes-map',
            template: __webpack_require__(/*! ./changes-map.component.html */ "./src/app/changes/changes-map/changes-map.component.html"),
            styles: [__webpack_require__(/*! ./changes-map.component.css */ "./src/app/changes/changes-map/changes-map.component.css")]
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _service_user_context_service__WEBPACK_IMPORTED_MODULE_2__["UserContextService"],
            app_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            app_service_api_request_service__WEBPACK_IMPORTED_MODULE_5__["ApiRequestService"]])
    ], ChangesMapComponent);
    return ChangesMapComponent;
}());



/***/ }),

/***/ "./src/app/common/directive/draggable.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/directive/draggable.directive.ts ***!
  \*********************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(elementRef, zone) {
        this.elementRef = elementRef;
        this.zone = zone;
        this.doubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delta = { x: 0, y: 0 };
        this.offset = { x: 0, y: 0 };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DraggableDirective.prototype.ngAfterViewInit = function () {
        this.handle = this.dragHandle ? document.querySelector(this.dragHandle) :
            this.elementRef.nativeElement;
        this.handle.style.cursor = "move";
        this.target = document.querySelector(this.dragTarget);
        this.setupEvents();
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    DraggableDirective.prototype.setupEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(_this.handle, 'mousedown');
            var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mousemove');
            var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'mouseup');
            var mouseclick$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'click');
            var mousedrag$ = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (event) {
                var startX = event.clientX;
                var startY = event.clientY;
                return mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) {
                    event.preventDefault();
                    _this.delta = {
                        x: event.clientX - startX,
                        y: event.clientY - startY
                    };
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(mouseup$));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroy$));
            mouseclick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["buffer"])(mouseclick$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) { return list.length; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return x === 2; })).subscribe(function () {
                _this.doubleClick.emit();
            });
            mousedrag$.subscribe(function () {
                if (_this.delta.x === 0 && _this.delta.y === 0) {
                    return;
                }
                _this.translate();
            });
            mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.destroy$)).subscribe(function () {
                _this.offset.x += _this.delta.x;
                _this.offset.y += _this.delta.y;
                _this.delta = { x: 0, y: 0 };
            });
        });
    };
    DraggableDirective.prototype.translate = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.target.style.transform = "\n        translate(" + (_this.offset.x + _this.delta.x) + "px,\n                  " + (_this.offset.y + _this.delta.y) + "px)\n      ";
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DraggableDirective.prototype, "dragHandle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DraggableDirective.prototype, "dragTarget", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DraggableDirective.prototype, "doubleClick", void 0);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[draggable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/feature-panel-components/feature-main-info/feature-main-info.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main_info_container{\n    padding-top:0px;\n    padding-bottom:5px;\n    padding-left:5px;\n    display:flex;\n    height:auto;\n}\n  \n#high{\n    font-size:1.1em;\n    font-weight:bold;\n}\n  \n#medium{\n    font-size:1.0em;\n}\n  \n#low{\n    font-size:0.9em;\n}\n  \n#no{\n    font-size:0.8em;\n}\n  \n#addr{\n    font-size:0.8em;  \n    font-weight: bold;\n}\n  \n#writed_info{\n    width:70%;\n    -webkit-hyphens: auto;\n    -ms-hyphens: auto;\n    -o-hyphens: auto;\n    hyphens: auto;\n}\n  \n#external_links{\n    width:30%;\n    text-align: right;\n    display:flex;\n    flex-direction: column;\n    height:auto;\n    margin:5px 8px 5px 0px;\n    font-size:0.9em;\n}"

/***/ }),

/***/ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/feature-panel-components/feature-main-info/feature-main-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main_info_container\">\n  <div id=writed_info>\n    <!-- Display all the info about the feature-->\n    <div *ngIf=\"featureImportantTagsList.isEmpty() == false; else nothingToDisplay\"><!-- If there is something to display -->\n      <div *ngFor=\"let featureImportantTags of featureImportantTagsList.list\">\n        <div id={{featureImportantTags.importance}}> <!-- high, medium, low, no -->\n          <div *ngFor=\"let keyLabelObject of featureImportantTags.tagList.list\">             \n            <div [ngSwitch]=\"keyLabelObject.key\">\n              <div *ngSwitchCase=\"'phone'\"><a target=\"_blank\" href=\"tel:{{selectedFeature.get(keyLabelObject.key)}}\" title=\"Appeler le numéro\">{{selectedFeature.get(keyLabelObject.key)}}</a></div> \n              <div *ngSwitchCase=\"'website'\"><a target=\"_blank\" href=\"{{selectedFeature.get(keyLabelObject.key)}}\" title=\"Consulter le site web\">{{ 'feature.website' | translate }}</a></div>\n              <div *ngSwitchCase=\"'email'\"><a target=\"_blank\" href=\"mailto:{{selectedFeature.get(keyLabelObject.key)}}\" title=\"Envoyer un mail\">{{ 'feature.email' | translate }}</a></div>\n              <div *ngSwitchDefault>\n                <a *ngIf=\"!keyLabelObject.key.startsWith('addr')\">\n                  <span *ngIf=\"keyLabelObject.label!=null\"><u>{{keyLabelObject.label}} :</u> </span> {{selectedFeature.get(keyLabelObject.key)}}\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <span id=\"addr\"> <!-- Special display for the adress : see method getAddr()-->\n        <span *ngFor=\"let addr of addrString;index as i;\">\n            <span>{{selectedFeature.get(addr)}} </span>\n            <a *ngIf=\"i%2==1\"><br></a> <!-- To display exactly 2 infos on the same line -->\n        </span>\n      </span>\n    </div>\n    <ng-template #nothingToDisplay><!-- If there is nothing to display -->\n      <a><i>{{ 'feature.noinfo' | translate }} {{selectedFeature.get(\"osm_id\")}}</i></a>\n    </ng-template>\n  </div>\n  <div id=external_links> <!-- Tags related to external links (do NOT write them in config) like Wikipedia, national databases, ... -->\n    <!--Logo OSM -->\n    <span *ngIf=\"selectedFeature.get('osm_id')>0, else id_negatif\"><a class=\"logo_OSM\" target=\"_blank\" href=\"http://www.openstreetmap.org/{{osm_type}}/{{selectedFeature.get('osm_id')}}\" title=\"Voir l'objet sur openstreetmap.org\"><img src=\"assets/images/osm_logo_25px.png\"></a></span>\n    <ng-template #id_negatif><a class=\"logo_OSM\" target=\"_blank\" href=\"http://www.openstreetmap.org/relation/{{selectedFeature.get('osm_id')*-1}}\" title=\"Voir l'objet sur openstreetmap.org\"><img src=\"assets/images/osm_logo_25px.png\"></a></ng-template>\n    <span *ngFor=\"let k of keys\" title=\"Voir la base de données relative à l'objet et à sa couche\">\n      <span *ngIf=\"k == 'wikipedia'\"><a target=\"_blank\" href=\"https://fr.wikipedia.org/wiki/{{selectedFeature.get(k)}}\" title=\"Voir l'objet sur Wikipedia\"><img src=\"assets/images/wikipedia_50_39px.png\"></a><br></span>\n      <span *ngIf=\"k == 'wikidata'\"><a target=\"_blank\" href=\"https://www.wikidata.org/wiki/{{selectedFeature.get(k)}}\" title=\"Voir l'objet sur Wikidata\"><img src=\"assets/images/wikidata_50_35px.png\"></a><br></span>\n      <span *ngIf=\"k == 'ref-FR-FINESS'\"><a target=\"_blank\" href=\"http://finess.sante.gouv.fr/fininter/jsp/actionRechercheAvancee.do?noFiness={{selectedFeature.get(k)}}\">Base nationale FINESS</a><br></span>\n      <span *ngIf=\"k == 'ref-UAI'\"><a target=\"_blank\" href=\"https://www.education.gouv.fr/pid24302/annuaire-resultat-recherche.html?lycee_name={{selectedFeature.get(k)}}\">Education Nationale</a><br></span>\n      <span *ngIf=\"k == 'ref-FR-GendarmerieNationale'\"><a target=\"_blank\" href=\"https://www.data.gouv.fr/fr/datasets/liste-des-unites-de-gendarmerie-accueillant-du-public-comprenant-leur-geolocalisation-et-leurs-horaires-douverture/\">Base sur data.gouv.fr</a><br></span>\n      <span *ngIf=\"k == 'ref-FR-RATP'\"><a target=\"_blank\" href=\"https://data.ratp.fr\">data.ratp.fr</a><br></span>\n      <span *ngIf=\"k == 'ref-mhs'\"><a target=\"_blank\" href=\"http://www2.culture.gouv.fr/public/mistral/dapamer_fr?ACTION=NOUVEAU\">Base Mérimée</a><br></span>\n      <span *ngIf=\"k == 'twitter'\"><a target=\"_blank\" href=\"https://www.twitter.com/{{selectedFeature.get(k)}}\" title=\"Lien vers le compte Twitter\">@{{selectedFeature.get(k)}}</a><br></span>\n    </span>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/feature-panel-components/feature-main-info/feature-main-info.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeatureMainInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureMainInfoComponent", function() { return FeatureMainInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_FeatureMainInfoClasses_FeatureImportantTagsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/FeatureMainInfoClasses/FeatureImportantTagsList */ "./src/app/model/FeatureMainInfoClasses/FeatureImportantTagsList.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureMainInfoComponent = /** @class */ (function () {
    function FeatureMainInfoComponent() {
    }
    FeatureMainInfoComponent.prototype.ngOnInit = function () {
    };
    FeatureMainInfoComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.updateKeysAndLabels(this.selectedFeature, this.selectedLayer);
    };
    //Couple key/label for each level of importance, one feature, and one layer
    FeatureMainInfoComponent.prototype.getKeyAndLabelForAllLevelsOfImportance = function (feature, layer) {
        return new _model_FeatureMainInfoClasses_FeatureImportantTagsList__WEBPACK_IMPORTED_MODULE_1__["FeatureImportantTagsList"](feature, layer);
    };
    FeatureMainInfoComponent.prototype.updateKeysAndLabels = function (feature, layer) {
        this.featureImportantTagsList = this.getKeyAndLabelForAllLevelsOfImportance(feature, layer);
        this.addrString = this.featureImportantTagsList.getAddrTagsList();
        console.log(this.selectedLayer);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureMainInfoComponent.prototype, "selectedLayer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureMainInfoComponent.prototype, "keys", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureMainInfoComponent.prototype, "selectedFeature", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeatureMainInfoComponent.prototype, "osm_type", void 0);
    FeatureMainInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-main-info',
            template: __webpack_require__(/*! ./feature-main-info.component.html */ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.html"),
            styles: [__webpack_require__(/*! ./feature-main-info.component.css */ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureMainInfoComponent);
    return FeatureMainInfoComponent;
}());



/***/ }),

/***/ "./src/app/feature-panel/feature-panel.component.css":
/*!***********************************************************!*\
  !*** ./src/app/feature-panel/feature-panel.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .table{\n   line-height: 18px;\n }\n \n  #headingFeaturePanel{\n    font-size: 14pxvw;\n}\n \n  .btn {\n  font-size: 14px;\n}\n \n  .btn-secondary {\n  font-size: 1vw;\n}\n \n  .btn-feature {\n  font-size: 1vw;\n  text-align: left;\n}\n \n  .categories{\n    color: black;\n  }\n \n  .d-flex{\n    font-size: 0.8vw;\n}\n \n  .badge-selected-layer{\n    background-color: #960606;\n  }\n \n  b {\n    font-size: 1.0rem;\n}\n \n  /* Panneau masquable */\n \n  #featurepanel-wrapper {\n    margin-left: -500px;\n    left: 0;\n    top: 0vw;\n    width: 500px;\n    position: fixed;\n    height: 100%;\n    overflow: auto;\n    z-index: 1000;\n    transition: all 0.5s ease-in 0s;\n    -webkit-transition: all 0.5s ease-in 0s;\n    -moz-transition: all 0.5s ease-in 0s;\n    -ms-transition: all 0.5s ease-in 0s;\n    -o-transition: all 0.5s ease-in 0s;\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n \n  .featurepanel-nav, #featureContainer {\n    background-color: rgba(255, 255, 255, 1);\n  }\n \n  .featurepanel-nav{\n    width:100%;\n  }\n \n  #featurepanel-wrapper.active {\n    left: 500px;\n    width: 500px;\n    transition: all 0.5s ease-out 0s;\n    -webkit-transition: all 0.5s ease-out 0s;\n    -moz-transition: all 0.5s ease-out 0s;\n    -ms-transition: all 0.5s ease-out 0s;\n    -o-transition: all 0.5s ease-out 0s;\n  }\n \n  .featurepanel-nav .toggle {\n    position:absolute;\n    right:0px;\n    margin: 5px 5px 0 0;\n    line-height: .5;\n  }\n \n  .dropdown-menu{\n  width:100%;\n}\n \n  .dropdown-menu .dropdown-item{\n  -webkit-hyphens:auto;\n      -ms-hyphens:auto;\n          hyphens:auto;\n  white-space: normal;\n}\n \n  /* .dropdown-menu .dropdown-header{\n  color:white;\n  background-color: #545b62;\n  border-color: #4e555b;\n} */\n \n  .flex .logo{\n  text-align:center;\n  width:30%;\n  font-size:0.7em;\n  align-content:center;\n}\n \n  .logo a{\n  padding:2px;\n}\n \n  table{\n  margin-left:auto;\n  margin-right:auto;\n  margin-top:10px;\n  width:95%;\n  -webkit-hyphens:auto;\n      -ms-hyphens:auto;\n          hyphens:auto;\n}\n \n  table td{\n  padding:0.55rem;\n}\n \n  table .row1,table .row2{\n  width:50%;\n}\n \n  #selectedLayer{\n  text-align: right;\n  padding:0px 8px 0px 5px;\n}\n \n  .flex{\n  display:flex;\n  justify-content:space-between;\n  height:auto;\n}\n \n  .flex .text{\n  width:65%;\n}\n \n  #historique{\n  padding: .75rem;\n  text-align: center;\n}\n \n  /* New rules if the width of the screen is under 500px */\n \n  @media screen and (max-width: 500px)\n{\n  #featurepanel-wrapper {\n    margin-left: -100%;\n    width: 100%;\n  }\n  #featurepanel-wrapper.active {\n    left: 100%;\n    width: 100%;\n  }\n}"

/***/ }),

/***/ "./src/app/feature-panel/feature-panel.component.html":
/*!************************************************************!*\
  !*** ./src/app/feature-panel/feature-panel.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card row active\" id=\"featurepanel-wrapper\">\n    <div class=\"featurepanel-nav\">\n      <!-- closure of the panel -->\n      <a id=\"featurepanel-close\" href=\"#\" class=\"btn btn-outline-secondary btn-sm toggle\">\n          <b class=\"glyphicon glyphicon-remove\">X</b>\n      </a>\n      <!-- Title -->\n      <div class=\"card-header p-2 text-center\" role=\"tab\" id=\"headingFeaturePanel\" style=\"word-wrap: break-word;\">\n          <b> {{ 'change.info' | translate }}</b>\n      </div>\n  \n      <div id=\"featureContainer\">\n        <div id=\"top_infos\">\n          <!-- Show if exists the others features nearby-->\n          <div *ngIf=\"selectedFeatures.length>1\">\n            <div id=\"features_nearby_list\" class=\"dropdown\">\n              <button class=\"btn btn-secondary btn-lg btn-block btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" \n              (click)=\"dropdownMenuSelected()\" style=\"font-size:0.8em;\">\n                <a>{{selectedFeatures.length-1}} {{ 'change.elements' | translate }}</a> <!-- -1 because the selectedFeature is in the selectedFeatureS -->\n              </button>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                <span *ngIf=\"mapService.getNumberOfVisibleLayers()>1;else onlyOneLayer;\">\n                  <span *ngFor=\"let nearbyFeaturesLayer of nearbyFeatures.list\">\n                    <a class=\"dropdown-header mb-2 bg-secondary text-white\">{{nearbyFeaturesLayer.layer.nom_court}}</a> <!-- Display the name of the layer -->\n                    <span *ngFor=\"let feature of nearbyFeaturesLayer.featuresList\">\n                      <a *ngIf=\"feature != selectedFeature\" class=\"dropdown-item\" (click)=\"onSelect(feature)\">{{getLabelToDisplay(feature,nearbyFeaturesLayer.layer)}}</a>\n                    </span>\n                  </span> \n                </span>\n                <ng-template #onlyOneLayer>\n                  <span *ngFor=\"let feature of selectedFeatures\">\n                      <a *ngIf=\"feature != selectedFeature\" class=\"dropdown-item\" (click)=\"onSelect(feature)\">{{getLabelToDisplay(feature,selectedLayer)}}</a>\n                  </span>\n                </ng-template>\n              </div>\n            </div>\n          </div>\n  \n          <!-- Short_name of the selected Layer at the top of the feature panel -->\n          <div id=selectedLayer>\n              <span class=\"badge badge-secondary\" title=\"Couche de l'objet\">{{selectedLayer.nom_court}}</span>\n          </div>\n\n          <!-- Info table with general informations about the selected feature -->\n            <app-feature-main-info #featureMainInfoComponent\n                [keys]=\"keys\"\n                [selectedLayer]=\"selectedLayer\"\n                [selectedFeature]=\"selectedFeature\"\n                [osm_type]=\"osm_type\"\n            ></app-feature-main-info>\n          </div>\n  \n        <!--<https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll/16671476#16671476-->\n  \n        <!-- Accordion with the 2 tables -->\n        <div class=\"list-group\" id=\"panel_accordion\" aria-multiselectable=\"true\">\n          <div class=\"card\">\n              <div class=\"card-header\">\n                <h6 class=\"mb-0\">\n                  <a id=\"OSMAttribute\" class=\"categorie-title\" data-toggle=\"collapse\" data-parent=\"panel_accordion\" href=\"#collapseAttributeTable\" title=\"Tableau des attributs (couples clef/valeur) d'OpenStreetMap\" \n                  (click)=\"tableSelected('AttributeTable')\">\n                  {{ 'change.attributes' | translate }}\n                  </a>\n                </h6>\n              </div>\n              <div id=\"collapseAttributeTable\" class=\"card-collapse collapse in\">\n                <!-- First table with the OSM's attributes--> \n                <table class=\"card-body table table-bordered\">\n                  <thead>\n                    <tr>\n                      <th class=\"row1\">{{ 'change.key' | translate }}</th>\n                      <th class=\"row2\">{{ 'change.value' | translate }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <ng-container *ngFor=\"let k of keys\">\n                      <tr>\n                        <td>\n                          <div class=\"flex\">\n                          <div class=\"text\">\n                            <a>{{formatKey(k)}}</a>\n                          </div>\n                          <div class=\"logo\">\n                              <a target=\"_blank\" href=\"https://wiki.openstreetmap.org/wiki/Key:{{formatKey(k)}}\" title=\"Rechercher {{formatKey(k)}} sur le Wiki d'OpenStreetMap\">Wiki OSM</a>\n                              <a target=\"_blank\" href=\"https://taginfo.openstreetmap.fr/keys/{{formatKey(k)}}#overview\"title=\"Rechercher {{formatKey(k)}} sur TagInfo\"><img src=\"assets/images/taginfo_30_11px.png\"></a>\n                              <a target=\"_blank\" href=\"http://overpass-turbo.eu/?key={{formatKey(k)}}&template=key\" title=\"Requête sur {{formatKey(k)}} avec Overpass Turbo\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABJklEQVQoz13RP0oDYRCH4UcShdRbWWjSWWgOEEFLSWNj5SG2DHxa5RBaWOQM5gASraKdILugblaTEAvBP6BC0M4iWxhnuoHfDPO+QElkU3Dhy5ueYFOkpKiymlhfZiCXyWT6YjXlWbqmLZHratm1q6Url2irKRGJpRJBXaSiIlIXJBKxiIZLE4eqs4XF0aoDD/oaHHgytG/VkoWil6zac+VR4Nynb4lj29atWbNu27Ebnz6c82pq7N7YnWtdXdfuisnUKy+GYk0dqYkTJyZSHU2xoRd6Mi3LVuw4MzJyZseKZS2ZHkHmVF1ZRdPAQFNFWd2pTKChLxdULdqQSm1YVBXkszcjsaQAteXWra15UH9RH3n27Gge9V9ZYz++jeZl/df9Pq/7F7ojeX4atkuXAAAAAElFTkSuQmCC\"></a> \n                          </div>\n                          </div>\n                        </td>\n                        <td>\n                          <div class=\"flex\">\n                            <div class=\"text\">\n                              <a>{{selectedFeature.get(k)}}</a>\n                            </div>\n                            <div class=\"logo\">\n                              <span *ngIf=\"selectedFeature.get(k) != undefined && !(isValueIrrelevant(k))\"> <!-- If the value is NonGeneric, we don't display the logos -->\n                                <a target=\"_blank\" href=\"https://wiki.openstreetmap.org/wiki/Tag:{{formatKey(k)}}%3D{{selectedFeature.get(k)}}\" title=\"Rechercher {{formatKey(k)}}:{{selectedFeature.get(k)}} sur le Wiki d'OpenstreetMap\">Wiki OSM</a>\n                                <a target=\"_blank\" href=\"https://taginfo.openstreetmap.fr/tags/{{formatKey(k)}}={{selectedFeature.get(k)}}#overview\" title=\"Rechercher {{formatKey(k)}}:{{selectedFeature.get(k)}} sur TagInfo\"><img src=\"assets/images/taginfo_30_11px.png\"></a>\n                                <a target=\"_blank\" href=\"http://overpass-turbo.eu/?key={{formatKey(k)}}&value={{selectedFeature.get(k)}}&template=key-value\" title=\"Requête sur {{formatKey(k)}}:{{selectedFeature.get(k)}} avec Overpass Turbo\"><img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABJklEQVQoz13RP0oDYRCH4UcShdRbWWjSWWgOEEFLSWNj5SG2DHxa5RBaWOQM5gASraKdILugblaTEAvBP6BC0M4iWxhnuoHfDPO+QElkU3Dhy5ueYFOkpKiymlhfZiCXyWT6YjXlWbqmLZHratm1q6Url2irKRGJpRJBXaSiIlIXJBKxiIZLE4eqs4XF0aoDD/oaHHgytG/VkoWil6zac+VR4Nynb4lj29atWbNu27Ebnz6c82pq7N7YnWtdXdfuisnUKy+GYk0dqYkTJyZSHU2xoRd6Mi3LVuw4MzJyZseKZS2ZHkHmVF1ZRdPAQFNFWd2pTKChLxdULdqQSm1YVBXkszcjsaQAteXWra15UH9RH3n27Gge9V9ZYz++jeZl/df9Pq/7F7ojeX4atkuXAAAAAElFTkSuQmCC\"></a>\n                              </span>\n                            </div>\n                          </div>\n                          <span *ngIf=\"selectedFeature.get(k) == undefined\">n/a</span>\n                        </td>\n                      </tr>\n                    </ng-container>  \n                  </tbody>\n                </table>\n              </div>\n          </div>\n          <div class=\"card\">\n              <div class=\"card-header\">\n                  <h6 class=\"mb-0\">\n                    <a class=\"categorie-title\" data-toggle=\"collapse\" data-parent=\"panel_accordion\" href=\"#collapseMetadataTable\" title=\"Tableau des méta-données\" (click)=\"tableSelected('MetadataTable')\">\n                      {{ 'change.metadata' | translate }}\n                    </a>\n                  </h6>\n              </div>\n              <div id=\"collapseMetadataTable\" class=\"card-collapse collapse\">\n                <!-- Second table with the technical keys -->\n                    <table class=\"card-body table table-bordered\">\n                        <thead>\n                          <tr>\n                            <th class=\"row1\">{{ 'change.key' | translate }}</th>\n                            <th>{{ 'change.value' | translate }}</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <ng-container *ngFor=\"let k of technical_keys\">\n                            <tr>\n                              <td>{{k}}</td>\n                              <td>\n                                <span [ngSwitch]=\"k\">\n                                  <span *ngSwitchCase=\"'osm_id'\">\n                                    <span *ngIf=\"selectedFeature.get(k)>0; else negative\">\n                                        <a>{{selectedFeature.get(k)}}</a>\n                                    </span>\n                                    <ng-template #negative>\n                                        <a>{{selectedFeature.get(k)*-1}}</a>\n                                    </ng-template>\n                                  </span>\n                                  <span *ngSwitchCase=\"'osm_type'\">\n                                      <a>{{osm_type}}</a>\n                                  </span>\n                                  <!-- Those both elements are not in technical_keys (because of the JS code), but we can't find them in the initial list of keys.\n                                  <span *ngSwitchCase=\"'osm_user'\">\n                                      <a target=\"_blank\" href=\"http://www.openstreetmap.org/user/{{selectedFeature.get(k)}}\">{{selectedFeature.get(k)}}</a>\n                                  </span>\n                                  <span *ngSwitchCase=\"'osm_changeset'\">\n                                      <a target=\"_blank\" href=\"http://www.openstreetmap.org/changeset/{{selectedFeature.get(k)}}\">{{selectedFeature.get(k)}}</a>\n                                  </span>\n                                  -->\n                                  <span *ngSwitchDefault>\n                                    <span *ngIf=\"selectedFeature.get(k) != undefined; else undefined\">{{selectedFeature.get(k)}}</span>\n                                    <ng-template #undefined>\n                                      <span>n/a</span>\n                                    </ng-template>\n                                  </span>\n                                </span>\n                            </td>\n                          </tr>\n                        </ng-container>\n                        <!-- Historic of the object -->\n                          <tr id=historique>\n                            <td colspan=\"2\">\n                                <span *ngIf=\"selectedFeature.get('osm_id')>0; else negative2\">\n                                  <a target=\"_blank\" href=\"http://osmlab.github.io/osm-deep-history/#/{{osm_type}}/{{selectedFeature.get('osm_id')}}\" title=\"Voir les modifications de l'objet dans la base OSM au fil du temps\">{{ 'change.historic' | translate }}</a>\n                                </span>\n                                <ng-template #negative2>\n                                    <a target=\"_blank\" href=\"http://osmlab.github.io/osm-deep-history/#/{{osm_type}}/{{selectedFeature.get('osm_id')*-1}}\" title=\"Voir les modifications de l'objet dans la base OSM au fil du temps\">{{ 'change.historic' | translate }}</a>\n                                </ng-template>  \n                            </td>\n                          </tr>\n                      </tbody>\n                    </table>\n\n              \n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feature-panel/feature-panel.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feature-panel/feature-panel.component.ts ***!
  \**********************************************************/
/*! exports provided: FeaturePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturePanelComponent", function() { return FeaturePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_Layer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/Layer */ "./src/app/model/Layer.ts");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _service_nearbyFeatures_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/nearbyFeatures.service */ "./src/app/service/nearbyFeatures.service.ts");
/* harmony import */ var app_feature_panel_components_feature_main_info_feature_main_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/feature-panel-components/feature-main-info/feature-main-info.component */ "./src/app/feature-panel-components/feature-main-info/feature-main-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeaturePanelComponent = /** @class */ (function () {
    function FeaturePanelComponent(mapService, nearbyFeaturesService) {
        this.mapService = mapService;
        this.nearbyFeaturesService = nearbyFeaturesService;
        this.layervariables = config.LAYERS;
        //To use the variable config in the html
        this.config = config;
        this.panelOpen = true;
        this.keys = [];
        this.osm_type = "node";
        this.technical_keys = [];
    }
    FeaturePanelComponent.prototype.ngOnInit = function () {
        var self = this;
        $("#featurepanel-close").click(function (e) {
            e.preventDefault();
            $("#featurepanel-wrapper").toggleClass("active");
            self.panelOpen = false;
        });
        this.selectedFeature = this.selectedFeatures[0];
        this.processAttributes();
        this.updateSelectedLayer(this.selectedFeature);
        this.updateNearbyFeaturesList();
    };
    FeaturePanelComponent.prototype.onSelect = function (feature) {
        this.selectedFeature = feature;
        this.processAttributes();
        this.mapService.cleanSelection();
        this.mapService.addToSelection(feature);
        this.updateSelectedLayer(this.selectedFeature);
        this.updateNearbyFeaturesList();
    };
    FeaturePanelComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('FeaturePanel : ngOnChanges');
        if (!this.panelOpen) { //si le panel est fermé, on l'ouvre
            console.log('onChange fired');
            console.log('changing', args);
            //$("#fpanel").show();
            this.panelOpen = true;
            if (!$("#featurepanel-wrapper").hasClass("active")) {
                $("#featurepanel-wrapper").toggleClass("active");
            }
        }
        this.selectedFeature = this.selectedFeatures[0];
        this.processAttributes();
        this.updateSelectedLayer(this.selectedFeature);
        this.updateNearbyFeaturesList();
    };
    FeaturePanelComponent.prototype.ngAfterViewInit = function () {
    };
    //Find the attributes and separate them in to array : keys and technicals_keys ("osm_...")
    FeaturePanelComponent.prototype.processAttributes = function () {
        var geomType = this.selectedFeature.getGeometry().getType();
        var clefs = this.selectedFeature.getKeys();
        //Determine the osm_type
        // It's NOT easy because : polygon are simplified so the geomType is a Point. Some relations have a positive osm_id and route=*, the other relation have a negative osm_id
        if (clefs.indexOf('osm_type') >= 0) {
            this.osm_type = this.selectedFeature.get('osm_type');
        }
        else {
            this.osm_type = "way";
        }
        if ((clefs.indexOf("route") >= 0) || this.selectedFeature.get('osm_id') < 0) {
            this.osm_type = "relation";
        }
        this.technical_keys = [];
        this.keys = [];
        for (var key in clefs) {
            if ('boundedBy' != clefs[key] && 'way' != clefs[key] && 'st_union' != clefs[key] && 'the_geom' != clefs[key]) {
                if ('osm_' == clefs[key].substr(0, 4)) {
                    if ('osm_uid' != clefs[key] && 'osm_user' != clefs[key] && 'osm_changeset' != clefs[key] && 'osm_original_geom' != clefs[key]) {
                        this.technical_keys.push(clefs[key]);
                    }
                }
                else {
                    //ARTIFICIAL_OSM_KEYS_CREATED_IN_DB keys must be hidden from feature panel (Attribits OSM)
                    if (config.ARTIFICIAL_OSM_KEYS_CREATED_IN_DB.indexOf(clefs[key]) == -1) {
                        this.keys.push(clefs[key]);
                    }
                }
            }
        }
    };
    //Keys are written with "-" instead of a ":" in the DB
    FeaturePanelComponent.prototype.formatKey = function (key) {
        return key.replace(/-/g, ':');
    };
    FeaturePanelComponent.prototype.updateNearbyFeaturesList = function () {
        if (this.selectedFeatures.length > 1) {
            this.nearbyFeatures = this.nearbyFeaturesService.getNearbyFeaturesList(this.selectedFeatures, this.selectedFeature);
            console.log(this.nearbyFeatures);
            console.log(this.selectedFeatures);
        }
    };
    //For the list of nearby features, this function is called for each features on the dropdown-menu
    FeaturePanelComponent.prototype.getLabelToDisplay = function (feature, layer) {
        var featureImportantTagsList = this.featureMainInfoComponent.getKeyAndLabelForAllLevelsOfImportance(feature, layer);
        var severalLayers = (this.mapService.getNumberOfVisibleLayers() > 1);
        if (!featureImportantTagsList.isEmpty()) { //if the list is not null, return the high important key
            var highImportanceList = featureImportantTagsList.list.filter(function (x) { return x.importance === "high"; });
            if (highImportanceList.length > 0) { // If highImportanceList is not empty
                var highImportanceTag = highImportanceList[0].tagList;
                if (!highImportanceTag.isEmpty()) {
                    return feature.get(highImportanceList[0].tagList.list[0].key);
                }
            }
        }
        //if the list is null (ie there is nothing to display) or there is no high important key to display, return the name of the layer and the osm_id.
        return "Objet n°" + Math.abs(feature.get('osm_id')).toString();
    };
    //the selectedLayer changes when the user clicks on a feature which belongs to on another layer
    FeaturePanelComponent.prototype.updateSelectedLayer = function (feature) {
        this.selectedLayer = this.mapService.getLayerOfOneFeature(feature);
    };
    // For the display on the table : if the value is NonRelevant, the logos won't appear on the second row.
    // The function reads the config
    FeaturePanelComponent.prototype.isValueIrrelevant = function (tag) {
        var isValueIrrelevant = false;
        config.OSM_KEYS_WITH_IRRELEVANT_VALUE_FOR_EXTERNAL_LINKS.forEach(function (n) {
            if (tag.startsWith(n.osm_key)) {
                isValueIrrelevant = true;
            }
        });
        return isValueIrrelevant;
    };
    //Matomo Events
    FeaturePanelComponent.prototype.tableSelected = function (table) {
        if (!(document.getElementById("collapse" + table).classList.contains('show'))) {
            _paq.push(['trackEvent', 'table_selected', table]);
        }
    };
    FeaturePanelComponent.prototype.dropdownMenuSelected = function () {
        if (!(document.getElementById("features_nearby_list").classList.contains('show'))) {
            _paq.push(['trackEvent', 'features_nearby_list_selected', true]);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FeaturePanelComponent.prototype, "layervariables", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeaturePanelComponent.prototype, "selectedFeatures", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _model_Layer__WEBPACK_IMPORTED_MODULE_1__["Layer"])
    ], FeaturePanelComponent.prototype, "selectedLayer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(app_feature_panel_components_feature_main_info_feature_main_info_component__WEBPACK_IMPORTED_MODULE_4__["FeatureMainInfoComponent"]),
        __metadata("design:type", app_feature_panel_components_feature_main_info_feature_main_info_component__WEBPACK_IMPORTED_MODULE_4__["FeatureMainInfoComponent"])
    ], FeaturePanelComponent.prototype, "featureMainInfoComponent", void 0);
    FeaturePanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feature-panel',
            template: __webpack_require__(/*! ./feature-panel.component.html */ "./src/app/feature-panel/feature-panel.component.html"),
            styles: [__webpack_require__(/*! ./feature-panel.component.css */ "./src/app/feature-panel/feature-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"], _service_nearbyFeatures_service__WEBPACK_IMPORTED_MODULE_3__["NearbyFeaturesService"]])
    ], FeaturePanelComponent);
    return FeaturePanelComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  .img-rounded {\n    border-radius: 6px;\n    margin: 5px;\n    margin-left: 13px;\n    z-index:1000;\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"http://ch-osm.geodatasolutions.ch\">\n  <img \n    class=\"img-rounded\" \n    src=\"assets/images/chosm_logo.png\" \n    height=\"30\" style=\"position:absolute;top:7px;\" \n    id=\"chosm_logo\" \n  />\n</a>\n\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/help-components/help-subsection/help-subsection.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/help-components/help-subsection/help-subsection.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\n    margin-bottom : 10px;\n}\n\nb.cercle {\n    display: block;\n    width: 20px;\n    height: 20px;\n    margin: 10px auto;\n    border-radius: 50%;\n  }"

/***/ }),

/***/ "./src/app/help-components/help-subsection/help-subsection.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/help-components/help-subsection/help-subsection.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <a [href]=\"ref\" [id]=\"ref\"></a>\n  <h2 [innerText]=\"header\" style=\"text-align:left;float:left;\"></h2>\n  <b *ngIf=\"color\" style=\"text-align:right;float:right;\" class=\"cercle\" [ngStyle]=\"{'background-color': color}\"></b>\n  <hr style=\"clear:both;\"/>\n</header>\n<section>\n  <div class=\"content\">\n      <ng-content></ng-content>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/help-components/help-subsection/help-subsection.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/help-components/help-subsection/help-subsection.component.ts ***!
  \******************************************************************************/
/*! exports provided: HelpChangeTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpChangeTypeComponent", function() { return HelpChangeTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpChangeTypeComponent = /** @class */ (function () {
    function HelpChangeTypeComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpChangeTypeComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpChangeTypeComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpChangeTypeComponent.prototype, "ref", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HelpChangeTypeComponent.prototype, "color", void 0);
    HelpChangeTypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help-subsection',
            template: __webpack_require__(/*! ./help-subsection.component.html */ "./src/app/help-components/help-subsection/help-subsection.component.html"),
            styles: [__webpack_require__(/*! ./help-subsection.component.css */ "./src/app/help-components/help-subsection/help-subsection.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpChangeTypeComponent);
    return HelpChangeTypeComponent;
}());



/***/ }),

/***/ "./src/app/help-components/help/help.component.css":
/*!*********************************************************!*\
  !*** ./src/app/help-components/help/help.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent {\n    color: #5a5a5a;\n    padding-top: 60px;\n    padding-bottom: 60px;\n    position: unset;\n    left: 10%;\n    top: 10px;\n    font-family: Arial;\n    width: 80%;\n    text-align: justify;\n    text-justify: inter-word;\n  }\n\nimg.help{\n    max-width: 100%;\n}\n\n.navbar{\n    z-index: 1;\n}\n\nh1 {\n    color: gray;\n}\n"

/***/ }),

/***/ "./src/app/help-components/help/help.component.html":
/*!**********************************************************!*\
  !*** ./src/app/help-components/help/help.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <app-header></app-header>\n  <div class=\"container mainContent\">\n    <div class=\"row\">\n      <div class=\"d-none d-xl-block d-xs-none d-sm-none d-md-none d-lg-none bd-toc\">\n        <nav id=\"navbar-example3\" class=\"navbar navbar-light bg-light\" style=\"position: fixed;right: 30px;\">\n          <a class=\"navbar-brand\" href=\"#\"></a>\n          <nav class=\"nav nav-pills flex-column\">\n            <a class=\"nav-link active\" href=\"#suivi-changement\">Le suivi de changement</a>\n            <nav class=\"nav nav-pills flex-column\">\n              <a class=\"nav-link ml-3 my-1\" href=\"#pourquoi\">Pourquoi ce outil ?</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#limitations\">Limitations</a>\n            </nav>\n            <a class=\"nav-link\" href=\"#types-changements\">Les types de changements</a>\n            <nav class=\"nav nav-pills flex-column\">\n              <a class=\"nav-link ml-3 my-1\" href=\"#creation\">Création</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#ajout\">Ajout</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#modif-tag\">Modification de tag(s)</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#modif-geom\">Modification de géométrie</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#modif-tag-et-geom\">Modification de tag(s) et de géométrie</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#retrait\">Retrait</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#suppression\">Suppression</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#autre\">Autre</a>\n            </nav>\n            <a class=\"nav-link\" href=\"#aide-interpretation\">Aide à l'interprétation</a>\n            <nav class=\"nav nav-pills flex-column\">\n              <a class=\"nav-link ml-3 my-1\" href=\"#regroupement-changement\">Regroupement des changements</a>\n              <a class=\"nav-link ml-3 my-1\" href=\"#scission-chemin\">Scission d'un chemin</a>\n            </nav>\n          </nav>\n        </nav>\n      </div>\n      <div style=\"max-width:80%\" class=\"col-sm\" *ngIf=\"changeTypesList\">\n\n\n        <h1><a id=\"suivi-changement\"></a>Suivi de changement</h1>\n          Cet outil permet de <b>suivre l'évolution de thématiques (écoles, bâtiments, routes ...) dans OpenStreetMap</b>, à l'échelle de la France Métropolitaine, sur les 30 derniers jours.\n          <br>  \n          <a style=\"font-size:13px;\" [routerLink]=\"['/changements']\">Accès au portail de suivi de changement</a>\n          <br><br>\n          <app-help-subsection ref=\"pourquoi\" header=\"Pourquoi cet outil ?\">\n          Souvent dans l'écosystème OSM, on visualise les changements par le prisme de changeset (ou groupe de modification) : \n          on sait que tel.le contribut.eur.rice a modifié 42 noeuds et 35 chemins dans une région donnée à telle heure, \n          mais il est difficile de comprendre à quoi correspondent ces changements d'un point de vue thématique et quel est leur impact sur l'état de la cartographie.\n\n          On cherche ici à répondre à des questions simples comme :<br><br>\n\n          <ul>\n            <li>où et comment ont évolués les bâtiments en France ces dernières semaines ?</li>\n            <li>des magasins ont-ils été supprimés dans ma commune ?</li>\n            <li>y a-t-il de nouveaux sentiers de randonnée en Ariège ?</li>\n            <li>quelqu'un a-t-il touché au réseau routier dans tel quartier ?</li>\n            <li>combien d'écoles en France ont subies un changement d'attribut ?</li>\n          </ul>\n\n          De plus on cherche à simplifier la compréhension de modifications successive à l'échelle de l'objet\n          en indiquant le changement résultant. Par exemple, si un objet a été modifié 4 fois en un jour, on qualifiera le changement résultant de \"Modification de géométrie\"\n          et on proposera de visualiser la première et la dernière version.<br>\n          <br>\n          </app-help-subsection>\n          <app-help-subsection ref=\"limitations\" header=\"Limitations\">\n            <b>Le volume des changements</b>\n            <br>\n            Pour certaines thématiques représentant un gros volume de données et/ou de changements sur le mois passé, \n            les changements peuvent être nombreux et les géométries complexes. Le volume de données transféré est alors important et votre navigateur peut manquer\n            de ressources pour les afficher. Dans ce cas le plus simple est de zoomer davantage pour diminuer l'emprise de la requête, ou bien réduire la plage de date\n            sur laquelle porte la recherche.<br>\n            Ainsi les thématiques les plus volumineuses (comme les bâtiments, l'occupation du sol, le réseau routier etc.)\n            ne sont réellement exploitables qu'à partir de l'échelle régionale.<br>\n            Une solution, non implémentée pour l'instant, consisterait à rappatrier des changements minifiés à petite échelle afin d'afficher\n            la carte de chaleur, puis de charger le détail au zoom.\n            <br><br>\n            <b>Les changements de géométrie faux-positifs</b>\n            <br>\n            Pour un way (ligne ou polygone), si un noeud est ajouté ou supprimé sans pour autant changer la géométrie résultante, un changement\n            de géométrie est tout de même détecté bien qu'il soit invisible sur le rendu. Cela peut prêter à confusion et rendre plus difficile\n            l'identification des géométries ayant subies des modifications signifiantes. Une solution, non implémentée pour l'instant, consisterait\n            à ignorer ce type de faux-positifs, voir à ignorer certaines modifications de géométrie considérées comme mineures.\n          </app-help-subsection>\n\n        <h1 id=\"types-changements\">Les différents types de changements</h1>\n        Les changements peuvent être catégorisés en différents types décrits ci-dessous. Cela permet de connaître directement la nature du changement dans la plupart des cas.\n          <br><br>\n        <app-help-subsection header=\"Création\" ref=\"creation\" [color]=\"getColorForRef('creation')\">\n            Objet qui n'existait pas dans OpenStreetMap, rajouté au cours de la période de temps sélectionnée, et qui entre dans la requête.\n        </app-help-subsection>\n\n        <app-help-subsection header=\"Ajout\" ref=\"ajout\" [color]=\"getColorForRef('ajout')\">\n            Objet qui existait déjà dans OpenStreetMap au début de la période, mais qui n'entrait pas dans la requête, car :\n            <ul>\n              <li>soit il n'était pas contenu dans l'emprise géographique sélectionnée</li>\n              <li>soit il ne contenait pas les combinaisons d'attributs nécessaires pour appartenir à la thématique choisie</li>\n            </ul>\n        </app-help-subsection>\n\n        <app-help-subsection header=\"Modification de tag(s)\" ref=\"modif-tag\" [color]=\"getColorForRef('modif-tag')\">\n            Objet présent dans la requête au début et à la fin de la période, qui a uniquement subi une ou des modification(s) d'attribut(s) (clé/valeur) n'affectant pas son appartenance à la thématique choisie\n        </app-help-subsection>\n               \n        <app-help-subsection header=\"Modification de géométrie\" ref=\"modif-geom\" [color]=\"getColorForRef('modif-geom')\">\n            Objet présent dans la requête au début et à la fin de la période, qui a uniquement subi une ou des modification(s) de géométrie, tels que :\n            <ul>\n              <li>un déplacement</li>\n              <li>pour un way : un rajout ou une suppression de points</li>\n              <li>pour une relation : un rajout ou une suppression de membre(s)</li>\n            </ul>\n        </app-help-subsection>\n\n        <app-help-subsection ref=\"modif-tag-et-geom\" header=\"Modification de tag(s) et de géométrie\" [color]=\"getColorForRef('modif-tag-et-geom')\">\n          Objet présent dans la requête au début et à la fin de la période, qui a subi une ou des modifications d'attributs <b>et</b> de géométrie. \n        </app-help-subsection>\n\n        <app-help-subsection ref=\"retrait\" header=\"Retrait\" [color]=\"getColorForRef('retrait')\">\n          Objet présent dans la requête au début de la période, mais plus à la fin, et toujours existant dans OpenStreetMap. De fait:\n          <ul>\n              <li>soit il n'est plus contenu dans l'emprise géographique sélectionnée</li>\n              <li>soit il ne contient plus les combinaisons d'attributs nécessaires pour appartenir à la thématique choisie</li>\n          </ul>\n        </app-help-subsection>\n\n        <app-help-subsection ref=\"suppression\" header=\"Suppression\" [color]=\"getColorForRef('suppression')\">\n          Objet existant dans OpenStreetMap et présent dans la requête au début de la période, puis supprimé d'OpenStreetMap au cours de la période.\n        </app-help-subsection> \n        \n        <app-help-subsection ref=\"autre\" header=\"Autre\" [color]=\"getColorForRef('autre')\">\n            Objet n'ayant pas subi de modification de géométrie, ni d'attributs, mais dont la version a quand même augmenté. Quelques cas peuvent expliquer cette situation :\n            <ul>\n              <li>pour un way : un point appartenant à ce way a été remplacé par un autre point exactement au même endroit</li>\n              <li>pour une relation : un membre a été remplacé par un autre membre exactement au même endroit</li>\n              <li>un <a target=\"_blank\" href=\"https://wiki.openstreetmap.org/wiki/Change_rollback\">revert</a> (aussi appelé \"change rollback\") : un changeset créé est annulé par la suite. Ainsi, il y a potentiellement des objets supprimés qui sont remis dans la base OSM : seul son numéro de version a changé</li>\n            </ul>\n        </app-help-subsection>\n\n        <h1 id=\"aide-interpretation\">Aide à l'interprétation</h1>\n        La fiche d'information qui s'ouvre lorsqu'un objet est sélectionné, permet d'afficher les métadonnées liées au changement, ainsi que les tags et la géométrie de l'objet. Même avec ces différents éléments, il est parfois compliqué d'analyser le changement dans certains situations.\n        Voici quelques exemples qui ont pour but d'éclaircir certains cas courants :\n        \n        \n        <app-help-subsection ref=\"regroupement-changement\" header=\"Regroupement des changements\">\n          Si plusieurs changements interviennent sur un même objet au cours de la période, le changement affiché par défaut est la fusion des différents changements. \n          Par exemple : si un objet est créé puis modifié, on indiquera une <b>création</b>.<br><br>\n          Il est ensuite possible de visualiser les changements intermédiaires dans le détail, les uns après les autres, grâce au double-curseur.\n        </app-help-subsection>\n\n        <app-help-subsection ref=\"scission-chemin\" header=\"Scission d'un chemin\">\n          C'est un cas qui arrive fréquemment sur un way. Un contributeur peut scinder le way afin de rajouter des attributs sur une portion (rajout d'un pont, par exemple).\n          Dans ce cas, on a alors : \n          <ul>\n            <li>Le way initial qui subit une <b>modification de géométrie</b></li>\n            <li>Un nouveau way contigu au way initial, qui est donc <b>créé</b></li>\n          </ul>\n        </app-help-subsection>\n      </div>\n    </div>\n  </div>\n</body>\n\n"

/***/ }),

/***/ "./src/app/help-components/help/help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/help-components/help/help.component.ts ***!
  \********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_service_api_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/api-request.service */ "./src/app/service/api-request.service.ts");
/* harmony import */ var app_model_ChangesClasses_ChangeType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/ChangesClasses/ChangeType */ "./src/app/model/ChangesClasses/ChangeType.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HelpComponent = /** @class */ (function () {
    function HelpComponent(router, apiRequestService) {
        this.apiRequestService = apiRequestService;
        /* Lorsque le composant est chargé depuis une URL contenant une ancre :
        * - l'élément du DOM avec l'id correspondant à l'ancre n'est pas encore chargé
        * - on attend donc la fin de la navigation pour scroller jusqu'à l'ancre
        */
        router.events.subscribe(function (s) {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    var element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView(true);
                    }
                }
            }
        });
    }
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiRequestService.searchChangeTypes().subscribe(function (data) {
            var array = JSON.parse(data['_body']);
            _this.changeTypesList = array.map(function (element) { return new app_model_ChangesClasses_ChangeType__WEBPACK_IMPORTED_MODULE_3__["ChangeType"](element); });
        });
    };
    HelpComponent.prototype.ngAfterViewInit = function () {
        /* on ne déclare le scrollspy qu'une fois que le template est initialisé */
        $(document).ready(function () {
            $('body').scrollspy({ target: "#navbar-example3", offset: 50 });
        });
        /* rustine pour que la navbar de Bootstrap cohabite avec Angular et sa gestion des href :
        * - Bootstrap a besoin d'une href correspondant à une ancre (ex: href="#umap")
        * - Angular a besoin d'un chemin complet pour suivre un lien (ex: aide.html#umap)
        * ==> on conserve le format qui va bien à Bootstrap au
        * ==> clic sur un élément du menu, on stop la navigation native d'Angular pour scroller vers l'ancre
        */
        $(".nav-link").click(function (event) {
            event.preventDefault();
            var fragment = event.target.hash;
            var element = document.querySelector(fragment);
            if (element) {
                element.scrollIntoView(true);
            }
        });
    };
    HelpComponent.prototype.getColorForRef = function (ref) {
        var change = this.changeTypesList.filter(function (x) { return x.ref === ref; })[0];
        return change.relatedColor.getRGBA();
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help-components/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help-components/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_service_api_request_service__WEBPACK_IMPORTED_MODULE_2__["ApiRequestService"]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/layer-attribute-table/layer-attribute-table.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/layer-attribute-table/layer-attribute-table.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-lg {\n  max-width: 920px;\n  margin-top: 2rem;\n  margin-left: 2rem;\n}\n\n:host > #layerAttributeTableModal{ z-index: 10001; font-size: 11.2px; overflow: hidden; pointer-events: none; }\n\n:host > div > div >  div.modal-content { overflow: hidden;  }\n\n:host > div > div > div > div.modal-header { padding: 0.5rem; margin-left: 7px; height: 40px; }\n\n:host > div > div > div > div.modal-body { overflow : auto; }\n\n:host > div > div > div > div.modal-body > div.card > div.card-body > div.containerTable{ overflow: scroll; max-height: 520px; }\n\n:host > div > div > div > div.modal-footer > nav  { width: 100%; }\n\n:host > div > div > div > div.modal-footer > nav > div > ul { -webkit-margin-after: 0em; margin-block-end: 0em; }\n\n:host > div > div > div > div.modal-footer > nav > div > ul >  li > input {     display: inline-block;width: 30px; margin-right: 15px; margin-top: 5px; border-color: transparent; border-bottom: rgba(128, 128, 128, 0.4) solid 2px; }\n\n:host > div > div > div > div > div.card {  width: 100%; }\n\n:host > div > div > div > div > div > div.card-body {  padding: 0rem; width: 100%; }\n\n:host > div > div > div > div > div > div.card-body > div { width: 100%; }\n\n:host > div > div > div > div > img.reloadImage {  width: 20px; margin-top: 6px; margin-left: 20px; cursor: pointer; }\n\n.card-body, .containerTable{ padding-bottom: 40px; }\n\n.featureAttributeTable{ display: block; }\n\nthead {\n    height: 40px;\n}\n\ntbody { margin: auto 0; }\n\n.attribute-table tr td, \n.attribute-table tr th { \n    border: 1px solid white; \n    background: transparent; \n    color: white; \n    font-size: 1em; \n    min-width: 90px; \n    white-space:normal; \n    text-align:center; \n}\n\n.attribute-table tr th{ \n    font-weight: normal; \n    background: white;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);\n    margin: 0 10px;\n    border-top: 5px;\n    padding: 5px 0px;\n}\n\n.attribute-table tr td { color: black; }\n\n.attribute { background-color: #CC1517 !important; }\n\n.action { background-color: #E8E8E8 !important; }\n\n/* .action { background-color: #A59C87 !important; } */\n\ntr:nth-child(even), .even { background-color:#E8E8E8; }\n\ntr:nth-child(odd), .odd { background-color:#FFFFFF; }\n\n.centerButtonTable{      \n    background-color: transparent;\n    border: 0px; \n    display : table-cell;\n}\n\n.centerButton{\n    background-color: transparent;\n    width : 15px;\n    cursor : pointer;\n}\n\n.pageSize{\n  margin-right: 25px;\n}\n\n.pageSize > label{\n  margin-right: 2px;\n  height: 100%; \n  margin-top: 7px;\n}\n\n.rangePage{\n  margin-top: 9px;\n  margin-left: 7px;\n  margin-right: 25px;\n  height: 100%; \n  vertical-align: middle;\n}\n\n.pageSize > select{\n  border-color: #dee2e6;\n  border-radius: 5px;\n}\n\n.page-link.active{\n  z-index: 2;\n  /* font-size: 12px; */\n  font-weight: bold; \n  color: #CC1517;\n  text-decoration: none;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n\n.page-link{\n  position: relative;\n  display: block;\n  padding: .5rem .75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #CC1517;\n  /* color: #007bff; */\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n}\n\n#loadingWFS{\n    width: 65px;\n    margin: 0 auto;\n}\n\n.lds-ring {\n\tbackground-color: rgb(250, 135, 146);\n\tz-index: 100000;\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 64px;\n\theight: 64px;\n  }\n\n.lds-ring div {\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 51px;\n\theight: 51px;\n\tmargin: 6px;\n\tborder: 6px solid #fff;\n\tborder-radius: 50%;\n\t-webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\t        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\tborder-color: #fff transparent transparent transparent;\n  }\n\n.lds-ring div:nth-child(1) {\n\t-webkit-animation-delay: -0.45s;\n\t        animation-delay: -0.45s;\n  }\n\n.lds-ring div:nth-child(2) {\n\t-webkit-animation-delay: -0.3s;\n\t        animation-delay: -0.3s;\n  }\n\n.lds-ring div:nth-child(3) {\n\t-webkit-animation-delay: -0.15s;\n\t        animation-delay: -0.15s;\n  }\n\n@-webkit-keyframes lds-ring {\n\t0% {\n\t  -webkit-transform: rotate(0deg);\n\t          transform: rotate(0deg);\n\t}\n\t100% {\n\t  -webkit-transform: rotate(360deg);\n\t          transform: rotate(360deg);\n\t}\n  }\n\n@keyframes lds-ring {\n\t0% {\n\t  -webkit-transform: rotate(0deg);\n\t          transform: rotate(0deg);\n\t}\n\t100% {\n\t  -webkit-transform: rotate(360deg);\n\t          transform: rotate(360deg);\n\t}\n  }"

/***/ }),

/***/ "./src/app/layer-attribute-table/layer-attribute-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layer-attribute-table/layer-attribute-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Modal ajout de couche -->\n<div class=\"modal fade modal-lg\" id=\"layerAttributeTableModal\" #layerAttributeTableModal tabindex=\"-1\" \n  role=\"dialog\" data-backdrop=\"false\" data-keyboard=\"false\"\n  [draggable] dragHandle=\".layerAttributeTableHeader\" dragTarget=\"#layerAttributeTableModal\"\n    aria-labelledby=\"layerAttributeTableModalLabel\" aria-hidden=\"true\" >\n\n  <div class=\"modal-dialog  modal-lg\" id=\"layerAttributeTableModalDialog\" role=\"document\">\n    <div class=\"modal-content\">\n\n      <div class=\"modal-header layerAttributeTableHeader\">\n        <h5 class=\"modal-title\" id=\"layerAttributeTableModalLabel\">\n            <label *ngIf=\"currentLayer\">{{currentLayer.nom_court}}</label> \n        </h5>\n        <!-- <button class=\"reloadButton\" > -->\n          <img class=\"reloadImage\" src=\"./assets/images/reload.png\" title=\"Recharger les valeurs valeurs\"  (click)=\"setLayer(null)\"/>\n        <!-- </button> -->\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <!-- Data table -->\n                <div class=\"containerTable\" *ngIf=\"!loadingWFS && layerAttributeKeyTable.length != 0; else noDataBlock\">                   \n                <table class=\"attribute-table\" id=\"layerAttributeTable\" >\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <ng-container *ngFor=\"let layerAttributeKey of layerAttributeKeyTable\"> \n                        <th *ngIf=\"layerAttributeKey!='bbox' && layerAttributeKey!='osm_original_geom'\" class=\"attribute\">{{layerAttributeKey}} \n                          <i [class]=\"paginationService.getSort()[layerAttributeKey]==-1? 'fa fa-sort-desc': paginationService.getSort()[layerAttributeKey]==0? 'fa fa-sort' : 'fa fa-sort-asc'\" aria-hidden=\"true\" (click)=\"sort(layerAttributeKey)\"></i>\n                        </th>\n                      </ng-container>\n                    </tr>\n                  </thead>\n                  <tbody id=\"layerAttributeTableBody\">\n                    <tr id=\"bodyTable\" *ngFor=\"let layerAttributeValue of layerAttributeValuesTable; let layerAttributeIndex = index\" >\n                      <ng-container *ngFor=\"let layerAttributeKey of layerAttributeKeyTable; let layerAttributeKeyIndex = index\">\n                        <td class=\"action\" *ngIf=\"layerAttributeKeyIndex==0\"  >\n                          <button class=\"centerButtonTable\" (click)=\"centerGeom($event, layerAttributeValue.properties['bbox'])\">\n                            <img id=\"centerMap\" class=\"centerButton\" src=\"./assets/images/localisation.svg\" title=\"Centrer sur la carte\" />\n                          </button>\n                        </td>\n                        <td *ngIf=\"layerAttributeKey!='bbox' && layerAttributeKey!='osm_original_geom'\">\n                          {{ layerAttributeValue.properties[layerAttributeKey] }}\n                        </td>\n                      </ng-container>                      \n                    </tr>\n                  </tbody>\n                </table>  \n              </div>   \n              <ng-template #noDataBlock>\n                {{ 'attribute.nodata' | translate }}\n              </ng-template>\n              <div id=\"loadingWFS\" *ngIf=\"loadingWFS\">\n                <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\"> \n        <nav aria-label=\"Navigation\">\n          <div class=\"pull-left\">\n            <ul class=\"pagination\">\n              <li class=\"page-item pageSize disabled\">\n                <label for=\"pet-select\">{{ 'attribute.nberpage' | translate }}</label>\n                <select #pageSize (change)=\"onChangePageSize()\">\n                  <option *ngFor=\"let pageSize of paginationService.getPageSizeArray()\" value={{pageSize}}>{{pageSize}}</option>\n                </select>\n              </li>\n            <li class=\"page-item disabled\">\n              <label for=\"pet-select\">{{ 'attribute.gopage' | translate }} </label>\n              <input #pageSizeInput type=\"text\" (keydown)=\"handlePageSizeInputKeyDown($event)\">\n            </li>  \n            <li class=\"page-item\" >\n              <label #rangePage for=\"rangePage\" class=\"rangePage\"></label>\n            </li> \n          </ul>\n        </div>\n        <div class=\"pull-right\">\n          <ul class=\"pagination\">\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" #previousPage href=\"#\" tabindex=\"-1\" aria-disabled=\"true\" disabled (click)=\"onChangePreviousPage()\">{{ 'attribute.previouspage' | translate }}</a>\n            </li>\n            <li class=\"page-item disabled\" ><a class=\"page-link active\" #pageItem1 (click)=\"onChangePageIndex($event)\" href=\"#\">1</a></li>\n            <li class=\"page-item disabled\"><a class=\"page-link\" #pageItem2 (click)=\"onChangePageIndex($event)\" href=\"#\">2</a></li>\n            <li class=\"page-item disabled\"><a class=\"page-link\" #pageItem3 (click)=\"onChangePageIndex($event)\" href=\"#\">3</a></li>\n            <ng-container *ngIf=\"paginationService.getLastPageIndex()>4 && paginationService.getPageIndex() < paginationService.getLastPageIndex()-3\">\n              <li class=\"page-item disabled\"><a class=\"page-link\" href=\"#\">...</a></li>\n            </ng-container><ng-container *ngIf=\"paginationService.getLastPageIndex()>=4 && paginationService.getPageIndex() < paginationService.getLastPageIndex()-3\">\n\n              <li class=\"page-item\"><a class=\"page-link\" #pageLastItem (click)=\"onChangeLastPage()\" href=\"#\">{{paginationService.getLastPageIndex()}}</a></li>\n            </ng-container>\n            <li class=\"page-item disabled\">\n              <a class=\"page-link\" #nextPage href=\"#\" (click)=\"onChangeNextPage()\" >{{ 'attribute.nextpage' | translate }}</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layer-attribute-table/layer-attribute-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layer-attribute-table/layer-attribute-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: LayerAttributeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerAttributeTableComponent", function() { return LayerAttributeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var app_model_WFSRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/model/WFSRequest */ "./src/app/model/WFSRequest.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayerAttributeTableComponent = /** @class */ (function () {
    function LayerAttributeTableComponent(mapService, http, paginationService) {
        this.mapService = mapService;
        this.http = http;
        this.paginationService = paginationService;
        this.layerAttributeKeyTable = [];
        this.layerAttributeValuesTable = [];
        this.isInitializedSorter = false;
        this.wfsRequest = new app_model_WFSRequest__WEBPACK_IMPORTED_MODULE_4__["WFSRequest"](this.mapService);
        this.mapService = mapService;
    }
    LayerAttributeTableComponent_1 = LayerAttributeTableComponent;
    LayerAttributeTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialise la barre de navigation après l'affichage IHM
        $(this.modal.nativeElement).on('shown.bs.modal', function () {
            setTimeout(function () {
                _this.paginationService.initializeElementRef(_this.previousPage, _this.pageItem1, _this.pageItem2, _this.pageItem3, _this.nextPage, _this.pageSize, _this.rangePage);
                _this.paginationService.actualizePagination();
            });
        });
        // initialise la barre de navigation après la suppression de l'affichage à l'IHM
        $(this.modal.nativeElement).on('hidden.bs.modal', function () {
            setTimeout(function () {
                _this.paginationService.resetPagination();
                _this.isInitializedSorter = false;
            });
        });
    };
    LayerAttributeTableComponent.prototype.initLayerAttribute = function (layer) {
        this.layerAttributeValuesTable = [];
        if (this.mapService) {
            this.currentZoomMap = this.mapService.getMap().getView().getZoom();
        }
        if (layer) {
            this.wfsRequest.setLayer(layer);
        }
        this.requestWFS();
    };
    // Appel du setter depuis le composant "LayerTreeComponent"
    // mais aussi lors du clic sur le reload de la fenêtre
    LayerAttributeTableComponent.prototype.setLayer = function (layer) {
        if (layer) {
            this.currentLayer = layer;
        }
        this.paginationService.resetPageIndex();
        this.initLayerAttribute(layer);
        // affichage de la fenêtre modal des valeurs attributaires de la couches demandées
        $('#layerAttributeTableModal').modal('show');
    };
    LayerAttributeTableComponent.prototype.initializeSorter = function () {
        var _this = this;
        if (!this.isInitializedSorter) {
            this.layerAttributeKeyTable.forEach(function (headerKey) {
                if (LayerAttributeTableComponent_1.bboxKey != headerKey
                    && LayerAttributeTableComponent_1.osmOriginalGeomKey != headerKey) {
                    _this.paginationService.setSort(headerKey, app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"].UNSORTED);
                }
            });
            this.isInitializedSorter = true;
        }
    };
    ////////////////////////////////////////////////////////////
    // LES EVENEMENTS
    LayerAttributeTableComponent.prototype.onChangePageIndex = function ($event) {
        this.checkChangingMapZoom(function (scope) {
            scope.paginationService.setPageIndex(parseInt($event.target.innerHTML) - 1);
        });
        this.requestWFS();
    };
    /* fonction déclenchée suite au click bouton "Ouvrir" de la dialogue de fichier */
    LayerAttributeTableComponent.prototype.handlePageSizeInputKeyDown = function (event) {
        // Concerne les 2 touches "Entrée"
        if (event.keyCode == 13) {
            var pageInput_1 = parseInt(event.target.value) - 1;
            this.checkChangingMapZoom(function (scope) {
                scope.paginationService.setPageIndex(pageInput_1);
            });
            this.requestWFS();
        }
    };
    LayerAttributeTableComponent.prototype.onChangePreviousPage = function () {
        this.checkChangingMapZoom(function (scope) {
            scope.paginationService.goToPreviousPage();
        });
        this.requestWFS();
    };
    LayerAttributeTableComponent.prototype.checkChangingMapZoom = function (callback) {
        if (this.currentZoomMap == this.mapService.getMap().getView().getZoom()) {
            callback(this);
        }
        else {
            this.currentZoomMap = this.mapService.getMap().getView().getZoom();
            this.paginationService.resetPageIndex();
        }
    };
    LayerAttributeTableComponent.prototype.onChangeNextPage = function () {
        this.checkChangingMapZoom(function (scope) {
            scope.paginationService.goToNextPage();
        });
        this.requestWFS();
    };
    LayerAttributeTableComponent.prototype.onChangePageSize = function () {
        // console.log(" => Nombre d'éléments par page : " + this.pageSize.nativeElement.innerText);
        this.paginationService.resetPageIndex();
        this.paginationService.setPageSize(parseInt(this.pageSize.nativeElement.value));
        this.requestWFS();
    };
    LayerAttributeTableComponent.prototype.onChangeLastPage = function () {
        this.checkChangingMapZoom(function (scope) {
            scope.paginationService.setPageIndex(scope.paginationService.getLastPageIndex());
        });
        this.requestWFS();
    };
    LayerAttributeTableComponent.prototype.parseWFS = function (data) {
        var _this = this;
        var jsonData = JSON.parse(data);
        this.layerAttributeKeyTable = [];
        this.layerAttributeValuesTable = [];
        jsonData.features.forEach(function (element) {
            if (_this.layerAttributeKeyTable.length == 0) {
                _this.layerAttributeKeyTable = Object.keys(element.properties);
            }
            _this.layerAttributeValuesTable.push(element);
        });
        this.paginationService.setData(this.layerAttributeValuesTable);
        this.paginationService.setTotalElement(jsonData['totalFeatures'] ? jsonData['totalFeatures'] : jsonData['numberMatched']);
        this.paginationService.actualizePagination();
    };
    // evenement levé sur le clique du bouton "Centrer", 
    // fait appel au service de carte pour centrer la carte sur la géométrie d el'item concidéré
    LayerAttributeTableComponent.prototype.centerGeom = function ($event, geom) {
        this.mapService.centerItemGeom(geom);
    };
    LayerAttributeTableComponent.prototype.sort = function (layerAttributeKey) {
        this.layerAttributeValuesTable = [];
        var sorterDir = this.paginationService.setSortColumn(layerAttributeKey);
        this.wfsRequest.setSorter(layerAttributeKey, sorterDir);
        this.requestWFS();
    };
    LayerAttributeTableComponent.prototype.requestWFS = function () {
        var _this = this;
        this.loadingWFS = true;
        this.wfsRequest.setStartIndex(this.paginationService.getPageIndex() * this.paginationService.getPageSize());
        this.wfsRequest.setCount(this.paginationService.getPageSize());
        this.http.get(this.wfsRequest.build(), { responseType: 'text' })
            .subscribe(function (data) {
            _this.loadingWFS = false;
            _this.parseWFS(data);
            // initialisation des headers une fois qu'ils sont connus
            _this.initializeSorter();
            _this.pageSizeInput.nativeElement.value = "";
        }, function (error) {
            _this.loadingWFS = false;
            console.log(error);
        });
    };
    var LayerAttributeTableComponent_1;
    LayerAttributeTableComponent.bboxKey = 'bbox';
    // champs geoserver WFS à ne pas afficher 
    LayerAttributeTableComponent.osmOriginalGeomKey = 'osm_original_geom';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageItem1'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "pageItem1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageItem2'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "pageItem2", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageItem3'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "pageItem3", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('previousPage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "previousPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nextPage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "nextPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageSize'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pageSizeInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "pageSizeInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rangePage'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "rangePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layerAttributeTableModal'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LayerAttributeTableComponent.prototype, "modal", void 0);
    LayerAttributeTableComponent = LayerAttributeTableComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layer-attribute-table',
            template: __webpack_require__(/*! ./layer-attribute-table.component.html */ "./src/app/layer-attribute-table/layer-attribute-table.component.html"),
            styles: [__webpack_require__(/*! ./layer-attribute-table.component.css */ "./src/app/layer-attribute-table/layer-attribute-table.component.css")]
        }),
        __metadata("design:paramtypes", [app_service_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"]])
    ], LayerAttributeTableComponent);
    return LayerAttributeTableComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\napp-alert{\n    position:absolute;\n    top:400px;\n    left:480px;\n}\n\n#menuContainer {\n    position: absolute;\n    top: 2%;\n    z-index: 2;\n    right: 0px;\n    width: 200px;\n    overflow: hidden;\n    overflow-y: hidden;\n    scroll-behavior: unset;\n    position: absolute;\n  }\n\napp-permalink {\n    position: absolute;\n    top: 12px;\n    left: 525px;\n}\n\n#report-bug {\n  position: absolute;\n  top: 12px;\n  left: 350px;\n}\n\n:host > div > div > div > span > a {\n  color: #CC1517;\n  \n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"jsonContextLoaded\" class=\"container-fluid\" style=\"overflow: hidden\">\n  <div style=\"position: absolute; right: 0vw; top: -2%; width: 20vw; height: 99vh; max-height: 100vh;\">\n    <div id=\"menuContainer\" class=\"\" style=\"overflow-x: hidden; width: 100%\">\n      <app-map-panel-switcher [userContext]=\"userContext\"></app-map-panel-switcher>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div id=\"mainmap\">\n      <app-map *ngIf=\"userContext\" [userContext]=\"userContext\"></app-map>\n      <app-header></app-header>\n      <app-permalink class=\"d-none d-md-block\"></app-permalink> \n      <span id=\"report-bug\" class=\"d-none d-md-block\">\n        <a href=\"https://gitlab.com/g2600/ch-osm\" target=\"_blank\"> {{ 'main.bug' | translate }}</a> \n      </span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_layer_change_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/layer-change.service */ "./src/app/service/layer-change.service.ts");
/* harmony import */ var _service_user_context_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user-context.service */ "./src/app/service/user-context.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var app_service_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/service/config.service */ "./src/app/service/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainComponent = /** @class */ (function () {
    function MainComponent(route, http, layerChangeService, userContextService, configService) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.layerChangeService = layerChangeService;
        this.userContextService = userContextService;
        this.configService = configService;
        this.configUrl = "./assets/maps/";
        this.jsonContextLoaded = false;
        this.loadConfigAndUserContext();
        this.layerChangeService.getAnnounceLayerChangeEventEmitter().subscribe(function (newSelectedLayer) {
            _this.onMenuLayerChange(newSelectedLayer);
        });
    }
    MainComponent.prototype.onMenuLayerChange = function (newSelectedLayer) {
        this.selectedFeature = undefined;
        this.map.updateState(newSelectedLayer);
    };
    MainComponent.prototype.loadConfigAndUserContext = function () {
        var _this = this;
        this.configService.getConfig()
            .subscribe(function (resp) {
            var self = _this;
            window["config"] = resp;
            // on charge le  contexte utilisateur
            // this.userContext = this.userContextService.loadUserContextFromPermalink();
            _this.userContextService.setContext().subscribe({
                next: function (val) {
                    self.userContext = val;
                    console.log(self.userContext);
                    self.jsonContextLoaded = true;
                    console.log(resp);
                    self.showPopovers();
                }
            });
        });
    };
    MainComponent.prototype.ngOnInit = function () {
        ol.Feature.prototype.getDisplayLabel = function () {
            //console.log('getDisplayLabel')
            if (this.getKeys().indexOf('name') > 0)
                return this.get('name');
            else
                return Math.abs(this.get('osm_id'));
        };
    };
    MainComponent.prototype.ngAfterViewInit = function () {
    };
    MainComponent.prototype.showPopovers = function () {
        $(function () {
            $('#panel-switcher-wrapper').popover({
                html: true,
                trigger: 'manual'
            }).on("hide.bs.popover", function (e) {
                $('#panel-switcher-wrapper').popover('dispose');
            });
            $('[data-toggle="popover"]').popover();
            $('#panel-switcher-wrapper').popover('show');
        });
    };
    MainComponent.prototype.onFeatureInfo = function (featureInfo) {
        this.selectedFeature = featureInfo;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]),
        __metadata("design:type", _map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"])
    ], MainComponent.prototype, "map", void 0);
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _service_layer_change_service__WEBPACK_IMPORTED_MODULE_3__["LayerChangeService"],
            _service_user_context_service__WEBPACK_IMPORTED_MODULE_4__["UserContextService"],
            app_service_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#headingMenu{\n    font-size: 1rem;\n}\n\n.shift {\n  position: relative;\n  left: 30px;\n}\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px solid;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n\n.metadata-circle {\n  margin-left: 2px;\n  cursor:pointer;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  font-size: 10px;\n  color: #fff;\n  line-height: 12px;\n  text-align: center;\n  background: #be7079;\n  /* vertical-align: text-top; */\n}\n\n.form-check-label{\n  margin-right: 2px;\n  padding-left: 10px;\n}\n\nh4 {\n  font-size: 0.7em;\n  font-weight: bold;\n}\n\n.ol-attribution{\n  right: 50px;\n}\n\n.loading-panel{\n\tposition:relative;\n\ttop:-10px;\n\tleft:0px\n}\n\n.loading-counter{\n\tposition:absolute;\n\tcolor:white;\n\tz-index: 100001;\n\ttop:13px;\n\tleft:15px\n}\n\n.lds-ring {\n\t/*background-color: lightskyblue;*/\n\tz-index: 100000;\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 8px;\n\theight: 8px;\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  margin: 6px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n\n@-webkit-keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-ring {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.btn.layer-entry{\n  padding: 0 0 ;\n}\n\n.layer-entry {\n  background: white;\n  font-size: 0.84em;\n  line-height: 100%;\n  background-color: transparent;\n  color: #212529;\n}\n\n.layer-entry.visible {\n  background: #dae2ec;\n}\n\n/* Slider cursor; see styles.css for more details */\n\ninput[type=range] {\n  width: 60px; \n}\n\n:host > div > div > div > div > div > a > div > div > div.card.card-body {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: none;\n  font-size: 0.84em;\n  padding: 0 0 ;\n  background-color: transparent;\n}\n\n:host >div > div > div > div > div > a > div > a { text-decoration:none; }\n\n:host >div > div > div > div > div > a > div > a > i.img-expandable { margin-left : 3px; margin-top : -1px; width: 13px; height: 15px;  -webkit-transform: rotate(90deg);  transform: rotate(90deg); transition: -webkit-transform 0.2s linear; transition: transform 0.2s linear; transition: transform 0.2s linear, -webkit-transform 0.2s linear;  }\n\n:host >div > div > div > div > div > a > div > a.collapsed > i.img-expandable { margin-left : 3px; margin-top : -1px; width: 13px; height: 15px; -webkit-transform: rotate(0deg); transform: rotate(0deg); transition: -webkit-transform 0.2s linear; transition: transform 0.2s linear; transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-layer-attribute-table #featureAttributeTableComponent></app-layer-attribute-table>\r\n\r\n\r\n<div class=\"card-header p-2 text-center\" role=\"tab\" id=\"headingMenu\">\r\n  <div data-toggle=\"collapse\" href=\"#collapseLegend\" aria-expanded=\"true\" aria-controls=\"collapseLegend\">\r\n    <b>{{ 'button.topics' | translate }}</b>\r\n  </div>\r\n</div>\r\n<div role=\"tablist\" aria-multiselectable=\"true\">\r\n    <div *ngFor=\"let categorie of layervariables\" class=\"card\">\r\n        <div class=\"card-header\" role=\"tab\" id=\"categorie{{categorie.id_categorie}}\">\r\n            <h6 class=\"mb-0\">\r\n                <a class=\"categorie-title collapsed\" data-toggle=\"collapse\" data-parent=\"#menuaccordion\" [attr.href]=\"'#collapse'+categorie.id_categorie\"\r\n                    [title]=\"categorie.help || categorie.categorie\"\r\n                    [attr.aria-controls]=\"'#collapse'+categorie.id_categorie\" aria-expanded=\"false\"\r\n                >\r\n                    {{ categorie.categorie | translate }}\r\n                </a>\r\n            </h6>\r\n        </div>\r\n        <div class=\"collapse collapse-close\" [attr.id]=\"'collapse'+categorie.id_categorie\" role=\"tabpanel\" [attr.aria-labelledby]=\"'categorie'+categorie.id_categorie\">\r\n            <div class=\"list-group\">\r\n                <div *ngFor=\"let feature of categorie.features\">\r\n                    <a type=\"button\" class=\"list-group-item btn-feature layer-entry\"\r\n                        style=\"width: 100%;\" \r\n                        [class.visible]=\"mapService.isVisible(feature.layername)\"\r\n                    >\r\n                        <div>\r\n                            \r\n                            <label class=\"form-check-label\">\r\n                                <input type=\"checkbox\" class=\"form-check-input position-static\"\r\n                                [checked]=\"categorie.id_categorie === 4 || (userContext.vLay.indexOf(feature.layername.replace(myRegex, '')) >= 0)\"\r\n                                (click)=\"onSelect($event,feature)\">\r\n                            \r\n                                {{ feature.layername | translate }} \r\n\r\n                            </label>\r\n                            \r\n                            \r\n                            <div (click)=\"onInfo(feature)\" class=\"metadata-circle\" [title]=\"feature.md_url ? 'Metadata' : 'N/A'\"><b>?</b></div>\r\n                            \r\n                            <span *ngIf=\"mapService.isInRange(feature.layername)==false\" \r\n                                style=\"cursor:pointer;margin: 3px;vertical-align: middle;\"\r\n                                title=\"Layer visibility\"\r\n                                data-container=\"body\"\r\n                                data-toggle=\"popover\"\r\n                                data-trigger=\"hover\"\r\n                                data-html=\"true\"\r\n                                data-parent=\"true\"\r\n                                attr.data-content=\"<div class='alert alert-warning'><i class='fa fa-warning' aria-hidden='true'></i> {{ 'panel.visibiltylayer' | translate }}</div>\"\r\n                                data-placement=\"top\"\r\n                            >\r\n                                <i class=\"fa fa-eye-slash\" aria-hidden=\"true\" style=\"font-size: 18px;\"></i>\r\n                            </span>\r\n\r\n                            <a class=\"layer-entry collapsed\" data-toggle=\"collapse\" href=\"#{{feature.nom_court_trim}}Collapse\" role=\"button\" aria-expanded=\"false\">\r\n                                <i class=\"fa fa-chevron-right img-expandable\" aria-hidden=\"true\"></i>\r\n\r\n                                <span class=\"loading-panel\" *ngIf=\"getState(feature)>0\">\r\n                                    <div class=\"loading-counter\">{{getState(feature)}}</div>\r\n                                    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n                                </span>\r\n                            </a>\r\n\r\n                            <div class=\"collapse\" id=\"{{feature.nom_court_trim}}Collapse\" style=\"align-items: center;\">\r\n                                <div class=\"card card-body\">                                                            \r\n                                    <input #ref\r\n                                        type=\"range\" min =\"0\" max=\"100\" step =\"2.5\"\r\n                                        value =\"{{feature.opacity}}\"\r\n                                        (change)=\"changeOpacity($event,feature,ref.value);false\"\r\n                                    />\r\n                                \r\n                                    <span \r\n                                        style=\"cursor:pointer;margin: 3px\"\r\n                                        (click)=\"openAttributeTable($event, feature)\"\r\n                                        title=\"Attribute table\" \r\n                                        data-container=\"body\"\r\n                                        data-toggle=\"popover\"\r\n                                        data-trigger=\"hover\"\r\n                                        data-html=\"true\"\r\n                                        attr.data-content=\"<div class='alert alert-warning'><i class='fa fa-warning' aria-hidden='true'></i> {{ 'panel.visibiltytable' | translate }} </div>\"\r\n                                        data-placement=\"top\"\r\n                                        >\r\n                                        <i class=\"fa fa-th\" aria-hidden=\"true\" ></i> {{ 'panel.attributes' | translate }}\r\n                                    </span>\r\n\r\n                                    <span *ngIf=\"feature.download_kml\" \r\n                                        style=\"cursor:pointer;margin: 3px\"\r\n                                        (click)=\"onKmlDownload($event,feature)\" \r\n                                        title=\"Download KML\"\r\n                                        data-container=\"body\"\r\n                                        data-toggle=\"popover\"\r\n                                        data-trigger=\"hover\"\r\n                                        data-html=\"true\"\r\n                                        attr.data-content=\"<div class='alert alert-warning'><i class='fa fa-warning' aria-hidden='true'></i> {{ 'panel.zonekml' | translate }}</div>\"\r\n                                        data-placement=\"top\"\r\n                                    >\r\n                                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> kml\r\n                                    </span>\r\n                                    <span *ngIf=\"feature.download_shp\"\r\n                                        style=\"cursor:pointer;margin: 3px\"\r\n                                        (click)=\"onShpDownload($event,feature)\"\r\n                                        title=\"Download SHP\" \r\n                                        data-container=\"body\"\r\n                                        data-toggle=\"popover\"\r\n                                        data-trigger=\"hover\"\r\n                                        data-html=\"true\"\r\n                                        attr.data-content=\"<div class='alert alert-warning'><i class='fa fa-warning' aria-hidden='true'></i>{{ 'panel.zoneshp' | translate }}</div>\"\r\n                                        data-placement=\"top\"\r\n                                    >\r\n                                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> shp\r\n                                    </span>\r\n                                    <span *ngIf=\"feature.sld_path\"\r\n                                        style=\"cursor:pointer;margin: 3px\"\r\n                                        (click)=\"onSldDownload($event,feature)\"\r\n                                        title=\"Download SLD\"\r\n                                        data-container=\"body\"\r\n                                        data-toggle=\"popover\"\r\n                                        data-trigger=\"hover\"\r\n                                        data-html=\"true\"\r\n                                        attr.data-content=\"<div class='alert alert-warning'><i class='fa fa-warning' aria-hidden='true'></i>{{ 'panel.styledownload' | translate }}</div>\"\r\n                                        data-placement=\"top\"\r\n                                    >\r\n                                        <i class=\"fa fa-download\" aria-hidden=\"true\"></i> sld\r\n                                    </span>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.ts ***!
  \**********************************************************************************/
/*! exports provided: LayerTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerTreeComponent", function() { return LayerTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _service_layer_change_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/layer-change.service */ "./src/app/service/layer-change.service.ts");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_layer_attribute_table_layer_attribute_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layer-attribute-table/layer-attribute-table.component */ "./src/app/layer-attribute-table/layer-attribute-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var average = function (arr) { return arr.reduce(function (p, c) { return p + c; }, 0) / arr.length; };
var LayerTreeComponent = /** @class */ (function () {
    function LayerTreeComponent(mapService, layerChangeService) {
        this.mapService = mapService;
        this.layerChangeService = layerChangeService;
        this.layervariables = config.LAYERS;
        //Pour utiliser la variable config dans le html
        this.config = config;
        this.myRegex = new RegExp('magosm:', 'g');
    }
    LayerTreeComponent.prototype.ngOnInit = function () {
        var self = this;
        this.layervariables.forEach(function (categorie) {
            categorie.features.forEach(function (feature) {
                feature.nom_court_trim = feature.nom_court.replaceAll(' ', '').replaceAll('(', '').replaceAll(')', '');
            });
        });
    };
    LayerTreeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $("#collapse1").collapse('show');
        //On laisse un timeout le temps que les layers soit chargé dans la carte
        setTimeout(function () { return _this.loadVisibleLayersFromUserContext(); }, 1000);
        //this.loadVisibleLayersFromUserContext();
        $('[data-toggle="popover"]').popover();
    };
    LayerTreeComponent.prototype.loadVisibleLayersFromUserContext = function () {
        if (this.userContext.vLay.indexOf("none") < 0) {
            var vLay = this.userContext.vLay.split(",");
            for (var i = 0; i < vLay.length; i++) {
                var _layername = vLay[i];
                var _layerAndCategory = this.mapService.getCategorieAndLayerByStringAttribute("layername", _layername);
                document.getElementById("collapse" + _layerAndCategory.category).className = "collapse show";
                this.onSelect(null, _layerAndCategory.layer);
            }
        }
    };
    LayerTreeComponent.prototype.onKmlDownload = function (event, variable) {
        event.stopPropagation();
        this.mapService.kmlExport(variable);
    };
    LayerTreeComponent.prototype.onShpDownload = function (event, variable) {
        event.stopPropagation();
        this.mapService.shpExport(variable);
    };
    LayerTreeComponent.prototype.onSldDownload = function (event, variable) {
        event.stopPropagation();
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserver_baseurl + variable.sld_path, "_blank");
    };
    LayerTreeComponent.prototype.getState = function (feature) {
        var lay = this.mapService.getLayersById(feature.layername);
        if (lay && lay.getSource())
            return lay.getSource().loadingCounter;
        return 0;
    };
    //Selection d'une couche
    LayerTreeComponent.prototype.onSelect = function (event, variable) {
        console.log(variable.layername);
        if ($('.popover.fade.show.bs-popover-left')) {
            $('.popover.fade.show.bs-popover-left').remove();
        }
        if (event) {
            event.stopPropagation();
        }
        this.selectedLayer = variable;
        this.layerChangeService.emitAnnounceLayerChangeEvent(this.selectedLayer);
        console.log(variable);
        if (this.mapService.getLayersById(variable.layername).getVisible()) {
            _paq.push(['trackEvent', 'layer_visu', variable.layername]);
        }
    };
    ;
    LayerTreeComponent.prototype.changeOpacity = function (event, variable, value) {
        event.stopPropagation();
        this.mapService.getLayersById(variable.layername).setOpacity(value / 100);
        console.log(event);
        event.stopImmediatePropagation();
        event.preventDefault();
        return false;
    };
    LayerTreeComponent.prototype.onInfo = function (variable) {
        if (variable.md_url) {
            window.open(variable.md_url, "blank");
            _paq.push(['trackEvent', 'layer_info', variable.layername]);
        }
    };
    LayerTreeComponent.prototype.clicktitle = function () {
        var menu = document.getElementById("menuContainer");
        var accordion = document.getElementById("menuaccordion");
        if (menu.style.left && menu.style.left != "") {
            menu.style.left = "";
            accordion.style.visibility = "visible";
        }
        else {
            menu.style.left = 'calc(100% - 65px)';
            accordion.style.visibility = "hidden";
        }
    };
    // Evènement levé lors d'un click sur le bouton "grille" en face du nom d'une couche
    // Cela provoque l'ouverture d'une fenêtre modale contenant les valeurs attributaires de la couche
    LayerTreeComponent.prototype.openAttributeTable = function ($event, feature) {
        this.featureAttributeTableComponent.setLayer(feature);
        _paq.push(['trackEvent', 'attribute_table', feature.layername]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('featureAttributeTableComponent'),
        __metadata("design:type", app_layer_attribute_table_layer_attribute_table_component__WEBPACK_IMPORTED_MODULE_5__["LayerAttributeTableComponent"])
    ], LayerTreeComponent.prototype, "featureAttributeTableComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userContext'),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"])
    ], LayerTreeComponent.prototype, "userContext", void 0);
    LayerTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layer-tree',
            template: __webpack_require__(/*! ./layer-tree.component.html */ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.html"),
            styles: [__webpack_require__(/*! ./layer-tree.component.css */ "./src/app/map-panel-switcher-components/layer-tree/layer-tree.component.css")],
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _service_layer_change_service__WEBPACK_IMPORTED_MODULE_2__["LayerChangeService"]])
    ], LayerTreeComponent);
    return LayerTreeComponent;
}());



/***/ }),

/***/ "./src/app/map-panel-switcher-components/legend/legend.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/legend/legend.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.legendcolor{\n    width:25px;\n    height:15px;\n    display:inline-block;\n    }\n\n#headingLegende{\n    font-size: 1rem;\n}\n\nh4 {\n    font-size: 0.7em;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/legend/legend.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/legend/legend.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header p-2 text-center\" role=\"tab\" id=\"headingLegende\">\n  <div data-toggle=\"collapse\" href=\"#collapseLegend\" aria-expanded=\"true\" aria-controls=\"collapseLegend\">\n    <b>{{ 'panel.attributes' | translate }}</b>\n  </div>\n</div>\n\n<div id=\"collapseLegend\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingLegend\">\n  <div id=\"legendContainer\" style=\"width:100%;height:auto;\">\n    <div *ngIf=\"legendUrls\" id=\"legend\" class=\"legend\">\n      <ng-container *ngFor=\"let legendUrl of legendUrls; let i = index\">\n        <div *ngIf=\"legendSubTitles\">{{legendSubTitles[i]}}</div>\n            <img  src=\"{{legendUrls[i]}}\" class=\"img-fluid\" />\n      </ng-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/legend/legend.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/legend/legend.component.ts ***!
  \**************************************************************************/
/*! exports provided: LegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendComponent", function() { return LegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
    LegendComponent.prototype.ngAfterViewInit = function () {
        //$("#accordionLegend").draggable({cancel:"#legendContainer"});
        $("#menu-close").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "legendUrls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], LegendComponent.prototype, "legendSubTitles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LegendComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LegendComponent.prototype, "currentScale", void 0);
    LegendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-legend',
            template: __webpack_require__(/*! ./legend.component.html */ "./src/app/map-panel-switcher-components/legend/legend.component.html"),
            styles: [__webpack_require__(/*! ./legend.component.css */ "./src/app/map-panel-switcher-components/legend/legend.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/map-controller/map-controller.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  #headingMapController{\n    font-size: 1rem;\n  }\n  .layerbar-nav {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  .layerbar-nav li {\n    line-height: 50px;\n    text-indent: 20px;\n  }\n  ul{\n    padding-left:0px;\n  }\n  #baseLayerCombo{\n\tborder-style: none;\n\tbackground-color: #eceeef;\n  color: #464a4c;\n  font-size: 12px;\n}\n  /*Opacity slider \nSee styles.css for more information*/\n  input[type=range] {\n  width:75%; \n  padding: 0px 0px 0px 0px;\n}\n  /* Partie sur le menu des couches */\n  h4 {\n    font-size: 14px;\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/map-controller/map-controller.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"layerbar-nav\" class=\"layerbar-nav\">  \n  <div class=\"card-header p-2 text-center\" role=\"tab\" id=\"headingMapController\">\n    <b>{{ 'panel.parameters' | translate }}</b>\n  </div>\n  <ul style=\"list-style: none;\">\n    <span id=\"layer-selector\">\n    <li class=\"card-header p-2\"><h4>{{ 'panel.basemap' | translate }}</h4></li>\n    <li>\n        <select id=\"baseLayerCombo\" (change)=\"changeBaseLayer($event.target.value)\">\n          <option value=\"OSM\">OpenStreetMap</option>\n          <option value=\"world\">World</option>\n        </select>\n    </li>\n    </span>  \n    <li id=\"input-range-height-ref\" class=\"card-header p-2\"><h4>{{ 'panel.transparency' | translate }}</h4></li>\n    <li id=\"input-range\">\n        <input class=\"input-range\" \n          #ref type=\"range\" min=\"0\" max=\"100\" step=\"2.5\" \n          value=\"{{baseLayerOpacityRange}}\" \n          (change)=\"changeOpacity(ref.value)\"\n        />\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/map-panel-switcher-components/map-controller/map-controller.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MapControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapControllerComponent", function() { return MapControllerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/UserContext */ "./src/app/model/UserContext.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapControllerComponent = /** @class */ (function () {
    function MapControllerComponent(mapService) {
        var _this = this;
        this.mapService = mapService;
        this.mapService.getAnnounceOpacityChangeEventEmitter().subscribe(function (newOpacity) {
            //console.log(newSelectedLayer)
            _this.baseLayerOpacityRange = newOpacity;
        });
    }
    MapControllerComponent.prototype.ngOnInit = function () {
        //récupère le baseLayer du userContext
        $('option[value=' + this.userContext.bLay + ']').attr('selected', 'selected');
        this.baseLayerOpacityRange = this.userContext.tr;
    };
    MapControllerComponent.prototype.ngAfterViewInit = function () {
        this.fixInputRangeHeight();
    };
    MapControllerComponent.prototype.fixInputRangeHeight = function () {
        //la hauteur du champ input contenant le texte "Transparence" est pris comme référence par les deux inputs voisins (layer-selector et opacity-range)
        var inputRangeHeightRef = document.getElementById('input-range-height-ref').offsetHeight;
        //console.log (inputRangeHeightRef);
        document.getElementById('input-range').style.height = inputRangeHeightRef + 'px';
        document.getElementById('layer-selector').style.height = inputRangeHeightRef + 'px';
    };
    MapControllerComponent.prototype.changeBaseLayer = function (newBaseLayer) {
        this.mapService.changeBaseLayer(newBaseLayer);
    };
    MapControllerComponent.prototype.changeOpacity = function (newValue) {
        this.mapService.changeOpacity(newValue);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userContext'),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"])
    ], MapControllerComponent.prototype, "userContext", void 0);
    MapControllerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-controller',
            template: __webpack_require__(/*! ./map-controller.component.html */ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.html"),
            styles: [__webpack_require__(/*! ./map-controller.component.css */ "./src/app/map-panel-switcher-components/map-controller/map-controller.component.css")]
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], MapControllerComponent);
    return MapControllerComponent;
}());



/***/ }),

/***/ "./src/app/map-panel-switcher/map-panel-switcher.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/map-panel-switcher/map-panel-switcher.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  font-size: 14px;\n}\n\n.btn-feature {\n  text-align: left;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #CC1517;\n  border-color: #CC1517;\n}\n\n/* panneau masquable */\n\n#panel-switcher-wrapper {\n  margin-right: -300px;\n  right: 0;\n  top: 0vw;\n  width: 300px;\n  position: fixed;\n  height: 100%;\n  z-index: 1000;\n  background-color: rgba(255, 255, 255, 0.8);\n  transition: all 0.5s ease-in 0s;\n  -webkit-transition: all 0.5s ease-in 0s;\n  -moz-transition: all 0.5s ease-in 0s;\n  -ms-transition: all 0.5s ease-in 0s;\n  -o-transition: all 0.5s ease-in 0s;\n}\n\n.panel-switcher-opts {\n  right: 5px;\n  position: fixed;\n  z-index: 1;\n  top: 5px;\n  transition: all 0.5s ease-in 0s;\n  -webkit-transition: all 0.5s ease-in 0s;\n  -moz-transition: all 0.5s ease-in 0s;\n  -ms-transition: all 0.5s ease-in 0s;\n  -o-transition: all 0.5s ease-in 0s;\n  background-color: rgba(255,255,255,.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.panel-switcher-opts.active{\n  right: 300px;\n  transition: all 0.5s ease-out 0s;\n  -webkit-transition: all 0.5s ease-out 0s;\n  -moz-transition: all 0.5s ease-out 0s;\n  -ms-transition: all 0.5s ease-out 0s;\n  -o-transition: all 0.5s ease-out 0s;\n}\n\n/* Same colors as the zoom button (on the left) */\n\n.panel-switcher-opts .btn{\n  color: #fff;\n  background-color: rgba(204, 21, 23, 0.5);\n  border: none;\n}\n\n.panel-switcher-opts .btn:hover{\n  text-decoration: none;\n  background-color: rgba(136, 0, 16, 0.7);\n}\n\n.panel-switcher-nav {\n  position: absolute;\n  top: 0;\n  width: 300px;\n  list-style: none;\n  margin: 0;\n  padding: 0; \n}\n\n.panel-switcher-nav li {\n  line-height: 50px;\n  text-indent: 20px;\n}\n\n.panel-switcher-nav li a {\n  color: #999999;\n  display: block;\n  text-decoration: none;\n}\n\n.panel-switcher-nav li a:hover {\n  color: #fff;\n  background: rgba(255,255,255,0.2);\n  text-decoration: none;\n}\n\n.panel-switcher-nav li a:active, .panel-switcher-nav li a:focus {\n  text-decoration: none;\n}\n\n.btn-panel-switcher {\n  width: 110px;\n  height: 25px;\n}\n\n#panel-switcher-wrapper.active {\n  right: 300px;\n  width: 300px;\n  transition: all 0.5s ease-out 0s;\n  -webkit-transition: all 0.5s ease-out 0s;\n  -moz-transition: all 0.5s ease-out 0s;\n  -ms-transition: all 0.5s ease-out 0s;\n  -o-transition: all 0.5s ease-out 0s;\n}\n\n.toggle {\n  margin: 5px 5px 0 0;\n  line-height: .5;\n}\n\n/* Position of the close button **/\n\n#panel-switcher-close.toggle{\n  position: absolute;\n  right:15px;\n}\n\n/* Rules if the width of the screen is under a limit : the 3 options are moving down */\n\n@media all and (max-width: 470px)\n{\n  .panel-switcher-opts{\n    top:60px;\n  }\n}\n\n@media all and (max-width: 1010px)\n{\n  .panel-switcher-opts.active{\n    top: 60px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/map-panel-switcher/map-panel-switcher.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/map-panel-switcher/map-panel-switcher.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"panel-switcher-opts dropright\"><tbody>\r\n  <tr><button  class=\"btn btn-outline-light dropright \"  data-toggle=\"dropdown\" class=\"btn btn-primary dropright\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-translate\" viewBox=\"0 0 16 16\">\r\n     <path d=\"M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z\"/>\r\n     <path d=\"M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z\"/>\r\n   </svg>\r\n  </button>\r\n<div class=\"dropdown-menu dropdown-menu-right\">\r\n <button class=\"dropdown-item\" type=\"button\" (click)=\"useLanguage('de')\" >Deutsch</button>\r\n <button class=\"dropdown-item\" type=\"button\" (click)=\"useLanguage('fr')\" >Français</button>\r\n <button class=\"dropdown-item\" type=\"button\" (click)=\"useLanguage('it')\" >Italiano</button>\r\n <button class=\"dropdown-item\" type=\"button\" (click)=\"useLanguage('en')\" >English</button>\r\n</div>\r\n\r\n\r\n</tr>\r\n  <tr><a id=\"menu-toggle\" (click)=\"setPanelToShow('layerTree')\" href=\"#\" class=\"btn btn-primary btn-panel-switcher toggle\">\r\n    {{ 'button.topics' | translate }}\r\n  </a></tr>\r\n  <tr><a class=\"btn btn-outline-light dropdown-toggle\" (click)=\"setPanelToShow('carte')\" href=\"#\" class=\"btn btn-primary btn-panel-switcher toggle\">\r\n    {{ 'button.parameter' | translate }}\r\n  </a></tr>\r\n\r\n\r\n  <tr >\r\n    <a \r\n      [hidden]=\"!mapService.legendUrls || !(mapService.legendUrls.length>0)\"\r\n      id=\"legende-toggle\" (click)=\"setPanelToShow('legende')\" href=\"#\" class=\"btn btn-primary btn-panel-switcher toggle\"\r\n    >\r\n    {{ 'button.legend' | translate }}\r\n    </a>\r\n  </tr>\r\n</tbody></table>\r\n\r\n<div \r\n  class=\"card row\" id=\"panel-switcher-wrapper\" style=\"overflow-y:auto;overflow-x:hidden;\" title=\" {{ 'panel.explanationtitle' | translate }} \"\r\n  data-container=\"body\"\r\n  data-toggle=\"popover\"\r\n  data-html=\"true\"\r\n  translate=\"true\"\r\n  data-content=\"<img src='assets/images/helper.gif'/ height='120'>\"\r\n  data-placement=\"left\"\r\n>\r\n  <div class=\"panel-switcher-nav\" role=\"tab\">\r\n    <!-- To close the panel switcher -->\r\n    <a id=\"panel-switcher-close\" href=\"#\" class=\"btn btn-outline-secondary btn-sm pull-right toggle\">\r\n      <b class=\"glyphicon glyphicon-remove\">X</b>\r\n    </a>\r\n    <app-layer-tree [hidden]=\"panelToShow != 'layerTree'\" [userContext]=\"userContext\" id=\"layerTree\"></app-layer-tree>\r\n    <app-map-controller *ngIf=\"panelToShow == 'carte'\" [userContext]=\"userContext\"></app-map-controller>\r\n    <app-legend\r\n      *ngIf=\"panelToShow == 'legende'\"\r\n      [legendUrls]=\"mapService.legendUrls\" [legendSubTitles]=\"mapService.legendSubTitles\" [legendTitle]=\"mapService.legendTitle\"\r\n      [currentScale]=\"mapService.currentScale\" id=\"accordionLegend\"\r\n    >\r\n    </app-legend>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/map-panel-switcher/map-panel-switcher.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/map-panel-switcher/map-panel-switcher.component.ts ***!
  \********************************************************************/
/*! exports provided: MapPanelSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPanelSwitcherComponent", function() { return MapPanelSwitcherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPanelSwitcherComponent = /** @class */ (function () {
    function MapPanelSwitcherComponent(translate, router, mapService, cdr) {
        this.translate = translate;
        this.router = router;
        this.mapService = mapService;
        this.cdr = cdr;
        this.panelToShow = 'layerTree'; //par défaut on charge le panel Menu
        // As soon we close the panel, we want the startup dialog to hide. But for
        // some reason (side effect of Angular's rerender on Bootstrap's popover?),
        // the DOM element for the dialog is created again when one clicks on the
        // close panel button. Thus we use a local variable that we check every time
        // the popover is "inserted", to force it to hide after a first click to close
        // (see below).
        this.showStartDialog = true;
    }
    //use language selected
    MapPanelSwitcherComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    MapPanelSwitcherComponent.prototype.ngOnInit = function () {
        var self = this;
        $("#panel-switcher-close").click(function (e) {
            console.log("close");
            self.showStartDialog = false;
            $('#panel-switcher-wrapper').popover('hide');
            e.preventDefault();
            self.closePanel();
        });
        $(".btn-panel-switcher").click(function (e) {
            e.preventDefault();
        });
        $('#panel-switcher-wrapper').on('inserted.bs.popover', function () {
            if (!self.showStartDialog) {
                $('#panel-switcher-wrapper').popover('hide');
            }
        });
        this.setPanelToShow('layerTree');
    };
    MapPanelSwitcherComponent.prototype.setPanelToShow = function (newPanelToShow) {
        var oldPanel = this.panelToShow;
        var newPanel = newPanelToShow;
        this.panelToShow = newPanelToShow; //mise à jour du panelToShow
        //gestion de l'ouverture/fermeture du panneau sur le bon composant
        if (!$(".panel-switcher-opts").hasClass("active")) { //si le panneau est fermé, on l'ouvre
            $("#panel-switcher-wrapper").toggleClass("active");
            $(".panel-switcher-opts").toggleClass("active");
            //console.log('this.panelToShow : '+panelToShow)
            _paq.push(['trackEvent', 'panel_open', newPanelToShow]);
        }
        else { //si le panneau est déjà ouvert
            if ((oldPanel == newPanel)) { //si on clique sur l'option actuellement visible : on ferme le panneau
                this.closePanel();
            }
        }
    };
    MapPanelSwitcherComponent.prototype.closePanel = function () {
        $(".panel-switcher-opts").toggleClass("active");
        $("#panel-switcher-wrapper").toggleClass("active");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userContext'),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"])
    ], MapPanelSwitcherComponent.prototype, "userContext", void 0);
    MapPanelSwitcherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-panel-switcher',
            template: __webpack_require__(/*! ./map-panel-switcher.component.html */ "./src/app/map-panel-switcher/map-panel-switcher.component.html"),
            styles: [__webpack_require__(/*! ./map-panel-switcher.component.css */ "./src/app/map-panel-switcher/map-panel-switcher.component.css")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MapPanelSwitcherComponent);
    return MapPanelSwitcherComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.css":
/*!***************************************!*\
  !*** ./src/app/map/map.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#accordionLegend{\n\tposition:absolute;\n\ttop:10%;\n\tleft:2%;\n\twidth:15%;\n}\n\n#accordionFeaturePanel{\n\tposition:absolute;\n\ttop: calc(10% + 265px);\n\tleft:calc(2% - 15px);\n\twidth:calc(20% + 30px);\n}\n\n#loading-counter{\n\tposition:absolute;\n\tcolor:white;\n\tz-index: 100001;\n\ttop:20px;\n\tleft:25px\n}\n\n.lds-ring {\n\tbackground-color: #CC1517;\n\tz-index: 100000;\n\tdisplay: inline-block;\n\tposition: relative;\n\twidth: 64px;\n\theight: 64px;\n  }\n\n.lds-ring div {\n\tbox-sizing: border-box;\n\tdisplay: block;\n\tposition: absolute;\n\twidth: 51px;\n\theight: 51px;\n\tmargin: 6px;\n\tborder: 6px solid #fff;\n\tborder-radius: 50%;\n\t-webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\t        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n\tborder-color: #fff transparent transparent transparent;\n  }\n\n.lds-ring div:nth-child(1) {\n\t-webkit-animation-delay: -0.45s;\n\t        animation-delay: -0.45s;\n  }\n\n.lds-ring div:nth-child(2) {\n\t-webkit-animation-delay: -0.3s;\n\t        animation-delay: -0.3s;\n  }\n\n.lds-ring div:nth-child(3) {\n\t-webkit-animation-delay: -0.15s;\n\t        animation-delay: -0.15s;\n  }\n\n@-webkit-keyframes lds-ring {\n\t0% {\n\t  -webkit-transform: rotate(0deg);\n\t          transform: rotate(0deg);\n\t}\n\t100% {\n\t  -webkit-transform: rotate(360deg);\n\t          transform: rotate(360deg);\n\t}\n  }\n\n@keyframes lds-ring {\n\t0% {\n\t  -webkit-transform: rotate(0deg);\n\t          transform: rotate(0deg);\n\t}\n\t100% {\n\t  -webkit-transform: rotate(360deg);\n\t          transform: rotate(360deg);\n\t}\n  }\n\n#loading-panel{\n\tposition:absolute;\n\ttop:80px;\n\tleft:42px\n}\n\napp-apiadresse{\n\tposition:absolute;\n\ttop:10px;\n\tleft:160px;\n}\n\n#map-scale {\n\tleft: 180px;\n}\n\n#map-zoom-level{\n\tleft: 13px;\n\twidth:25px;\n\ttop: 120px;\n\tfont-size: 0.9em;\n\n}\n\n#mouse-position {\n\tleft: 330px;\n}\n\n#mouse-position, #map-scale, #map-zoom-level {\n\tpadding: 1px 5px;\n\tborder-radius: 3px;\n\tposition:absolute;\n\tdisplay: inline-block;\n\tcolor: #444;\n\tbackground: rgba(255, 255, 255, 0.6);\n}\n\n#mouse-position, #map-scale{\n\tbottom: 8px;\n\tfont-size: 0.7em;\n}\n\n#toggle-legend.collapsed span::after {\n\tcontent: '»';\n}\n\n#toggle-legend span::after {\n\tcontent: '«';\n}\n\n.map {\n\theight: 100vh;\n\twidth: 100vw;\n}\n\nlabel  {\n\tmargin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative\">\n  <div\n    id=\"map\" class=\"map\"\n    (drop)=\"onDrop($event)\"\n    (dragover)=\"onDragOver($event)\"\n  ></div>\n  <app-apiadresse (citySelected)=\"onCitySelected($event)\"></app-apiadresse>\n  <div id=\"map-scale\"></div>\n  <div id=\"map-zoom-level\"></div>\n  <div id=\"mouse-position\"></div>\n  <div id=\"loading-panel\" *ngIf=\"mapService.loadingCounter>0\">\n    <div id=\"loading-counter\">{{mapService.loadingCounter}}</div>\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n  </div>\n  <app-feature-panel\n    *ngIf=\"selectedFeature\"\n    [selectedLayer]=\"selectedLayer\"\n    [selectedFeatures]=\"selectedFeature\"\n    id=\"accordionFeaturePanel\"\n  ></app-feature-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apiadresse_apiadresse_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiadresse/apiadresse.component */ "./src/app/apiadresse/apiadresse.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _service_layer_change_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/layer-change.service */ "./src/app/service/layer-change.service.ts");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var isUrl = function (str) {
    // If str is not a valid URL, "new URL(str)" throw an exception.
    try {
        var url = new URL(str);
        return true;
    }
    catch (error) {
        return false;
    }
};
var getUrlFromDataTransfer = function (dataTransfer) {
    if (dataTransfer.types.indexOf('text/uri-list') !== -1) {
        return dataTransfer.getData('URL');
    }
    else if (dataTransfer.types.indexOf('text/plain') !== -1
        && isUrl(dataTransfer.getData('text/plain'))) {
        return dataTransfer.getData('text/plain');
    }
    else {
        return undefined;
    }
};
var MapComponent = /** @class */ (function () {
    function MapComponent(translate, mapService, http, router, layerChangeService) {
        var _this = this;
        this.translate = translate;
        this.mapService = mapService;
        this.http = http;
        this.router = router;
        this.layerChangeService = layerChangeService;
        //Pour utiliser la variable config dans le html
        this.config = config;
        //commenter les bonnes lignes dans le fichier de config selon qu'on est en local ou en intégration
        this.geoserver_baseurl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].geoserver_baseurl;
        //Constantes utiles pour calculer l'échelle à partir de la résolution
        this.gridset = config.GRIDSET;
        this.INCHES_PER_UNIT = { 'm': 39.37, 'dd': 4374754 };
        this.DOTS_PER_INCH = 72;
        this.layerChangeService.getAnnounceLayerChangeEventEmitter().subscribe(function (newSelectedLayer) {
            //console.log(newSelectedLayer)
            _this.selectedLayer = newSelectedLayer;
        });
    }
    MapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    MapComponent.prototype.ngAfterViewInit = function () {
    };
    MapComponent.prototype.initMap = function () {
        //proj4.defs(MainmapComponent.PROJECTION_CODE, "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m   +no_defs");
        var mousePositionControl = new ol.control.MousePosition({
            coordinateFormat: function (coords) {
                return ol.coordinate.format(coords, 'Lat : {y}° Lon : {x}° (WGS84)', 4);
            },
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position'),
            undefinedHTML: '&nbsp;'
        });
        var center = [this.userContext.lon, this.userContext.lat];
        this.view = new ol.View({
            projection: config.PROJECTION_CODE,
            center: ol.proj.transform(center, 'EPSG:4326', config.PROJECTION_CODE),
            zoom: this.userContext.z,
            minZoom: 3 //,
            //maxZoom: 18
        });
        //création de la map
        this.map = new ol.Map({
            controls: ol.control.defaults({
                attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
                    collapsible: false
                })
            }).extend([
                mousePositionControl,
                new ol.control.ScaleLine()
            ]),
            target: 'map',
            view: this.view
        });
        this.mapService.setMap(this.map, this.userContext);
        this.mapService.addSelectionLayer();
        this.map.on('click', this.onClick.bind(this));
        this.map.on('moveend', this.onZoom.bind(this));
        this.mapService.addLayer('world', 'assets/data/countries_ecem.geojson');
        var parser = new ol.format.WMTSCapabilities();
        var self = this;
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].geoserver_baseurl + '/gwc/service/wmts?REQUEST=GetCapabilities', { responseType: 'text' })
            .subscribe(function (data) {
            console.log(data);
            self.mapService.setWMTSResult(parser.read(data));
            self.initLayersFromConfig();
        }, function (error) {
            console.log(error);
        });
        this.currentResolution = this.view.getResolution();
        this.currentScale = this.mapService.getScaleFromResolution(this.view.getResolution(), this.map.getView().getProjection().getUnits(), true);
        this.updateScale();
        this.updateZoomLevel();
    };
    MapComponent.prototype.initLayersFromConfig = function () {
        var layers = config.LAYERS;
        for (var i = layers.length - 1; i >= 0; i--) {
            var categorie = layers[i];
            for (var j = categorie.features.length - 1; j >= 0; j--) {
                console.log(categorie.features[j]);
                categorie.features[j].opacity = 100;
                if (categorie.features[j].type == "WMS") {
                    this.mapService.addWMSLayer(categorie.features[j], false);
                }
                else if (categorie.features[j].type == "WMTS") {
                    this.mapService.addWMTSLayer(categorie.features[j], false);
                }
                else if (categorie.features[j].type == "VectorTile") {
                    this.mapService.addVectorTileLayer(categorie.features[j], false);
                }
            }
        }
    };
    MapComponent.prototype.onZoom = function (event) {
        this.currentScale = this.mapService.getScaleFromResolution(this.view.getResolution(), this.map.getView().getProjection().getUnits(), true);
        this.updateScale();
        this.updateZoomLevel();
        this.computeSingleLegend();
    };
    MapComponent.prototype.updateScale = function () {
        var scale = parseInt(this.currentScale);
        var strScale = scale.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        document.getElementById('map-scale').innerHTML = '1 /' + strScale + '    ';
    };
    MapComponent.prototype.updateZoomLevel = function () {
        var zoom = this.map.getView().getZoom();
        //console.log(zoom)
        document.getElementById('map-zoom-level').innerHTML = '<center>' + Math.round(zoom) + '</center>';
    };
    //use language selected
    MapComponent.prototype.useLanguage = function (language) {
        this.translate.use(language);
    };
    MapComponent.prototype.updateState = function (newSelectedLayer) {
        try { //on ajoute l'aggrégation de couche correspondant à l'indicateur
            this.selectedLayer = newSelectedLayer;
            console.log("this.selectedLayer : " + this.selectedLayer);
            var layer = this.mapService.getLayersById(this.selectedLayer.layername);
            this.currentLayer = layer;
            if (newSelectedLayer.maxScaleDenominator) {
                if (this.mapService.getScale() > newSelectedLayer.maxScaleDenominator && !layer.getVisible()) {
                    var minZoom = this.mapService.getZoomFromScale(newSelectedLayer.maxScaleDenominator);
                    alert(this.translate.instant('alert.display') + "\n" + this.translate.instant('alert.display2') + minZoom + " ( 1/" + newSelectedLayer.maxScaleDenominator + "). " + this.translate.instant('alert.display2'));
                }
            }
            layer.setVisible(!layer.getVisible());
            if (this.selectedFeature) { //on réinitialise selectedFeature
                console.log("this.selectedFeature");
                this.mapService.cleanSelection();
                this.selectedFeature = null;
            }
        }
        catch (e) {
            console.log(e);
        }
        try {
            this.mapService.legendTitle = newSelectedLayer.nom_court;
            this.computeSingleLegend();
        }
        catch (e) {
            console.log(e);
        }
    };
    MapComponent.prototype.onClick = function (event) {
        var viewResolution = /** @type {number} */ (this.view.getResolution());
        if (this.selectedLayer) {
            this.visibleLayers = [this.currentLayer];
            this.id_layers = this.selectedLayer.layername;
            this.printSelectedFeatureOnMap(this.visibleLayers, this.id_layers, viewResolution, event);
        }
        if ($('.popover.fade.show.bs-popover-left')) {
            $('.popover.fade.show.bs-popover-left').remove();
        }
    };
    MapComponent.prototype.setVisibleLayersAndLegends = function () {
        console.log("setVisibleLayersAndLegends");
        this.visibleLayers = [];
        this.id_layers = '';
        this.id_legends = [];
        this.mapService.legendSubTitles = [];
        var array_id_layers = [];
        this.id_layers = array_id_layers.join(',');
        console.log(this.id_legends);
        return true;
    };
    ;
    MapComponent.prototype.printSelectedFeatureOnMap = function (visibleLayers, id_layers, viewResolution, event) {
        id_layers = this.mapService.getVisibleLayersIdList();
        var url = new ol.source.TileWMS(({
            url: this.geoserver_baseurl + "/wms?",
            crossOrigin: 'anonymous',
            params: ({ 'LAYERS': id_layers })
        })).getGetFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'text/xml', 'QUERY_LAYERS': id_layers, 'BUFFER': '10', 'FEATURE_COUNT': '10' });
        if (this.currentScale) {
            this.http.get(url, { responseType: 'text' })
                .subscribe((function (response) {
                var allFeatures = new ol.format.WMSGetFeatureInfo().readFeatures(response);
                if (this.selectedFeature) { //on réinitialise vectorSource
                    this.mapService.cleanSelection();
                    this.selectedFeature = null;
                }
                if (allFeatures.length >= 1) { //si on clique sur 1 seul objet
                    this.selectFeatures(allFeatures);
                }
            }).bind(this));
        }
    };
    MapComponent.prototype.selectFeatures = function (allFeatures) {
        this.selectedFeature = allFeatures; //ajoute le feature en surcouche à la carte
        this.mapService.addToSelection(this.selectedFeature[0]);
        if (this.selectedFeature[0].getKeys().indexOf("osm_original_geom") >= 0) {
            var wkt_geom = this.selectedFeature[0].get("osm_original_geom");
            // si l'on manipule des objets de type point (ou "node"), 
            // nous n'avons pas de geom, donc nous ne traitons pas ce cas ici
            if (wkt_geom) {
                //  nous manipulons des objets geom de type polygone (ou "way"), l'objet contient une géométrie
                var format = new ol.format.WKT();
                var feature = format.readFeature(wkt_geom.split(';')[1], {
                    dataProjection: 'EPSG:3857',
                    featureProjection: 'EPSG:3857'
                });
                this.mapService.addToSelection(feature);
            }
        }
        console.log(this.selectedFeature);
    };
    MapComponent.prototype.zoomTo = function (location, zoomlevel) {
        this.map.getView().setCenter(ol.proj.transform(location, 'EPSG:4326', config.PROJECTION_CODE), 16);
        this.map.getView().setZoom(zoomlevel);
    };
    MapComponent.prototype.hideLayer = function (layer, layerName) {
        if (document.getElementById(layerName).checked) {
            layer.setVisible(true);
        }
        else {
            layer.setVisible(false);
        }
    };
    MapComponent.prototype.computeSingleLegend = function () {
        var ids = this.mapService.getVisibleLayersIdArrayList();
        this.mapService.legendUrls = [];
        this.mapService.legendSubTitles = [];
        for (var i = 0; i < ids.length; i++) {
            if (this.mapService.isInRange(ids[i])) {
                var _layerAndCategory = this.mapService.getCategorieAndLayerByStringAttribute("layername", ids[i]);
                this.mapService.legendSubTitles.push(_layerAndCategory.layer.nom_court);
                this.mapService.legendUrls.push(this.geoserver_baseurl + '/wms?LAYER=' + ids[i] + '&SERVICE=WMS&VERSION=1.3.0&STRICT=false&REQUEST=GetLegendGraphic&FORMAT=image%2Fpng&TRANSPARENT=true&SCALE=' + this.currentScale);
            }
        }
        // this.legendUrls = [];
        console.log(this.mapService.legendUrls);
    };
    MapComponent.prototype.onCitySelected = function (city) {
        if (city.attrs.x) {
            // on calcule le zoom pour l'adapter au résultat de la recherche en fonction du type d'objet trouvé :
            // type : (housenumber | street  | locality | municipality)
            var zoomlevel = city.attrs.zoomlevel;
            var coordinates = [city.attrs.lon, city.attrs.lat];
            var rank = city.attrs.origin;
            if (rank == 'Kantone') {
                zoomlevel = 10;
            }
            else if (rank == 'district') {
                zoomlevel = 12;
            }
            else if (rank == 'gg25') {
                zoomlevel = 14;
            }
            else if (rank == 'address') {
                zoomlevel = 18;
            }
            else if (rank == 'gazetteer') {
                zoomlevel = 19;
            }
            ;
            // On fait le zoom
            this.zoomTo(coordinates, zoomlevel);
        }
    };
    MapComponent.prototype.addShapefileLayerInConfig = function (_a) {
        var layername = _a.layername, nom_court = _a.nom_court, type = _a.type;
        var layer = {
            layername: layername,
            nom_court: nom_court,
            type: type,
            'download_kml': false,
            'download_shp': false
        };
        var idForCustomSourcesCategory = 4;
        var customSourcesCategory = config.LAYERS.find(function (category) { return (category.id_categorie === idForCustomSourcesCategory); });
        customSourcesCategory.features.push(layer);
    };
    MapComponent.prototype.onDrop = function (event) {
        var _this = this;
        event.preventDefault();
        var url = getUrlFromDataTransfer(event.dataTransfer);
        if (url !== undefined) {
            var id_1 = "shapefile:url:[" + url + "]";
            this.mapService.addShapefileLayer(id_1, url)
                .then(function () {
                _this.addShapefileLayerInConfig({
                    'layername': id_1,
                    'nom_court': url,
                    'type': 'ShapeFileUrl'
                });
                _paq.push(['trackEvent', "layer_list", 'add_shapefile_url']);
            }).catch(function (error) {
                alert("Le fichier ne semble pas être au format ShapeFile.");
            });
        }
        else if (event.dataTransfer.files.length > 0) {
            var file_1 = event.dataTransfer.files[0];
            var reader = new FileReader();
            reader.onload = function (e) {
                var buffer = e.target.result;
                // TODO id collision if several shapefiles have the same name. Use a hash
                // on the arraybuffer? For now, only use a random number to mitigeate
                // collision.
                var pseudoUniqueId = Math.floor(Math.random() * 1000000000000);
                var id = "shapefile:buffer:" + file_1.name + ":" + pseudoUniqueId;
                _this.mapService.addShapefileLayer(id, buffer)
                    .then(function () {
                    _this.addShapefileLayerInConfig({
                        'layername': id,
                        'nom_court': file_1.name,
                        'type': 'ShapeFileBuffer'
                    });
                    _paq.push(['trackEvent', "layer_list", 'add_local_shapefile', file_1.size]);
                }).catch(function (error) {
                    alert("Le fichier ne semble pas être au format ShapeFile.");
                });
            };
            reader.readAsArrayBuffer(file_1);
        }
    };
    MapComponent.prototype.onDragOver = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('userContext'),
        __metadata("design:type", _model_UserContext__WEBPACK_IMPORTED_MODULE_6__["UserContext"])
    ], MapComponent.prototype, "userContext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_apiadresse_apiadresse_component__WEBPACK_IMPORTED_MODULE_2__["ApiAdresseComponent"]),
        __metadata("design:type", _apiadresse_apiadresse_component__WEBPACK_IMPORTED_MODULE_2__["ApiAdresseComponent"])
    ], MapComponent.prototype, "apiadresse", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/map/map.component.css")],
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
            _service_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_layer_change_service__WEBPACK_IMPORTED_MODULE_5__["LayerChangeService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/Change.ts":
/*!************************************************!*\
  !*** ./src/app/model/ChangesClasses/Change.ts ***!
  \************************************************/
/*! exports provided: Change */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Change", function() { return Change; });
var Change = /** @class */ (function () {
    function Change() {
    }
    ;
    return Change;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/ChangeType.ts":
/*!****************************************************!*\
  !*** ./src/app/model/ChangesClasses/ChangeType.ts ***!
  \****************************************************/
/*! exports provided: ChangeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeType", function() { return ChangeType; });
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color */ "./src/app/model/ChangesClasses/Color.ts");

var ChangeType = /** @class */ (function () {
    function ChangeType(data) {
        Object.assign(this, data);
    }
    Object.defineProperty(ChangeType.prototype, "relatedColor", {
        get: function () {
            return new _Color__WEBPACK_IMPORTED_MODULE_0__["Color"](this.color);
        },
        enumerable: true,
        configurable: true
    });
    return ChangeType;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/ChangesRequest.ts":
/*!********************************************************!*\
  !*** ./src/app/model/ChangesClasses/ChangesRequest.ts ***!
  \********************************************************/
/*! exports provided: ChangesRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesRequest", function() { return ChangesRequest; });
var ChangesRequest = /** @class */ (function () {
    function ChangesRequest() {
    }
    return ChangesRequest;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/Color.ts":
/*!***********************************************!*\
  !*** ./src/app/model/ChangesClasses/Color.ts ***!
  \***********************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Color = /** @class */ (function () {
    function Color(data) {
        Object.assign(this, data);
    }
    Color.prototype.getRGBA = function () {
        return "rgba(" + this.R + "," + this.G + "," + this.B + ")";
    };
    return Color;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/FeatureChangesRequest.ts":
/*!***************************************************************!*\
  !*** ./src/app/model/ChangesClasses/FeatureChangesRequest.ts ***!
  \***************************************************************/
/*! exports provided: FeatureChangesRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureChangesRequest", function() { return FeatureChangesRequest; });
var FeatureChangesRequest = /** @class */ (function () {
    function FeatureChangesRequest() {
    }
    return FeatureChangesRequest;
}());



/***/ }),

/***/ "./src/app/model/ChangesClasses/Tag.ts":
/*!*********************************************!*\
  !*** ./src/app/model/ChangesClasses/Tag.ts ***!
  \*********************************************/
/*! exports provided: Tag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
var Tag = /** @class */ (function () {
    function Tag(key, valueNew, valueOld) {
        this.key = key;
        this.valueNew = valueNew;
        this.valueOld = valueOld;
    }
    return Tag;
}());



/***/ }),

/***/ "./src/app/model/FeatureMainInfoClasses/FeatureImportantTags.ts":
/*!**********************************************************************!*\
  !*** ./src/app/model/FeatureMainInfoClasses/FeatureImportantTags.ts ***!
  \**********************************************************************/
/*! exports provided: FeatureImportantTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureImportantTags", function() { return FeatureImportantTags; });
/* harmony import */ var _KeyLabelObjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyLabelObjectList */ "./src/app/model/FeatureMainInfoClasses/KeyLabelObjectList.ts");

var FeatureImportantTags = /** @class */ (function () {
    function FeatureImportantTags(feature, importantLevelObj) {
        this.importance = importantLevelObj.importance;
        this.tagList = new _KeyLabelObjectList__WEBPACK_IMPORTED_MODULE_0__["KeyLabelObjectList"](feature, importantLevelObj.sub_tags);
    }
    FeatureImportantTags.prototype.isEmpty = function () {
        return this.tagList.isEmpty();
    };
    return FeatureImportantTags;
}());



/***/ }),

/***/ "./src/app/model/FeatureMainInfoClasses/FeatureImportantTagsList.ts":
/*!**************************************************************************!*\
  !*** ./src/app/model/FeatureMainInfoClasses/FeatureImportantTagsList.ts ***!
  \**************************************************************************/
/*! exports provided: FeatureImportantTagsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureImportantTagsList", function() { return FeatureImportantTagsList; });
/* harmony import */ var _FeatureImportantTags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatureImportantTags */ "./src/app/model/FeatureMainInfoClasses/FeatureImportantTags.ts");

var FeatureImportantTagsList = /** @class */ (function () {
    function FeatureImportantTagsList(feature, layer) {
        this.list = Array();
        if (layer.feature_main_info != undefined) {
            for (var i = 0; i < layer.feature_main_info.length; i++) { //For each level of importance of the feature-main-info
                var featureImportantTags = new _FeatureImportantTags__WEBPACK_IMPORTED_MODULE_0__["FeatureImportantTags"](feature, layer.feature_main_info[i]);
                this.list.push(featureImportantTags);
            }
        }
    }
    FeatureImportantTagsList.prototype.isEmpty = function () {
        var isEmptyBool = true;
        for (var i in this.list) {
            isEmptyBool = isEmptyBool && this.list[i].isEmpty();
        }
        return isEmptyBool;
    };
    FeatureImportantTagsList.prototype.getAddrTagsList = function () {
        var used_addr = Array();
        var addrTags = Array();
        var noImportance = this.list.filter(function (x) { return x.importance === 'no'; })[0];
        if (noImportance != undefined) {
            noImportance.tagList.list.filter(function (x) { return x.key.startsWith('addr'); }).forEach(function (x) {
                addrTags.push(x.key);
            });
            //group housenumber and street
            if (addrTags.indexOf('addr-housenumber') >= 0 && addrTags.indexOf('addr-street') >= 0) {
                used_addr.push('addr-housenumber');
                used_addr.push('addr-street');
            }
            //group postcode and city
            if (addrTags.indexOf('addr-postcode') >= 0 && addrTags.indexOf('addr-city') >= 0) {
                used_addr.push('addr-postcode');
                used_addr.push('addr-city');
            }
            for (var addr in addrTags) {
                if (used_addr.indexOf(addrTags[addr]) < 0) {
                    // add others addr tags if they exist
                    used_addr.push(addrTags[addr]);
                }
            }
        }
        return used_addr;
    };
    return FeatureImportantTagsList;
}());



/***/ }),

/***/ "./src/app/model/FeatureMainInfoClasses/KeyLabelObject.ts":
/*!****************************************************************!*\
  !*** ./src/app/model/FeatureMainInfoClasses/KeyLabelObject.ts ***!
  \****************************************************************/
/*! exports provided: KeyLabelObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyLabelObject", function() { return KeyLabelObject; });
var KeyLabelObject = /** @class */ (function () {
    function KeyLabelObject(keyLabel) {
        this.key = keyLabel.osm_key;
        this.label = keyLabel.label;
    }
    return KeyLabelObject;
}());



/***/ }),

/***/ "./src/app/model/FeatureMainInfoClasses/KeyLabelObjectList.ts":
/*!********************************************************************!*\
  !*** ./src/app/model/FeatureMainInfoClasses/KeyLabelObjectList.ts ***!
  \********************************************************************/
/*! exports provided: KeyLabelObjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyLabelObjectList", function() { return KeyLabelObjectList; });
/* harmony import */ var _KeyLabelObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyLabelObject */ "./src/app/model/FeatureMainInfoClasses/KeyLabelObject.ts");

var KeyLabelObjectList = /** @class */ (function () {
    function KeyLabelObjectList(feature, listOfKeys) {
        this.list = Array();
        if (listOfKeys != null) {
            var priority = 1; //See below : to find the key which has the highest priority (ie the lowest number) and which is in the list of Keys of the feature
            var keyFound = false;
            var unimportantList = listOfKeys.filter(function (x) { return x.priority === undefined; }); // Tags with no priority --> importance:"no"
            var importantList = listOfKeys.filter(function (x) { return x.priority > 0; }); //Tags with priority --> importance="high","medium","low"
            while (importantList.length >= priority && !keyFound) { //as long as the list has not been scanned coompletely and the key is not found and  
                var keyLabelPriority = importantList.filter(function (x) { return x.priority === priority; })[0];
                if (keyLabelPriority != undefined && feature.getKeys().indexOf(keyLabelPriority.osm_key) >= 0) {
                    var keyLabelObject = new _KeyLabelObject__WEBPACK_IMPORTED_MODULE_0__["KeyLabelObject"](keyLabelPriority);
                    this.list.push(keyLabelObject);
                    keyFound = true; // End the loop
                }
                else {
                    priority = priority + 1; //key not found --> try with the next level of priority
                }
            }
            for (var j = 0; j < unimportantList.length; j++) {
                if (feature.getKeys().indexOf(unimportantList[j].osm_key) >= 0) { //if the key is in the list of keys of the feature...
                    var keyLabelObject = new _KeyLabelObject__WEBPACK_IMPORTED_MODULE_0__["KeyLabelObject"](unimportantList[j]); //...the key is written
                    this.list.push(keyLabelObject);
                }
            }
        }
    }
    KeyLabelObjectList.prototype.isEmpty = function () {
        return (this.list.length == 0);
    };
    return KeyLabelObjectList;
}());



/***/ }),

/***/ "./src/app/model/Layer.ts":
/*!********************************!*\
  !*** ./src/app/model/Layer.ts ***!
  \********************************/
/*! exports provided: Layer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return Layer; });
var Layer = /** @class */ (function () {
    function Layer() {
    }
    return Layer;
}());



/***/ }),

/***/ "./src/app/model/LayerAndCategory.ts":
/*!*******************************************!*\
  !*** ./src/app/model/LayerAndCategory.ts ***!
  \*******************************************/
/*! exports provided: LayerAndCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerAndCategory", function() { return LayerAndCategory; });
var LayerAndCategory = /** @class */ (function () {
    function LayerAndCategory(category, layer) {
        this.category = category;
        this.layer = layer;
    }
    return LayerAndCategory;
}());



/***/ }),

/***/ "./src/app/model/NearbyFeaturesClasses/NearbyFeaturesBelongingToOneLayer.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/model/NearbyFeaturesClasses/NearbyFeaturesBelongingToOneLayer.ts ***!
  \**********************************************************************************/
/*! exports provided: NearbyFeaturesBelongingToOneLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyFeaturesBelongingToOneLayer", function() { return NearbyFeaturesBelongingToOneLayer; });
var NearbyFeaturesBelongingToOneLayer = /** @class */ (function () {
    function NearbyFeaturesBelongingToOneLayer(layer, feature) {
        this.featuresList = new Array();
        this.layer = layer;
        this.featuresList.push(feature);
    }
    NearbyFeaturesBelongingToOneLayer.prototype.isEmpty = function () {
        return this.featuresList.length == 0;
    };
    return NearbyFeaturesBelongingToOneLayer;
}());



/***/ }),

/***/ "./src/app/model/NearbyFeaturesClasses/NearbyFeaturesList.ts":
/*!*******************************************************************!*\
  !*** ./src/app/model/NearbyFeaturesClasses/NearbyFeaturesList.ts ***!
  \*******************************************************************/
/*! exports provided: NearbyFeaturesList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyFeaturesList", function() { return NearbyFeaturesList; });
var NearbyFeaturesList = /** @class */ (function () {
    function NearbyFeaturesList() {
        this.list = new Array();
    }
    return NearbyFeaturesList;
}());



/***/ }),

/***/ "./src/app/model/UserContext.ts":
/*!**************************************!*\
  !*** ./src/app/model/UserContext.ts ***!
  \**************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
var UserContext = /** @class */ (function () {
    function UserContext() {
    }
    ;
    UserContext.prototype.initFromRoute = function (route) {
        this.z = route.snapshot.queryParams['z'],
            this.lon = parseFloat(route.snapshot.queryParams['lon']),
            this.lat = parseFloat(route.snapshot.queryParams['lat']),
            this.bLay = route.snapshot.queryParams['bLay'],
            this.vLay = route.snapshot.queryParams['vLay'],
            (!this.vLay || this.vLay === "") ? this.vLay = "none" : "",
            this.tr = route.snapshot.queryParams['tr'];
    };
    UserContext.prototype.initFromCurrentView = function (mapService) {
        var center = ol.proj.transform(mapService.map.getView().getCenter(), config.PROJECTION_CODE, 'EPSG:4326');
        this.z = mapService.map.getView().getZoom();
        this.lon = center[0].toFixed(4);
        this.lat = center[1].toFixed(4); //TODO MapComponent.PROJECTION_CODE
        this.bLay = null; //mapService.getBaseLayerName();
        this.vLay = mapService.getVisibleLayersIdList();
        this.tr = mapService.getOpacityRange();
    };
    UserContext.prototype.getContextAsPermalink = function () {
        return '/carte?'
            + 'z=' + this.z
            + '&lon=' + this.lon
            + '&lat=' + this.lat
            //+'&bLay='+this.bLay
            + '&tr=' + this.tr
            + '&vLay=' + this.vLay.replace(new RegExp('ch-osm:', 'g'), '');
    };
    UserContext.prototype.isValid = function () {
        if (!this.z || !this.lon || !this.lat || !this.tr) {
            return false;
        }
        else {
            return true;
        }
    };
    return UserContext;
}());



/***/ }),

/***/ "./src/app/model/WFSRequest.ts":
/*!*************************************!*\
  !*** ./src/app/model/WFSRequest.ts ***!
  \*************************************/
/*! exports provided: WFSRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WFSRequest", function() { return WFSRequest; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_service_pagination_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/pagination.service */ "./src/app/service/pagination.service.ts");


var WFSRequest = /** @class */ (function () {
    function WFSRequest(mapService) {
        this.mapService = mapService;
    }
    WFSRequest.prototype.setLayer = function (layer) {
        this.currentLayer = layer;
    };
    WFSRequest.prototype.setSorter = function (column, direction) {
        this.sorterColumn = column;
        this.sorterDirection = direction;
    };
    WFSRequest.prototype.setCount = function (count) {
        this.count = count;
    };
    WFSRequest.prototype.setStartIndex = function (startIndex) {
        this.startIndex = startIndex;
    };
    WFSRequest.prototype.getCount = function () {
        return this.count;
    };
    WFSRequest.prototype.getStartIndex = function () {
        return this.startIndex;
    };
    WFSRequest.prototype.setRangeRequest = function (pageSize, startIndex) {
        this.count = pageSize;
        this.startIndex = startIndex;
    };
    WFSRequest.prototype.build = function () {
        var url;
        var urlservice = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].geoserver_baseurl + '/ows?service=wfs&version=2.0.0&request=GetFeature';
        var searchMask = "getCapabilities";
        var regEx = new RegExp(searchMask, "ig");
        var replaceMask = "GetFeature";
        urlservice = urlservice.replace(regEx, replaceMask);
        var outputformat = "application/json";
        url = urlservice;
        if (this.count && this.startIndex) {
            url += '&count=' + this.getCount() + '&startIndex=' + this.getStartIndex();
        }
        else {
            url += '&maxfeatures=5000&count=10';
        }
        url += '&typename=' + this.currentLayer.layername + '&outputFormat=' + outputformat + '&srsname=EPSG:3857';
        var extent = this.mapService.getBoundingBoxCorner();
        url += "&bbox=" + extent.join(',') + ',EPSG:3857';
        // sorter column
        if (this.sorterColumn && this.sorterDirection) {
            url += "&sortBy=" + this.sorterColumn + (this.sorterDirection === app_service_pagination_service__WEBPACK_IMPORTED_MODULE_1__["PaginationService"].SORT_DESC ? "+D" : "");
        }
        // filter : Evolution : ajouter un filtre en entête de colonne  
        /*if(layerconfig.filter){
          url+="&CQL_FILTER=BBOX("+layerconfig.getGeomAttributeName()+","+extent.join(',')+",'EPSG:3857') AND "+layerconfig.filter;
        }
        else{
          */
        console.log(url);
        return url;
    };
    return WFSRequest;
}());



/***/ }),

/***/ "./src/app/orderbypipe/orderbypipe.component.ts":
/*!******************************************************!*\
  !*** ./src/app/orderbypipe/orderbypipe.component.ts ***!
  \******************************************************/
/*! exports provided: OrderByPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipeComponent", function() { return OrderByPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipeComponent = /** @class */ (function () {
    function OrderByPipeComponent() {
    }
    OrderByPipeComponent.prototype.transform = function (array, args) {
        if (!array || array === undefined || array.length === 0)
            return array;
        if (!array.sort) {
            array = [array];
            return array;
        }
        array.sort(function (a, b) {
            if (a.nom_fichier < b.nom_fichier) {
                return 1;
            }
            else if (a.timestamp_upload > b.timestamp_upload) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'orderByPipe'
        })
    ], OrderByPipeComponent);
    return OrderByPipeComponent;
}());



/***/ }),

/***/ "./src/app/permalink/permalink.component.css":
/*!***************************************************!*\
  !*** ./src/app/permalink/permalink.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link:hover {\n    color: #CC1517;\n    text-decoration: underline;\n    cursor:pointer;\n}\n\n.link{\n    color: #cc5456;\n    /* color: #007bff; */\n    text-decoration: none;\n    \n}"

/***/ }),

/***/ "./src/app/permalink/permalink.component.html":
/*!****************************************************!*\
  !*** ./src/app/permalink/permalink.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"link\" (click)=\"setPermalink()\">{{ 'main.permalink' | translate }}</span>\r\n\r\n"

/***/ }),

/***/ "./src/app/permalink/permalink.component.ts":
/*!**************************************************!*\
  !*** ./src/app/permalink/permalink.component.ts ***!
  \**************************************************/
/*! exports provided: PermalinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermalinkComponent", function() { return PermalinkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user-context.service */ "./src/app/service/user-context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermalinkComponent = /** @class */ (function () {
    function PermalinkComponent(userContextService) {
        this.userContextService = userContextService;
    }
    PermalinkComponent.prototype.ngOnInit = function () {
    };
    PermalinkComponent.prototype.setPermalink = function () {
        this.userContextService.setPermalink();
    };
    PermalinkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-permalink',
            template: __webpack_require__(/*! ./permalink.component.html */ "./src/app/permalink/permalink.component.html"),
            styles: [__webpack_require__(/*! ./permalink.component.css */ "./src/app/permalink/permalink.component.css")]
        }),
        __metadata("design:paramtypes", [_service_user_context_service__WEBPACK_IMPORTED_MODULE_1__["UserContextService"]])
    ], PermalinkComponent);
    return PermalinkComponent;
}());



/***/ }),

/***/ "./src/app/service/api-request.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/api-request.service.ts ***!
  \************************************************/
/*! exports provided: ApiRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequestService", function() { return ApiRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs_add_observable_fromPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/fromPromise */ "./node_modules/rxjs-compat/_esm5/add/observable/fromPromise.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiRequestService = /** @class */ (function () {
    function ApiRequestService(http, configService) {
        var _this = this;
        this.http = http;
        this.configService = configService;
        this.thematicsSuffix = 'thematics';
        this.changesSuffix = 'changesrequest';
        this.changeTypesSuffix = 'change_types';
        this.featurechangesSuffix = 'featurechangesrequest';
        this.lastChangeSuffix = 'lastpolygonchanged';
        this.configPromise = this.configService.getConfig().toPromise().then(function (config) {
            _this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].services_baseurl;
            return config;
        });
    }
    ApiRequestService.prototype.searchThematics = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(this.configPromise).mergeMap(function (config) {
            return _this.http.get(_this.baseUrl + _this.thematicsSuffix);
        });
    };
    ;
    ApiRequestService.prototype.getLastChange = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(this.configPromise).mergeMap(function (config) {
            return _this.http.get(_this.baseUrl + _this.lastChangeSuffix);
        });
    };
    ;
    ApiRequestService.prototype.searchChanges = function (data, options) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(this.configPromise).mergeMap(function (config) {
            return _this.http.post(_this.baseUrl + _this.changesSuffix, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
        });
    };
    ;
    ApiRequestService.prototype.searchChangeTypes = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(this.configPromise).mergeMap(function (config) {
            return _this.http.get(_this.baseUrl + _this.changeTypesSuffix);
        });
    };
    ApiRequestService.prototype.searchFeatureChanges = function (data, options) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].fromPromise(this.configPromise).mergeMap(function (config) {
            return _this.http.post(_this.baseUrl + _this.featurechangesSuffix, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error); }));
        });
    };
    ;
    ApiRequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], ApiRequestService);
    return ApiRequestService;
}());



/***/ }),

/***/ "./src/app/service/config.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigService = /** @class */ (function () {
    function ConfigService(route, http) {
        this.route = route;
        this.http = http;
        this.configUrl = "./assets/maps/";
    }
    ConfigService.prototype.getConfig = function () {
        // now returns an Observable of Config
        var conf = this.route.snapshot.queryParams['config'];
        if (conf == undefined) {
            conf = "default.json";
        }
        return this.http.get(this.configUrl + conf);
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/service/layer-change.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/layer-change.service.ts ***!
  \*************************************************/
/*! exports provided: LayerChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerChangeService", function() { return LayerChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayerChangeService = /** @class */ (function () {
    function LayerChangeService() {
        this.announceLayerChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LayerChangeService.prototype.emitAnnounceLayerChangeEvent = function (newSelectedLayer) {
        this.announceLayerChangeEvent.emit(newSelectedLayer);
    };
    LayerChangeService.prototype.getAnnounceLayerChangeEventEmitter = function () {
        return this.announceLayerChangeEvent;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LayerChangeService.prototype, "announceLayerChangeEvent", void 0);
    LayerChangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LayerChangeService);
    return LayerChangeService;
}());



/***/ }),

/***/ "./src/app/service/map.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/map.service.ts ***!
  \****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shapefile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shapefile */ "./node_modules/shapefile/index.js");
/* harmony import */ var app_model_ChangesClasses_Change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/ChangesClasses/Change */ "./src/app/model/ChangesClasses/Change.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var app_model_LayerAndCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/model/LayerAndCategory */ "./src/app/model/LayerAndCategory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapService = /** @class */ (function () {
    function MapService(configService) {
        var _this = this;
        this.configService = configService;
        this.layers = {};
        this.INCHES_PER_UNIT = { 'm': 39.37, 'dd': 4374754 };
        this.DOTS_PER_INCH = 90;
        this.loadingCounter = 0;
        this.opacityRange = 30;
        //Suivi de changements
        this.changesStyles = new Map();
        this.changesPointStyles = new Map();
        this.changesLayer = new Map();
        this.numberOfChangeByType = new Map();
        this.legendDisplay = false;
        this.changesLayersArray = [];
        this.changesLayersGroup = new ol.layer.Group({});
        this.heatMapLayer = new ol.layer.Heatmap({});
        //public pointStyles;
        this.announceOpacityChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.configService.getConfig().subscribe(function (config) {
            _this.config = config;
        });
    }
    MapService.prototype.setMap = function (map, userContext) {
        this.map = map;
        this.setBaseLayers();
        this.changeOpacity(userContext.tr);
    };
    MapService.prototype.getMap = function () {
        return this.map;
    };
    MapService.prototype.setWMTSResult = function (wmtsResult) {
        this.wmtsResult = wmtsResult;
    };
    MapService.prototype.setBaseLayers = function () {
        //initialisation des sources et des layers de fond de carte OSM
        this.OSMLayer = new ol.layer.Tile({
            title: 'OSM',
            source: new ol.source.OSM(),
            visible: true,
            zIndex: 0
        });
        this.baseLayer = this.OSMLayer;
        this.map.addLayer(this.OSMLayer);
    };
    ;
    MapService.prototype.getCategorieAndLayerByStringAttribute = function (attributeName, attributeValue) {
        var _layer;
        var _categorie;
        this.config.LAYERS.forEach(function (categorie) {
            if (categorie.features.filter(function (y) { return y[attributeName].indexOf(attributeValue) >= 0; })[0]) {
                _categorie = categorie.id_categorie;
                _layer = categorie.features.filter(function (y) { return y[attributeName].indexOf(attributeValue) >= 0; })[0];
            }
        });
        var _result = new app_model_LayerAndCategory__WEBPACK_IMPORTED_MODULE_5__["LayerAndCategory"](_categorie, _layer);
        console.log('getCategorieAndLayerByStringAttribute');
        console.log(_result);
        return _result;
    };
    ;
    MapService.prototype.changeOpacity = function (value) {
        if (this.baseLayer) {
            this.opacityRange = value;
            this.baseLayer.setOpacity(this.opacityRange / 100);
        }
        this.emitOpacityChangeEvent(this.opacityRange);
    };
    MapService.prototype.emitOpacityChangeEvent = function (newOpacityRange) {
        this.announceOpacityChangeEvent.emit(newOpacityRange);
    };
    MapService.prototype.getAnnounceOpacityChangeEventEmitter = function () {
        return this.announceOpacityChangeEvent;
    };
    MapService.prototype.changeBaseLayer = function (baseLayerName) {
        this.baseLayerName = baseLayerName;
        this.baseLayer.setVisible(false);
        if (baseLayerName === 'OSM') {
            this.baseLayer = this.OSMLayer;
        }
        else {
            this.baseLayer = this.getLayersById(baseLayerName);
        }
        this.baseLayer.setOpacity(this.opacityRange / 100);
        this.baseLayer.setVisible(true);
        this.baseLayer.setVisible(true);
    };
    MapService.prototype.setLegendAttributes = function (key, value) {
        if (key = "legendUrls") {
            this.legendUrls = value;
        }
    };
    MapService.prototype.getLayersById = function (id) {
        return this.layers[id];
    };
    MapService.prototype.cleanSelection = function () {
        this.selectedFeatureSource.clear();
    };
    MapService.prototype.addToSelection = function (feature) {
        this.selectedFeatureSource.addFeature(feature);
        var toIndex = feature.getId().indexOf('.fid') > 0 ? feature.getId().indexOf('.fid') : (feature.getId().lastIndexOf('.') > 0 ? feature.getId().lastIndexOf('.') : feature.getId().length);
        var piwikFeatureSelectedLayer = feature.getId().substring(0, toIndex);
        _paq.push(['trackEvent', 'feature_selected', piwikFeatureSelectedLayer]);
    };
    MapService.prototype.addSelectionLayer = function () {
        //initialisation de selectedFeatureSource et selectedFeatureStyle
        this.selectedFeatureSource = new ol.source.Vector({});
        var fill = new ol.style.Fill({
            color: 'rgba(150, 6, 6, 0)'
        });
        var stroke = new ol.style.Stroke({
            color: 'rgb(150, 6, 6)',
            width: 2
        });
        this.selectedFeatureStyle = [
            new ol.style.Style({
                image: new ol.style.Circle({
                    fill: fill,
                    stroke: stroke,
                    radius: 10
                }),
                fill: fill,
                stroke: stroke
            })
        ];
        var selectionLayer = new ol.layer.Vector({
            source: this.selectedFeatureSource,
            style: this.selectedFeatureStyle,
            zIndex: 4
        });
        this.map.addLayer(selectionLayer);
    };
    MapService.prototype.addVectorTileLayer = function (layerconfig, show) {
        if (show === void 0) { show = false; }
        var self = this;
        var layername = layerconfig.layername;
        var id = layerconfig.layername;
        var lshow = show;
        var lconfig = layerconfig;
        var matrixSet = "EPSG:3857";
        if (this.layers[id] == null) {
            var options = ol.source.WMTS.optionsFromCapabilities(this.wmtsResult, {
                layer: layername,
                matrixSet: matrixSet,
                format: 'application/x-protobuf;type=mapbox-vector'
            });
            options.attributions = [new ol.Attribution({
                    html: '' +
                        '<a href="http://ch-osm.geodatasolutions.ch/aide.html#ogc-services-tos">© GeoDataSolutions for the WMS/WFS flows</a>'
                })
            ];
            var wmts = new ol.source.WMTS(options);
            console.log(wmts.getTileUrlFunction());
            self.layers[id] = new ol.layer.VectorTile({
                opacity: 1,
                source: new ol.source.VectorTile({
                    format: new ol.format.MVT(),
                    tileUrlFunction: wmts.getTileUrlFunction(),
                    tileGrid: wmts.getTileGrid()
                })
            });
            self.layers[id].customConfig = lconfig;
            lconfig.ol_Layer = self.layers[id];
            self.map.addLayer(self.layers[id]);
            self.layers[id].setVisible(lshow);
        }
        else {
            this.layers[id].setVisible(show);
        }
    };
    MapService.prototype.addLoading = function (e) {
        this.loadingCounter++;
        if (!e.target.loadingCounter) {
            e.target.loadingCounter = 0;
        }
        e.target.loadingCounter++;
    };
    MapService.prototype.addLoaded = function (e) {
        this.loadingCounter--;
        e.target.loadingCounter--;
    };
    MapService.prototype.addLoadError = function (e) {
        this.loadingCounter--;
        e.target.loadingCounter--;
    };
    MapService.prototype.addWMSLayer = function (layerconfig, show) {
        if (show === void 0) { show = false; }
        var id = layerconfig.layername;
        console.log("addwmslayer: " + id);
        var layername = layerconfig.layername;
        if (this.layers[id] == null) {
            var layerSource = new ol.source.TileWMS(({
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserver_baseurl + '/wms?',
                crossOrigin: 'anonymous',
                params: { 'LAYERS': layername },
                attributions: [new ol.Attribution({
                        html: '' +
                            '<a href="http://ch-osm.geodatasolutions.ch/aide.html#ogc-services-tos">© GeoDataSolutions for the WMS/WFS flows</a>'
                    })
                ]
            }));
            this.addLoadingListener(layerSource);
            var maxResolution = undefined;
            if (layerconfig.maxScaleDenominator) {
                maxResolution = this.getResolutionFromScale(layerconfig.maxScaleDenominator, this.map.getView().getProjection().getUnits());
            }
            this.layers[id] = new ol.layer.Tile({
                source: layerSource,
                zIndex: 1,
                maxResolution: maxResolution
            });
            this.layers[id].setVisible(show);
            this.map.addLayer(this.layers[id]);
        }
        else {
            this.layers[id].setVisible(show);
        }
    };
    MapService.prototype.addLoadingListener = function (layerSource) {
        layerSource.on('tileloadstart', this.addLoading.bind(this));
        layerSource.on('tileloadend', this.addLoaded.bind(this));
        layerSource.on('tileloaderror', this.addLoadError.bind(this));
    };
    MapService.prototype.addWMTSLayer = function (layerconfig, show) {
        if (show === void 0) { show = false; }
        var self = this;
        var layername = layerconfig.layername;
        var id = layerconfig.layername;
        var lshow = show;
        var lconfig = layerconfig;
        var matrixSet = "EPSG:3857";
        if (this.layers[id] == null) {
            // first, set WMTS options from capabilities
            var options = ol.source.WMTS.optionsFromCapabilities(this.wmtsResult, {
                layer: layername,
                matrixSet: matrixSet
            });
            // then rewrite some opts
            options.urls[0] = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserver_baseurl + "/gwc/service/wmts?'";
            options.attributions = [new ol.Attribution({
                    html: '' +
                        '<a href="http://ch-osm.geodatasolutions.ch/aide.html#ogc-services-tos">© GeoDataSolutions for the WMS/WFS flows</a>'
                })
            ];
            var layerSource = new ol.source.WMTS(/** @type {!olx.source.WMTSOptions} */ (options));
            this.addLoadingListener(layerSource);
            var maxResolution = undefined;
            if (layerconfig.maxScaleDenominator) {
                maxResolution = this.getResolutionFromScale(layerconfig.maxScaleDenominator, this.map.getView().getProjection().getUnits());
            }
            self.layers[id] = new ol.layer.Tile({
                opacity: 1,
                source: layerSource,
                maxResolution: maxResolution
            });
            self.layers[id].customConfig = lconfig;
            lconfig.ol_Layer = self.layers[id];
            self.map.addLayer(self.layers[id]);
            self.layers[id].setVisible(lshow);
        }
        else {
            this.layers[id].setVisible(show);
        }
    };
    MapService.prototype.kmlExport = function (layer) {
        var size = /** @type {ol.Size} */ (this.map.getSize());
        var extent = this.map.getView().calculateExtent(size);
        var targetDPI = 150;
        var siszeFactor = targetDPI / 90;
        console.log(extent);
        var bbox = extent[0] + "," + extent[1] + "," + extent[2] + "," + extent[3];
        var currentScale = this.getScaleFromResolution(this.map.getView().getResolution(), this.map.getView().getProjection().getUnits(), true);
        //alert("L'export concerne uniquement la zone visualisée");
        /*if (currentScale > 500000) {
          alert("l'export n'est possible qu'a partir du de l'échelle 1/500 000")
          return;
        }*/
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserver_baseurl + "/wms?service=wms&request=GetMap&version=1.1.1&format=application/vnd.google-earth.kml+xml&layers=" + layer.layername /*+ "&styles=" + layer.selectedStyle.style*/ + "&height=2048&width=2048&transparent=false&srs=EPSG:3857&format_options=AUTOFIT:true;KMATTR:true;KMPLACEMARK:false;KMSCORE:40;MODE:download;SUPEROVERLAY:false&bbox=" + bbox;
        //let url = environment.geoserver_baseurl + "/wfs?request=GetFeature&version=2.0.0&count=50000&outputFormat=application%2Fvnd.google-earth.kml%2Bxml&typeName="+layer.layername;
        //let url = environment.geoserver_baseurl + "/wms/kml?layers="+layer.layername;
        //piwik
        _paq.push(['trackEvent', 'KML_download', layer.layername]);
        window.open(url, "_blank");
    };
    MapService.prototype.getScale = function () {
        return this.getScaleFromResolution(this.map.getView().getResolution(), this.map.getView().getProjection().getUnits(), true);
    };
    MapService.prototype.shpExport = function (layer) {
        var size = /** @type {ol.Size} */ (this.map.getSize());
        var extent = this.map.getView().calculateExtent(size);
        var targetDPI = 150;
        var siszeFactor = targetDPI / 90;
        console.log(extent);
        var bbox = extent[0] + "," + extent[1] + "," + extent[2] + "," + extent[3];
        //alert("L'export concerne uniquement la zone visualisée");
        var currentScale = this.getScaleFromResolution(this.map.getView().getResolution(), this.map.getView().getProjection().getUnits(), true);
        /*if (currentScale > 500000) {
          alert("l'export n'est possible qu'a partir du de l'échelle 1/500 000")
          return;
        }*/
        //let url = environment.geoserver_baseurl + "/wms?service=wms&request=GetMap&version=1.1.1&format=application/vnd.google-earth.kml+xml&layers=" + layer.layername /*+ "&styles=" + layer.selectedStyle.style*/ + "&height=2048&width=2048&transparent=false&srs=EPSG:3857&format_options=AUTOFIT:true;KMATTR:true;KMPLACEMARK:false;KMSCORE:40;MODE:download;SUPEROVERLAY:false&bbox=" + bbox;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].geoserver_baseurl + "/wfs?request=GetFeature&version=2.0.0&count=500000&outputFormat=shape-zip&typeName=" + layer.layername + "&srsName=EPSG:3857&bbox=" + bbox;
        //let url = environment.geoserver_baseurl + "/wms/kml?layers="+layer.layername;
        //piwik
        _paq.push(['trackEvent', 'SHP_download', layer.layername]);
        window.open(url, "_blank");
    };
    MapService.prototype.getBoundingBox = function () {
        var format = new ol.format.WKT();
        var extent = ol.geom.Polygon.fromExtent(this.map.getView().calculateExtent());
        var wkt = format.writeGeometry(extent);
        return wkt;
    };
    MapService.prototype.getBoundingBoxCorner = function () {
        var format = new ol.format.WKT();
        var extent = ol.geom.Polygon.fromExtent(this.map.getView().calculateExtent());
        return extent.getExtent();
    };
    MapService.prototype.getResolutionFromScale = function (scale, units) {
        var resolution = scale / (this.INCHES_PER_UNIT[units] * this.DOTS_PER_INCH);
        return resolution;
    };
    ;
    MapService.prototype.getScaleFromResolution = function (resolution, units, opt_round) {
        var scale = this.INCHES_PER_UNIT[units] * this.DOTS_PER_INCH * resolution;
        if (opt_round) {
            scale = Math.round(scale);
        }
        console.log("scale : " + scale + " / resolution : " + resolution);
        return scale;
    };
    ;
    MapService.prototype.getVisibleLayersIdList = function () {
        var id_layers = "";
        var separator = "";
        var layers = this.map.getLayers().getArray();
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layer instanceof ol.layer.Tile && layer.getSource() instanceof ol.source.TileWMS && layer.getVisible()) {
                id_layers += separator + (layer.getSource()).getParams()['LAYERS'] + ''; //<ol.source.TileWMS>
                separator = ",";
            }
            else if (layer instanceof ol.layer.Tile && layer.getSource() instanceof ol.source.WMTS && layer.getVisible()) {
                id_layers += separator + (layer.getSource()).getLayer() + ''; //<ol.source.WMTS>
                separator = ",";
            }
        }
        console.log(id_layers);
        return id_layers;
    };
    MapService.prototype.getVisibleLayersIdArrayList = function () {
        var id_layers = [];
        var layers = this.map.getLayers().getArray();
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            if (layer instanceof ol.layer.Tile && layer.getSource() instanceof ol.source.TileWMS && layer.getVisible()) {
                id_layers.push((layer.getSource()).getParams()['LAYERS']); //<ol.source.TileWMS>
            }
            else if (layer instanceof ol.layer.Tile && layer.getSource() instanceof ol.source.WMTS && layer.getVisible()) {
                id_layers.push((layer.getSource()).getLayer());
            }
        }
        return id_layers;
    };
    MapService.prototype.getNumberOfVisibleLayers = function () {
        return this.getVisibleLayersIdArrayList().length;
    };
    MapService.prototype.getZoomFromScale = function (scale) {
        var resolution = this.getResolutionFromScale(scale, this.map.getView().getProjection().getUnits());
        var zoom = Math.ceil(this.map.getView().getZoomForResolution(resolution)); // Zoom level rounded up
        return zoom;
    };
    //Find the Layer of one object (useful for the list of nearby features, and for the style of main_info)
    MapService.prototype.getLayerOfOneFeature = function (feature) {
        for (var i in this.config.LAYERS) {
            for (var j in this.config.LAYERS[i].features) {
                if (feature.getId().startsWith(this.config.LAYERS[i].features[j].layername.replace('magosm:', ""))) {
                    return this.config.LAYERS[i].features[j];
                }
            }
        }
    };
    MapService.prototype.isInRange = function (id) {
        if (this.layers[id]) {
            var maxResolution = this.layers[id].getMaxResolution();
            var minResolution = this.layers[id].getMinResolution();
            var currentResol = this.map.getView().getResolution();
            if (maxResolution && this.map.getView().getResolution() > maxResolution) {
                return false;
            }
            if (minResolution && this.map.getView().getResolution() < minResolution) {
                return false;
            }
            return true;
        }
        return false;
    };
    MapService.prototype.isVisible = function (id) {
        if (this.layers[id]) {
            return this.layers[id].getVisible();
        }
        return false;
    };
    MapService.prototype.addLayer = function (id, url, show) {
        if (show === void 0) { show = false; }
        if (this.layers[id] == null) {
            var vectorSource = new ol.source.Vector({
                //projection : 'EPSG:3857',
                //overlaps:false,
                format: new ol.format.GeoJSON({
                //defaultDataProjection: 'EPSG:4326'
                //defaultDataProjection: 'EPSG:2154'
                }),
                url: url
            });
            this.layers[id] = new ol.layer.Vector({
                source: vectorSource
            });
            var listenerKey = vectorSource.on('change', (function (e) {
                if (vectorSource.getState() == 'ready') {
                    ol.Observable.unByKey(listenerKey);
                    this.layers[id].setVisible(show);
                }
            }).bind(this));
            this.map.addLayer(this.layers[id]);
        }
        else {
            this.layers[id].setVisible(show);
        }
    };
    MapService.prototype.addShapefileLayer = function (id, bufferOrUrl, show) {
        var _this = this;
        if (show === void 0) { show = true; }
        if (this.layers[id] == null) {
            return shapefile__WEBPACK_IMPORTED_MODULE_1__["read"](bufferOrUrl).then(function (collection) {
                var vectorSource = new ol.source.Vector({
                    features: (new ol.format.GeoJSON()).readFeatures(collection)
                });
                _this.layers[id] = new ol.layer.Vector({
                    source: vectorSource
                });
                var listenerKey = vectorSource.on('change', (function (e) {
                    if (vectorSource.getState() == 'ready') {
                        ol.Observable.unByKey(listenerKey);
                        this.layers[id].setVisible(show);
                    }
                }).bind(_this));
                _this.map.addLayer(_this.layers[id]);
            });
        }
        else {
            this.layers[id].setVisible(show);
            return Promise.resolve();
        }
    };
    MapService.prototype.getBaseLayerName = function () {
        return this.baseLayerName;
    };
    MapService.prototype.getOpacityRange = function () {
        return this.opacityRange;
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ///// Partie dédiée au suivi de changement /////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    MapService.prototype.addChanges = function (changesList) {
        var _this = this;
        var featureLayers = new Map();
        var alreadyTested = new Array();
        this.changesLayersArray.forEach(function (layer) {
            featureLayers.set(layer.get('id'), []);
        });
        changesList.forEach(function (element) {
            var osmId = element.osmId;
            if (alreadyTested.indexOf(osmId) < 0) {
                var featuresWithSameOsmId = changesList.filter(function (x) { return x.osmId === osmId; });
                if (featuresWithSameOsmId.length > 1) {
                    element = _this.getChangesMergeForOneFeature(featuresWithSameOsmId);
                }
                var newFeature = _this.setFeature(element);
                var changeListByType = featureLayers.get(element.changeType);
                if (!changeListByType) {
                    console.error(element.changeType + " not found in list.voir element suivant:");
                    console.log(element);
                }
                else {
                    changeListByType.push(newFeature);
                }
                alreadyTested.push(osmId);
            }
        });
        // On a complété un Map de 8 tableaux qui contiennent chacun les objets pour chaque type de changement.
        this.numberOfChangeByType = new Map();
        this.changesLayersArray.forEach(function (layer) {
            var id = layer.get('id');
            layer.getSource().clear();
            layer.getSource().addFeatures(featureLayers.get(id));
            _this.numberOfChangeByType.set(layer.get('changetype'), featureLayers.get(id).length);
        });
        this.refreshHeatMap();
    };
    ;
    MapService.prototype.refreshHeatMap = function () {
        var features = new Array();
        this.changesLayersArray.forEach(function (layer) {
            if (layer.getVisible()) {
                features = features.concat(layer.getSource().getFeatures());
            }
        });
        this.heatMapLayer.getSource().clear();
        this.heatMapLayer.getSource().refresh();
        this.heatMapLayer.getSource().addFeatures(features);
        if (features.length < 50) {
            this.changesLayersGroup.setMaxResolution(10000);
        }
        else {
            this.changesLayersGroup.setMaxResolution(this.map.getView().getResolutionForZoom(10));
        }
    };
    MapService.prototype.setFeature = function (change) {
        var changeType = change.changeType;
        //Choix de la géométrie. On prend theGeomNew sauf s'il est vide, auquel cas theGeomOld ne l'est pas, donc on le sélectionne
        var the_geom = change.theGeomNew;
        if (the_geom == null) {
            the_geom = change.theGeomOld;
        }
        var newFeature = (new ol.format.GeoJSON()).readFeature(the_geom);
        // var geom =newFeature.getGeometry()
        // newFeature.setGeometry(geom.simplify(5));
        newFeature.set('changeType', changeType);
        newFeature.set('osmId', change.osmId);
        newFeature.set('geom_type', change.type);
        return newFeature;
    };
    MapService.prototype.initLayers = function (changeTypesList) {
        var _this = this;
        this.changesLayersArray = new Array();
        this.changeTypeArrayList = changeTypesList;
        //On crée un Array contenant les layers que l'on place dans un LayerGroup que l'on associe à la map.
        changeTypesList.forEach(function (element) {
            var newVector = new ol.layer.Vector({
                source: new ol.source.Vector({ attributions: [
                        new ol.Attribution({
                            html: '' +
                                '<a href="http://magosm.magellium.com/">© Magellium pour les changements</a>'
                        })
                    ]
                }),
                zIndex: 10 + element.id,
                id: element.id,
                title: element.name,
                changetype: element,
                style: _this.mainStyleFunction.bind(_this),
            });
            _this.changesLayersArray.push(newVector);
        });
        this.changesLayersGroup = new ol.layer.Group({
            layers: this.changesLayersArray,
            maxResolution: this.map.getView().getResolutionForZoom(10)
        });
        this.map.addLayer(this.changesLayersGroup);
    };
    MapService.prototype.initHeatMap = function () {
        /// Initialisation de la HeatMap : basé sur https://stackoverflow.com/questions/56780705/creating-heatmap-in-openlayers-with-vector-source-containing-linestrings
        this.heatMapLayer = new ol.layer.Heatmap({
            source: new ol.source.Vector({ attributions: [
                    new ol.Attribution({
                        html: '' +
                            '<a href="http://magosm.magellium.com/">© Magellium pour les changements</a>'
                    })
                ]
            }),
            zIndex: 2,
            title: 'Carte de chaleur',
            minResolution: this.map.getView().getResolutionForZoom(12),
            radius: 2,
            blur: 10,
        });
        var defaultStyleFunction = this.heatMapLayer.getStyleFunction();
        this.heatMapLayer.setStyle(function (feature, resolution) {
            var style = defaultStyleFunction(feature, resolution);
            var geom = feature.getGeometry();
            var geomType = geom.getType();
            switch (geomType) {
                case "Polygon":
                    style[0].setGeometry(geom.getInteriorPoint());
                    break;
                case "MultiPolygon":
                    style[0].setGeometry(geom.getInteriorPoints()[0]);
                    break;
                case "LineString":
                    style[0].setGeometry(new ol.geom.Point(geom.getCoordinateAt(0.5)));
                    break;
                case "MultiLineString":
                    var middlePointNumber = Math.round((geom.getCoordinates().length) / 2);
                    style[0].setGeometry(new ol.geom.Point(geom.getCoordinates()[middlePointNumber][0]));
                    break;
                case "Point":
                    style[0].setGeometry(geom);
                    break;
            }
            return style;
        });
        //this.changesLayer.set("Carte de chaleur", this.heatMapLayer);
        this.map.addLayer(this.heatMapLayer);
    };
    MapService.prototype.initInteractions = function () {
        var self = this;
        this.mapFeatureSelectedInteractionOnClick = new ol.interaction.Select({
            condition: ol.events.condition.click,
            style: function (feature, resolution) {
                return self.mainStyleFunction(feature, resolution, true);
            },
            hitTolerance: 2,
            filter: function (feature, layer) { return self.heatMapFilter(layer); },
        });
        this.map.addInteraction(this.mapFeatureSelectedInteractionOnClick);
    };
    MapService.prototype.clearSelection = function () {
        this.mapFeatureSelectedInteractionOnClick.getFeatures().clear();
    };
    MapService.prototype.addFeatureToSelection = function (feature) {
        this.clearSelection();
        this.mapFeatureSelectedInteractionOnClick.getFeatures().push(feature);
    };
    MapService.prototype.getChangesMergeForOneFeature = function (changes) {
        var changesOrderByTimestamp = changes.sort(function (a, b) { return a.timestamp == b.timestamp ? 0 : +(a.timestamp > b.timestamp) || -1; });
        while (changesOrderByTimestamp.length > 1) {
            var change1 = changesOrderByTimestamp.pop();
            var change2 = changesOrderByTimestamp.pop();
            changesOrderByTimestamp.push(this.mergeTwoChanges(change1, change2));
        }
        return changesOrderByTimestamp[0];
    };
    MapService.prototype.mergeTwoChanges = function (change1, change2) {
        var firstChange;
        var secondChange;
        var newChange = new app_model_ChangesClasses_Change__WEBPACK_IMPORTED_MODULE_2__["Change"]();
        if (change1.timestamp < change2.timestamp) {
            firstChange = change1;
            secondChange = change2;
        }
        else {
            firstChange = change2;
            secondChange = change1;
        }
        newChange.timestamp = secondChange.timestamp;
        newChange.osmId = firstChange.osmId;
        newChange.type = firstChange.type;
        newChange.versionOld = firstChange.versionOld;
        newChange.versionNew = secondChange.versionNew;
        newChange.tagsOld = firstChange.tagsOld;
        newChange.tagsNew = secondChange.tagsNew;
        newChange.theGeomOld = firstChange.theGeomOld;
        newChange.theGeomNew = secondChange.theGeomNew; // Attention, dans ce cas, si on a une Création puis une Suppression, on n'a aucune géométrie !
        switch (firstChange.changeType) {
            case 1:
                if ([5, 6].indexOf(secondChange.changeType) > -1) {
                    newChange.changeType = 7;
                    newChange.theGeomNew = secondChange.theGeomOld; // C'est pourquoi on rattrape le tout ici
                    newChange.tagsNew = secondChange.tagsOld;
                    newChange.versionNew = secondChange.versionOld;
                }
                else {
                    newChange.changeType = 1;
                }
                break;
            case 2:
                if ([5, 6].indexOf(secondChange.changeType) > -1) {
                    newChange.changeType = 7;
                }
                else {
                    newChange.changeType = 2;
                }
                break;
            case 3:
                newChange.changeType = 3;
                if ([34, 5, 6].indexOf(secondChange.changeType) > -1) {
                    newChange.changeType = secondChange.changeType;
                }
                if (secondChange.changeType == 4) {
                    newChange.changeType = 34;
                }
                break;
            case 4:
                newChange.changeType = 34;
                if ([4, 5, 6].indexOf(secondChange.changeType) > -1) {
                    newChange.changeType = secondChange.changeType;
                }
                break;
            case 34:
                newChange.changeType = 34;
                if ([5, 6].indexOf(secondChange.changeType) > -1) {
                    newChange.changeType = secondChange.changeType;
                }
                break;
            case 5:
                newChange.changeType = 7;
                break;
            case 6:
                break;
            case 7:
                newChange.changeType = secondChange.changeType;
        }
        // if (newChange.theGeomNew == null && newChange.theGeomOld == null){
        //   console.log(newChange.osmId);
        // }
        return newChange;
    };
    //Cela permet de réutiliser l'affichage lors du passage de la souris ou de la sélection :
    //Voir : https://stackoverflow.com/questions/35184546/openlayers3-same-style-for-selected-features-only-one-changed-property
    MapService.prototype.mainStyleFunction = function (feature, resolution, selected, changeTypeId, small) {
        var maxResol = this.map.getView().getResolutionForZoom(10);
        var style = new ol.style.Style({});
        //Récupérer la conf pour les couleurs
        var changeType = changeTypeId ? changeTypeId : feature.get('changeType');
        var color = this.changeTypeArrayList.filter(function (x) { return x.id === changeType; })[0].color;
        var fillcolor = [color.R, color.G, color.B, 0.2];
        var strokecolor = [color.R, color.G, color.B, 1];
        var fill = new ol.style.Fill({ color: fillcolor });
        style.setZIndex(1);
        if (small || resolution < this.changesLayersGroup.getMaxResolution()) {
            if (feature.getGeometry().getType() == 'Point') {
                var pointStroke = new ol.style.Stroke({ color: strokecolor, width: selected ? 10 : 3 });
                var circle = new ol.style.Circle({ radius: 1, stroke: pointStroke, fill: fill });
                style.setImage(circle);
                if (resolution < 10) {
                    style.getImage().setRadius(small ? 2 * (1 + 1 / resolution) : 4 * (1 + 1 / resolution));
                }
                else {
                    style.getImage().setRadius(1);
                }
            }
            else {
                var stroke = new ol.style.Stroke({ color: strokecolor, width: selected ? 10 : 5 });
                style.setFill(fill);
                style.setStroke(stroke);
            }
            // if (selected){
            //   style.setMaxResolution(this.map.getView().getResolutionForZoom(10));
            // }
        }
        return [style];
    };
    MapService.prototype.heatMapFilter = function (layer) {
        return layer.get('title') != "Carte de chaleur";
    };
    MapService.prototype.getOsmTypeOfFeature = function (osmId, geometryType) {
        switch (geometryType) {
            case 'Point':
                return 'node';
                break;
            case 'Line':
            case 'Polygon':
                if (osmId > 0) {
                    return 'way';
                }
                else {
                    return 'relation';
                }
                break;
        }
    };
    // Centre sur la géom liée à la ligne du bouton cliqué
    MapService.prototype.centerItemGeom = function (geom) {
        var polygone = [];
        if (geom && geom.length > 2) {
            geom.forEach(function (element, index) {
                if (index % 2 == 0) {
                    polygone.push(ol.proj.transform([geom[index], geom[index + 1]], 'EPSG:3857', config.PROJECTION_CODE));
                }
            });
            var polygon = new ol.geom.Polygon([polygone]);
            this.map.getView().fit(polygon, {});
            this.map.getView().setZoom(19);
        }
        else {
            alert("Cet objet ne contient pas de géométrie permettant le centrage sur la carte.");
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MapService.prototype, "announceOpacityChangeEvent", void 0);
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/service/nearbyFeatures.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/nearbyFeatures.service.ts ***!
  \***************************************************/
/*! exports provided: NearbyFeaturesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearbyFeaturesService", function() { return NearbyFeaturesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_service_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/service/map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var app_model_NearbyFeaturesClasses_NearbyFeaturesList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/NearbyFeaturesClasses/NearbyFeaturesList */ "./src/app/model/NearbyFeaturesClasses/NearbyFeaturesList.ts");
/* harmony import */ var app_model_NearbyFeaturesClasses_NearbyFeaturesBelongingToOneLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/model/NearbyFeaturesClasses/NearbyFeaturesBelongingToOneLayer */ "./src/app/model/NearbyFeaturesClasses/NearbyFeaturesBelongingToOneLayer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NearbyFeaturesService = /** @class */ (function () {
    function NearbyFeaturesService(mapService) {
        this.mapService = mapService;
    }
    NearbyFeaturesService.prototype.getNearbyFeaturesList = function (features, selectedFeature) {
        var nearbyFeaturesList = new app_model_NearbyFeaturesClasses_NearbyFeaturesList__WEBPACK_IMPORTED_MODULE_2__["NearbyFeaturesList"];
        for (var j = 0; j < features.length; j++) {
            if (features[j] != selectedFeature) { // Don't display the selectedFeature.
                this.addOneFeature(features[j], nearbyFeaturesList);
            }
        }
        return nearbyFeaturesList;
    };
    NearbyFeaturesService.prototype.addOneFeature = function (feature, nearbyFeaturesList) {
        var layer = this.mapService.getLayerOfOneFeature(feature);
        var nearbyFeaturesListFromThisLayer = nearbyFeaturesList.list.filter(function (x) { return x.layer === layer; });
        if (nearbyFeaturesListFromThisLayer.length == 0) { // If the object NearbyFeaturesBelongingToOneLayer for this layer doesn't exist yet, create it
            nearbyFeaturesList.list.push(new app_model_NearbyFeaturesClasses_NearbyFeaturesBelongingToOneLayer__WEBPACK_IMPORTED_MODULE_3__["NearbyFeaturesBelongingToOneLayer"](layer, feature));
        }
        else {
            nearbyFeaturesListFromThisLayer[0].featuresList.push(feature); //If the object already exists, add push the feature in it.
        }
    };
    NearbyFeaturesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [app_service_map_service__WEBPACK_IMPORTED_MODULE_1__["MapService"]])
    ], NearbyFeaturesService);
    return NearbyFeaturesService;
}());



/***/ }),

/***/ "./src/app/service/pagination.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/pagination.service.ts ***!
  \***********************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationService = /** @class */ (function () {
    function PaginationService() {
        // index de la page ( 0........ n)
        this.pageIndex = 0;
        this.pageSize = 10;
        this.totalElement = 0;
        // public totalPages: number = 0;
        this.sorter = [];
        this.pageSizeArray = [10, 20, 50];
    }
    PaginationService_1 = PaginationService;
    PaginationService.prototype.initializePagination = function () {
        this.setPageIndex(0);
        this.setPageSize(0);
        this.setTotalElement(0);
    };
    PaginationService.prototype.initializeElementRef = function (previousPage, pageItem1, pageItem2, pageItem3, nextPage, numberPerPage, rangePage) {
        if (!this.previousPage) {
            this.previousPage = previousPage;
            this.pageItem1 = pageItem1;
            this.pageItem2 = pageItem2;
            this.pageItem3 = pageItem3;
            this.nextPage = nextPage;
            this.numberPerPage = numberPerPage;
            this.rangePage = rangePage;
        }
    };
    PaginationService.prototype.setData = function (data) {
        this.data = data;
    };
    PaginationService.prototype.setPageSize = function (pageSize) {
        this.pageSize = pageSize;
        // on relance la requête de chargement du tableau
        this.actualizePagination();
    };
    PaginationService.prototype.getPageSize = function () {
        return this.pageSize;
    };
    PaginationService.prototype.getPageSizeArray = function () {
        return this.pageSizeArray;
    };
    PaginationService.prototype.setPageIndex = function (pageIndex) {
        this.pageIndex = pageIndex;
        // on relance la requête de chargement du tableau
        this.pageIndex = this.pageIndex > this.getLastPageIndex() - 1 ? (this.getLastPageIndex() - 1 > 0 ? this.getLastPageIndex() - 1 : 0) : this.pageIndex;
        this.actualizePagination();
        console.log(" => Allez à la page : " + (this.getPageIndex()));
        this.setHighLight();
    };
    PaginationService.prototype.getPageIndex = function () {
        return this.pageIndex;
    };
    PaginationService.prototype.setTotalElement = function (totalElement) {
        this.totalElement = totalElement;
    };
    PaginationService.prototype.getTotalElement = function () {
        return this.totalElement;
    };
    PaginationService.prototype.setSort = function (headerKey, dir) {
        this.sorter[headerKey] = dir;
    };
    PaginationService.prototype.getSort = function () {
        return this.sorter;
    };
    PaginationService.prototype.setSortColumn = function (headerKey) {
        var _this = this;
        var sorterDir = this.sorter[headerKey];
        if (sorterDir === PaginationService_1.UNSORTED) {
            sorterDir = PaginationService_1.SORT_ASC;
        }
        else if (sorterDir === PaginationService_1.SORT_ASC) {
            sorterDir = PaginationService_1.SORT_DESC;
        }
        else {
            sorterDir = PaginationService_1.UNSORTED;
        }
        Object.keys(this.sorter).forEach(function (element) {
            _this.setSort(element, PaginationService_1.UNSORTED);
        });
        this.setSort(headerKey, sorterDir);
        return sorterDir;
    };
    PaginationService.prototype.goToPreviousPage = function () {
        var previousPage = this.getPageIndex() - 1;
        previousPage = (previousPage >= 0 ? previousPage : 0);
        this.setPageIndex(previousPage);
    };
    PaginationService.prototype.goToNextPage = function () {
        var nextPage = this.getPageIndex() + 1;
        this.setPageIndex(nextPage);
    };
    PaginationService.prototype.resetPageIndex = function () {
        this.setPageIndex(0);
        this.setTotalElement(0);
        this.actualizeButtonPagination();
    };
    PaginationService.prototype.resetPagination = function () {
        this.previousPage = null;
        this.pageItem1 = null;
        this.pageItem2 = null;
        this.pageItem3 = null;
        this.nextPage = null;
        this.rangePage = null;
        this.resetPageIndex();
    };
    PaginationService.prototype.actualizePagination = function () {
        // si les éléments sur initialisés dans l'IHM, on met à jour la pagination
        if (this.previousPage) {
            this.actualizeButtonPagination();
            this.actualizeRangePage();
        }
    };
    PaginationService.prototype.actualizeButtonPagination = function () {
        if (this.previousPage) {
            var pageArray = [1, 2, 3];
            this.previousPage.nativeElement.parentElement.classList.remove('disabled');
            this.nextPage.nativeElement.parentElement.classList.remove('disabled');
            this.pageItem1.nativeElement.parentElement.classList.remove('disabled');
            this.pageItem2.nativeElement.parentElement.classList.remove('disabled');
            this.pageItem3.nativeElement.parentElement.classList.remove('disabled');
            if (pageArray[0] == 1 && pageArray[0] == this.getPageIndex() + 1) {
                this.previousPage.nativeElement.parentElement.classList.add('disabled');
            }
            else if (this.getPageIndex() >= this.getLastPageIndex() - 1) {
                this.nextPage.nativeElement.parentElement.classList.add('disabled');
                if (this.getPageIndex() > 2) {
                    pageArray = [this.getPageIndex() - 1, this.getPageIndex(), this.getPageIndex() + 1];
                }
            }
            else if (this.getPageIndex() == this.getLastPageIndex() - 1) {
                pageArray = [this.getPageIndex() - 1, this.getPageIndex(), this.getPageIndex() + 1];
            }
            else {
                pageArray = [this.getPageIndex(), this.getPageIndex() + 1, this.getPageIndex() + 2];
            }
            this.pageItem1.nativeElement.innerText = pageArray[0];
            this.pageItem2.nativeElement.innerText = pageArray[1];
            this.pageItem3.nativeElement.innerText = pageArray[2];
            if (pageArray[0] > (this.getLastPageIndex())) {
                this.pageItem1.nativeElement.parentElement.classList.add('disabled');
            }
            if (pageArray[1] > (this.getLastPageIndex())) {
                this.pageItem2.nativeElement.parentElement.classList.add('disabled');
            }
            if (pageArray[2] > (this.getLastPageIndex())) {
                this.pageItem3.nativeElement.parentElement.classList.add('disabled');
            }
        }
    };
    PaginationService.prototype.actualizeRangePage = function () {
        this.rangePage.nativeElement.innerText = "N/A";
        if (this.data && this.data.length > 0) {
            var fisrtRangeElement = this.getPageIndex() * parseInt(this.numberPerPage.nativeElement.value);
            var lastRangeElement = fisrtRangeElement + 1 + +parseInt(this.numberPerPage.nativeElement.value);
            lastRangeElement = (lastRangeElement > this.getTotalElement() ? this.getTotalElement() : lastRangeElement);
            this.rangePage.nativeElement.innerText = (fisrtRangeElement + 1) + " - " + lastRangeElement + " | Total: " + this.getTotalElement();
        }
    };
    PaginationService.prototype.getLastPageIndex = function () {
        var nberPerPage = this.numberPerPage ? parseInt(this.numberPerPage.nativeElement.value) : this.pageSizeArray[0];
        var lastPageIndex = Math.round(this.getTotalElement() / nberPerPage);
        if (this.getTotalElement() - (Math.round(this.getTotalElement() / nberPerPage) * nberPerPage) > 0) {
            lastPageIndex += 1;
        }
        return lastPageIndex;
    };
    PaginationService.prototype.setHighLight = function () {
        if (this.previousPage) {
            var buttons = document.getElementsByClassName('page-link');
            // on supprime la précédente surbrillance
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active');
            }
            if (this.getPageIndex() == 0) {
                buttons[1].classList.add('active');
            }
            else if (this.getPageIndex() == this.getLastPageIndex() - 1) {
                buttons[this.getLastPageIndex()].classList.add('active');
            }
            else {
                buttons[2].classList.add('active');
            }
        }
    };
    var PaginationService_1;
    PaginationService.UNSORTED = 0;
    PaginationService.SORT_ASC = 1;
    PaginationService.SORT_DESC = -1;
    PaginationService = PaginationService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PaginationService);
    return PaginationService;
}());



/***/ }),

/***/ "./src/app/service/slider.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/slider.service.ts ***!
  \*******************************************/
/*! exports provided: SliderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderService", function() { return SliderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderService = /** @class */ (function () {
    function SliderService(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SliderService.prototype.getMinValue = function () {
        return this.minValue;
    };
    SliderService.prototype.getMaxValue = function () {
        return this.maxValue;
    };
    SliderService.prototype.getOptions = function () {
        return this.options;
    };
    SliderService.prototype.initSlider = function (beginDate, endDate, featureChangesList, changeType) {
        this.background = this.sanitizer.bypassSecurityTrustStyle('rgba(100,100,100)');
        this.stepsArray = this.getStepsArray(beginDate, endDate);
        this.ticksArray = this.getTicksArray(featureChangesList, this.stepsArray);
        this.minValue = beginDate.getTime();
        this.maxValue = endDate.getTime();
        this.setOptions(this.stepsArray, this.ticksArray, changeType);
    };
    SliderService.prototype.setOptions = function (stepsArray, ticksArray, changeType) {
        var dateOptions = { month: 'numeric', day: 'numeric' };
        this.options = {
            stepsArray: stepsArray.map(function (date) { return { value: date, legend: "<b [style.background-color]='background'>" + new Date(date).toLocaleDateString('fr-FR', dateOptions) + "</b>" }; }),
            translate: this.translate,
            noSwitching: true,
            showTicks: true,
            ticksArray: ticksArray,
            getTickColor: function (value) {
                if (value == 6) {
                    return 'blue';
                }
                if (value == 2) {
                    return 'red';
                }
                return 'red';
            },
        };
    };
    SliderService.prototype.getStepsArray = function (beginDate, endDate) {
        if (endDate.getTime() < beginDate.getTime()) {
            return [];
        }
        else {
            var stepsArray = [];
            var date = beginDate;
            while (date.getTime() <= endDate.getTime() + 1000) { //1000 to add one seconds : 23h59m59s --> 00h00m00s
                stepsArray.push(date.getTime());
                date = new Date(date.getTime() + 1000 * 60 * 60 * 24); // = 24h = 1 day
            }
            return stepsArray;
        }
    };
    SliderService.prototype.translate = function (value, label) {
        var dateOptions = { month: 'numeric', day: 'numeric' };
        return new Date(value).toLocaleDateString('fr-FR', dateOptions);
    };
    SliderService.prototype.getTicksArray = function (changesList, stepsArray) {
        var ticksArray = [];
        changesList.forEach(function (change) {
            var timestamp = new Date(change.timestamp);
            timestamp.setUTCHours(0);
            timestamp.setUTCMinutes(0);
            timestamp.setUTCSeconds(0);
            ticksArray.push(stepsArray.indexOf(timestamp.getTime()));
        });
        return ticksArray;
    };
    SliderService.prototype.getRGBA = function (changeType) {
        return "rgba(" + changeType.color.R + "," + changeType.color.G + "," + changeType.color.B + ")";
    };
    SliderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SliderService);
    return SliderService;
}());



/***/ }),

/***/ "./src/app/service/user-context.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/user-context.service.ts ***!
  \*************************************************/
/*! exports provided: UserContextService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContextService", function() { return UserContextService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.service */ "./src/app/service/map.service.ts");
/* harmony import */ var _model_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/UserContext */ "./src/app/model/UserContext.ts");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/service/config.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserContextService = /** @class */ (function () {
    function UserContextService(configService, mapService, location, route) {
        this.configService = configService;
        this.mapService = mapService;
        this.location = location;
        this.route = route;
        this.setContext();
    }
    UserContextService.prototype.setPermalink = function () {
        console.log("setPermalink");
        this.context = new _model_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]();
        this.context.initFromCurrentView(this.mapService);
        var pLnk = this.context.getContextAsPermalink();
        this.location.go(pLnk);
        var piwikVlay = pLnk.substring(pLnk.indexOf("vLay=") + 5);
        (!piwikVlay || piwikVlay === "") ? piwikVlay = "none" : "",
            _paq.push(['trackEvent', 'permalien', piwikVlay]);
    };
    UserContextService.prototype.loadUserContextFromPermalink = function () {
        return this.context;
    };
    UserContextService.prototype.setContext = function () {
        var _this = this;
        var obs = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (resolve) {
            _this.configService.getConfig().subscribe(function (config) {
                _this.defaultUserContext = config.DEFAULTUSERCONTEXT[0];
                _this.context = new _model_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"]();
                _this.context.initFromRoute(_this.route);
                if (!_this.context.isValid()) {
                    _this.context = _this.defaultUserContext;
                }
                resolve.next(_this.context);
            });
        });
        return obs;
    };
    UserContextService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"],
            _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], UserContextService);
    return UserContextService;
}());



/***/ }),

/***/ "./src/app/utils/load-spinner/load-spinner.component.css":
/*!***************************************************************!*\
  !*** ./src/app/utils/load-spinner/load-spinner.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/utils/load-spinner/load-spinner.component.html":
/*!****************************************************************!*\
  !*** ./src/app/utils/load-spinner/load-spinner.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img\nsrc=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n"

/***/ }),

/***/ "./src/app/utils/load-spinner/load-spinner.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/utils/load-spinner/load-spinner.component.ts ***!
  \**************************************************************/
/*! exports provided: LoadSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSpinnerComponent", function() { return LoadSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadSpinnerComponent = /** @class */ (function () {
    function LoadSpinnerComponent() {
    }
    LoadSpinnerComponent.prototype.ngOnInit = function () {
    };
    LoadSpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load-spinner',
            template: __webpack_require__(/*! ./load-spinner.component.html */ "./src/app/utils/load-spinner/load-spinner.component.html"),
            styles: [__webpack_require__(/*! ./load-spinner.component.css */ "./src/app/utils/load-spinner/load-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadSpinnerComponent);
    return LoadSpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    integration: false,
    dev: true,
    geoserver_baseurl: "https://ch-osm-services.geodatasolutions.ch/geoserver",
    services_baseurl: "https://ch-osm-services.geodatasolutions.ch/services-webapp-magosm/",
    searchChangesTimeoutValue: 30000
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    if (window) {
        window.console.log = function () { };
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\OlivierCurdy\magOSM-master\magOSM-master\portail\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map