import React from 'react'

export default function Alert(props) {
    const alertCss ={
        position:"absolute",
        top:"60px",
        right:0,
        width:"auto",
        borderTopLeftRadius: "35px",
        borderBottomLeftRadius: "35px"
  }
    return (
        props.alert && <div style={alertCss} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong className='pe-4'>{props.alert.type}::</strong> {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
