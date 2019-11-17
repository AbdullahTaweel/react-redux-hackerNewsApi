import React from 'react';
import './Stories.css';
import Story from './Story';
import { connect } from 'react-redux';
import { getReadableStories } from '../selectors/story';


const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

const Stories = ({ stories, onArchive}) => 
<div className="stories">

<div className="stories-header">
      {Object.keys(COLUMNS).map(key =>
        <span
          key={key}
          style={{ width: COLUMNS[key].width }}
        >
          {COLUMNS[key].label}
        </span>
      )}
    </div> 

  {(stories || []).map(story =>
    <Story
    key={story.objectID}
    story={story}
    columns={COLUMNS}
    //onArchive={onArchive}
    />
    )}
</div>


const mapStateToProps = state => ({
  stories: getReadableStories(state),
});


export default connect(
  mapStateToProps
)(Stories);