class Solution:
    def distinctNames(self, ideas: List[str]) -> int:
        dct, ans = defaultdict(set), 0
        for idea in ideas:
            dct[idea[0]].add(idea[1:])
            
        d = sorted(dct.items())
        
        for init1, stuff1 in d:
            for init2, stuff2 in d:
                if init2 >= init1: break
                c = len(stuff1&stuff2)
                ans += (len(stuff1) - c) * (len(stuff2) - c)
        
        return ans * 2