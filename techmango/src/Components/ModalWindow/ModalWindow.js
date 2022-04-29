import './Modal.css';
import Logo from '../Logo/Logo';

const ModalWindow = ({ setIsOpen }) => {

  return (
    <div className="modal-body">
      <Logo />
      <img className="modal-close-icon" onClick={() => setIsOpen(false)} src={require('./icons/Group110.png')} alt="" />
    </div>
  );
}

export default ModalWindow;