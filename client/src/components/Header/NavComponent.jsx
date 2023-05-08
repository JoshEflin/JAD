import { Link } from 'react-router-dom';
import Auth from "../../utils/auth"

const NavComponent = ({ navigation, isCurrent, handleNavClick, classNames, }) => {
  
    return navigation.map((item) => (
      <Link
        to={`/${item.href}`}
        key={item.name}
        onClick={() => handleNavClick(`${item.name}`)}
        className={classNames(
          isCurrent === item.name
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "rounded-md px-3 py-2 text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </Link>
    ));
  };
 

  export default NavComponent