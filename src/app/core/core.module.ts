import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LoaderInterceptor } from './services/loader.interceptor';

@NgModule({
  imports: [
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [],
  providers: [
    InMemoryDataService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true } // interceptor for loading indicator
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // prevent the module from being imported twice
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. You should only import Core modules in the AppModule only.'
      );
    }
  }
}
