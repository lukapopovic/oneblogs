import { Component, OnInit } from '@angular/core';
import { BlogDataService } from '../blog-data.service';
import { IBlog } from '../../shared';

@Component({
  selector: 'one-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
  providers: [ BlogDataService ]
})
export class BlogListComponent implements OnInit {
  private blogs: IBlog[];
  private selectedBlog: IBlog;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.blogDataService.getBlogs().subscribe(
      blogs => this.blogs = blogs,
      error => console.error(error));
  }

  onBlogEntrySelected(blog: IBlog) {
    this.selectedBlog = blog;
  }
}
