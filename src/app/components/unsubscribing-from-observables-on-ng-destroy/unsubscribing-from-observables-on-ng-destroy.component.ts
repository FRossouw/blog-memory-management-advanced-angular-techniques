import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { iData } from 'src/app/models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-unsubscribing-from-observables-on-ng-destroy',
  // templateUrl: './unsubscribing-from-observables-on-ng-destroy.component.html',
  styleUrls: ['./unsubscribing-from-observables-on-ng-destroy.component.scss'],
  template: `
    <h2>Unsubscribing from Observables using OnNgDestroy</h2>
    <div *ngIf="data">
      <div *ngFor="let item of data">{{item.name}}</div>
    </div>
  `
})
export class UnsubscribingFromObservablesOnNgDestroyComponent implements OnDestroy {

  private subscription$: Subscription;
  data: iData[];

  constructor(private dataService: DataService) {
    this.subscription$ = this.dataService.getData()
      .subscribe((data: iData[]) => {
        this.data = data;
      });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
