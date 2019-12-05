import React from 'react';


class ReadJson extends React.Component {
    render() {
        const data = this.props.json;
        const tablejson = json => json.table.map(
            a => <><tr><td>{`${a.name}`}</td>
                <td>{`${a.age}`}</td></tr></>
        );
        return (<table>{tablejson(data)}</table>)
    }
}
export default ReadJson;