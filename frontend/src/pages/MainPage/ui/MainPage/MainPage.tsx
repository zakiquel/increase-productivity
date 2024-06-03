import React, { memo } from 'react';

import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";
import { Input } from "@/shared/ui/Input";

import cls from './MainPage.module.scss'

const MainPage = () => (
    <main
      className={cls.MainPage}
    >
      Лучший сервис для HR-специалиста!
      <Button size='s'>Accent s</Button>
      <Button>Accent m</Button>
      <Button size='l'>Accent l</Button>
      <Button variant="clear">Clear</Button>
      <Button variant="white">White</Button>
      <Button fullWidth>Full Width</Button>
      <Card>Card normal</Card>
      <Card variant="outlined">Card outlined</Card>
      <Card variant="light">Card white</Card>
      <Input placeholder="Input" />
    </main>
  );

export default memo(MainPage);