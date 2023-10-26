const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;
const LISTS_SEARCH_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=33.5724032%2C-7.6693932&locationRadius=50mi&type=video&maxResults=24&key=${API_KEY}`;
const LIST_VIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=${API_KEY}`;
const LIST_CHANNEL_URL = `https://www.googleapis.com/youtube/v3/channels?part=snippet&key=${API_KEY}`;

export { LISTS_SEARCH_URL, LIST_VIDEO_URL, LIST_CHANNEL_URL };
