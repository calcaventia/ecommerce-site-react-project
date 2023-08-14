import { useCallback } from "react";
import styles from "./Bag.module.css";
import { Link } from "react-router-dom";
const Bag = () => {
  const onLogoContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onNavLinkContainerClick = useCallback(() => {
    // Please sync "Dashboard" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    // Please sync "Checkout" to the project
  }, []);

  return (
    <div className={styles.bag}>
      <div className={styles.contentFrame}>
        <div className={styles.header}>
          <div className={styles.checkYourBag}>Check your Bag Items</div>
        </div>
        <div className={styles.bagContents}>
          <div className={styles.itemInBag}>
            <div className={styles.productImage}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/bag/image@2x.png"
              />
            </div>
            <div className={styles.contentArea}>
              <div className={styles.header1}>
                <div className={styles.title}>
                  <div className={styles.checkYourBag}>Dell XPS 13</div>
                </div>
                <div className={styles.subtitle}>
                  <div className={styles.checkYourBag}>White</div>
                </div>
              </div>
              <div className={styles.smallDescription}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star05.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>4.5 / 5</div>
              </div>
              <div className={styles.priceRating}>
                <div className={styles.price}>
                  <div className={styles.checkYourBag}>$ 1799.99</div>
                  <div className={styles.checkYourBag}>x</div>
                  <div className={styles.checkYourBag}>1</div>
                </div>
                <div className={styles.quantity}>
                  <div className={styles.price1}>
                    <div className={styles.increaseButton}>
                      <img className={styles.icon} alt="" src="/bag/icon.svg" />
                    </div>
                    <div className={styles.checkYourBag}>1</div>
                    <div className={styles.increaseButton}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/bag/icon1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itemInBag}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon1}
                alt=""
                src="/bag/image1@2x.png"
              />
            </div>
            <div className={styles.contentArea}>
              <div className={styles.header1}>
                <div className={styles.title}>
                  <div className={styles.checkYourBag}>Iphone 11</div>
                </div>
                <div className={styles.subtitle}>
                  <div className={styles.checkYourBag}>Navy Blue</div>
                </div>
              </div>
              <div className={styles.smallDescription}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star01.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star05.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>4.5 / 5</div>
              </div>
              <div className={styles.priceRating}>
                <div className={styles.price}>
                  <div className={styles.checkYourBag}>$ 729.99</div>
                  <div className={styles.checkYourBag}>x</div>
                  <div className={styles.checkYourBag}>3</div>
                </div>
                <div className={styles.quantity}>
                  <div className={styles.price1}>
                    <div className={styles.increaseButton}>
                      <img className={styles.icon} alt="" src="/bag/icon.svg" />
                    </div>
                    <div className={styles.checkYourBag}>3</div>
                    <div className={styles.increaseButton}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/bag/icon1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itemInBag}>
            <div className={styles.productImage1}>
              <img
                className={styles.imageIcon1}
                alt=""
                src="/bag/image2@2x.png"
              />
            </div>
            <div className={styles.contentArea}>
              <div className={styles.header1}>
                <div className={styles.title}>
                  <div className={styles.checkYourBag}>Iphone 11</div>
                </div>
                <div className={styles.subtitle}>
                  <div className={styles.checkYourBag}>Milky White</div>
                </div>
              </div>
              <div className={styles.smallDescription}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star05.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>4.5 / 5</div>
              </div>
              <div className={styles.priceRating}>
                <div className={styles.price}>
                  <div className={styles.checkYourBag}>$ 619.99</div>
                  <div className={styles.checkYourBag}>x</div>
                  <div className={styles.checkYourBag}>1</div>
                </div>
                <div className={styles.quantity}>
                  <div className={styles.price1}>
                    <div className={styles.increaseButton}>
                      <img className={styles.icon} alt="" src="/bag/icon.svg" />
                    </div>
                    <div className={styles.checkYourBag}>1</div>
                    <div className={styles.increaseButton}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/bag/icon1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.itemInBag}>
            <div className={styles.productImage1}>
              <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
            </div>
            <div className={styles.contentArea}>
              <div className={styles.header1}>
                <div className={styles.title}>
                  <div className={styles.checkYourBag}>Iphone 11</div>
                </div>
                <div className={styles.subtitle}>
                  <div className={styles.checkYourBag}>Serious Black</div>
                </div>
              </div>
              <div className={styles.smallDescription}>
                <div
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam `}</div>
              </div>
              <div className={styles.rating}>
                <div className={styles.stars}>
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star011.svg"
                  />
                  <img
                    className={styles.star01Icon}
                    alt=""
                    src="/bag/star05.svg"
                  />
                </div>
                <div className={styles.loremIpsumDolor}>4.5 / 5</div>
              </div>
              <div className={styles.priceRating}>
                <div className={styles.price}>
                  <div className={styles.checkYourBag}>$ 619.99</div>
                  <div className={styles.checkYourBag}>x</div>
                  <div className={styles.checkYourBag}>2</div>
                </div>
                <div className={styles.quantity}>
                  <div className={styles.price1}>
                    <div className={styles.increaseButton}>
                      <img className={styles.icon} alt="" src="/bag/icon.svg" />
                    </div>
                    <div className={styles.checkYourBag}>2</div>
                    <div className={styles.increaseButton}>
                      <img
                        className={styles.icon}
                        alt=""
                        src="/bag/icon1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bagChild} />
      <div className={styles.navbar}>
        <div className={styles.navLinkstop}>
          <Link to="/Dashboard" className="home-page">
            <div className={styles.logo} onClick={onLogoContainerClick}>
              <img className={styles.logoChild} alt="" src="/bag/group-1.svg" />
            </div>
          </Link>
          <div className={styles.menuIcon}>
            <img className={styles.icon8} alt="" src="/bag/ icon2.svg" />
          </div>
          <div className={styles.navLink} onClick={onNavLinkContainerClick}>
            <img className={styles.star01Icon} alt="" src="/bag/icon3.svg" />
          </div>
          <div className={styles.navLink1}>
            <img className={styles.star01Icon} alt="" src="/bag/icon4.svg" />
          </div>
        </div>
        <div className={styles.menuIcon}>
          <div className={styles.navLink2}>
            <img className={styles.star01Icon} alt="" src="/bag/icon5.svg" />
          </div>
        </div>
      </div>
      <div className={styles.bagArea}>
        <div className={styles.menuIcon}>
          <div className={styles.bagTotal}>Bag</div>
        </div>
        <div className={styles.bagItems}>
          <div className={styles.row}>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img
                  className={styles.imageIcon4}
                  alt=""
                  src="/bag/image4@2x.png"
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/bag/image5@2x.png"
                />
              </div>
            </div>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/bag/image6@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.row1}>
            <div className={styles.bagItem}>
              <div className={styles.productImage4}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/bag/image7@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <div className={styles.total}>
            <div className={styles.bagTotal}>Bag Total:</div>
            <div className={styles.bagTotal}>{`$ 5,849.93   `}</div>
          </div>
          <Link to="/Checkout" className="checkout-details">
            <div className={styles.button} onClick={onButtonContainerClick}>
              <img className={styles.star01Icon} alt="" src="/icon6.svg" />
              <div className={styles.bagTotal}>Checkout</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bag;
