import React from "react";
import "./MainContent.css";

import marketIcon from "./market.png";
import notificationIcon from "./notification.png";
import EmailIcon from "./Email.png";
import categoriesIcon from "./categories.png";
import OrdersIcon from "./orders.png";
import FavourtiesIcon from "./Favouites.png";
import CartIcon from "./Cart.png";
import MessageIcon from "./Message.png";
import FeedbackIcon from "./Feedback.png";
import veggiesIcon from "./veggies2.avif";
import TubersIcon from "./Tubers4.jpg";
import FishIcon from "./Fish3.jpg";
import FruitsIcon from "./Fruits2.jpg";
import MeatIcon from "./Meat2.jpg";
import plusIcon from "./plus.png";
import CabageeIcon from "./cabagee2.jpg";
import KaleIcon from "./kale3.avif";
import BrocolyIcon from "./Brocoly3.jpg";
import CeleryIcon from "./Celery.jpg";
import LogoIcon from "./logo.png";
import FilterIcon from "./filter.png";
import HelpIcon from "./help.png";
import SettingsIcon from "./Settings.png";
import ProfileIcon from "./profile.png";
import Pieicon3 from "./icons8-330-degrees-30.png";
import Pieicon1 from "./icons8-150-degrees-24.png";
import PieIcon2 from "./icons8-225-degrees-50.png";

import vegetablesBasket from "./vegetables-basket.png";

import fashionImage from "./Fashion4.avif";
import mobilesImage from "./Mobiles33.png";
import officeImage from "./Printer2.png";
import computersImage from "./Computers4.jpg";

function MainContent({ isDarkMode }) {
  return (
    <main className="main-content">
      <div className="main-content-scrollable">
        <div className="main-content-columns">
          <div className="categories-products-column">
            <section
              style={{ background: "transparent", padding: "0px" }}
              className={` dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="discount-banner">
                <div className="discount-content">
                  <h2 className="discount-title">Get special discounts</h2>
                  <p className="discount-percentage">up to 45%</p>
                  <p className="discount-description">
                    Enjoy our vegetables at a discount price
                  </p>
                </div>
                <div className="discount-image-container">
                  <img
                    src={vegetablesBasket}
                    alt="Basket of Vegetables"
                    className="discount-image"
                  />
                </div>
                <button className="use-now-button">Use Now</button>
              </div>
            </section>

            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div
                className="shop-by-department-section"
                style={{
                  backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                  color: isDarkMode ? "#f1f5f9" : "#1f2937",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <div className="department-header">
                  <h2
                    className="department-title"
                    style={{ color: isDarkMode ? "#f8fafc" : "#1e293b" }}
                  >
                    Popular Categories
                  </h2>

                  <a href="#" className="see-all-link">
                    View All
                  </a>
                </div>
                <div className="department-list">
                  {/* Department Item 1: Vegetables */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={vegetablesBasket}
                        alt="Vegetables Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Vegetables</p>
                  </div>

                  {/* Department Item 2: Fashion */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={fashionImage}
                        alt="Fashion Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Fashion</p>
                  </div>

                  {/* Department Item 3: Mobiles */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={mobilesImage}
                        alt="Mobiles Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Mobiles</p>
                  </div>

                  {/* Department Item 4: Office */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={officeImage}
                        alt="Office Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Office</p>
                  </div>

                  {/* Department Item 5: Computers */}
                  <div className="department-item">
                    <div className="department-image-wrapper">
                      <img
                        src={computersImage}
                        alt="Computers Department"
                        className="department-image"
                      />
                    </div>
                    <p className="department-name">Computers</p>
                  </div>

                  {/* You can add more department items here directly */}
                  {/* Department Item 6: Electronics (Example additional) */}
                </div>
              </div>
            </section>

            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="categories-header">
                <h2 className="section-header">Categories and Stock</h2>
                <button className="filter-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-funnel-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z" />
                  </svg>
                  Filter
                </button>
              </div>
              <div className="category-grid">
                <div className="category-card active">
                  <img
                    src={`https://img.icons8.com/?size=100&id=Dmnn0Y9PAFKY&format=png&color=${
                      isDarkMode ? "40C057" : "000000"
                    }`}
                    alt="Veggies"
                    width={40}
                    height={40}
                  />

                  <p
                    className="category-stock"
                    style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  >
                    1.890 stock
                  </p>
                  <p
                    className="category-name"
                    style={{ color: isDarkMode ? "#ffffff" : "#333333" }}
                  >
                    Veggies
                  </p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=108475&format=png&color=40C057"
                    alt="Tubers"
                    width={40}
                    height={40}
                  />
                  <p className="category-stock">2.040 stock</p>
                  <p className="category-name">Tubers</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=9238&format=png&color=40C057"
                    alt="Fish"
                    width={40}
                    height={40}
                  />
                  <p className="category-stock">548 stock</p>
                  <p className="category-name">Fish</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=10107&format=png&color=40C057"
                    alt="Fruits"
                    width={40}
                    height={40}
                  />
                  <p className="category-stock">300 stock</p>
                  <p className="category-name">Fruits</p>
                </div>
                <div className="category-card">
                  <img
                    src="https://img.icons8.com/?size=100&id=95681&format=png&color=40C057"
                    alt="Meat"
                    width={40}
                    height={40}
                  />
                  <p className="category-stock">236 stock</p>
                  <p className="category-name">Meat</p>
                </div>
              </div>
            </section>

            {/* Popular Product */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <div className="popular-products-header">
                <h2 className="section-header">Popular Product</h2>
                <a href="#" className="see-all-link">
                  See All
                </a>
              </div>
              <div className="product-grid">
                {/* Product Card - Cabbage */}
                <div className="product-card">
                  <img src={CabageeIcon} alt="Cabbage" width={70} height={70} />
                  <p className="product-name">Cabbage</p>
                  <p className="product-price">
                    $15.10 <span className="product-price-unit">/Kg</span>
                  </p>
                  <img src={plusIcon} alt="Plus" width={30} height={30} />
                </div>
                {/* Product Card - Kale vegetables */}
                <div className="product-card">
                  <img
                    src={KaleIcon}
                    alt="Kale vegetables"
                    width={70}
                    height={70}
                  />
                  <p className="product-name">Kale vegetables</p>
                  <p className="product-price">
                    $8.34 <span className="product-price-unit">/Kg</span>
                  </p>
                  <img src={plusIcon} alt="Plus" width={30} height={30} />
                </div>
                {/* Product Card - Brocoly */}
                <div className="product-card">
                  <img src={BrocolyIcon} alt="Brocoly" width={70} height={70} />
                  <p className="product-name">Brocoly</p>
                  <p className="product-price">
                    $5.60 <span className="product-price-unit">/Kg</span>
                  </p>
                  <img src={plusIcon} alt="Plus" width={30} height={30} />
                </div>
                {/* Product Card - Celery */}
                <div className="product-card">
                  <img src={CeleryIcon} alt="Celery" width={70} height={70} />
                  <p className="product-name">Celery</p>
                  <p className="product-price">
                    $4.80 <span className="product-price-unit">/Kg</span>
                  </p>
                  <img src={plusIcon} alt="Plus" width={30} height={30} />
                </div>
              </div>
            </section>
          </div>

          <div className="income-notifications-column">
            {/* Income Section */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <h2 className="section-header">Income</h2>
              <div className="income-cards-grid">
                <div className="income-card">
                  <div>
                    <img
                      src={Pieicon1}
                      alt="Celery"
                      width={30}
                      height={30}
                      style={{ marginLeft: "10px" }}
                    />
                    <p
                      className="income-card-label"
                      style={{ marginRight: "10px" }}
                    >
                      Daily
                    </p>
                    <p
                      className="income-card-amount"
                      style={{ marginRight: "10px" }}
                    >
                      $129.80
                    </p>
                  </div>
                </div>
                <div className="income-card">
                  <div>
                    <img
                      src={PieIcon2}
                      alt="Celery"
                      width={30}
                      height={30}
                      style={{ marginLeft: "10px" }}
                    />
                    <p
                      className="income-card-label"
                      style={{ marginRight: "10px" }}
                    >
                      Weekly
                    </p>
                    <p
                      className="income-card-amount"
                      style={{ marginRight: "10px" }}
                    >
                      $347.62
                    </p>
                  </div>
                </div>
                <div className="income-card">
                  <div>
                    <img
                      src={Pieicon3}
                      alt="Celery"
                      width={30}
                      height={30}
                      style={{ marginLeft: "10px" }}
                    />
                    <p
                      className="income-card-label"
                      style={{ marginRight: "10px" }}
                    >
                      Monthly
                    </p>
                    <p
                      className="income-card-amount"
                      style={{ marginRight: "10px" }}
                    >
                      $897.66
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Notification */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
            >
              <h2 className="section-header">Notification</h2>
              <div className="space-y-4">
                {" "}
                <div className="notification-item">
                  <div>
                    <p className="notification-title">
                      The fruit is almost finished, quickly refill
                    </p>
                    <p className="notification-time">Tue, 14 May, 10.00 AM</p>
                  </div>
                  <svg
                    className="notification-arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div className="notification-item">
                  <div>
                    <p className="notification-title">
                      Vegetable stocks have been refilled
                    </p>
                    <p className="notification-time">Wed, 10 May, 09.00 AM</p>
                  </div>
                  <svg
                    className="notification-arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div className="notification-item">
                  <div>
                    <p className="notification-title">
                      Fish stock has been reordered
                    </p>
                    <p className="notification-time">Fri, 17 May, 10.00 AM</p>
                  </div>
                  <svg
                    className="notification-arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
                <div className="notification-item">
                  <div>
                    <p className="notification-title">
                      Fish orders have been refilled
                    </p>
                    <p className="notification-time">Fri, 17 May, 18.03 PM</p>
                  </div>
                  <svg
                    className="notification-arrow-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </section>

            {/* Latest Order */}
            <section
              className={`dashboard-section ${isDarkMode ? "dark-card" : ""}`}
              style={{ height: "319px" }}
            >
              <h2 className="section-header">Latest order</h2>
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>
                      <span style={{ marginLeft: "15px" }}>Goods</span>
                    </th>
                    <th>
                      <span style={{ marginLeft: "15px" }}>Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Suman</td>
                    <td>
                      <span style={{ marginLeft: "15px" }}>Veggies</span>
                    </td>
                    <td>
                      <button
                        className="order-status-button"
                        style={{ marginLeft: "15px" }}
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Naveen</td>
                    <td>
                      <span style={{ marginLeft: "15px" }}>Fruits</span>
                    </td>
                    <td>
                      <button
                        className="order-status-button"
                        style={{ marginLeft: "15px" }}
                      >
                        Accept
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ariana</td>
                    <td>
                      <span style={{ marginLeft: "15px" }}>Table</span>{" "}
                      <span style={{ marginLeft: "15px" }}>4*4</span>
                    </td>
                    <td>
                      <button
                        className="order-status-button"
                        style={{ marginLeft: "10px" }}
                      >
                        Accepted
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Reshmi</td>
                    <td>
                      <span style={{ marginLeft: "15px" }}>Pure</span>{" "}
                      <span style={{ marginLeft: "15px" }}> Ghee</span>
                    </td>
                    <td>
                      <button
                        className="order-status-button"
                        style={{ marginLeft: "10px" }}
                      >
                        Accepted
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
