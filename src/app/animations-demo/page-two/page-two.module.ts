import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from '@shared/components/accordion/accordion.module';
import { PageTwoComponent } from './page-two.component';

export const ROUTES: Routes = [{ path: '', component: PageTwoComponent }];

@NgModule({
  declarations: [PageTwoComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), AccordionModule],
  exports: [PageTwoComponent]
})
export class PageTwoModule {}
