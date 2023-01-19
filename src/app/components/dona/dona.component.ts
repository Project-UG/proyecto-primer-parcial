import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{
  
  @Input() title: string = `Ventas : ${new Date().toString()}`;

  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [[]];
  
  public colors: Color[] = [
    { backgroundColor: [ '#6857E6','#009FEE','#F02059' ] }
  ];

  constructor(private ventasService:VentasService){
      let date = new Date();
      this.title = ` Fecha Reporte : ${date.toLocaleDateString('en-US')}`;
      this.ventasService.reporte()
              .subscribe((resp:any)=>{
                  console.log(resp)
                  console.log(resp.map((o)=>{
                    return o.juego
                  }));

                  this.doughnutChartLabels = resp.map((o)=>{
                    return o.juego
                  })

                  this.doughnutChartData = resp.map((t)=>{
                    return t.ventas
                  })
              })
  }



}
