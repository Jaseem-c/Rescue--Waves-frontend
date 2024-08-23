import { faAngleUp, faMessage, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import '../Components/Chatbox.css'

function Chatbox() {
    const [open, setOpen] = useState(false);

    return (
        <>

            {/* Button - fixed at the bottom-right corner */}
            <div
                className='bg-success d-flex align-items-center justify-content-center'
                onClick={() => setOpen(!open)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    zIndex: 1000,
                    cursor: "pointer"
                }}
            >
                {!open ? <FontAwesomeIcon icon={faMessage} className='fa-2x text-light' /> : <FontAwesomeIcon icon={faX} className='fa-2x text-light' />}
            </div>

            {/* Collapsible chat window - appears above the button */}
            <Collapse in={open}>
                <div
                    id="example-collapse-text"
                    className='bg-light w-sm-75 w-md-50 w-lg-25 ms-3 ms-md-0 '
                    style={{
                        position: 'fixed',
                        bottom: '100px', // Position the chat window above the button
                        right: '20px',
                        zIndex: 999, // Lower z-index to stay behind the button
                        borderRadius: '10px',
                        border: "1px solid green",
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div style={{ color: 'black', }}>
                        <h5 className='mt-3 text-center'>Chat Window</h5>
                        <div className="card-body p-3" style={{ flex: 1, overflowY: 'auto' }}>
                            {/* Chat Messages */}
                            <div className="chat-message">
                                <div className="admin-message mb-2">
                                    <div className="bg-primary text-white p-2 rounded d-inline-block">
                                        <strong>Admin:</strong> Hello! How can I assist you today?
                                    </div>
                                </div>
                                <div className="user-message text-right mb-2 ">
                                    <div className="bg-secondary text-white p-2 rounded d-inline-block" style={{ right: 0 }}>
                                        Hi, I need help with my order.
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-white my-4">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Type a message..." />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </>
    )
}

export default Chatbox