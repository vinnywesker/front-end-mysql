import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
    const handleClose = ()=>{
        props.State(false);
    }
    return (
        <div>
            <Dialog open={props.Open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{props.Title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {props.Message}
                    </DialogContentText>
                    {props.children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
          </Button>
                    <Button onClick={props.Click} color="primary">
                        Adicionar
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
