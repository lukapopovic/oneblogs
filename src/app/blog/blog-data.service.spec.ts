/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BlogDataService } from './blog-data.service';
import { IBlog } from '../shared';

describe('Service: BlogData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [BlogDataService]
    });
  });

  it('should ...', inject([BlogDataService], (service: BlogDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the blog list', inject([BlogDataService], (service: BlogDataService) => {
    //In the real world scenario, the service should be mocked.
    service.getBlogs().subscribe(blogs => {
      expect(blogs).toBeDefined();
      done();
    });
  }));
});
