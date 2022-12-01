import React,{useState} from "react";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import{
  categoryScale,LinearScale,BarElement,Title
} from 'chart.js';
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import { Data } from "../components/data";
import Pies from "../components/piechart";
import  {BarChart} from "../components/barchart";
import Line from "../components/linechart";
import {Plotter} from "../components/plotterchart";
import {Doughnut} from "../components/doughnutchart";
import {Spider} from "../components/spiderchart";
import {PolarArea} from "../components/areachart";
import {Column} from "../components/columnchart";


ChartJS.register(ArcElement,CategoryScale,LinearScale,BarElement,
  Title,Tooltip,Legend);


export const data= {
    
      labels: Data.products.map((data) => data.title), 
      datasets: [
        {
          label: "stock available",
          data: Data.products.map((data) => data.stock),
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,64,0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,64,1)',

          ],

        borderWidth: 1
        },
      ],
    }
    export const options={
      responsive: true,
      plugins:{
        legend:{
          position: 'top',
        },
        title:{
          display: true,
          text: 'Chart.js Bar Chart',
        },
      },
    };
    export default function Chart(){
      const [chartData, setChartData]= useState(
        {

        }
      )
    
    return (
      <>
        <div className="Chart">
          <p>Using Chart.js in React</p>
          <Pie data={data}></Pie> 
           <Bar options={options} data={data} />
           {/*<Line options={options} data={data} />*/}
           <div className="mb-2">
            <Link className="btn btn-danger w-100" to="/piechart">PieChart</Link>
           </div>
        </div>
        </>
    )
}