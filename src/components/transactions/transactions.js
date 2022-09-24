import PropTypes from 'prop-types';
import {
    Table,
    ColumnTitle,
    Item,
} from './transactions.styled';

// Transaction history
export const TransactionHistory = ({transactions}) => {
  return (
    <Table>
      <thead>
        <tr>
        <ColumnTitle>
            Type
        </ColumnTitle>
        <ColumnTitle>
            Amount
        </ColumnTitle>
        <ColumnTitle>
            Currency
        </ColumnTitle>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
              <tr key= {item.id}>
                <Item>
                    {item.type}
                </Item>
                <Item>
                    {item.amount}
                </Item>
                <Item>
                    {item.currency}
                </Item>
            </tr>
            ))}
      </tbody>
    </Table>
  );
};



TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};
