import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
        <div className="max-w-screen-lg m-auto mt-20 px-5 lg:px-0">
          HomePage
        </div>
      </Layout>

  )
}
