import styled from 'styled-components';
import { Title } from '../ProductStyleDetail';

export const TitleBox = styled(Title)`
  position: absolute;
  z-index: 20;
  top: 120px;
  left: 320px;
`

export const Choose = styled(TitleBox)`
  top: 210px;
  font-size: 18px;
`
export const OutProducts = styled(Choose)`
  top: 210px;
  left: 870px;
`
export const NumberText = styled.div`
  width: 300px;
  height: 30px;
  background-color: white;
  position: absolute;
  z-index: 40;
  top: 350px;
  left: 960px;
  font-weight: 600;
`

export const Button = styled.button`
  width: 70px;
  height: 35px;
  background-color: blue;
  color: white;
  position: absolute;
  border: solid 1px white;
  border-radius: 5px;
 
`

export const ButtonBox = styled.div`
  width: 1000px;
  height: 40px;
  background-color: aquamarine;
  display: inline-block;
  position: absolute;
  left: 320px;
  bottom: 1px;
`