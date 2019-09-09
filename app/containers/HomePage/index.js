/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import messages from './messages';

export default function HomePage() {
  return (
    <div>
      <h3 className="ml-4">
        <Link to="/employees">
          <FormattedMessage {...messages.employee} />
        </Link>
      </h3>
      <h3 className="ml-4">
        <Link to="/managers">
          <FormattedMessage {...messages.manager} />
        </Link>
      </h3>
    </div>
  );
}
