import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
  providers: [ProductService]
})
export class ProductUpdateComponent implements OnInit {
  product: IProduct;
  errorMessage = '';

  constructor(private route:ActivatedRoute,private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  update(form)  {
   
   this.productService.updateProduct(this.product).subscribe(
     product => this.product=product,
     error => this.errorMessage = <any>error);
     this.router.navigate(['/products'])
} 
onBack() {
    this.router.navigate(['/welcome']);
  }
}
