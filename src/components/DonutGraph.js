import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class DonutGraph extends Component {
	render() {
		const options = {
			height: 240,
			animationEnabled: true,
			subtitles: [
                {
                  text: "3,500 - Total Sale",
                  verticalAlign: "center",
                  position: "absolute",
                  horizontalAlign: "center",
                  fontSize: 15,
                  fontWeight: "bold",
                  fontColor: "gray",
                  fontFamily: "Arial",
                  dockInsidePlotArea: true,
                }
              ],
			data: [{
				type: "doughnut",
				radius:  "100%", 
   				innerRadius: "80%",
				startAngle: 10,
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Course Visit", y: 55, color:"rgba(91, 37, 177)"  },
					{ name: "Course Sale", y: 45, color:"rgb(227, 87, 54)"  },
				]
			}], 
		}
		return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
}

export default DonutGraph