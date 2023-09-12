import React, { useState } from 'react'

export default function ContactUs() {
    const FORM_ENDPOINT = "/"; 
    const [form, setForm] = useState("Submit")
    const [submitted, setSubmitted] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault()
        setForm('Submitting...')
        const { emailCon, Textarea } = e.target.elements
        let conFom = {
            email: emailCon.value,
            message: Textarea.value,
        }
        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(conFom),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Form response was not ok');
                }

                
            })
            .catch((err) => {
                // Submit the form manually
                e.target.submit();
                setSubmitted(true);
            });
    }
    if (submitted) {
        return (
          alert("success")
        );
      }
    return (
        <>
            <div id="contact-us" className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className='card'>
                        <div className='card-header'>
                            <div className='card-body'>
                                <form action={FORM_ENDPOINT} onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="emailCon" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="emailCon" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="Textarea" className="form-label">Message</label>
                                        <textarea className="form-control" id="Textarea" rows="6"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-info">{form}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>

    )
}
