import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "./country";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  country: Country [] = [{id: 1, name: "USA"},{id: 2, name: "VN"},{id: 3, name: "Korea"}];
  form : FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl("",[Validators.email,Validators.required]),
      pass: new FormGroup({
        password: new FormControl("",[Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl("",[Validators.required])
      },[this.validateCustomerPass]),
      country: new FormControl(),
      age: new FormControl("",[Validators.min(18),Validators.required]),
      gender: new FormControl(),
      phone: new FormControl("",[Validators.pattern("^\\+84\\d{9,10}$"),Validators.required])
    });
  }
  validateCustomerPass (pass : AbstractControl) {
    let temp1 = pass.value.password;
    let temp2 = pass.value.confirmPassword
    if (temp1 === temp2) {
      return null;
    }
    return { "invalidPass" : true}
  }

  ngOnInit() {
  }

  getForm() {
    console.log(this.form);
  }

}
