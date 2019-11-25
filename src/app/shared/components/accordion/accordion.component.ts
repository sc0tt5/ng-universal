import { AfterContentInit, Component, ContentChildren } from '@angular/core';
import { AccordionItem, AccordionWrapper, ACCORDION_ITEM } from './accordion.model';

// injection token
// export const ACCORDION_ITEM = new InjectionToken<AccordionItem>('AccordionItem');

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterContentInit, AccordionWrapper {
  private activeIndex: number;
  @ContentChildren(ACCORDION_ITEM as any) items: AccordionItem[];

  public ngAfterContentInit(): void {
    this.items.forEach((item: AccordionItem, index) => {
      item.itemToggled.subscribe(() => this.itemToggledHandler(index));
    });
  }

  public itemToggledHandler(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
    this.items.forEach((item: AccordionItem, index) => {
      item.isOpen = index === this.activeIndex;
    });
  }
}
