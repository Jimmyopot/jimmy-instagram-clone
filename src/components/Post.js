import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
    return (
        <div className="post">
            {/* header -> avatar -> username */}
            <div className="post__header">
                fff

            </div>
            <Avatar 
            hhhh
            jjjjj
            hhhh
            
                className="post__avatar"
                alt="Sparta"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9e6zyfiyzACmHMalxDaX8GNXxnF6YIyz3w&usqp=CAU"
            />
            <h3>Username</h3>
            <img 
                className="post__image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs9fSoqm0D_uSd1MdxKNC-qiEGu8vl0ixQMA&usqp=CAU" 
                alt="" 
            />
            <h4 className="post__text"><strong>Greyfish</strong> We'll be posting about crazy animals</h4>

        </div>
    )
}

export default Post
