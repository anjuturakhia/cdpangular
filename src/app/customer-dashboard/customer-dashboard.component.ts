import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  products = [];
  products1=[];
  items = [];
  pageOfItems: Array<any>;
  @Input() pageSize = 5;
  @Input() maxPages = 5;
  imageurl='';


  constructor(public productservice: ProductsService,public router: Router) {
    this.imageurl = this.productservice.imageUrl;
   }

  ngOnInit() {

 this.productservice.productlist().subscribe((data: any) => {
        // this.loader = false;
       //  console.log(data.status == "true");
       console.log(data.data);
        
      this.products = data.data;
      

      
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

    console.log(this.products);

    this.items = Array(this.products.length).fill(0).map((x, i) => (
      { 
        id: (i + 1), 
        name: this.products[i].name,
        discount_percent: this.products[i].discount_percent,
        price: this.products[i].price,
        description: this.products[i].description,
        url : this.imageurl + 'products/'+this.products[i].image

      }
      ));

  
        
    //   for(let i = 0; i < this.products.length; i++){
    //     console.log(this.products[i].name);
    //     this.items.push(
    //       {
    //       id: (i+1),
    //       name: this.products[i].name,
    //       url : this.products[i].url,
    //       price : this.products[i].price,
    //       desc: 'anjali'}
    //       );
    //  }

     console.log(this.pageOfItems);
      
    

       });
   

      // an example array of 150 items to be paged
    

    //  this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));

  
  }


  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}


logout(){
  localStorage.clear();
  this.router.navigate(['login']);
}



}
