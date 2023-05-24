import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Input from './Input';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../redux/productList/action';
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';

const HeaderModal = ({ show, handleClose }) => {
  const [input, setInput] = useState({
    productName: '',
    brand: '',
    ram: '',
    imgUrl: '',
    tag: '',
    price: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'price' || name === 'ram') {
      // Convert the value to a number
      const newValue = Number(value);
      setInput({
        ...input,
        [name]: newValue,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(input));
    console.log(input);
    setInput({
      productName: '',
      brand: '',
      ram: '',
      imgUrl: '',
      tag: '',
      price: '',
    });
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title className="modal-title">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-top">
              <Input
                type="text"
                placeholder="Enter your product name"
                label="Product name"
                name="productName"
                value={input.productName}
                onChange={handleChange}
                className="inputModal"
              />
              <div className="brand-ram">
                <Input
                  type="text"
                  placeholder="Enter brand name"
                  name="brand"
                  label="Brand"
                  value={input.brand}
                  onChange={handleChange}
                  className="inputModal"
                />
                <Input
                  type="number"
                  placeholder="Zip code"
                  name="ram"
                  label="Ram/Rom"
                  value={input.ram}
                  onChange={handleChange}
                  className="inputModal"
                />
              </div>
              <Input
                type="text"
                placeholder="Search and Select"
                name="tag"
                label="Tags"
                value={input.tag}
                onChange={handleChange}
                className="inputModal"
              />
              <Input
                type="text"
                placeholder="Image Url"
                name="imgUrl"
                label="Image Url"
                value={input.imgUrl}
                onChange={handleChange}
                className="inputModal"
              />
              <Input
                type="number"
                placeholder="Enter your product price"
                name="price"
                label="Price"
                value={input.price}
                onChange={handleChange}
                className="inputModal"
              />
            </div>
            <div className="modal-button-wrap">
              <button
                type="button"
                onClick={handleClose}
                className="cancel-button"
              >
                <FaRegTimesCircle className="cancel-icon" /> Cancel
              </button>
              <button type="submit" className="submit-button">
                <FaRegCheckCircle /> Publish
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default HeaderModal;
