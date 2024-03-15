import { GithubIcon } from "@/assets/icons";
import { mq } from "@/styles/breakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media ${mq.sm.max} {
    gap: 0.75rem;
    flex-direction: column-reverse;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;

const Link = styled.a`
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  transition: color 0.15s ease-in-out;

  @media (hover: hover) {
    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }
`;

export function Footer() {
  return (
    <Wrapper>
      <Links>
        <Link href="https://twitter.com/" target="_blank">
          user1
        </Link>
      </Links>

      <Links>
        <Link href="https://github.com/s" target="_blank">
          <GithubIcon />
        </Link>
      </Links>
    </Wrapper>
  );
}
