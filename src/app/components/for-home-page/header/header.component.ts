import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentPath: string;
  logOutCheck: Boolean=true;
  visiable: Boolean=false;
  imgsrc="assets/images/icons8-menu-26.png";
  constructor(private location: Location, private router: Router) { 
    this.router.events.subscribe(() => this.changeLocation());
  }

  ngOnInit(): void {
  }

  changeLocation() {
    this.currentPath = this.location.path();
    this.logOutCheck=this.currentPath.includes('admin')?false:true;
  }
  openMenu(){
    if (this.visiable==false){
      this.visiable=true;
      this.imgsrc="assets/images/icons8-multiply-24.png";
    }
    else{
      this.visiable=false;
      this.imgsrc="assets/images/icons8-menu-26.png";
    }
  }

}
