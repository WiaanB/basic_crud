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
        cols = cols.sort((a,b) => Number(a) - Number(b) ).map(col => {
            let formattedCol: any = {
                col_title: col.title ? col.title:col.field,
                col_hidden: col.hidden ? col.hidden:false,
                col_field: col.field,
                col_type: col.type
            }
            // format the title
            formattedCol.col_title = formattedCol.col_title.charAt(0).toUpperCase() + formattedCol.col_title.slice(1)
            switch (col.normalizer) {
                case "uppercase":
                    formattedCol.col_title = formattedCol.col_title.toUpperCase()
                    break
                default:
                    break
            }
            return formattedCol
        })
        setColumns(cols);
    }
    return (
        <div className="grid-main">
            <div className="grid-container">
                <div className="grid-columns" style={{ gridTemplateColumns: `repeat(${columns.filter((e:any) => e.hidden === false).length})` }}>
                    {columns.length && columns.map((col:any) => {
                        return <li>{col.col_title}</li>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Grid;
