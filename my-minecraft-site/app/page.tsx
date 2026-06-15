"use client";
import { useEffect, useState } from "react";
import Link from 'next/link'; 

export default function Home() {
  const [status, setStatus] = useState({
    online: false,
    players: 0,
    maxPlayers: 0,
  });

  const fetchStatus = async () => {
    try {
      const res = await fetch("/api/server-status");
      const data = await res.json();
      setStatus({
        online: data.online,
        players: data.players || 0,
        maxPlayers: data.maxPlayers || 0,
      });
    } catch (err) {
      console.error("Error fetching status");
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 15000);
    return () => clearInterval(interval);
  }, []);

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
      direction: 'rtl'
    }}>
      
      {/* Hero Section */}
      <div style={{ 
        padding: '20px 20px 20px 20px', 
        textAlign: 'center', 
        background: 'radial-gradient(circle, #2e1065 0%, #0a0510 70%)' 
      }}>
        <h1 style={{ 
          fontSize: '4.5rem', 
          fontWeight: '900', 
          color: '#f5f3ff',
          textShadow: '0 0 35px #7c3aed',
          marginBottom: '10px', 
          letterSpacing: '2px'
        }}>
          PIXEL REALM
        </h1>
        
        {/* Navigation Bar - Moved here to be under the title and kept */}
        <nav style={{ display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center', marginBottom: '50px' }}>
           <Link href="/" style={{ color: '#e9d5ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', transition: 'color 0.3s' }}>
             خانه
           </Link>
           <Link href="/shop" style={{ color: '#e9d5ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', transition: 'color 0.3s' }}>
             فروشگاه
           </Link>
           <Link href="/rules" style={{ color: '#e9d5ff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: '600', padding: '10px 15px', transition: 'color 0.3s' }}>
             قوانین
           </Link>
        </nav>

        <p style={{ color: '#a78bfa', fontSize: '1.2rem', marginBottom: '50px' }}>
          تجربه‌ای متفاوت در سرور
        </p>

        {/* Status Card */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'rgba(30, 10, 50, 0.5)',
          borderRadius: '30px',
          padding: '50px 40px',
          border: '1px solid #581c87',
          boxShadow: '0 0 50px rgba(88, 28, 135, 0.2)',
        }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr 1fr',
            alignItems: 'center',
            gap: '20px'
          }}>
            
            {/* Version Section */}
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#7c3aed', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>VERSION</div>
              <div style={{ 
                fontSize: '1.3rem', 
                color: '#ddd6fe', 
                fontWeight: '600',
                direction: 'ltr',
                display: 'inline-block'
              }}>
                1.20.X - 1.21.X
              </div>
            </div>

            {/* IP Box */}
            <div 
              onClick={copyIP}
              style={{
                background: 'linear-gradient(135deg, #5b21b6, #7c3aed)',
                padding: '25px',
                borderRadius: '20px',
                cursor: 'pointer',
                transition: '0.3s',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
            >
              <div style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '8px', color: '#ddd6fe' }}>CLICK TO COPY IP</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'white' }}>sv3.tgmc.ir:28090</div>
            </div>

            {/* Status Section */}
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#7c3aed', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '5px' }}>STATUS</div>
              <div style={{ 
                fontSize: '1.3rem', 
                color: status.online ? '#4ade80' : '#fb7185',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '10px',
                fontWeight: '600'
              }}>
                <span style={{ 
                  width: '12px', 
                  height: '12px', 
                  backgroundColor: status.online ? '#4ade80' : '#fb7185', 
                  borderRadius: '50%',
                  boxShadow: `0 0 15px ${status.online ? '#4ade80' : '#fb7185'}`
                }}></span>
                {status.online ? 'آنلاین' : 'در حال تعمیر'}
              </div>
            </div>

          </div>

          <div style={{ 
            marginTop: '40px', 
            fontSize: '1.1rem', 
            color: '#a78bfa', 
            opacity: 0.8,
            borderTop: '1px solid rgba(124, 58, 237, 0.1)',
            paddingTop: '20px'
          }}>
            تعداد پلیرها: <span style={{color: 'white', direction: 'ltr', display: 'inline-block'}}>{status.players} / {status.maxPlayers}</span>
          </div>

        </div>

        {/* CTA Button (ورود به فروشگاه) - این دکمه همچنان باقی میمونه */}
        <Link href="/shop"> 
          <button style={{
            marginTop: '50px',
            padding: '18px 50px',
            borderRadius: '20px',
            border: 'none',
            background: 'linear-gradient(to right, #6d28d9, #7c3aed)',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)',
            transition: '0.3s'
          }}>
            ورود به فروشگاه PixelRealm
          </button>
        </Link>

      </div>

      <footer style={{ textAlign: 'center', padding: '40px', color: '#4c1d95', fontSize: '0.9rem' }}>
        © 2026 PixelRealm | ساخته شده توسط __MrDeath__
      </footer>

    </main>
  );
}
