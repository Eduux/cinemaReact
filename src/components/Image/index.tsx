import React, { useState } from 'react';

import noPoster from 'assets/no-poster.png';

import { Container } from './styles';

interface IProps {
  src: string;
  width?: string;
  height?: string;
  alt: string;
}

const Image: React.FC<IProps> = ({ src, width, height, alt }: IProps) => {
  const [error, setError] = useState(false);

  return (
    <Container
      loading="lazy"
      src={error ? noPoster : src}
      width={width}
      height={height}
      alt={alt}
      onError={() => setError(true)}
    />
  );
};

Image.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default Image;
