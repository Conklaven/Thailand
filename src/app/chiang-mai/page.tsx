'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Chiangmai() {
    const pathname = usePathname();

    return (
        <div className="p-4">
            <p className="text-lg font-semibold mb-4">Chiang Mai</p>
            <div className="flex gap-4">
                <Link href={`${pathname}/shopping`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijJu6BX_JPn5Wj13IqvqlThItzpQd-ihNxw&s" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Shopping
                    </div>
                </Link>
                <Link href={`${pathname}/restaurants`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbjtqpErfjM8njSE2jvtsgfloQQ8nS-x4Ahw&s" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Food
                    </div>
                </Link>
            </div>
        </div>
    );
}
