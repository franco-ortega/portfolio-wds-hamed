type Props = {}
export default function BlogPage({}: Props) {
  const posts = ['1', '2', '3']
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blog</h1>
      </div>
      <ul>
        {posts.map(post => (
          <li key={post}>{post}</li>
        ))}
      </ul>
    </section>
  )
}

const styles = {
  section: 'pb-24 pt-40',
  container: 'container max-w-3xl',
  heading: 'title mb-12'
}
