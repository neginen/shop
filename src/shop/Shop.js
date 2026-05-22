import React from "react";

export default function Shop({ cart }) {
    return (
        <>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Cart</h2>
            {cart.length > 0 ? (
                <ul className="list-disc pl-6">
                    {cart.map((item, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                            {item.name} - {item.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600">Your cart is empty.</p>
            )}
        </>
    );
}

