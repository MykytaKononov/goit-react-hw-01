import './App.css';
import userData from './userdata.json';
import Profile from './components/profile.jsx';
import FriendList from './components/friendlist.jsx';
import friends from './friends.json';
import TransactionHistory from './components/transactionhistory.jsx';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
