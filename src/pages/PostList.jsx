import { useState,useEffect } from "react"
import axios from "axios"

const PostList = () => {
    
    const {products,setProducts} =useState([])

    useEffect( () => {
        axios.get('http://localhost:3000/api/posts/')
        .then(res => setProducts(res.data))
    },[])
    return(
        <>
        <div className="container">
            <div className="row">
                {
                    products.map( (element) => {
                        return(
                            <div key={element.id} className="col-4">
                                <div >
                                    <div>
                                        <h4>{element.title}</h4>
                                        <p>{element.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
        </>
    )
}

export default PostList