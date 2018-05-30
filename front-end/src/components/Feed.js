import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDocument } from './../redux/actions/actions';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Feed extends Component {
  componentDidMount() {
    this
      .props
      .documents();
  }

  render() {
    return (
      <div >피드 페이지 입니다.</div>
    );
  }
}

export default connect(mapStateToProps, { loadDocument })(Feed);
