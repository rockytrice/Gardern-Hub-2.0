import React from "react";
import Header from "./components/Header"

export default ({children}) => {

//	The message: {this.state.msg}
    return (
    <div>
        <Header />
      <br/> 
      <br/>
      <br/>
        {children} 
    </div>
    );
   
};




