import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicesDetailComponent } from './all-services-detail.component';

describe('AllServicesDetailComponent', () => {
  let component: AllServicesDetailComponent;
  let fixture: ComponentFixture<AllServicesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllServicesDetailComponent]
    });
    fixture = TestBed.createComponent(AllServicesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
