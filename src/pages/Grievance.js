import React from 'react';
import './Grievance.css';

const Grievance = () => {
    const provinceData = [
        { id: 1, name: "Koshi Province", person: "Uttam Babu Shrestha", phone: "9855074348", email: "uttam.shrestha@infinitylbsl.com.np" },
        { id: 2, name: "Madhesh Province", person: "Dinesh Paudel", phone: "9855047312", email: "dinesh.paudel@infinitylbsl.com.np" },
        { id: 3, name: "Bagmati Province", person: "Himshankar Neupane", phone: "9855047804", email: "himshankar.neupane@infinitylbsl.com.np" },
        { id: 4, name: "Gandaki Province", person: "Prakash Ghimire", phone: "9855047809", email: "prakash.ghimire@infinitylbsl.com.np" },
        { id: 5, name: "Lumbini Province", person: "Chok Bahadur Majhi", phone: "9855047835", email: "chok.majhi@infinitylbsl.com.np" },
        { id: 6, name: "Karnali Province", person: "Madhab Sapkota", phone: "9855047802", email: "madhab.sapkota@infinitylbsl.com.np" },
        { id: 7, name: "Sudurpashchim Province", person: "Vijay Kumar Bogati", phone: "9855047874", email: "vijay.bogati@infinitylbsl.com.np" },
    ];

    return (
        <div className="grievance-container">
            <div className="grievance-header">
                <h1>Grievance Redressal (गुनासो व्यवस्थापन)</h1>
                <p>If you have any complaints regarding our services, please contact our officers below.</p>
            </div>

            {/* Central Office Section */}
            <div className="central-office-card">
                <div className="office-info">
                    <h2>Central Office Grievance Officer</h2>
                    <h3>Amarnath Sedhai</h3>
                    <p><strong>Phone:</strong> 9855047831</p>
                    <p><strong>Email:</strong> amarnath.sedhai@infinitylbsl.com.np</p>
                </div>
            </div>

            {/* NRB Portal Link */}
            <div className="nrb-portal-section">
                <p>You can also lodge complaints directly via the Nepal Rastra Bank Portal:</p>
                <a href="https://gunaso.nrb.org.np" target="_blank" rel="noopener noreferrer" className="nrb-btn">gunaso.nrb.org.np</a>
            </div>

            {/* Province Table */}
            <div className="table-responsive">
                <table className="grievance-table">
                    <thead>
                        <tr>
                            <th>Province</th>
                            <th>Contact Person</th>
                            <th>Phone Number</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {provinceData.map((item) => (
                            <tr key={item.id}>
                                <td data-label="Province"><strong>{item.name}</strong></td>
                                <td data-label="Contact Person">{item.person}</td>
                                <td data-label="Phone">{item.phone}</td>
                                <td data-label="Email">{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Grievance;