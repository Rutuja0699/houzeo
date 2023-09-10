import React, { useState } from 'react';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

const VideoList = () =>{
    const [videos] = useState([ `2LsOyOaobrc`,`htznIeWKgg8`]);

    const openPopup = (videoId) =>{
        const youtubeLink = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        const content = (
            <iframe
            width="560"
            height="315"
            src={youtubeLink}
            title='Youtube video'
            allowFullScreen></iframe>
        );

        PopupboxManager.open({content});
    };

    const renderVidoes = () =>{
        return videos.map((videoId, index) => (
            <div key={index}>
            <div className='video-thumbnail' onClick={() => {openPopup(videoId); console.log('onclicked', videoId)}}>
                <img src={`https://img.youtube.com/vi/{videoId}/hqdefault.jpg`} alt={`Video ${index}`}></img>
            </div>
            {/* <div className='play-button'>?</div> */}
            </div>
        ))
    };

    return(
        <div>
            {renderVidoes()}
            <PopupboxContainer />
        </div>
    )
}

export default VideoList;