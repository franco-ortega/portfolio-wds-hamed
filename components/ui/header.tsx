import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <nav>
        <div>
          <Link href={'/'}>Home</Link>
        </div>

        <ul>
          <li>
            <Link href={'/posts'}>Posts</Link>
          </li>
          <li>
            <Link href={'/projects'}>Projects</Link>
          </li>
          <li>
            <Link href={'/contact'}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
