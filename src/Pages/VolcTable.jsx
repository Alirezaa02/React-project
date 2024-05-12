import React from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const VolcTable = ({ volcanoes }) => {
  const navigate = useNavigate();

  const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Region", field: "region", sortable: true, filter: true },
    { headerName: "Subregion", field: "subregion", sortable: true, filter: true },
  ];

  const onRowClicked = (event) => {
    if (event.data && event.data.id) {
      navigate(`/volcano/${event.data.id}`);
    }
  };

  return (
    <div className="ag-theme-quartz" style={{ height: "300px", width: "600px" }}>
      <AgGridReact
        rowData={volcanoes}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
        enableSorting={true}
        enableFilter={true}
        onRowClicked={onRowClicked}
      />
    </div>
  );
};

export default VolcTable;
