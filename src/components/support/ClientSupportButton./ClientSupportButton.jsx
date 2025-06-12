"use client";
import React, { useState } from "react";
import SelAmount from "@/components/support/selAmount/selAmount";
import { Button } from "@/components/ui/Button";

export default function ClientSupportButton() {
	const [selectedAmount, setSelectedAmount] = useState(0.99);

	const handleSupport = async () => {
		const res = await fetch("/api/create-checkout-session", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ amount: selectedAmount }),
		});

		const { url } = await res.json();
		window.location.href = url;
	};

	return (
		<div>
			<SelAmount
				selectedAmount={selectedAmount}
				setSelectedAmount={setSelectedAmount}
			/>
			<p className="support-disclaimer"> 
				Exchange rate might be applied. Powered by Stripe.
			</p>
			<Button
				variant="default"
				size="sm"
				className="mt-4"
				onClick={handleSupport}
			>
				Support Me
			</Button>
		</div>
	);
}
