import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscribable, Subscription, Observable } from 'rxjs';
import { Post } from 'src/app/entity/Post';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fuul-post',
  templateUrl: './fuul-post.component.html',
  styleUrls: ['./fuul-post.component.css']
})
export class FuulPostComponent implements OnInit {

  routeSub: Subscription;
  web;
  post:Post;
  URLGet = "/post/getById/"
  constructor(private router:Router, private route: ActivatedRoute, private http:HttpClient) { 
    this.routeSub = this.route.params.subscribe(params =>{
      this.web=params['id'];
    });
    this.GetPost(this.web).subscribe((resp:Response)=>{
      this.post= JSON.parse(JSON.stringify(resp));
    })
  }

  ngOnInit(): void {
  }

  GetPost(id:any): Observable<any>{
    return this.http.get(this.URLGet+id);
  }

}
