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

type barContextType = {
  bar: boolean;
  openBar: () => void;
  closeBar: () => void;
  bidComments: Comment[];
};

const barContextDefaultValues: barContextType = {
  bar: false,
  bidComments: [
    { name: 'osuji chiaka', comment: '$140,000 instant bid', img: '' },
    { name: 'Ella Flynn', comment: 'Tight bid', img: '' },
    { name: 'Uncle Luca', comment: 'instant bid', img: '' },
    { name: 'Opeyemi Tiwalope', comment: '$45.00', img: '' },
    {
      name: 'Celestina Quinn',
      comment: 'gm friends! ready to bidddd',
      img: ''
    },
    { name: 'Sammy Ellen', comment: 'i love this. $20.00 for me', img: '' }
  ],
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
  const [bidComments, setBidComments] = useState<Comment[]>([
    { name: 'osuji chiaka', comment: '$140,000 instant bid', img: '/bid1.png' },
    { name: 'Ella Flynn', comment: 'Tight bid', img: '/bid2.png' },
    { name: 'Uncle Luca', comment: 'instant bid', img: '/bid3.png' },
    { name: 'Opeyemi Tiwalope', comment: '$45.00', img: '/bid4.png' },
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

  const openBar = () => {
    setBar(true);
  };

  const closeBar = () => {
    setBar(false);
  };

  const value = {
    bar,
    bidComments,
    openBar,
    closeBar
  };

  return (
    <>
      <BarContext.Provider value={value}>{children}</BarContext.Provider>
    </>
  );
};
