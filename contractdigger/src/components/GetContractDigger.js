import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './../App.css';


import {getContractTransactionsPolygon} from '../components/api/contractApi.js'

import {
Table,
TableBody,
TableRow,
TableCell,
TableContainer,
Typography,
Button,
} from '@mui/material';


export default function GetContractDigger() {
    const [name, setName] = useState("");
    const [txData, setTxData] = useState([])

    const handleSubmit = async (event) => {
      event.preventDefault();
      const response = await getContractTransactionsPolygon(name)
      console.log(response)
      if(response)
       {
        setTxData(response)
       }
      
    }

    const handleTextChange = (evt) => {
        evt.preventDefault();
        setName(evt.target.value)
        console.log(evt.target.value)
        console.log('Submitting Name', name, evt.target)
        console.log(name)
      }

  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          id="standard-helperText"
          label="Contract Address"
          helperText="Contract Address to dig into"
          variant="standard"
          value={name}
          onChange={handleTextChange}
        />
        <Button
          type="submit"
          size="small"
          variant="contained"
          onClick={handleSubmit}>
            Submit
          </Button>
     </Box>
     
     <>
      <TableContainer>
      <Table aria-label='table' size='small'>
      <TableBody>
       {/* { console.log('this is',txData) } */}
         {txData.map((data, index)=>( 
          <TableRow  key="hash">
            <TableCell>{index}</TableCell>
          <TableCell>{data.timeStamp}</TableCell>
          
          <TableCell>{data.from}</TableCell>
          <TableCell>{data.to}</TableCell>
          <TableCell>{data.functionName}</TableCell>
          <TableCell> {data.hash}</TableCell>
          
        </TableRow>
         ))}
        
      </TableBody>
      </Table>
      </TableContainer>
      </>
      </>
     );

//Place the table below.

}