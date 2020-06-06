import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
          variant="outlined"
          fullWidth
          style={{ margin: 8 }}
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
          variant="outlined"
          fullWidth
          style={{ margin: 8 }}
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
          variant="outlined"
          fullWidth
          style={{ margin: 8 }}
        />
      </div>
      <div>
        <Button
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          helperText="Some important text"
          margin="normal"
          variant="outlined"
          fullWidth
          style={{ margin: 8 }}
        />
      </div>
    </div>
  );
}
