import { useState } from 'react';

import { PersonalInfo } from '../../model/types/employee';

import Arrow from '@/shared/assets/icons/chevron_down.svg';
import avatar from '@/shared/assets/images/employee.png';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

import cls from './EployeeProfile.module.scss';

interface EmployeeProfileProps {
  data: PersonalInfo;
}

export const EmployeeProfile = (props: EmployeeProfileProps) => {
  const { data } = props;

  const [showDetails, setShowDetails] = useState(false);

  const arrowMods: Mods = {
    [cls.showDetails]: showDetails,
  };

  return (
    <Card variant='light' padding='32' className={cls.EmployeeProfile}>
      <div className={cls.profile_header}>
        <div className={cls.employee_name}>
          {!showDetails && <Avatar src={avatar} size={40} />}
          <Text
            title={`${data.firstName} ${data.lastName}`}
            size='s'
            className={cls.title}
          />
        </div>
        <Icon
          className={classNames(cls.arrow_button, arrowMods, [])}
          Svg={Arrow}
          buttonHeight={56}
          buttonWidth={56}
          width={24}
          height={24}
          clickable
          onClick={() => setShowDetails(prev => !prev)}
        />
      </div>
      {showDetails && (
        <div className={cls.profile_info}>
          <div className={cls.info_fields}>
            <Input readonly label='Text' value={data.firstName} size='s' />
            <Input readonly label='Text' value={data.lastName} size='s' />
            <Input readonly label='Text' value={data.dateOfBirth} size='s' />
            <Input readonly label='Text' value={data.position} size='s' />
            <Input readonly label='Text' value={data.workExperience} size='s' />
            <Input readonly label='Text' value={data.salary} size='s' />
            <Input readonly label='Text' value={data.email} size='s' />
            <Input readonly label='Text' value={data.phoneNumber} size='s' />
            <div className={cls.info_fields_buttons}>
              <Button>Сформировать отчет</Button>
              <Button variant='outline'>Редактировать</Button>
            </div>
          </div>
          <div className={cls.profile_photo}>
            <AppImage src={avatar} />
          </div>
        </div>
      )}
    </Card>
  );
};
