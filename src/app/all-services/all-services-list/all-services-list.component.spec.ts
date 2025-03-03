import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllServicesListComponent } from './all-services-list.component';

describe('AllServicesListComponent', () => {
  let component: AllServicesListComponent;
  let fixture: ComponentFixture<AllServicesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllServicesListComponent]
    });
    fixture = TestBed.createComponent(AllServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
