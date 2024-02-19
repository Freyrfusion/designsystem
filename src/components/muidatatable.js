import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Box from "@mui/material/Box";
import { FilterAlt } from "@mui/icons-material";
import {
  DataGridPremium,
  GridToolbar,
  GridToolbarQuickFilter,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
  GridActionsCellItem,
} from "@mui/x-data-grid-premium";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function CustomActionsIcon() {
  return <DeleteOutlineIcon sx={{ fontSize: 25 }} />;
}
const FilterAltIconComp = () => <FilterAlt></FilterAlt>;

const columns = [
  {
    field: "field2",
    headerName: "Application",
    width: 140,
    renderCell: (params) => (
      <a href="${params.row.field2}">{params.row.field2}</a>
    ),
  },
  { field: "field3", headerName: "Product Name", width: 220 },
  { field: "field4", headerName: "Market", width: 120 },
  { field: "field5", headerName: "Application Type", width: 240 },
  {
    field: "field6",
    headerName: "Created Date",
    width: 120,
  },
  {
    field: "field7",
    headerName: "Due Date",
    width: 120,
  },
  {
    field: "field8",
    headerName: "Published Date",
    width: 120,
  },
  {
    field: "field9",
    headerName: "Due Date",
    width: 120,
  },
  {
    field: "field10",
    headerName: "Published Date",
    width: 120,
  },
  {
    field: "actions",
    type: "actions",
    width: 100,
    headerName: "Actions",
    getActions: (cell) => [
      <GridActionsCellItem
        showInMenu
        label="Delete"
        icon={<DeleteOutlineIcon />}
      />,
      <GridActionsCellItem showInMenu label="Edit" icon={<EditIcon />} />,
      <GridActionsCellItem
        showInMenu
        label="View"
        icon={<RemoveRedEyeIcon />}
      />,
    ],
  },
];

const rows = [
  {
    id: 1,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 2,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 3,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 4,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 5,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 6,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 7,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 8,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 9,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 10,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 11,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 12,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 13,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 14,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 15,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
  {
    id: 16,
    field2: "155723",
    field3: "Ivermectin",
    field4: "USFDA",
    field5: "New drug application (USFDA)",
    field6: "12-22-2023",
    field7: "12-22-2023",
    field8: "12-22-2023",
    field9: "12-22-2023",
    field10: "12-22-2023",
  },
];
export default function DataGridPremiumDemo() {
  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 100000,
  //   editable: true,
  // });

  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 100000,
  //   editable: true,
  // });

  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Default", "Primary", "Outlined", "Link Button"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;

  // Start Checkboxes
  const basiccheckboxes = `// To use mui texarea-autosize import texarea-autosize component from mui
  import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

  //React MUI component code
  export default function MinHeightTextarea() {
    return (
      export default function DataGridPremiumDemo() {
        const { data, loading } = useDemoData({
          dataSet: "Commodity",
          rowLength: 100,
          editable: true,
          visibleFields: [
            "commodity",
            "quantity",
            "filledQuantity",
            "status",
            "isFilled",
            "unitPrice",
            "unitPriceCurrency",
            "subTotal",
            "feeRate",
            "feeAmount",
            "incoTerm",
          ],
        });
        const apiRef = useGridApiRef();
      
        const initialState = useKeepGroupedColumnsHidden({
          apiRef,
          initialState: {
            ...data.initialState,
            rowGrouping: {
              ...data.initialState?.rowGrouping,
              model: ["commodity"],
            },
            sorting: {
              sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
            },
            aggregation: {
              model: {
                quantity: "sum",
              },
            },
          },
        });
        <Box sx={{ height: 520, width: "100%" }}>
        <DataGridPremium
          {...data}
          apiRef={apiRef}
          loading={loading}
          disableRowSelectionOnClick
          className="react-table"
          initialState={initialState}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
  );
}`;
  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const basic_checkbox = {
    code: (
      <CopyBlock
        language={language}
        text={basiccheckboxes}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div>
      <div className="content-header">
        <h1 className="heading"> Data Grid </h1>

        <p className="text ">
          A fast and extendable react data table and react data grid. It's a
          feature-rich component available in MIT or Commercial versions.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <div className="row ">
            <div className="col-12">
              <section className="">
                <div className="collapsible-code">
                  <div className="row m-t-20 m-l-10">
                    <div className="col-12">
                      {/* <Box sx={{ height: 520, width: "100%" }}>
                        <DataGridPremium
                          {...data}
                          apiRef={apiRef}
                          loading={loading}
                          disableRowSelectionOnClick
                          className="react-table" 
                          initialState={initialState}
                          slots={{ toolbar: GridToolbar }}
                        />
                      </Box> */}
                    </div>
                  </div>

                  <CollapsibleCode codeItem={basic_checkbox} />
                </div>
              </section>
            </div>
          </div>

          <Box sx={{ height: 620, width: "100%" }}>
            <DataGridPremium
              checkboxSelection
              rows={rows}
              columns={columns}
              className="react-table"
              slots={{
                toolbar: GridToolbar,
                MoreActionsIcon: CustomActionsIcon,
              }}
              initialState={{
                pinnedColumns: { right: ["actions"] },
                pagination: { paginationModel: { pageSize: 10 } },
                columns: {
                  columnVisibilityModel: {
                    // Hide columns status and traderName, the other columns will remain visible
                    field7: false,
                    field8: false,
                    field9: false,
                    field10: false,
                  },
                },
              }}
              slotProps={{
                toolbar: {
                  showQuickFilter: true,
                  filterModel: true,
                },
              }}
              pagination
              pageSizeOptions={[5, 10, 15, 20]}
            />
          </Box>

          <hr className="section-border-bottom"></hr>
          <div className="row">
            <div className="col-12 m-t-10">
              <h3 className="sub-heading">
                React Material UI Component Library
              </h3>
              <p className="text">
                For more information, you may refer MUI component page by
                clicking below link.
              </p>

              <div className="notification-main">
                <div className="notification-content">
                  <a href="https://mui.com/x/react-data-grid/" target="blank">
                    MUI Data Grid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
