import styled from "styled-components";

export const Scroller = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin: 20px 0;
  -webkit-overflow-scrolling: touch;
  /* width */
  ::-webkit-scrollbar:horizontal {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track:horizontal {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb:horizontal {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;
