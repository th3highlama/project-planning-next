import { FaTasks, FaTable, FaRegCalendarAlt, FaRegCommentDots, FaRegBell } from 'react-icons/fa';
import { HeaderWrapper, HeaderLeft, HeaderFilterView, HeaderFilterIcon, HeaderFilterText, HeaderRight, HeaderSearchBar, HeaderMessages, HeaderNotifications, HeaderUserProfile } from './headerStyles.js';

function Header() {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <HeaderFilterView>
            <HeaderFilterIcon>
              <FaTasks />
            </HeaderFilterIcon>
            <HeaderFilterText>List</HeaderFilterText>
          </HeaderFilterView>
          <HeaderFilterView isActive={true}>
            <HeaderFilterIcon>
              <FaTable />
            </HeaderFilterIcon>
            <HeaderFilterText>Board</HeaderFilterText>
          </HeaderFilterView>
          <HeaderFilterView>
            <HeaderFilterIcon>
              <FaRegCalendarAlt />
            </HeaderFilterIcon>
            <HeaderFilterText>Calendar</HeaderFilterText>
          </HeaderFilterView>
        </HeaderLeft>
        <HeaderRight>
          <HeaderSearchBar />
          <HeaderMessages>
            <FaRegCommentDots />
          </HeaderMessages>
          <HeaderNotifications>
            <FaRegBell />
          </HeaderNotifications>
          <HeaderUserProfile>
          </HeaderUserProfile>
        </HeaderRight>
      </HeaderWrapper>
    );
  }
  
  export default Header;
  