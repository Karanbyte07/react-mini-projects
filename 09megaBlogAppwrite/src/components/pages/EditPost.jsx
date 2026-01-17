import React , {useEffect, useState}from 'react'
import { Container , PostForm } from '../index.js'
import Service from  '../../appwrite/confService.js'
import { useParams , useNavigate } from 'react-router-dom'



function EditPost() {

    const [post, setPosts] = useState(null)
    const slug = useParams().slug
    const navigate = useNavigate()

useEffect(() => {
    if(slug){
        Service.getPost(slug).then( (post) => {
            if(post){
                setPosts(post)
            }
        })
    }else{
        navigate('/')
    }
}, [slug, navigate])


  return post ? (
    <div>
        <Container>

            <PostForm post = {post} type = "edit"/>
        </Container>
    </div>
  ) : null
}

export default EditPost