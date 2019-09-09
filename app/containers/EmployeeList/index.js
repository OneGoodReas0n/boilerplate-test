import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectEmployees } from './selectors';
import { loadEmployeesSuccess } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

function EmployeeList({ loadEmployees }) {
  useInjectReducer({ key: 'employeeList', reducer });
  useInjectSaga({ key: 'employeeList', saga });

  useEffect(() => {
    loadEmployees();
    console.log(employees);
  });

  return (
    <div>
      <Helmet>
        <title>EmployeeList</title>
        <meta name="description" content="Description of EmployeeList" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <span>{employees}</span>
    </div>
  );
}

EmployeeList.propTypes = {
  employees: PropTypes.object,
  loadEmployees: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  employees: makeSelectEmployees(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadEmployees: employees => dispatch(loadEmployeesSuccess(employees)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(EmployeeList);
