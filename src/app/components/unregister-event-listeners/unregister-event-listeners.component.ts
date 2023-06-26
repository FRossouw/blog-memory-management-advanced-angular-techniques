import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-unregister-event-listeners',
  // templateUrl: './unregister-event-listeners.component.html',
  styleUrls: ['./unregister-event-listeners.component.scss'],
  template: `
    <h2>Unregister Event Listeners</h2>
    <div>Events Triggered {{triggerCount}}</div>
    <button type="button" (myClick)="$event">Trigger Click Event</button>
  `
})
export class UnregisterEventListenersComponent {
  // We define a function to store our event listener
  private clickListener: () => void;
  triggerCount: number = 0;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit() {
    this.clickListener = this.renderer.listen(
      this.el.nativeElement,
      'click',
      () => {
        this.triggerCount++;
      }
    );
  }

  ngOnDestroy() {
    this.clickListener();
  }

}
