import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AllProductData} from '../shared/to/all-product-data';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadAllTransactions(): Observable<AllProductData> {
    return this.http.get<AllProductData>('/api/products');
  }
}
