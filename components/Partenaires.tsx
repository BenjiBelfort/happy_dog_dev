import Image from 'next/image'

const partnerBrands = [
  {
    name: 'Scraps Gourrmets',
    logo: '/images/Marques/logo-scraps-gourrmet-2.png',
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
  }
]

const Partenaires = () => {
  return (
    <section className="py-12 bg-emerald-200">
        <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Nos marques partenaires
        </h2>
        <div className="grid grid-cols-3 gap-6 items-center justify-items-center">
            {partnerBrands.map((brand) => (
            <div key={brand.name} className="w-32 h-16 relative grayscale hover:grayscale-0 hover:scale-105 transition duration-300">
                <Image
                    src={brand.logo}
                    alt={brand.alt}
                    layout="fill"
                    objectFit="contain"
                    className="drop-shadow-lg/30"
                />
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default Partenaires
