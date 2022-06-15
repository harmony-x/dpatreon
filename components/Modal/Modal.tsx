import {
  FC,
  Fragment,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalProps } from "./Modal.types";
import ModalClose from "$svg/modal_close";

const Modal: FC<ModalProps> = ({
  setIsOpen,
  isOpen,
  title,
  children,
}) => {

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto overflow-x-hidden min-h-screen mx-auto w-full py-6"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-200"
          leave="ease-in duration-300"
          leaveFrom="opacity-200"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black overflow-x-hidden opacity-30 mx-auto" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className='md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 m-auto w-11/12 max-w-5xl py-9 md:py-12 lg2:py-14 px-6 md:px-12 lg:px-20 bg-white rounded-4xl'>
            <button onClick={() => setIsOpen(false)}>
              <ModalClose className="top-8 right-8 absolute w-10 h-10" />
            </button>
            <div className="">
              <Dialog.Title className="sr-only">
                {title}
              </Dialog.Title>
            </div>
            {children}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
