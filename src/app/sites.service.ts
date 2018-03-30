import { Injectable } from '@angular/core';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SitesService {

  constructor(private http: Http) { }

  result:any;
 
//service to get data from api
  getSites(){
    return this.http.get('/site');
  }

//service to update votes
  updateVotes(id,sitedata ){
   return  this.http.put('/site/'+id, sitedata);
   }
}
