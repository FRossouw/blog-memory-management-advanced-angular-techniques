import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { iData } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-unsubscribing-from-observables-push-pipe',
  // templateUrl: './unsubscribing-from-observables-push-pipe.component.html',
  styleUrls: ['./unsubscribing-from-observables-push-pipe.component.scss'],
  template: `
    <h2>Unsubscribing from Observables using the Async Pipe</h2>
    <div *ngIf="data$ | ngrxPush as data">
      <div *ngFor="let item of data">{{item.name}}</div>
    </div>
  `
})
export class UnsubscribingFromObservablesPushPipeComponent {

  data$: Observable<iData[]>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }

}
