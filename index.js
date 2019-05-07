import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// Parcel is nice for smaller scale bundling instead of Babel

// Create the App

const App = () => {
    return(
        <Fragment>
            <h1>Hello World!</h1>
        </Fragment>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)