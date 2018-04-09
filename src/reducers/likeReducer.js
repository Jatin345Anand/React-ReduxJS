import React,{Component} from 'react';

const likeObject={
    like:0
};
export const likeReducer =(state=likeObject,action)=>{
    var currentLike=0;
    console.log(`Reducer called...`);
  //  console.log(`${action.type} & ${action.payload.value}`);
    if(action.type=="L"){
        console.log(`${state.like} and ${action.payload.value}`);
    currentLike = state.like+action.payload.value;        
    }
    else if(action.type=="U"){
    currentLike = state.like+action.payload.value;
    }
    console.log(`Current Like = ${currentLike}`);
    return {like:currentLike};
}    
// export class likeReducer extends Component{
//     constructor(state,action){
//        super();
//        like:0
//        var cu
//        if(action.type=="L"){
//         console.log(`${state.like} and ${action.payload.value}`);
//     currentLike = state.like+action.payload.value;        
//     }
//     else if(action.type=="U"){
//     currentLike = state.like+action.payload.value;
//     }
//     console.log(`Current Like = ${currentLike}`);
//     return {like:currentLike};
//     }
//       //  console.log(`${action.type} & ${action.payload.value}`);
    
//     // render(){
//     //     return{like:currentLike};
//     // }
// }
