import keyMirror from 'keymirror';

// Define action constants
const NewsActionTypes = keyMirror({
  GET_SOURCES: null,   // get news headlines based on sources
  GET_NEWS: null,  // get news
});

export default NewsActionTypes;
