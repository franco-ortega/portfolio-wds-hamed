import Intro from '@/components/ui/intro'

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Intro />
      </div>
    </section>
  )
}

const styles = {
  section: 'py-24',
  container: 'container max-w-3xl',
  heading: 'text-3xl font-bold'
}
