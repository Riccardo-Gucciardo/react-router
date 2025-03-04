import { useState,useEffect } from "react"
import axios from "axios"

const PostList = () => {

    
    const {posts,setPosts} = useState([])

    useEffect( () => {
        axios.get('http://localhost:3000/api/posts')
        .then(res => setPosts(res.data))
    })


    return(
        <>
        <div className="container">
            <div className="row">
                {
                    posts.map((elem) => {

                        const {id,title,tags} = elem
                        
                        return(
                            <div key={id} className="col-4">
                                <div className="" >
                                        <h4>{title}</h4>
                                        <p>{tags}</p>
                                    </div>
                            </div>
                        )
                    })    
                }
            </div>

        </div>
    </>)
    

}

export default PostList