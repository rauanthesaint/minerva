import { Navigate, Route, Routes } from "react-router-dom";
import { AccountsPage, DashboardPage, RegistrationPage, SettingsPage } from "@/pages";
import { AuthLayout, RootLayout } from "./layouts";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
            <Route path="/auth" element={<Navigate to={"/auth/login"} replace />} />
            <Route element={<RootLayout />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/transactions" element={"Not implemented"} />
                <Route path="/accounts">
                    <Route index element={<AccountsPage />} />
                    <Route path=":accountId" element={"Account undefined"} />
                </Route>
                <Route path="/analytics" element={"Not implemented"} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/support" element={"Not implemented"} />
                <Route path="/about" element={"Not implemented"} />
            </Route>
            <Route path="/auth" element={<AuthLayout />}>
                <Route path="login" element={"Login"} />
                <Route path="signup" element={<RegistrationPage />} />
            </Route>
            <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
    );
}
