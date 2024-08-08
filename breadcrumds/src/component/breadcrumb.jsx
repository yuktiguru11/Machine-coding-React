import { Link, useLocation } from "react-router-dom"

const BreadCrumb =()=>{
    const {pathname} = useLocation()
    const pathnames = pathname.split('/').filter(x => x)
    let breadcrumbs = ''
    return (
      <>
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        {pathnames.map((name, index)=>{
             breadcrumbs += '/'+name;
            const isLast = index === pathnames.length-1;
            return isLast ? (
                <span key ={breadcrumbs}>/ {name}</span>
            ) : (
                <span key ={breadcrumbs}>
                    / <Link to={breadcrumbs}>{name}</Link>
                </span>
            )
                 
})}
      </div>
      </>  
    )
}

export default BreadCrumb
