import React from 'react'
//import $ from 'jquery';
export default function Darkmode(props) {
    const darkMode = ()=>{
        document.getElementById("theme").classList.add("dark-theme")
        localStorage.setItem("dark-theme","true");
    }
    const lightMode = ()=>{
        document.getElementById("theme").classList.remove("dark-theme")
        localStorage.removeItem("dark-theme","true");
    }
    let res =  localStorage.getItem("dark-theme");
    if(res === "true"){
        darkMode();
    }        
    let switchDark =(e)=>{
        if(e.target.checked){
            darkMode();     
            props.dynamicAlert(" Dark Mode Loaded","success")       
        }else{
            lightMode();      
            props.dynamicAlert(" Light Mode Loaded","success")        
        }
    }
    
    return (
        <form className="d-flex switch">
            <div className="form-check form-switch">
                <input onChange={switchDark}  defaultChecked={res === "true"} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            </div>
        </form>
    )
}
