import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const FormData = (props) => {
  return (
    <>
      <div className='form-data'>
        <p>{props.name}</p>
        <p>{props.email}</p>
        <Button color='error' variant='contained'>
          <DeleteIcon />
        </Button>
      </div>
    </>
  );
};

export default FormData;
