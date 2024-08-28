import Image from 'next/image'

type Props = {}
export default function Intro({}: Props) {
  return (
    <section>
      <div>
        <h1>
          <p>
            Detail-oriented software engineer with a passion for creating
            user-focused products. Thrives in collaborative, cross-functional,
            agile environments. Adept at developing innovative features,
            improving existing systems, creating efficient internal tools, and
            debugging issues within business applications. Approaches work
            optimistically to think big while balancing practicality to
            consistently achieve goals.
          </p>
          <p>
            Additionally, despite growing up very much a math and science kid,
            has learned to love and nurture creativity through writing,
            cartography, and board game design. Other sources of joy are
            bouldering, bike rides, art shows, and visiting friends who have
            landed in faraway places. Finally, roller hockey, punk rock, and
            zines were big influences in the past that provided a lot of
            learnings around team work, expressiveness, and how the world could
            be a more equitable place.
          </p>
          <p>
            Yes to racial justice, social justice, climate justice, and economic
            justice.
          </p>
        </h1>
      </div>
      <div>
        <Image src={''} alt={''} />
      </div>
    </section>
  )
}
