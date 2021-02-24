import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  constructor(public formBuilder: FormBuilder,public router: Router,public register: RegisterService) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
      mobile: [null, [Validators.required]],
      password: [null, Validators.required],
      type: []
  });
  }


  doregister(value){
    //console.log(value);
    value.type = 2;

    this.register.register(value).subscribe(data => {
      console.log(data);

          localStorage.setItem('token',data['token']);
          localStorage.setItem('role','2');
         //  this.router.navigate(['/dashboard']);
           this.router.navigate(['/customer-dashboard']);
 

    })

  }


}
