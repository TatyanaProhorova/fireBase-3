import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { Task } from '../../types/task';

type Props = Pick<Task, 'description' | 'options'>;

export default function Multi({ description, options }: Props) {
  const listItems = options.map((option, index) => (
    <FormControlLabel key={index} control={<Checkbox id={(index + 1).toString()} />} label={option} />
  ));

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel>{description}</FormLabel>
      <FormGroup>{listItems}</FormGroup>
    </FormControl>
  );
}
