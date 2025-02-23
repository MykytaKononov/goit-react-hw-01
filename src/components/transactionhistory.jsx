import style from './transactionhistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={style.tableBody}>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
