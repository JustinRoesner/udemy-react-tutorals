import React from 'react';
//                <img alt="avatar" src='https://source.unsplash.com/random' />
const CommentDetail = props => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.commentText}</div>
            </div>
        <br/>
        </div>
    );

};

export default CommentDetail;