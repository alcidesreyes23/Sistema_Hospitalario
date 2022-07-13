import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit, OnDestroy {

  private unsuscribe!:Subject<boolean>;

  constructor() {
    this.unsuscribe = new Subject();

    this.retornaIntervalo().pipe(
      takeUntil(this.unsuscribe)
    ).subscribe(console.log)
   }
  
  ngOnInit(): void {
  }

  retornaIntervalo() {
    return interval(250).pipe(
        take(10),
        map((valor)=>{
          return valor + 1;
        }),
        filter((res)=>(res % 2 === 0) ? true : false)
    );
  }

  ngOnDestroy(): void {
    this.unsuscribe.complete();
    this.unsuscribe.unsubscribe();
  }

}
