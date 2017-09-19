import { combineReducers } from 'redux';
import VideoCallReducer from './reducer_video_call';
import NavOpenReducer from './reducer_nav_open';
import VideoOpenReducer from './reducer_video_open';
import VideoMinimizeReducer from './reducer_video_minimized';
import CurrentDocumentReducer from './reducer_current_document';

const rootReducer = combineReducers({
  data: VideoCallReducer,
  navOpen: NavOpenReducer,
  videoOpen: VideoOpenReducer,
  videoMinimized: VideoMinimizeReducer,
  currentDocument: CurrentDocumentReducer
});

export default rootReducer;
