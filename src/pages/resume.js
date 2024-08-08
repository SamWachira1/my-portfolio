import Head from 'next/head';

const Resume = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', margin: 0 }}>
        <iframe
          src="/Resume.pdf"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Resume;
