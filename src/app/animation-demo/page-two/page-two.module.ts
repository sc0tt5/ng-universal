import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PageTwoComponent } from './page-two.component';

export const ROUTES: Routes = [{ path: '', component: PageTwoComponent }];

@NgModule({
  declarations: [PageTwoComponent],
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  exports: [PageTwoComponent]
})
export class PageTwoModule {}
