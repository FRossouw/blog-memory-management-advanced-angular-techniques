import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { iData } from 'src/app/models/data';

@Component({
  selector: 'app-unsubscribing-from-observables-async-pipe',
  // templateUrl: './unsubscribing-from-observables-async-pipe.component.html',
  styleUrls: ['./unsubscribing-from-observables-async-pipe.component.scss'],
  template: `
    <h2>Unsubscribing from Observables using the Push Pipe</h2>
    <div *ngIf="data$ | async as data">
      <div *ngFor="let item of data">{{item.name}}</div>
    </div>
  `
})
export class UnsubscribingFromObservablesAsyncPipeComponent {
  
  data$: Observable<iData[]>;

  constructor(private dataService: DataService) {
    this.data$ = this.dataService.getData();
  }

}
