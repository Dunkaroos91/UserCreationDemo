import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
* {
    @import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&family=Outfit&family=Roboto:wght@300&display=swap');
}
`    


export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #DAE6FF;
`

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

export const Form = styled.form`
    background: #ffff;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 60px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #29418e;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #29418e;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    background: #DAE6FF;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #29418e;
    padding: 16px 0;
    margin-top: 24px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#10308e')};
    }
`

export const Text = styled.span`
    text-align: center;
    margin-top: 18px;
    color: #fff;
    font-size: 14px;
`

export const SelectWrap = styled.div`
    margin-top: 15px;
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 0px;
  font-size: 14px;
  border: none;
  margin-left: 10px 10px;

  option {
    color: black;
    background: #DAE6FF;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;