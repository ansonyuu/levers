import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import styles from '../styles/parallax.module.scss';

export default function Home({ levers }: any) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className={styles.main}>
      <motion.div className={styles.box} style={{ y: y1, x: -50 }}>
        {' '}
        <Image alt='' src='/index-decor.png' width={600} height={400} />
      </motion.div>
      <motion.div
        className={styles.box}
        style={{ y: y2, x: 50, background: 'salmon' }}
      >
        {' '}
        <Image alt='' src='/index-hero.png' width={600} height={400} />
      </motion.div>
      {/* <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 100], [0, -50]) }}
          className={styles.sticky}
        >
          <Image alt="" src="/index-decor.png" width={600} height={400} />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 100], [0, -100]) }}
          className={styles.layer2}
        >
          <Image alt="" src="/index-hero.png" width={600} height={400} />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 100], [0, -150]) }}
          className={styles.layer3}
        >
          <Image alt="" src="/index-decor.png" width={600} height={400} />
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 100], [0, -250]) }}
          className={styles.layer4}
        >
          <Image alt="" src="/index-decor.png" width={600} height={400} />
        </motion.div> */}
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync('levers');
  const levers: any = [];

  files.map((file) => {
    const titlePost = fs.readFileSync(`levers/${file}`, 'utf-8');
    const { data: postData, content } = matter(titlePost);

    levers.push({
      title: postData.title,
      oneliner: postData.oneliner,
      image: 'cover-market.png',
      authors: postData.authors,
      stage: postData.stage,
      link: `/?${postData.title.replace(/ /g, '%20')}`,
      content: content,
    });
  });

  return {
    props: {
      levers,
    },
  };
}
