import Slidbar from "../Header/Slidebar";
import styles from "./Profile.module.css";
import Ptext1 from "./Ptext1";
const Profile=()=>{
    return(
<div className={styles.mainPro}>
    <div className={styles.left}><Slidbar height="100vh"/></div>
    <div className={styles.right}>
        <Ptext1/>
    </div>
</div>
    )
}
export default Profile;