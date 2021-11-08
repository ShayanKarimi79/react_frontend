import React,{useState}from 'react'
import APIService from '../APIService'
import { useCookies} from 'react-cookie'


function Form(props) {
    const [titleValue,setTitleValue]=useState(props.article.title)
    const [descriptionValue,setDescriptionValue]=useState(props.article.description)
    const [token]=useCookies(['myToken'])

    const updateArticle=()=>{
        APIService.updateArticle(props.article.id,{title:titleValue,description:descriptionValue},token['myToken'])
        .then(resp=>props.updateInformation(resp))

    }

    const insertArticle=()=>{
        APIService.insertArticle({title:titleValue,description:descriptionValue},token['myToken'])
        .then(resp=>props.updateInformation(resp))
        

    }
    return (
        <div >

        <div className='mb-3'><label htmlFor='title' className='form-label'>title:</label>
        <input className='form-control' id='title' type='text' 
        value={titleValue?titleValue:props.article.title } 
        onChange={(e)=>setTitleValue(e.target.value)} placeholder='please enter title'/></div>

        <div className='mb-3'><label htmlFor='description' className='form-label'>description:</label>
        <textarea className='form-control' id='description' 
        value={descriptionValue?descriptionValue: props.article.description }
        onChange={(e)=>setDescriptionValue(e.target.value)} rows='5' placeholder='please enter description'></textarea></div>

        { props.article.id ?<button className='btn btn-success' onClick={updateArticle}>update</button>:
         <button className='btn btn-success' onClick={insertArticle}>insert article</button>}

    
          

        </div>
       
    )
}

export default Form
