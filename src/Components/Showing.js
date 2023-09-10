import React from 'react';
import './styles.css'
import DateSlider from './DateSlider';

function Showing() {
    return (
        <div className='show'>
            <h3 style={{ textAlign: 'left', paddingLeft: '14px' }}>Schedule a showing</h3>
            <DateSlider />
        </div>
    )
}

export default Showing;