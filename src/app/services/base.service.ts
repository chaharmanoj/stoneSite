import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  appName:String = 'Stone Web App'

  constructor() { }

  getAppName(){
    return this.appName;
  }
}
