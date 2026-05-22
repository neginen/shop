import React from 'react';
import { Link } from 'react-router-dom';

export default function GridCard({ card }) {
    return (
        <Link to="/Category">
            <article className="flex bg-stone-200/50 hover:shadow-lg transition  scale-90 hover:scale-100">
                <div className="sm:relative sm:basis-56">
                    <img
                        src={require(`../image/${card.image}`)}
                        className="size-32  aspect-square object-cover rounded"
                        alt={card.title}
                    />
                </div>
                <div className="flex  flex-col justify-between ">
                    <div className="p-3 sm:p-6">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase text-gray-900">
                            {card.title}
                        </h3>
                        <p className="mt-3 sm:mt-6 line-clamp-2 text-xs sm:text-sm text-gray-700 ">
                            {card.description}
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
