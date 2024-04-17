import { FC } from "react"
import { CButton, CSmartTable } from '@coreui/react-pro'
import { TableProps } from "@mui/material"
import { CAvatar } from "@coreui/react"

const DumbTable: FC<TableProps<any>> = ({ column, data, navigate }) => (
    <CSmartTable
        activePage={2}
        cleaner
        clickableRows
        columns={column}
        columnFilter
        columnSorter
        footer
        items={data}
        itemsPerPageSelect
        itemsPerPage={10}
        pagination
        scopedColumns={{
            avatar: (item: any) => (
              <td>
                <CAvatar src={item.avatar} />
              </td>
            ),
            show_details: (item: any) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => navigate(item.id)}
                  >
                    Edit
                  </CButton>
                </td>
              )
            }
          }}
        
        selectable
        sorterValue={{ column: 'status', state: 'asc' }}
        tableFilter
        tableProps={{
            className: 'add-this-class',
            responsive: true,
            striped: true,
            hover: true,
        }}
        tableBodyProps={{
            className: 'align-middle'
        }}
    />
)

export default DumbTable