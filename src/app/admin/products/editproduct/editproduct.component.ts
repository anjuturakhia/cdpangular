import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import {FormControl, FormGroup, Validators,FormBuilder,NgForm} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  addDailyActivity: FormGroup;
  imageUrl:string="";
  fileurl = '';
  ckeConfig: any;
  description: string;
  ckeditorstring:string;
  title:string;
  fileupload : File =null;
  teachers = '';
  groups = '';
  groupDiv=false;
  subjects='';
  subjectsDiv=false;
  selectedFile= null;
  file:any;
  submitted = false;
  successMessage=false;
  errorMessage=false;
  nameError:string;
  selecetdFile : File;
  imagePreview: string;
  filetoUpload : File= null;
  image : File= null;
  heroes={};
  teacherid:string;
  groupid:string;
  subid:string;
  selectedTeacher='';
  selectedGroup='';
  selectedSubject='';
  previewckeditor:any;
  allvalue:any;
  previewtitle:string;
  disabledflag=false;
  status:any;
  url='';
  isValid = false;
  loader:boolean = false;
  docupload: File = null;
  public removedoc;
  public imageclear = '';
  public imagepathEdit = '';
  public downloadFile = '';
  public filepresentornot = true;
  docError :string;
  docErrormessage = false;
  // public filechange = '';
  public fileFlag: boolean = false;
  public price;
  public discount_percent;
  imagepath='';


  constructor(   public formbuilder: FormBuilder,
    public productservice: ProductsService,
    public activatedRoute: ActivatedRoute,
    public router: Router
    ) { 
      this.imageUrl = this.productservice.imageUrl;
    }

    @ViewChild('myForm') public myForm: NgForm;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
   
    this.addDailyActivity = this.formbuilder.group({
      title: [''],
      image: [''],
      description:[''],
      id:[''],
      docupload: [''],
    })
   


    this.productservice.editproduct(id).subscribe((data:any)=>{
      //  console.log(data);
       this.imagepathEdit = data.data['image'];
       console.log(this.imagepathEdit)
         this.heroes = data.data;
         // console.log(this.heroes['image'] == '');
           this.imageUrl = this.imageUrl + this.heroes['image'];
           console.log(this.imageUrl);
       
        this.description = this.heroes['description'];
        this.title = this.heroes['name'];
        this.price = this.heroes['price'];
        this.discount_percent = this.heroes['discount_percent'];
       
       //  this.userService.getGroups(this.heroes['teacher_id']).subscribe(data => { 
       //  this.groups = data['group'];
       //   })
        
        
        
   });

  }


  save1(value){


  this.myForm.value.filetoUpload =this.fileupload;
 
  //console.log(this.myForm);

  const formData   = new FormData();
  // formData.append('logo',this.postcorporate.get('logo').value);

      for ( var key in value ) {
          formData.append(key, value[key]);
        }

      value.filetoUpload = this.fileupload;
      // console.log(value);
     this.productservice.updateproduct(formData).subscribe((data:any)=>{
         this.loader = false;
      // this.spinnerService.hide();
      // console.log(data);
      if(data.status == 'true'){
        this.submitted = false;
        this.successMessage=true;
        // console.log(this.successMessage);
        this.errorMessage=false;
        this.docErrormessage = false;
   //     this.toastrMessage.showSuccess('Class activity update successfully!');
        // this.reset();
        this.router.navigate(['../../admin/products']);
       
      }else if(data.status == 'false'){
        console.log(data.message.filetoUpload != undefined);

        if(data.message.filetoUpload != undefined){
          this.nameError = data.message.filetoUpload;
          this.errorMessage=true;
          this.docErrormessage=false;
        }
        if(data.message.docupload != undefined){
          this.docError = data.message.docupload;
          this.docErrormessage=true;
          this.errorMessage=false;
        }
      
       this.successMessage=false;
      
        // this.toastrMessage.showError('Validation failed!');
        // console.log(this.errorMessage);

      }
    }, error => {
      console.log('ERROR '+error.message);
  });
}


onFileChange(file : FileList) {
 
  this.fileupload = file.item(0);
  this.filetoUpload = file.item(0);
  // console.log(this.fileupload);

  //show image preview
  let reader = new FileReader();
  reader.onload = (event:any)=>{
  this.imageUrl = event.target.result;
  this.isValid = true;
 }

 reader.readAsDataURL(this.fileupload);
}

}
