import React, { useState } from 'react';
import {
  Card, CardBody, Col,
} from 'reactstrap';

import ReactTableBase from '../../../shared/components/table/ReactTableBase'
import ReactTableCustomizer from '../../../shared/components/table/components/ReactTableCustomizer'

const TransactionReactTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const [isSortable, setIsSortable] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(false);
  const [withSearchEngine, setWithSearchEngine] = useState(true);

  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };
  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };
  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const tableConfig = {
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search by First name...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="react-table__wrapper">
            <ReactTableCustomizer
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              isSortable={isSortable}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
            />
          </div>
          <ReactTableBase
            key={withSearchEngine || true ? 'modified' : 'common'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransactionReactTable;
