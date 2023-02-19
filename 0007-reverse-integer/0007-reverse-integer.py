class Solution:
    def reverse(self, x: int) -> int:
        revVal = 0
        num = abs(x)
        while num > 0:
            digit = num % 10
            revVal = revVal * 10 + digit
            num //= 10
        if revVal.bit_length() > 31: return 0;
        return -1*revVal if x < 0 else revVal;