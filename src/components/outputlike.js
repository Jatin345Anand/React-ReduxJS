import React from 'react';
import {connect} from 'react-redux';
const Outputlike =(props)=>{
    return(
        <div>
      <h2>Result ={props.likeCount} </h2>
            </div>
    );
}
const mapStateToProps=(state)=>{
    return {
        likeCount:state.like
    }
}
export default connect(mapStateToProps)(Outputlike);
