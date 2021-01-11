import React from 'react'
import { RegisterBg } from '../../assets'
import './detailBlog.scss';
import {useHistory} from 'react-router-dom';
import { Gap, Link } from '../../components';

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumbnail"/>
            <p className="blog-title">Title</p>
            <p className="blog-author">Author</p>
            <p className="blog-body">Content Blog</p>
            <Gap height={20}/>
            <Link title="Kembali ke Home" onClick={() => history.push('/')}/>
        </div>
    )   
}

export default DetailBlog
