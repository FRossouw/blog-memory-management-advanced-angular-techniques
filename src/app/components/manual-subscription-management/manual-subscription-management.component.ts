import { Component, OnDestroy } from '@angular/core';
import { iData } from 'src/app/models/data';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manual-subscription-management',
  // templateUrl: './manual-subscription-management.component.html',
  styleUrls: ['./manual-subscription-management.component.scss'],
  template: `
    <h2>Manual Subscription Management</h2>
    <div *ngIf="data">
      <div *ngFor="let item of data">{{item.name}}</div>
    </div>
  `
})
export class ManualSubscriptionManagementComponent implements OnDestroy   {
  private subscription: Subscription;
  data: iData[];

  constructor(private dataService: DataService) {
    this.subscription.add(
      this.dataService.getData()
        .subscribe((data: iData[]) => {
          this.data = data;
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
