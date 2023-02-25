class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        low, profit = prices[0], 0
        for price in prices:
            if price < low: low = price
            elif price - low > profit: profit = price - low
        return profit
                