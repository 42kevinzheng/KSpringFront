import AppBar from '@mui/material/AppBar';
 import Toolbar from '@mui/material/Toolbar';
 import Typography from '@mui/material/Typography';
 import Container from '@mui/material/Container';
 import CssBaseline from '@mui/material/CssBaseline';
 import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Login';

 const queryClient = new QueryClient();
 function App() {
  return (
    <Container style={{ maxWidth: '100%' }}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#78009E' }}>
        <Toolbar>
          <Typography variant="h6">
          Kevin's Spring Chinese Learning  
          </Typography>
        </Toolbar>
      </AppBar>
              {/* Jumbotron Section */}
              <div className="jumbotron" style={{ backgroundColor: "#D3A9E1", padding: "2rem", borderRadius: "8px", marginTop: "20px", marginBottom: "20px", display: 'flex', alignItems: 'center' }}>
        <div>
          <h1 className="display-4">Hi! Welcome to my website!</h1>
          <p className="lead">
          The purpose of this website is to help you learn Mandarin Chinese (Simplified Chinese). It displays the Chinese word, the pinyin (romanization with accent marks), 
          the definition, and two example sentences showing how the word is used in Chinese, pinyin, and English. 
          You have the ability to customize the columns, filter out columns, change the row density, and export the words to an Excel file, or you can print them as well!                             
          </p>
          <p>New features will be added in the future shown in the following list:</p>
          <ul>
            <li>Add Users/Accounts</li>
            <li>Data Visualization</li>
            <li>Customizable Themes and UI</li>
            <li>Multilingual Support</li>
          </ul>
          <hr className="my-4" />
          <p>
            <span>Copyright @Kevin Zheng</span>
          </p>
        </div>
      </div>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </Container>
  )
 }
 export default App;