import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribingFromObservablesAsyncPipeComponent } from './unsubscribing-from-observables-async-pipe.component';

describe('UnsubscribingFromObservablesAsyncPipeComponent', () => {
  let component: UnsubscribingFromObservablesAsyncPipeComponent;
  let fixture: ComponentFixture<UnsubscribingFromObservablesAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribingFromObservablesAsyncPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribingFromObservablesAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
