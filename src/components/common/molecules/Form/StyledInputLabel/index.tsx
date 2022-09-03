import { InputHTMLAttributes } from 'react';

import styles from './StyledInputLabel.module.css';

interface StyledInputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}
const StyledInputLabel = ({ labelText, ...props }: StyledInputLabelProps) => {
  return (
    <label className={styles.label}>
      <span className={styles.span}>{labelText}</span>
      <input className={styles.input} {...props} />
    </label>
  );
};

export default StyledInputLabel;
