import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core';
import { Edit as EditIcon } from '@material-ui/icons';
import { Add as AddIcon } from '@material-ui/icons';

// Generate Order Data
function createData(id, date, family_name, members, actions) {
    return { id, date, family_name, members, actions };
}

const rows = [
    createData(0, '16 Mar, 2019', 'Patel Family', 2, 'VISA ⠀•••• 3719', 312.44),
    createData(1, '16 Mar, 2019', 'Smith Family', 3, 'VISA ⠀•••• 2574', 866.99),
    createData(2, '16 Mar, 2019', 'Tom Scholz', 4, 'MC ⠀•••• 1253', 100.81),
    createData(3, '16 Mar, 2019', 'Michael Jackson', 4, 'AMEX ⠀•••• 2000', 654.39),
    createData(4, '15 Mar, 2019', 'Bruce Springsteen', 6, 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Families() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Family Name</TableCell>
                        <TableCell>Member</TableCell>
                        <TableCell>Actions
                        <Button 
                        href="/create"
                        variant="contained"
                        color="primary"
                        style={
                            {
                                marginLeft:10
                            }
                        }
                        >
                            <AddIcon />
                        </Button>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.family_name}</TableCell>
                            <TableCell>{row.members}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary">
                                    <EditIcon /></Button>
                                <Button
                                    variant="contained"
                                    color="secondary">
                                    <AddIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
        </React.Fragment>
    );
}