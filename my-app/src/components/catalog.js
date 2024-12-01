import React, { useState } from "react";
import Laptops from "./laptops";
import Button from "./Button";
import laptops from "./laptop_data";

const Catalog = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const viewMore = () => {
        setVisibleCount(visibleCount + 4);
    }
    const hideCards = () => {
        setVisibleCount(4);
    };

    return (
        <div>
            <Laptops data={laptops.slice(0, visibleCount)} /> 
            {visibleCount < laptops.length && (
                <Button text="View more" className="view-btn" onClick={viewMore}/>
            )}
            {visibleCount >= laptops.length && (
                <Button text="Hide cards" className="view-btn" onClick={hideCards} />
            )}
        </div>
    );
};

export default Catalog;