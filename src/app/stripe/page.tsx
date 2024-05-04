"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);



export default function PreviewPage() {
 
 

  // Add event listener to handle button click
  


  return (
    <div className="text-center">
      <h1 className="text-center text-4xl font-bold m-4 p-4">Pricing Plans</h1>
      <h5>
        Start building for free, then add a site plan to go live. Account <br />
        plans unlock additional features.
      </h5>

      <div className="flex justify-center gap-8 m-4 p-4 md:flex-row flex-col ">
        <div>
        <Card className="bg-gradient-to-b from-slate-700 ...">
          <CardHeader>
            <CardTitle>Hobby</CardTitle>
            <CardDescription>$0 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
             
              <div className="flex-1 space-y-1">
                <p className="text-lg font-medium leading-none">
                  $0/mo
                </p>
                
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <form action="/api" method="POST">
            <Button className="w-full" type="submit">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
            </form>
            
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card className="bg-gradient-to-b from-slate-700 ...">
          <CardHeader>
            <CardTitle>Startup</CardTitle>
            <CardDescription>$10 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
             
             <div className="flex-1 space-y-1">
               <p className="text-lg font-medium leading-none">
                 $10/mo
               </p>
               
             </div>
           </div>
          </CardContent>
          <CardFooter>
            <form action="/api" method="POST">
            <Button className="w-full" type="submit">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
            </form>
            
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card className="bg-gradient-to-b from-slate-700 ...">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>$20 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
             
             <div className="flex-1 space-y-1">
               <p className="text-lg font-medium leading-none">
                 $20/mo
               </p>
               
             </div>
           </div>
          </CardContent>
          <CardFooter>
            <form action="/api" method="POST">
            <Button className="w-full" type="submit">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
            </form>
            
          </CardFooter>
        </Card>
        </div>
        <div>
        <Card className="bg-gradient-to-b from-slate-700 ...">
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
            <CardDescription >$30 to get started</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
             
              <div className="flex-1 space-y-1">
                <p className="text-lg font-medium leading-none">
                  $30/mo
                </p>
                
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <form action="/api" method="POST">
            <Button className="w-full" type="submit">
              <Check className="mr-2 h-4 w-4" /> Subscribe
            </Button>
            </form>
            
          </CardFooter>
        </Card>
        </div>
      </div>
    </div>
  );
}
