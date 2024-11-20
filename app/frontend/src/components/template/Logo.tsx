import {Righteous} from 'next/font/google'
import Link from "next/link";   
import Image from "next/image";

const fonte = Righteous({weight: '400', subsets: ['latin']})

export default function Logo() {
    return (
        <Link href="/" className={`flex flex-col items-center gap-2 ${fonte.className}`}>
            <Image src="/logo.svg" alt="Logo" width={100} height={100}/>
            <h1 className='text-5xl'>
                <div>CONVIT<span className='text-blue-500'>3</span> DIGITAL</div>
            </h1>
        </Link>
    )
}