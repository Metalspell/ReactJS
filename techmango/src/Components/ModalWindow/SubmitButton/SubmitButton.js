import classes from './SubmitButton.module.css';
import Button from '@mui/material/Button';

const SubmitButton = () => {
  return (
    <Button
      aria-label='submit'
      variant="contained"
      size='large'
      type="submit"
      className={classes.button}
    >
      <h3 className={classes.buttonTitle}>SEND</h3>
      <img className={classes.buttonArrow} src={require('../icons/Vector10.png')} alt="" />
    </Button>
  );
}

export default SubmitButton;