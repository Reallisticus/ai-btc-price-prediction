type MarketData = {
  market_cap: Array<[number, number]>;
  volume: Array<[number, number]>;
};

type MarketDataWrapper = {
  market_cap_chart: MarketData;
};
