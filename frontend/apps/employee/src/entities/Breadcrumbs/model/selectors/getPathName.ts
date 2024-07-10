import { pathNames } from '@/shared/const/route'

export interface IAllPath {
  value: string
  path: string
}

export const getPathName = (path: string) => {
  const arrayOfPathNames = path.split('/')
  let allPath: IAllPath[] = []
  arrayOfPathNames.slice(1).map((pathName) => {
    pathNames.map((data) =>
      pathName === data.pathName
        ? allPath.push({ value: data.value, path: data.path })
        : ''
    )
  })

  return allPath
}
