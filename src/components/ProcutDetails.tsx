import { useState } from "react";
import ProductSlider from "./ProductSlider";

const IMGS = [
  "assets/imgs/image-product-1.jpg",
  "assets/imgs/image-product-2.jpg",
  "assets/imgs/image-product-3.jpg",
  "assets/imgs/image-product-4.jpg",
];

export default function ProcutDetails() {
  const [counter, setCounter] = useState(0);

  return (
    <main className="grid grid-cols-2 gap-24 items-center px-16 py-20">
      <div>
        <ProductSlider imgsUrl={IMGS} />
      </div>
      <div className="space-y-4">
        <span className="uppercase text-[hsl(26,100%,55%)] font-bold">Sneaker Company</span>
        <h1 className="text-5xl font-bold">Fall Limited Edition Sneakers</h1>
        <p className="text-[hsl(219,9%,45%)]">
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="font-bold">
          <div className="flex items-center gap-4 mb-1">
            <span className="text-2xl">$125.00</span>
            <span className="bg-[hsl(25,100%,94%)] text-[hsl(26,100%,55%)] py px-2 rounded-md">50%</span>
          </div>
          <del className="text-[hsl(220,14%,75%)]">$250.00</del>
        </div>
        <div className="flex gap-4">
          <div className="inline-flex items-center px-3 bg-[hsl(223,64%,98%)] rounded-lg">
            <button onClick={() => setCounter(c => c ? --c : 0)}>
              <IconMinus />
            </button>
            <input
              type="number"
              value={counter}
              onChange={e => setCounter(+e.target.value)}
              className="w-16 border-transparent text-center font-bold bg-[hsl(223,64%,98%)] focus-visible:bg-[hsl(223,64%,98%)] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />
            <button onClick={() => setCounter(c => ++c)}>
              <IconPlus />
            </button>
          </div>
          <div>
            <button className="inline-flex gap-4 bg-[hsl(26,100%,60%)] hover:bg-[hsl(26,100%,55%,.5)] text-white font-bold shadow-lg shadow-[hsl(25,100%,94%)] py-4 px-16 rounded-lg transition-colors">
              <IconCart />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function IconMinus() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20}>
      <path stroke="#FF7E1B" strokeWidth="2" d="M19,13H5v-2h14V13z" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20}>
      <path stroke="#FF7E1B" strokeWidth="2" d="M19,13H13v6h-2v-6H5V11h6V5h2v6h6V13z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20">
      <path
        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
        fill="#fff"
        fillRule="nonzero"
      />
    </svg>
  );
}