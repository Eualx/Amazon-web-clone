import React from 'react'
import CategoryCard from './CategoryCard'
import {categoryInfos} from './CategoryInfos'
import classes from './Category.module.css'

function Category() {
  
  return (
    <section className={classes.category_container}>
{
    categoryInfos?.map((infos,i)=>{
       return <CategoryCard data={infos} key={i}/>
        console.log(infos)
    }
    )
}
    </section>
  )
}

export default Category