import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Page } from '@core/models/page';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  private api = 'api/pages'; // URL to web api

  constructor(private http: HttpClient, @Optional() @Inject(APP_BASE_HREF) origin: string) {
    this.api = `${origin}${this.api}`;
  }

  getPage(param: string): Observable<Page> {
    return this.http.get<Page[]>(this.api).pipe(
      map(pages => pages.find(page => page.param === param)),
      catchError((error: any) => of(error))
    );
  }
}
