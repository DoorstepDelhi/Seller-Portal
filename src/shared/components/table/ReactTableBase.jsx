import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFlexLayout } from 'react-table';
import ReactTableConstructor from './components/ReactTableConstructor';
import ReactTableCell from './components/ReactTableCell';

const ReactTableBase = ({
  tableConfig,
  columns,
  data,
}) => {
  const {
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize,
  } = tableConfig;
  const [filterValue, setFilterValue] = useState(null);
  const tableOptions = {
    columns,
    data,
    setFilterValue,
    defaultColumn: {},
    dataLength: data.length,
    autoResetPage: false,
    disableSortBy: !isSortable,
    manualSortBy: !isSortable,
    manualGlobalFilter: !withSearchEngine,
    manualPagination: !withPagination,
    initialState: {
      pageIndex: 0,
      pageSize: manualPageSize ? manualPageSize[0] : 10,
      globalFilter: withSearchEngine && filterValue ? filterValue : undefined,
    },
  };

  let tableOptionalHook = [];
  if (withSearchEngine) {
    tableOptions.defaultColumn = {
      Cell: ReactTableCell,
    };
  }
  return (
    <ReactTableConstructor
      key={false || false ? 'modified' : 'common'}
      tableConfig={tableConfig}
      tableOptions={tableOptions}
      tableOptionalHook={tableOptionalHook}
    />
  );
};

ReactTableBase.propTypes = {
  tableConfig: PropTypes.shape({
    isSortable: PropTypes.bool,
    withPagination: PropTypes.bool,
    withSearchEngine: PropTypes.bool,
    manualPageSize: PropTypes.arrayOf(PropTypes.number),
  }),
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.shape()),
};

ReactTableBase.defaultProps = {
  tableConfig: {
    isSortable: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [],
  },
  columns: [
    { Header: '#', accessor: 'id' },
    { Header: 'Header Example Title one', accessor: 'first' },
    { Header: 'Header Example Title two', accessor: 'last' },
  ],
  data: [
    { id: 1, first: 'Cell Example Data one', last: 'Cell Example Data two' },
    { id: 2, first: 'Cell Example Data three', last: 'Cell Example Data four' },
  ],
};

export default ReactTableBase;
