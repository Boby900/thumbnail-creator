"use client";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every rende

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  type CardProps = React.ComponentProps<typeof Card>;
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-center text-4xl font-bold m-2">Pricing Plans</h1>
      <h5>
        Start building for free, then add a site plan to go live. Account <br />
        plans unlock additional features.
      </h5>

      <div className="flex">
        <div>
        <Card>
          <CardHeader>
            <CardTitle>Hobby</CardTitle>
            <CardDescription>$0 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card>
          <CardHeader>
            <CardTitle>Startup</CardTitle>
            <CardDescription>$10 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>$20 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription>$40 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </CardFooter>
        </Card>
        </div>
      </div>


      <form action="/api" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
      </form>
    </div>
  );
}
