import Link from "next/link";
import Image from "next/image";
import { FaMosque } from "react-icons/fa";


export default function Header() {
    return (
        <header className="border-b backdrop-blur-glass flex gap-x-2 absolute top-0 z-20 w-full items-center justify-between px-6">
            <div className="flex items-center justify-center gap-2">
                {/* <Image src="/image.png" alt="logo" width={80} height={80}></Image> */}
                <span className="h-16 w-16 flex items-center justify-center">
                    <FaMosque className="h-full w-full hover:text-blue-600 hover:scale-110" />
                </span>
                <h1 className="text-4xl font-bold pl-5 hover:text-blue-600">Pyara Islam</h1>
            </div>

            <nav>
                <ul className="flex flex-x-2 gap-1 pr-5 text-2xl font-bold">
                    <li className="hover:text-white hover:bg-blue-300 hover:rounded-lg px-5">
                        <Link href="/duas">{`Dua's`}</Link>
                    </li>

                    <li className="hover:text-white hover:bg-blue-300 hover:rounded-lg  px-5">
                        <Link href="/names99">99 Names Of ALLAH</Link>
                    </li>

                    <li className="hover:text-white hover:bg-blue-300 hover:rounded-lg  px-5">
                        <Link href="/">Tasbih</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}