import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ScrollDialog({children}) {
    const [open, setOpen] = React.useState(false);

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button onClick={() => setOpen(true)}>Edit schema</Button>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                scroll="body"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description">
                <DialogTitle id="scroll-dialog-title">Resource schema</DialogTitle>
                <DialogContent dividers={false}>
                    <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef} tabIndex={-1}/>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary" disabled>Make a request</Button>
                    <Button onClick={() => setOpen(false)} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
