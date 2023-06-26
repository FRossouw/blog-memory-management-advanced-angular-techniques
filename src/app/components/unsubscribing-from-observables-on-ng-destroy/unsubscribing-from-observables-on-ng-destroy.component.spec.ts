import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribingFromObservablesOnNgDestroyComponent } from './unsubscribing-from-observables-on-ng-destroy.component';

describe('UnsubscribingFromObservablesOnNgDestroyComponent', () => {
  let component: UnsubscribingFromObservablesOnNgDestroyComponent;
  let fixture: ComponentFixture<UnsubscribingFromObservablesOnNgDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribingFromObservablesOnNgDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribingFromObservablesOnNgDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
