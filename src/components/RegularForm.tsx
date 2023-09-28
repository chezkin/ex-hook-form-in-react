import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Grid, Paper, TextField, Button, FormLabel,} from '@mui/material';

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface FormData {
  username: string;
  email: string;
  password: string;
  gender: GenderEnum
  age: number;
  address: string;
}

function RegularForm() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  // console.log(watch("username")) // watch input value by passing the name of it

  const paperStyle = { padding: 20, margin: '12vh auto ', width: 300, height: 470 };
  const avatarStyle = { backgroundColor: 'green' };
  const textFieldStyle = { padding: '3px', margin: '6px ' }
  return (
    <Paper style={paperStyle} elevation={22}>
      {/* <h1 style={{justifyContent: 'center'}}>כניסה לטופס טיולים</h1> */}
      <form style={{ display: 'flex', flexDirection: 'column', width: 300 }} onSubmit={handleSubmit(onSubmit)}>

        <TextField variant='filled' style={textFieldStyle} label="Name" placeholder='Enter your name:' {...register("username", { required: true, minLength: 2 })} />
        {errors.username && errors.username.type === "required" && <span style={{ color: 'red' }}>This field is required</span>}
        {errors.username && errors.username.type === "minLength" && <span style={{ color: 'red' }}>Username must be at least 2 characters long</span>}

        <TextField style={textFieldStyle} label="Email" placeholder='Exmpel@gmail.com'  {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
        {errors.email && errors.email.type === "required" && <span style={{ color: 'red' }}>This field is required</span>}
        {errors.email && errors.email.type === "pattern" && <span style={{ color: 'red' }}>Invalid email address</span>}

        <TextField style={textFieldStyle} type='password' label="Password" variant='standard' {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!]).{8,20}$/ })} />
        {errors.password && errors.password.type === "required" && <span style={{ color: 'red' }}>This field is required</span>}
        {errors.password && errors.password.type === "pattern" && <span style={{ color: 'red' }}>Invalid password format</span>}

        <FormLabel style={textFieldStyle}>Gender Selection
          <select style={textFieldStyle}  {...register("gender")}>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">other</option>
          </select>
        </FormLabel>

        
<TextField
  style={textFieldStyle}
  placeholder='Enter your age:'
  type='number' // סוג השדה הוא מספר
  inputProps={{ min: "18", max: "99" }} // הגבלת טווח לגילים בין 18 ל-99
  {...register("age", { required: true, min: 18 , max: 99 })}
/>
{errors.age && errors.age.type === "required" && <span style={{ color: 'red' }}>This field is required</span>}
{errors.age && errors.age.type === ("min" || 'max') && <span style={{ color: 'red' }}>Age must be between 18 and 99</span>}

<TextField
  style={textFieldStyle}
  placeholder='Enter your address:'
  {...register("address", { required: true, pattern: /^[A-Za-z0-9\s,'.-]*$/ })}
/>
{errors.address && errors.address.type === "required" && <span style={{ color: 'red' }}>This field is required</span>}
{errors.address && errors.address.type === "pattern" && <span style={{ color: 'red' }}>Invalid address format</span>}


        <Button type='submit' variant='contained' style={textFieldStyle}>submit</Button>
        {/* <input style={textFieldStyle} type="submit" /> */}
      </form>
    </Paper>
  )

}

export default RegularForm;
