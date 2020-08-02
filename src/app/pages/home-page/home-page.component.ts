import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnChanges{

  imgArr = ['assets/images/home-3.jpg',
            'assets/images/home-4.jpeg',
            'assets/images/home-5.jpg']
  imgSrc = 'assets/images/home-5.jpg';
  constructor(private router:Router,private http:HttpClient) {
  }
  ngOnInit(): void {
    setInterval(()=>{this.change();},5000);
  }
  ngOnChanges(): void{
  }
  change(): any{
    this.imgSrc = this.imgArr[Math.floor(Math.random() * Math.floor(3))];
  }
  contacts(){
    this.router.navigate(['/contacts/']);
  }
}
