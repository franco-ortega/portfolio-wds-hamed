export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Portfolio</h1>
      </div>
    </section>
  )
}

const styles = {
  section: 'py-24',
  container: 'container max-w-3xl',
  heading: 'text-3xl font-bold'
}
