import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations02Component } from './animations02.component';

describe('Animations02Component', () => {
  let component: Animations02Component;
  let fixture: ComponentFixture<Animations02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animations02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
