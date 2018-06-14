import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import loadDocuments from 'redux/actions/actions';

const mapStateToProps = state => ({ documents: state.documents.documents });

class Randing extends Component {
  componentDidMount() {
    this.props.loadDocuments();
  }
  render() {
    console.log(this.props);
    const documents = this.props.documents
      .reverse()
      .map(document => <div>{document.createDate}</div>);

    return (
      <div>
        <Header />
        params name : {this.props.match.params.name}
        {documents}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
