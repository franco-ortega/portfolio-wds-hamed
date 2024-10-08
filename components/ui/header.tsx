import Link from 'next/link'
import ThemeToggle from './theme-toggle'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={'/'} className={styles.home}>
            Franco Ortega
          </Link>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li className={styles.listItem}>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

const styles = {
  header: 'fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm',
  nav: 'container flex max-w-3xl items-center justify-between',
  home: 'font-serif text-2xl font-bold',
  list: 'flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10',
  listItem: 'transition-colors hover:text-foreground'
}
