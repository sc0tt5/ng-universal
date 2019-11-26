import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PageOneComponent } from './page-one.component';

export const ROUTES: Routes = [{ path: '', component: PageOneComponent }];

@NgModule({
  declarations: [PageOneComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  exports: [PageOneComponent]
})
export class PageOneModule {}
