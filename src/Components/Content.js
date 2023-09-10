import React from 'react';
import Info from './Info';
import RPRS from './RPRS';
import Showing from './Showing';
import BelowNav from './BelowNav';

function Content() {
    return (
        <div className='content'>
            <BelowNav />
            <div className='try'>
                <Info />
                <div className='rightPanel'>
                    <Showing />
                    {/* <RPRS /> */}
                </div>
            </div>
        </div>
    )
}

export default Content;