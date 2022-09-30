import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
productNew : Product;
productNew1 : FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private serviceProduct: ProductService,private router:Router) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id')
      if (id!=null) {
        this.productNew = this.serviceProduct.findById(parseInt(id))
      }
    })
  }

  ngOnInit() {
    this.productNew1 = new FormGroup({
      id : new FormControl(this.productNew.id),
      name : new FormControl(this.productNew.name),
      price : new FormControl(this.productNew.price),
      description : new FormControl(this.productNew.description)
    })
  }


  update() {
    this.serviceProduct.update(this.productNew1.value)
    this.router.navigateByUrl("/product")
  }
}
