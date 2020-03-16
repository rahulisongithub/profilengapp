import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  providers: [ProductService]
})
export class ProductNewComponent implements OnInit {

  constructor(private productService:ProductService,private router: Router) { }

  ngOnInit() {
  }
  saveProduct(formValues) {

     this.productService.saveProduct(formValues).subscribe(() => {
     
     this.router.navigate(['/products'])
   });
  }

  onBack() {
    this.router.navigate(['/welcome'])
  }
}
