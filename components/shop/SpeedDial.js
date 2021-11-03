import { Button, ListItemSecondaryAction, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from "react";
import filterSvg from "../svg/filterSvg";

  
export default function SpeedDialTooltipOpen({ allCategories, filter }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          sx={{ 
            position: 'fixed', 
            bottom: 16, 
            right: 16, 
          }}
          FabProps={{color: 'secondary'}}
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