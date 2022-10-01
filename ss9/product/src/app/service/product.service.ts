import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/product');
  }

  create(product: Product) {
    return this.http.post('http://localhost:3000/product', product);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/product/' + id);
  }

  findById(id: number): Observable<Product> {
    return this.http.get('http://localhost:3000/product/' + id);
  }

  update(id:number, product: Product): Observable<any> {
    return this.http.put('http://localhost:3000/product/' + id, product);
  }
}
