import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

data = {
    'Tanggal':[
        '2026-01-01',
        '2026-01-02',
        '2026-01-03',
        '2026-01-04',
        '2026-01-05',
    ],
    'kategori':[
        'Elektronik',
        'Pakaian',
        'Makanan',
        'Minuman',
        'Celana',
],
'Jumlah_Terjual' :[10, 20, 3, 100, 45],
'Harga_Satuan': [1500000, 150000, 3000000, 25000, 120000],
}

df = pd.DataFrame(data)
df['Tanggal'] = pd.to_datetime(df['Tanggal'])
df['Total_Pendapatan'] = df['Jumlah_Terjual'] * df['Harga_Satuan']

print('--- Ringkasan Data---')
print(df)
print('\n')

pendapatan_kategori = (
    df.groupby('kategori')['Total_Pendapatan'].sum().reset_index()
)

print('--- Total Pendapatan Per Kategori ---')
print(pendapatan_kategori)

sns.set_theme(style='whitegrid')

plt.figure(figsize=(8,5))

sns.barplot(
    x= 'kategori',
    y= 'Total_Pendapatan',
    data= pendapatan_kategori,
    palette= 'viridis',
    hue= 'kategori',
    legend= False,
)

plt.title('Total Pendapatan Berdasarkan Kategori Produk')
plt.xlabel('Kategori')
plt.ylabel('Total Pendapatan (IDR)')
plt.tight_layout()

plt.show()