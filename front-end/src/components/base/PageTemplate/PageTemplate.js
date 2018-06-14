// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  header: Node,
  children: Node,
};

const PageTemplate = ({ header, children }: Props) => (
  <div className="PageTemplate">
    {header}
    <main>{children}</main>
  </div>
);

export default PageTemplate;
