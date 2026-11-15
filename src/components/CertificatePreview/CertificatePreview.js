import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

function CertificatePreview({ image, title, label, children, className, style }) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <>
            <button type="button" className={className} style={style}
                aria-label={label} aria-haspopup="dialog" onClick={() => setOpen(true)}>
                {children || label}
            </button>
            <Dialog open={open} onClose={close} maxWidth="md" fullWidth aria-label={title}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <img src={image} alt={title}
                        style={{display: 'block', width: '100%', height: 'auto', margin: '0 auto'}} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={close} autoFocus>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default CertificatePreview;
