import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import  LeftBarData  from './leftbardata';
import { ListItem } from '@mui/material';
import {  useNavigate } from 'react-router-dom';

const drawerWidth = 250;

export default function PermanentDrawerLeft() {

const Navigate = useNavigate();
  


  return (
    <Box   >
      <CssBaseline />
      <Drawer
        className='Drawer'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <Divider />
        <List  >
          <ListItemButton
          className='dflex ' >
        {
          LeftBarData.map(item =>(
            <ListItem
            className='btn'
            key ={item.id}
            button
                onClick={() => Navigate(item.path) }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.title} </ListItemText>

                </ListItem>
                  
              ))
            }
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}
