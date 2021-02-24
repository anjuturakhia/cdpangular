import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {RegisterService} from '../services/register.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  form: FormGroup;
  errorflag = false;
  errormessage=[];
  errormessageemail=[]
  errormessagemobile=[];
  errormessagepassword=[];
  constructor(public formBuilder: FormBuilder,public router: Router,public register: RegisterService) { }


  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [null, [Validators.required]],
    //  lastname: [null, [Validators.required]],
      email: [null, [Validators.required,Validators.email]],
    //  mobile: [null, [Validators.required]],
      password: [null, Validators.required],
      type: []
  });
  }


  doregister(value){
    //console.log(value);
    value.type = 1;

    this.register.register(value).subscribe(data => {
      console.log(data);

          if(data['status_code'] == 200){

            localStorage.setItem('token',data['token']);
            localStorage.setItem('role','1');
           //  this.router.navigate(['/dashboard']);
             this.router.navigate(['admin/products']);
             this.errorflag = false;
 
             
          }else{

            this.errorflag=true;
            // this.errormessage = data['message'];
            if(data['message']['email']){
              this.errormessageemail = data['message']['email'][0];
            }else{
              this.errormessageemail =[];
            }
  
          
            if(data['message']['password']){
              this.errormessagepassword = data['message']['password'][0];
            }else{
  
              this.errormessagepassword =[];
            }
  
            console.log(this.errormessage);
  
          }

        

    })

  }

}
