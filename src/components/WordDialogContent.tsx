import { Word } from '../types';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
 import Stack from '@mui/material/Stack';

 type DialogFormProps = {
  word: Word;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    void;
 }
 function WordDialogContent({ word, handleChange }: DialogFormProps) {
  return (
    <>
         <DialogContent>
                <Stack spacing={2} mt={1}>
                <TextField label="Chinese" name="chinese" value={word.chinese} onChange={handleChange}/>
                <TextField label="Pinyin" name="pinyin" value={word.pinyin} onChange={handleChange}/>
                <TextField label="Definition" name="definition" value={word.definition} onChange={handleChange}/>
                <TextField label="Sentence 1 - Chinese" name="sen1chi" value={word.sen1chi} onChange={handleChange}/>
                <TextField label="Sentence 1 - Pinyin" name="sen1pin" value={word.sen1pin} onChange={handleChange}/>
                <TextField label="Sentence 1 - English" name="sen1eng" value={word.sen1eng} onChange={handleChange}/>
                <TextField label="Sentence 2 - Chinese" name="sen2chi" value={word.sen2chi} onChange={handleChange}/>
                <TextField label="Sentence 2 - Pinyin" name="sen2pin" value={word.sen2pin} onChange={handleChange}/>
                <TextField label=" Sentence 2 - English" name="sen2eng" value={word.sen2eng} onChange={handleChange}/>
                </Stack>
          </DialogContent>
    </>
  );
 }
 export default WordDialogContent;