import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Families from './Families';
import FamilyTable from './FamilyTable';
import CreateFamily from './CreateFamily';
import FamilyTree from './Tree';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Family Tree
        </Typography>
      </Box>
      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/create">
              <CreateFamily />
          </Route>
            <Route path="/table">
              <FamilyTable />
            </Route>
            <Route path="/family-tree">
              <FamilyTree />
            </Route>
            <Route path="/">
              <Families />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}