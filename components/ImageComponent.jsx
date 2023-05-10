import Image from "next/image";
import styles from "../styles/Article.module.scss";

const ImageComponent = ({ title, url }) => {
  return (
    <div className={styles.image}>
      <Image src={`http:${url}`} alt={title} fill />
    </div>
  );
};

export default ImageComponent;
