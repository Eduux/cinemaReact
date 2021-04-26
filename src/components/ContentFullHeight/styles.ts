import styled from 'styled-components';

const headerMinHeight = 161;
const bottomMinHeight = 102;

const negativeHeight = bottomMinHeight + headerMinHeight;

export const Container = styled.div`
  min-height: calc(100vh - ${negativeHeight}px);
  overflow: hidden;
`;
