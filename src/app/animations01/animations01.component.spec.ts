import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations01Component } from './animations01.component';

describe('Animations01Component', () => {
  let component: Animations01Component;
  let fixture: ComponentFixture<Animations01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Animations01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Animations01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
