"use client"
import { useState } from 'react';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import gracefulLinesPlugin from 'rrp-graceful-lines-plugin';
import 'rrp-graceful-lines-plugin/dist/index.css';

const prizes = [
  { image: '/ShadowsOfEvil.webp',
    text: "Shadows Of Evil"
   },
  { image: '/TheGiant.webp',
    text: "The Giant"
   },
  { image: '/DerEisendrache.webp',
    text: "Der Eisendrache"
   },
  { image: '/ZNN.webp',
    text: "Zetsubou No Shima"
   },
  { image: '/GK.webp',
    text: "Gorod Krovi"
   },
  { image: '/Revelations.webp',
    text: "Revelations"
   },
  { image: '/NDU.webp',
    text: "Nacht Der Untoten"
   },
  { image: '/verruckt.webp',
    text: "Verruckt"
  },
  { image: '/SNN.webp',
    text: "Shi No Numa"
   },
  { image: '/Kino.webp',
    text: "Kino Der Toten"
   },
  { image: '/Shang.webp',
    text: "Shangri La"
   },
  { image: '/Ascension.webp',
    text: "Ascension"
   },
  { image: '/Moon.webp',
    text: "Moon"
   },
  { image: '/Origins.webp',
    text: "Origins"
   },
];

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedPrizeList = [
  ...prizes,
  ...reproductionArray(prizes, prizes.length * 3),
  ...prizes,
  ...reproductionArray(prizes, prizes.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const prizeList = reproducedPrizeList.map((prize) => ({
  ...prize,
  id: typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : generateId(),
}));

const App = () => {
  const [start, setStart] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(null);

  const handleStart = () => {
    setPrizeIndex(Math.floor(Math.random() * prizeList.length));
    setStart((prevState) => !prevState);
  };

  const handlePrizeDefined = () => {
    console.log('🥳 Prize defined! 🥳');
  };

  return (
    <>
      <RoulettePro
       designPlugin={gracefulLinesPlugin({
        prizesWithText: true,
      })}
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart}>Start</button>
    </>
  );
};

export default App;
