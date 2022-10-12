import PropTypes from 'prop-types';
import {Table, ColumnTitle, Item} from './transactions.styled';

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
        {transactions.map(({id,type, amount, currency}) => (
              <tr key= {id}>
                <Item>
                    {type}
                </Item>
                <Item>
                    {amount}
                </Item>
                <Item>
                    {currency}
                </Item>
            </tr>
            ))}
      </tbody>
    </Table>
  );
};




TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object).isRequired,
}; 
