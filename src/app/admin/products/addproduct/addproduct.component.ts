import { Component, OnInit,ViewEncapsulation,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../../../services/products.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  encapsulation: ViewEncapsulation.None,

})
export class AddproductComponent implements OnInit {
  addDailyActivity: FormGroup;
  imageUrl: string = "";
  ckeConfig: any;
  mycontent: string;
  ckeditorstring: string;
  title: string;
  fileupload: File = null;
  docupload: File = null;
  teachers = '';
  groups = '';
  groupDiv = false;
  subjects = '';
  subjectsDiv = false;
  selectedFile = null;
  file: any;
  submitted = false;
  successMessage = false;
  errorMessage = false;
  nameError: string;
  selecetdFile: File;
  imagePreview: string;
  filetoUpload: File = null;
  image: File = null;
  previewtitle: string;
  previewckeditor: any;
  allvalue: any;
  selectedTeacher: '';
  selectedGroup = '';
  teacherid = '';
  disabledflag = false;
  isValid = false;
  loader: boolean = false;
  docError: string;
  docErrormessage = false;
  public fileFlag: boolean = false;
  public filechange = '';
  selectedSubject;
  errorflag=false;
  errortitle=[];
  errorimage=[];
  errordescription=[];
  errorprice=[];
  errordiscount_percent=[];

  constructor(  public formbuilder: FormBuilder,
    public router: Router,
    public productservice: ProductsService
    ) { }

    @ViewChild('myForm') public myForm: NgForm;

  ngOnInit(): void {
  }


  
  save1(value) {
    this.loader = true;

    this.myForm.value.filetoUpload = this.fileupload;

    const formData = new FormData();
    for (var key in value) {
      formData.append(key, value[key]);
    }
    
    this.productservice.addproduct(formData).subscribe((data: any) => {
     // this.loader = false;
    //  console.log(data.status == "true");
      if (data['status_code'] == 200) {
            //  this.toastrMessage.showSuccess('Class activity added successfully!');
       this.router.navigate(['../../admin/products']);
      } else {
        this.successMessage = false;
        this.errorflag = true;

       // this.toastrMessage.showError('Validation failed!');


       if(data['message']['title']){
        this.errortitle= data['message']['title'][0];
      }else{
        this.errortitle =[];
      }

      if(data['message']['filetoUpload']){
        this.errorimage = data['message']['filetoUpload'][0];
      }else{

        this.errorimage=[];
      }

      if(data['message']['description']){
        this.errordescription = data['message']['description'][0];
      }else{

        this.errordescription =[];
      }

      if(data['message']['price']){
        this.errorprice = data['message']['price'][0];
      }else{

        this.errorprice =[];
      }


      if(data['message']['discountpercent']){
        this.errordiscount_percent = data['message']['discountpercent'][0];
      }else{

        this.errordiscount_percent =[];
      }



   //   console.log(this.errormessage);



      }
      
    }, error => {
      console.log('ERROR ' + error.message);
    });

    this.filechange = '';
  }

  onFileChange(file: FileList) {
    this.fileupload = file.item(0);
    console.log(this.fileupload)
    //show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileupload);
  }

}
