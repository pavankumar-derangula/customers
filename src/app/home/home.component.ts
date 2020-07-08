import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCustomers;
  
  constructor(private router:Router,
              private customerService:CustomersService) { 
              
    this.customerService.getAllCustomers()
    .subscribe(x=>
      {
        this.allCustomers=x.map<any>(y=>y.payload.val());

        x.forEach((cur,ind)=>{
          this.allCustomers[ind].key=cur.key;
        });
      })
  }
   
  delete(key:string){
   // alert('are sure? you want to delete the customer.');
    this.customerService.delete(key);
    
  }

  ngOnInit(): void {
  }
 
}
