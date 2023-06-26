import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribingFromObservablesPushPipeComponent } from './unsubscribing-from-observables-push-pipe.component';

describe('UnsubscribingFromObservablesPushPipeComponent', () => {
  let component: UnsubscribingFromObservablesPushPipeComponent;
  let fixture: ComponentFixture<UnsubscribingFromObservablesPushPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribingFromObservablesPushPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribingFromObservablesPushPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
