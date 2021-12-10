import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _displaySidebar$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  toogleDisplay(){
    this._displaySidebar$.next(!this._displaySidebar$.value);
  }

  get status(){
    return this._displaySidebar$;
  }
}
