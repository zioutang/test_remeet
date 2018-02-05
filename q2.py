from functools import reduce
def function(data):
    ss, s, n = reduce(lambda a, b: map(sum, zip(a,b)), [(x*x, x, 1) for x in data])
    return (ss - s*s/n) / n
