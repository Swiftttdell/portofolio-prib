import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

print('=== PROGRAM INPUT & ANALISIS DATA PENJUALAN ===\n')

input_lagi = 'ya'
list_tanggal = []
list_kategori = []
list_jumlah = []
list_harga = []

while input_lagi.lower() == 'ya':
  print('--- Masukkan Data Transaksi Baru ---')
  tgl = input('Tanggal (YYYY-MM-DD): ')
  kat = input('Kategori Produk: ')
  jml = int(input('Jumlah Terjual: '))
  hrg = float(input('Harga Satuan (IDR): '))

  list_tanggal.append(tgl)
  list_kategori.append(kat)
  list_jumlah.append(jml)
  list_harga.append(hrg)

  input_lagi = input('Mau tambah data lagi? (ya/tidak): ')
  print()

data = {
    'Tanggal': list_tanggal,
    'kategori': list_kategori,
    'Jumlah_Terjual': list_jumlah,
    'Harga_Satuan': list_harga,
}

df = pd.DataFrame(data)

df['Tanggal'] = pd.to_datetime(df['Tanggal'])
df['Total_Pendapatan'] = df['Jumlah_Terjual'] * df['Harga_Satuan']
df['Tanggal_Str'] = df['Tanggal'].dt.strftime('%Y-%m-%d')
df['kategori_tanggal'] = df['kategori'] + ' (' + df['Tanggal_Str'] + ')'

print('--- RINGKASAN DATA KESELURUHAN ---')
print(df)
print('\n')

analisis_kategori = (
    df.groupby('kategori')['Total_Pendapatan']
    .agg(['sum', 'mean', 'count'])
    .reset_index()
)
analisis_kategori.columns = [
    'Kategori',
    'Total_Pendapatan',
    'Rata_Rata_Pendapatan',
    'Frekuensi_Transaksi',
]

print('--- HASIL ANALISIS PER KATEGORI ---')
print(analisis_kategori)
print('\n')

sns.set_theme(style='whitegrid')
plt.figure(figsize=(10, 5))

sns.barplot(
    x='kategori_tanggal',
    y='Total_Pendapatan',
    data=df,
    palette='viridis',
    hue='kategori_tanggal',
    legend=False,
)

plt.title('Analisis Total Pendapatan Berdasarkan Kategori & Tanggal')
plt.xlabel('Kategori (Tanggal Transaksi)')
plt.ylabel('Total Pendapatan (IDR)')
plt.xticks(rotation=20)
plt.tight_layout()

print('Menampilkan grafik analisis... Tutup jendela grafik untuk keluar.')
plt.show()