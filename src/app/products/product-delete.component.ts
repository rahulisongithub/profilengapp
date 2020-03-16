import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css'],
  providers: [ProductService]
})
export class ProductDeleteComponent implements OnInit {
  product: IProduct;
  errorMessage = '';

  constructor(private route:ActivatedRoute,private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.delete(id);
    }
  }

  delete(id:number)  {
    //console.log("Product to be deleted is + ", id);
     this.productService.deleteProduct(id).subscribe(
      product => this.product=product,
      error => this.errorMessage = <any>error);
      this.router.navigate(['/welcome'])
 }

  onBack() {
    this.router.navigate(['/products']);
  }

}
