import { useState } from "react";
import { Modal } from "./common/Modal/Modal";
import styles from "./style.module.scss";
import { FaRegEdit } from "react-icons/fa";
import AddBlog from "./AddBlog/AddBlog";

const Header = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>Secrets Untold</div>

      <FaRegEdit onClick={handleIsEdit} className={styles.icon} />
      <Modal open={isEdit} closeModal={() => setIsEdit(false)}>
        <AddBlog />
      </Modal>
    </div>
  );
};

export default Header;
