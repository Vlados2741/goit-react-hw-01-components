import {Profile} from './profile/profile';
import user from './profile/user.json';
import {Statistic} from './stats/stats';
import data from './stats/data.json';
import { FriendList } from './friends/friends';
import friends from './friends/friends.json';
import transactions from './transactions/transactions.json';
import {TransactionHistory} from './transactions/transactions';


export const App = () => {
  return (
    <div>
        <Profile title="Profile"
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistic
          title="Upload stats"
          stats={data}
        />
      <FriendList
          title="Friends"
          friends={friends}
        />
      <TransactionHistory
          title="Transaction Hictory"
          transactions={transactions}
        />
    </div>
  );
};