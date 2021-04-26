/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
import React, { memo } from 'react';

import favorites from './favorites';
import movies from './movies';

const listContainers = [movies, favorites];

export default function containers(WrappedComponent: React.FC): React.FC {
  const WithContainers = (props: object) => {
    let CompleteComponent: any = null;

    listContainers.forEach(withContainer => {
      CompleteComponent = withContainer(CompleteComponent || WrappedComponent);
    });

    return <CompleteComponent {...props} />;
  };

  return memo(WithContainers);
}
