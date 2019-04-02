import { Component } from '@angular/core';
import { NavController, Platform, LoadingController } from 'ionic-angular';

import { NewsApiGlobal } from './../../models/newsapi-global.model';
import { NewsApiService } from './../../services/newsapi.service';

// import { SocialSharingOriginal } from '@ionic-native/social-sharing';
// import { FileOriginal } from '@ionic-native/file';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: NewsApiGlobal = new NewsApiGlobal();
  title: any;
  author: any;
  description: any;
  url: any;
  urlToImage: any;
  publishedAt: any;

  constructor(public navCtrl: NavController, private NewsApiService: NewsApiService, private platform: Platform, private loadingCtrl: LoadingController) {
    this.platform.ready().then(() => {
    });
  }
  doRefresh(refresher) {
    this.NewsApiService.getAllArticles()
      .then((data) => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        };

        if (refresher != 0) {
          refresher.complete();
        }
      });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Chargement en cours...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  public getArticlesTech(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void {
    this.NewsApiService.getArticlesTech()
      .then(data => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('tech: ',this.news);
        this.presentLoadingDefault();
      });
    
      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  public getArticlesSports(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void {
    this.NewsApiService.getArticlesSports()
      .then(data => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('sports: ',this.news);
        this.presentLoadingDefault();
      });
      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  public getArticlesBusiness(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void {
    this.NewsApiService.getArticlesBusiness()
      .then(data => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('business: ',this.news);
        this.presentLoadingDefault();
      });
    
      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  public getArticlesEntertainment(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void {
    this.NewsApiService.getArticlesEntertainment()
      .then(data => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('entertainment: ',this.news);
        this.presentLoadingDefault();
      });

    // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  public getArticlesHealth(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void {
    this.NewsApiService.getArticlesHealth()
      .then(data => {
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('health: ',this.news);
        this.presentLoadingDefault();
      });
    
      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  public getAllArticles(articleAuthor: any, articleTitle: any, articleDescritpion: any, articlePublished: any, articleUrl: any, articleUrlToImage: any): void{
    this.NewsApiService.getAllArticles()
      .then(data => {
        
        this.news = data
        for(let i = 0; i < this.news.articles.length; i++) {
          this.news.articles[i].author;
          this.news.articles[i].description;
          this.news.articles[i].publishedAt;
          this.news.articles[i].title;
          this.news.articles[i].url;
          this.news.articles[i].urlToImage;
        }
        console.log('Allnews: ', this.news);
        this.presentLoadingDefault();
      });

      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

  // async resolvedLocalFile() {
  //   return this.file.copyFile(`${this.file.applicationDirectory}www/assets/imgs`,'icon.png',
  //   this.file.cacheDirectory, `${new Date().getTime()}.png`)
  // }

  // removeTempFile(name) {
  //   this.file.removeFile(this.file.cacheDirectory, name);
  // }

  // async shareFacebook() {
  //   let file = await this.resolvedLocalFile();
  //   console.log('FILE: ', file);

  //   this.socialsharing.shareViaFacebook(null, this.urlToImage, this.url).then(() => {
  //     this.removeTempFile(file.name);
  //   }).catch (e => {

  //   })
  // };

  // async shareInstagram() {
  //   let file = await this.resolvedLocalFile();
  //   console.log('FILE: ', file);
    
  //   this.socialsharing.shareViaInstagram(null, this.urlToImage).then(() => {
  //     this.removeTempFile(file.name);
  //   }).catch (e => {
      
  //   })
  // };

}
