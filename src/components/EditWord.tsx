import { useState } from 'react';
 import Dialog from '@mui/material/Dialog';
 import DialogActions from '@mui/material/DialogActions';
 import DialogTitle from '@mui/material/DialogTitle';
 import { Word, WordResponse, WordEntry } from '../types';
 import WordDialogContent from './WordDialogContent';
 import { updateWord } from '../api/wordapi';
 import { useMutation, useQueryClient } from '@tanstack/react-query';
 import Button from '@mui/material/Button';
 import IconButton from '@mui/material/IconButton';
 import EditIcon from '@mui/icons-material/Edit';
 import Tooltip from '@mui/material/Tooltip';


 type FormProps = {
  cardata: WordResponse;
 }

 function EditWord({ cardata }: FormProps) {

// Get query client
const queryClient = useQueryClient();
// Use useMutation hook
const { mutate } = useMutation(updateWord, {
 onSuccess: () => {
   queryClient.invalidateQueries(["words"]);
 },
 onError: (err) => {
   console.error(err);
 }
});

  const [open, setOpen] = useState(false);
  const [word, setWord] = useState<Word>({
    chinese: '',
    pinyin: '',
    definition: '',
    sen1chi: '',
    sen1pin: '',
    sen1eng: '',
    sen2chi: '',
    sen2pin: '',
    sen2eng: ''
  });
 

const handleClose = () => {
  setOpen(false);
};
       
const handleSave = () => {
    const url = cardata._links.self.href;
    const wordEntry: WordEntry = {word, url}
    mutate(wordEntry);
    setWord({ 
        chinese: '',
        pinyin: '',
        definition: '',
        sen1chi: '',
        sen1pin: '',
        sen1eng: '',
        sen2chi: '',
        sen2pin: '',
        sen2eng: ''
    });
    setOpen(false);
   }

const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setWord({...word, [event.target.name]: event.target.value});
    }

    const handleClickOpen = () => {
      setOpen(true);
      setWord({
        chinese: cardata.chinese,
        pinyin: cardata.pinyin,
        definition: cardata.definition,
        sen1chi: cardata.sen1chi,
        sen1pin: cardata.sen1pin,
        sen1eng: cardata.sen1eng,
        sen2chi: cardata.sen2chi,
        sen2pin: cardata.sen2pin,
        sen2eng: cardata.sen2eng
      });
    };


    // render CarDialogContent inside the Dialog
    return(
     <>
      <Tooltip title="Edit word">

   <IconButton aria-label="edit" size="small"
      onClick={handleClickOpen}>
      <EditIcon fontSize= "small" />
    </IconButton>
    </Tooltip>
       <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Edit car</DialogTitle>
         <WordDialogContent word={word} handleChange={handleChange}/>
         <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={handleSave}>Save</Button>
         </DialogActions>
       </Dialog>
     </>
    );
}

export default EditWord;






