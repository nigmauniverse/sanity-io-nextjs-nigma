import ButtonLink from "./ButtonLink";

const Navbar = () => {
	return (
		<nav id="header" className="fixed w-full z-10 top-0 text-white">
			<div
				id="progress"
				className="h-1 z-20 top-0"
				style={{
					background: "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
					// @ts-ignore
					"--scroll": "0%"
				}}
			/>

			<div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
				<div className="pl-4">
					<a className="no-underline hover:no-underline font-extrabold text-xl" href="#">
						<svg width="107" height="40" viewBox="0 0 107 40" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect y="5" width="107" height="30" fill="url(#pattern0)"/>
							<defs>
								<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use transform="matrix(0.00483092 0 0 0.0172303 0 -0.00829308)"/>
								</pattern>
								<image id="image0_1864_6724" width="207" height="59"
											 xlinkHref="data:image/png;base64,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"/>
							</defs>
						</svg>
					</a>
				</div>

				<div className="block lg:hidden pr-4">
					<button id="nav-toggle"
									className="flex items-center px-3 py-2 border rounded border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
						<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</button>
				</div>

				<div className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-transparent z-20"
						 id="nav-content">
					<ul className="list-reset lg:flex justify-end flex-1 items-center">
						<li className="mr-3">
							<a className="inline-block py-2 px-4 font-bold no-underline" href="#">Home</a>
						</li>
						<NavbarItem label="Mision" href="#"/>
						<NavbarItem label="Team" href="#"/>
						<NavbarItem label="Servicios" href="#"/>
						<NavbarItem label="Productos" href="#"/>
						<NavbarItem label="Noticias" href="#"/>
						<li className="mr-3 flex items-center">
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M6.66667 2.5C4.36583 2.5 2.5 4.36583 2.5 6.66667V13.3333C2.5 15.6342 4.36583 17.5 6.66667 17.5H13.3333C15.6342 17.5 17.5 15.6342 17.5 13.3333V6.66667C17.5 4.36583 15.6342 2.5 13.3333 2.5H6.66667ZM15 4.16667C15.46 4.16667 15.8333 4.54 15.8333 5C15.8333 5.46 15.46 5.83333 15 5.83333C14.54 5.83333 14.1667 5.46 14.1667 5C14.1667 4.54 14.54 4.16667 15 4.16667ZM10 5.83333C12.3008 5.83333 14.1667 7.69917 14.1667 10C14.1667 12.3008 12.3008 14.1667 10 14.1667C7.69917 14.1667 5.83333 12.3008 5.83333 10C5.83333 7.69917 7.69917 5.83333 10 5.83333ZM10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5Z"
										fill="white"/>
								</svg>
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.3775 6.65667L13.07 13.3433H11.8225L7.13833 6.65667H8.3775ZM17.5 5V15C17.5 16.3808 16.3808 17.5 15 17.5H5C3.61917 17.5 2.5 16.3808 2.5 15V5C2.5 3.61917 3.61917 2.5 5 2.5H15C16.3808 2.5 17.5 3.61917 17.5 5ZM14.615 14.1667L11.1267 9.175L13.9783 5.83333H12.8858L10.6325 8.46667L8.79333 5.83333H5.585L8.86917 10.5275L5.755 14.1667H6.86583L9.36667 11.2367L11.415 14.1667H14.615Z"
										fill="white"/>
								</svg>
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M17.9863 5.15492C17.7946 4.43825 17.2296 3.87325 16.513 3.68159C15.213 3.33325 10.0013 3.33325 10.0013 3.33325C10.0013 3.33325 4.78964 3.33325 3.48964 3.68159C2.77297 3.87325 2.20797 4.43825 2.0163 5.15492C1.66797 6.45492 1.66797 9.99992 1.66797 9.99992C1.66797 9.99992 1.66797 13.5449 2.0163 14.8449C2.20797 15.5616 2.77297 16.1266 3.48964 16.3183C4.78964 16.6666 10.0013 16.6666 10.0013 16.6666C10.0013 16.6666 15.213 16.6666 16.513 16.3183C17.2305 16.1266 17.7946 15.5616 17.9863 14.8449C18.3346 13.5449 18.3346 9.99992 18.3346 9.99992C18.3346 9.99992 18.3346 6.45492 17.9863 5.15492ZM8.33464 12.8866V7.11325L13.3346 9.99992L8.33464 12.8866Z"
										fill="white"/>
								</svg>
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5 2.5C3.62919 2.5 2.5 3.62919 2.5 5V15C2.5 16.3708 3.62919 17.5 5 17.5H15C16.3708 17.5 17.5 16.3708 17.5 15V5C17.5 3.62919 16.3708 2.5 15 2.5H5ZM10 5.83333H11.6667C11.6667 6.67083 12.8925 7.5 13.3333 7.5V9.16667C12.8292 9.16667 12.2233 8.94513 11.6667 8.57096V11.6667C11.6667 13.045 10.545 14.1667 9.16667 14.1667C7.78833 14.1667 6.66667 13.045 6.66667 11.6667C6.66667 10.2883 7.78833 9.16667 9.16667 9.16667V10.8333C8.70667 10.8333 8.33333 11.2075 8.33333 11.6667C8.33333 12.1258 8.70667 12.5 9.16667 12.5C9.62667 12.5 10 12.1258 10 11.6667V5.83333Z"
										fill="white"/>
								</svg>
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none"
										 xmlns="http://www.w3.org/2000/svg">
									<path
										d="M15.8333 2.5H4.16667C3.24583 2.5 2.5 3.24583 2.5 4.16667V15.8333C2.5 16.7542 3.24583 17.5 4.16667 17.5H10.5175V11.6992H8.565V9.42833H10.5175V7.7575C10.5175 5.82083 11.7017 4.765 13.43 4.765C14.0125 4.76333 14.5942 4.79333 15.1733 4.8525V6.8775H13.9833C13.0417 6.8775 12.8583 7.3225 12.8583 7.97917V9.425H15.1083L14.8158 11.6958H12.845V17.5H15.8333C16.7542 17.5 17.5 16.7542 17.5 15.8333V4.16667C17.5 3.24583 16.7542 2.5 15.8333 2.5Z"
										fill="white"/>
								</svg>
							</a>
						</li>
						<li>
							<ButtonLink label="Contáctenos" href="#" />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

const NavbarItem: React.FC<{ label: string, href: string }> = ({label, href}) => {
	return (
		<li className="mr-3">
			<a className="inline-block no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
				 href={href}>
				{label}
			</a>
		</li>
	)
}

export default Navbar;
