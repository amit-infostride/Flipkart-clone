
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Header from './components/header/Header';

function App() {
  return (
    <div>

      <Header />
      <Box style={{marginTop:'60px'}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
