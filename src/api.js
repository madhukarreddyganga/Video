import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyBRqxPXLFC5kJEBPsT6oo3wS6LGylM3AMs"
  }
});
