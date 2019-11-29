import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOneComponent } from './accordion-one.component';

describe('AccordionOneComponent', () => {
  let component: AccordionOneComponent;
  let fixture: ComponentFixture<AccordionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionOneComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
