import btcLogo from '../../assets/Img/bitcoin.png';
import ethLogo from '../../assets/Img/ethereum.png';
import xrpLogo from '../../assets/Img/xrp.png';
import bnbLogo from '../../assets/Img/bnb.png';
import solLogo from '../../assets/Img/solana.png';
import tetherLogo from '../../assets/Img/tether.png';

const assets = [
  {
    name: 'Bitcoin', symbol: 'BTC', logo: btcLogo, price: 93759.48,
    change1h: 0.43, change24h: 0.93, change7d: 11.11,
    marketCap: 1861618902186, volume24h: 43874950947,
    circulating: 19.85, history: [],
  },
  {
    name: 'Ethereum', symbol: 'ETH', logo: ethLogo, price: 1802.46,
    change1h: 0.60, change24h: 3.21, change7d: 13.68,
    marketCap: 217581279327, volume24h: 23547469307,
    circulating: 120.71, history: [],
  },
  {
    name: 'Tether', symbol: 'USDT', logo: tetherLogo, price: 1.00,
    change1h: 0.01, change24h: 0.00, change7d: -0.01,
    marketCap: 83261890214, volume24h: 34215476598,
    circulating: 83261.89, history: [],
  },
  {
    name: 'XRP', symbol: 'XRP', logo: xrpLogo, price: 2.22,
    change1h: 0.46, change24h: 0.54, change7d: 6.18,
    marketCap: 130073814966, volume24h: 5131481491,
    circulating: 58390, history: [],
  },
  {
    name: 'BNB', symbol: 'BNB', logo:  bnbLogo, price: 606.65,
    change1h: 0.09, change24h: -1.20, change7d: 3.73,
    marketCap: 85471956947, volume24h: 1874281784,
    circulating: 140.89, history: [],
  },
  {
    name: 'Solana', symbol: 'SOL', logo: solLogo, price: 151.51,
    change1h: 0.53, change24h: 1.26, change7d: 14.74,
    marketCap: 78381958631, volume24h: 4881674486,
    circulating: 517.31, history: [],
  },
];

export const generateMockData = () => JSON.parse(JSON.stringify(assets));

// export const simulateUpdate = asset => {
//   const rand = () => (Math.random() * 2 - 1); // -1 to +1
//   return {
//     ...asset,
//     price: +(asset.price * (1 + rand() * 0.005)).toFixed(2),
//     change1h: +(asset.change1h + rand()).toFixed(2),
//     change24h: +(asset.change24h + rand()).toFixed(2),
//     volume24h: +(asset.volume24h * (1 + rand() * 0.01)).toFixed(0),
//   };
// };


export const simulateUpdate = (asset) => {
  const rand = () => (Math.random() * 2 - 1); // -1 to +1
  const newPrice = +(asset.price * (1 + rand() * 0.005)).toFixed(2);
  const updatedHistory = [...asset.history.slice(-20), newPrice]; // keep last 20 points

  return {
    ...asset,
    price: newPrice,
    change1h: +(asset.change1h + rand()).toFixed(2),
    change24h: +(asset.change24h + rand()).toFixed(2),
    volume24h: +(asset.volume24h * (1 + rand() * 0.01)).toFixed(0),
    history: updatedHistory,
  };
};
