import { UserIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import styles from "./User.module.scss";
import type { User } from "../model";

const user: User = {
  name: "Rauan",
  email: "rauanthesaint@proton.me",
};

export function UserBadge() {
  const { name } = user;

  return (
    <div className={styles.UserBadge}>
      <div className={styles.Avatar}>
        <HugeiconsIcon icon={UserIcon} />
      </div>
      <span>Hello, {name}</span>
    </div>
  );
}
