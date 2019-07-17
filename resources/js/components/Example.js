import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'

const Example = (props) => {
        console.log(props)
        const prop=JSON.parse(props.tutors)
        return (
            <div>
                {prop.map((tutor,index)=><Card key="index" tutor={tutor}/>)}
            </div>
            
        );
}

export default Example

if (document.getElementById('example')) {
    const el =  document.getElementById('example')
    const props = Object.assign({}, el.dataset)
    ReactDOM.render(<Example {...props}/>,el);
}
