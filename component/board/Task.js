import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { FaPaperclip, FaFlag, FaClock, FaRegCommentDots } from 'react-icons/fa';


import { Container, CategoryWrapper, Priority, TaskTitle, TaskDescription, TaskActionWrapper, TaskLeft, TaskActionLabel, TaskAttachment, TaskFlag, TaskDate, TaskRight, TaskMessage } from './taskStyles'

function Task(props) {
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
                            <TaskAttachment>
                                <FaPaperclip /><TaskActionLabel>3</TaskActionLabel>
                            </TaskAttachment>
                            <TaskFlag flag={props.task.flag}>
                                <FaFlag />
                            </TaskFlag>
                            <TaskDate>
                                <FaClock /> <TaskActionLabel>Mar 23</TaskActionLabel>
                            </TaskDate>
                        </TaskLeft>
                        <TaskRight>
                            <TaskMessage>
                                <FaRegCommentDots /><TaskActionLabel>3</TaskActionLabel>
                            </TaskMessage>
                        </TaskRight>
                    </TaskActionWrapper>
                </Container>
            )}
        </Draggable>
    )
}

export default Task;