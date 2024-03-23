'use client'
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import POST from '../api/route';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every rende
import { NextResponse } from 'next/server'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Failed to submit form');
    }
  };
  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>)}



 