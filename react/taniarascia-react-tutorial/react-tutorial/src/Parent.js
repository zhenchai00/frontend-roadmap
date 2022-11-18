// https://github.com/nishant-666/Passing-data-in-React

import React, { useState } from 'react';
import Child from './Child';
import { Button } from 'semantic-ui-react';
// import './App.css';

export default function Parent () {
    const [data, setData] = useState('');
    // const parentToChild = () => {
    //     setData('This is data from Parent Component to the Child Component.');
    // }
    const childToParent = (chliddata) => {
        setData(chliddata);
    }

    return (
        <div className='App'>
            {data}
            <div>
                <Child childToParent={childToParent}/>
            </div>
        </div>
    );
}