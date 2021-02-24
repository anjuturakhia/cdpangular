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

  constructor(  public formbuilder: FormBuilder,
    public router: Router,
    public productservice: ProductsService
    ) { }

    @ViewChild('myForm',{static:false}) public myForm: NgForm;

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
      if (data.status == 'true') {
            //  this.toastrMessage.showSuccess('Class activity added successfully!');
       this.router.navigate(['../../admin/products']);
      } else if (data.status == 'false') {
        this.successMessage = false;
       // this.toastrMessage.showError('Validation failed!');
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
