import React, {Fragment, useState} from 'react';
import ReactDOM from 'react-dom';
import './main.css'
import LinkCard from './components/linkCard';
// Parcel is nice for smaller scale bundling instead of Babel

// Create the App

const App = () => {
    const [cardData, setCardData] = useState([{ 
        linkName: 'my link', 
        linkHref: 'https://github.com'
    }])
    
    const [newCard, setNewCard] = useState({
        linkName: '',
        linkHref: ''
    })

    const dispatchCardSet = (payload) => {
        let oldArray = cardData;
        let newArray = [...oldArray, payload];
        setCardData(newArray)
        setNewCard({linkName: '', linkHref: ''})
    }

    return(
        <Fragment>
            <nav className="navigation">
                <a><img height="40px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></a>
                <ul>
                    <li>HOME</li>
                </ul>
            </nav>
            <main>
                <div className="leftContent">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h2 className="formTitle">Add a bookmark</h2>
                        <div>
                            <label 
                                htmlFor="linkTitle" 
                                className="formLabel">Enter Bookmark Name </label>
                            <input 
                                value={newCard.linkName}
                                onChange={e => setNewCard({...newCard, linkName: e.currentTarget.value})}
                                type="text"
                                name="linkTitle"
                                minLength="1"
                                maxLength="25"
                                placeholder="25 characters max"
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="linkHref" 
                                className="formLabel">Enter Bookmark Name </label>
                            <input
                                value={newCard.linkHref} 
                                onChange={e => setNewCard({ ...newCard, linkHref: e.currentTarget.value})}
                                type="text"
                                name="linkHref"
                                minLength="7"
                                placeholder="https://example.com"
                            />
                        </div>
                        <button onClick={() => dispatchCardSet(newCard)}>Add</button>
                    </form>
                </div>

                <div className="rightContent">
                    <LinkCard cards={cardData}/>
                </div>
            </main>
        </Fragment>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)