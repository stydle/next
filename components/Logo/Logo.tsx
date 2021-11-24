import NextLink from 'next/link';
import styled from 'styled-components';

import { TextLink } from '../Link/Link';

const HeaderLongo = () => {
  return (
    <NextLink href="/" passHref>
      <Wrapper>
        <MainLongo
          version="1"
          viewBox="0 0 935 935"
        >
          <path
            d="M437 2a466 466 0 1061 930A466 466 0 00437 2zm234 169a401 401 0 01-1 119l8 16c17 41 18 47 18 85 0 26-1 43-4 53-1 6-6 11-13 15-8 5-7 6 6 6 25 0 46 4 62 12 13 7 21 13 33 26 11 11 14 17 14 23-1 5-8 24-13 31a51 51 0 01-19 19l27 28c30 30 38 39 53 60 8 12 17 28 17 33a400 400 0 01-75 96 1051 1051 0 01-112-176l-4 4a161 161 0 01-66 64c-9 4-11 6-11 8l-1 4c-2 1-5 15-4 16l18 8 24 2 19 1 9 4c15 8 21 16 33 47 6 14 25 73 25 76s-31 21-54 32a451 451 0 01-412-14c-2-1-2-2 2-13a384 384 0 0142-82c20-28 25-31 41-34l11-3 15-6c20-6 31-13 33-20 1-5-1-19-4-29-2-8-2-10-1-13 1-4 1-4 4-4l4-1-7-12c-7-13-8-17-6-23 1-3 1-3 7-4 11-2 12-4 10-14-2-6-13-16-23-21-7-4-9-4-9-1l-19 38-14 13-11 10-3-3c-3-2-6-3-9-1-1 1-2 3-2 15-2 23-4 34-12 46-11 19-38 40-114 92l-16 11-8-7c-8-7-30-30-30-32a1167 1167 0 0163-100c-2 0-28 28-50 54l-25 29 41-60c15-21 22-28 37-38l14-9-4-7c-9-12-5-17 33-49 9-7 16-14 16-15l2-6c3-5 3-10 1-12l-10-1c-5-1-7-2-7-3l-4-15c-4-19-5-33-2-54 3-17 5-24 8-26 4-2 20 5 22 9l2 1-4-18c-8-29-9-38-6-69v-20a180 180 0 00-18 51l3-37c5-22 15-51 19-55 1-1 1-2-4-12-7-13-11-25-14-41a709 709 0 01-7-90v-10h8c24 2 49 14 79 38l11 8c1 1 4 0 13-7 27-19 58-35 82-40 6-2 7-2 30 1 28 4 30 4 30 1 0-1-2-3-6-5l-6-3h9a222 222 0 0189 33l11-7c22-14 53-27 76-34l7-2 1 6 2 14z"
          />
        </MainLongo>
        <Name>Bcheng's Blog</Name>
      </Wrapper>
    </NextLink>
  )
}

const Wrapper = styled(TextLink)`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: -0.7rem;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.7rem 0.8rem;
  align-items: center;
  &:hover{
    color: var(--color-primary);
    background-color: var(--color-gray-200);
  }
`;
const Name = styled.span`
  font-weight: var(--font-weight-medium);
`;
const MainLongo = styled.svg`
  fill: var(--color-text);
  width: 1.75rem;
  height: 1.75rem;
  margin-right: 0.75rem;
`;
export default HeaderLongo;