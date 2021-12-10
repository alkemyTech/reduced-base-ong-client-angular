import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _displaySpinner$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toogleDisplay(){
    this._displaySpinner$.next(!this._displaySpinner$.value);
  }

  get status(){
    return this._displaySpinner$;
  }
}
