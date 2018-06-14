import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import loadDocuments from 'redux/actions/actions';
import PageTemplate from 'components/base/PageTemplate';

const mapStateToProps = state => ({ documents: state.documents.documents });

type Props = {
  header: Header,
};
class Randing extends Component {
  componentDidMount() {
    this.props.loadDocuments();
  }
  render() {
    console.log(this.props);
    const documents = this.props.documents
      .reverse()
      .map(document => <div>{document.createDate}</div>);

    return <PageTemplate header={<Header />} />;
  }
}

export default connect(
  mapStateToProps,
  { loadDocuments },
)(Randing);
