import type { FC } from "react";
import { AppProps } from "next/dist/shared/lib/router/router";

import { Main } from "./Main.styles";

const Layout: FC<AppProps> = (props) => (
  <div>
    <Main>{props.children}</Main>
  </div>
);

export default Layout;
