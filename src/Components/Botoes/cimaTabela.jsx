import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function IconLabelButtons(props) {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={
                (props.Icone === 'Add') ?
                    <AddIcon /> :
                    (props.Icone === 'Refresh') ?
                        <RefreshIcon /> :
                        <div />
            }

            onClick={props.Click}
        >
            {props.Title}
        </Button>
    );
}
