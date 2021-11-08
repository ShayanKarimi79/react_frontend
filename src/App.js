import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ArticleList from './components/ArticleList';
import Form from './components/Form'
import APIService from './APIService';
import { useCookies} from 'react-cookie'
import {useHistory} from 'react-router-dom'




function App() {

  const [articles, setArticles] = useState([])



  useEffect(() => {
    const request = {
      'method': 'get',
      headers: {
        'Content-Type': 'application/json',
       /*  'Authorization': `Token ${token['myToken']}` */
      }
    }
    fetch('http://127.0.0.1:8000/api/articles', request)
    .then(response => response.json()).then(response => setArticles(response))
    .catch(error => console.log(error)).then(console.log(articles))
    
  }, [])
  const [editArticle, setEditArticle] = useState(null)
  const [token,setToken,removeToken]=useCookies(['myToken'])
  let history=useHistory()


const addBtn=()=>{
    setEditArticle({title:'',description:''})

}

  const editBtn=(article)=>{
    setEditArticle(article)
  }

  const deleteBtn=(delArticle)=>{
    const newArticles=articles.filter(article=>{
      if (article.id===delArticle.id)
        return false
      else 
        return true   
    })

    setArticles(newArticles)
    
    
    
  }

  const updateInformation=(new_article)=>{
    const newArticles=articles.map(article=>{
      if (article.id===new_article.id)
        return new_article
      else 
        return article  
    })

    setArticles(newArticles)
    setEditArticle(null)
  }



  const addArticle=(new_article)=>{
    const newArticles=[...articles,new_article]
    setArticles(newArticles)
    setEditArticle(null)

  }

  const logoutBtn=()=>{
    removeToken(['myToken'])

  }

  useEffect(()=>{
    if(!token['myToken']){
        history.push('/')
    }
},[token])
 
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
          <h2>django course </h2>
          <br/>
        </div>
        <div className='col'>
          <button className='btn btn-success' onClick={addBtn} >add new article</button>
        </div> 
        <div className='col'>
          <button className='btn btn-success' onClick={logoutBtn} >logout</button>
        </div>
      </div>
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>
      { editArticle ?<Form updateInformation={editArticle.id?updateInformation:addArticle} article={editArticle}/>:null}
    </div>
  );
}

export default App;
