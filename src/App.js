import React, {useState, useMemo} from 'react'
import './App.css'
import 'h8k-components'

import Articles from './components/Articles'

const title = 'Sorting Articles'

function App({articles}) {

    const [items, setItem] = useState(articles)

    const sortbyVotes = () => {
        setItem(items.slice().sort((a, b) => a.upvotes - b.upvotes))
    }

    const sortByDate = () => {
        setItem(items.slice().sort((a, b) => a.date > b.date ? 1 : -1))
    }

    const sorted = useMemo(() => <Articles articles={items}/>, [items])

    return (
        <div className="App">
            <h8k-navbar header={title}/>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={sortbyVotes}>Most Upvoted
                </button>
                <button data-testid="most-recent-link" className="small" onClick={sortByDate}>Most Recent</button>
            </div>
            {sorted}
        </div>
    )

}

export default App

