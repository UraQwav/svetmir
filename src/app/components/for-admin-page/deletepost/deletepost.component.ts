import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post } from 'src/app/entity/Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-deletepost',
  templateUrl: './deletepost.component.html',
  styleUrls: ['./deletepost.component.css']
})
export class DeletepostComponent implements OnInit {

  post:Post[];
  URLde = "/post/delete";
  URLget = "/post/getAll";
  status = "";
  constructor(private router:Router, private http:HttpClient) {
    this.getPosts().subscribe((resp:Response)=>{
      this.post = JSON.parse(JSON.stringify(resp));
    })
   }

  ngOnInit(): void {
    if(localStorage.getItem('admin')==null){
      this.router.navigate(['/admin/']);
    }
  }

  LogOut(): void {
    localStorage.removeItem("admin");
    this.router.navigate(['/admin/']);
  }

  adminhome(): void{
    this.router.navigate(['/admin/home/']);
  }

  clDelete(postPost:Post){
    this.delete(postPost).subscribe((resp:Response)=>{
        alert("Delete ok");
        this.router.navigate(['/admin/home/']);
    })
  }
  getPosts(): Observable<any>{
    return this.http.get(this.URLget);
  }
  delete(post:Post): Observable<any>{
      return this.http.post(this.URLde, post);
  }
}
