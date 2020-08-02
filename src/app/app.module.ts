import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/for-home-page/header/header.component';
import { FooterComponent } from './components/for-home-page/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { PriceListsComponent } from './pages/price-lists/price-lists.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { AdminSignPageComponent } from './pages/admin-sign-page/admin-sign-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AboutInfoComponent } from './components/for-about-page/about-info/about-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { DeletepostComponent } from './components/for-admin-page/deletepost/deletepost.component';
import { AddpostComponent } from './components/for-admin-page/addpost/addpost.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FuulPostComponent } from './components/for-blog-page/fuul-post/fuul-post.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactsPageComponent,
    PriceListsComponent,
    BlogPageComponent,
    AdminSignPageComponent,
    AdminPageComponent,
    AboutInfoComponent,
    ErrorPageComponent,
    DeletepostComponent,
    AddpostComponent,
    FuulPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
