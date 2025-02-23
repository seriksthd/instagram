import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postToursRequest } from "../store/tour/tourThunk";

export default function Login() {
  const [tourValue, setTourValue] = useState({
    email: "",
    name: "",
    password: "",
    password2: "",
  });
  const dispatch = useDispatch();

  const handlerChageInput = (e) => {
    const { name, value } = e.target;
    setTourValue({ ...tourValue, [name]: value, id: Date.now().toString() });
  };

  const handlerSubmitTiur = (e) => {
    e.preventDefault();

    if (
      !tourValue.name ||
      !tourValue.email ||
      !tourValue.password ||
      !tourValue.password2
    ) {
      return toast.error("заполните!!!");
    }

    dispatch(postToursRequest(tourValue));
    toast.success("успешно создан !");

    setTourValue({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="container">
      <div className="login-register-container">
        <form onSubmit={handlerSubmitTiur}>
          <div className="form-field-wrapper">
            <label>Name:</label>
            <input
              required
              type="text"
              name="name"
              value={tourValue.name}
              onChange={handlerChageInput}
              placeholder="Enter name..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Email:</label>
            <input
              required
              type="email"
              name="email"
              value={tourValue.email}
              onChange={handlerChageInput}
              placeholder="Enter email..."
            />
          </div>

          <div className="form-field-wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={tourValue.password}
              onChange={handlerChageInput}
              placeholder="Enter password..."
              autoComplete="new-password"
            />
          </div>

          <div className="form-field-wrapper">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="password2"
              value={tourValue.password2}
              onChange={handlerChageInput}
              placeholder="Confirm password..."
              autoComplete="new-password"
            />
          </div>

          <div className="form-field-wrapper">
            <input type="submit" value="Register" className="btn" />
          </div>
        </form>

        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
