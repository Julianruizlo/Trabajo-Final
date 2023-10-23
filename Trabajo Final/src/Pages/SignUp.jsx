import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


import Form from 'react-bootstrap/Form';


function SignUp() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <>
    <Form.Floating Submit={handleSubmit(onSubmit)} className="mb-3">
    <Form.Control
      id="floatingInputCustom"
      type="text"
      placeholder="UserName"
    />
    <label {...register("username")} htmlFor="floatingInputCustom">UserName</label>
    {errors.username?.message && (
        <p className="text-red-500">{errors.username?.message}</p>
      )}
  </Form.Floating>
  <Form.Floating>
  <Form.Control
  id="floatingInputCustom"
  type="email"
  placeholder="name@example.com"
/>
<label {...register("email")} htmlFor="floatingInputCustom">Email Adress</label>
{registerErrors.map((error, i) => (
      <Message message={error} key={i} />
    ))}
</Form.Floating>
  <Form.Floating>
    <Form.Control
      id="floatingPasswordCustom"
      type="password"
      placeholder="Password"
    />
    <label{...register("password")} htmlFor="floatingPasswordCustom">Password</label>
    {errors.password?.message && (
      <p className="text-red-500">{errors.password?.message}</p>
    )}
  </Form.Floating>
  <p>
      Already Have an Account?
      <Link  to="/login">
        Login
      </Link>
    </p>
</>
);
}
export default SignUp;
