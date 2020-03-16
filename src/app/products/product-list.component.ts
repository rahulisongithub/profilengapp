import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({

   templateUrl: './product-list.component.html' ,
   styleUrls: ['./product-list.component.css'],
   providers: [ProductService]
})
export class ProductListComponent implements OnInit {
pageTitle: string='RSA Store';
imageWidth: number = 50;
imageMargin:number = 2;
showImage : boolean = false;
errorMessage: string;
_listFilter: string;
filteredProducts: IProduct[];


get listFilter():string{
  return this._listFilter;
}
set listFilter(value:string){
  this._listFilter = value;
  this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter):this.products;
}

products: IProduct[];

constructor(private productService:ProductService){
}

onRatingClicked(message:string):void{
  this.pageTitle = 'Product List: ' + message;
}

performFilter(filterBy: string):IProduct[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product:IProduct)=>
  product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage(): void {
     this.showImage = !this.showImage;
}
ngOnInit():void {
 this.productService.getProducts()
    .subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
}
}
