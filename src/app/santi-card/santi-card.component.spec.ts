import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiCardComponent } from './santi-card.component';

describe('SantiCardComponent', () => {
  let component: SantiCardComponent;
  let fixture: ComponentFixture<SantiCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantiCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
