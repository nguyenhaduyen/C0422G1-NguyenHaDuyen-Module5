import { Component, OnInit } from '@angular/core';
import {Customer} from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customer: Customer[] = [{customerCode: 1, customerName: "Hà Duyên",dateOfBirth: "23/01/2000",
gender: "Nữ", identify: "201772407",phoneNumber: "0915164418",email: "haduyen23@gmail.com",
customerType: "diamond", address: "ĐN"},{customerCode: 2, customerName: "Thảo Lê",dateOfBirth: "23/07/2000",
  gender: "Nữ", identify: "201772807",phoneNumber: "0915131417",email: "thaole07@gmail.com",
  customerType: "member", address: "ĐN"}]
  constructor() { }

  ngOnInit(): void {
  }

}
