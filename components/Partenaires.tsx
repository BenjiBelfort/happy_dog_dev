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
  }
]

const Partenaires = () => {
  return (
    <section className="py-12 bg-teal-200">
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Nos marques partenaires
        </h2>
        <div className="grid grid-cols-3 gap-6 place-items-center">
            {partnerBrands.map((brand) => (
            <div key={brand.name} className="w-32 grayscale hover:grayscale-0 hover:scale-105 transition duration-300">
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
