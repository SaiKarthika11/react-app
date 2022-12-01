import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import { Productdetails } from './productdetails';
import { Products } from './products';
import Login from './login';
import Home from './home';
import Register from './register';
import Chart from './chart';
import Pie from "../components/piechart";

export default function Indexapp()
{
    return(
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2 mt-2">
                <h1>New Project</h1>
            </header>
            <section className="mt-2 row">
               <BrowserRouter>
               <nav className="col-3">
              {/* <div className="mb-2">
                        <Link className="btn btn-danger w-100" to="/home">Home</Link>
    </div> */}
                   <div className="mb-2">
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
                        <Route path="/" element={<Login/>} />
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register"  element={<Register />} />
                        <Route path="dashboard"  element={<Dashboard />}  />
                        <Route path="products/:category" element={<Products />} />
                        <Route path="details/:id" element={<Productdetails />} />
                        <Route path="chart" element={<Chart/>} />
                        <Route path="piechart" element={<Pie/>} />
                        
                        <Route path="errorpage" element={
                            <div>
                                <h2 className="text-danger">Invalid Credentials</h2>
                                <Link to="/login">Try Again</Link>
                            </div>
                        } />
                    </Routes>
                </main>
               </BrowserRouter>
            </section>
        </div>
    )
}