import styled from 'styled-components';

export const BoardDetailWrapper = styled.div`
    display: flex;
    border-bottom: 1px solid;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const BoardDetailHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
`;

export const BoardDetailIcon = styled.div`
    margin-left: 20px;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-color: #eaffef;
    color: #13ae3f;
    text-align: center;
    line-height: 33px;
    border-radius: 3px;
`;

export const BoardDetailHeadingText = styled.div`
    color: #373737;
`;

export const BoardDetailRight = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    margin-left: 20px;
`;

export const BoardDetailLock = styled.div`
    display: flex;
    color: #373737;
    margin-right: 20px;
`;

export const BoardDetailLockStatus = styled.div`
    margin-left: 10px;
`;

export const BoardDetailCollaborators = styled.div`
    display: flex;
    margin-right: 20px;
`;

export const BoardDetailCollaborator = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid;
    border-radius: 50%;
    margin-right: -7px;
`;

export const BoardDetailCollaboratorCount = styled.div`
    margin-right: 10px;
`;

export const BoardDetailCollaboratorAddition = styled.div`
    width: 24px;
    height: 24px;
    border: 1px dashed;
    border-radius: 50%;
    margin-right: 30px;
    text-align: center;
    line-height: 22px;
`;