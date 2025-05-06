import Image from 'next/image';

const testimonies = [
  {
    image: '/images/portraits/portrait1.png',
    quote: 'Un service irréprochable, je recommande vivement !',
    author: 'Max',
  },
  {
    image: '/images/portraits/portrait2.png',
    quote: 'Une expérience inoubliable, bravo à toute l’équipe.',
    author: 'Paco',
  },
  {
    image: '/images/portraits/portrait3.png',
    quote: 'Professionnels et attentionnés, un vrai plaisir.',
    author: 'Duke',
  },
];

const Testimony = () => {
  return (
    <section className="py-12 bg-emerald-100">
      <h3 className="text-3xl font-semibold text-center mb-10">
        Qu&apos;en disent nos amis à quatre pattes ?
      </h3>
      <div className="flex flex-col md:flex-row md:justify-between gap-8 max-w-6xl mx-auto">
        {testimonies.map((item, index) => (
          <div key={index} className="flex items-start gap-4 max-w-md">
            <Image
              src={item.image}
              alt={`Portrait de ${item.author}`}
              width={150}
              height={150}
              className="rounded-full object-cover drop-shadow-md"
            />
            <div>
              <p className="text-gray-700">« {item.quote} »</p>
              <h3 className="mt-4 font-bold text-xl text-gray-900">— {item.author}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
