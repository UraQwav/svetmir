import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from 'src/app/entity/Post';
import { Admin } from 'src/app/entity/Admin';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  URL = '/post/Add';
  post: Post;
  admin: Admin;
  addForm : FormGroup;
  
  constructor( private router:Router, private http:HttpClient) { 
    this.admin = JSON.parse(localStorage.getItem('admin'));
    try{
    this.addForm = new FormGroup({
      "title": new FormControl("", Validators.required),
      "text": new FormControl("", Validators.required),
      "image": new FormControl("", Validators.required),
      "info": new FormControl(this.admin.login, Validators.required),
      "date": new FormControl((new Date()).getFullYear().toString()+"-"+(new Date()).getMonth().toString()+"-"+(new Date()).getDay().toString(),Validators.required)
    });}
    catch{
      if(localStorage.getItem('admin')==null){
        this.router.navigate(['/admin/']);
      }
    }
  }

  ngOnInit(): void {
  }

  LogOut(): void {
    localStorage.removeItem("admin");
    this.router.navigate(['/admin/']);
  }
  adminhome(): void{
    this.router.navigate(['/admin/home/']);
  }
  addPostf(body: FormGroup): Observable<any>{
    return this.http.post(this.URL, body.value);
  }
  addPost(){
    this.addForm.addControl("shorting", new FormControl(this.addForm.get("text").value.substr(0,200),Validators.required));
    this.addPostf(this.addForm).subscribe((resp:Response) =>{
      localStorage.setItem('addedPost', JSON.stringify(resp));
      this.post = JSON.parse(localStorage.getItem('addedPost'));
      try{
        if(localStorage.getItem('addedPost')!=null){
          alert("Статья добавлена успешно!");
          this.router.navigate(['/admin/home/']);
        }
        else{
          alert("Статья не добавленна, проверьте данные!");
        }
      }
      catch{
        alert("Статья не добавленна, проверьте данные!");
      }
      localStorage.removeItem('addedPost');
    })
  }
}
