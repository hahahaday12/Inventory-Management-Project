import styled from "styled-components";

const SidebarItem = ({ menu, isActive, isColor }) => {

  // 2번째 아이콘 개별 사이즈 조절
  const secondIconSize = menu.name === "checklist" && "22px"

  return isActive === true? (
    <SidebarItems>
      <div 
        className="active iconBox"
        style={{backgroundColor: isColor}}
      >
        <span className="iconSize" style={{fontSize: secondIconSize}}>
          {menu.icon}
        </span>
        <p>{menu.name}</p>
      </div>
    </SidebarItems>
    ) : (
      <SidebarItems>
        <div className="defalt iconBox">
            <span className="iconSize" style={{fontSize: secondIconSize}}>
              {menu.icon}
          </span>
          <p>{menu.name}</p>
        </div>
      </SidebarItems>
    )
};
export default SidebarItem;

const SidebarItems = styled.div`
  height: 40px;
 
  & .iconBox {
    width: 230px;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 15px;
    color: #434242;
    font-weight: 600;
    font-size: 13px;
    
    & span {
      margin: 4px 0 0 37px;
    }
    & p {
      margin-left: 20px;
    }
  }
  .active {
    color: #0014FF;
  }
`