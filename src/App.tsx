import {Cell, Group, Panel, SplitCol, SplitLayout, View} from '@vkontakte/vkui';

import {Header} from "./panels/components/header/header.tsx";
import {Body} from "./panels/components/body/body.tsx";
import {useState} from "react";
import {ModalComponent} from "./panels/components/modal-component/modal-component.tsx";

const panels = ['form', 'modal'];

export const App = () => {
    const [panel, setPanel] = useState(panels[0]);

    return (
    <SplitLayout
        style={{ justifyContent: 'center' }}
        header={<Header id="home" />}>
        <SplitCol>
            <Group>
                {panels.map((i) => (
                    <Cell key={i} hovered={i === panel} onClick={() => setPanel(i)}>
                        {i}
                    </Cell>
                ))}
            </Group>
        </SplitCol>

        <SplitCol>
            <View activePanel={panel}>
                <Panel id={panels[0]}>
                    <Body />
                </Panel>

                <Panel id={panels[1]}>
                    <ModalComponent />
                </Panel>
            </View>
        </SplitCol>
    </SplitLayout>
  );
};
