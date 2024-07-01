import { classNames } from "@repo/shared/lib";
import React, { memo } from "react";

import { ChartList } from "@/entities/Chart";
import { Page } from "@/widgets/Page";

const MainPage = () => (
  <Page className={classNames("", {}, [])}>
    <ChartList />
  </Page>
);

export default memo(MainPage);
