import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignPageComponent } from './admin-sign-page.component';

describe('AdminSignPageComponent', () => {
  let component: AdminSignPageComponent;
  let fixture: ComponentFixture<AdminSignPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
