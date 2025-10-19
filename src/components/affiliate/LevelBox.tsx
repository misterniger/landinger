'use client'

import { useState } from 'react'
import LevelButton from './LevelButton'
import Column from './Column'

const mainList = [
    'Tier',
    'Referrals',
    'Sign up bonus',
    'Card purchase commission',
    'Subscription commission',
    'Transaction commission',
    'Extra perks',
]
// const levelOne = [
//     'Level 1 - Connector',
//     '05',
//     '$8 per card',
//     '20%',
//     '5%',
//     '0.10%',
//     'Early product drops',
// ]
// const levelTwo = [
//     'Level 2 - Operator',
//     '50',
//     '$10 per card',
//     '50%',
//     '10%',
//     '0.20%',
//     'Custom referral dashboard',
// ]
// const levelThree = [
//     'Level 3 - Architect',
//     '100',
//     '$10 per card',
//     '60%',
//     '10%',
//     '0.25%',
//     'Private, Discord & beta access',
// ]
// const levelFour = [
//     'Level 4 - Syndicate',
//     '500+',
//     'Unlock',
//     'Unlock',
//     'Unlock',
//     'Unlock',
//     'Lifetime revenue share, exclusive merch, early partner access',
// ]

const lists = [
    [
        'Level 1 - Connector',
        '05',
        '$8 per card',
        '20%',
        '5%',
        '0.10%',
        'Early product drops',
    ],
    [
        'Level 2 - Operator',
        '50',
        '$10 per card',
        '50%',
        '10%',
        '0.20%',
        'Custom referral dashboard',
    ],
    [
        'Level 3 - Architect',
        '100',
        '$10 per card',
        '60%',
        '10%',
        '0.25%',
        'Private, Discord & beta access',
    ],
    [
        'Level 4 - Syndicate',
        '500+',
        'Unlock',
        'Unlock',
        'Unlock',
        'Unlock',
        'Lifetime revenue share, early partner access',
    ],
]

function LevelBox() {
    const [activeTab, setActiveTab] = useState(0)

    const handleSetTab = (idx: number) => {
        if (activeTab === idx) return

        setActiveTab(idx)
    }

    return (
        <div className="flex w-full flex-col gap-4">
            <div
                className="flex w-full items-center gap-[9px] overflow-x-auto pb-4 lg:hidden"
                data-aos="zoom-im"
            >
                {Array.from({ length: 4 }).map((_, idx) => (
                    <LevelButton
                        idx={idx}
                        key={idx}
                        isActive={activeTab === idx}
                        onClick={() => handleSetTab(idx)}
                    />
                ))}
            </div>
            <div
                className="flex gap-1.5 lg:flex-col lg:gap-0 lg:overflow-hidden lg:rounded-2xl"
                data-aos="zoom-in"
            >
                <Column
                    list={mainList}
                    restClass="w-[40%] shrink-0 text-primary/70"
                />
                <Column
                    list={lists[activeTab]}
                    restClass="w-full max-w-[60%] lg:hidden"
                />
                <Column list={lists[0]} restClass="hidden lg:flex" />
                <Column list={lists[1]} restClass=" hidden lg:flex" />
                <Column list={lists[2]} restClass="hidden lg:flex" />
                <Column list={lists[3]} restClass=" hidden lg:flex" />
            </div>
        </div>
    )
}

export default LevelBox
