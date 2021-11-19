import React, { Fragment, useState } from "react";
import Layout from "./components/Layout";
import JEsteban from "./pages/jesteban";
import JOrtiz from "./pages/jortiz";
import JOsorio from "./pages/josorio";
import Nicolas from "./pages/nicolas";
import Rodrigo from "./pages/rodrigo";
import Task from "./pages/task";
import ItemList from "./pages/task/components/ItemList";
import Yeferson from "./pages/yeferson";

const App = (): JSX.Element => {
  const [menu, subMenu] = useState<number>(1);

  return (
    <Layout>
      <Fragment>
        <ul className="nav nav-tabs">
          <li className="nav-item" onClick={() => subMenu(1)}>
            <a
              className={"nav-link" + (menu == 1 && " active")}
              aria-current="page"
              href="#"
            >
              Tareas
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(2)}>
            <a className={"nav-link" + (menu == 2 && " active")} href="#">
              Juan Esteban
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(3)}>
            <a className={"nav-link" + (menu == 3 && " active")} href="#">
              Juan Ortiz
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(4)}>
            <a className={"nav-link" + (menu == 4 && " active")} href="#">
              Juan Osoario
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(5)}>
            <a className={"nav-link" + (menu == 5 && " active")} href="#">
              Nicolas
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(6)}>
            <a className={"nav-link" + (menu == 6 && " active")} href="#">
              Rodrigo
            </a>
          </li>
          <li className="nav-item" onClick={() => subMenu(7)}>
            <a className={"nav-link" + (menu == 7 && " active")} href="#">
              Yeferson
            </a>
          </li>
        </ul>

        <main style={{padding: '40px 0px'}}>
          {menu == 1 && <Task />}

          {menu == 2 && <JEsteban />}

          {menu == 3 && <JOrtiz />}

          {menu == 4 && <JOsorio />}

          {menu == 5 && <Nicolas />}

          {menu == 6 && <Rodrigo />}

          {menu == 7 && <Yeferson />}
        </main>
      </Fragment>
    </Layout>
  );
};

export default App;
