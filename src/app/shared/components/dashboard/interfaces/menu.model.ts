export interface MenuDashboard {
    title: string,
    icon: string,
    subMenu: SubMenu[],
}

export interface SubMenu {
    name: string,
    url: string,
    icon: string
}