import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('admin')==null){
      this.router.navigate(['/admin/']);
    }
  }

  LogOut(): void {
    localStorage.removeItem("admin");
    this.router.navigate(['/admin/']);
  }
  deletePost(): void {
    this.router.navigate(['/admin/home/deletepost']);
  }
  addPost(): void {
    this.router.navigate(['/admin/home/addpost']);
  }
  adminhome(): void{
    this.router.navigate(['/admin/home/']);
  }
}
