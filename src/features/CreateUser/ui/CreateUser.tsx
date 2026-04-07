import { InputAddon, PasswordInput, TextInput } from "@/shared/Input";
import styles from "./CreateUser.module.scss";
import { HugeiconsIcon } from "@hugeicons/react";
import { LockPasswordIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/shared/Field";
import { Button } from "@/shared/Button";
import { useForm } from "react-hook-form";
import { Caption, Heading } from "@/shared/Typography";
import { UserCreateSchema, type UserCreateDTO } from "@/entities/User/model";
import { resolver } from "@/shared/resolver";

export function CreateUser() {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<UserCreateDTO>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: resolver(UserCreateSchema),
    });

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))} className={styles.CreateUserForm}>
            <div className={styles.block}>
                <Heading level={3} align="center">
                    Присоединяйтесь к Minerva
                </Heading>
                <Caption align="center">
                    Создайте аккаунт и&nbsp;начните пользоваться всеми возможностями Minerva за&nbsp;пару секунд
                </Caption>
            </div>

            <div className={styles.block}>
                <Field>
                    <FieldLabel>Email</FieldLabel>
                    <TextInput control={control} name="email" placeholder="jane.doe@example.com">
                        <InputAddon>
                            <HugeiconsIcon icon={Mail01Icon} />
                        </InputAddon>
                    </TextInput>
                    <FieldDescription>
                        Пожалуйста, используйте рабочий email&nbsp;&mdash; на&nbsp;него придёт подтверждение регистрации
                    </FieldDescription>
                    <FieldError>{errors.email?.type}</FieldError>
                </Field>
                <Field>
                    <FieldLabel>Пароль</FieldLabel>
                    <PasswordInput control={control} name="password">
                        <InputAddon>
                            <HugeiconsIcon icon={LockPasswordIcon} />
                        </InputAddon>
                    </PasswordInput>
                    <FieldError>{errors.password?.type}</FieldError>
                </Field>
            </div>

            <div className={styles.block}>
                <Caption>
                    Нажимая &laquo;Создать аккаунт&raquo;, вы&nbsp;соглашаетесь с&nbsp;условиями конфиденциальности
                    и&nbsp;правилами сервиса
                </Caption>
                <Button disabled={!isValid}>
                    <span>Создать аккаунт</span>
                </Button>
            </div>
        </form>
    );
}
