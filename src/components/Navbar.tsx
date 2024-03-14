const InstagramLink = 'https://www.instagram.com/nigma.emerge'
const FacebookLink = 'https://www.facebook.com/nigma.emerge'
const TwitterLink = 'https://twitter.com/nigma_emerge'
const YouTubeLink = 'https://www.youtube.com/@nigmaemerge3906'
const TikTokLink = 'https://www.tiktok.com/@nigmaemerge?lang=es'

import { Button } from '@nextui-org/react'
import TwitterImage from '../assets/icons-twitter.svg'
import YouTubeImage from '../assets/icons-youtube.svg'
import FacebookImage from '../assets/icons8-facebook (1) 1.svg'
import InstagramImage from '../assets/icons8-instagram 1.svg'
import TikTokImage from '../assets/icons8-tiktok 1.svg'
import LogoNigmaImage from '../assets/logonigma.svg'

import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
	return (
		<div className="container mx-auto">
			<div className="flex gap-6 items-end justify-between border-gray-200 px-4">
				<Link href="/">
					<Image
						className="relative object-cover"
						alt="logo"
						src={LogoNigmaImage}
					/>
				</Link>
				<nav className="flex z-30 flex-row items-center justify-center text-center mt-3">
					<div className="self-stretch flex-1 lg:flex flex-row items-center justify-end gap-[2rem] lg:gap-[1rem] xl:gap-[2rem] mr-6 hidden ">
						<Link
							href="#home"
							className="self-stretch flex flex-col items-center justify-center relative text-m3-sys-light-secondary-container no-underline font-semibold"
						>
							Home
							<div className="absolute my-0 -top-3 left-[calc(50%_-_20px)] bg-m3-sys-light-secondary-container w-9 h-1" />
						</Link>

						<Link
							href="#mision"
							className="self-stretch flex flex-col justify-center text-white no-underline font-semibold"
						>
							Misión
						</Link>


						<Link
							href="#servicios"
							className="self-stretch flex flex-col items-center justify-center text-white no-underline font-semibold"
						>
							Servicios
						</Link>

						<Link
							href="#productos"
							className="self-stretch flex flex-col items-center justify-center text-white no-underline font-semibold"
						>
							Productos
						</Link>

						<Link
							href="#team"
							className="self-stretch flex flex-col items-center justify-center text-white no-underline font-semibold"
						>
							Team
						</Link>

						<div className="flex flex-row items-center justify-end py-[0rem] px-[0.5rem] gap-[1rem]">
							<Link
								href={InstagramLink}
								target='_blank'
								className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
							>
								<Image alt="instagram" src={InstagramImage} />
							</Link>
							<Link
								href={TwitterLink}
								target='_blank'
								className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
							>
								<Image alt="instagram" src={TwitterImage} />
							</Link>
							<Link
								href={YouTubeLink}
								target='_blank'
								className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
							>
								<Image alt="instagram" src={YouTubeImage} />
							</Link>
							<Link
								href={TikTokLink}
								target='_blank'
								className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
							>
								<Image alt="instagram" src={TikTokImage} />
							</Link>
							<Link
								href={FacebookLink}
								target='_blank'
								className="w-[1.25rem] h-[1.25rem] overflow-hidden shrink-0"
							>
								<Image alt="instagram" src={FacebookImage} />
							</Link>
						</div>
					</div>
					<Button className='rounded-81xl bg-m3-sys-light-secondary-container border-none py-2 px-6 cursor-pointer font-semibold font-montserrat text-base'>
						Contáctenos
					</Button>
					<div className="flex ml-2 lg:hidden">
						<Button
							className="cursor-pointer text-white bg-[#006971] px-2 min-w-unit-1 border-none rounded-xl inline-flex items-center justify-center"
						>
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
					</div>
				</nav>
			</div>
		</div>
	)
}
export default Navbar;
