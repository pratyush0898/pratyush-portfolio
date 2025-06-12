"use client";
import React from "react";
import SelButton from "@/components/ui/selButton";

const SelAmount = ({ selectedAmount, setSelectedAmount }) => {
	const supportAmounts = [0.99, 9.99, 99.99];

	return (
		<div className="support-amount-container">
			{supportAmounts.map((amount) => (
				<SelButton
					key={amount}
					active={selectedAmount === amount}
					onClick={() => setSelectedAmount(amount)}
					className="m-1"
				>
					${amount.toFixed(2)}
				</SelButton>
			))}
		</div>
	);
};

export default SelAmount;
