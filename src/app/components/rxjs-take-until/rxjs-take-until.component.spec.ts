import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTakeUntilComponent } from './rxjs-take-until.component';

describe('RxjsTakeUntilComponent', () => {
  let component: RxjsTakeUntilComponent;
  let fixture: ComponentFixture<RxjsTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTakeUntilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
