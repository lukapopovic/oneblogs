import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    BlogListComponent,
    BlogDetailComponent
  ],
  providers: [],
})
export class BlogModule { }