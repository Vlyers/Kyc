import Image from 'next/image'
import { Inter } from 'next/font/google'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import styles from '@/styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${styles.container} h-screen `}>
      <SignIn />
      <SignUp/>
    </div>
  )
}
