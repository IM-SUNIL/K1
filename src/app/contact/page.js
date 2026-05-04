"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', destination: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.destination || !formData.message) {
      setError('Please fill all the details before continuing.');
      return;
    }
    setError('');
    
    const text = `Hi Katra Travels, I would like to request a quote.\n\n*Name*: ${formData.name}\n*Phone*: ${formData.phone}\n*Destination*: ${formData.destination}\n*Message*: ${formData.message}`;
    const url = `https://wa.me/919906130577?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="section">
        <div className="page-intro">
          <h1>Let’s plan your next journey</h1>
          <p>Share your dates, destinations, and group size — we’ll reply with options, inclusions, and a clear price.</p>
        </div>
<div className="contact-layout">
      <aside className="contact-aside">
        <div className="contact-card contact-card--accent">
          <p className="contact-card-label">Direct line</p>
          <h2 className="contact-card-title">Prefer voice or WhatsApp?</h2>
          <p>Most guests reach us on the phone or WhatsApp for the fastest answers.</p>
          <div className="contact-card-actions">
            <Link className="btn btn-primary" href="tel:9906130577">Call now</Link>
            <Link className="btn btn-outline btn-on-dark" href="https://wa.me/919906130577?text=Hi%20Katra%20Travels%2C%20I%27d%20like%20to%20plan%20a%20trip." target="_blank" rel="noopener noreferrer">WhatsApp</Link>
          </div>
        </div>
        <div className="contact-card">
          <p className="contact-card-label">Email</p>
          <h2 className="contact-card-title">Written itineraries</h2>
          <p>For detailed requests or attachments, write to us anytime.</p>
          <p style={{marginTop: '0.75rem', marginBottom: 0}}>
            <Link href="mailto:katratravel@gmail.com">katratravel@gmail.com</Link>
          </p>
        </div>
        <div className="contact-card">
          <p className="contact-card-label">Location</p>
          <h2 className="contact-card-title">Visit us in Katra</h2>
          <iframe
            title="Katra Travels Location"
            src="https://maps.google.com/maps?q=32.990127,74.927788&z=17&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '8px', marginTop: '1rem' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-card">
          <p className="contact-card-label">What to include</p>
          <h2 className="contact-card-title">Help us help you</h2>
          <p>
            Travel dates, number of travellers, preferred region (Kashmir, Himachal, Vaishno Devi, etc.), and any
            must-see places. We’ll tailor from there.
          </p>
        </div>
        <ul className="contact-trust" aria-label="Trust notes">
          <li>Clear inclusions</li>
          <li>No-pressure booking</li>
          <li>North India specialists</li>
        </ul>
      </aside>

      <div className="contact-form-shell">
        <h2>Request a quote</h2>
        <p className="contact-form-intro">
          Fill in the form below — we’ll open WhatsApp with your message ready. Tap send and we’ll pick it up from
          there.
        </p>
        <div className="form-success" role="status">WhatsApp opened with your details — tap Send there to reach us.</div>
        <form id="contact-form" noValidate onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red', marginBottom: '1rem', fontWeight: 'bold' }}>{error}</div>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} autoComplete="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} autoComplete="tel" inputMode="tel" required />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <select id="destination" name="destination" value={formData.destination} onChange={handleChange} required>
              <option value="">Select…</option>
              <option value="Kashmir">Kashmir</option>
              <option value="Himachal">Himachal</option>
              <option value="Vaishno Devi">Vaishno Devi</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Delhi">Delhi</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Dates, group size, special requests…"></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Continue to WhatsApp</button>
        </form>
      </div>
    </div>
    </div>
</>
  );
}