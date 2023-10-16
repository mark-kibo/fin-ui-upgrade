import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

import CloseIcon from '@mui/icons-material/Close';
// props includes the message and the type of message(eg Success, failure)
const MessageHandler = (props) => {
  // 

  const [open, setOpen] = useState(true);

  return (
    // container box that holds the alert
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
        severity={props.type} 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
              // changes the color of the alert based on the type eg success
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.message}
        </Alert>
      </Collapse>
    </Box>
  );
}


export default MessageHandler;

