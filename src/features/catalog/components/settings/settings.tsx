import {FC} from 'react';

type PropsType = {
  minColumns: number;
  maxColumns: number;
  currentColumns: number;
  onChange(columns: number): void;
};

export const Settings: FC<PropsType> = ({
  currentColumns,
  onChange,
  maxColumns,
  minColumns,
}) => {
  return (
    <select
      value={currentColumns}
      onChange={(e) => onChange(Number(e.target.value))}>
      {Array.from({length: maxColumns - minColumns}, (_, i) => i + 1).map(
        (col) => {
          return (
            <option key={col} value={col}>
              {col}
            </option>
          );
        },
      )}
    </select>
  );
};
