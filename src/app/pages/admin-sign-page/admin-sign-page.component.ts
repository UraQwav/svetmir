import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Admin } from '../../entity/Admin';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-sign-page',
  templateUrl: './admin-sign-page.component.html',
  styleUrls: ['./admin-sign-page.component.css']
})
export class AdminSignPageComponent implements OnInit {
  valueLogin = 'Login';
  valuePassword = 'Password';
  value = 'Clear me';
  URL = "/admins/sign-in";
  signInForm : FormGroup;
  admin: Admin;

  constructor( private router:Router, private http:HttpClient) { 
    this.signInForm = new FormGroup({
      "login": new FormControl("", Validators.required),
      "password": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
    if(localStorage.getItem('admin')!=null){
      this.router.navigate(['/admin/home/']);
    }
  }

  signInUser(body: FormGroup): Observable<any>{
    return this.http.post(this.URL, body.value);
  }

  signIn(){
    this.signInUser(this.signInForm).subscribe((resp:Response) =>{
      localStorage.setItem('admin', JSON.stringify(resp));
      this.admin = JSON.parse(localStorage.getItem('admin'));
      try{
      if(localStorage.getItem('admin') == null){
        alert("User deleted! or not created!");
      }
      else{
        if(this.admin.login == this.signInForm.get("login").value){
          this.router.navigate(['/admin/home/']);
        }
        else{
          alert("User deleted! or not created!");
        }
      }}
      catch{
        alert("User deleted! or not created!");
      }
    })
  }

}
