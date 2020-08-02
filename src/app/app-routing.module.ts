import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from 'src/app/pages/about-page/about-page.component';
import { BlogPageComponent } from 'src/app/pages/blog-page/blog-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AdminSignPageComponent } from './pages/admin-sign-page/admin-sign-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { AddpostComponent } from './components/for-admin-page/addpost/addpost.component';
import { DeletepostComponent } from './components/for-admin-page/deletepost/deletepost.component';
import { FuulPostComponent } from './components/for-blog-page/fuul-post/fuul-post.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/article/:id', component: FuulPostComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'admin', component: AdminSignPageComponent },
  { path: 'admin/home', component: AdminPageComponent },
  { path: 'admin/home/addpost', component: AddpostComponent },
  { path: 'admin/home/deletepost', component: DeletepostComponent },
  { path: '**',  component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
