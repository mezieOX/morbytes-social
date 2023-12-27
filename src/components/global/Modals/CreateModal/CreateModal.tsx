import { Button } from "../../Button";
import MyDialog from "../Modals";

const CreateModal = ({ onClose, isOpen }: any) => {
  return (
    <MyDialog onClose={onClose} isOpen={isOpen}>
      <div></div>
      <div>
        <div>
          Drag your image or videos here
          <p>Or</p>
          <Button variant="primary">Select from your Computer</Button>
        </div>
      </div>
    </MyDialog>
  );
};

export default CreateModal;
