
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === "mzadyiq@gmail.com" && password === "ALIzozo5566321") {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("بيانات الدخول غير صحيحة");
    }
  };

  return (
    <div style={{ padding: 20, direction: 'rtl' }}>
      <h2>تسجيل دخول الأدمن</h2>
      <input placeholder="البريد الإلكتروني" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>تسجيل الدخول</button>
    </div>
  );
}
