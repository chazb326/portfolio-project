import styles from "./MobileNavButton.module.css";

interface MobileNavButtonProps {
  menuActive: boolean;
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavButton = ({
  menuActive,
  setMenuActive,
}: MobileNavButtonProps) => {
  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      <div className={styles.columnBox}>
        <div className={styles.burgerBar} />
        <div className={styles.burgerBar} />
        <div className={styles.burgerBar} />
      </div>
    </button>
  );
};

export { MobileNavButton };
