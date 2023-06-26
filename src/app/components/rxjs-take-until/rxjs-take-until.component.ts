import { Component, OnDestroy  } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { takeUntil } from 'rxjs/operators';
import { iData } from 'src/app/models/data';

@Component({
  selector: 'app-rxjs-take-until',
  // templateUrl: './rxjs-take-until.component.html',
  styleUrls: ['./rxjs-take-until.component.scss'],
  template: `
    <h2>Rxjs Take Until</h2>
    <div *ngIf="data">
      <div *ngFor="let item of data">{{item.name}}</div>
    </div>
  `
})
export class RxjsTakeUntilComponent implements OnDestroy   {
  private ngUnsubscribe$ = new Subject<void>();
  data: iData[];

  constructor(private dataService: DataService) {
    this.dataService.getData()
      .pipe(
        takeUntil(this.ngUnsubscribe$)
        )
      .subscribe((data: iData[]) => {
        this.data = data;
      })
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
