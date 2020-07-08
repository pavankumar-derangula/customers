import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import{ FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService: CustomersService,
              private router:Router) {

   }

  ngOnInit(): void {
  }


  form=new FormGroup({
    firstName: new FormControl('',[
        Validators.required,
        Validators.minLength(3)
        
      ]),
    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    address: new FormControl('',[
      Validators.required,
      
    ]),
    city: new FormControl('',[
      Validators.required,
      
    ]),
    state: new FormControl('',[
      Validators.required,
      
    ]),
    gender: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('',[
      Validators.required,
      
    ])
   

  })
  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get address() { return this.form.get('address'); }
  get city() { return this.form.get('city'); }
  get state() { return this.form.get('state'); }
  get gender() { return this.form.get('gender'); }
  get email() { return this.form.get('email'); }
  

  onSubmit() {
    
    console.log(this.form.value);
    this.customerService.create(this.form.value);
    this.router.navigate(['']);
  }

}
