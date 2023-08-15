import React, { useState } from "react";
import styles from "./AddAddress.module.css";
import { Link, useNavigate } from "react-router-dom";

const AddAddress = () => {
  const [shippingName, setShippingName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [country, setCountry] = useState("");
  const [saveDefault, setSaveDefault] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = {
      shippingName,
      streetName,
      city,
      stateProvince,
      country,
      saveDefault,
    };

    // Here you can perform actions with the collected addressData
    console.log("Address data:", addressData);

    // Reset the form fields if needed
    setShippingName("");
    setStreetName("");
    setCity("");
    setStateProvince("");
    setCountry("");
    setSaveDefault(false);

    // After processing the data
    navigate("/Checkout", {
      state: {
        addressData,
      },
    });

    return (
      <div className={styles.addAddress}>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <div className={styles.name}>
              <div className={styles.input}>
                <div className={styles.label}>
                  <div className={styles.secureConnection}>Shipping Name</div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputArea}>
                    <input
                      type="text"
                      value={shippingName}
                      onChange={(e) => setShippingName(e.target.value)}
                      className={styles.placeholder}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.input}>
                <div className={styles.label}>
                  <div className={styles.secureConnection}>Street Name</div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputArea}>
                    <input
                      type="text"
                      value={streetName}
                      onChange={(e) => setStreetName(e.target.value)}
                      className={styles.placeholder1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.input}>
                <div className={styles.label}>
                  <div className={styles.secureConnection}>City</div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputArea}>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={styles.placeholder1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.input}>
                <div className={styles.label}>
                  <div className={styles.secureConnection}>
                    State / Province
                  </div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputArea}>
                    <input
                      type="text"
                      value={stateProvince}
                      onChange={(e) => setStateProvince(e.target.value)}
                      className={styles.placeholder1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.input}>
                <div className={styles.label}>
                  <div className={styles.secureConnection}>Country</div>
                </div>
                <div className={styles.inputField}>
                  <div className={styles.inputArea}>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={styles.placeholder1}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.save}>
              <div className={styles.checkbox}>
                <div className={styles.checkboxInput}>
                  <div className={styles.checkboxInput1} />
                  <div className={styles.inner} />
                </div>
                <div className={styles.label10}>
                  Save this as your default address
                </div>
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.button}>
                <button type="submit" className={styles.button1}>
                  Add Address
                </button>
              </div>
            </div>
            <div className={styles.infromation}>
              <Link to="/Checkout" className="checkout-page">
                <div className={styles.button2}>
                  <div className={styles.button3}>Back</div>
                </div>
              </Link>
              <div className={styles.info}>
                <img className={styles.icon} alt="" src="/address/icon.svg" />
                <div className={styles.secureConnection}>Secure Connection</div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };
};
export default AddAddress;
