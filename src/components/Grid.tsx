import { User } from '../data/Types'

function Grid(props: {Users: User[]}) {
    console.log({props})
    return (
        <div className="App">
            <h1>Hello World</h1>
        </div>
    );
}

export default Grid;
