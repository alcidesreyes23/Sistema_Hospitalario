import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   this.getUsers().then((res) => {
    console.log('HEY AQUI ESTAN LOS DATOS: ',res);
   });
  }

  getUsers(): Promise<any> {
    return new Promise((resolve,reject)=>{
      fetch('https://reqres.in/api/users')
      .then(res => {
         res.json().then(body => resolve(body.data))
      })
    })
  }
 


}
