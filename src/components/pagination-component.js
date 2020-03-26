import React from 'react';
import { Pagination } from 'antd';
import { number } from 'prop-types';

const PaginationComponent = ({ totalCount, currentPage }) => {
  return (
    <Pagination defaultCurrent={currentPage} total={totalCount} />
  );
}

PaginationComponent.protoTypes = {
  currentPage: number,
  totalCount: number,
}

PaginationComponent.defaultProps = {
  currentPage: 0,
  totalCount: 0,
}

export default PaginationComponent