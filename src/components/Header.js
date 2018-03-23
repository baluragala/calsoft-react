import React from "react";

export default ({ totalProducts, totalValue }) => (
  <header>
    <div className="container">
      <div className="heading">
        <span style={{ fontSize: 30 }}>E</span>store
      </div>
      <div className="search">
        <form className="search-input">
          <input
            type="search"
            placeholder="Search for Electronics"
            className="search-label"
          />
          <button className="search-iconbutton" type="submit" />
        </form>
      </div>
      <div className="cart-items">
        <div className="cart-property">
          <table>
            <tbody>
              <tr>
                <td>No. of items</td>
                <td>:</td>
                <td>
                  <strong>{totalProducts}</strong>
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>:</td>
                <td>
                  <strong>{totalValue}</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <a class="cart-icon" href="#">
                     <span class="icons"><i class="zmdi zmdi-shopping-basket" style="font-size: 40px;"></i></span>
                     </a> */}
        <a
          className="cart-icon"
          data-toggle="popover"
          data-container="body"
          data-placement="bottom"
          type="button"
          data-html="true"
          href="#"
          id="logout"
          data-original-title
          title
        >
          <span className="icons">
            <i className="zmdi zmdi-shopping-basket" style={{ fontSize: 40 }} />
          </span>
        </a>
      </div>
      <a href="log in.html" className="button-login">
        Log in
      </a>
      <a href="sign up.html" className="button-signup">
        Sign up
      </a>
    </div>
  </header>
);
