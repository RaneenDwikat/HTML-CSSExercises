import React,{useState} from 'react'
export default function MyComponent({handleClick,process}) {

        const [input,setInput]=useState('');
        const [text,setText]=useState('')
        return(
            <div>
                <label>Text To {process}</label>
                <input type={'text'} value={input} onChange={(e)=>{setInput(e.target.value);console.log(input);console.log(text)}}/>
                <button onClick={()=>{ setText(handleClick(input));console.log(input);console.log(text)}}>{process}</button>
                <label>{process}ed Text:</label>
                <label>{text}</label>
            </div>
        );
    }
