import { Button, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
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
          sx={{ 
            position: 'fixed', 
            bottom: 16, 
            right: 16,
            
          }}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {allCategories.map((obj) => (
           
           <SpeedDialAction
              key={obj.name}
              icon={<img style={{ width: '30px', height: '30px' }} src={obj.img}/>}
              tooltipTitle={obj.name}
              tooltipOpen
              onClick={() => filter(obj.name)}
              
            />
            
          ))}
        </SpeedDial>
      
    );
}



{/* <SpeedDialAction
              key={i}
              icon={<SaveIcon/>}
              tooltipTitle={cat}
              tooltipOpen
              onClick={() => filter(cat)}
              
            /> */}