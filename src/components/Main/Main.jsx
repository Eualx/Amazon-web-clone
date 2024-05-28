import React from 'react'
import classes from "./Main.module.css"
import { Link } from "react-router-dom";

function Main() {
  return (
   
    <div className={classes.footer_upper}>
<hr />
<p>see personalized recommendation</p>

<button className={classes.button}> <Link to="/auth">Sign in</Link></button>

<h5>New customer? <span><Link to="/auth">Start here.</Link>
</span></h5>
<hr />

</div>
   
  )
}

export default Main