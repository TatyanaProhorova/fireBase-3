import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Task } from '../../types/task';

type Props = Pick<Task, 'description' | 'options'>;

export default function Single({ description, options }: Props) {
  const listItems = options.map((option, index) => (
    <FormControlLabel key={index} control={<Radio id={(index + 1).toString()} />} label={option} checked={false} />
  ));

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel>{description}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={value}
        // onChange={handleChange}
      >
        {listItems}
      </RadioGroup>
    </FormControl>
  );
}
