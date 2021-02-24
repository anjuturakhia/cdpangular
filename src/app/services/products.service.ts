import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://192.168.0.7/api/';
  imageUrl= 'http://192.168.0.7/';
  // token = localStorage.getItem('token');
  reqheadermain = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});


  constructor( public http: HttpClient,
    ) { }


  addproduct(value){
    return this.http.post(this.url+'addproduct',value,{headers:this.reqheadermain});
  }

  productlist(){
    return this.http.get(this.url+'productlist',{headers:this.reqheadermain});
  }


  editproduct(id){
   id= {id:id};
    return this.http.post(this.url+'editproduct',id,{headers:this.reqheadermain});
  }


  deleteproduct(id){

    id= {id:id};
    return this.http.post(this.url+'deleteproduct',id,{headers:this.reqheadermain});

  }

  updateproduct(value){

    return this.http.post(this.url+'updateproduct',value,{headers:this.reqheadermain});
  }


  disableproduct(id,status){
   let value = {id:id,status:status};
    return this.http.post(this.url+'disableproduct',value,{headers:this.reqheadermain});


  }
}
