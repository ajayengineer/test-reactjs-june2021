import React, {} from 'react';

class ChildComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1> Child Component  Name:  {this.props.ChildName}</h1>
                <h1> Child Component Number: {this.props.ChildNumber}</h1>
            </div>
        )   
    }

}

export default ChildComponent;