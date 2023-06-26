import { Injectable } from '@angular/core';
import { DATA, iData } from '../models/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  /**
   * This method is used to retrieve data from a data source
   * In this case we only return from a mock set of DATA
   * @returns It returns an array set of data items
   */
  getData(): Observable<iData[]> {
    return of(DATA);
  }

  
}
