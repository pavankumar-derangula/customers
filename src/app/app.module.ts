
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from './customers.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from './../environments/environment';
import { CustomFormsModule} from 'ng2-validation';
import {AngularFireStorage } from "@angular/fire/storage";

// import {AngularFireAuthModule } from 'angularfire2/auth'

import  { AngularFireDatabaseModule } from 'angularfire2/database';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    
  ],
  imports: [
   
    BrowserModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule,
    
    CustomFormsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
     
     
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'add-customer',
        component: AddCustomerComponent
      },
      {
        path:'add-customer/:id',
        component: AddCustomerComponent
      }
      
     
    ])
  ],
  providers: [
    CustomersService,
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
