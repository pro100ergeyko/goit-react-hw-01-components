import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
