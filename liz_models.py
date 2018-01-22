'''
Liz models methods
'''

def distance_generation():
	return np.array([np.random.randint(1,1000) for _ in range(10**5)])

def weights_generation():
	return np.array([np.random.randint(60,500) for _ in range(10**5)])