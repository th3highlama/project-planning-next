import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom:8px;
    border-radius:5px;
    background-color: #ffffff;
    -webkit-box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05);
    -moz-box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05);
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.05);
`
export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.7rem;
    align-items: center;
    padding: 10px;
`;

export const Priority = styled.div`
    color: #595959;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #666666;
    background-color: ${props => props.priority === 0 && '#f4ce05'};
    background-color: ${props => props.priority === 1 && '#00c637'};
    background-color: ${props => props.priority === 2 && '#d62222'};
    margin-right: 5px;
`;

export const TaskTitle = styled.div`
    color: #262626;
    margin: 10px 0 10px 10px;
`;

export const TaskDescription = styled.div`
    font-size: 0.7rem;
    margin: 0 0 10px 10px;
`;

export const TaskActionWrapper = styled.div`
    padding: 10px;
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    font-size: 0.65rem;
`;

export const TaskLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const TaskActionLabel = styled.div`
    margin-left: 5px;
`;

export const TaskAttachment = styled.div`
    margin-right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const TaskFlag = styled.div`
    color: ${props => props.flag === 0 && '#d62222'};
    color: ${props => props.flag === 1 && '#00c637'};
    margin-right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const TaskDate = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const TaskRight = styled.div``;

export const TaskMessage = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
