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

type barContextType = {
  bar: boolean;
  openBar: () => void;
  closeBar: () => void;
  bidComments: Comment[];
  products: product[];
  items: item[];
  addItems: (x: item) => void;
};

const barContextDefaultValues: barContextType = {
  bar: false,
  addItems: (x: item) => {},
  items: [],
  bidComments: [],
  products: [],
  openBar: () => {},
  closeBar: () => {}
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
      views: 3
    },
    {
      id: 2,
      name: 'Boolean Egyptian',
      price: 2.2,
      creator: 'Ali Darwa',
      image: '/Rectangle2.png',
      country: 'Italy',
      views: 2
    },
    {
      id: 3,
      name: 'Blanc',
      price: 20.2,
      creator: 'Clemz',
      image: '/Rectangle3.png',
      country: 'Brazil',
      views: 5
    },
    {
      id: 4,
      name: 'ELLIPSIA',
      price: 5.2,
      creator: 'Big cj',
      image: '/Rectangle4.png',
      country: 'Nigeria',
      views: 2.3
    },
    {
      id: 5,
      name: 'Lawmakers',
      price: 1.2,
      creator: 'Ali Darwa',
      image: '/Rectangle5.png',
      country: 'Italy',
      views: 7.2
    },
    {
      id: 6,
      name: 'Veil',
      price: 7.1,
      creator: 'Ali Darwa',
      image: '/Rectangle6.png',
      country: 'Ghana',
      views: 1.6
    },
    {
      id: 7,
      name: 'Alternating',
      price: 5.1,
      creator: 'Osuji Art',
      image: '/Rectangle7.png',
      country: 'Korea',
      views: 1.9
    },
    {
      id: 8,
      name: 'Rosemary `22',
      price: 3.9,
      creator: 'clemz',
      image: '/Rectangle8.png',
      country: 'China',
      views: 3.2
    },
    {
      id: 9,
      name: 'Beverly',
      price: 10.2,
      creator: 'clemz',
      image: '/Rectangle9.png',
      country: 'USA',
      views: 1.1
    },
    {
      id: 10,
      name: 'Sassy',
      price: 3.2,
      creator: 'clemz',
      image: '/explore1.png',
      country: 'Ethiopia',
      views: 3
    },
    {
      id: 11,
      name: 'Blonde Beauty',
      price: 13.9,
      creator: 'Ali Darwa',
      image: '/explore2.png',
      country: 'Benin',
      views: 7.1
    },
    {
      id: 12,
      name: 'Pyramid 1997',
      price: 1.5,
      creator: 'Big cj',
      image: '/pyramid.png',
      country: 'Egypt',
      views: 1.9
    },
    {
      id: 13,
      name: 'Are We There Yet',
      price: 4.5,
      creator: 'clemz',
      image: '/mummies.png',
      country: 'Italy',
      views: 1.7
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

  const value = {
    bar,
    bidComments,
    openBar,
    closeBar,
    products,
    items,
    addItems
  };

  return (
    <>
      <BarContext.Provider value={value}>{children}</BarContext.Provider>
    </>
  );
};
