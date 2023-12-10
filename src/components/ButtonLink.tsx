type TButtonLinkProps = {
	label: string
	href: string
}

const ButtonLink: React.FC<TButtonLinkProps> = ({ label, href }) => {
	return (
		<a href={href} className="bg-yellow-400 py-2 px-6 rounded-full text-base font-bold text-[#002023]">
			{label}
		</a>
	)
}

export default ButtonLink;
