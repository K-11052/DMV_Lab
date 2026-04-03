import numpy as np
import matplotlib.pyplot as plt

np.random.seed(42)

x1 = np.random.normal(10, 2, 50)
y1 = 2 * x1 + np.random.normal(0, 3, 50)

x2 = np.random.normal(30, 3, 50)
y2 = 2 * x2 + np.random.normal(0, 4, 50)

x_out = np.array([5, 50, 60])
y_out = np.array([80, 10, 120])

x = np.concatenate([x1, x2, x_out])
y = np.concatenate([y1, y2, y_out])

# Plot
plt.figure()
plt.scatter(x, y)

plt.title("Scatter Plot with Clusters, Outliers, and Positive Correlation")
plt.xlabel("X values")
plt.ylabel("Y values")
plt.show()