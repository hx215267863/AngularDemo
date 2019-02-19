import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations03Component } from './animations03.component';

describe('Animations03Component', () => {
  let component: Animations03Component;
  let fixture: ComponentFixture<Animations03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animations03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
