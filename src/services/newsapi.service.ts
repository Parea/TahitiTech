//Core components
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//RxJs
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { NewsApiGlobal } from './../models/newsapi-global.model';

@Injectable()
export class NewsApiService{

  public source: string =  'google-news-fr';
  public apiKey: string = '5f5ac4d8d2ea462cb9d5e3698c04d5ec'
  public apiUrl: string = 'https://newsapi.org/v2/';
  private options: any;
  constructor(public http: Http){

  }

  public getAllArticles(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }

  public getArticlesTech(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=technology&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }

  public getArticlesSports(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=sports&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }

  public getArticlesBusiness(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=business&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  } 

  public getArticlesEntertainment(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=entertainment&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }

  public getArticlesHealth(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=health&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }

  public getArticlesScience(): any {
    const url = `${this.apiUrl}top-headlines?country=fr&category=science&apiKey=${this.apiKey}`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json() as NewsApiGlobal)
    .catch(error => console.log('Une erreur est survenue ' + error))
  }
}