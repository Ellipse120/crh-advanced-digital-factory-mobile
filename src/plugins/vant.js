import {
    Button,
    Cell,
    CellGroup,
    Col,
    ConfigProvider,
    Field,
    Form,
    List,
    NavBar,
    Row,
    Space,
    Toast
  } from 'vant'
import 'vant/lib/index.css'

export default {
  install: (app, options) => {
    app.use(Button)
    app.use(Cell)
    app.use(CellGroup)
    app.use(Col)
    app.use(ConfigProvider)
    app.use(Field)
    app.use(Form)
    app.use(List)
    app.use(NavBar)
    app.use(Row)
    app.use(Space)
    app.use(Toast)
  }
}
