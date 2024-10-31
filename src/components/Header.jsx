export default function Header() {
    return (
        <header className="h-[calc(120px+32px)] pt-8">
            <div className="w-32 p-1 m-auto flex rounded-full 
            bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E2D45C]
            transition-transform duration-300
            hover:scale-110
            animate-fromTop"
            >
                <img className="w-full rounded-full"
                src="https://github.com/matheusaguiarrr.png" 
                alt="Foto de Matheus Aguiar" />
            </div>
        </header>
    )
}