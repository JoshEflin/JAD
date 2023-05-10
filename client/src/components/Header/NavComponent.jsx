import { Link } from "react-router-dom";

const NavComponent = ({
  navigation,
  isCurrent,
  handleNavClick,
  classNames,
}) => {
  return navigation.map((item) => (
    <Link
      to={`/${item.href}`}
      key={item.name}
      onClick={() => handleNavClick(`${item.name}`)}
      className={classNames(
        isCurrent === item.name
          ? "underline text-white"
          : "text-gray-300 hover:underline hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </Link>
  ));
};

export default NavComponent;
