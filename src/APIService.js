
export default class APIService {

    static  updateArticle(id, body,token) {
        const request = {
            'method': 'PATCH',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }

        return fetch(`http://127.0.0.1:8000/api/articles/${id}/`, request).then(resp=>resp.json())
        
    }


    
    static  insertArticle(body,token) {
        const request = {
            'method': 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            },
            body:JSON.stringify(body)
        }

        return fetch(`http://127.0.0.1:8000/api/articles/`, request).then(resp=>resp.json())
        
    } 
    
    static  deleteArticle(id,token) {
        const request = {
            'method': 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'Authorization':`Token ${token}`
            }
        }

        return fetch(`http://127.0.0.1:8000/api/articles/${id}/`, request)
        
    }

    static  loginUser(body) {
        const request = {
            'method': 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }

        return fetch(`http://127.0.0.1:8000/auth/`, request).then(resp=>resp.json())
        
    } 

    

    static  registerUser(body) {
        const request = {
            'method': 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify(body)
        }
        return fetch(`http://127.0.0.1:8000/api/users/`, request).then(resp=>resp.json())
        
    } 

}


