"use client";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ThemeProvider } from "@/app/theme-provider"
import { PropsWithChildren } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "@/components/ui/CheckoutForm";
const stripePromise = loadStripe('pk_test_51MTGWkSCJLPdp7E7LV2XHIjGEG6p7MqJzuZFkouznskmNTUq9VuCPmrYuuhtGA49ERXcEUotMbzoKZkGfTOrqEdX00mAopRyOL');
const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);




export function Providers({ children }: PropsWithChildren) {
  const id = ''
  console.log(process.env.STRIPE_SECRET_KEY)
  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY}
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
     
      <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </Elements>
        
      </ConvexProviderWithClerk>
    </ClerkProvider>

    
  );
}
