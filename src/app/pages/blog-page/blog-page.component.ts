import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entity/Post';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  post:Post[];
  URLget = "/post/getAll";

  constructor(private router:Router, private http:HttpClient) {
    this.getPosts().subscribe((resp:Response)=>{
      this.post = JSON.parse(JSON.stringify(resp));
    })
  }
  ngOnInit(): void {
  }

  getPosts(): Observable<any>{
    return this.http.get(this.URLget);
  }
  
  openPostById(post:any){
    this.router.navigate(['blog/article', post]);
  }
}
