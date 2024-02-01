import './dashboard.component.css';
import { ArrowRightCircle, BoxArrowRight, Calculator, Capsule, CurrencyDollar, Google, HeartPulseFill, PersonFill, PlusSquare } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export function Dashboard() {
    return (
        <div>
             <div id='admin-width'>
                {/*------admin-title----- */}
                <div className="admin-title">
                    <h4>Bayanno Hospital Management System</h4>
                    <div className="row">
                        <div className="col-8">
                            <h6><PersonFill></PersonFill> admin</h6>
                        </div>
                        <div className="col-2">
                            <Link to="/home"><h6><Google></Google> website</h6></Link>
                        </div>
                        <div className="col-2">
                            <Link to="/login"><h6><BoxArrowRight></BoxArrowRight> Logout</h6></Link>
                        </div>
                    </div>
                </div>
                    <hr></hr>
                    <div className="admin-name">
                        <h4><ArrowRightCircle></ArrowRightCircle> &nbsp; Admin Dashboard</h4>
                    </div>
                    <div className="dashbord-body">
                        <div className="row">
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><HeartPulseFill></HeartPulseFill></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2" style={{color:"blueviolet" , fontSize:"x-large"}}>2</div>
                                    <h3 style={{color:"blueviolet"}}>Doctor</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><PersonFill></PersonFill></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="1" data-duration="1500" data-dealy="1"  style={{color:"red" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"red"}}>Patient</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><PlusSquare></PlusSquare></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="1" data-duration="1500" data-dealy="1"  style={{color:"#0000FF" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"#0000FF"}}>Nurse</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><Capsule></Capsule></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="1" data-duration="1500" data-dealy="1"  style={{color:"darkcyan" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"darkcyan"}}>Pharmacist</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"blueviolet" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"darkcyan"}}>Laboratorist</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><Calculator></Calculator></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"#FF0066" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"#FF0066"}}>Accountant</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><CurrencyDollar></CurrencyDollar></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"#a99100" , fontSize:"x-large"}}>0</div>
                                    <h3 style={{color:"#a99100"}}> Payment </h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li><Capsule></Capsule></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"#a90000" , fontSize:"x-large"}}>1</div>
                                    <h3 style={{color:"#a90000"}}>Medicine</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"darkgreen" , fontSize:"x-large"}}>0</div>
                                    <h3 style={{color:"darkgreen"}}>Operation Report</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"blueviolet" , fontSize:"x-large"}}>0</div>
                                    <h3 style={{color:"darkcyan"}}>Birth Report</h3>
                               </div>
                            </div>
                            <div className="col-sm-3" id="dashbord-doctor">
                               <div className="tile-stats tile-white tile-white-primary">
                                    <div className="icon">
                                        <li></li>
                                    </div>
                                    <div className="num" data-start="0" data-end="2" data-duration="1500" data-dealy="2"  style={{color:"blueviolet" , fontSize:"x-large"}}>0</div>
                                    <h3 style={{color:"darkcyan"}}>Death Report</h3>
                               </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}