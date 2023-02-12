class Solution:
    def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
        graph  = defaultdict(list)
        for a, b in roads:
            graph[a].append(b)
            graph[b].append(a)
        def dfs(u, p):
            cnt = 1
            for v in graph[u]:
                if v == p: continue
                cnt += dfs(v, u)
            if u != 0:
                self.ans += math.ceil(cnt / seats)
            return cnt
        self.ans = 0
        dfs(0, -1)
        return self.ans