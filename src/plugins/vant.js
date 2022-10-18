import {
    Area,
    Button,
    Calendar,
    Cell,
    CellGroup,
    Col,
    ConfigProvider,
    Divider,
    Field,
    Form,
    List,
    NavBar,
    Popup,
    Row,
    Skeleton,
    Space,
    Tabbar,
    TabbarItem,
    Toast,
    TreeSelect,
    Icon,
    DatetimePicker
  } from 'vant'
import 'vant/lib/index.css'

export default {
  install: (app, options) => {
    app.use(Area)
    app.use(Button)
    app.use(Calendar)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Col)
    app.use(ConfigProvider)
    app.use(Divider)
    app.use(Field)
    app.use(Form)
    app.use(List)
    app.use(NavBar)
    app.use(Popup)
    app.use(Row)
    app.use(Skeleton)
    app.use(Space)
    app.use(Tabbar)
    app.use(TabbarItem)
    app.use(Toast)
    app.use(TreeSelect)
    app.use(Icon)
    app.use(DatetimePicker)
  }
}
