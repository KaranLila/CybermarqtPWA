import React from 'react';
import {Container} from 'react-bootstrap';

// Wrapping the components for similar look
//Bootstrap Container. 
/*In Bootstrap, container is used to set the content's margins dealing with the responsive behaviors of your layout. 
It contains the row elements and the row elements are the container of columns (known as grid system). 
The container class is used to create boxed content.*/

export const Layout =(props) => (   // Props are properties that get passed to the component
    <Container>
        {props.children}                
    </Container>
)


// the container element centers the text on the page