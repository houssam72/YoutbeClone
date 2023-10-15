const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;
const HOME_VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=33.5724032%2C-7.6693932&locationRadius=50mi&type=video&maxResults=24&key=${API_KEY}`;

export { HOME_VIDEO_URL };
