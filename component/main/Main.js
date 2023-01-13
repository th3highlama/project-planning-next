import Header from '../header/Header'
import BoardDetail from '../boardDetail/BoardDetail'
import Board from '../board/Board'
import { MainWrapper } from './mainStyles'

function Main() {
    return (
      <MainWrapper>
        <Header />
        <BoardDetail />
        <Board />
      </MainWrapper>
    );
  }
  
  export default Main;
  