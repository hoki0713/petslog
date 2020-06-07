import React, { Component } from 'react';
import { PostWrapper, Navigate, Main } from '../../components';

class PostContainer extends Component {
    render() { 
        return ( 
            <PostWrapper>
                <Navigate />
                <Main />
            </PostWrapper>
         );
    }
}
 
export default PostContainer;