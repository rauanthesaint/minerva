import {
    AnalyticsIcon,
    CreditCardIcon,
    Home03Icon,
    Invoice01Icon,
    Menu01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { Link, useLocation } from "react-router-dom";
import styles from "./RootLayout.module.scss";
import { motion } from "motion/react";

type NavigationItem = {
    title: string;
    icon: IconSvgElement;
    to: string;
};

export const navigation: NavigationItem[] = [
    {
        title: "Dashboard",
        icon: Home03Icon,
        to: "/dashboard",
    },
    {
        title: "Accounts",
        icon: CreditCardIcon,
        to: "/accounts",
    },
    {
        title: "Transactions",
        icon: Invoice01Icon,
        to: "/transactions",
    },
    {
        title: "Analytics",
        icon: AnalyticsIcon,
        to: "/analytics",
    },
];

export function Navigation() {
    const { pathname } = useLocation();

    return (
        <nav className={styles.Navigation}>
            {navigation.map(({ icon, to }, index) => {
                const isActive = pathname.includes(to);
                return (
                    <Link
                        data-active={isActive}
                        className={styles.NavigationItem}
                        key={index}
                        to={to}
                    >
                        <HugeiconsIcon icon={icon} />
                        {isActive && (
                            <motion.div
                                layoutId="navigation-indicator"
                                className={styles.indicator}
                            />
                        )}
                    </Link>
                );
            })}
            <button className={styles.NavigationItem}>
                <HugeiconsIcon icon={Menu01Icon} />
            </button>
        </nav>
    );
}
