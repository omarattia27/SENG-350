import styled, { keyframes } from "styled-components";
import IceSvg from "../../assets/visualizacao-black.svg";
const ScaleUp = keyframes`
to {
  opacity: initial;
  transform: initial;
}
`;
export const PhotoContentCss = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  animation: ${ScaleUp} 0.3s forwards;
  transform: scale(0.8);

  &.PhotoContentSingle {
    grid-template-columns: 1fr;
    height: auto;
    ul {
      padding: 0px;
    }
    form {
      gap: 0;
      margin: 1rem .3rem;
    }
  }

  @media (max-width: 64rem) {
    max-height: calc(100vh - 4rem);
    height: auto;
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const PhotoContentPhotoCss = styled.div`
  grid-row: 1 / 4;

  &.PhotoContentSingle {
    grid-row: 1;
    overflow: hidden;
    border-radius: 0.2rem;
  }
  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;
export const PhotoContentDetailsCss = styled.div`
  padding: 2rem 2rem 0 2rem;

  &.PhotoContentSingle {
    padding: 1rem 0;
  }
  div {
    .autor {
      opacity: 0.5;
      margin-bottom: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a:hover {
        text-decoration: underline;
      }

      .visualizacao::before {
        content: "";
        display: inline-block;
        height: 10px;
        width: 16px;
        margin-right: 0.5rem;
        background: url(${IceSvg}) no-repeat;
      }
    }

    ul.attributes {
      display: flex;
      font-size: 1.125rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 2rem;

      li {
        margin-right: 2rem;
        &::before {
          content: "";
          display: inline-block;
          height: 20px;
          margin-right: 0.5rem;
          position: relative;
          top: 3px;
          width: 2px;
          background: #333;
          margin-top: 5px;
        }
      }
    }
  }
`;

export const PhotoCommentsCss = styled.ul`
  overflow-y: auto;
  word-break: break-word;
  padding: 0 2rem;
  max-width: 300px;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }
`;

const latir = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}

`;

export const FormPhoto = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;
  gap: 1rem;

  button {
    border: none;
    cursor: pointer;
    color: #333;
    font-size: 1rem;
    padding: 0.5rem;
    overflow: hidden;
    background: transparent;

    &:hover,
    &:hover {
      outline: none;
      svg path {
        fill: #616161;
        stroke: #292929;
      }

      svg g {
        animation: ${latir} 0.6s infinite;
      }
    }
  }
`;

export const Textearea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  font-size: 1rem;
  font-family: var(--type-first);

  resize: none;
  border-radius: 0.2rem;
  transition: 0.2s;
  padding: 0.5rem;

  background: whitesmoke;

  &:focus,
  &:hover {
    outline: none;
    border-color: #292929;
    background: white;
    box-shadow: 0 0 0 3px #616161;
  }
`;

export const ButtonDelete = styled.button`
  background: #ddd;
  line-height: 1;
  font-family: var(--type-first);
  padding: 0.3rem 0.6rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: 0.1s;
  &:hover,
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`;
