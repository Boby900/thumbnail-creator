"use client";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ThemeProvider } from "@/app/theme-provider"
import { PropsWithChildren } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51MTGWkSCJLPdp7E7LV2XHIjGEG6p7MqJzuZFkouznskmNTUq9VuCPmrYuuhtGA49ERXcEUotMbzoKZkGfTOrqEdX00mAopRyOL');
const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string
);




export function Providers({ children }: PropsWithChildren) {

 
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>

    
    
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>

        
      </ConvexProviderWithClerk>
    </ClerkProvider>

    
  );
}
