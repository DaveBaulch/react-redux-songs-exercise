import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
  return <div>Song Detail</div>;
};

const mapStateToProps = (state) => {
  state.selectedSong;
};

export default SongDetail;
