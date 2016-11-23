import { Component, Input } from '@angular/core';
import { IBlog } from '../../shared';

@Component({
  selector: 'one-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {
  private welcomeMessage: string = 'Please select one of the blog entries.';
  @Input() blog: IBlog;

  constructor() { }

  onFavBlogEntry(blog: IBlog) {
    blog.favorite = !blog.favorite;
  }
}
