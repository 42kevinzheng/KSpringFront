import { DataGrid, GridColDef, GridCellParams, GridToolbar } from '@mui/x-data-grid';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWords, deleteWord } from '../api/wordapi';
import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';
import AddWord from './AddWord';
import EditWord from './EditWord';
import IconButton from '@mui/material/IconButton';
 import DeleteIcon from '@mui/icons-material/Delete';
 import Tooltip from '@mui/material/Tooltip';
 import Button from '@mui/material/Button';
 import Stack from '@mui/material/Stack';


 type WordlistProps = {
  logOut?: () => void;
 };


function WordList({ logOut }: WordlistProps) {
    const queryClient = useQueryClient();
    const [open, setOpen] = useState(false);

      const { data, error, isSuccess } = useQuery({
        queryKey: ["words"], 
        queryFn: getWords
      });


      const { mutate } = useMutation(deleteWord, {
        onSuccess: () => {
            setOpen(true);
            queryClient.invalidateQueries({ queryKey: ['words'] });
         },
         onError: (err) => {
           console.error(err);
         },
      });

      const columns: GridColDef[] = [
        {field: 'chinese', headerName: 'Chinese', width: 200},
        {field: 'pinyin', headerName: 'Pinyin', width: 200},
        {field: 'definition', headerName: 'Definition', width: 250},
        {field: 'sen1chi', headerName: 'Sentence 1 - Chinese', width: 300},
        {field: 'sen1pin', headerName: 'Sentence 1 - Pinyin', width: 300},
        {field: 'sen1eng', headerName: 'Sentence 1 - English', width: 300},
        {field: 'sen2chi', headerName: 'Sentence 2 - Chinese', width: 300},
        {field: 'sen2pin', headerName: 'Sentence 2 - Pinyin', width: 300},
        {field: 'sen2eng', headerName: 'Sentence 2 - English', width: 300},
        {
            field: 'edit',
            headerName: 'Edit',
            width: 90,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => 
              <EditWord cardata={params.row} />
          },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 90,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => (
              <Tooltip title="Delete word">

              <IconButton aria-label="delete" size="small"
              onClick={() =>  {
                    if (window.confirm(`Are you sure you want to delete ${params.row.chinese} ${params.row.definition}?`)) {
                    mutate(params.row._links.word.href);
                }
            }}
                >
                        <DeleteIcon fontSize="small" />

              </IconButton>
              </Tooltip>
            ),
          },
       ];

      if (!isSuccess) {
        return <span>Loading...</span>
       }
       else if (error) {
        return <span>Error when fetching words...</span>
       }
       else {
        return ( 
            <>
                 <Stack direction="row" alignItems="center"
          justifyContent="space-between">
            <AddWord />
            <Button onClick={logOut}>Log out</Button>
          </Stack>
            <DataGrid
            rows={data}
            columns={columns}
            getRowId={row => row._links.self.href}
            disableRowSelectionOnClick={true}
            slots={{ toolbar: GridToolbar }}
            />
            <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={() => setOpen(false)}
            message="Word deleted" />
        </>
        );
       }
   }
   export default WordList;