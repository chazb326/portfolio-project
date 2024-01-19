import styles from "./ClearDialogButton.module.css";

interface MobileNavButtonProps {
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClearDialogButton = ({ setState }: MobileNavButtonProps) => {
  const handleClick = () => {
    setState(false);
  };

  return (
    <button onClick={handleClick} className={styles.buttonStyle}>
      X
    </button>
  );
};

export { ClearDialogButton };
