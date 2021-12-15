import { Header,Hero,Project,Skills,About,Footer,Photo } from "../components"
import Head from "next/head"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Naveen Kala</title>
        <link rel="icon" href="/favicon.ico" className="rounded-full"/>
      </Head>
      <Header/>
      <main>
      <div className="flex sm:justify-evenly sm:flex-row sm:mt-4 flex-col justify-center items-center mt-2">
          <Hero/>
          <Photo/>
      </div>
          <Project/>
          <Skills/>
          <About/>
      </main>
      <Footer/>
    </div>
  )
}
