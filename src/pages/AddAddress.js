import { useCallback } from "react";
import styles from "./AddAddress.module.css";
import { Link } from "react-router-dom";
const AddAddress = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <div className={styles.addAddress}>
      <div className={styles.form}>
        <div className={styles.name}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.secureConnection}>Shipping Name</div>
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
              <div className={styles.secureConnection}>Street Name</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea}>
                <div className={styles.placeholder1}>123 Plae Grond Stret</div>
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
                <div className={styles.placeholder1}>Vermont</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.name}>
          <div className={styles.input}>
            <div className={styles.label}>
              <div className={styles.secureConnection}>State / Province</div>
            </div>
            <div className={styles.inputField}>
              <div className={styles.inputArea}>
                <div className={styles.placeholder1}>California</div>
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
                <div className={styles.placeholder1}>
                  United States of America
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
            <div className={styles.label10}>
              Save this as your default address
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <Link to="/Success" className="success-page">
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.button1}>Add Address</div>
            </div>
          </Link>
        </div>
        <div className={styles.infromation}>
          <Link to="/AddPayment" className="payment-details">
            <div className={styles.button2}>
              <div className={styles.button3}>Back</div>
            </div>
          </Link>
          <div className={styles.info}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.secureConnection}>Secure Connection</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
