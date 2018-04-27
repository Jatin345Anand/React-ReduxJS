import React from 'react';

import Item from './item';
import {connect} from 'react-redux';
class OutPutCrud extends React.Component{
     constructor(props){
         super(props);
         this.state={
            ListforDelete:[]
         }
     }
     UpdateState(ListofUnmarked){
        this.setState({ListforDelete:ListofUnmarked});
         
     } 
      
     UpdateOutputCrudList(){
    //      console.log(`UpdateOutputCrudList called...${this.props.List.length}`);
    //      //this.setState({ListforDelete:this.props.List});
    //      var LISTofOperation = this.props.List;
    //      LISTofOperation.forEach(element => {
    //          console.log(`${element.mark}`);
    //      });
    //      var ListofUnmarked = LISTofOperation.filter((io)=>io.mark==false);
    //      this.UpdateState(ListofUnmarked);
    //      console.log(`this.state.ListforDelete`);
    //      this.state.ListforDelete.forEach((io)=>console.log(io.id));
    // //     console.log(`${LISTofOperation.length} and ${this.state.ListforDelete.length}`);
    // console.log(`ListofUnmarked`);
      
    // ListofUnmarked.forEach((io)=>console.log(io.id)); 
    //   return ListofUnmarked;  
    console.log(`called marked`);  
    }
     render(){
        return(
            <div>
            <h3>Total :{this.props.total} Mark : {this.props.markCount} UnMark : {this.props.UnmarkCount}</h3>
            <table className="table table-bordered">
                   <thead>
                       <tr>
                       <th>ID</th>
                       <th>NAME</th>
                       <th>PRICE</th>
                       <th>IMAGE</th> 
                       <th>OPERATIONS</th> 
                       </tr>
                    </thead>
                   <tbody>
                       {this.props.List.map((IO)=><Item UpdateList={this.props.UpdateOutputCrudList}    key={IO.id} item ={IO}/>)}
                       
                   </tbody>
               </table>
            </div>
        );
     }
    
}
//
//     UpdateOutputCrudList:UpdateReducer,
const mapStateToProps = (state)=>{
    // state.ItemArray.forEach((i)=>console.log(i));
    return {
     
        List:state.ItemArray,
        
        total:state.total,
        markCount:state.markCount,
        UnmarkCount:state.UnmarkCount
    }
}
export default connect(mapStateToProps)(OutPutCrud);
//export default LikeResult;
 //updateLIST={props.updateITEMLIST}
 