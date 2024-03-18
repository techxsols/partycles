Project Description
Here you have a presentation of Partycles: https://docs.google.com/presentation/d/1MuDdNu0J3g8Q8zNbBq66fbEyyLwneKxPbZGHZcFsXVg

This project is focused on creating an innovative approach to incentivize both traders and liquidity providers on DEXes. Traditionally, DEXes mainly reward liquidity providers for their activity, and incentives on traders are not frequent and usually depend on logic outside of the protocol contracts. To address this, we decided to use Uniswap v4 hook capabilities to distribute incentives to all DEX users directly through the contracts functionalities.

The incentives mechanism takes full advantage of the duality of ERC404 tokens (tokens that behave both like ERC20 and NFTs): DEX users accrue incentives as ERC20 tokens in amounts that depend on the volume/liquidity provided, then, upon reaching a certain accumulation threshold, those tokens become an NFT. This NFT can then be used to participate in a lottery, which gives our token a financial value.

The lottery system is self-sustaining, as it is funded by the swap fees generated from user transactions. This creates a self-refilling rewards pool, establishing a continuous cycle of incentives. Our approach introduces several enhancements over existing reward systems, including:

gamification of user and liquidity provider experiences, making engagement more enjoyable and interactive.
creation of a secondary market for the NFTs generated through this system. This not only adds an additional layer of excitement but also provides a secure method for participants to cash out their earned incentives.
How it's Made
Our application revolves around an ERC404 token that tracks user activity on the DEX of choice (in this case Uniswap v4). This token is minted via our Uniswap v4 custom hook that rewards both traders and liquidity providers based on their activity on the pools that integrate this hook.

When a user accumulates enough ERC404 tokens, an NFT bounded to those tokens is minted in their wallet and its owner can burn it to participate in a raffle. The raffle is managed through Chainlink VRF and is funded by pool swap fees (which are collected by our custom hook instead of having them sent to the pool contract).

The NFTs implement NounsDAO assets as an open-source library that internally manages multiple asset generation based on a random seed.

We also created a custom subgraph on theGraph to track users gains and winnings to have a fast way for querying the tokens moved in our protocol and to maintain a leaderboard to best engage users.
