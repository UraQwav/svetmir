import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentPath: string;
  logOutCheck: Boolean=true;
  constructor(private location: Location, private router: Router) { 
    this.router.events.subscribe(() => this.changeLocation());
  }

  ngOnInit(): void {
  }

  changeLocation() {
    this.currentPath = this.location.path();
    this.logOutCheck=this.currentPath.includes('admin')?false:true;
  }
}
