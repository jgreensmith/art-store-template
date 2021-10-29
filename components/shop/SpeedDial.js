import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { Box } from "@mui/system";
import SaveIcon from '@mui/icons-material/Save';
import { useState } from "react";

  
export default function SpeedDialTooltipOpen({ allCategories, filter }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = (e) => {
      setOpen(false);
    }
    
  
    return (
      
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {allCategories.map((cat, i) => (
            <SpeedDialAction
              key={i}
              icon={<SaveIcon />}
              tooltipTitle={cat}
              tooltipOpen
              onClick={() => filter(cat)}
              
            />
          ))}
        </SpeedDial>
      
    );
}