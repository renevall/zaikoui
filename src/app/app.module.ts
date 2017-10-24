import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TransactionsComponent } from './transactions/transactions.component';
import { ProductsService } from './services/products.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ProductsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
