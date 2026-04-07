import styles from "./Switch.module.scss";

import { Switch, SwitchThumb } from "@radix-ui/react-switch";
import type { SwitchProps } from "@radix-ui/react-switch";

export function UncontrolledSwitch(props: SwitchProps) {
    return (
        <Switch {...props} className={styles.Switch}>
            <SwitchThumb className={styles.Thumb} />
        </Switch>
    );
}
