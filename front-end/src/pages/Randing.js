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
    console.log('aaa');
    const documents = this
      .props
      .documents
      .reverse()
      .map(docment => <div>{docment.content}</div>);

    return (
      <div>
        {documents}
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadDocuments })(Randing);
