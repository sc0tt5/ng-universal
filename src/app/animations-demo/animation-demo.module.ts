import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResolver } from '@core/services/page-resolver.service';
import { AnimationDemoComponent } from './animation-demo.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/page-one'
  },
  {
    path: 'page-one',
    loadChildren: () => import('./page-one/page-one.module').then(m => m.PageOneModule),
    data: { state: 'page-one' },
    resolve: { page: PageResolver } // get data first
  },
  {
    path: 'page-two',
    loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule),
    data: { state: 'page-two' },
    resolve: { page: PageResolver } // get data first
  },
  { path: '**', pathMatch: 'full', redirectTo: '/page-one' }
];

@NgModule({
  declarations: [AnimationDemoComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [AnimationDemoComponent]
})
export class AnimationDemoModule {}
