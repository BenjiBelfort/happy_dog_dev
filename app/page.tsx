import MainLogo from '@/components/ui/MainLogo';
import H1Bloc from '@/components/headers/H1Bloc';
import Image from 'next/image'
import TextBloc from '@/components/TextBloc';
import ProductsBloc from '@/components/blocs/ProductsBloc';
import ProductsBloc2 from '@/components/blocs/ProductsBloc2';
import ProductsBloc3 from '@/components/blocs/ProductsBloc3';
import ProductsBloc4 from '@/components/blocs/ProductsBloc4';
import ProductsBloc5 from '@/components/blocs/ProductsBloc5';
import PointSeparator from "@/components/ui/PointSeparator";
import Testimony from '@/components/Testimony';
import VioletteBloc from '@/components/blocs/VioletteBloc';
import Partenaires from '@/components/Partenaires';
import PhotoGallery from '@/components/PhotoGallery';
import Guirlande from '@/components/ui/Guirlande';

const Home = () => {
  return (
    <>
      <MainLogo />
      <H1Bloc />
      <div className="mt-28">
        <TextBloc
          texts={[
            "Pour le plaisir de vos compagnons à quatre pattes, venez découvrir notre garderie de jour, notre espace toilettage et notre boutique canine,",
            "pensés pour leur bien-être et votre tranquillité.",
          ]}
        />
      </div>
      <div aria-label="Relais Pickup" className="mt-10">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
            <div className="shrink-0">
              <Image
                src="/images/services/Logo_Pickup.png" // fichier dans /public/images/services/
                alt="Logo Relais Pickup"
                width={180}
                height={64}
                className="h-12 w-auto md:h-16"
                sizes="(min-width: 768px) 180px, 120px"
                priority
              />
            </div>
            <p className="text-lg md:text-xl font-semibold text-neutral-900">
              Votre boutique est aussi <span className="underline">Relais&nbsp;Pickup</span>
            </p>
          </div>
        </div>
      </div>
      <ProductsBloc />
      <ProductsBloc2 />
      <ProductsBloc3 />
      <ProductsBloc4 />
      <ProductsBloc5 />
      <PointSeparator />
      <Testimony />
      <Guirlande />
      <VioletteBloc />
      <PhotoGallery />
      <Partenaires />
    </>
  )
}

export default Home;