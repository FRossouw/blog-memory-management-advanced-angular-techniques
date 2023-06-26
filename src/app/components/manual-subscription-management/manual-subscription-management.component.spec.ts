import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSubscriptionManagementComponent } from './manual-subscription-management.component';

describe('ManualSubscriptionManagementComponent', () => {
  let component: ManualSubscriptionManagementComponent;
  let fixture: ComponentFixture<ManualSubscriptionManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualSubscriptionManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSubscriptionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
