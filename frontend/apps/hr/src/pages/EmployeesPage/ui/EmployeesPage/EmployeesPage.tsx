import { classNames } from "@repo/shared/lib";
import { memo } from 'react';

import { EmployeeList } from '@/entities/Employee';
import { EditEmployees } from '@/features/EditEmployees';
import { Page } from '@/widgets/Page';

interface EmployeesPageProps {
	className?: string;
}

const EmployeesPage = (props: EmployeesPageProps) => {
	const {
		className,
	} = props;
	return (
		<Page className={classNames('', {}, [className])}>
			<EditEmployees />
			<EmployeeList />
		</Page>
	);
};

export default memo(EmployeesPage);