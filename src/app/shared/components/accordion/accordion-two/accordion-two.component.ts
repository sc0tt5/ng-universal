import { Component, EventEmitter, forwardRef } from '@angular/core';
import { AccordionItem, ACCORDION_ITEM } from '../accordion.model';

@Component({
  selector: 'app-accordion-two',
  templateUrl: './accordion-two.component.html',
  styleUrls: ['./accordion-two.component.scss'],
  providers: [{ provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionTwoComponent) }]
})
export class AccordionTwoComponent implements AccordionItem {
  public isOpen: boolean;
  public itemToggled = new EventEmitter<number>();
}
