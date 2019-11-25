import { EventEmitter, InjectionToken } from '@angular/core';

// context
export interface AccordionWrapper {
  items: AccordionItem[];
}

// strategy
export interface AccordionItem {
  itemToggled: EventEmitter<number>;
  isOpen: boolean;
}

export const ACCORDION_ITEM = new InjectionToken<AccordionItem>('AccordionItem');
