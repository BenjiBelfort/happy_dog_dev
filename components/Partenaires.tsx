import Image from 'next/image'
import partnerBrands from '@/app/data/partenaires.json' // adapte le chemin si besoin

const Partenaires = () => {
  return (
    <section className="py-12 bg-teal-300">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Nos marques partenaires
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partnerBrands.map((brand) => (
            <div
              key={brand.name}
              className="w-32 grayscale hover:grayscale-0 hover:scale-105 transition duration-300 flex justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                width={150}
                height={150}
                className="object-contain drop-shadow-lg/30"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partenaires
