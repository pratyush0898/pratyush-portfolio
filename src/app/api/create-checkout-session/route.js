import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // set in .env.local

export async function POST(req) {
	const { amount } = await req.json();

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ['card'],
		line_items: [
			{
				price_data: {
					currency: 'usd',
					product_data: {
						name: 'Support Donation',
					},
					unit_amount: Math.round(amount * 100), // in cents
				},
				quantity: 1,
			},
		],
		mode: 'payment',
		success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_URL}/support`,
	});

	return new Response(JSON.stringify({ url: session.url }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
}
