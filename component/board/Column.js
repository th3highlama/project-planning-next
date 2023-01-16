import React, { useState, useEffect } from 'react'
import dynamic from "next/dynamic"
import styled from 'styled-components'
const Task = dynamic(import("./Task"))
import { Droppable, Draggable } from 'react-beautiful-dnd'
const ColorArray = ['#252525', '#435cd5', '#f5d016', '#0dc941']
const Container = styled.div`
    margin: 8px;
    border-radius: 2px;
    width: 25%;
    display:flex;
    flex-direction: column;
    background-color:transparent;
`;
const TitleWrapper = styled.div`
    background-color: #ffffff;
    margin-left: 10px;
    // position: fixed;
    min-width: 245px;
    border-radius: 5px;
    border-top: 4px solid ${props => ColorArray[props.columnId]};
    display: flex;
    align-items: center;
`;
const Title = styled.h3`
    color: #373737;
    padding: 8px;
    font-weight: 500;
    font-size: 0.8rem;
`;
const CardCount = styled.div`
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 18px;
    font-weight: 300;
    color: #373737;
    font-size: 0.7rem;
    border: 1px solid #ababab;
    border-radius: 50%;
`;
const TaskList = styled.div`
    padding: 8px;
    // background-color: ${props => (props.isDraggingOver ? '#fbfbfb' : '#ffffff')};
    min-height:100px;
`;

function Column(props) {
    const [winReady, setwinReady] = useState(false);
    useEffect(() => {
        setwinReady(true);
    }, []);
    return (
        <Draggable draggableId={props.column.id} index={props.index}>
            {(provided) => (
                winReady ? 
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}>
                    <TitleWrapper columnId={Number(props.column.id)}>
                        <Title {...provided.dragHandleProps}>{props.column.title}</Title>
                        <CardCount>{props.column.taskIds.length}</CardCount>
                    </TitleWrapper>
                    <Droppable droppableId={props.column.id} type='task'>
                        {(provided, snapshot) => (
                            <TaskList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
                                {provided.placeholder}
                            </TaskList>
                        )}
                    </Droppable>
                </Container>
                : null
            )}
        </Draggable>
    )
}

export default Column;