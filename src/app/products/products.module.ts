import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        ProductsRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [ProductsComponent],
    providers: [],
})
export class ProductsModule { }
