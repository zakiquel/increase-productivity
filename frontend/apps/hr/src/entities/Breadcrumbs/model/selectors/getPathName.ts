import { pathNames } from '@/shared/const/router';

export interface IAllPath {
  value: string;
  path: string;
}

export const getPathName = (path: string): IAllPath[] => {
  const arrayOfPathNames = path.split('/');
  const allPath: IAllPath[] = [];

  arrayOfPathNames.slice(1).forEach((pathName) => {
    pathNames.forEach((data) => {
      if (pathName === data.pathName) {
        allPath.push({ value: data.value, path: data.path });
      }
    });
  });

  return allPath;
};
