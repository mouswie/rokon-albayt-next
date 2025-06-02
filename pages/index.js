export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem', fontFamily: 'Arial' }}>
      <h1>أهلاً بك في ركن البيت</h1>
      <p>تسوق أجمل المنتجات لمنزلك</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', width: '200px' }}>
          <h3>الأثاث</h3>
          <p>أثاث راقٍ لمنزلك العصري</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', width: '200px' }}>
          <h3>الأجهزة المنزلية</h3>
          <p>أفضل الأجهزة لراحتك اليومية</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', width: '200px' }}>
          <h3>عدد يدوية</h3>
          <p>عدد متينة لكل احتياجاتك</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', width: '200px' }}>
          <h3>إلكترونيات</h3>
          <p>تقنيات حديثة بين يديك</p>
        </div>
      </div>
    </div>
  );
}
