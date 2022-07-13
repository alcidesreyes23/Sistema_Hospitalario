import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ItemsDashboardService } from './services/items-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  menu!:any;

  private unsubscribe!: Subject<any>;
  constructor(
    private _menuService: ItemsDashboardService
  ) {
    this.unsubscribe = new Subject();
  }
  
  ngOnInit(): void {
    this.initialMenu();
  }

  initialMenu(): void{
    this._menuService.getMenu().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((response) => {
      this.menu = response;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.complete();
    this.unsubscribe.unsubscribe();
  }

}
