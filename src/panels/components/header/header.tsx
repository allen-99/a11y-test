import {FC} from "react";
import {Panel, PanelHeader, PanelHeaderButton} from "@vkontakte/vkui";
import {Icon28SettingsOutline} from "@vkontakte/icons";

type T_HeaderProps = {
    id: string
}

export const Header: FC<T_HeaderProps> = ({id}) => {
    return (
        <Panel id={id} style={{ height: '10%' }}>
            <PanelHeader
                before={
                    <>
                        <PanelHeaderButton
                            onClick={() => console.log('Panel Header Button Click')}
                            aria-label={'Panel Header Button'}
                        >
                            Panel Header Button
                        </PanelHeaderButton>

                        <PanelHeaderButton
                            onClick={() => console.log('Panel Header Button With Icon Click')}
                            aria-label={'Panel Header Button With Icon Click'}
                        >
                            <Icon28SettingsOutline />
                        </PanelHeaderButton>
                    </>
                }
            >
                Panel Header
            </PanelHeader>
        </Panel>
    )
}