import React from 'react';

import Maliste from './liste';
/*import ReadJson from './ReadJson';

const App = () => <><h1>affiche mes listes</h1>
    <Maliste />
    <ReadJson json={{ table: [{ name: 'hatem', age: '44' }, { name: 'houcine', age: '70' }] }} />
</>
    ;*/
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, value: '' };
    }
    render() {
        const nombre = this.state.count ? new Array(this.state.count).fill(0).map((_, i) => i) : []
        return (<>
            <button onClick={e => {
                e.preventDefault(); //annuler le comportement par defaut
                e.stopPropagation();// a voir au profondeur
                this.setState({ count: this.state.count + 1 });
            }} >
                onClick
                </button>
            <input type="text" onChange={e => this.setState({ value: e.target.value })}></input>
            <div>
                {this.state.count}
                {this.state.value}
            </div>
            <div>
                <Maliste titre={`vous avez clique ${this.state.count} fois`} numbers={nombre} />
            </div>
        </>

        );
    }
}

export default App;
