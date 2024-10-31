import Header from './components/Header';
import Section from './components/Section';
import ListItem from './components/ListItem';
import './App.css';

const gamesListData = 
[
  { 
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    href: "https://www.twitch.tv/directory/game/counter-strike",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/32399-285x380.jpg",
    alt: "Imagem do jogo CS2",
  },
  {
    href: "https://www.twitch.tv/directory/game/grand-theft-auto-v",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg",
    alt: "Imagem do jogo GTA V",
  },
  {
    href: "https://www.twitch.tv/directory/game/call-of-duty-black-ops-6",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/1672324422_IGDB-188x250.jpg",
    alt: "Imagem do jogo COD BO 6",
  },
  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  }
];

const channelsListData = 
[
  {
    href: "https://www.twitch.tv/gaules",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/ea0fe422-84bd-4aee-9d10-fd4b0b3a7054-profile_image-70x70.png",
    alt: "Imagemd de Gaules",
  },
  {
    href: "https://www.twitch.tv/casimito",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-70x70.png",
    alt: "Imagemd de Casimiro",
  },
  {
    href: "https://www.twitch.tv/alanzoka",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
    alt: "Imagem de Alanzoka",
  },
  {
    href: "https://www.twitch.tv/lucas_montano",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/cab99df8-5d46-4cf8-b4b7-a2beadb3485c-profile_image-70x70.png",
    alt: "Imagem de Lucas Montano",
  },
  {
    href: "https://www.twitch.tv/rocketseat_oficial",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/32092d00-2638-422d-8a24-c609354e8a9d-profile_image-70x70.png",
    alt: "Imagemd de Rockeseet",
  }
]

const socialMediasData = 
[
  {
    href: "https://www.youtube.com/maykbrito",
    src: "/assets/github.svg",
    alt: "Logo do GitHub"
  },
  {
    href: "https://www.twitter.com/maykbrito",
    src: "/assets/linkedin.svg",
    alt: "Logo do Linkedin"
  },
  {
    href: "https://www.youtube.com/maykbrito",
    src: "/assets/instagram.svg",
    alt: "Logo do Instagram"
  },
  {
    href: "https://www.instagram.com/maykbrito",
    src: "/assets/discord.svg",
    alt: "Logo do Discord"
  },
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "/assets/twitter.svg",
    alt: "Logo da Twitch"
  }
]

export default function App() {
  return (
    <div className='App'>
      {/* Comentário JS */}
      <Header />
      <main className='w-4/5 max-w-[580px] grid gap-6 my-8 mx-auto'>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="mt-6 flex gap-4 list-none"
        >
          {
            gamesListData.map((game, index) => (
              <ListItem
                key={index}
                href={game.href}
                src={game.src}
                alt={game.alt}
                className={"h-full max-w-16 rounded-sm"}
              />
            ))
          }
        </Section>
        <Section 
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="mt-6 flex gap-4 list-none rounded-full"
        >
          {
            channelsListData.map((channel, index) => (
              <ListItem
                key={index}
                href={channel.href}
                src={channel.src}
                alt={channel.alt}
                className={"h-full max-w-16 rounded-full border border-black"}
              />
            ))
          }
        </Section>
        <Section 
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="mt-6 flex gap-4 list-none"
        >
          {
            socialMediasData.map((medias, index) => (
              <ListItem
                key={index}
                href={medias.href}
                src={medias.src}
                alt={medias.alt}
                className={"h-10 w-full"}
              />
            ))
          }
        </Section>
      </main>
    </div>
  )
}