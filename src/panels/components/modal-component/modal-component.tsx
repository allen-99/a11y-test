import {FC, useState} from "react";
import {
    CellButton, Checkbox, DatePicker, FormItem,
    Group, Input,
    ModalPage, ModalPageHeader,
    ModalRoot,
    Panel,
    PanelHeader, PanelHeaderButton, PanelHeaderSubmit, Radio, SelectMimicry, SplitLayout,
    usePlatform,
    View
} from "@vkontakte/vkui";
import {Icon24Dismiss} from "@vkontakte/icons";

const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_FULLSCREEN = 'fullscreen';


export const ModalComponent: FC = () => {
    const [activeModal, setActiveModal] = useState(null);
    const [modalHistory, setModalHistory] = useState([]);

    const platform = usePlatform();


    const changeActiveModal = (activeModal) => {
        activeModal = activeModal || null;
        let localModalHistory = modalHistory ? [...modalHistory] : [];

        if (activeModal === null) {
            localModalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
        } else {
            localModalHistory.push(activeModal);
        }

        setActiveModal(activeModal);
        setModalHistory(localModalHistory);
    };

    const modalBack = () => {
        changeActiveModal(modalHistory[modalHistory.length - 2]);
    };

    const modal = (
        <ModalRoot activeModal={activeModal} onClose={modalBack}>
            <ModalPage
                id={MODAL_PAGE_FULLSCREEN}
                onClose={modalBack}
                settlingHeight={100}
                hideCloseButton
                header={
                    <ModalPageHeader
                        after={
                            <PanelHeaderButton onClick={modalBack}>
                                <Icon24Dismiss />
                            </PanelHeaderButton>
                        }
                    >
                        User Name
                    </ModalPageHeader>
                }
            >
                <Group>
                    <FormItem top="Город">
                        <SelectMimicry placeholder="Выбрать город" disabled />
                    </FormItem>

                    <FormItem top="Пол">
                        <Radio name="sex" value={0} defaultChecked>
                            Любой
                        </Radio>
                        <Radio name="sex" value={1}>
                            Мужской
                        </Radio>
                        <Radio name="sex" value={2}>
                            Женский
                        </Radio>
                    </FormItem>

                    <FormItem top="Школа">
                        <SelectMimicry placeholder="Выбрать школу" disabled />
                    </FormItem>
                    <FormItem top="Университет">
                        <SelectMimicry placeholder="Выбрать университет" disabled />
                    </FormItem>

                    <FormItem top="Дополнительно">
                        <Checkbox>С фотографией</Checkbox>
                        <Checkbox>Сейчас на сайте</Checkbox>
                    </FormItem>

                    <FormItem top="Работа">
                        <Input placeholder="Место работы" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Должность" />
                    </FormItem>

                    <FormItem top="Дата рождения">
                        <DatePicker
                            min={{ day: 1, month: 1, year: 1901 }}
                            max={{ day: 1, month: 1, year: 2006 }}
                            dayPlaceholder="Д"
                            monthPlaceholder="ММ"
                            yearPlaceholder="ГГ"
                        />
                    </FormItem>
                </Group>
            </ModalPage>

            <ModalPage
                id={MODAL_PAGE_FILTERS}
                onClose={modalBack}
                header={
                    <ModalPageHeader
                        after={<PanelHeaderSubmit onClick={modalBack} />}
                    >
                        Фильтры
                    </ModalPageHeader>
                }
            >
                <Group>
                    <FormItem top="Город">
                        <SelectMimicry placeholder="Выбрать город" disabled />
                    </FormItem>

                    <FormItem top="Пол">
                        <Radio name="sex" value={0} defaultChecked>
                            Любой
                        </Radio>
                        <Radio name="sex" value={1}>
                            Мужской
                        </Radio>
                        <Radio name="sex" value={2}>
                            Женский
                        </Radio>
                    </FormItem>

                    <FormItem top="Школа">
                        <SelectMimicry placeholder="Выбрать школу" disabled />
                    </FormItem>
                    <FormItem top="Университет">
                        <SelectMimicry placeholder="Выбрать университет" disabled />
                    </FormItem>

                    <FormItem top="Дополнительно">
                        <Checkbox>С фотографией</Checkbox>
                        <Checkbox>Сейчас на сайте</Checkbox>
                    </FormItem>

                    <FormItem top="Работа">
                        <Input placeholder="Место работы" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Должность" />
                    </FormItem>

                    <FormItem top="Дата рождения">
                        <DatePicker
                            min={{ day: 1, month: 1, year: 1901 }}
                            max={{ day: 1, month: 1, year: 2006 }}
                            dayPlaceholder="Д"
                            monthPlaceholder="ММ"
                            yearPlaceholder="ГГ"
                        />
                    </FormItem>
                </Group>
            </ModalPage>
        </ModalRoot>
    );


    return (
        <SplitLayout modal={modal}>
            <View activePanel="modals">
                <Panel id="modals">
                    <PanelHeader>Модальные окна</PanelHeader>

                    <Group>
                        <CellButton onClick={() => changeActiveModal(MODAL_PAGE_FILTERS)}>
                            Открыть модальную страницу
                        </CellButton>
                        <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_FULLSCREEN)}>
                            Открыть полноэкранную модальную страницу
                        </CellButton>
                    </Group>
                </Panel>
            </View>
        </SplitLayout>
    )
}