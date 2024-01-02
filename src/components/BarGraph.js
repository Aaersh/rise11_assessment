import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class BarGraph extends Component {
	render() {
		const options = {
			axisX: {
                lineThickness: 0,
                gridDashType: "solid",
                gridColor: "#ECECEC",
                gridThickness: 3,
                labelFontColor: "gray",
            },
            axisY: {
                gridThickness: 0,
                lineThickness: 0,
                labelFontColor: "gray",
            },
            dataPointWidth: 6,
			data: [
			{              
                color: "rgba(91, 37, 177)",
				type: "column", 
				dataPoints: [
					{ label: "Mon",  y: 78  },
					{ label: "Tue", y: 38 },
					{ label: "Wed", y: 45  },
					{ label: "Thu",  y: 52  },
					{ label: "Fri",  y: 36  },
					{ label: "Sat",  y: 20  },
				]
			}
			]
		}
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
}

export default BarGraph