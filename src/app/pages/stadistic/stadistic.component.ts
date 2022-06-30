import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-stadistic',
  templateUrl: './stadistic.component.html',
  styleUrls: ['./stadistic.component.scss']
})
export class StadisticComponent implements OnInit {

  title!:string;
  labels:any = [];
  data:any = {
    labels: this.labels,
    datasets: [
      { data: []}
    ]
  };
  constructor(
    private _fb:FormBuilder
  ) { }

  donutForm!:FormGroup;

  ngOnInit(): void {
    this.donutForm = this._fb.group({
      leyenda1: ['',Validators.required],
      leyenda2: ['', Validators.required],
      leyenda3: ['', Validators.required],
      cantidad1: [null, Validators.required],
      cantidad2: [null, Validators.required],
      cantidad3: [null, Validators.required],
    })
  }

  crearGrafico(): void {
    this.data.labels.pop();
    //this.data.datasets[0].data.pop();
    const dataSet = this.donutForm.getRawValue();
    this.title = dataSet.leyenda1;
    this.labels?.push(dataSet.leyenda1);
    this.labels?.push(dataSet.leyenda2);
    this.labels?.push(dataSet.leyenda3);
    this.data.datasets[0].data.push(dataSet.cantidad1);
    this.data.datasets[0].data.push(dataSet.cantidad2);
    this.data.datasets[0].data.push(dataSet.cantidad3);
  }

}
