import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, imageUrl, caption }) {
    return (
        <div className="post">
            {/* header -> avatar -> username */}
            <div className="post__header">
                <Avatar  
                    className="post__avatar"
                    alt="Sparta"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9e6zyfiyzACmHMalxDaX8GNXxnF6YIyz3w&usqp=CAU"
                />
            <h3>{username}</h3>
            </div>
            <img 
                className="post__image"
                src={imageUrl} 
                alt="cats" 
            />
            <h4 className="post__text"><strong>{username}</strong>: {caption}</h4>

        </div>
    )
}

export default Post
