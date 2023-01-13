import { FaBolt, FaCheck, FaBorderAll, FaRegClipboard, FaRegCalendar, FaUserFriends, FaRegChartBar, FaFolder } from 'react-icons/fa';
import { AsideWrapper, AsideController, AsideLogo, AsideItemGroup, AsideItem, AsideLeftWrapper, AsideItemIcon, AsideItemText, AsideItemCount, AsideItemSubItem, AsideItemSubItemBorder, AsideItemSubItemIcon, AsideItemSubItemText } from './asideStyles';

function Aside() {
    return (
      <AsideWrapper>
        <AsideController />
        <AsideLogo>Logo!</AsideLogo>
        <AsideItemGroup>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaBolt />
              </AsideItemIcon>
              <AsideItemText>Activity</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaCheck />
              </AsideItemIcon>
              <AsideItemText>My Task</AsideItemText>
            </AsideLeftWrapper>
            <AsideItemCount>15</AsideItemCount>
          </AsideItem>
        </AsideItemGroup>
        <AsideItemGroup>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaBorderAll/>
              </AsideItemIcon>
              <AsideItemText>Dashboard</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem isActive={true} >
            <AsideLeftWrapper>
              <AsideItemIcon isActive={true} >
                <FaRegClipboard />
              </AsideItemIcon>
              <AsideItemText isActive={true} >Project</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItemSubItem isActive={true} >
            <AsideItemSubItemBorder />
            <AsideItemSubItemIcon>
              <FaFolder />
            </AsideItemSubItemIcon>
            <AsideItemSubItemText>Nija Web Design</AsideItemSubItemText>
          </AsideItemSubItem>
          <AsideItemSubItem>
            <AsideItemSubItemBorder />
            <AsideItemSubItemIcon>
              <FaFolder />
            </AsideItemSubItemIcon>
            <AsideItemSubItemText>Mobile Application</AsideItemSubItemText>
          </AsideItemSubItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaRegCalendar />
              </AsideItemIcon>
              <AsideItemText>Calendar</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaUserFriends />
              </AsideItemIcon>
              <AsideItemText>Teams</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaRegChartBar />
              </AsideItemIcon>
              <AsideItemText>Analytics</AsideItemText>
            </AsideLeftWrapper>
          </AsideItem>
        </AsideItemGroup>
      </AsideWrapper>
    );
  }
  
  export default Aside;
  