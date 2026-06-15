"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// اطلاعات بسته‌ها (Rank ها) - اینجا رنک‌های جدید اضافه شدند
const packages = [
  { id: 1, name: 'Iron', price: '۱۰۰ تومان', duration: '۱ ماه', features: ['Iron Tag', 'Basic Kit'], color: '#7f8c8d', apiEndpoint: '/api/purchase/iron' },
  { id: 2, name: 'Gold', price: '۲۰۰ تومان', duration: '1 ماه', features: ['Gold Tag', 'Improved Kit', 'Daily Reward'], color: '#f1c40f', apiEndpoint: '/api/purchase/gold' },
  { id: 3, name: 'Legend', price: '۳۰۰ تومان', duration: '1 ماه', features: ['Legend Tag', 'Legendary Kit', 'Special Weekly Reward'], color: '#8e44ad', apiEndpoint: '/api/purchase/legend' },
  { id: 4, name: 'PixelRealm', price: '۴۰۰ تومان', duration: '1 ماه', features: ['PixelRealm Tag', 'Ultimate Kit', 'Exclusive Access', 'Priority Support'], color: '#2ecc71', apiEndpoint: '/api/purchase/pixelrealm' },
  { id: 5, name: 'Sponsor', price: '۵۰۰ تومان', duration: '1 ماه', features: ['Sponsor Tag', 'All Features +', 'Server Acknowledgement', 'Direct Developer Chat'], color: '#e74c3c', apiEndpoint: '/api/purchase/sponsor' },
];

export default function ShopPage() {
  const [loading, setLoading] = useState<number | null>(null); // برای نمایش وضعیت لودینگ دکمه خرید
  const [playerName, setPlayerName] = useState(''); // برای نگهداری نام کاربری پلیر
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null); // برای نگهداری بسته انتخابی

  const handlePurchase = async (pkgId: number, endpoint: string, pkgName: string) => {
    // قبل از شروع، بررسی می‌کنیم که نام کاربری وارد شده باشد
    if (!playerName.trim()) {
      alert('لطفاً نام کاربری ماینکرفت خود را وارد کنید.');
      return;
    }

    setSelectedPackage(pkgId); // مشخص کردن بسته انتخاب شده
    setLoading(pkgId); // نمایش لودینگ برای دکمه بسته فعلی

    // شبیه‌سازی فرآیند خرید:
    // 1. نمایش پیام هدایت به درگاه پرداخت
    alert(`شما بسته ${pkgName} را انتخاب کردید.\nنام کاربری: ${playerName}\nدر حال هدایت شما به درگاه پرداخت...`);

    // 2. شبیه‌سازی فرآیند پرداخت و دریافت پاسخ از backend
    setTimeout(async () => {
      console.log(`Simulating purchase for: ${pkgName}, Player: ${playerName}, Endpoint: ${endpoint}`);

      // شبیه سازی موفقیت پرداخت و ارسال به API سرور
      const simulatedPaymentSuccess = true; // فرض می‌کنیم پرداخت موفقیت‌آمیز بوده

      if (simulatedPaymentSuccess) {
        // شبیه سازی ارسال به API سرور برای دادن بسته به پلیر
        try {
          const response = await fetch('/api/complete-purchase', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              packageId: pkgId,
              playerName: playerName,
              packageName: pkgName,
            }),
          });

          // بررسی وضعیت پاسخ از سرور
          if (!response.ok) {
            // اگر پاسخ موفقیت آمیز نبود (مثلاً 404, 500 و ...)
            const errorText = await response.text(); // سعی می‌کنیم متن خطا را بخوانیم (که احتمالاً HTML است)
            console.error('Server responded with an error:', response.status, errorText);
            alert(`خرید انجام نشد. خطای سرور (${response.status}). لطفاً بعداً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.`);
            setLoading(null);
            setSelectedPackage(null);
            return; // خروج از تابع در صورت خطا
          }

          // اگر پاسخ OK بود، سعی می‌کنیم JSON را بخوانیم
          const data = await response.json();

          if (data.success) {
            alert(`خرید بسته ${pkgName} با موفقیت انجام شد!\nبسته به نام کاربری ${playerName} افزوده شد.`);
          } else {
            alert(`خرید انجام شد، اما در افزودن بسته به حساب شما خطایی رخ داد: ${data.message || 'خطای ناشناخته'}`);
          }
        } catch (error) {
          // این catch خطاهای مربوط به fetch یا JSON.parse را می‌گیرد
          console.error('Error processing purchase:', error);
          alert('خطایی در پردازش خرید رخ داد. لطفاً بعداً دوباره تلاش کنید.');
        } finally {
          setLoading(null); // برداشتن لودینگ
          setSelectedPackage(null); // پاک کردن بسته انتخاب شده
          setPlayerName(''); // پاک کردن نام کاربری برای خرید بعدی
        }
      } else {
        // اگر پرداخت ناموفق بود (که اینجا شبیه‌سازی شده)
        alert('پرداخت ناموفق بود. لطفاً دوباره تلاش کنید.');
        setLoading(null);
        setSelectedPackage(null);
      }
    }, 2000); // شبیه سازی 2 ثانیه برای فرآیند پرداخت
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ direction: 'rtl' }}>
      {/* Header */}
      <header className="bg-[#1a1a1a] py-4 shadow-md shadow-purple-500/10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-purple-500">PIXELSHOP</h1>
            <nav className="flex items-center gap-6 ml-8">
              <Link href="/" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                خانه
              </Link>
              <Link href="/shop" className="text-sm text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                فروشگاه
              </Link>
              <Link href="/rules" className="text-sm text-gray-300 hover:text-purple-400 transition-colors">
                قوانین
              </Link>
            </nav>
          </div>
          <div className="text-sm text-gray-300">
            <span className="font-semibold">IP:</span> sv3.tgmc.ir:28090
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">
          فروشگاه رسمی سرور
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          رنک‌ها، کوین و آیتم‌های ویژه را خریداری کنید.
        </p>

        {/* Player Name Input */}
        <div className="mb-8 max-w-md mx-auto">
          <label htmlFor="playerName" className="block text-lg font-semibold mb-2 text-purple-300">
            نام کاربری ماینکرفت شما:
          </label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-700 bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="نام کاربری خود را وارد کنید"
          />
        </div>

        {/* Product Cards / Ranks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#1a1a1a] border-2 border-purple-900/50 rounded-2xl p-8 transition-all transform hover:-translate-y-2 ${selectedPackage === pkg.id ? 'shadow-xl border-4' : ''}`}
              style={{ borderColor: pkg.color, boxShadow: selectedPackage === pkg.id ? `0 0 30px ${pkg.color}50` : `0 0 15px ${pkg.color}20` }}
            >
              <h3 className="text-3xl font-bold mb-3" style={{ color: pkg.color }}>{pkg.name}</h3>
              <div className="text-2xl font-semibold mb-6 text-gray-200">{pkg.price} <span className="text-sm text-gray-400">({pkg.duration})</span></div>
              <ul className="space-y-4 mb-10 text-left text-gray-300">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-purple-500 text-lg">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePurchase(pkg.id, pkg.apiEndpoint, pkg.name)}
                disabled={loading === pkg.id || !playerName.trim()} // غیرفعال کردن دکمه اگر نام کاربری خالی است
                className={`w-full py-3 rounded-xl font-bold text-lg transition-colors ${
                  loading === pkg.id || !playerName.trim() ? 'bg-gray-600 cursor-not-allowed' : 'hover:bg-purple-700'
                }`}
                style={{ backgroundColor: pkg.color }}
              >
                {loading === pkg.id ? 'در حال پردازش...' : 'خرید'}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Rules Section */}
      <section className="mt-20 py-12 bg-[#111111] border-t border-b border-purple-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h4 className="text-3xl font-bold mb-6 text-purple-400">قوانین خرید</h4>
          <ul className="space-y-3 text-gray-300 text-lg">
            <li className="flex items-center gap-3 justify-center">
              <span className="text-purple-500">●</span> نام کاربری ماینکرفت خود را به درستی وارد کنید.
            </li>
            <li className="flex items-center gap-3 justify-center">
              <span className="text-purple-500">●</span> پس از فعال‌سازی، بازگشت وجهی صورت نمی‌گیرد.
            </li>
            <li className="flex items-center gap-3 justify-center">
              <span className="text-purple-500">●</span> در صورت بروز مشکل، با مدیریت تماس بگیرید.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © PixelShop 2026
      </footer>
    </div>
  );
}
