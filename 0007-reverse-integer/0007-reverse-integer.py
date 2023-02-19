class Solution:
    def reverse(self, x: int) -> int:
        revVal = int(str(abs(x))[::-1])
        if revVal.bit_length() > 31: return 0;
        return -1*revVal if x < 0 else revVal;