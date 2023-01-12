import { FaFolder, FaLock } from 'react-icons/fa';
import { BoardDetailWrapper, BoardDetailHeading, BoardDetailIcon, BoardDetailHeadingText, BoardDetailRight, BoardDetailLock, BoardDetailLockStatus, BoardDetailCollaborators, BoardDetailCollaborator, BoardDetailCollaboratorCount, BoardDetailCollaboratorAddition } from './boardDetailStyles';

function BoardDetail() {
    return (
      <BoardDetailWrapper>
        <BoardDetailHeading>
          <BoardDetailIcon>
            <FaFolder />
          </BoardDetailIcon>
          <BoardDetailHeadingText>Nija Web Design</BoardDetailHeadingText>
        </BoardDetailHeading>
        <BoardDetailRight>
          <BoardDetailLock>
            <FaLock /> <BoardDetailLockStatus>Private Board</BoardDetailLockStatus>
          </BoardDetailLock>
          <BoardDetailCollaborators>
            <BoardDetailCollaborator></BoardDetailCollaborator>
            <BoardDetailCollaborator></BoardDetailCollaborator>
            <BoardDetailCollaborator></BoardDetailCollaborator>
            <BoardDetailCollaborator></BoardDetailCollaborator>
          </BoardDetailCollaborators>
          <BoardDetailCollaboratorCount>+4</BoardDetailCollaboratorCount>
          <BoardDetailCollaboratorAddition>+</BoardDetailCollaboratorAddition>
        </BoardDetailRight>
      </BoardDetailWrapper>
    );
  }
  
  export default BoardDetail;
  