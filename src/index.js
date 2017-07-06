import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAw3Jo-u7gGGs8IAfU4VNqmDZaSeJWrHMU';

// must also do 'npm install --save youtube-api-search' to install package be able to use youtube search API
// doing so within the project directory will install the package into package.json, which contains all
// project dependencies

// Create a new component that should produce some HTML

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        // all properties in VideoList make up the variable props that gets passed to the VideoList
        // class in video_list.js

        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        )
    }
}

/*const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};*/

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

