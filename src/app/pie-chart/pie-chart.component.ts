declare var CanvasJS: any; // Declare CanvasJS

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      backgroundColor: "#fff",  
      title: {
        text: "Sprint and Tickets"
      },
      data: [{
        type: "pie",
        startAngle: -90,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { name: "completed", y: 10 },
          { name: "pending", y: 15 },
          { name: "inprogress", y: 5 }
        ]
      }],

    });
    

    chart.render();  
  }
}
