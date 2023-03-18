import { z } from "zod";

export const MarketData = z.object({
  market_cap: z.array(z.tuple([z.number(), z.number()])),
  volume: z.array(z.tuple([z.number(), z.number()])),
});

export const MarketDataWrapper = z.object({
  market_cap_chart: MarketData,
});

export const CustomError = z.object({
  message: z.string(),
  // Add other properties if needed
});

export const MarketDataWrapperOrError = z.union([
  MarketDataWrapper,
  CustomError,
  z.undefined(),
]);

export const SetMarketDataFunction = z.function(
  z.tuple([z.union([MarketDataWrapper, CustomError, z.undefined()])]),
  z.unknown()
);
