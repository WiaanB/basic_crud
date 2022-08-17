import { User } from '../data/Types'
import grid_settings from '../data/GridSettings'
import { useEffect, useState } from 'react'

function Grid(props: {Users: User[]}) {
    const [columns,setColumns] = useState<any>([])

    // setup of the basics of the grid
    useEffect(() => {
        setupGridColumns();
    },[])

    function setupGridColumns() {
        let cols = grid_settings.columns ?? [];
        cols.sort((a,b) => Number(a) - Number(b) ).map(col => {
            let formattedCol:any = {
                col_field: col.field,
                col_type: col.type
            }
            formattedCol.col_title = col.title ? col.title:col.field
            formattedCol.col_hidden = col.hidden ? col.hidden:false
            return formattedCol
        })
        console.log({cols})
        setColumns(cols);
    }
    return (
        <div className="grid-main">
            <div className="grid-container">
                <div className="grid-columns" style={{ gridTemplateColumns: `repeat(${columns.filter((e:any) => e.hidden === false).length})` }}>
                    {columns.length && columns.map((col:any) => {
                        console.log(col)
                        return <li>{col.col_title}</li>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Grid;
