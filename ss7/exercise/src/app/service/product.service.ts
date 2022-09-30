import { Injectable } from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product : Product []= [{id:1,name:"mì gói",price:5000,description:"đỏ"},
  {id:2,name: "bút bi", price: 10000, description: "màu xanh"},
  {id:3, name: "bút chì", price:15000,description: "2B"},
  {id: 4, name: "bim bim", price: 6000,description: "cay"},
  {id: 5, name: "xúc xích", price: 25000, description: "bò"}]
  constructor() { }
  getAll() {
  return this.product;
  }
  findById (id: number) {
  return this.product.filter(item => item.id == id)[0];
  }
  update (products: Product) {
  for (let i=0;i < this.product.length; i++) {
    if (this.product[i].id === products.id) {
      this.product[i].name = products.name
      this.product[i].price = products.price
      this.product[i].description = products.description
    }
  }
  }
  delete (id:number) {
  for (let i =0; i<this.product.length; i++) {
    if (this.product[i].id === id) {
      this.product.splice(i,1)
    }
  }
  }
  create (product) {
  this.product.push(product);
  }

}
