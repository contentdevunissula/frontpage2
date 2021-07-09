import Head from 'next/head'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>BWA MICRO</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1>Ini halaman utama</h1>
      </main>
    </div>
  )
}
