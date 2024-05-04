import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  private loginLayout = new BehaviorSubject<any>(null);
  layout$ = this.loginLayout.asObservable();

  constructor() { }

  setData(data: any) {
    this.dataSubject.next(data);
  }

}
