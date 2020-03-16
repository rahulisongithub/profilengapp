import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from './../shared/convert-to-spaces.pipes';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductNewComponent } from './product-new.component';
import { ProductUpdateComponent } from './product-update.component';
//import { ProductDeleteComponent } from './product-delete.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
            RouterModule.forChild([
              { path : 'products', component: ProductListComponent },
              { path : 'products/:id',
                  canActivate:[ProductDetailGuard],
                  component:ProductDetailComponent},
               { path : 'new', component: ProductNewComponent },
               { path : 'update/:id', component: ProductUpdateComponent }
               //{ path : 'delete/:id', component: ProductDeleteComponent }
            ]),
            SharedModule
           ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductNewComponent,
    ProductUpdateComponent
    //ProductDeleteComponent
  ]
})
export class ProductModule { }
