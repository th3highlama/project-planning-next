import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { Container, CategoryWrapper, Priority, TaskTitle, TaskDescription, TaskActionWrapper, TaskLeft, TaskAttachment, TaskFlag, TaskDate, TaskRight, TaskMessage } from './taskStyles'

function Task(props) {
    console.log("Props", props);
    return (
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <CategoryWrapper>
                    <Priority priority={props.task.priority} />
                    {props.task.category}
                    </CategoryWrapper>
                    <TaskTitle>{props.task.title}</TaskTitle>
                    <TaskDescription>{props.task.desc}</TaskDescription>
                    <TaskActionWrapper>
                        <TaskLeft>
                            <TaskAttachment></TaskAttachment>
                            <TaskFlag></TaskFlag>
                            <TaskDate></TaskDate>
                        </TaskLeft>
                        <TaskRight>
                            <TaskMessage></TaskMessage>
                        </TaskRight>
                    </TaskActionWrapper>
                </Container>
            )}
        </Draggable>
    )
}

export default Task;