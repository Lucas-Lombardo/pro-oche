import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const SHIPPING_OPTIONS = [
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: { amount: 999, currency: "gbp" },
      display_name: "UK Standard Shipping",
      delivery_estimate: {
        minimum: { unit: "business_day", value: 3 },
        maximum: { unit: "business_day", value: 5 },
      },
    },
  },
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: { amount: 1999, currency: "gbp" },
      display_name: "Europe Shipping",
      delivery_estimate: {
        minimum: { unit: "business_day", value: 5 },
        maximum: { unit: "business_day", value: 10 },
      },
    },
  },
];

const ALLOWED_COUNTRIES = [
    "GB",
    "AT",
    "BE",
    "BG",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IE",
    "IT",
    "LV",
    "LT",
    "LU",
    "MT",
    "NL",
    "PL",
    "PT",
    "RO",
    "SK",
    "SI",
    "ES",
    "SE",
    "NO",
    "CH",
  ];

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Pro Oche",
              description:
                "Premium all-in-one dart oche with LED lighting, foldable stand & full-length mat",
              images: [
                `${process.env.NEXT_PUBLIC_BASE_URL}/images/oche-not-deployed.jpg`,
              ],
            },
            unit_amount: 7000, // £70.00
          },
          quantity: 1,
        },
      ],
      shipping_address_collection: {
        allowed_countries: ALLOWED_COUNTRIES as any,
      },
      shipping_options: SHIPPING_OPTIONS as any,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#buy`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
