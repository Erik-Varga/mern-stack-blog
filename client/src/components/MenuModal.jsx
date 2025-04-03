import React from 'react'
import { IoClose } from 'react-icons/io5';

const MenuModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className='flex items-center justify-end mr-2'>
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {/* <button className="modal-close" onClick={onClose}>
                        {isOpen ? <IoClose className='text-2xl' /> : ""}
                        </button> */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MenuModal