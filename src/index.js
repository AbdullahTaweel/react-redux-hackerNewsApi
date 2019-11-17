import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
//import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// function render(){
//   ReactDOM.render(
//    <App 
//    //stories={store.getState().storyState}
//    stories={getReadableStories(store.getState())}
//     //onArchive={ id => store.dispatch({type: STORY_ARCHIVE, id })}
//     onArchive={ id => store.dispatch(doArchiveStory(id))}

//     />,
//     document.getElementById('root')
//   );
// }

// store.subscribe(render);
// render();

