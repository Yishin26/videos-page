import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit(
      "WeAreDevelopers World Congress 2018 Official Aftermovie"
    );

  }

  onTermSubmit = async term => {
    const response = await youtube.get("./search", {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items, 
      selectedVideo:response.data.items[0]
    });
  };

  onVideoSelect = video => {
    console.log("From the App!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ margin: "20pt" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid ">
          <div className="ui row ">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />

              {/*single video*/}
              {/*<p>I have {this.state.videos.length} videos.</p>*/}
            </div>
            <div className="five wide column">
              <VideoList
                className="ui very relaxed list four wide column"
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} //Object
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
