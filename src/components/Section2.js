import React from 'react'
import {
	AcademicCapIcon,
	BanknotesIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon
} from '@heroicons/react/24/outline'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const actions = [
	{
		title: 'Tell us about yourself',
		href: '#',
		icon: ClockIcon,
		iconForeground: 'text-teal-700',
		iconBackground: 'bg-teal-50',
		description: (
			<p className="paragraph-gray service">
				To get the best odds of landing your dream job, you just need to
				give us this info:
				<br />‍<br />
				1. Years of <strong>Experience </strong>(Give us a range)
				<br />
				2. 3 <strong>Job </strong>Titles
				<br />
				3. Job <strong>Locations </strong>(Up to 3)
				<br />
				4. <strong>H1B </strong>Status (Y/N)
			</p>
		)
	},
	{},
	{
		title: 'We make revisions',
		href: '#',
		icon: CheckBadgeIcon,
		iconForeground: 'text-purple-700',
		iconBackground: 'bg-purple-50',
		description: (
			<p className="paragraph-gray service">
				We want you to get hired ASAP, so we only apply to quality jobs with
				fast turnarounds. That way you can land interviews quicker and
				increase your odds of getting hired <em>fast</em>.
			</p>
		)
	},
	{
		title: 'We target 50 jobs',
		href: '#',
		icon: CheckBadgeIcon,
		iconForeground: 'text-purple-700',
		iconBackground: 'bg-purple-50',
		description: (
			<p className="paragraph-gray service">
				We want you to get hired ASAP, so we only apply to quality jobs with
				fast turnarounds. That way you can land interviews quicker and
				increase your odds of getting hired <em>fast</em>.
			</p>
		)
	},
	{
		title: 'Revise your applications',
		href: '#',
		icon: UsersIcon,
		iconForeground: 'text-sky-700',
		iconBackground: 'bg-sky-50',
		description: (
			<p className="paragraph-gray service">
				Depending on your revisions, we’ll take up to 5 business days to
				finalize your list.
			</p>
		)
	},
	{
		title: 'Your final review',
		href: '#',
		icon: ReceiptRefundIcon,
		iconForeground: 'text-rose-700',
		iconBackground: 'bg-rose-50',
		description: (
			<p className="paragraph-gray service">
				Review your list within 2 business days and get ready for the
				applications to roll out.
			</p>
		)
	}
]

function Section1() {
	return (
		<>
			<div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
				{actions.map((action, actionIdx) => {
					if (actionIdx === 1) {
						return (
							<div className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 flex justify-center">
								<img
									src="https://assets-global.website-files.com/6107d4b379e3293a0c62f588/631780af60c848bc81158e3a_auto%20apply%20image-min.png"
									alt=""
									className="pointer-events-none object-cover group-hover:opacity-75 w-52 h-60"
								/>
							</div>
						)
					}
					return (
						<div
							key={action.title}
							className={classNames(
								actionIdx === 0
									? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
									: '',
								actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
								actionIdx === actions.length - 2
									? 'sm:rounded-bl-lg'
									: '',
								actionIdx === actions.length - 1
									? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
									: '',
								' relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
							)}
						>
							<div
								className={classNames(
									action.iconBackground,
									action.iconForeground,
									'rounded-full p-3 ring-4 ring-white inline-flex justify-center'
								)}
							>
								<span className="pl-1.5 h-6 w-6" aria-hidden="true">
									{actionIdx < 1 ? actionIdx + 1 : actionIdx}
								</span>
							</div>
							<div className="mt-8">
								<h3 className="text-base font-semibold leading-6 text-gray-900">
									{action.title}
								</h3>
								<p className="mt-2 text-sm text-gray-500">
									{action.description}
								</p>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Section1
