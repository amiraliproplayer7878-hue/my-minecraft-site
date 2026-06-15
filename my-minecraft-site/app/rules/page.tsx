"use client";

import Link from 'next/link';

export default function RulesPage() {
  const copyIP = () => {
    navigator.clipboard.writeText('sv3.tgmc.ir:28090');
    alert('آی‌پی سرور PixelRealm کپی شد!');
  };

  return (
    <main style={{
      backgroundColor: '#0a0510',
      color: '#e9d5ff',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      direction: 'rtl',
      paddingTop: '40px'
    }}>

      <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center', marginBottom: '50px', padding: '0 20px' }}>
         <Link href="/" style={{ color: '#e9d5ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', transition: 'color 0.3s' }}>
           خانه
         </Link>
         <Link href="/shop" style={{ color: '#e9d5ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', transition: 'color 0.3s' }}>
           فروشگاه
         </Link>
         <Link href="/rules" style={{ color: '#f8fafc', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', borderBottom: '2px solid #7c3aed', transition: 'color 0.3s' }}>
           قوانین
         </Link>
      </nav>

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 50px auto',
        background: 'rgba(30, 10, 50, 0.5)',
        borderRadius: '30px',
        padding: '50px 40px',
        border: '1px solid #581c87',
        boxShadow: '0 0 50px rgba(88, 28, 135, 0.2)',
        textAlign: 'right'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#f5f3ff',
          textShadow: '0 0 20px #7c3aed',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          ⛔ قوانین سرور PixelRealm ⛔
        </h1>

        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> ایجاد مزاحمت پی در پی برای اشخاص دیگر ممنوع میباشد
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> تبلیغ در گپ سرور و در سرور ممنوع میباشد <span style={penaltyStyle}>24h mute</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> ساخت بیلد هایه سیاسی و مستهجن ممنوع میباشد <span style={penaltyStyle}>5h ban</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> سوءاستفاده از قابلیت هایه استف ممنوع میباشد <span style={penaltyStyle}>warn</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> هرگونه توهین به استف ممنوع میباشد <span style={penaltyStyle}>3h mute</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> توهین به پلیر هایه سرور در گپ و در سرور ممنوع میباشد <span style={penaltyStyle}>3h mute</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> فروش در سرور با پول واقعی ممنوع میباشد <span style={penaltyStyle}>ban دائمی</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> استفاده از چیت و.. ممنوع میباشد <span style={penaltyStyle}>7d/14d/بن دائمی</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> داشتن چند اکانت مختلف بدون تایید مالک ممنوع میباشد <span style={penaltyStyle}>بن تمام اک فیک</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> خرید و فروش اکانت به هر صورت ممنوع میباشد <span style={penaltyStyle}>بن دائمی</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> تخریب بناهای سرور ممنوع میباشد <span style={penaltyStyle}>4h ban</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> کلاهبرداری از پلیر ها در سرور ممنوع میباشد <span style={penaltyStyle}>reset balance</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> ارسال محتوا مستهجن در گپ و سرور ممنوع میباشد <span style={penaltyStyle}>15m mute</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> پلیر ها موظف هستند به ادمین ها در زمان انجام وظیفه کمک و یاری کنند
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> سوء استفاده از مشکلات کوچک و بزرگ سرور ممنوع میباشد <span style={penaltyStyle}>6h jail</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> استف موظف میباشد درصورت گزارش درست پلیر ها به مالکین سرور اطلاعاتی کافی برای مستند بودن بدهد
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> استفاده از هرگونه ایدی / یوزرنیم <span style={penaltyStyle}>ban دائمی</span> / پروفایل بن / اسکین مستهجن و نامناسب ممنوع میباشد <span style={penaltyStyle}>بن 7d</span>
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> استفاده از اسکین ۴ بعدی ممنوع میباشد
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> پخش و یا سوال درباره اطلاعات شخصی دیگران ممنوع میباشد
          </li>
          <li style={ruleItemStyle}>
            <span style={bulletStyle}>❉</span> لقب گذاری بر روی پلیر ها و استف ممنوع میباشد
          </li>
          <li style={ruleItemStyle}>
            درخواست مکرر برای رنک اپ یا ایتم ممنوع است <span style={penaltyStyle}>warn/mute 2h</span>
          </li>
        </ul>
        <p style={{ marginTop: '30px', fontSize: '0.9rem', color: '#a78bfa', textAlign: 'center', borderTop: '1px solid rgba(124, 58, 237, 0.1)', paddingTop: '15px' }}>
          ادمین و استف مسئول است در صورت دیدن این موارد برخورد مناسب داشته باشد 🌺
        </p>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '50px', padding: '0 20px' }}>
        <div style={{ marginBottom: '20px', color: '#a78bfa', fontSize: '1.1rem'}}>
          💬 | <a href="https://rubika.ir/joing/BAGAJCGID0BYXWILLNKIAPXLONNLXJZB" target="_blank" rel="noopener noreferrer" style={{color: '#ddd6fe', textDecoration: 'underline'}}>لینک روبیکا</a>
        </div>
        <div style={{ color: '#a78bfa', fontSize: '1.1rem'}}>
          🎮 | <span onClick={copyIP} style={{color: '#ddd6fe', cursor: 'pointer', textDecoration: 'underline'}}>sv3.tgmc.ir:28090</span>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#4c1d95', fontSize: '0.9rem' }}>
        © 2026 PixelRealm | ساخته شده توسط __MrDeath__
      </footer>

    </main>
  );
}

const ruleItemStyle = {
  marginBottom: '15px',
  fontSize: '1.1rem',
  lineHeight: '1.7',
  display: 'flex',
  alignItems: 'flex-start',
};

const bulletStyle = {
  color: '#7c3aed',
  fontSize: '1.3rem',
  marginRight: '10px',
  fontWeight: 'bold',
  flexShrink: 0,
};

const penaltyStyle = {
  color: '#fb7185',
  fontWeight: 'bold',
  marginLeft: '10px',
  fontSize: '0.95rem',
  background: 'rgba(251, 113, 133, 0.1)',
  padding: '3px 8px',
  borderRadius: '5px'
};
