export default function Section({title, subtitle, children, className}) {
    return (
        <section className='text-white pt-1 pr-[0.20rem] rounded-lg bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C]'>
            <div className="p-8 pt-6 rounded-lg bg-[#2A2634]">
                <h2 className="tracking-[-0.47px] font-bold text-xl">{title}</h2>
                <p className="text-gray-500 text-lg">{subtitle}</p>
                <ul className={className}>
                    {children}
                </ul>
            </div>
        </section>
    )
}