/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BlogDetailComponent } from './blog-detail.component';

describe('Component: BlogDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogDetailComponent
      ],
      providers: []
    });
  });
  it('should create an instance', () => {
    let component = new BlogDetailComponent();
    expect(component).toBeTruthy();
  });

  it('should have the welcome message displayed', () => {
    let fixture = TestBed.createComponent(BlogDetailComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.welcome-message').textContent).toContain('Please select one of the blog entries.');
  });
});
