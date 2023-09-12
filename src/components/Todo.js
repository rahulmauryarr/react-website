import React, { useState } from 'react'
import Modal from './Modal';
//import MyModal from './testModal';

export default function Todo(props) {
    const [input, updateinput] = useState("");
    const [modalInput, updateModalInput] = useState("");
    const [list, updatelist] = useState(["Movies", "Sports", "Travel"])

    const getItem = (e) => {
        let val = (e.target.value);
        updateinput(val);
    }
    const updateItem = () => {
        if (input !== "") {
            // Update list
            list.push(input);
            const newFeatures = [...list];
            updatelist(newFeatures);
            updateinput("")

        }
    }
    const removeItem = (e) => {
        let id = e.target.getAttribute("data-val");
        let index = list.indexOf(id);
        let newList = list.filter((value, ind) => {
            return ind !== (index);
        })
        // if (index > -1) { // only splice array when item is found
        //     list.splice(index, 1); // 2nd parameter means remove one item only
        // }
        updatelist(newList)

    }
    const editList =(e)=>{
       let id = e.target.getAttribute("data-val");
       updateModalInput(id)
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <div className='card mt-5'>
                            <div className='card-header'>
                                <h3>ToDo App</h3>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className="mb-3 d-flex">
                                        <input type="text" onChange={getItem} value={input} placeholder="Add Item..." className="form-control me-3" id="exampleInputEmail1" />
                                        <button type="button" onClick={updateItem} className="btn btn-primary px-5 w-auto">Add</button>
                                    </div>
                                    <ul className="list-group text-start ">
                                        {list && list.map((value, index) => {
                                            return <li key={index} className="list-group-item bg-info d-flex align-items-center justify-content-between">
                                                <span className='text-white'><b>{value}</b></span>
                                                <span>
                                                    <button type="button" data-val={value} onClick={editList} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-success px-2 me-3 w-auto">Edit</button>
                                                    <button type="button" onClick={removeItem} data-val={value} className="btn btn-danger px-2 w-auto">Delete</button>
                                                </span>
                                            </li>
                                        })}
                                    </ul>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
            <Modal list={list} updatelist={updatelist} value={modalInput}/>
        </>
    )
}
