import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"


const VolcTable = ({ volcanoes }) => {
    const columns = [
        { headerName: "Name", field: "name", sortable: true, filter: true  },
        { headerName: "Region", field: "region", sortable: true, filter: true  }, 
        { headerName: "Subregion", field: "subregion", sortable: true, filter: true  } 
    ];

    return (
        <div className="ag-theme-quartz" style={{ height: "300px", width: "600px" }}>
            <AgGridReact
                rowData={volcanoes}
                columnDefs={columns}
                pagination={true}
                paginationPageSize={10}
                enableSorting={true}
                enableFilter={true}
            />
        </div>
    );
};

export default VolcTable;
