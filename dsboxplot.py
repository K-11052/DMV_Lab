import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv("blood_cell_anomaly_detection.csv")

plt.figure(figsize=(10, 5))
sns.boxplot(data=df, x="cell_type", y="cell_diameter_um")

plt.xticks(rotation=45)
plt.title("Cell Diameter by Cell Type")

plt.show()
