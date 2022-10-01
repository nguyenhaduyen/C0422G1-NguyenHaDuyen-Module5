import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product [] = [];
  constructor(private serviceProduct : ProductService, private router:Router) {
    this.serviceProduct.getAll().subscribe(product => {
      this.products = product;
    })

  }

  ngOnInit() {
  }

  delete(id: number) {
    this.serviceProduct.delete(id).subscribe(n=>{
      this.serviceProduct.getAll().subscribe(product => {
        this.products = product;
      })
    })
  }
}
