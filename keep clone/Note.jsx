import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';
const CreateNote=(props)=>{

   let [note, setNote] = useState({
      title: '',
      content: '',
    })
  
    let [expand,setExpand]=useState(false)
  
    let addNote = (e) => {
      let {value,name} = e.target
      setNote((prev)=>{
       return { ...prev, [name]:value}
      })
      
  
    }
    let addEvent  = ()=>{
         props.passNote(note)
         setNote({
          title: '',
          content: '',
        })
    }
  let expandIt = ()=>{
    setExpand(true)
  }
  
  
    return (
      <>
        <div className="box">
           
          <form className="main">
            {expand?
            <input type="text" value={note.title} name="title" onChange={addNote}  autoComplete = "off" className="form__field" placeholder="enter the title" />
            : null}
            <br/>
            <textarea onClick={expandIt} cols="" onChange={addNote} name="content" className="text-area" value={note.content} rows="" placeholder="write a note"></textarea>
            {expand?< Button onClick ={addEvent}><AddIcon className="btn" /></Button>: null}
          </form>
          
  
        </div>
      </>
    )
   

};
export default CreateNote;