import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/logo.png";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="sett" width={80} height={60} />
        </div>
        <div className={styles.links}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path}>
              <p className={pathname === path ? styles.active : null}>
                {title}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
