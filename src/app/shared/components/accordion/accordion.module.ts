// ref: https://stackblitz.com/edit/github-madr3a?file=src%2Fapp%2Faccordion%2Faccordion-item2%2Faccordion-item2.component.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionOneComponent } from './accordion-one/accordion-one.component';
import { AccordionTwoComponent } from './accordion-two/accordion-two.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent, AccordionOneComponent, AccordionTwoComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionOneComponent, AccordionTwoComponent]
})
export class AccordionModule {}
