import React from 'react';
import {Component} from 'react';
import {store} from '../store/store';
class Inputlike extends Component{
    constructor(){
        super();
    }
doOperation(event){
    var buttunhtml=event.target.innerHTML;
    console.log(`doperation called... and current event called =${event.target.innerHTML} `);
     if(buttunhtml=="LIKE"){
        console.log(`L`); 
       store.dispatch({type:'L',payload:{value:1}});
       console.log(`L'`);
     }  
     else if(buttunhtml=="DISLIKE"){
         console.log(`D`);
      store.dispatch({type:'U',payload:{value:-1}});
      console.log(`D'`);
     }

} 
    render(){
        return(
            <div>
      <button class="btn btn-primary " onClick={this.doOperation.bind(this)} >LIKE</button>
 &nbsp; &nbsp; &nbsp;     
<button class="btn btn-danger " onClick={this.doOperation.bind(this)} >DISLIKE</button>
      </div>
        );
    }
}
export default Inputlike;