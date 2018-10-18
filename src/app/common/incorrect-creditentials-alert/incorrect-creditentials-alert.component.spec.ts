import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectCreditentialsAlertComponent } from './incorrect-creditentials-alert.component';

describe('IncorrectCreditentialsAlertComponent', () => {
  let component: IncorrectCreditentialsAlertComponent;
  let fixture: ComponentFixture<IncorrectCreditentialsAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncorrectCreditentialsAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectCreditentialsAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
