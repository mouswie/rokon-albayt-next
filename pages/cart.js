
import { useState } from 'react';

export default function Cart() {
  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', quantity: 1, discount: 0
  });

  const sendToWhatsApp = () => {
    const message = `طلب جديد:
الاسم: ${formData.name}
الهاتف: ${formData.phone}
العنوان: ${formData.address}
الكمية: ${formData.quantity}
الخصم: ${formData.discount}%`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/9647761384712?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: 20, direction: 'rtl' }}>
      <h2>السلة</h2>
      <input placeholder="الاسم" onChange={e => setFormData({ ...formData, name: e.target.value })} />
      <input placeholder="الهاتف" onChange={e => setFormData({ ...formData, phone: e.target.value })} />
      <input placeholder="العنوان" onChange={e => setFormData({ ...formData, address: e.target.value })} />
      <input placeholder="الكمية" type="number" onChange={e => setFormData({ ...formData, quantity: e.target.value })} />
      <select onChange={e => setFormData({ ...formData, discount: e.target.value })}>
        <option value="0">بدون خصم</option>
        <option value="5">خصم 5%</option>
        <option value="7">خصم 7%</option>
        <option value="10">خصم 10%</option>
        <option value="15">خصم 15%</option>
        <option value="25">خصم 25%</option>
        <option value="50">خصم 50%</option>
      </select>
      <button onClick={sendToWhatsApp}>إرسال الطلب عبر واتساب</button>
    </div>
  );
}
