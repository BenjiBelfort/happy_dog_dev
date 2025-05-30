import MainLogo from '@/components/ui/MainLogo';
import H1Bloc from '@/components/headers/H1Bloc';
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
      <ProductsBloc />
      <ProductsBloc2 />
      <ProductsBloc3 />
      <ProductsBloc4 />
      <ProductsBloc5 />
      <PointSeparator />
      <Testimony />
      <Guirlande />
      <VioletteBloc />
      <Partenaires />
    </>
  )
}

export default Home;