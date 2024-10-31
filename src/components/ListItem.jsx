export default function ListItem({href, src, alt, className}) {
    return (
        <li className="transition-transform duration-300 hover:scale-110">
            <a 
                target="_blank"
                rel="noreferrer"
                href={href}
            >
                <img className={className} src={src} alt={alt} />
            </a>
        </li>
    )
}