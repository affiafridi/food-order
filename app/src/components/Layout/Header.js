import React from "react"
import classes from './Header.module.css'
import mealImage from '../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['mainImage']}>
        <img src={mealImage} alt="" className={classes.mealImage} />
      </div>
    </>
  )
}

export default Header