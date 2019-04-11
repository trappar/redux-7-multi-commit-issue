import React, {Component} from 'react';
import store from './store';
import {Provider} from 'react-redux'
import ValueDisplay from "./ValueDisplay";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ValueDisplay>
                        <ValueDisplay>
                            <ValueDisplay>
                                <ValueDisplay/>
                            </ValueDisplay>
                        </ValueDisplay>
                    </ValueDisplay>
                    <br/>
                    <button onClick={() => store.dispatch({type: 'INCREMENT'})}>Increment</button>
                </div>
            </Provider>
        );
    }
}

export default App;
