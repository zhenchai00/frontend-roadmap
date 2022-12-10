// https://github.com/nishant-666/Passing-data-in-React
import React from 'react'
import { Button } from 'semantic-ui-react';

export default function Child({childToParent}) {
    const data = 'This is data from Parent Component to the Child Component.';
    return (
        <div>
            <Button primary onClick={() => childToParent(data)}>Click Child</Button>
        </div>
    )
}