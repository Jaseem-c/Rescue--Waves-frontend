import React from 'react';
import jsPDF from 'jspdf';
import './receiptPopup.css';

const ReceiptPopup = ({ receiptData, onClose }) => {
    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(20);
        doc.text("Donation Receipt", 20, 20);

        doc.setFontSize(12);
        doc.text(`Name: ${receiptData.name}`, 20, 50);
        doc.text(`Email: ${receiptData.email}`, 20, 60);
        doc.text(`Amount Donated: ₹${receiptData.amount}`, 20, 70);
        doc.text(`Donation Date: ${receiptData.date}`, 20, 80);
        doc.text(`Payment Method: ${receiptData.paymentMethod}`, 20, 90);
        doc.text(`Card Number: **** **** **** ${receiptData.cardNumber.slice(-4)}`, 20, 100);

        doc.save('Donation_Receipt.pdf');
    };

    return (
        <div className="receipt-popup">
            <div className="receipt-content">
                <h2>Donation Receipt</h2>
                <div className="receipt-details">
                    <div className="detail-item">
                        <strong>Name:</strong> {receiptData.name}
                    </div>
                    <div className="detail-item">
                        <strong>Email:</strong> {receiptData.email}
                    </div>
                    <div className="detail-item">
                        <strong>Amount Donated:</strong> ₹{receiptData.amount}
                    </div>
                    <div className="detail-item">
                        <strong>Donation Date:</strong> {receiptData.date}
                    </div>
                    <div className="detail-item">
                        <strong>Payment Method:</strong> {receiptData.paymentMethod}
                    </div>
                    <div className="detail-item">
                        <strong>Card Number:</strong> **** **** **** {receiptData.cardNumber.slice(-4)}
                    </div>
                </div>
                <div className="receipt-footer">
                    <button onClick={handleDownloadPDF} className="download-button">Download as PDF</button>
                    <button onClick={onClose} className="back-button">Back to Home</button>
                </div>
            </div>
        </div>
    );
};

export default ReceiptPopup;
