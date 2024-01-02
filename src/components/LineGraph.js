import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class LineGraph extends Component {
	render() {
		const options = {
			animationEnabled: true,
			axisX: {
				valueFormatString: "MMM",
				intervalType: "month",
				interval: 1,
				labelFontColor: "gray",
				lineThickness: 0,
				minimum: new Date(2017, 0, 1),
				maximum: new Date(2017, 11, 1),
			},
			axisY: {
				labelFontColor: "gray",
				gridDashType: "dash",
				gridColor: "#F9F9F9",
				gridThickness: 2,
				lineThickness: 0,
			},
			data: [{
				yValueFormatString: "#,###",
				xValueFormatString: "MMMM",
				type: "splineArea",
				lineColor: "rgba(91, 37, 177)",
				color: "rgba(156, 110, 196, 0.2)",
				lineThickness: 3,
				markerType: "none",
				name: "Course Visit",
				dataPoints: [
					{ x: new Date(2017, 0), y: 20 },
					{ x: new Date(2017, 1), y: 50 },
					{ x: new Date(2017, 2), y: 45 },
					{ x: new Date(2017, 3), y: 50 },
					{ x: new Date(2017, 4), y: 75 },
					{ x: new Date(2017, 5), y: 70 },
					{ x: new Date(2017, 6), y: 50 },
					{ x: new Date(2017, 7), y: 47 },
					{ x: new Date(2017, 8), y: 70 },
					{ x: new Date(2017, 9), y: 40 },
					{ x: new Date(2017, 10), y: 30 },
					{ x: new Date(2017, 11), y: 50 }
				]
			}, {
				yValueFormatString: "$#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				markerType: "none",
				lineColor: "rgb(227, 87, 54)",
				lineThickness: 3,
				name: "Course Sale",
				dataPoints: [
					{ x: new Date(2017, 0), y: 0 },
					{ x: new Date(2017, 1), y: 30 },
					{ x: new Date(2017, 2), y: 25 },
					{ x: new Date(2017, 3), y: 40 },
					{ x: new Date(2017, 4), y: 10 },
					{ x: new Date(2017, 5), y: 40 },
					{ x: new Date(2017, 6), y: 70 },
					{ x: new Date(2017, 7), y: 20 },
					{ x: new Date(2017, 8), y: 10 },
					{ x: new Date(2017, 9), y: 40 },
					{ x: new Date(2017, 10), y: 60 },
					{ x: new Date(2017, 11), y: 30 }
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

export default LineGraph