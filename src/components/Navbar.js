import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/general">
            <h5>Global News</h5>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/general"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/business"
                  activeClassName="active"
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/entertainment"
                  activeClassName="active"
                >
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/general"
                  activeClassName="active"
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/health"
                  activeClassName="active"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/science"
                  activeClassName="active"
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/sports"
                  activeClassName="active"
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item navigation-item">
                <NavLink
                  className="nav-link"
                  to="/technology"
                  activeClassName="active"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
            <select
              id="country"
              className="form-select w-auto"
              aria-label="Default select example"
              name="country"
              onChange={props.setCountryCode}
              value={props.countryCode}
            >
              <option>select country</option>
              <option value="AE">United Arab Emirates</option>
              <option value="AR">Argentina</option>
              <option value="AT">Austria</option>
              <option value="AU">Australia</option>
              <option value="BE">Belgium</option>
              <option value="BG">Bulgaria</option>
              <option value="BR">Brazil</option>
              <option value="CA">Canada</option>
              <option value="CH">Switzerland</option>
              <option value="CN">China</option>
              <option value="CO">Colombia</option>
              <option value="CU">Cuba</option>
              <option value="CZ">Czech Republic</option>
              <option value="DE">Germany</option>
              <option value="EG">Egypt</option>
              <option value="FR">France</option>
              <option value="GB">United Kingdom</option>
              <option value="GR">Greece</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="ID">Indonesia</option>
              <option value="IE">Ireland</option>
              <option value="IL">Israel</option>
              <option value="IN">India</option>
              <option value="IT">Italy</option>
              <option value="LV">Latvia</option>
              <option value="MA">Morocco</option>
              <option value="MX">Mexico</option>
              <option value="MY">Malaysia</option>
              <option value="NG">Nigeria</option>
              <option value="NL">Netherlands</option>
              <option value="NO">Norway</option>
              <option value="NZ">New Zealand</option>
              <option value="PH">Philippines</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="RO">Romania</option>
              <option value="RS">Serbia</option>
              <option value="RU">Russian Federation</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SE">Sweden</option>
              <option value="SG">Singapore</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="TH">Thailand</option>
              <option value="TR">Turkey</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="UA">Ukraine</option>
              <option value="US">United States</option>
              <option value="VE">Venezuela</option>
              <option value="ZA">South Africa</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
