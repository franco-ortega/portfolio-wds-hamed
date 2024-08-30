type Props = {}
export default function BlogPage({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Blog</h1>
      </div>
    </section>
  )
}

const styles = {
  section: 'pb-24 pt-40',
  container: 'container max-w-3xl',
  heading: 'title mb-12'
}
