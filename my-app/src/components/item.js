import React from "react";
import { Link, useParams } from 'react-router-dom';
import laptops from "./laptop_data";
import Button from "./Button";
import { Select } from 'antd';

function Item() {
    const { id } = useParams();
    const laptop = laptops.find(item => item.id === parseInt(id));

    return(<div>
        <div className="item-decriptions">
            <img className="item-img" src={laptop.img}/>
            <div>
                <h2>{laptop.title}</h2>
                <p className="item-description">{laptop.description}</p>
                <div className="item-selects">
                    <div className="item-select">
                        <label className="label" htmlFor="select">Тип процесору</label>
                        <Select id="select" className="select" value="select">
                            <Select.Option>офісний</Select.Option>
                            <Select.Option>для ігор</Select.Option>
                            <Select.Option>для творчості</Select.Option>
                        </Select>
                    </div>
                    <div className="item-select">
                        <label className="label" htmlFor="select">Оперативна пам'ять</label>
                        <Select className="select" value="select">
                            <Select.Option>8 ГБ</Select.Option>
                            <Select.Option>16 ГБ</Select.Option>
                            <Select.Option>32 ГБ</Select.Option>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
        <div className="item-nav">
            <p className="item-price">Price: {`${laptop.price} грн`}</p>
            <div>
                <Link className="link" to="/catalog">
                    <Button className="back-btn"  text="Go back"/>
                </Link>
                <Button className="add-btn" text="Add to cart"/>
            </div>
        </div>
    </div>)
}

export default Item;