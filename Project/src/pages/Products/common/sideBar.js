import { SidebarContainer, Item } from '../../../styleComponents/ProductPageComponent/ProductStyleDetail'
import { faBox, faCircleArrowDown,faCircleArrowUp  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useLocation } from "react-router-dom";
import SidebarItem from './sideBarItems';
import styled from "styled-components";
import SidebarItem from './sideBarItems';



const Sidebar = () => {

  const pathName = useLocation().pathname;

  const Categorys = [
    { 
      id: "page1",
      name: "제품목록", 
      path: "/product",
      img: "./images/box-soild.svg",
      icon: <FontAwesomeIcon icon={faBox}/>
    },
    { 
      id: "page2",
      name: "입고",
      path: "/productinput", 
      img: "./images/circle-arrow-down.svg",
      icon: <FontAwesomeIcon icon={faCircleArrowDown}/>
    },
    { 
      id: "page3",
      name: "출고", 
      path: "/productoutput",
      img: "./images/circle-arrow-up.svg",
      icon: <FontAwesomeIcon icon={faCircleArrowUp}/>
    },
  ]

  const isColor = 
    pathName === "/product" ? "#edefff"
    : ( pathName === "/productinput" ? "#edefff"
    : pathName === "/productoutput" ? "#edefff" : '')

  return (
    <>
      <SidebarContainer>
        <Item>
          <User><UserText>Team 우가우가</UserText></User>
          <CategoryBox>
          {Categorys.map((menu) => {
          return (
            <div className="iconWrap">
              <SLink to={menu.path} key={menu.id}>
                <SidebarItem 
                  menu={menu}
                  isActive={pathName === menu.path ? true : false}
                  // 현재 URL pathname과 객체에 담긴 path값 일치 여부 확인
                  isColor= {isColor}
                />
              </SLink>
            </div>
          );
        })}
          </CategoryBox>
        </Item>
      </SidebarContainer>
    </>
  )
};
export default Sidebar;

const User = styled.div`
  width: 250px;
  height: 110px;
  //background-color: burlywood;
`
const UserText = styled.div`
  width: 150px;
  height: 40px;
  //background-color: blue;
  position: absolute;
  top: 50px;
  left: 40px;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
`
const CategoryBox = styled.div`
  width: 240px;
  height: 200px;
  //background-color: beige;
  position: relative;
`
const SLink = styled(Link)`
  text-decoration: none;
  color: black;
`