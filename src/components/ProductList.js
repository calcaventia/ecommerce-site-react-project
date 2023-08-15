import React, { useCallback } from "react";
import styles from "../pages/Dashboard.module.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const onProductImageContainerClick = useCallback(() => {
    // Handle product image click
  }, []);

  return (
    <div className={styles.contentArea}>
      <div className={styles.row01}>
        <Link to="/ItemView" className="product-details">
          <div className={styles.itemCard}>
            <div
              className={styles.productImage}
              onClick={onProductImageContainerClick}
            >
              <div className={styles.productImage1}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/dashboard/image@2x.png"
                />
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.itemName}>Apple Watch</div>
              <div className={styles.smallDescription}>Series 5 SE</div>
              <div className={styles.action}>
                <div className={styles.itemName}>$ 529.99</div>
                <div className={styles.button}>
                  <img
                    className={styles.icon}
                    alt=""
                    src="/dashboard/icon.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image1@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Sony ZX330BT</div>
            <div className={styles.smallDescription}>Light Grey</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 39.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image2@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 11</div>
            <div className={styles.smallDescription}>Serious Black</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image3@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 11</div>
            <div className={styles.smallDescription}>Subway Blue</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row02}>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image4@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 11</div>
            <div className={styles.smallDescription}>Product RED</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img className={styles.icon} alt="" src="/dashboard/icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image5@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 11</div>
            <div className={styles.smallDescription}>Milky White</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image6@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 13</div>
            <div className={styles.smallDescription}>Product RED</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.itemCard1}>
          <div className={styles.productImage2}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/dashboard/image7@2x.png"
              />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.itemName}>Iphone 14</div>
            <div className={styles.smallDescription}>Product RED</div>
            <div className={styles.action}>
              <div className={styles.itemName}>$ 619.99</div>
              <div className={styles.button}>
                <img
                  className={styles.icon}
                  alt=""
                  src="/dashboard/icon3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
