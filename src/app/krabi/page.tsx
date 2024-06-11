'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Krabi() {
    const pathname = usePathname();

    return (
        <div className="p-4">
            <p className="text-lg font-semibold mb-4">Krabi</p>
            <div className="flex gap-4">
                <Link href={`${pathname}/shopping`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        Shopping
                    </div>
                </Link>
                <Link href={`${pathname}/restaurants`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        Food
                    </div>
                </Link>
            </div>
        </div>
    );
}
