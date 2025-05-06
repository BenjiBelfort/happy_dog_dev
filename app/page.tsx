import MainLogo from '@/components/ui/MainLogo';
import H1Bloc from '@/components/headers/H1Bloc';
import TextBloc from '@/components/TextBloc';
import ProductsBloc from '@/components/blocs/ProductsBloc';
import ProductsBloc2 from '@/components/blocs/ProductsBloc2';
import ProductsBloc3 from '@/components/blocs/ProductsBloc3';
import Testimony from '@/components/Testimony';

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
      <Testimony />
    </>
  )
}

export default Home;