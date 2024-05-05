import {FC, useState} from "react";
import {
    CellButton,
    FormItem,
    FormLayoutGroup,
    Group,
    Input,
    SegmentedControl,
    Select
} from "@vkontakte/vkui";


const addressItems = [
    { label: 'Почтовый индекс', name: 'zip' },
    { label: 'Страна', name: 'country' },
    { label: 'Город', name: 'city' },
];

export const Body: FC = () => {
    const [email, setEmail] = useState('')
    const [purpose, setPurpose] = useState('')
    const [showPatronymic, setShowPatronymic] = useState(true)

    const onShowPatronymic = () => setShowPatronymic(true);

    const onRemove = () => setShowPatronymic(false);

    return (
        <>
            <Group>
                <form onSubmit={(e) => e.preventDefault()}>
                    <FormItem
                        htmlFor="email"
                        top="E-mail"
                        status={email ? 'valid' : 'error'}
                        bottom={
                            email ? 'Электронная почта введена верно!' : 'Пожалуйста, введите электронную почту'
                        }
                        bottomId="email-type"
                    >
                        <Input
                            aria-labelledby="email-type"
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            required
                        />
                    </FormItem>

                    <FormItem top="Пароль" htmlFor="pass">
                        <Input id="pass" type="password" placeholder="Введите пароль" />
                    </FormItem>

                    <FormItem
                        bottom="Пароль может содержать только латинские буквы и цифры."
                        bottomId="passwordDescription"
                    >
                        <Input
                            type="password"
                            placeholder="Повторите пароль"
                            aria-labelledby="passwordDescription"
                        />
                    </FormItem>

                    <FormLayoutGroup mode="horizontal">
                        <FormItem htmlFor="name" top="Имя">
                            <Input id="name" />
                        </FormItem>
                        <FormItem htmlFor="lastname" top="Фамилия">
                            <Input id="lastname" />
                        </FormItem>
                    </FormLayoutGroup>

                    {!showPatronymic ? (
                        <CellButton onClick={onShowPatronymic} aria-label={'Указать отчество'}>Указать отчество</CellButton>
                    ) : (
                        <FormItem
                            htmlFor="patronymic"
                            removable
                            onRemove={onRemove}
                            top="Отчество"
                            bottom="Если у вас нет отчества — удалите этот пункт."
                            bottomId="patronymicDescription"
                        >
                            <Input id="patronymic" aria-labelledby="patronymicDescription" />
                        </FormItem>
                    )}

                    <FormItem top="Пол" htmlFor="gender-select-id">
                        <Select
                            id="gender-select-id"
                            placeholder="Выберите пол"
                            options={[
                                {
                                    value: '0',
                                    label: 'Мужской',
                                },
                                {
                                    value: '1',
                                    label: 'Женский',
                                },
                            ]}
                        />
                    </FormItem>

                    <FormItem top="Тип документа">
                        <SegmentedControl
                            size="m"
                            name="type"
                            options={[
                                {
                                    label: 'Паспорт РФ',
                                    value: 'russian',
                                },
                                {
                                    label: 'Заграничный',
                                    value: 'international',
                                },
                            ]}
                        />
                    </FormItem>

                    {addressItems.map(({ label, name }) => (
                        <FormItem htmlFor={label} top={label} key={name}>
                            <Input id={label} name={name} />
                        </FormItem>
                    ))}
                    <FormItem
                        top="Цель поездки"
                        htmlFor="purpose-of-the-trip-select-id"
                        bottom={purpose ? '' : 'Пожалуйста, укажите цель поездки'}
                        status={purpose ? 'valid' : 'error'}
                    >
                        <Select
                            id="purpose-of-the-trip-select-id"
                            placeholder="Выберите цель поездки"
                            value={purpose}
                            name="purpose"
                            required
                            options={[
                                {
                                    value: '0',
                                    label: 'Бизнес или работа',
                                },
                                {
                                    value: '1',
                                    label: 'Индивидуальный туризм',
                                },
                                {
                                    value: '2',
                                    label: 'Посещение близких родственников',
                                },
                            ]}
                        />
                    </FormItem>
                </form>
            </Group>
        </>
    )
}