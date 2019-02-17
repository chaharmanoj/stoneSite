import { Component, OnInit } from '@angular/core';
import {BaseService} from '../../services/base.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appName:String;

  constructor(private baseService : BaseService) { }

  ngOnInit() {
    this.appName = this.baseService.getAppName();
  }

}
