
import CardContact from "./CardContact";
import styles from "./Contact.module.css";
import FormContact from "./FormContact";
import Text2 from "./Text2";
import Footer from "./Footer";

function ContactRight() {
  return (
    <div className={styles.rightMain}>
      <Text2/>
      <div className={styles.Cardsright}>
        <CardContact/>
        <FormContact/>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactRight;