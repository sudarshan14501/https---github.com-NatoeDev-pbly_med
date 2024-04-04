'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNextClick = () => {
    // Navigate to the desired page
    router.push('/dashboard');
  };
  return (
<section>
	<div className="dark:bg-violet-600">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">AI Generated Scan Reports</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">I have no idea what to write here!</p>
			<div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-300 dark:text-gray-50" onClick={handleNextClick}>Get Started</button>
			</div>
		</div>
	</div>
	<img src="3643551.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />
</section>
  );
}
