
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const [product, setProduct] = useState({ name: '', price: '', image: '', details: '' });
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem("admin") !== "true") {
      router.push("/login");
    }
  }, []);

  const handleAdd = () => {
    alert("تمت إضافة المنتج (محاكاة)");
  };

  return (
    <div style={{ padding: 20, direction: 'rtl' }}>
      <h2>لوحة تحكم الأدمن - إضافة منتج</h2>
      <input placeholder="اسم المنتج" onChange={e => setProduct({ ...product, name: e.target.value })} />
      <input placeholder="السعر" onChange={e => setProduct({ ...product, price: e.target.value })} />
      <input placeholder="رابط الصورة" onChange={e => setProduct({ ...product, image: e.target.value })} />
      <textarea placeholder="تفاصيل المنتج" onChange={e => setProduct({ ...product, details: e.target.value })} />
      <button onClick={handleAdd}>نشر المنتج</button>
    </div>
  );
}
