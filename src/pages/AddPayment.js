import { useCallback } from "react";
import styles from "./AddPayment.module.css";
import { Link } from "react-router-dom";
const AddPayment = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  const onPaymentMethodContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  const onPaymentMethodContainer1Click = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <div className={styles.addPayment}>
      <div className={styles.form}>
        <div className={styles.header}>
          <div className={styles.addANew}>Add a new Card</div>
        </div>
        <div className={styles.name}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.secureConnection}>Cardholder Name</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea}>
                <div className={styles.placeholder}>John Maker</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.secureConnection}>Card Number</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea1}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.placeholder}>5126-5987-2214-7621</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dateCvc}>
          <div className={styles.inputField2}>
            <div className={styles.input2}>
              <div className={styles.label}>
                <div className={styles.secureConnection}>Expiry Date</div>
              </div>
              <div className={styles.inputField}>
                <div className={styles.inputArea1}>
                  <img className={styles.icon} alt="" src="/icon1.svg" />
                  <div className={styles.placeholder}>MM / YYYY</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputField2}>
            <div className={styles.input3}>
              <div className={styles.label}>
                <div className={styles.secureConnection}>{`CVC `}</div>
              </div>
              <div className={styles.inputField}>
                <div className={styles.inputArea}>
                  <div className={styles.placeholder}>123</div>
                </div>
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
            <div className={styles.mastercardEndingIn}>
              Save this as your default payment method
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link to="/AddAddress" className="address-details">
            <div className={styles.button} onClick={onButtonContainerClick}>
              <img className={styles.icon} alt="" src="/icon2.svg" />
              <div className={styles.button1}>Add Payment Method</div>
            </div>
          </Link>
        </div>
        <div className={styles.infromation}>
          <Link to="/Checkout" className="checkout-details">
            <div className={styles.button2}>
              <div className={styles.button3}>Back</div>
            </div>
          </Link>
          <div className={styles.info}>
            <img className={styles.icon} alt="" src="/icon3.svg" />
            <div className={styles.secureConnection}>Secure Connection</div>
          </div>
        </div>
      </div>
      <div className={styles.paymentMethods}>
        <div className={styles.header1}>
          <div className={styles.addANew}>Select a Card</div>
        </div>
        <div
          className={styles.paymentMethod}
          onClick={onPaymentMethodContainerClick}
        >
          <div className={styles.iconArea}>
            <img className={styles.icon} alt="" src="/icon4.svg" />
          </div>
          <div className={styles.mastercardEndingIn}>
            MasterCard ending in 4242
          </div>
        </div>
        <div
          className={styles.paymentMethod}
          onClick={onPaymentMethodContainer1Click}
        >
          <div className={styles.iconArea}>
            <img className={styles.icon} alt="" src="/icon4.svg" />
          </div>
          <div className={styles.mastercardEndingIn}>
            VISA Debit ending in 2894
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPayment;
