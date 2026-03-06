import React from 'react';

function Navbar(props) {
    return (
        <div className='flex justify-between px-18 py-8'>
            <h4 className='bg-black text-white rounded-full px-4 uppercase py-4'>Target Audience</h4>
            <button className='bg-gray-200 text-black rounded-full px-4 py-4 tracking-widest uppercase text-sm'>Digital Banking Plattform</button>
            
        </div>
    );
}

export default Navbar;