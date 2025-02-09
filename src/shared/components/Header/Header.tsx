import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Header.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/authContext/AuthContext';

export const Header = () => {
  const nav = useNavigate();
  const authUser = useAuth();
  const userEmail = authUser.currentUser?.email;
  const [subject, changeSubject] = useState('БИОЛОГИЯ');
  const changeLabal = () => {
    changeSubject(subject === 'БИОЛОГИЯ' ? 'ХИМИЯ' : 'БИОЛОГИЯ');
  };

  const navItems = [
    {
      label: 'ПРОФИЛЬ',
      to: `/profile/${userEmail}`
    },
    {
      label: 'О НАС',
      to: '/info'
    },
    {
      label: 'ТЕСТЫ',
      to: '/tests'
    },
    {
      label: 'ТЕМЫ',
      to: '/themes'
    }
  ];

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          {subject}
        </Typography>

        <Button onClick={changeLabal} sx={{ backgroundColor: 'red', color: '#fff' }}>
          сменить предмет
        </Button>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {navItems.map((item) => (
            <Button
              onClick={() => {
                nav(item.to);
              }}
              key={item.label}
              sx={{ color: '#fff' }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
