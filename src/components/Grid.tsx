import { User } from '../data/Types'
import grid_settings from '../data/GridSettings'
import { useEffect, useState } from 'react'
import { flattenObject } from '../js/utility'

function Grid(props: { Users: User[] }) {
    const [columns, setColumns] = useState<{[key: string]: any}>([])
    const [visibleColumns, setVisibleColumns] = useState<{[key: string]: any}>([])

    // setup of the basics of the grid
    useEffect(() => {
        setupGridColumns();
    }, [])

    function setupGridColumns() {
        let cols = grid_settings.columns ?? [];
        cols = cols.sort((a, b) => Number(a) - Number(b)).map(col => {
            let formattedCol: any = {
                col_title: col.title ? col.title : col.field,
                col_hidden: col.hidden ? col.hidden : false,
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
        setVisibleColumns(cols.filter((e: {[key: string]: any}) => e.col_hidden === false))
        setColumns(cols);
    }
    return (
        <div className="grid-main">
            <div className="grid-container">
                <div className="grid-columns" style={{ gridTemplateColumns: `repeat(${visibleColumns.length}, 1fr)` }}>
                    {visibleColumns.length && visibleColumns.map((col: {[key: string]: any}) => {
                        return <li key={`${col.col_title}-header`} className="grid-column-header">{col.col_title}</li>
                    })}
                </div>
                <div className="grid-column-values">
                    {props.Users && props.Users.length && props.Users.map((user: User) => {
                        let flatUser: {[key: string]: any} = flattenObject(user)
                        return <div className="grid-columns" style={{ gridTemplateColumns: `repeat(${visibleColumns.length}, 1fr)` }}>{
                            visibleColumns.length && visibleColumns.map((col: {[key: string]: any}, index: string) => {
                                let value = String(flatUser[col.col_field])
                                return <li key={`${col.col_title}-${value}-${index}`} className="grid-column-header">{value}</li>
                            })
                        }</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Grid;
