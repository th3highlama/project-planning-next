import styled from 'styled-components'

export const Container = styled.div`
    padding:8px;
    margin-bottom:8px;
    border-radius:2px;
    background-color: #fbfbfb;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
`
export const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.7rem;
    align-items: center;
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
    margin: 10px 0;
`;

export const TaskDescription = styled.div`
    font-size: 0.7rem;
    margin-bottom: 10px;
`;

export const TaskActionWrapper = styled.div`
    padding: 10px;
    border-top: 1px solid #efefef;
`;

export const TaskLeft = styled.div``;

export const TaskAttachment = styled.div``;

export const TaskFlag = styled.div``;

export const TaskDate = styled.div``;

export const TaskRight = styled.div``;

export const TaskMessage = styled.div``;
