import React from "react"
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header />
                </div>
                <Order />
                <Inventory />
                {/* <p>Lurantis is owned by Mia, who happened to catch it on accident because the pokemon looks like a flower.</p> */}
            </div>
        )
    }
};

export default App;