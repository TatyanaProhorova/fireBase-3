import { FormControl, FormControlLabel,
         FormLabel, Radio, RadioGroup } from "@mui/material";
export function SingleAnswerTask() {
  <FormControl>
    <FormLabel id="demo">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo"
            // defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
    </FormControl>
}


{/* <FormControl>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-controlled-radio-buttons-group"
    name="controlled-radio-buttons-group"
    value={value}
    onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl> */}