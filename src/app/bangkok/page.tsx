'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Bangkok() {
    const pathname = usePathname();

    return (
        <div className="p-4">
            <p className="text-lg font-semibold mb-4">Bangkok</p>
            <div className="flex gap-4">
                <Link href={`${pathname}/shopping`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Asia/Thailand/Bangkok/talad-rod-fai-market-bangkok-shopping-lead-image.jpg" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Shopping
                    </div>
                </Link>
                <Link href={`${pathname}/restaurants`} className="text-black no-underline">
                    <div className="border border-black p-5 rounded-lg text-center w-36 cursor-pointer bg-white shadow-md">
                        <img src="https://i.insider.com/629a6b217bc6a80018b64bb8?width=700" alt="Shopping" className="w-full h-24 object-cover rounded-md mb-2"/>
                        Food
                    </div>
                </Link>
            </div>
        </div>
    );
}
