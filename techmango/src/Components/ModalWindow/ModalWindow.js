import './Modal.css';

const ModalWindow = (setIsOpen) => {
  return (
    <div>
      <div className='modal-body'>
        <div className="modal-close" onClick={() => setIsOpen(false)}>
          <img src={require("./icons/Group 110.svg")} alt="" />
          <h1>Ggggggggggggggggg</h1>
        </div>
      </div>
    </div>
  );
}
 
export default ModalWindow;