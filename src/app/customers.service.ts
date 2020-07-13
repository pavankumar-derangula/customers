import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  imageDetailList:AngularFireList<any>;
 constructor(private db: AngularFireDatabase) { 

}

getImageDetailsList(){
  this.imageDetailList=this.db.list('imageDetails');
}  

insertImageDetails(imageDetails){
  this.imageDetailList.push(imageDetails);
}

  create(customer:any){
  // console.log(customer);
  return this.db.list('/customers').push(customer);
 }
 getAllCustomers() {
   return this.db.list('/customers').snapshotChanges();
 }

 get(customerId){
   
   return this.db.object('/customers/'+customerId);

 }
 
 delete(customerId) {
  return this.db.object('/customers/'+customerId).remove();
}

update(customer,customerId){
  return this.db.object('/customers/'+customerId).update(customer);
}

}