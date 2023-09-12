import React, { useState, useEffect } from 'react'

export default function Modal(props) {
    const [newInput, updateNewInput] = useState(props.value);

    // Use useEffect to update newInput when props.value changes
    useEffect(() => {
        updateNewInput(props.value);
    }, [props.value]);

    const getItem = (e) => {
        let edit = e.target.value
        updateNewInput(edit)
    }
    const updateList = () => {
        let id = props.value;
        let index = props.list.indexOf(id);
        let res = newInput;
        let li = [...props.list];
        if (res !== null && res.trim() !== '') {
            let updatedTodos = [...li]
            updatedTodos[index] = res
            props.updatelist(updatedTodos);
        }
        document.getElementById('closeModal').click();
    }

        return (
            <>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit item</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" onChange={getItem} value={newInput} className="form-control me-3" id="updateEmail" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" id='closeModal' className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={updateList} className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
