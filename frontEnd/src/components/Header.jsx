import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Clinica</Link>
          </Typography>
          <Link to="/cadastrar">
            <Button
              color="inherit"
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              Adicionar Novo
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
