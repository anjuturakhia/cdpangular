import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../services/login.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorflag = false;
  errormessage=[];
  constructor(public formBuilder: FormBuilder,public login: LoginService,public router: Router,) { }

  ngOnInit() {

    if(localStorage.getItem('token')){
      this.router.navigate(['customer-dashboard']);
    }

    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
      type: []
  });
  }

  doLogin(value){
    console.log(value);

    value.type = 2;
    this.login.dologin(value).subscribe(data => {
      console.log(data);


      if(data['status_code'] == 200){


        this.errorflag = false;
        localStorage.setItem('token',data['token']);
        localStorage.setItem('role','2');
        this.router.navigate(['/customer-dashboard'])


      }else{

        this.errorflag= true;
        this.errormessage = data['message'];



      }



    })

  }


  signup(){
    this.router.navigate(['register']);
  }


  adminlogin(){
    this.router.navigate(['admin/login']);
  }


  adminregister(){
    this.router.navigate(['admin/adminregister']); 
  }


}
