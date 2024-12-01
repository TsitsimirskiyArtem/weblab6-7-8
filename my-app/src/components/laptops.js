import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import laptops from "./laptop_data";

const Laptops = ({ data=laptops, limit }) => {
    const location = useLocation();
    const displayedData = limit ? data.slice(0, limit) : data;

    return (
        <ul className="items-container">
            {displayedData.length > 0 ? (
                displayedData.map((laptop) => (
                    <li className="laptop-container" key={laptop.id}>
                        <img className="laptop-img" src={laptop.img} alt={laptop.title} />
                        <h1 className="title-laptop">{laptop.title}</h1>
                        <p className="description-laptop">{laptop.description}</p>
                        {location.pathname === '/catalog' && (
                            <>
                                <div className="price">
                                    <p className="txt-price">Price: </p>
                                    <p className="price-laptop">{`${laptop.price} грн`}</p>
                                </div>
                                <Link className="link" to={`/item-page/${laptop.id}`}>
                                    <Button className="view-more-btn" text="View more" />
                                </Link>
                            </>
                        )}
                    </li>
                ))
            ) : (
                <p className="txt-no-found">No laptops found</p>
            )}
        </ul>
    );
};

export default Laptops;