/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlogListComponent, BlogDetailComponent, BlogModule } from './blog';

describe('App: Oneblogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:      [ BlogModule ],
      declarations: [
        AppComponent
      ],
      providers: []
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Blog Post Reader'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Blog Post Reader');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Blog Post Reader');
  }));
});
