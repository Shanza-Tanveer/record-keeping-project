import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import FormData from './FormData';
import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, { name, email }]);
    setName('');
    setEmail('');
  };
  return (
    <>
      <div className='form'>
        <Stack direction='row' spacing={2}>
          <TextField
            id='name'
            value={name}
            label='Name'
            variant='outlined'
            fullWidth
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='email'
            value={email}
            label='Email'
            variant='outlined'
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button color='success' variant='contained' onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      <div className='form-title'>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Delete</h4>
      </div>
      {data.map((element, index) => {
        return (
          <FormData key={index} name={element.name} email={element.email} />
        );
      })}
    </>
  );
};

export default Form;
