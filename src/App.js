
import './App.css';
import Box from './component/Drop/Box';
import Circle from './component/Drop/Circle';

function App() {
  return (
   <div className='App'>
     <main className='flexbox'>
      <Box id='box-1' className='box' />
      <Box id='box-2' className="box">
        <Circle id='circle-2' className='circle' draggable ='true' />
      </Box>
     </main>
   </div>
  );
}

export default App;
