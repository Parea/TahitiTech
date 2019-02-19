import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

import { NewsApiGlobal } from './../../models/newsapi-global.model';
import { NewsApiService } from './../../services/newsapi.service';
import { HomeDetailsPage } from '../home-details/home-details';

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

  constructor(public navCtrl: NavController, private NewsApiService: NewsApiService, private platform: Platform) {
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
      });

      // this.navCtrl.push(HomeDetailsPage, {title:articleTitle, author: articleAuthor, description:articleDescritpion, publishedAt:articlePublished, url:articleUrl, urlToImage: articleUrlToImage});
  }

}
