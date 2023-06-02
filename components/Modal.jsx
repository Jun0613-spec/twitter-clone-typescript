import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
const Modal = ({ isOpen, onClose, onSubmit, title, body, actionLabel, footer, disabled, }) => {
    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        onClose();
    }, [onClose, disabled]);
    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }
        onSubmit();
    }, [onSubmit, disabled]);
    if (!isOpen) {
        return null;
    }
    return (<>
      <div className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          dark:bg-neutral-800
          bg-white
          bg-opacity-70
        ">
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/*content*/}
          <div className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            dark:bg-black 
            bg-white
            outline-none 
            focus:outline-none
            ">
            {/*header*/}
            <div className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              ">
              <h3 className="text-3xl font-semibold dark:text-white text-black">
                {title}
              </h3>
              <button className="
                  p-1 
                  ml-auto
                  border-0 
                  dark:text-white
                  text-black 
                  hover:opacity-70
                  transition
                " onClick={handleClose}>
                <AiOutlineClose size={20}/>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button disabled={disabled} label={actionLabel} secondary fullWidth large onClick={handleSubmit}/>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>);
};
export default Modal;