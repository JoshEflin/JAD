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
      onClick={() => { handleNavClick(`${item.name}`)
      window.scrollTo({ top: 0 });
    }}
      className={classNames(
        isCurrent === item.name
          ? "text-white"
          : "text-gray-300 hover:underline hover:text-white",
        "rounded-md px-3 py-2 text-lg font-medium"
      )}
      aria-current={item.current ? "page" : undefined}
    >
      {item.name}
    </Link>
  ));
};

export default NavComponent;
