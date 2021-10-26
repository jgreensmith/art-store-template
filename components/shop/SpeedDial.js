import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Box } from "@mui/system";
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";


const actions = [
    { icon: <SaveIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <SaveIcon />, name: 'Print' },
    { icon: <SaveIcon />, name: 'Share' },
  ];
  
export default function SpeedDialTooltipOpen() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              tooltipOpen
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      
    );
}