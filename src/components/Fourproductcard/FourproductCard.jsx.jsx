import React from 'react'
import classes from "./FourproductCard.module.css"
// import { image } from './ImgS/ImgData'
function FourproductCard (){
  return (
    <div className={classes.card_product_container}>
<div className={classes.card_product}>
    <h2> Deals in PCs</h2>
<img className={classes.img} src="../../assets/10001.jpeg" alt="" />
<a href="">shop now</a>
</div>
{/* <div className={classes.card_product}>
    <h2> Deals in PCs</h2>
    <div className={classes.card_product_nested_card}>
<div className={classes.card_nested}>
<img src="./ImgS/10006.jpg" alt="" />
</div>
    </div>

</div> */}

    </div>
  )
}

export default FourproductCard