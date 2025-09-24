import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';

const BasicBreadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          underline="hover" 
          color="inherit" 
          onClick={() => navigate('/')} 
          style={{ cursor: 'pointer' }}
        >
          Home
        </Link>
        {/* Map over path segments */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          //console.log(to);
          
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={to} sx={{ color: 'text.primary' }}> {value}</Typography>
          ) : (
            <Link
              key={to}
              underline="hover"
              color="inherit"
              onClick={() => navigate(to)}
              style={{ cursor: 'pointer' }}
            >
              {value}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BasicBreadcrumbs;
