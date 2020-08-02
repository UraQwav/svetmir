import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuulPostComponent } from './fuul-post.component';

describe('FuulPostComponent', () => {
  let component: FuulPostComponent;
  let fixture: ComponentFixture<FuulPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuulPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuulPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
