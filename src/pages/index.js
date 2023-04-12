import Content from '../components/Content';
import MainContent from '../components/MainContent';
import Head from 'next/head'
import Hero from  '../components/Hero'
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Little Wonders Childminding - Home</title>
        <meta name="description" content="Homepage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <Hero 
      heading="The Joy of Little Wonders" 
      message="Fostering growth and creativity through engaging activities in a nurturing environment"
      buttonText="Explore" />
      <MainContent 
      title="Where Little Minds Flourish"
      subtitle="At Little Wonders Childcare, we create a nurturing and secure haven where your children can grow, learn, and thrive. Our compassionate and experienced team is devoted to delivering the highest quality care, ensuring that each child feels valued and supported."
      imageUrl="/images/stackingblocks.jpg"
      />
      <Content />
      <HomeContent />
    </>
  );
}
