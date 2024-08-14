import { maskitoNumberOptionsGenerator } from '@maskito/kit';

const postfix = '%';

export default maskitoNumberOptionsGenerator({
  postfix,
  min: 0,
  max: 100,
  precision: 4,
});
