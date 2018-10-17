import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSignedInComponent } from './home-signed-in.component';

describe('HomeSignedInComponent', () => {
  let component: HomeSignedInComponent;
  let fixture: ComponentFixture<HomeSignedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSignedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSignedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
