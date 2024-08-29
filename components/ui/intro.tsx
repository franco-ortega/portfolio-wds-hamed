import Image from 'next/image'
import introImage from '@/public/images/intro/franco.jpg'

type Props = {}
export default function Intro({}: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.flex}>
        <h1 className={styles.title}>Hey, I&#39;m Franco</h1>
        <p className={styles.content}>
          Detail-oriented software engineer with a passion for creating
          user-focused products. Thrives in collaborative, cross-functional,
          agile environments. Adept at developing innovative features, improving
          existing systems, creating efficient internal tools, and debugging
          issues within business applications. Approaches work optimistically to
          think big while balancing practicality to consistently achieve goals.
        </p>
        <p className={styles.content} style={styles.hide}>
          Additionally, despite growing up very much a math and science kid, has
          learned to love and nurture creativity through writing, cartography,
          and board game design. Other sources of joy are bouldering, bike
          rides, art shows, and visiting friends who have landed in faraway
          places. Finally, roller hockey, punk rock, and zines were big
          influences in the past that provided a lot of learnings around team
          work, expressiveness, and how the world could be a more equitable
          place.
        </p>
        <p className={styles.content} style={styles.hide}>
          Yes to racial justice, social justice, climate justice, and economic
          justice.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src={introImage}
          alt={'Franco Ortega'}
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

const styles = {
  section:
    'flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center',
  flex: 'mt-2 flex-1 md:mt-0',
  title: 'title no-underline',
  content: 'mt-3 font-light text-muted-foreground',
  imgContainer: 'relative',
  img: 'flex-1 rounded-lg grayscale',
  hide: { display: 'none' }
}
