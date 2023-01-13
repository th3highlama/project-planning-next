import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 23px 0 0;
    flex-wrap: wrap-reverse;
    background-color: #ffffff;
`;

export const HeaderLeft = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const HeaderFilterView = styled.div`
    color: ${props => props.isActive ? '#13ae3f' : '#aeaeae'};
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    border-bottom: 3px solid ${props => props.isActive ? '#13ae3f' : '#ffffff'};
    padding: 0 5px;
`;

export const HeaderFilterIcon = styled.div`
    margin-right: 10px;
`;

export const HeaderFilterText = styled.span`
    font-size: 0.8rem;
    margin-left: 5px;
`;

export const HeaderRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    line-height: 26px;
    margin-bottom: 20px;
`;

export const HeaderSearchBar = styled.input`
    margin-right: 20px;
    margin-left: 20px;
`;

export const HeaderMessages = styled.div`
    margin-right: 20px;
    font-size: 1.2rem;
    font-weight: 700;
`;

export const HeaderNotifications = styled.div`
    margin-right: 20px;
    font-size: 1.2rem;
    font-weight: 700;
`;

export const HeaderUserProfile = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid;
    border-radius: 50%;
    margin-right: 30px;
    margin-top: -4px;
`;