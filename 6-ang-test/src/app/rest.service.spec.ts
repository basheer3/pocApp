import { async, inject, TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('RestService', () => {
  let service: RestService;
  let httpSpy: Spy<HttpClient>;
  let users=['202103','202108'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        RestService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
      ],
    });
    service = TestBed.inject(RestService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should return an expected list of users and its length', (done: DoneFn) => {
    httpSpy.get.and.nextWith(users);
    service.getUser().subscribe(
      user => {
        expect(user).toHaveSize(users.length);
        expect(user).toEqual(users)
        done();
      },
      done.fail
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should return a 404', (done: DoneFn) => {
    httpSpy.get.and.throwWith(new HttpErrorResponse({
          error: "404 - Not Found",
          status: 404
    }));
    service.getUser().subscribe(
      user => {
        done.fail("Expected a 404");
      },
      error => {
        expect(error.status).toEqual(404);
        done();
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

  it('should return a 500', (done: DoneFn) => {
    httpSpy.get.and.throwWith(new HttpErrorResponse({
          error: "500 - Internal server error",
          status: 500
    }));
    service.getUser().subscribe(
      user => {
        done.fail("Expected a 500");
      },
      error => {
        expect(error.status).toEqual(500);
        done();
      }
    );
    expect(httpSpy.get.calls.count()).toBe(1);
  });

});
