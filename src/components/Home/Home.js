import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Col, Row} from 'react-bootstrap';


function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        // axios.get('https://jsonplaceholder.typicode.com/photos')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            setPosts(res.data);
            setLoading(false);
        }).catch(err =>{
            console.log(err)
        })
    })
      


        return(
            <div>
                <Row>
                    {loading ? <p className="dataloading">Your Data is Loading....</p> :  posts.map(post =>
                        <Col md={3} key={post.id} className="todolist">
                            {/* <img src={post.thumbnailUrl} className="rounded"/>  */}
                            <h6><a href={post.url}> {post.title.substring(1, 100)} </a></h6>
                        </Col>)}
                   
                </Row>
            </div>

        )
}

export default Home;