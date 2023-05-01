import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from './components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <Layout>
        <div className="max-w-screen-lg m-auto mt-20 px-5 lg:px-0 h-screen">
        <h1 className="text-center font-bold text-5xl">Hi, {process.env.NEXT_PUBLIC_NAME}</h1>
        </div>
      </Layout>

  )
}
