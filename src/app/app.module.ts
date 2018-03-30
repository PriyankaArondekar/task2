import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule  } from '@angular/http';
import { SitesService } from './sites.service';
const appRoutes  = [{
  path : 'sites',
  component  : SitesComponent,

},
{
  path : '',
  redirectTo : '/sites',
  pathMatch : 'full'
}
];

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    
    
   
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [SitesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
