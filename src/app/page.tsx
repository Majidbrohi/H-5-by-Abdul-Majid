import { Montserrat } from 'next/font/google';
import Header from './components/Header';
import EditorsPick from './components/editorspick';
import FeaturedProducts from './components/featuredpro';
import NewSection from './components/newsection';
import NewSectionReverse from './components/newsecres';
import FeaturedPosts from './components/featuredpost';
import Footer from './components/Footer';
 

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Home: React.FC = () => {
  return (
    <div className={montserrat.className}>
      <Header />
      <main
       className="relative bg-cover bg-top h-[95vh] bg-no-repeat 
       bg-[url('/icons/heroimg-mobile.jpg')] 
       sm:bg-[url('/icons/heroimg.jpg')]"
>  
        {/* Main Image with Text Overlay */}
        <div className="absolute top-0 left-0 sm:left-10 bottom-0 right-0 flex items-center justify-start px-6 sm:px-10">
          <div className="text-white text-center pt-2 sm:text-left max-w-md sm:max-w-lg">
            <p className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base">SUMMER 2024</p>
            <h1 className="text-4xl mt-2 sm:text-5xl font-bold mb-6 sm:mb-10 break-words">
              NEW COLLECTION
            </h1>
            <p className="mb-4 sm:mb-6 text-[14px] sm:text-[15px]">
              We know how large objects will act.
              <br />
              but things on a small scale.
            </p>
            <button className="bg-green-500 text-white font-bold text-lg px-5 py-3 sm:px-6 sm:py-3 hover:bg-green-600 transition">
              Shop Now
            </button>
          </div>
        </div>
      </main>
      <EditorsPick/>
        <FeaturedProducts/>
        <NewSection/>
        <NewSectionReverse/>
        <FeaturedPosts/>
        <Footer/>
         
    </div>
  );
};

export default Home;
