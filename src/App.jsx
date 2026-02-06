import { Button, Typography } from '@mui/material'

function App() {
  return (
    <>
      <Typography variant="h2">MUI works</Typography>
      <Button variant="outlined" onClick={()=>{console.log("wow")}}>Click me</Button>
    </>
  )
}

export default App
