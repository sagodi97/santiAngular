import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantiaListingComponent } from './santia-listing.component';

describe('SantiaListingComponent', () => {
  let component: SantiaListingComponent;
  let fixture: ComponentFixture<SantiaListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantiaListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantiaListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
