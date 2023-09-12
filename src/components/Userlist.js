import React ,{ useState }  from 'react'
import { Outlet, useNavigate  } from 'react-router-dom'

export default function Userlist() {


    let [id , updatedId] = useState()

    let navigateDetails = async (e)=>{
        
        alert(e.currentTarget.id);
        let getId = await e.currentTarget.id;
        navigate("/user-list/" + id)
        updatedId(getId)
        

    }
    let navigate = useNavigate();
    const myComponentStyle = {  
        color: '#666666',    
     }  
    return (
        <>
        <section className="intro mt-5">
            <div className="gradient-custom-1 h-100">
                <div className="mask d-flex align-items-center h-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="table-responsive bg-white">
                                    <table className="table mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">EMPLOYEES</th>
                                                <th scope="col">POSITION</th>
                                                <th scope="col">CONTACTS</th>
                                                <th scope="col">AGE</th>
                                                <th scope="col">ADDRESS</th>
                                                <th scope="col">SALARY</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" style={myComponentStyle}>Tiger Nixon</th>
                                                <td>System Architect</td>
                                                <td>tnixon12@example.com</td>
                                                <td>61</td>
                                                <td>Edinburgh</td>
                                                <td><button id="61" onClick={navigateDetails} className='btn btn-success'>Details</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" style={myComponentStyle}>Sonya Frost</th>
                                                <td>Software Engineer</td>
                                                <td>sfrost34@example.com</td>
                                                <td>23</td>
                                                <td>Edinburgh</td>
                                                <td><button id="23" onClick={navigateDetails} className='btn btn-success'>Details</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" style={myComponentStyle}>Jena Gaines</th>
                                                <td>Office Manager</td>
                                                <td>jgaines75@example.com</td>
                                                <td>30</td>
                                                <td>London</td>
                                                <td><button id="30" onClick={navigateDetails} className='btn btn-success'>Details</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" style={myComponentStyle}>Quinn Flynn</th>
                                                <td>Support Lead</td>
                                                <td>qflyn09@example.com</td>
                                                <td>22</td>
                                                <td>Edinburgh</td>
                                                <td><button id="22" onClick={navigateDetails} className='btn btn-success'>Details</button></td>
                                            </tr>
                                            <tr>
                                                <th scope="row" style={myComponentStyle}>Charde Marshall</th>
                                                <td>Regional Director</td>
                                                <td>cmarshall28@example.com</td>
                                                <td>36</td>
                                                <td>San Francisco</td>
                                                <td><button id="36" onClick={navigateDetails} className='btn btn-success'>Details</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Outlet/>
        </>
    )
}
