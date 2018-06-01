import React, { Component } from 'react';
import { connect } from 'react-redux';
import loadDocuments from './../redux/actions/actions';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this
      .props
      .loadDocuments();
  }
  render() {
    const documents = this
      .props
      .documents
      .reverse()
      .map(document => <div>{document.title}</div>);

    return (
      <div>
        {documents}
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadDocuments })(Randing);
