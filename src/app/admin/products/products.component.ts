import { Component, OnInit,VERSION } from '@angular/core';
import { Router } from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dtOptions;
  products =[];
  constructor(public productservice : ProductsService,public router: Router) { }

  ngOnInit() {

    this.productservice.productlist().subscribe((data: any) => {
      // this.loader = false;
     //  console.log(data.status == "true");
     console.log(data);
      this.products = data.data;

      
     });
 

    // this.products = [
    //   {
    //     id: 1,
    //     name: 'United Color beniton',
    //     price: 499.99,
    //     currency: 'EUR',
    //     image: 'images/01.jpg',
    //     url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg'
    //   },
    //   {
    //     id: 2,
    //     name: 'Adidas sports shoes',
    //     price: 249.99,
    //     currency: 'EUR',
    //     image: 'images/02.jpg',
    //     url: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Flashback-White-%26-Black-Shoes-_272010-front-US.jpg'
    //   },
    //   {
    //     id: 4,
    //     name: 'Adidas',
    //     price: 239.99,
    //     currency: 'EUR',
    //     image: 'images/04.jpg',
    //     url: 'https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg'
    //   },
    //   {
    //     id: 6,
    //     name: 'PUMA sports ',
    //     price: 119.99,
    //     currency: 'EUR',
    //     image: 'images/06.jpg',
    //     url: 'http://assets.myntassets.com/assets/images/1920391/2017/6/8/11496905404701-Adidas-Men-Sports-Shoes-3121496905404588-5.jpg'
    //   },
    //   {
    //     id: 5,
    //     name: 'puma track',
    //     price: 599.99,
    //     currency: 'EUR',
    //     image: 'images/05.jpg',
    //     url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg'
    //   },

    //   {
    //     id: 1,
    //     name: 'United Color beniton',
    //     price: 499.99,
    //     currency: 'EUR',
    //     image: 'images/01.jpg',
    //     url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg'
    //   },
    //   {
    //     id: 2,
    //     name: 'Adidas sports shoes',
    //     price: 249.99,
    //     currency: 'EUR',
    //     image: 'images/02.jpg',
    //     url: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Flashback-White-%26-Black-Shoes-_272010-front-US.jpg'
    //   },
    //   {
    //     id: 4,
    //     name: 'Anjali4',
    //     price: 239.99,
    //     currency: 'EUR',
    //     image: 'images/04.jpg',
    //     url: 'https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg'
    //   },
    //   {
    //     id: 6,
    //     name: 'Anjali3 ',
    //     price: 119.99,
    //     currency: 'EUR',
    //     image: 'images/06.jpg',
    //     url: 'http://assets.myntassets.com/assets/images/1920391/2017/6/8/11496905404701-Adidas-Men-Sports-Shoes-3121496905404588-5.jpg'
    //   },
    //   {
    //     id: 5,
    //     name: 'Anjali2',
    //     price: 599.99,
    //     currency: 'EUR',
    //     image: 'images/05.jpg',
    //     url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg'
    //   },
    //   {
    //     id: 1,
    //     name: 'Anjali',
    //     price: 499.99,
    //     currency: 'EUR',
    //     image: 'images/01.jpg',
    //     url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg'
    //   },
     
    // ];



  }

  getConfirmation(value){
  console.log(value);

  var result = confirm("Want to delete?");
    if(result){
      console.log(result);
      this.productservice.deleteproduct(value).subscribe((data1: any) => {
        // this.loader = false;
       //  console.log(data.status == "true");
       console.log(data1);
        // this.products = data.data;

        this.productservice.productlist().subscribe((data: any) => {
          // this.loader = false;
         //  console.log(data.status == "true");
         console.log(data);
          this.products = data.data;
    
          
         });
     
  
        
       });
   

    }

  }

  getDisable(id,status){
    console.log(status);
    if(status == 0){
      status = 1;
    }else{
      status = 0;
    }
    this.productservice.disableproduct(id,status).subscribe((data1: any) => {
      // this.loader = false;
     //  console.log(data.status == "true");
     console.log(data1);
      // this.products = data.data;

      this.productservice.productlist().subscribe((data: any) => {
        // this.loader = false;
       //  console.log(data.status == "true");
       console.log(data);
        this.products = data.data;
  
        
       });
   

      
     });
 

  }

  logout(){
    localStorage.clear();
    this.router.navigate(['../../login']);

  }
  }

