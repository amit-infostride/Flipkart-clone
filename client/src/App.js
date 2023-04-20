
import { Box } from '@mui/material';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>

      <Header />
      <Box style={{marginTop:'60px'}}>
        <Home />
      </Box>
    </DataProvider>
  );
} 

export default App;
