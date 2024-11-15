import Slidbar from "../Header/Slidebar";
import styles from "./Profile.module.css"
const Profile=()=>{
    return(
<div className={styles.mainPro}>
    <div className={styles.right}><Slidbar height="100vh"/></div>
</div>
    )
}
export default Profile;