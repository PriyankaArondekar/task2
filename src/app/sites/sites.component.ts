import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  Http, Response, Headers } from '@angular/http';
import { SitesService } from '../sites.service';
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute,private ser: SitesService) { }
  site = {};
  site2 = {};
  siteup = {};
  sitedown = {};
  sites : any;
  display :false;
  patt =RegExp('^((https?|ftp)://)([a-z]+[.])?[a-z0-9-]+([.][a-z]{1,4}){1,2}(/.*[?].*)?$', 'i');
  
  ngOnInit() {
    this.getSites();
  }
//function to save the site
  saveSite(){

   var result =  this.patt.test(this.site['site_link']);
    var siteurl ;
   if(result == true){
      siteurl =  this.site['site_link'];
   }
   else{
     siteurl = '';
   }
   this.site2['site_title'] = this.site['site_title'];
   this.site2['site_link'] = siteurl;
   this.site2['site_vote'] = 0;
   console.log(this.site2); 
    this.http.post('/site',this.site2).subscribe(res=> {
      this.getSites();
      this.router.navigate(['/sites']);
    }, (err) => {
      console.log(err);
    }
  );
  }

//function to get all sites
getSites(){
 //   this.link = "https://www.w3schools.com/";
  //  console.log(this.patt.test(this.link));
    this.ser.getSites().subscribe(res=> {
      this.sites = res.json();
      }, (err) => {
       console.log(err);
     }
   );
}

upvote(id, vote){
    this.siteup['site_vote'] = parseInt(vote)+1;
    this.ser.updateVotes(id, this.siteup).subscribe(res => {
      this.getSites();
      }, (err) => {
        console.log(err);
      }
    );
 }

 //function to decrement votes
 downvote(id, vote){
  this.sitedown['site_vote'] = parseInt(vote)-1;
  this.ser.updateVotes(id,this.sitedown).subscribe(res => {
    this.getSites();
    }, (err) => {
      console.log(err);
    }
  );
}

}
