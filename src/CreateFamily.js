import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper, FormControl, InputLabel } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Family Name"
            id="family_name"
            defaultValue=""
            helperText="Your family name"
            margin="normal"
            variant="outlined"
            fullWidth
            style={{ margin: 8 }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Family Head Person"
            id="family_head"
            defaultValue=""
            helperText="Name your family head"
            margin="normal"
            variant="outlined"
            fullWidth
            style={{ margin: 8 }}
          />
        </Grid>
        <Grid item xs={12} spacing={3}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">GENDER</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'Male'}>MALE</option>
          <option value={20}>FEMALE</option>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <Button variant="contained" color="primary"
          href="/family-tree"
          >
            Create
          </Button>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
