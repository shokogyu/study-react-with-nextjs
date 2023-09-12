import Link from 'next/link'
import classes from './Header.module.css'

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        Home
      </Link>
      <Link href="about">
        About
      </Link>
    </header>
  )
}