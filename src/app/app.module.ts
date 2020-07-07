
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCustomerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
     
     
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'add-customer',
        component: AddCustomerComponent
      }
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
