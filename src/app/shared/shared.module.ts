import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionOneComponent } from './components/accordion/accordion-one/accordion-one.component';
import { AccordionTwoComponent } from './components/accordion/accordion-two/accordion-two.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionOneComponent, AccordionTwoComponent],
  exports: [CommonModule, AccordionComponent, AccordionOneComponent, AccordionTwoComponent]
})
export class SharedModule {}
