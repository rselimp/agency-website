import React from 'react';

const Contact = () => {
    return (
        <div className='px-10 mx-auto mt-10'>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Full Name</span>
            </label>
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xl" />
        </div>
        <div className="form-control">  
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered w-full max-w-xl" />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Message</span>
            </label>
            <textarea className="textarea textarea-bordered w-full max-w-xl" placeholder="Type your message"></textarea>
        </div>
        <button className='btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-4 mb-4' type="submit">Send</button>
    </div>
    );
};

export default Contact;