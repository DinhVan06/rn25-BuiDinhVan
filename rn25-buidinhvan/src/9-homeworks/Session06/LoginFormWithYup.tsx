import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .min(10, "The name must be unique and between 10 - 20 characters")
    .max(20, "The name must be unique and between 10 - 20 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(5, "The name must be unique and between 5 - 10 characters")
    .max(10, "The name must be unique and between 5 - 10 characters"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});
function LoginFormWithYup() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleChange = (e: any) => {
    console.log(e.target);
  };
  return (
    <div style={{ margin: "20px", width: "700px" }}>
      <form style={{ width: "100%" }} onSubmit={formik.handleSubmit}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="email">Email</label>
            </div>
            <input
              style={{ width: "100%" }}
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red" }}>
                {formik.touched.email ? formik.errors.email : null}
              </p>
            </div>
          </div>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="password">Password</label>
            </div>
            <input
              style={{ width: "100%" }}
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "red" }}>
                {formik.touched.password ? formik.errors.password : null}
              </p>
            </div>
          </div>
        </div>
        {/* <div style={{ display: "flex" }}>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="city">City</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="city"
              //   value={city}
              onChange={formik.handleChange}
            >
              <option value="HN">TP H?? N???i</option>
              <option value="DN">TP ???? N???ng</option>
              <option value="TK">TP Tam K???</option>
            </select>
          </div>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="district">District</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="district"
              //   value={city}
              onChange={formik.handleChange}
            >
              <option value="QB??">Qu???n Ba ????nh</option>
              <option value="QBT">Qu???n B??nh T??n</option>
              <option value="QBT">Qu???n B??nh Th???nh</option>
              <option value="QCL">Qu???n C???m L???</option>
            </select>
          </div>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="commune">Commune</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="commune"
              //   value={city}
              onChange={formik.handleChange}
            >
              <option value="HB">H??a B???c</option>
              <option value="HL">H??a Li??n</option>
              <option value="KS">Kim S??n</option>
              <option value="S??">S??n ????ng</option>
            </select>
          </div>
        </div> */}
        <div style={{textAlign:"center"}}>
            <button style={{margin:"20px"}}>Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default LoginFormWithYup;
