class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        total = 0
        count = 0
        fruit_types = Counter()
        left = right = 0
        while right < len(fruits):
            if fruit_types[fruits[right]] == 0:
                count += 1
            fruit_types[fruits[right]] += 1
            
            while count > 2:
                fruit_types[fruits[left]] -= 1
                if fruit_types[fruits[left]] == 0:
                    count -= 1
                left += 1
            
            total = max(total, right - left + 1)
            right +=1
        return total
        