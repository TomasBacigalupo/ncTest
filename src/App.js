import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Grid from '@mui/material/Grid';
import DenseAppBar from './components/DenseAppBar';
import BasicTable from './components/BasicTable';
import LoginForm from './components/LoginForm';
import { createMember, getMembers } from './service/apiservice';
import * as React from 'react';
import { Container, Dialog, DialogContent, DialogTitle, formControlLabelClasses, Paper, Button } from '@mui/material';

function App() {
  const [update, setUpdate] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  
  const submitData = (data) => {
    createMember(data).then(r => setUpdate(!update));
  }

  React.useEffect(()=>{
    const fetched = [];
    getMembers().then(r => {
        setRows(r.data)
    })
    
}, [update])

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  return (
    <div className="App">
      <DenseAppBar/>
      <br/>
      <Container>
      <Grid container spacing={2}>
      <br/>
        <Grid xs={12} item >
          <Paper>
            <Form submitData={submitData}/> 
            <br/>
          </Paper>
        </Grid>
        <br/>
        <Grid xs={12} item>
          <Paper>
            <BasicTable update={update}/>
          </Paper>
        </Grid>
        <br/>
        <Dialog open={open}>
          <DialogTitle>Login</DialogTitle>
          <DialogContent>
            <LoginForm handleClose={handleClose}/>
          </DialogContent>
        </Dialog>
        <Grid item>
        <Paper>
        <Button onClick={()=>handleOpen()}>LogIn</Button>
        </Paper>
        </Grid>
        
        
      </Grid>
      </Container>
    </div>
  );
}

export default App;
