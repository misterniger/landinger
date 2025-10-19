import ShadowColumn from './ShadowColumn'

const cards = [
    {
        name: 'Cliper',
        description:
            'The clean design hides the power it holds. On the surface, it’s a card. But behind it? Complete control, complete privacy. That’s what makes it different.',
    },
    {
        name: 'Obsidian',
        description:
            '**Every swipe feels like stepping into a private club.** It’s more than just a card, it’s a key to a world that only a few get to experience.',
    },
    {
        name: 'Ashen',
        description:
            'I ditched my black card. This is the real upgrade. **It’s not about status anymore, it’s about control — and NoxPay delivers that flawlessly**',
    },
    {
        name: 'Vanta',
        description:
            '**Smooth, silent, and untraceable** — the way it should be. I’ve never seen a card that blends design and discretion this perfectly',
    },
    {
        name: 'Graye',
        description:
            'Finally, a card that **respects privacy as much as I do.** With NoxPay, I can move my crypto freely without anyone watching over my shoulder. **It’s not just a card — it’s peace of mind.**',
    },
    {
        name: 'Draven',
        description:
            '**Exclusivity isn’t a promise here, it’s the standard.** The moment I held this card, I knew it was designed for people who demand more than ordinary.',
    },
    {
        name: 'Aurora',
        description:
            '**It feels like holding power in my pocket** — discreet, unstoppable. I don’t need approvals or explanations anymore. **Every transaction flows as smoothly as I imagined.**',
    },
    {
        name: 'Phantom',
        description:
            '**No banks. No questions. Just access.** That’s what hooked me. It’s rare to find a financial tool that doesn’t demand to know your life story first.',
    },
    {
        name: 'NoirWolf',
        description:
            '**For once, my money feels truly mine.** No surveillance, no restrictions, just freedom to spend when and where I want. That’s the luxury I was looking for',
    },
    {
        name: 'Shadowline',
        description:
            'Off Grid doesn’t just protect my privacy, it amplifies my freedom. It’s the only card that **makes me feel like I truly own my wealth.**',
    },
    {
        name: 'Midnight',
        description:
            'Other cards come with strings attached — banks, fees, surveillance. **NoxPay comes with silence.** That’s worth more than rewards.',
    },
    {
        name: 'Graye',
        description:
            'Finally, a card that **respects privacy as much as I do.** With NoxPay, I can move my crypto freely without anyone watching over my shoulder. **It’s not just a card — it’s peace of mind.**',
    },
]

function ShadowCardsBox() {
    return (
        <div className="shadow-box relative flex h-full flex-col items-start gap-4 overflow-y-visible lg:-mt-6 lg:flex-row lg:justify-between">
            <ShadowColumn cards={cards} />
            <ShadowColumn cards={cards} isCenter />
            <ShadowColumn cards={[...cards].reverse()} />
        </div>
    )
}

export default ShadowCardsBox
