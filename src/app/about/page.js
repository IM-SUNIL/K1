import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="section">
        <div className="page-intro">
          <h1>About Katra Travels</h1>
          <p>We’re a small team obsessed with getting the basics right: safe transport, honest rates, and restful nights.</p>
        </div>
        <div className="about-wrap">
      <div className="about-card">
        <p>
          Katra Travels started with a simple idea — North India is too beautiful to navigate through stress. We stitch
          together hotels, drivers, and meal plans so your holiday feels like a holiday.
        </p>
        <ul>
          <li>Affordable, upfront package pricing</li>
          <li>Hotel and cab coordination in one place</li>
          <li>Human support before and during your trip</li>
        </ul>
      </div>
      <div className="about-highlight">
        <strong>Raj Kumar</strong> — “Straight answers on WhatsApp and fair pricing. Felt looked after from the first
        message.” <span aria-hidden="true">★★★★★</span>
      </div>
    </div>
    </div>
</>
  );
}