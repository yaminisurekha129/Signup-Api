import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Sprints Status"
	  },
	  axisX: {
		labelAngle: -90
	  },
	  axisY: {
		title: ""
	  },
	  axisY2: {
		title: ""
	  },
	  toolTip: {
		shared: true
	  },
	  legend:{
		cursor:"pointer",
		itemclick: function(e: any){
		  if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		  }
		  else {
			e.dataSeries.visible = true;
		  }
		  e.chart.render();
		}
	  },
	  data: [{
	    type: "column",	
	    name: "To-Do",
	    legendText: "To-Do",
	    showInLegend: true, 
	    dataPoints:[
	  	 
	  	  {label: "sprint1", y: 25},
	  	  {label: "sprint2", y: 50},
	  	  {label: "sprint3", y: 62},
		  {label: "sprint4", y: 47},
	  	  {label: "sprint5", y: 91},
		  {label: "sprint6", y: 30},
	  	  
	  ]
	  }, {
	    type: "column",	
	    name: "completed",
	    legendText: "completed",
	    axisYType: "secondary",
	    showInLegend: true,
	    dataPoints:[
		{label: "sprint1", y: 10},
		{label: "sprint2", y: 44},
		{label: "sprint3", y: 34},
		{label: "sprint4", y: 60},
		{label: "sprint5", y: 50},
		{label: "sprint6", y: 20},
		
	  	  
	  ]
    }]
  }	

  constructor() { }

  ngOnInit(): void {
  }

}
