import type { MenuProps } from 'antd';
import {DesktopOutlined} from "@ant-design/icons";

type MainMenuItem = Required<MenuProps>['items'][number];

const MainMenu: MainMenuItem[] = [
    {
        key: 'home',
        label: 'Home',
        icon: <DesktopOutlined />,
    }
];

export default MainMenu;
