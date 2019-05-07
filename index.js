import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
// Parcel is nice for smaller scale bundling instead of Babel

// Create the App

const App = () => {
    return(
        <Fragment>
            <nav>
                <a><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></a>
            </nav>
        </Fragment>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)