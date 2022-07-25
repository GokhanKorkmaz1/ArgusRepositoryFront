import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService, DatePipe]
})
export class UserListComponent implements OnInit {

  constructor(private userService:UserService, public datePipe:DatePipe) { }
  users:User[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    });
  }

}
