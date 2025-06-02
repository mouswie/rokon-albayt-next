
import products from '../data/products.json';

export default function Categories() {
  return (
    <div style={{ padding: 20, direction: 'rtl' }}>
      <h2>الأقسام</h2>
      {['أثاث', 'أجهزة منزلية', 'عدد يدوية', 'إلكترونيات'].map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.filter(p => p.category === cat).map(prod => (
              <div key={prod.id} style={{ border: '1px solid gray', margin: 10, padding: 10 }}>
                <img src={prod.image} alt={prod.name} width="100" />
                <h4>{prod.name}</h4>
                <p>{prod.details}</p>
                <p>السعر: {prod.price} د.ع</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
