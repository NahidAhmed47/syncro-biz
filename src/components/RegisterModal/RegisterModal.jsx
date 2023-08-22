import React from "react";

const RegisterModal = () => {
  return (
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box bg-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
  );
};

export default RegisterModal;