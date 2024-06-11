'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Phuket() {
    const pathname = usePathname();

    return (
        <div className="p-4">
            <p className="text-lg font-semibold mb-4">Phuket</p>
            <div className="flex gap-4">
                <Link href={`${pathname}/shopping`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/04/phuket-walking-street.jpg?tr=w-400" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Shopping
                    </div>
                </Link>
                <Link href={`${pathname}/restaurants`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://www.clubunique.com/wp-content/uploads/2020/02/table-with-thai-food-1366.jpg" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Food
                    </div>
                </Link>
            </div>
        </div>
    );
}
