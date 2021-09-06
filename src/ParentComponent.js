import React, {} from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h1> Parent Component {this.props.name}</h1>

                Inserted Child:  <ChildComponent ChildName="Maitri Rai" ChildNumber='555' />
            </div>
        )   
    }

}

export default ParentComponent;