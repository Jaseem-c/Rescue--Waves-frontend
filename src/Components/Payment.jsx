import React, { useState } from 'react';
import './payment.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { addMonetaryDonationApi } from '../Services/allApi';
import ReceiptPopup from './ReceiptPopup';
import Swal from 'sweetalert2';


function Payment() {
    const navigate=useNavigate('')

    const location = useLocation();
    const { monetaryDonationDetails } = location.state || {}; // Extract state
    console.log(monetaryDonationDetails);

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);
    const [receiptData, setReceiptData] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        if (cardNumber.length !== 12 || !/^\d+$/.test(cardNumber)) {
            newErrors.cardNumber = 'Card Number must be exactly 12 digits.';
        }
        if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
            newErrors.cvv = 'CVV must be exactly 3 digits.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePayment = async () => {
        const token = sessionStorage.getItem("token");
        const reqHeader = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        };
        const result = await addMonetaryDonationApi(monetaryDonationDetails, reqHeader);
        if (result.status === 200) {
            const receipt = {
                name: monetaryDonationDetails.name,
                email: monetaryDonationDetails.email,
                amount: monetaryDonationDetails.donationAmount,
                date: new Date().toLocaleDateString(),
                paymentMethod: 'Credit Card',
                cardNumber: cardNumber,
            };
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment successfull",
                showConfirmButton: false,
                timer: 2000
              });
            setReceiptData(receipt);
            setShowReceipt(true);
            
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Payment failed",
                showConfirmButton: false,
                timer: 2000
              });
              navigate('/home')
            // alert(result.response.data);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            handlePayment();
        }
    };

    const handleCloseReceipt = () => {
        // setShowReceipt(false);
        window.location.href = '/home';
    };

    return (
        <div className='d-flex align-items-center justify-content-center payment mt-5 p-2 p-md-5'>
            <div className="payment-form-container">
                <h2 className="payment-form-title">Payment Details</h2>
                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9123"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                            maxLength="12"
                        />
                        {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
                    </div>
                    
                    <div className="form-group form-group-flex">
                        <div className="form-group-item">
                            <label htmlFor="expiryDate">Expiration Date</label>
                            <input
                                type="text"
                                id="expiryDate"
                                name="expiryDate"
                                placeholder="MM/YY"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group-item">
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                placeholder="123"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                required
                                maxLength="3"
                            />
                            {errors.cvv && <p className="error-message">{errors.cvv}</p>}
                        </div>
                    </div>
                    
                    <button type="submit" className="submit-button">Submit Payment</button>
                </form>
            </div>

            {showReceipt && (
                <ReceiptPopup 
                    receiptData={receiptData} 
                    onClose={handleCloseReceipt} 
                />
            )}
        </div>
  )
}

export default Payment