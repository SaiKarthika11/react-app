import React,{useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {  useNavigate } from "react-router-dom";
import { Data } from "../components/data";
{/*import {Pie} from "../components/piechart";
import {Bar} from "../components/barchart";
import {Line} from "../components/linechart";
import {Plotter} from "../components/Plotterchart";
import {Doughnut} from "../components/doughnutchart";
import {Spider} from "../components/spiderchart";
import {PolarArea} from "../components/areachart";
import {Column} from "../components/columnchart";*/}




export default function Chart() {
    const [chartData, setChartData] = useState({
      labels: Data.map((Data) => Data.id), 
      datasets: [
        {
          label: "title ",
          data: Data.map((Data) => Data.title),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })
    return (
        <div className="Chart">
          <p>Using Chart.js in React</p>
          <BrowserRouter>
               <nav className="col-3">
              {/* <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/home">Home</Link>
    </div> */}
                {/*<div className="mb-2">
    <Link className="btn btn-danger w-100" to="/register">Register</Link>
    </div>
                    <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/login">Login</Link>
                    </div>
                    {/*<div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/dashboard">Dashboard</Link>
</div>*/}
                </nav>
                <main className="col-9">
                    <Routes>
                        
                        <Route path="piechart" element={<Pie />} />
                        <Route path="barchart" element={< Bar/>} />
                        <Route path="linechart"  element={<Line />} />
                        <Route path="plotterchart"  element={<Plotter />}  />
                        <Route path="doughnutchart" element={<Doughnut />} />
                        <Route path="spiderchart" element={<Spider />} />
                        <Route path="areachart" element={<PolarArea/>} />
                        <Route path="columnchart" element={<Column/>}/>
                            <div>
                                <h2 className="text-danger">Charts using in React</h2>
                                <Link to="/login">Try Again</Link>
                            </div>
                        
                    </Routes>
                </main>
               </BrowserRouter>
            
        </div>
    )
}