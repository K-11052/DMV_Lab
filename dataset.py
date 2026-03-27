import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

sns.set(style="whitegrid")

df = pd.read_csv("blood_cell_anomaly_detection.csv")

print("Dataset Info:\n")
print(df.info())

print("\nMissing Values:\n")
missing = df.isnull().sum()
print(missing)

plt.figure(figsize=(8, 4))
sns.heatmap(df.isnull(), cbar=False, cmap="viridis")
plt.title("Missing Values Heatmap")
plt.show()

plt.figure(figsize=(10, 5))
sns.countplot(data=df, x="cell_type", order=df["cell_type"].value_counts().index)
plt.xticks(rotation=45)
plt.title("Cell Type Distribution")
plt.show()

plt.figure(figsize=(8, 5))
sns.countplot(data=df, x="disease_category", order=df["disease_category"].value_counts().index)
plt.xticks(rotation=45)
plt.title("Disease Category Distribution")
plt.show()

plt.figure(figsize=(6, 4))
sns.countplot(data=df, x="anomaly_label")
plt.title("Anomaly Label Distribution")
plt.show()

df["cell_type"].value_counts().plot.pie(autopct="%1.1f%%", figsize=(6, 6))
plt.title("Cell Type Pie Chart")
plt.ylabel("")
plt.show()

df["disease_category"].value_counts().plot.pie(autopct="%1.1f%%", figsize=(6, 6))
plt.title("Disease Category Pie Chart")
plt.ylabel("")
plt.show()

numerical_cols = [
    "cell_diameter_um",
    "nucleus_area_pct",
    "chromatin_density",
    "cytoplasm_ratio",
    "circularity",
    "eccentricity"
]

for col in numerical_cols:
    plt.figure(figsize=(8, 4))
    df.groupby("cell_type")[col].mean().sort_values().plot(marker='o')
    plt.title(f"Line Plot: Avg {col} by Cell Type")
    plt.ylabel(col)
    plt.xticks(rotation=45)
    plt.show()

for col in numerical_cols:
    plt.figure(figsize=(6, 4))
    sns.histplot(df[col], kde=True, bins=30)
    plt.title(f"Histogram of {col}")
    plt.show()

for col in numerical_cols:
    plt.figure(figsize=(6, 4))
    sorted_vals = np.sort(df[col].dropna())
    plt.step(range(len(sorted_vals)), sorted_vals)
    plt.title(f"Stair Plot of {col}")
    plt.show()

for col in numerical_cols:
    plt.figure(figsize=(8, 4))
    df.groupby("cell_type")[col].mean().sort_values().plot(kind="bar")
    plt.title(f"Average {col} by Cell Type")
    plt.xticks(rotation=45)
    plt.show()

print("\nOutlier Detection (IQR Method):\n")

for col in numerical_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1

    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR

    outliers = df[(df[col] < lower) | (df[col] > upper)]
    
    print(f"{col}: {len(outliers)} outliers")

    plt.figure(figsize=(6, 4))
    sns.boxplot(x=df[col])
    plt.title(f"Boxplot of {col}")
    plt.show()

ct = pd.crosstab(df["cell_type"], df["disease_category"])
ct.plot(kind="bar", stacked=True, figsize=(10, 5))
plt.title("Cell Type vs Disease Category")
plt.xticks(rotation=45)
plt.show()

ct2 = pd.crosstab(df["cell_type"], df["anomaly_label"])
ct2.plot(kind="bar", figsize=(8, 4))
plt.title("Cell Type vs Anomaly Label")
plt.xticks(rotation=45)
plt.show()