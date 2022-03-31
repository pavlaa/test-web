import React from 'react';
import style from './InfoPage.module.css';


const InfoPage = () => {
  return (
    <div className={style.info}>
      <div className={`${style.info__container} _container`}>
        <h2><span>About</span> us!</h2>
        <div className={style.info__text}>
          <p>
            An About Us Page is a page on your website that tells your readers all about you. It includes a detailed
            description covering all aspects of your business and you as an entrepreneur. This can include the products
            or services you are offering, how you came into being as a business, your mission and vision, your aim, and
            maybe something about your future goals too. Your About Us page is your perfect opportunity to tell a
            compelling story about your business.
          </p>
          <p>
            Even though an About Us page is one of the most important elements of a website, it is often one of the most
            overlooked elements
          </p>
          <p>
            As an important part of your website your About Us page can set you apart from your competitors in a way
            that can build your brand in a positive way.
          </p>
        </div>
        <div className={style.info__contact}>
          <p>
            <span>email:</span> exampla@gmail.com
          </p>
          <p>
            <span>phone:</span> +375 (33) 125-45-25
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;