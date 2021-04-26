/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction } from 'react';

export interface IDataChangeState {
  label: string;
  value: string | number | null | undefined | object | [] | boolean;
}

export interface setDataType {
  (data: string | number | null | undefined | object | [] | boolean): void;
}

export default (setData: SetStateAction<any>) => ({
  label,
  value,
}: IDataChangeState): void => {
  setData((data: object) => ({
    ...data,
    [label]: value,
  }));
};
