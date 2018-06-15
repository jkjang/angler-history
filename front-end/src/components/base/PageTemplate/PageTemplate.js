// @flow
import React from 'react';
import type { Node } from 'react';
import 'components/base/PageTemplate/PageTemplate.scss';

type Props = {
  header: Node,
  children: Node,
};

const PageTemplate = ({ header, children }: Props) => (
  <div className="container">
    {header}
    <main>children{children}</main>
  </div>
);

export default PageTemplate;
