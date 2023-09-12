import React from 'react'
import logo from '../../src/logo.svg';

export default function Deatils() {
    let style = {
        fontSize: "8px",
        letterSpacing: ".5px",
        marginBottom: "10px",
    }
  return (
        <div style={{width:400,display:"block",margin:"auto"}} className="card mt-5">
            <div className="card-header">
                <img alt='img' src={logo} />
            </div>
            <div className="card-body">
                <div className="inner">
                    <div style={style}>Victor Crest<span className="color__gray" style={{marginLeft:10}}>26</span></div>
                    <div className="color__gray" style={{fontSize: 13,letterSacing: .5}}>London</div>
                </div>
            </div>
            <div className="card-footer">
                <div className="inner">
                    <div>80K</div>
                    <div className="color__gray">Followers</div>
                </div>
                <div className="inner">
                    <div>803K</div>
                    <div className="color__gray">Likes</div>
                </div>
                <div className="inner">
                    <div>1.4K</div>
                    <div className="color__gray">Photos</div>
                </div>
            </div>
        </div>
  )
}
