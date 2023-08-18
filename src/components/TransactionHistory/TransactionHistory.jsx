import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tb,
  Td,
  Type,
  ExtendedTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tb>
        {items.map(item => {
          return (
            <ExtendedTr key={item.id}>
              <Type>{item.type}</Type>
              <Td>{item.amount}</Td>
              <Td>{item.currency}</Td>
            </ExtendedTr>
          );
        })}
      </Tb>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
