import React from "react";
import Link from "./link";

function PaymentMethodDropdown() {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="./#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Payment Activities
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link className="dropdown-item" url="./#" text="Payment Via Remita" />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text=" View Payment Status"
          />
        </li>
        <li>
          <Link
            className="dropdown-item"
            url="./#"
            text="  Download Payment Slip from Cash Office"
          />
        </li>
      </ul>
    </li>
  );
}

export default PaymentMethodDropdown;
