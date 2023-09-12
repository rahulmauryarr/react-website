import React, { useState, useCallback, useEffect } from 'react'

export default function PasswordGen(props) {

  const [input, setInput] = useState("")
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [copy, setCopy] = useState("Copy")

  let genPass = useCallback(() => {
    let data = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) {
      str += "0123456789"
    }
    if (char) {
      str += "!@#$%&*"
    }
    for (let i = 1; i <= length; i++) {
      let res = Math.floor(Math.random() * str.length + 1);
      data += str.charAt(res)
    }
    setInput(data)
  }, [length, num, char, setInput]);

  let coptText = async () => {
    try {
      await navigator.clipboard.writeText(input);
      setCopy("Text Copied")
      await new Promise((resolve) => setTimeout(() => {
        setCopy("Copy")
        resolve(true);
      }, 2000));
    } catch (e) {
      console.log("Clipboard Api Not Supported");
    }
  }

  useEffect(() => {
    genPass();
  }, [genPass, length, num, char, copy])
  return (
    <>
      <div className='container text-left mt-5'>
        <h2 className='text-center text-dark'>{props.title}</h2>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card text-white px-5 py-5 mt-4 bg-info ">
            <form className=''>
              <div className="mb-3">
                <div className="d-flex align-ietms-center">
                  <input onChange={genPass} value={input} readOnly type="text" className="form-control" id="inputOne" />
                  <button onClick={coptText} type='button' className='btn btn-success'>{copy}</button>
                </div>

              </div>
              <div className='mb-3'>
                <label htmlFor="customRange3" className="form-label">Length: {length}</label>
                <input type="range" onChange={(e) => { setLength(e.target.value) }} className="form-range" value={length} min="8" max="20" id="customRange3" />
              </div>
              <div className="row align-items-center">
                <div className="col-md-5">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked={char} onChange={() => { setChar((prev) => !prev) }} id="char" />
                    <label className="form-check-label" htmlFor="char">
                      Enable charactors
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-check">
                    <input defaultChecked={num} onChange={(e) => { setNum((prev) => !prev) }} className="form-check-input" type="checkbox" id="num" />
                    <label className="form-check-label" htmlFor="num">
                      Enable Numbers
                    </label>
                  </div>
                </div>


              </div>

            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

    </>
  )
}
