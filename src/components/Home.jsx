import React from 'react'
import { useState } from 'react';
import Task from './Task'
const Home = () => {

    // const [inputValue,setInputValue] = useState(0);
    // // let inputValue = 0;
    // const increament = () => {
    //     setInputValue(inputValue+1); 
    // }

    // const decreament = () => {
    //     setInputValue(inputValue-1);
    // }

    // const changeHandler = (e) => {
    //     inputValue = e.target.value;
    //     console.log(inputValue);
    // }
    // const btnStyle = {
    //     padding: 20,
    //     border: "none",
    //     backgroundColor: "#f1f1f1",
    //     margin: 10,
    // }

    // const inputStyle ={
    //     padding: 10,
    //     border: "1px solid #fff",
    //     borderradius: "20",
    // }

    // return (
    //     <div>
    //         Registration Form

    //             <div><label htmlFor="">UserName</label>
    //                 <input type="number" style={inputStyle} placeholder='Enter your name' onChange={changeHandler} value={inputValue} /></div>
    //             <button style={btnStyle} onClick={decreament} >-</button>
    //             <button style={btnStyle} onClick={increament}>+</button>

    //     </div>
    // )
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    console.log(tasks);
    console.log(title, description);

    const deleteTask = (index) => {
        const filteredarray = tasks.filter((val,i)=>{
            return i!==index;
        })
        setTasks(filteredarray);
    } 

    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...tasks, {
            title: title,
            description: description
        }]);
    };
    return (
        <div className='parent-container'>
            <div className="container">
                <form onSubmit={submitHandler}>
                    <div>Daily Goals</div>
                    <input type="text" placeholder='Title' value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                    <textarea name="" id="" placeholder='Description' value={description} onChange={(e) => {
                        setDescription(e.target.value);
                    }}></textarea>
                    <button type='submit'>ADD</button>
                </form>

                {tasks.map((item, index) => {
                    return <Task key={index} title={item.title} description={item.description} index={index} deleteTask={deleteTask} />;
                })}
                {/* <Task/> */}
            </div>

        </div>
    )
}

export default Home