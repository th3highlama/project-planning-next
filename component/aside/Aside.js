import { useState } from 'react';

import { FaBolt, FaCheck, FaBorderAll, FaRegClipboard, FaRegCalendar, FaUserFriends, FaRegChartBar, FaFolder } from 'react-icons/fa';
import { AsideWrapper, AsideController, AsideLogo, AsideItemGroup, AsideItem, AsideLeftWrapper, AsideItemIcon, AsideItemText, AsideItemCount, AsideItemSubItem, AsideItemSubItemBorder, AsideItemSubItemIcon, AsideItemSubItemText } from './asideStyles';

function Aside() {
  const [fullView, setFullView] = useState(1);
    return (
      <AsideWrapper fullView={fullView}>
        <AsideController onClick={() => setFullView(1)}/>
        {fullView && <AsideLogo>Logo!</AsideLogo>}
        <AsideItemGroup>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaBolt />
              </AsideItemIcon>
              {fullView && <AsideItemText>Activity</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaCheck />
              </AsideItemIcon>
              {fullView && <AsideItemText>My Task</AsideItemText>}
            </AsideLeftWrapper>
            {fullView && <AsideItemCount>15</AsideItemCount>}
          </AsideItem>
        </AsideItemGroup>
        <AsideItemGroup>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaBorderAll/>
              </AsideItemIcon>
              {fullView && <AsideItemText>Dashboard</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem isActive={true} >
            <AsideLeftWrapper>
              <AsideItemIcon isActive={true} >
                <FaRegClipboard />
              </AsideItemIcon>
              {fullView && <AsideItemText isActive={true} >Project</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
          {fullView && (<><AsideItemSubItem isActive={true} >
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
          </AsideItemSubItem></>)}
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaRegCalendar />
              </AsideItemIcon>
              {fullView && <AsideItemText>Calendar</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaUserFriends />
              </AsideItemIcon>
              {fullView && <AsideItemText>Teams</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
          <AsideItem>
            <AsideLeftWrapper>
              <AsideItemIcon>
                <FaRegChartBar />
              </AsideItemIcon>
              {fullView && <AsideItemText>Analytics</AsideItemText>}
            </AsideLeftWrapper>
          </AsideItem>
        </AsideItemGroup>
      </AsideWrapper>
    );
  }
  
  export default Aside;
  