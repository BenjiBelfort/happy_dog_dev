import Image from 'next/image'

const partnerBrands = [
  {
    name: 'Scraps Gourrmets',
    logo: '/images/Marques/logo-scraps-gourrmet-2.webp',
    alt: 'Logo Scraps Gourrmets',
  },
  {
    name: "Cooka's Cookies",
    logo: '/images/Marques/cookas-cookies-logo.png',
    alt: "Cooka's Cookies",
  },
  {
    name: 'Croci',
    logo: '/images/Marques/croci-logo-wy.svg',
    alt: 'Logo Croci',
  },
  {
    name: 'Zippy Paws',
    logo: '/images/Marques/ZippyPaws_logo.webp',
    alt: 'Logo Zippy Paws',
  },
  {
    name: 'Bobby',
    logo: '/images/Marques/bobby-logo.png',
    alt: 'Logo Bobby',
  },
  {
    name: 'Cafide',
    logo: '/images/Marques/cafide.webp',
    alt: 'Logo Cafide',
  },
  {
    name: 'Collarfull',
    logo: '/images/Marques/Kopi_af_Kopi_af_Logo.avif',
    alt: 'Logo Collarfull',
  },
  {
    name: 'Fidèle Paris',
    logo: '/images/Marques/logo-fidele-paris.webp',
    alt: 'Logo Fidèle Paris',
  },
  {
    name: 'Yow Up !',
    logo: '/images/Marques/Yow-Up-logo_white.svg',
    alt: 'Logo Yow Up !',
  },
  {
    name: 'Nellumbo',
    logo: '/images/Marques/logo-blanc-nellumbo.png',
    alt: 'Logo Nellumbo',
  },
  {
    name: 'Museau & Co',
    logo: '/images/Marques/museau-and-co.webp',
    alt: 'Logo Museau & Co',
  },
  {
    name: 'Puralia',
    logo: '/images/Marques/puralia-logo.png',
    alt: 'Logo Puralia',
  },
  {
    name: 'Puppies & Pom Poms',
    logo: '/images/Marques/logo-Puppies-pom-poms.webp',
    alt: 'Logo Puppies & Pom Poms',
  },
  {
    name: 'Frimousse Dog',
    logo: '/images/Marques/logo-frimousse-dog.png',
    alt: 'logo Frimousse Dog',
  },
  {
    name: 'Mr. Bones',
    logo: '/images/Marques/logo-mr-bones.webp',
    alt: 'logo Mr. Bones',
  }
]

const Partenaires = () => {
  return (
    <section className="py-12 bg-teal-300">
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Nos marques partenaires
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {partnerBrands.map((brand) => (
            <div key={brand.name} className="w:12 max-w-32 grayscale hover:grayscale-0 hover:scale-105 transition duration-300">
                <Image
                    src={brand.logo}
                    alt={brand.alt}
                    width={150}
                    height={150}
                    className="object-fill drop-shadow-lg/30"
                />
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Partenaires
