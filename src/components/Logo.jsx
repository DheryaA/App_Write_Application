
import PropTypes from 'prop-types';
function Logo({width = '100px'}) {
  return (
    <div>Logo</div>
  )
}
Logo.propTypes = {
    width: PropTypes.string
  };

export default Logo;