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
    this.customerService.getAllCustomers().subscribe(x=>
      {
        console.log(x);
          this.allCustomers=x;
      })
  }

  ngOnInit(): void {
  }
 
}
