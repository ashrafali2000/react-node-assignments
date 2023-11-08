import {useRef} from "react"
import axios from "./axios"
export default function AddProduct() {

  
  const titleRef = useRef();
  const priceRef = useRef();
  const imgUrlRef = useRef();
  const ratingRef = useRef();
  const stockRef = useRef();
  const brandsRef = useRef();
  const categoryRef = useRef();
  const thumbnailRef = useRef();
  const discountPercentageRef = useRef();
  const descriptionRef = useRef();
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const images = imgUrlRef.current.value;
    const description = descriptionRef.current.value;
    const rating = ratingRef.current.value;
    const stock = stockRef.current.value;
    const brands = brandsRef.current.value;
    const category = categoryRef.current.value;
    const thumbnail = thumbnailRef.current.value;
    const discountPercentage = discountPercentageRef.current.value;
    
  axios.post("/products",{
      title, price, images, description, rating, stock, brands, category, thumbnail, discountPercentage

  }).then(response => alert(response.data.message)).catch(err => console.log(err));
// addProductHandler(title, price, image);
}

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Add new Product
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  method="POST" onSubmit={onSubmitHandler}>
              <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                  Title
                </label>
                <div className="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    ref={titleRef}
                    autoComplete="title"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <input
                    id="Description"
                    name="Description"
                    type="text"
                    ref={descriptionRef}
                    autoComplete="Description"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    ref={priceRef}
                    autoComplete="price"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="DiscountPercentage" className="block text-sm font-medium leading-6 text-gray-900">
                  DiscountPercentage
                </label>
                <div className="mt-2">
                  <input
                    id="DiscountPercentage"
                    name="DiscountPercentage"
                    type="text"
                    ref={discountPercentageRef}
                    autoComplete="DiscountPercentage"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Rating" className="block text-sm font-medium leading-6 text-gray-900">
                  Rating
                </label>
                <div className="mt-2">
                  <input
                    id="Rating"
                    name="Rating"
                    type="text"
                    ref={ratingRef}
                    autoComplete="Rating"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Stock" className="block text-sm font-medium leading-6 text-gray-900">
                  Stock
                </label>
                <div className="mt-2">
                  <input
                    id="Stock"
                    name="Stock"
                    type="text"
                    ref={stockRef}
                    autoComplete="Stock"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Brands" className="block text-sm font-medium leading-6 text-gray-900">
                  Brands
                </label>
                <div className="mt-2">
                  <input
                    id="Brands"
                    name="Brands"
                    type="text"
                    ref={brandsRef}
                    autoComplete="Brands"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Category" className="block text-sm font-medium leading-6 text-gray-900">
                  Category
                </label>
                <div className="mt-2">
                  <input
                    id="Category"
                    name="Category"
                    type="text"
                    ref={categoryRef}
                    autoComplete="Category"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Thumbnail" className="block text-sm font-medium leading-6 text-gray-900">
                  Thumbnail
                </label>
                <div className="mt-2">
                  <input
                    id="Thumbnail"
                    name="Thumbnail"
                    type="url"
                    ref={thumbnailRef}
                    autoComplete="Thumbnail"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
             
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="ImgUrl" className="block text-sm font-medium leading-6 text-gray-900">
                  ImgUrl
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="ImgUrl"
                    name="ImgUrl"
                    type="url"
                    ref={imgUrlRef}
                    autoComplete="ImgUrl"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }