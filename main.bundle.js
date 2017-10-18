webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--App Component.-->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h1 class=\"mb-sm text-center\">\n      Gists Blog!!\n    </h1>\n    <app-search-gists></app-search-gists>\n    <hr class=\"taller\">\n  </div>\n</div>\n\n<router-outlet>\n</router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Posts */\n.blog-posts article {\n  border-bottom: 1px solid #DDD;\n  margin-bottom: 50px;\n  padding-bottom: 10px; }\n\n.blog-posts .pagination {\n  margin: -10px 0 20px; }\n\nhr.taller {\n  margin: 50px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    ;
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_helpers_truncate__ = __webpack_require__("../../../../../src/app/shared/helpers/truncate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gist_article_gist_article_component__ = __webpack_require__("../../../../../src/app/gist-article/gist-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gist_article_detail_gist_article_detail_component__ = __webpack_require__("../../../../../src/app/gist-article-detail/gist-article-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_components_raw_content_raw_content_component__ = __webpack_require__("../../../../../src/app/shared/components/raw-content/raw-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_components_comment_comment_component__ = __webpack_require__("../../../../../src/app/shared/components/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_gists_search_gists_component__ = __webpack_require__("../../../../../src/app/search-gists/search-gists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_components_spinner_spinner_component__ = __webpack_require__("../../../../../src/app/shared/components/spinner/spinner.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__gist_article_gist_article_component__["a" /* GistArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_helpers_truncate__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_10__gist_article_detail_gist_article_detail_component__["a" /* GistArticleDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_components_raw_content_raw_content_component__["a" /* RawContentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_components_comment_comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_gists_search_gists_component__["a" /* SearchGistsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_components_spinner_spinner_component__["a" /* SpinnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* AppRoutes */])
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__gist_article_gist_article_component__ = __webpack_require__("../../../../../src/app/gist-article/gist-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gist_article_detail_gist_article_detail_component__ = __webpack_require__("../../../../../src/app/gist-article-detail/gist-article-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });


var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__gist_article_gist_article_component__["a" /* GistArticleComponent */] },
    { path: 'posts', redirectTo: '' },
    { path: 'search', redirectTo: '' },
    { path: 'search/:search', component: __WEBPACK_IMPORTED_MODULE_0__gist_article_gist_article_component__["a" /* GistArticleComponent */] },
    { path: 'posts/:id', component: __WEBPACK_IMPORTED_MODULE_1__gist_article_detail_gist_article_detail_component__["a" /* GistArticleDetailComponent */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/commons/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var API = 'https://api.github.com';
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "../../../../../src/app/gist-article-detail/gist-article-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"post blog-single-post\">\n  <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n  <article class=\"post post-large blog-single-post\" *ngIf=\"gist\">\n    <div class=\"post-date\">\n      <span class=\"day\"> {{ gist.created_at | date:'d' }} </span>\n      <span class=\"month\">{{ gist.created_at | date:'MMM' }}</span>\n    </div>\n    <div class=\"post-content\">\n      <h2>{{gist.description}}</h2>\n      <!-- Content Raw -->\n      <app-raw-content [rawUrl]=\"getRawUrl(gist)\" [truncate]=\"false\"></app-raw-content>\n      <!-- /Content Raw -->\n      <div class=\"post-meta\">\n        <span>\n        <i class=\"fa fa-user\"></i>\n        By <a href=\"{{ gist.owner.html_url }}\" target=\"_blank\">{{ gist.owner.login }}</a>\n        </span>\n        <span>\n        <i class=\"fa fa-comments\"></i>\n        <a href=\"{{ gist.comments_url }}\" target=\"_blank\">{{ gist.comments }} Comments</a>\n        </span>\n      </div>\n      <div class=\"post-block post-author clearfix\">\n        <h3 class=\"heading-primary\"><i class=\"fa fa-user\"></i>Author</h3>\n        <div class=\"img-thumbnail\">\n          <a href=\"blog-post.html\">\n          <img src=\"{{ gist.owner.avatar_url }}\" alt=\"avatar\">\n          </a>\n        </div>\n        <p><strong class=\"name\"><a href=\"{{ gist.owner.html_url }}\" target=\"_blank\">{{ gist.owner.login }}</a></strong></p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius\n          vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat,\n          felis enim ornare nisi, vitae mattis nulla ante id dui.\n        </p>\n      </div>\n      <div class=\"post-block post-comments clearfix\">\n        <h3 class=\"heading-primary\"><i class=\"fa fa-comments\"></i>Comments ({{ gist.comments }})</h3>\n        <app-comment [commentUrl]=\"gist.comments_url\"></app-comment>\n      </div>\n    </div>\n  </article>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gist-article-detail/gist-article-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Single Post */\narticle.post-large .post-date {\n  margin-left: -60px; }\n\n.post-meta {\n  font-size: 0.9em;\n  margin-bottom: 7px; }\n  .post-meta > span {\n    display: inline-block;\n    padding-right: 8px; }\n  .post-meta i {\n    margin-right: 3px; }\n\n.post-date {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n  float: left;\n  margin-right: 10px;\n  text-align: center; }\n  .post-date .month {\n    background-color: #0088cc;\n    border-radius: 0 0 2px 2px;\n    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.07) inset;\n    color: #FFF;\n    font-size: 0.9em;\n    padding: 0 10px 2px; }\n  .post-date .day {\n    background: #F4F4F4;\n    border-radius: 2px 2px 0 0;\n    color: #0088cc;\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    font-weight: bold;\n    padding: 10px; }\n\n.single-post article {\n  border-bottom: 0;\n  margin-bottom: 0; }\n\narticle.blog-single-post .post-meta {\n  margin-bottom: 20px; }\n\n/* Post Block */\n.post-block {\n  border-top: 1px solid #DDD;\n  margin: 15px 0 0 0;\n  padding: 20px 0 15px 0; }\n  .post-block h3 {\n    font-size: 1.8em;\n    font-weight: 200;\n    margin: 0 0 20px;\n    text-transform: none; }\n    .post-block h3 i {\n      margin-right: 7px; }\n\n/* Post Author */\n.post-author {\n  margin: 15px 0 0 0; }\n  .post-author img {\n    max-height: 80px;\n    max-width: 80px; }\n  .post-author p {\n    font-size: 0.9em;\n    line-height: 22px;\n    margin: 0;\n    padding: 0; }\n    .post-author p .name {\n      font-size: 1.1em; }\n  .post-author .img-thumbnail {\n    display: inline-block;\n    float: left;\n    margin-right: 20px; }\n\n/* Post Share */\n.post-share {\n  margin: 55px 0 0 0;\n  padding-bottom: 0; }\n\n/* Post Comments */\n.post-comments {\n  margin-top: 45px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gist-article-detail/gist-article-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gist_article_gist_article_service__ = __webpack_require__("../../../../../src/app/gist-article/gist-article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistArticleDetailComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GistArticleDetailComponent = /** @class */ (function () {
    function GistArticleDetailComponent(route, gistArticleService) {
        this.route = route;
        this.gistArticleService = gistArticleService;
    }
    GistArticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.getSingleGist(params['id']);
        });
    };
    GistArticleDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /**
     * Gets detail of an gist
     * @param id Gist Id
     */
    GistArticleDetailComponent.prototype.getSingleGist = function (id) {
        var _this = this;
        this.gistArticleService.fetchSingleGist(id).subscribe(function (response) {
            _this.gist = response;
            _this.stopRefreshing();
        }, function (error) {
            _this.error = error;
            _this.stopRefreshing();
        });
    };
    /**
     * Gets the url of the gist raw
     * @param gist Object gist
     */
    GistArticleDetailComponent.prototype.getRawUrl = function (gist) {
        var key = Object.keys(gist.files).shift();
        return gist.files[key].raw_url;
    };
    /**
     * Stop spinner
     */
    GistArticleDetailComponent.prototype.stopRefreshing = function () {
        this.isRequesting = false;
    };
    GistArticleDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-gist-article-detail',
            template: __webpack_require__("../../../../../src/app/gist-article-detail/gist-article-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gist-article-detail/gist-article-detail.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__gist_article_gist_article_service__["a" /* GistArticleService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gist_article_gist_article_service__["a" /* GistArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gist_article_gist_article_service__["a" /* GistArticleService */]) === "function" && _b || Object])
    ], GistArticleDetailComponent);
    return GistArticleDetailComponent;
    var _a, _b;
}());

//# sourceMappingURL=gist-article-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/gist-article/gist-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-posts\">\n  <article *ngFor=\"let gist of gists\" class=\"post post-large\">\n    <div class=\"post-date\">\n      <span class=\"day\">{{gist.created_at | date:'d'}}</span>\n      <span class=\"month\">{{gist.created_at | date:'MMM'}}</span>\n    </div>\n    <div class=\"post-content\">\n      <h2>\n        <a href=\"/posts/{{ gist.id }}\">{{gist.description}}</a>\n      </h2>\n      <!-- Content Raw -->\n      <app-raw-content [rawUrl]=\"getRawUrl(gist)\" [truncate]=\"true\"></app-raw-content>\n      <!-- /Content Raw -->\n      <div class=\"post-meta\">\n        <span>\n        <i class=\"fa fa-user\"></i>\n        By <a href=\"{{ gist.owner.html_url }}\" target=\"_blank\">{{ gist.owner.login }}</a>\n        </span>\n        <span>\n        <i class=\"fa fa-comments\"></i>\n        <a href=\"{{ gist.comments_url }}\" target=\"_blank\">{{ gist.comments }} Comments</a>\n        </span>\n        <a href=\"/posts/{{ gist.id }}\" class=\"btn btn-xs btn-primary pull-right\">Read more...</a>\n      </div>\n    </div>\n  </article>\n  <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gist-article/gist-article.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Post */\n.blog-posts article {\n  border-bottom: 1px solid #DDD;\n  margin-bottom: 50px;\n  padding-bottom: 10px; }\n\n.blog-posts .pagination {\n  margin: -10px 0 20px; }\n\narticle.post h2 a {\n  text-decoration: none; }\n\narticle.post .post-meta {\n  font-size: 0.9em;\n  margin-bottom: 7px; }\n  article.post .post-meta > span {\n    display: inline-block;\n    padding-right: 8px; }\n  article.post .post-meta i {\n    margin-right: 3px; }\n\narticle.post .post-date {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);\n  float: left;\n  margin-right: 10px;\n  text-align: center; }\n  article.post .post-date .month {\n    background-color: #0088cc;\n    border-radius: 0 0 2px 2px;\n    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.07) inset;\n    color: #FFF;\n    font-size: 0.9em;\n    padding: 0 10px 2px; }\n  article.post .post-date .day {\n    background: #F4F4F4;\n    border-radius: 2px 2px 0 0;\n    color: #0088cc;\n    display: block;\n    font-size: 16px;\n    font-weight: 500;\n    font-weight: bold;\n    padding: 10px; }\n\narticle.post-large {\n  margin-left: 60px; }\n  article.post-large h2 {\n    margin-bottom: 5px; }\n  article.post-large .post-date {\n    margin-left: -60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gist-article/gist-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gist_article_service__ = __webpack_require__("../../../../../src/app/gist-article/gist-article.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistArticleComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GistArticleComponent = /** @class */ (function () {
    function GistArticleComponent(route, gistArticleService) {
        this.route = route;
        this.gistArticleService = gistArticleService;
        this.gists = [];
    }
    GistArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.getGists(params['search']);
        });
    };
    GistArticleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    /**
     * Get all gist of a user
     * @param search Value for search query
     */
    GistArticleComponent.prototype.getGists = function (search) {
        var _this = this;
        this.isRequesting = true;
        this.gistArticleService.fetchGists(search).subscribe(function (response) {
            _this.gists = response;
            _this.stopRefreshing();
        }, function (error) {
            _this.error = error;
            _this.stopRefreshing();
        });
    };
    /**
     * Get raw url of a gist
     * @param gist
     */
    GistArticleComponent.prototype.getRawUrl = function (gist) {
        var key = Object.keys(gist.files).shift();
        return gist.files[key].raw_url;
    };
    /**
     * Stop spinner
     */
    GistArticleComponent.prototype.stopRefreshing = function () {
        this.isRequesting = false;
    };
    GistArticleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-gist-article',
            template: __webpack_require__("../../../../../src/app/gist-article/gist-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/gist-article/gist-article.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__gist_article_service__["a" /* GistArticleService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__gist_article_service__["a" /* GistArticleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__gist_article_service__["a" /* GistArticleService */]) === "function" && _b || Object])
    ], GistArticleComponent);
    return GistArticleComponent;
    var _a, _b;
}());

//# sourceMappingURL=gist-article.component.js.map

/***/ }),

/***/ "../../../../../src/app/gist-article/gist-article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__ = __webpack_require__("../../../../../src/app/shared/helpers/request.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__commons_api__ = __webpack_require__("../../../../../src/app/commons/api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GistArticleService; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GistArticleService = /** @class */ (function () {
    function GistArticleService(http) {
        this.http = http;
    }
    /**
     * Get all gist of a username
     * @param search Value for search query
     */
    GistArticleService.prototype.fetchGists = function (search) {
        var username = search ? search : 'khriztianmoreno';
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__commons_api__["a" /* API */] + "/users/" + username + "/gists")
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].extractData)
            .catch(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].handleError);
    };
    /**
     * Get a single gist
     * @param id Identificator gist in github
     */
    GistArticleService.prototype.fetchSingleGist = function (id) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_3__commons_api__["a" /* API */] + "/gists/" + id)
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].extractData)
            .catch(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].handleError);
    };
    GistArticleService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], GistArticleService);
    return GistArticleService;
    var _a;
}());

//# sourceMappingURL=gist-article.service.js.map

/***/ }),

/***/ "../../../../../src/app/search-gists/search-gists.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\">\n  <div class=\"input-group input-group-lg\">\n    <input formControlName=\"search\"  class=\"form-control\" placeholder=\"Search...\" name=\"s\" id=\"s\" type=\"text\">\n    <span class=\"input-group-btn\">\n      <button type=\"submit\" (click)=\"onSearch(searchForm.value)\" class=\"btn btn-primary btn-lg\"><i class=\"fa fa-search\"></i></button>\n    </span>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/search-gists/search-gists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchGistsComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchGistsComponent = /** @class */ (function () {
    function SearchGistsComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    SearchGistsComponent.prototype.ngOnInit = function () {
        this.searchForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            search: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('')
        });
    };
    /**
     * Search all gist of a username
     * @param param0 input value
     */
    SearchGistsComponent.prototype.onSearch = function (_a) {
        var search = _a.search;
        this.router.navigate(['/search', search]);
    };
    SearchGistsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-search-gists',
            template: __webpack_require__("../../../../../src/app/search-gists/search-gists.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
    ], SearchGistsComponent);
    return SearchGistsComponent;
    var _a, _b;
}());

//# sourceMappingURL=search-gists.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"comments\" *ngFor=\"let comment of comments\">\n  <li>\n    <div class=\"comment\">\n      <div class=\"img-thumbnail\">\n        <img class=\"avatar\" alt=\"Avatar\" src=\"{{ comment.user.avatar_url }}\">\n      </div>\n      <div class=\"comment-block\">\n        <div class=\"comment-arrow\"></div>\n        <span class=\"comment-by\">\n          <strong>\n            <a href=\"{{ comment.user.html_url }}\" target=\"_blank\">{{ comment.user.login }}</a>\n          </strong>\n        </span>\n        <p>{{ comment.body }}</p>\n        <span class=\"date pull-right\">{{ comment.created_at | date:'medium' }}</span>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.comments {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  ul.comments li {\n    clear: both;\n    padding: 10px 0 0 115px; }\n    ul.comments li img.avatar {\n      height: 80px;\n      width: 80px; }\n    ul.comments li ul.reply {\n      margin: 0; }\n    ul.comments li a {\n      text-decoration: none; }\n    ul.comments li .img-thumbnail {\n      margin-left: -115px;\n      position: absolute; }\n    ul.comments li .comment {\n      margin-bottom: 10px; }\n  ul.comments .comment-arrow {\n    border-bottom: 15px solid transparent;\n    border-right: 15px solid #F4F4F4;\n    border-top: 15px solid transparent;\n    height: 0;\n    left: -15px;\n    position: absolute;\n    top: 28px;\n    width: 0; }\n  ul.comments .comment-block {\n    background: #F4F4F4;\n    border-radius: 5px;\n    padding: 20px 20px 30px;\n    position: relative; }\n    ul.comments .comment-block p {\n      font-size: 0.9em;\n      line-height: 21px;\n      margin: 0;\n      padding: 0; }\n    ul.comments .comment-block .comment-by {\n      display: block;\n      font-size: 1em;\n      line-height: 21px;\n      margin: 0;\n      padding: 0 0 5px 0; }\n    ul.comments .comment-block .date {\n      color: #999;\n      font-size: 0.9em; }\n\n/* Responsive */\n@media (max-width: 479px) {\n  ul.comments li {\n    border-left: 8px solid #DDDDDD;\n    clear: both;\n    padding: 0 0 0 10px; }\n    ul.comments li .img-thumbnail {\n      display: none; }\n  ul.comments .comment-arrow {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_service__ = __webpack_require__("../../../../../src/app/shared/components/comment/comment.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentComponent = /** @class */ (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
        this.comments = [];
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.getCommetnGists(this.commentUrl);
    };
    /**
     * Gets the raw of a specific gist
     * @param url
     */
    CommentComponent.prototype.getCommetnGists = function (url) {
        var _this = this;
        return this.commentService.fetchCommentGists(url).subscribe(function (response) { return _this.comments = response; }, function (error) { return _this.error = error; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "commentUrl", void 0);
    CommentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/shared/components/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/comment/comment.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__comment_service__["a" /* CommentService */]) === "function" && _a || Object])
    ], CommentComponent);
    return CommentComponent;
    var _a;
}());

//# sourceMappingURL=comment.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/comment/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__ = __webpack_require__("../../../../../src/app/shared/helpers/request.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
    }
    /**
     * Get all comments of a single gist
     * @param url value where are the comments of the gist
     */
    CommentService.prototype.fetchCommentGists = function (url) {
        return this.http
            .get(url)
            .map(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].extractData)
            .catch(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].handleError);
    };
    CommentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], CommentService);
    return CommentService;
    var _a;
}());

//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/raw-content/raw-content.component.html":
/***/ (function(module, exports) {

module.exports = "<p [innerHTML]=\"raw | truncate : 200\" *ngIf=\"truncate\"></p>\n<p [innerHTML]=\"raw\" *ngIf=\"!truncate\"></p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/raw-content/raw-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__raw_content_service__ = __webpack_require__("../../../../../src/app/shared/components/raw-content/raw-content.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RawContentComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RawContentComponent = /** @class */ (function () {
    function RawContentComponent(rawContentService) {
        this.rawContentService = rawContentService;
    }
    RawContentComponent.prototype.ngOnInit = function () {
        this.fetchRawGist(this.rawUrl);
    };
    /**
     * Gets the raw of a specific gist
     * @param url
     */
    RawContentComponent.prototype.fetchRawGist = function (url) {
        var _this = this;
        return this.rawContentService.getRawGist(url).subscribe(function (response) { return _this.raw = response; }, function (error) { return _this.error = error; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", String)
    ], RawContentComponent.prototype, "rawUrl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RawContentComponent.prototype, "truncate", void 0);
    RawContentComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-raw-content',
            template: __webpack_require__("../../../../../src/app/shared/components/raw-content/raw-content.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__raw_content_service__["a" /* RawContentService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__raw_content_service__["a" /* RawContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__raw_content_service__["a" /* RawContentService */]) === "function" && _a || Object])
    ], RawContentComponent);
    return RawContentComponent;
    var _a;
}());

//# sourceMappingURL=raw-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/raw-content/raw-content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__ = __webpack_require__("../../../../../src/app/shared/helpers/request.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RawContentService; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RawContentService = /** @class */ (function () {
    function RawContentService(http) {
        this.http = http;
    }
    /**
     * Gets all the raw of a specific gist
     * @param url value where are the raw of the gist
     */
    RawContentService.prototype.getRawGist = function (url) {
        return this.http
            .get(url)
            .map(this.extractTextData)
            .catch(__WEBPACK_IMPORTED_MODULE_2__shared_helpers_request__["a" /* Request */].handleError);
    };
    /**
     * Extract data in formatt text
     */
    RawContentService.prototype.extractTextData = function (res) {
        var body = res.text();
        return body || {};
    };
    RawContentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], RawContentService);
    return RawContentService;
    var _a;
}());

//# sourceMappingURL=raw-content.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">\n  <div class=\"double-bounce1\"></div>\n  <div class=\"double-bounce2\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/spinner/spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Spinner */\n.spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto; }\n\n.double-bounce1 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out;\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        // This is the internal state of the spinner, if it is running or not
        this.isDelayedRunning = false;
        this.delay = 300;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            this.currentTimeout = setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* Component */])({
            selector: 'app-spinner',
            template: __webpack_require__("../../../../../src/app/shared/components/spinner/spinner.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());

//# sourceMappingURL=spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/helpers/request.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */

var Request = /** @class */ (function () {
    function Request() {
    }
    Request.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    Request.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return Request;
}());

//# sourceMappingURL=request.js.map

/***/ }),

/***/ "../../../../../src/app/shared/helpers/truncate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/**
 * @author Cristian Moreno <khriztianmoreno@gmail.com>
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit) {
        if (value) {
            return value.length > limit ? value.substring(0, limit) + " [...]" : value;
        }
        return value;
    };
    TruncatePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Pipe */])({ name: 'truncate' })
    ], TruncatePipe);
    return TruncatePipe;
}());

//# sourceMappingURL=truncate.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map