import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
  return <div>Song Detail</div>;
};

const mapStateToProps = (state) => {
 return {
    state.selectedSong;
  }
};

export default SongDetail;
