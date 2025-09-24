import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BasicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {pathnames.map((value, index)=>{
          const to = `/${pathnames.slice(0, index+1).join('/')}`

          const isLast = index === pathnames.length -1;
          return(
            <span key={to}>{' /'} {isLast ? (<span>{value}</span>) : (<Link>{value}</Link>)}</span>
          )
        })}
      </nav>
    </div>
  )
}

export default BasicBreadcrumbs
