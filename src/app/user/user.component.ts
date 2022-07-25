import { Component, OnInit } from '@angular/core';
import { User } from "../models/user";
import { UserService } from '../services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder:FormBuilder) { }
  user:User;
  userAddForm:FormGroup;

  createUserForm(){
    this.userAddForm = this.formBuilder.group(
      {name:["",Validators.required],
      surname:["",Validators.required],
      birthdate:["",Validators.required],
      gender:[null,Validators.required],
      email:["",Validators.required],
      phoneNumber:["",Validators.required]
    })
    
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  add(){
    if(this.userAddForm.valid){
      this.user = Object.assign({},this.userAddForm.value)
      this.userService.add(this.user)
      console.log(this.user)
    }
  }
}
