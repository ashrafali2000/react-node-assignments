import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const imagesUrlElectronics = [
  {
    url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
  },
  {
    url: "https://i0.wp.com/huaweistore.com.pk/wp-content/uploads/2021/07/product_138626_1.jpg?fit=600%2C600&ssl=1",
  },
  {
    url: "https://rukminim2.flixcart.com/image/850/1000/xif0q/earphone-cable-organizer/q/3/j/airlits-3-wireless-earbuds-bluetooth-with-noise-reduction-25-original-imagrnduenfwhmxr.jpeg?q=20",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtiPAZTRLpKSFQlimPymXoPdj0M6pPvOjBLWfwLGxGJd2bY9RVMDeUaqsQxfBfg0Ypbc&usqp=CAU",
  },
];
const imagesUrlShirts = [
  {
    url: "https://7shores.in/cdn/shop/products/1_27d50c94-ee9b-4712-8ae8-df09f1e467f0.jpg?v=1684570760&width=2048",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUeGC9bpuuOsydPD7-Z9mZHjGWjitbbPdpdjSd0m_e2496qksZqlff7togVA0Cd5IAgDQ&usqp=CAU",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqM2uo0yqy_8fIgz8P9k2a79JB2f7JX2iT3nL-5lL04Hnx0zJn7E9rte2UQs-Y7E1mq1o&usqp=CAU",
  },
  {
    url: "https://assets.ajio.com/medias/sys_master/root/20230825/rbhq/64e7cf87ddf77915197339cf/-473Wx593H-461727835-grey-MODEL.jpg",
  },
];
export default function Home() {
  return (
    <div>
      {/* Promo section */}
      <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className=" flex flex wrap gap-36 justify-center  items-start">
            <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn't care if you live or die.
            </p>
           
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a>

            </div>
              <div className="">
                <img src="https://assets.ajio.com/medias/sys_master/root/20220729/uCxl/62e3ca3daeb26921afaa9bbd/-473Wx593H-463033273-navy-MODEL2.jpg"></img>
              </div>
          </div>
 

        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-[40px] text-gray-700 text-center">Electronic Products</h1>
        <div className=" flex justify-center"><hr className="bg-orange-600 w-[200px] h-[5px] mb-5"></hr></div> 
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
        >
          {imagesUrlElectronics.map((img) => (
            <div>
              <img
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]  object-cover object-center"
                src={img.url}
              ></img>
            </div>
          ))}
        </Carousel>
        ;
      </div>
      <div className="">
        <h1 className="font-bold text-[40px] text-gray-700 text-center">Human Shirts Products</h1>
       <div className=" flex justify-center"><hr className="bg-orange-600 w-[200px] h-[5px] mb-5"></hr></div> 
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
        >
          {imagesUrlShirts.map((img) => (
            <div>
              <img
                className="md:w-[300px] md:h-[300px] w-[200px] h-[200px]  object-cover object-center"
                src={img.url}
              ></img>
            </div>
          ))}
        </Carousel>
        ;
      </div>
    </div>
</div>
  );
}
