import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Word } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
 import { addWord } from '../api/wordapi';
 import WordDialogContent from './WordDialogContent';
 import Button from '@mui/material/Button';


function AddWord() {

    const queryClient = useQueryClient();
    // Add inside the AddCar component function
    const { mutate } = useMutation(addWord, {
     onSuccess: () => {
       queryClient.invalidateQueries(["words"]);
     },
     onError: (err) => {
       console.error(err);
     },
    });

     // Open the modal form
 const handleClickOpen = () => {
    setOpen(true);
   };
    
  // Close the modal form
   const handleClose = () => {
    setOpen(false);
 };

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

    const handleSave = () => {
        mutate(word);   
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
    handleClose();
 }
        

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
            setWord({...word, [event.target.name]:
             event.target.value});
        }

 return(
   <>
    <Button onClick={handleClickOpen}>New Word</Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Word</DialogTitle>
      <WordDialogContent word={word} handleChange={handleChange}/>
      <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleSave}>Save</Button>
         </DialogActions>
 
    </Dialog>


   </>
 );
}
export default AddWord;