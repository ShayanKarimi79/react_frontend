import React from 'react'
import APIService from '../APIService'
import { useCookies} from 'react-cookie'


function ArticleList(props) {

    const [token]=useCookies(['myToken'])

    function editBtn(article){
        props.editBtn(article)
    }

    function deleteBtn(article){
        APIService.deleteArticle(article.id)
        .then(()=>props.deleteBtn(article)).catch(error=>console.log(error))
    }



    return (
        <div>
            {props.articles && props.articles.map(article =>
                <div key={article.id}>
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                    <div className='row'>
                        <div className='col-md-1'>
                            <button className='btn btn-primary' onClick={() => editBtn(article)}>edit</button>
                        </div>
                        <div className='col-md'>
                            <button className='btn btn-danger' onClick={()=> deleteBtn(article)} >delete</button>
                        </div>
                    </div>
                    <hr className='hrclass' />
                </div>
            )}

        </div>
    )
}

export default ArticleList
