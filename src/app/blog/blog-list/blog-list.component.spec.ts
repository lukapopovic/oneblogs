/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BlogListComponent } from './blog-list.component';
import { IBlog } from '../../shared';

describe('Component: BlogList', () => {
  it('should create an instance', () => {
    let component = new BlogListComponent();
    expect(component).toBeTruthy();
  });

  it('should select one of blog entries', () => {
    let testBlog: IBlog = {
      userId: 1,
      id: 1,
      title: 'Test title',
      body: 'Test Body' 
    }
    let component = new BlogListComponent();
    component.onBlogEntrySelected(testBlog);
    expect(component.selectedBlog).toEqual(testBlog);
  });
});
