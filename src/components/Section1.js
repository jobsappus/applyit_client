import {
	CloudArrowUpIcon,
	LockClosedIcon,
	ServerIcon
} from '@heroicons/react/20/solid'

const features = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon
	},
	{
		name: 'SSL certificates.',
		description:
			'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon
	},
	{
		name: 'Database backups.',
		description:
			'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon
	}
]

export default function Example() {
	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="flex flex-col justify-center lg:pr-8 lg:pt-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold leading-7 text-indigo-600">
								Earn faster
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								3x the chances of landing job as an international
								student
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								We manually apply for 300+ fresh jobs / internship from
								5000+ H1b sponsoring companies.
							</p>
						</div>
					</div>
					<img
						src="https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt="Product screenshot"
						className="w-[36rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[40rem] md:-ml-4 lg:-ml-0 h-[30rem] sm:h-[36rem] md:h-[40rem] lg:h-[40rem]"
						width={2432}
						height={1442}
					/>
				</div>
			</div>
		</div>
	)
}
