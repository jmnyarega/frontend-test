import type { FC, ReactNode } from "react";

import { Main } from "./Main.styles";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => (
  <div>
    <Main>{props.children}</Main>
  </div>
);

export default Layout;
