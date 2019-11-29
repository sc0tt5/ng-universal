import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Page } from '@core/models/page';
import { PageService } from '@core/services/page.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageResolver implements Resolve<any> {
  constructor(private pageService: PageService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Page> {
    const param = route.data.state;

    return this.pageService.getPage(param).pipe(
      map(page => {
        if (page) {
          return page;
        }
        // else
        this.router.navigate(param);
        return null;
      })
    );
  }
}
