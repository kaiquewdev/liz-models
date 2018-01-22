'''
Liz models methods test case
'''

import tensorflow as tf

from liz_models import distance_generation

class DistanceGenerationTest(tf.test.TestCase):
	def standardSamples(self):
		with self.test_session():
			self.assertEqual(len(distance_generation()), 10**5)

class WeightsGenerationTest(tf.test.TestCase):
	def standardSamples(self):
		with self.test_session():
			self.assertEqual(len(weights_generation()), 10**5)

if __name__ == '__main__':
	tf.test.main()