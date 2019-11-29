import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionTwoComponent } from './accordion-two.component';

describe('AccordionTwoComponent', () => {
  let component: AccordionTwoComponent;
  let fixture: ComponentFixture<AccordionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionTwoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
