import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule } from '@shared/components/accordion/accordion.module';
import { PageOneComponent } from './page-one.component';

export const ROUTES: Routes = [{ path: '', component: PageOneComponent }];

@NgModule({
  declarations: [PageOneComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), AccordionModule],
  exports: [PageOneComponent]
})
export class PageOneModule {}
