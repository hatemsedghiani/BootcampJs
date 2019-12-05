
import React from 'react';

class MaListe extends React.Component {
    render() {
        const titre = this.props.titre;
        const data = this.props.numbers.map(n => <li>{`${titre} ${n}`} </li>);
        return (
            <>
                <h1>{titre}</h1>
                <ul>
                    {data}
                </ul>
            </>
        );
    }
}

export default MaListe;