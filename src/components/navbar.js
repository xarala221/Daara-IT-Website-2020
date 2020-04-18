import React from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Img from "../images/logo-dit-122x118.png"
import NavLink from "./nav-link"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    marginBlock: 1,
    height: 50.8,
  },
  link: {
    color: 'black',
    fontWeight: '700',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}))

export default function Navbar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img
            className={classes.logo}
            src={Img}
            alt="daara it"
            title="logo daara it"
          />
          <Typography color="inherit" variant="h8" className={classes.title}>
            <Link to="/" className={classes.link}> DAARA-IT </Link>
          </Typography>
          <Typography>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/a-propos/">A propos</NavLink>
            <NavLink to="/gallery/">Gallery </NavLink>
            <NavLink to="/forum/">Forum</NavLink>
            <NavLink to="/evenement/">Evénements</NavLink>
            <NavLink to="/contact/">Contact</NavLink>
            <NavLink></NavLink>
            <NavLink></NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
