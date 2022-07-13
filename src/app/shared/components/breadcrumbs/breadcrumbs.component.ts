import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  title!:string;
  suscription!:Subscription;


  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute
  ) {

   this.suscription = this.getTitle().subscribe(({title})=>{
      this.title = title;
      document.title = `Hospital - ${title}`;
    });
   } 

  ngOnInit(): void {
  }

  getTitle(): Observable<any>{
    return  this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter ((event:any) => event.snapshot.firstChild === null),
      map((event:ActivationEnd) => event.snapshot.data)
    )
  }

  ngOnDestroy(): void {
   this.suscription.unsubscribe();
  }
}
