import React, { useState } from "react";
import Navigation from "./navigation";
import Filter from "./filter";
import Footer from "./footer";
import Laptops from "./laptops";
import laptops from "./laptop_data";

function CatalogPage() {
    const [filteredData, setFilteredData] = useState(laptops.slice(0, 4));

    const handleSearch = (searchTerm) => {
        const filtered = laptops.filter(laptop =>
            laptop.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleSort = (sortCriteria) => {
        let sortedLaptops = [...filteredData]; // Правильне ім'я змінної
        if (sortCriteria === "Name") {
            sortedLaptops.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortCriteria === "Price") {
            sortedLaptops.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === "Power") {
            sortedLaptops.sort((a, b) => (a.power || 0) - (b.power || 0));
        }
        setFilteredData(sortedLaptops);
    };

    return (
        <div>
            <Navigation onSearch={handleSearch} />
            <Filter onSort={handleSort} />
            <Laptops data={filteredData.slice(0, 4)} />
            <Footer />
        </div>
    );
}

export default CatalogPage;
