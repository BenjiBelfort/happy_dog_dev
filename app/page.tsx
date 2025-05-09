import MainLogo from '@/components/ui/MainLogo';
import H1Bloc from '@/components/headers/H1Bloc';
import TextBloc from '@/components/TextBloc';
import ProductsBloc from '@/components/blocs/ProductsBloc';
import ProductsBloc2 from '@/components/blocs/ProductsBloc2';
import ProductsBloc3 from '@/components/blocs/ProductsBloc3';
import ProductsBloc4 from '@/components/blocs/ProductsBloc4';
import ProductsBloc5 from '@/components/blocs/ProductsBloc5';
import Testimony from '@/components/Testimony';
import VioletteBloc from '@/components/blocs/VioletteBloc';
import NextBloc from '@/components/NextBloc';

const Home = () => {
  return (
    <>
      <MainLogo />
      <H1Bloc />
      <TextBloc
        texts={[
          "Découvrez un univers enchanté pour vos compagnons à quatre pattes.",
          "Venez découvrir notre espace garderie de jour et notre boutique canine !",
        ]}
      />
      <ProductsBloc />
      <ProductsBloc2 />
      <ProductsBloc3 />
      <ProductsBloc4 />
      <ProductsBloc5 />
      <Testimony />
      <VioletteBloc />
      <TextBloc
        texts={[
          "Ici logos des marques 🇫🇷",
        ]}
      />
      <NextBloc />
    </>
  )
}

export default Home;