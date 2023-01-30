import styled from "@emotion/styled";

export const DowloadList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0px;

`;

export const DowloadItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23.9px;
  background-color: ${({id}) =>
    {switch (id){
    case "id-1":
        return "green"
    case "id-2":
        return "purple"
    case "id-3":
        return "orange"
    case  "id-4":
        return "red"
    case "id-5":
        return "blue"
    default:
        return "white"
        }
  }};
`

export const Text = styled.span`
  ::not(:last-child) {
    padding-bottom: 10px;
  }
  font-weight: bold;
  color: white;

`