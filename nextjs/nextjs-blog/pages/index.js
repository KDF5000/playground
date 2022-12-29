import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const notion = new NotionAPI()

  const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

  return {
    props: {
      allPostsData,
      recordMap,
    },
  };

}

export default function Home({ allPostsData, recordMap }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </Layout>
  );
}
