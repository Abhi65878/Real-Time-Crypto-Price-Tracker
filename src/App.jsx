import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCryptoData } from "./features/crypto/cryptoSlice";
import "./App.css";


function App() {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.crypto.assets);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateCryptoData());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>
              Market Cap <i className="fa fa-circle-info"></i>
            </th>
            <th>
              Volume(24h) <i className="fa fa-circle-info"></i>
            </th>
            <th>
              Circulating Supply <i className="fa fa-circle-info"></i>
            </th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="name-column">
                <div className="name-logo">
                  <img
                    className="asset-logo"
                    src={asset.logo}
                    alt={asset.symbol}
                  />
                  <div className="asset-info">
                    <div className="asset-name">{asset.name}</div>
                    <div className="asset-symbol">{asset.symbol}</div>
                  </div>
                </div>
              </td>
              <td>${asset.price.toLocaleString()}</td>
              <td className={asset.change1h >= 0 ? "positive" : "negative"}>
                {asset.change1h}%
              </td>
              <td className={asset.change24h >= 0 ? "positive" : "negative"}>
                {asset.change24h}%
              </td>
              <td className={asset.change7d >= 0 ? "positive" : "negative"}>
                {asset.change7d}%
              </td>
              <td>${asset.marketCap.toLocaleString()}</td>
              <td>${asset.volume24h.toLocaleString()}</td>
              <td>
                {asset.circulating} {asset.symbol}
              </td>
              <td>
                <div className="chart-placeholder large">📈</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
