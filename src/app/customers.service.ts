import { AngularFireDatabase } from 'angularfire2/database';

import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

 constructor(private db: AngularFireDatabase) { 

  }

create(customer){

  return this.db.list('/customers').push(customer);
}


