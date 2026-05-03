import Link from 'next/link';

export default function Packages() {
  return (
    <>
<div><div className="page-hero">
      <h1>Packages</h1>
      <p>Every trip includes hotel, private cab, and meals — so you can focus on the views, not the logistics.</p>
    </div><div className="packages-grid">
      <article className="pkg-full-card">
        <img src="images/kashmir1.jpg" alt="Shikara boats on a lake in Kashmir" width="400" height="275" loading="lazy" />
        <div className="pkg-full-inner">
          <h2>Kashmir Tour</h2>
          <p className="pkg-meta">5 nights / 6 days</p>

          <ul className="pkg-bullets">
            <li>Hotel</li>
            <li>Cab</li>
            <li>Meals</li>
          </ul>
          <Link href="/packages/kashmir-escape" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
          <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Kashmir%20Tour." target="_blank" rel="noopener noreferrer">Book now</Link>
        </div>
      </article>

      <article className="pkg-full-card">
        <img src="images/himachal1.jpg" alt="Himachal Pradesh mountain road" width="400" height="275" loading="lazy" />
        <div className="pkg-full-inner">
          <h2>Himachal Tour</h2>
          <p className="pkg-meta">6 nights / 7 days</p>

          <ul className="pkg-bullets">
            <li>Hotel</li>
            <li>Cab</li>
            <li>Meals</li>
          </ul>
          <Link href="/packages/himachal-circuit" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
          <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Himachal%20Tour." target="_blank" rel="noopener noreferrer">Book now</Link>
        </div>
      </article>

      <article className="pkg-full-card">
        <img src="images/vaishnodevi1.jpg" alt="Pilgrimage path in the Trikuta hills" width="400" height="275" loading="lazy" />
        <div className="pkg-full-inner">
          <h2>Vaishno Devi Tour</h2>
          <p className="pkg-meta">3 nights / 4 days</p>

          <ul className="pkg-bullets">
            <li>Hotel</li>
            <li>Cab</li>
            <li>Meals</li>
          </ul>
          <Link href="/packages/vaishno-devi-yatra" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
          <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Vaishno%20Devi%20Tour." target="_blank" rel="noopener noreferrer">Book now</Link>
        </div>
      </article>

      <article className="pkg-full-card">
        <img src="images/rajasthan1.jpg" alt="Historic palace architecture in Rajasthan" width="400" height="275" loading="lazy" />
        <div className="pkg-full-inner">
          <h2>Rajasthan Tour</h2>
          <p className="pkg-meta">7 nights / 8 days</p>

          <ul className="pkg-bullets">
            <li>Hotel</li>
            <li>Cab</li>
            <li>Meals</li>
          </ul>
          <Link href="/packages/rajasthan-heritage" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
          <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Rajasthan%20Tour." target="_blank" rel="noopener noreferrer">Book now</Link>
        </div>
      </article>

      <article className="pkg-full-card">
        <img src="images/delhi1.jpg" alt="City skyline and urban India travel" width="400" height="275" loading="lazy" />
        <div className="pkg-full-inner">
          <h2>Delhi Tour</h2>
          <p className="pkg-meta">2 nights / 3 days</p>

          <ul className="pkg-bullets">
            <li>Hotel</li>
            <li>Cab</li>
            <li>Meals</li>
          </ul>
          <Link href="/packages/delhi-tour" style={{ display: 'block', textAlign: 'center', margin: '12px 0', color: 'var(--text-secondary)', textDecoration: 'underline', opacity: 0.7, fontSize: '0.9rem' }}>more details</Link>
          <Link className="btn btn-primary btn-block" href="https://wa.me/919906130577?text=Hi%2C%20I%20want%20to%20book%20Delhi%20Tour." target="_blank" rel="noopener noreferrer">Book now</Link>
        </div>
      </article>
    </div></div>
</>
  );
}