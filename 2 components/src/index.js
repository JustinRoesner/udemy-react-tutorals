import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
//import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard>
               <h1>Warning</h1>
               <div>are you sure you want to?</div>
           </ApprovalCard> 
          <ApprovalCard>          
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:00PM" 
            commentText="nice" 
            avatar="https://source.unsplash.com/random"
            />
          </ApprovalCard>

          <ApprovalCard>          
          <CommentDetail 
            author="Alex" 
            timeAgo="Today at 2:00AM" 
            commentText="very nice" 
            avatar="https://source.unsplash.com/random"
          />
        </ApprovalCard>

          <ApprovalCard>          
          <CommentDetail 
            author="Jane" 
            timeAgo="Yesterday at 1:00PM" 
            commentText="sweet" 
            avatar="https://source.unsplash.com/random"
          />

        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));