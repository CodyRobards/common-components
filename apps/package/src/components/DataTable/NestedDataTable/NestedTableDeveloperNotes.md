# Developer Notes for NestedDataTable April 30, 2025

## Work Notes
Styling is mostly completed. There is a margin issue when minifying the website window,
the subtable margin may need to be fied with a media query as it still a -2 px.

Focus on adding props that directly deal with the user adjusting the css. Such as the background colors or the zebra color patttern
For both the primary datatable and sub table.

Focus on memofying the array operations for filtering. use useMemo as reference-
https://react.dev/reference/react/useMemo
Apply filtering and sorting if needed

Example of Data Array and columns array is below for component implementation:

`const data: DataType[] = [`
 ` {`
 `   id: 1,`
 `   Platform: "U-2",`
 `   MissionDate: "01/01/1011",`
`  ModifiedDate: "01/02/1011",`
`   AOR: "ABC",`
`    MissionClassification: "CUI",`
`    Creator: "TSgt Luke Murphy",`
`    Details: {`
`      relationId: 1,`
`      FileName: "ABC123",`
`      UploadTime: "0123",`
`      UploadDate: "01/01/2023",`
`      FileSize: "64MB",`
`      FileType: "File",`
`      Uploader: "Uploader",`
`      TailNumber: "093",`
`      FileClassification: "Class",`
`      DownloadCount: "2",`
`    },`
`  },`
`];`

`const columns = [`
`{`
`   key: "Platform",`
`   title: "Platform",`
`   subDataTableColumn: false,`
`   width: "50px",`
`},`
`];`

`<NestedDataTable data={data} columns={columns} />`


