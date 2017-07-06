import React from 'react'

// {videos} says the first object in the VideoListItem arguments array has a property named video. Grab
// that video and declare a new local variable called video
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div>
                    <div className="media-body">
                        <div className="media-heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;