import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv(r"d:\Khushi_DVM_Lab\company_dataset.csv")

df['years_clean'] = df['years'].str.extract(r'(\d+)').astype(float)
df['ratings'] = pd.to_numeric(df['ratings'], errors='coerce')

df['review_count'] = df['review_count'].astype(str).str.replace(',', '')
df['review_count'] = df['review_count'].str.extract(r'(\d+)').astype(float)

df['employees_clean'] = df['employees'].astype(str).str.replace(',', '')
df['employees_clean'] = df['employees_clean'].str.extract(r'(\d+)').astype(float)

df = df.head(100)

top_emp = df.sort_values(by='employees_clean', ascending=False).head(10)

# PIE CHART FOR Employees and Company Names
plt.figure()
plt.pie(top_emp['employees_clean'], labels=top_emp['name'], autopct='%1.1f%%')
plt.title("Top 10 Companies by Employees")
plt.show()

# Funnel Chart According to Company Rating

funnel_data = df.sort_values(by='ratings', ascending=False).head(15)

plt.figure()
plt.barh(funnel_data['name'], funnel_data['ratings'])
plt.gca().invert_yaxis()
plt.title("Top Companies by Rating")
plt.xlabel("Ratings")
plt.ylabel("Company")
plt.show()

# Bar Chart on Companies vs Years

top_years = df.sort_values(by='years_clean', ascending=False).head(15)

plt.figure()
plt.bar(top_years['name'], top_years['years_clean'])
plt.xticks(rotation=60, ha='right')
plt.title("Top Companies by Years")
plt.xlabel("Company")
plt.ylabel("Years")
plt.tight_layout()
plt.show()

# Line Chart between Companies and Company Type

ctype_counts = df['ctype'].value_counts()

plt.figure()
plt.plot(ctype_counts.index, ctype_counts.values, marker='o')
plt.xticks(rotation=30)
plt.title("Company Type Distribution")
plt.xlabel("Company Type")
plt.ylabel("Count")
plt.tight_layout()
plt.show()

# Histogram for Companies and Review Count

plt.figure()
plt.hist(df['review_count'].dropna(), bins=20)
plt.title("Distribution of Review Count")
plt.xlabel("Review Count")
plt.ylabel("Frequency")
plt.show()