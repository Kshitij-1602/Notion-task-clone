import { MdDeveloperBoard, MdKeyboardArrowDown } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

import styles from "./style.module.css";

export default function TaskBoardHeader() {
  return (
    <div className={styles.taskBoardHeader}>
      <div className={styles.leftHeader}>
        <div>
          <MdDeveloperBoard className={styles.icon} />
          Board View 
        </div>
      </div>
      <div>
 
        <div>Filter</div>
        <div>Sort</div>
        <div>
          <BiSearchAlt2 className={styles.icon} />
        </div>
        <div>
          <BsThreeDots className={styles.icon} />
        </div>
        <div style={{marginRight:"30px"}}>
          <button style={{backgroundColor:"rgb(46, 170, 220)",padding:"5px",border:"none",borderRadius:"5px",color:"white"}}>New 
          <MdKeyboardArrowDown className={styles.icon} />
          
          </button>
        </div>
      </div>
    </div>
  );
}
