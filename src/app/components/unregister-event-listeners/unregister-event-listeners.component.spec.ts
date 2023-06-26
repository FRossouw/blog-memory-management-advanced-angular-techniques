import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisterEventListernersComponent } from './unregister-event-listeners.component';

describe('UnregisterEventListernersComponent', () => {
  let component: UnregisterEventListernersComponent;
  let fixture: ComponentFixture<UnregisterEventListernersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnregisterEventListernersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisterEventListernersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
