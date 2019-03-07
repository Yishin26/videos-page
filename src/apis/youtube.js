import Axios from "axios";


const KEY = "AIzaSyDb9yU2Ngf-6p5Bo7Fl5dIo3nW9OTRdnD8";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
      part:'snippet',
      maxResults:5,
      key:KEY,
      
  }
});


