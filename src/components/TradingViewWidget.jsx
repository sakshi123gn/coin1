import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": 400,
      "symbol": "BTCUSD",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true
    });

    container.current.appendChild(script);
  }, []);

  return <div ref={container} className="tradingview-widget-container" />;
};

export default TradingViewWidget;
