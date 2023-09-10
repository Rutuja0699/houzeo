import React from 'react';
import VideoList from '../VideoList';

function RPRS(){
    return(
        <div className='rprs'>
                        <h3 style={{textAlign: 'left', paddingLeft: '14px'}}>Real people. Real Stories.</h3>
                        <p  style={{textAlign: 'left', paddingLeft: '14px',paddingRight: '14px'}}>See how buyers & sellers across America are saving on commision using Houzeo technology.</p>
                        <VideoList />
                        <a href='#' style={{textAlign: 'end', backgroundColor: 'yellow'}}>View All Stories </a>

        </div>
    )
}

export default RPRS;