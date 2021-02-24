import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from '../../services/login.service';

import {Router} from "@angular/router";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  form: FormGroup;
  constructor(public formBuilder: FormBuilder,public login: LoginService,public router: Router,) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, Validators.required],
      type: []
  });
  }

  doLogin(value){
    console.log(value);

    value.type = 1;

    this.login.dologin(value).subscribe(data => {
      console.log(data['token']);

      if(data['status_code'] == 200){

        localStorage.setItem('token',data['token']);
        localStorage.setItem('role','1');

        this.router.navigate(['admin/dashboard']);


      }else{


      }


    })

  }


  signup(){
    this.router.navigate(['register']);
  }


  adminlogin(){
    this.router.navigate(['admin/login']);
  }


}
