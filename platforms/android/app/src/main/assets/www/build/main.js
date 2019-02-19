webpackJsonp([1],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeDetailsPage = /** @class */ (function () {
    function HomeDetailsPage(navCtrl, navParams, NewsApiService, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.NewsApiService = NewsApiService;
        this.platform = platform;
        this.news = new __WEBPACK_IMPORTED_MODULE_3__models_newsapi_global_model__["a" /* NewsApiGlobal */]();
        this.platform.ready().then(function () {
            _this.title = _this.navParams.get('title');
            _this.author = _this.navParams.get('author');
            _this.description = _this.navParams.get('description');
            _this.url = _this.navParams.get('url');
            _this.urlToImage = _this.navParams.get('urlToImage');
            _this.publishedAt = _this.navParams.get('publishedAt');
        });
    }
    HomeDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeDetailsPage');
    };
    HomeDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-details',template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\pages\home-details\home-details.html"*/'<ion-header>\n</ion-header>\n\n<ion-content>\n  \n</ion-content>\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\pages\home-details\home-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_newsapi_service__["a" /* NewsApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], HomeDetailsPage);
    return HomeDetailsPage;
}());

//# sourceMappingURL=home-details.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/sqlite/sqlite.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiGlobal; });
var NewsApiGlobal = /** @class */ (function () {
    function NewsApiGlobal() {
    }
    return NewsApiGlobal;
}());

//# sourceMappingURL=newsapi-global.model.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_details_home_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_0__home_details_home_details__["a" /* HomeDetailsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Accueil" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Affichage" tabIcon="ios-folder"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, platform, speechRecognition, changeDetectorRef) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.speechRecognition = speechRecognition;
        this.changeDetectorRef = changeDetectorRef;
        this.isSpeechAvailable = false;
        this.isListening = false;
        this.matches = [];
        platform.ready().then(function () {
            _this.speechRecognition.isRecognitionAvailable()
                .then(function (available) { return _this.isSpeechAvailable = available; });
        });
    }
    AboutPage.prototype.startListening = function () {
        var _this = this;
        this.isListening = true;
        this.matches = [];
        var options = {
            language: 'fr-FR',
            matches: 5,
            prompt: 'Je vous écoute !:',
            showPopup: true,
            showpartial: false
        };
        this.speechRecognition.startListening(options)
            .subscribe(function (matches) {
            _this.isListening = false;
            _this.matches = matches;
            _this.changeDetectorRef.detectChanges();
        }, function (onerror) {
            _this.isListening = false;
            _this.changeDetectorRef.detectChanges();
            console.log(onerror);
        });
    };
    AboutPage.prototype.stopListening = function () {
        this.speechRecognition.stopListening();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      SpeechDict\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="intro-wrapper">\n    <p>Appuyer sur \'Lancer\' puis parler à votre appareil de manière claire et précise</p>\n    <button ion-button [color]="(isListening) ? \'danger\' : \'secondary\' " (tap)="(isListening) ? stopListening() : startListening()">\n      {{ (isListening) ? \'Stop\' : \'Lancer\' }}\n    </button>\n  </div>\n  <ion-list class="matches-wrapper">\n    <ion-item *ngIf="matches.length <= 0">\n      Aucun résultat veuillez recommencer !\n    </ion-item> \n    <ion-item *ngFor="let match of matches">\n      {{ match }}\n    </ion-item> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_newsapi_global_model__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newsapi_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, NewsApiService, platform) {
        this.navCtrl = navCtrl;
        this.NewsApiService = NewsApiService;
        this.platform = platform;
        this.news = new __WEBPACK_IMPORTED_MODULE_2__models_newsapi_global_model__["a" /* NewsApiGlobal */]();
        this.platform.ready().then(function () {
        });
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.NewsApiService.getAllArticles()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            ;
            if (refresher != 0) {
                refresher.complete();
            }
        });
    };
    HomePage.prototype.getArticlesTech = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getArticlesTech()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('tech: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage.prototype.getArticlesSports = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getArticlesSports()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('sports: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage.prototype.getArticlesBusiness = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getArticlesBusiness()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('business: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage.prototype.getArticlesEntertainment = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getArticlesEntertainment()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('entertainment: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage.prototype.getArticlesHealth = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getArticlesHealth()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('health: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage.prototype.getAllArticles = function (articleAuthor, articleTitle, articleDescritpion, articlePublished, articleUrl, articleUrlToImage) {
        var _this = this;
        this.NewsApiService.getAllArticles()
            .then(function (data) {
            _this.news = data;
            for (var i = 0; i < _this.news.articles.length; i++) {
                _this.news.articles[i].author;
                _this.news.articles[i].description;
                _this.news.articles[i].publishedAt;
                _this.news.articles[i].title;
                _this.news.articles[i].url;
                _this.news.articles[i].urlToImage;
            }
            console.log('Allnews: ', _this.news);
        });
        // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title class="head-title">Actualitées</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-chip (click)="getArticlesTech()" #chip1>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Technologie</ion-label>\n\n  </ion-chip>\n\n\n\n  <ion-chip (click)="getArticlesBusiness()" #chip2>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Business</ion-label>\n\n  </ion-chip>\n\n\n\n  <ion-chip (click)="getArticlesHealth()" #chip3>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Santé</ion-label>\n\n  </ion-chip>\n\n\n\n  <ion-chip (click)="getArticlesEntertainment()" #chip4>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Divertissement</ion-label>\n\n  </ion-chip>\n\n\n\n  <ion-chip (click)="getArticlesSports()" #chip5>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Sports</ion-label>\n\n  </ion-chip>\n\n\n\n  <ion-chip (click)="getAllArticles()" #chip6>\n\n    <ion-avatar>\n\n      <img src="assets/imgs/chips.png">\n\n    </ion-avatar>\n\n    <ion-label>Autre...</ion-label>\n\n  </ion-chip>\n\n</ion-content>\n\n\n\n<ion-content>\n\n<!-- \n\n  <ion-list inset>\n\n    <button ion-item (click)="getArticlesTech()">\n\n      Technologie\n\n    </button>\n\n    \n\n    <button ion-item (click)="getArticlesBusiness()">\n\n      Business\n\n    </button> \n\n\n\n    <button ion-item (click)="getArticlesHealth()">\n\n      Santé\n\n    </button> \n\n\n\n    <button ion-item (click)="getArticlesEntertainment()">\n\n      Entreprise\n\n    </button>\n\n    \n\n    <button ion-item (click)="getArticlesSports()">\n\n      Sport\n\n    </button> \n\n  </ion-list> -->\n\n\n\n  <ion-card class="cards" *ngFor="let article of news.articles">\n\n\n\n    <ion-item text-wrap>\n\n      <ion-card-title>\n\n        {{ article.title }}\n\n      </ion-card-title>\n\n    </ion-item>\n\n  \n\n    <a href="{{ article.url }}"><img [src]="article.urlToImage" /></a>\n\n  \n\n    <ion-card-content>\n\n      <p>{{ article.description }}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-card-content>\n\n      <a href="{{ article.url }}">{{ article.url }}</a>\n\n    </ion-card-content>\n\n  \n\n    <ion-row>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          Publier le {{ article.publishedAt | date: "dd/MM/yyyy hh:mm"}} par {{ article.author }}\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_newsapi_service__["a" /* NewsApiService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_details_home_details__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_newsapi_service__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_speech_recognition__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__ = __webpack_require__(280);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_details_home_details__["a" /* HomeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/sqlite/sqlite.module#SqlitePageModule', name: 'SqlitePage', segment: 'sqlite', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_details_home_details__["a" /* HomeDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__services_newsapi_service__["a" /* NewsApiService */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_onesignal__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_speech_recognition__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal, speechRecognition) {
        var _this = this;
        this.oneSignal = oneSignal;
        this.speechRecognition = speechRecognition;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.oneSignal.startInit('7f06ab05-34d6-4908-bce1-6c703e4df1f5', '157333484297');
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            _this.oneSignal.handleNotificationReceived().subscribe(function () { });
            _this.oneSignal.handleNotificationOpened().subscribe(function () { });
            _this.oneSignal.endInit();
            _this.speechRecognition.requestPermission()
                .then(function () { return console.log('Accorder !'); }, function () { return console.log('Refuser !'); });
            _this.speechRecognition.hasPermission()
                .then(function (hasPermission) { return console.log("Droit d'utiliser le reconnaissance vocale : " + hasPermission); });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\AppsMobileParetz\newsApi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\AppsMobileParetz\newsApi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_speech_recognition__["a" /* SpeechRecognition */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Core components


//RxJs


var NewsApiService = /** @class */ (function () {
    function NewsApiService(http) {
        this.http = http;
        this.source = 'google-news-fr';
        this.apiKey = '5f5ac4d8d2ea462cb9d5e3698c04d5ec';
        this.apiUrl = 'https://newsapi.org/v2/';
    }
    NewsApiService.prototype.getAllArticles = function () {
        var url = this.apiUrl + "top-headlines?country=fr&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesTech = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=technology&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesSports = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=sports&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesBusiness = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=business&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesEntertainment = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=entertainment&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesHealth = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=health&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService.prototype.getArticlesScience = function () {
        var url = this.apiUrl + "top-headlines?country=fr&category=science&apiKey=" + this.apiKey;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log('Une erreur est survenue ' + error); });
    };
    NewsApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], NewsApiService);
    return NewsApiService;
}());

//# sourceMappingURL=newsapi.service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map