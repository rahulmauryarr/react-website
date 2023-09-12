import React , { useState }  from 'react'


export default function Form(props) {
    let [text, convertText] = useState("");
    let [count, counter] = useState("0");
    let onclickUpper = () => {
        let newText = text.toUpperCase();
        convertText(newText);
        counter(parseInt(count + 1));
        props.dynamicAlert("Converted to Uppercase","success")

    }
    let onclickLower = () => {
        let newText = text.toLowerCase();
        convertText(newText);
        counter(parseInt(count + 1));
        props.dynamicAlert("Converted to Lowercase","success")

    }
    let onchange = (e) => {
        convertText(e.target.value);

    }
    let remSpace = ()=>{
        let spce = text.split(" ");
        convertText(spce.join(""));
        counter(parseInt(count + 1));
        props.dynamicAlert("Removed Spaces","success")
    }
    let trimText = ()=>{
        let spce = text.trim();
        convertText(spce);
        counter(parseInt(count + 1));
        props.dynamicAlert("Text Trimed","success")
    }
    let reset = () => {
        convertText("");
        counter("0");
        props.dynamicAlert(" Data Reset","success")
    }
    let copyText =async ()=>{
        try {
            await navigator.clipboard.writeText(text);
            counter(parseInt(count + 1));
        } catch (e) {
            console.log("Clipboard Api Not Supported");
        }
        
    }
    return (
        <>
        <form>
            <h2 className='text-start my-3'>{props.heading}</h2>
            <div className="mb-3">
                {/* <label htmlFor="Textarea1" className="form-label">Enter the Text</label> */}
                <textarea onChange={onchange} className="form-control" id="Textarea1" value={text} rows="8"></textarea>
            </div>
            <div id="btns" className='d-md-flex align-items-center justify-content-start'>
                <button type="button" disabled={!text} onClick={onclickLower} className="btn btn-primary mb-3 me-3">LowerCase</button>
                <button type="button" disabled={!text}  onClick={onclickUpper} className="btn btn-primary mb-3 me-3">UpperCase</button>
                <button type="button" disabled={!text}  onClick={copyText} className="btn btn-primary mb-3 me-3">Copy Text</button>
                <button type="button" disabled={!text}  onClick={trimText} className="btn btn-primary mb-3 me-3"> Text Trim</button>
                <button type="button" disabled={!text}  onClick={remSpace} className="btn btn-primary mb-3 me-3">Remove Text Space</button>
                <button type="button" disabled={!text} onClick={reset} className="btn mb-3 btn-danger">Reset</button>
            </div>
            <p className='pt-5'>You Converted {count} times and {text.length} charectors and {text.split(/\s+/).filter((value)=>{return value.length !==0}).length} Words</p>
            <p>{0.08 * text.split(" ").filter((value)=>{return value.length !==0}).length} minute to read</p>
        </form>
        
        </>
    )
}
