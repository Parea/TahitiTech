import { NewsApiArticle } from './../../models/newsapi-article.model';
import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { NewsApiService } from '../../services/newsapi.service';
import { NewsApiGlobal } from '../../models/newsapi-global.model';

@Component({
  selector: 'page-home-details',
  templateUrl: 'home-details.html',
})
export class HomeDetailsPage {
  news: NewsApiGlobal = new NewsApiGlobal();
  articles: any;
  title: any;
  author: any;
  description: any;
  url: any;
  urlToImage: any;
  publishedAt: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private NewsApiService: NewsApiService, private platform: Platform) {
    this.platform.ready().then(() => {
      
      this.title = this.navParams.get('title');
      this.author = this.navParams.get('author');
      this.description = this.navParams.get('description');
      this.url = this.navParams.get('url');
      this.urlToImage = this.navParams.get('urlToImage');
      this.publishedAt = this.navParams.get('publishedAt')

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailsPage');
  }

}
