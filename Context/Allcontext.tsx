import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';

type Comment = {
  name: String;
  comment: String;
  img: string;
};

type product = {
  id: number;
  name: string;
  price: number;
  creator: string;
  image: string;
  country: string;
  views: number;
  category: string;
};

type item = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size: string;
  creator: string;
};

// interface prop
//   y: string | string[];
// }

type barContextType = {
  bar: boolean;
  openBar: () => void;
  closeBar: () => void;
  bidComments: Comment[];
  products: product[];
  filtered: product[];
  items: item[];
  addItems: (x: item) => void;
  addCategory: (y: string | string[]) => void;
  addPrice: (y: number) => void;
  addSearch: (y: string) => void;
  addArtist: (y: string | string[]) => void;
  cat: string[];
  pri: number | null;
  sear: string | null;
  art: string[];
  filterProduct: () => void;
};

const barContextDefaultValues: barContextType = {
  bar: false,
  cat: [],
  pri: null,
  sear: null,
  art: [],
  addItems: (x: item) => {},
  items: [],
  bidComments: [],
  products: [],
  filtered: [],
  openBar: () => {},
  closeBar: () => {},
  addCategory: (y: string | string[]) => {},
  addPrice: (y: number) => {},
  addSearch: (y: string) => {},
  addArtist: (y: string | string[]) => {},
  filterProduct: () => {}
};

const BarContext = createContext<barContextType>(barContextDefaultValues);

export function BarState() {
  return useContext(BarContext);
}

type Props = {
  children: ReactNode;
};

export const State = ({ children }: Props) => {
  const [bar, setBar] = useState<boolean>(false);
  const [items, setItems] = useState<item[]>([]);
  const [cat, setCategory] = useState<string[]>([]);
  const [pri, setPrice] = useState<number | null>(null);
  const [sear, setSearch] = useState<string | null>(null);
  const [art, setArtist] = useState<string[]>([]);
  const [filtered, setFiltered] = useState<product[]>([]);
  const [bidComments, setBidComments] = useState<Comment[]>([
    { name: 'osuji chiaka', comment: 'instant bid', img: '/bid1.png' },
    { name: 'Ella Flynn', comment: 'Tight bid', img: '/bid2.png' },
    { name: 'Uncle Luca', comment: 'instant bid', img: '/bid3.png' },
    { name: 'Ope Tiwalope', comment: '$45.00', img: '/bid4.png' },
    {
      name: 'Celestina Quinn',
      comment: 'gm friends! ready to bidddd',
      img: '/bid5.png'
    },
    {
      name: 'Sammy Ellen',
      comment: 'i love this. $20.00 for me',
      img: '/bid6.png'
    }
  ]);

  const [products, setProducts] = useState<product[]>([
    {
      id: 1,
      name: 'PHILOMENA `22',
      price: 3.2,
      creator: 'Ali Darwa',
      image: '/Rectangle1.png',
      country: 'Nigeria',
      views: 3,
      category: 'Art and Museum'
    },
    {
      id: 2,
      name: 'Boolean Egyptian',
      price: 2.2,
      creator: 'Ali Darwa',
      image: '/Rectangle2.png',
      country: 'Italy',
      views: 2,
      category: 'Editorial'
    },
    {
      id: 3,
      name: 'Blanc',
      price: 20.2,
      creator: 'Clemz',
      image: '/Rectangle3.png',
      country: 'Brazil',
      views: 5,
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'ELLIPSIA',
      price: 5.2,
      creator: 'Big cj',
      image: '/Rectangle4.png',
      country: 'Nigeria',
      views: 2,
      category: 'Optics'
    },
    {
      id: 5,
      name: 'Lawmakers',
      price: 1.2,
      creator: 'Ali Darwa',
      image: '/Rectangle5.png',
      country: 'Italy',
      views: 7,
      category: 'Art and Museum'
    },
    {
      id: 6,
      name: 'Veil',
      price: 7.1,
      creator: 'Ali Darwa',
      image: '/Rectangle6.png',
      country: 'Ghana',
      views: 1,
      category: 'Fashion'
    },
    {
      id: 7,
      name: 'Alternating',
      price: 5.1,
      creator: 'Osuji Art',
      image: '/Rectangle7.png',
      country: 'Korea',
      views: 1.9,
      category: 'Optics'
    },
    {
      id: 8,
      name: 'Rosemary `22',
      price: 3.9,
      creator: 'clemz',
      image: '/Rectangle8.png',
      country: 'China',
      views: 3,
      category: 'Fashion'
    },
    {
      id: 9,
      name: 'Beverly',
      price: 10.2,
      creator: 'clemz',
      image: '/Rectangle9.png',
      country: 'USA',
      views: 1,
      category: 'Nature'
    },
    {
      id: 10,
      name: 'Sassy',
      price: 3.2,
      creator: 'clemz',
      image: '/explore1.png',
      country: 'Ethiopia',
      views: 3,
      category: 'Editorial'
    },
    {
      id: 11,
      name: 'Blonde Beauty',
      price: 13.9,
      creator: 'Ali Darwa',
      image: '/explore2.png',
      country: 'Benin',
      views: 7.1,
      category: 'Art and Museum'
    },
    {
      id: 12,
      name: 'Pyramid 1997',
      price: 1.5,
      creator: 'Big cj',
      image: '/pyramid.png',
      country: 'Egypt',
      views: 1.9,
      category: 'Art and Museum'
    },
    {
      id: 13,
      name: 'Are We There Yet',
      price: 4.5,
      creator: 'clemz',
      image: '/mummies.png',
      country: 'Italy',
      views: 1.7,
      category: 'Editorial'
    }
  ]);

  const openBar = () => {
    setBar(true);
  };

  const closeBar = () => {
    setBar(false);
  };

  const addItems = (x: item) => {
    setItems(ite => [...ite, x]);
  };

  const addCategory = (y: string | string[]) => {
    typeof y == 'string'
      ? setCategory(item => [...item, y])
      : setCategory([...y]);
  };

  const addArtist = (y: string | string[]) => {
    typeof y == 'string' ? setArtist(item => [...item, y]) : setArtist([...y]);
  };

  const addPrice = (y: number) => setPrice(y);

  const addSearch = (y: string) => setSearch(y);

  const filterProduct = () => {
    // products.map((prod, i) =>
    //   (cat.length == 0 ? true : cat.includes(prod.category)) &&
    //   (pri != null ? prod.price <= pri : true) &&
    //   (art.length == 0 ? true : art.includes(prod.creator)) &&
    //   (sear != null
    //     ? prod.name.toLowerCase().indexOf(sear.toLowerCase()) != -1
    //     : true)
    //     ? setFiltered(z => [...z, prod])
    //     : ''
    // );
    setFiltered([]);
    products.map((x, i) => {
      if (cat.length == 0 && pri == null && art.length == 0 && sear == null) {
        setFiltered(z => [...z, x]);
      } else {
        (cat.length == 0 ? true : cat.includes(x.category)) &&
        (pri != null ? x.price <= pri : true) &&
        (art.length == 0 ? true : art.includes(x.creator)) &&
        (sear != null
          ? x.name.toLowerCase().indexOf(sear.toLowerCase()) != -1
          : true)
          ? setFiltered(z => [...z, x])
          : '';
      }
    });
  };

  useEffect(() => {
    filterProduct();
    //   console.log(cat);
    //   console.log(pri);
    //   console.log(sear);
    //   console.log(art);
  }, [cat, pri, sear, art]);

  console.log(filtered);

  const value = {
    bar,
    bidComments,
    openBar,
    closeBar,
    products,
    items,
    addItems,
    cat,
    pri,
    sear,
    art,
    addCategory,
    addPrice,
    addSearch,
    addArtist,
    filterProduct,
    filtered
  };

  return (
    <>
      <BarContext.Provider value={value}>{children}</BarContext.Provider>
    </>
  );
};
