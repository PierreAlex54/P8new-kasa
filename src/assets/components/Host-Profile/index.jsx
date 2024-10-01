import PropTypes from 'prop-types';
import './index.scss';

function HostProfile({ host }) {
  return (
    <div className="hostProfile">
      <p>{host.name}</p>
      <img src={host.picture} alt={`${host.name} profile`} />
    </div>
  );
}

HostProfile.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default HostProfile;