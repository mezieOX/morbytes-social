"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MyDialog({ children, onClose, isOpen = false }: any) {
  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} className={"fixed"}>
      <Dialog onClose={onClose}>
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0  bg-black/30" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel
            className={
              "flex justify-center items-center w-[60%] rounded-2xl h-[40rem] mx-auto text-center bg-dark"
            }
          >
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
