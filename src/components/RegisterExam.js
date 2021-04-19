import React from "react";
import "./RegisterExam.css";
import registerexam from "../svg/registerexam.jpg";

export default class Registerexam extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid Registerexam__container">
                    <div className="row Registerexam__row">
                        <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Registerexam__svg-column1">
                            <div className="Registerexam__svg">
                                <img src={registerexam} alt="register-exam" className="Registerexam__image" />
                            </div>
                        </div>

                       <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Registerexam__svg-column2">
                           <div className="Registerexam__heading">
                               Register for Exam
                           </div>
                           <form className="Registerexam__Form-main">
                               <div className="form-row Registerexam__Form">
                                   <div className="Registerexam__property">Exam 1:</div>
                                   <input type="text" name="exam_1" id="exam_1" className="form-control Registerexam__Exam" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                               </div>

                               <div className="form-row Registerexam__Form">
                                   <div className="Registerexam__property">Exam 2:</div>
                                   <input type="text" name="exam_2" id="exam_2" className="form-control Registerexam__Exam" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                                </div>
                                
                                <div className="form-row Registerexam__Form">
                                   <div className="Registerexam__property">Duration of Exam 1:</div>
                                   <input type="tel" name="examtime_1" id="examtime_1" className="form-control Registerexam__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="form-row Registerexam__Form">
                                   <div className="Registerexam__property">Duration of Exam 2:</div>
                                   <input type="tel" name="examtime_2" id="examtime_2" className="form-control Registerexam__Time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                                </div>

                                <div className="row Registerexam__Submit-row">
                        <button type="submit" className="btn Registerexam__Submit-Button">Submit</button>
                        </div>
                           </form>
                           </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
