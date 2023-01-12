import styled from 'styled-components';

export const AsideWrapper = styled.div`
    background-color: #ffffff;
    width: 20rem;
    min-height: 100vh;
    border-right: 2px solid #ededed;
    color: #aeaeae;
    padding: 20px 0;
    font-weight: 300;
    box-sizing: border-box;
`;

export const AsideController = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid #ededed;
    background-color: #ffffff;
    border-radius: 50%;
    position: absolute;
    left: calc(20rem - 12px);
`;

export const AsideLogo = styled.div`
    font-size: 2rem;
    margin-left: 25px;
`;

export const AsideItemGroup = styled.div`
    border-bottom: 1px solid #ededed;
    padding: 10px 0;
`;

export const AsideItem = styled.div`
    background-color: ${props => props.isActive ? '#eaffef' : '#ffffff'};
    border-left: 4px solid ${props => props.isActive ? '#13ae3f' : '#ffffff'};
    display: flex;
    font-size: 0.9rem;
    padding: 10px 25px;
    justify-content: space-between;
    position: relative;
    z-index: 9;
`;

export const AsideLeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AsideItemIcon = styled.div`
    color: ${props => props.isActive ? '#13ae3f' : '#aeaeae'};
`;

export const AsideItemText = styled.div`
    color: ${props => props.isActive ? '#13ae3f' : '#aeaeae'};
    margin-left: 10px;
    font-weight: ${props => props.isActive ? '500' : 'reg'};
`;

export const AsideItemCount = styled.div`
    background-color: #eaffef;
    border: 1px solid #13ae3f;
    border-radius: 50%;
    color: #13ae3f;
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 22px;
    font-size: 0.66rem;
    margin-top: -8px;
    font-weight: 500;
`;

export const AsideItemController = styled.div``;

export const AsideItemSubItem = styled.div`
    color: ${props => props.isActive ? '#13ae3f' : '#aeaeae'};
    font-weight: ${props => props.isActive ? '500' : 'reg'};
    font-size: 0.9rem;
    display: flex;
    align-items: flex-end;
    position: relative;
    height: 30px;
    margin-left: 25px;
`;

export const AsideItemSubItemBorder = styled.div`
    border-bottom: 1px solid #13ae3f;
    border-bottom-left-radius: 5px;
    border-left: 1px solid #13ae3f;
    height: 40px;
    width: 15px;
    position: absolute;
    left: 10px;
    top: -20px;
    &:after {
        content: "";
        position: absolute;
        right: -6px;
        bottom: -3px;
        width: 4px;
        height: 4px;
        border: 1px solid #13ae3f;
        border-radius: 50%;
      }
`;

export const AsideItemSubItemIcon = styled.div`
    margin-left: 35px;
    margin-right: 10px;
    margin-top: 16px;
`;

export const AsideItemSubItemText = styled.div`
`;

export const AsideActiveCollaboratorWrapper = styled.div``;

export const AsideActiveCollaborator = styled.div``;

export const AsideActiveCollaboratorController = styled.div``;