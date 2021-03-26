import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  margin-top: 5%;

  display: flex;
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    span {
      color: #b4b4b4;
    }

    h1 {
      color: #212121;
      justify-content: center;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: end;

      button {
        background: linear-gradient(-75deg, #6d8be7, #7159c1, #e139c5);
        height: 56px;
        border-radius: 6px;
        border: 0;
        padding: 16px;
        color: #fff;
        width: 35%;
        height: 30%;
        font-weight: 800;
        margin-top: 60px;
        transition: background-color 0.2s;
        align-items: flex-end;
      }
    }
  }
`;

export const AvatarInput = styled.span`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 30%;
    width: 30%;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 50%;
    border: 3px solid rgba(255, 255, 255, 0.3);
    background: #eee;
  }

  label {
    width: 45%;
    height: 50%;
    padding: 10px 0 10px;
    border-radius: 6px;
    font-weight: 400;
    background-color: #f2dcf5;
    color: #bf53cf;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    input {
      display: none;
    }
  }
`;
