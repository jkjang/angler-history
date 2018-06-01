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
    console.log(this.props);
    const documents = this
      .props
      .documents
      .reverse()
      .map(document => <div>{document.content}</div>);

    return (
      <div>
        {documents}
      </div>
    );
  }
}

export default connect(mapStateToProps, { loadDocuments })(Randing);
