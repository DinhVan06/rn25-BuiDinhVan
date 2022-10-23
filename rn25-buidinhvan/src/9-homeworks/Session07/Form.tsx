import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
interface ICity {
  code: number;
  name?: string;
  codename?: string;
  division_type?: string;
  short_codename?: string;
  districts: Array<IDistrict>;
}
interface IDistrict {
  code: number;
  name?: string;
  codename?: string;
  division_type?: string;
  short_codename?: string;
  wards: Array<ICommune>;
}
interface ICommune {
  code: number;
  name?: string;
  codename?: string;
  division_type?: string;
  short_codename?: string;
}
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
function Form() {
  const [citys, setCitys] = useState<Array<ICity>>([]);
  const [districts, setDistriscts] = useState<Array<IDistrict>>([]);
  const [communes, setCommunes] = useState<Array<ICommune>>([]);

  useEffect(() => {
    const getCitysss = async ()=> {
      try {
        const response = await fetch(
          "https://provinces.open-api.vn/api/?depth=3"
        );
        console.log(response)
        const data = await response.json();
        setCitys(data);
      } catch (error) {
        console.error(error);
      }
    }
    getCitysss();
  }, []);
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
  const handleChangeCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = { ...citys.find((x) => x.code === parseInt(e.target.value)) };
    const districtOfCity  = city.districts ? city.districts : [];
    setDistriscts(districtOfCity);
    setCommunes([]);
  };
  const handleChangeDistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const district = { ...districts.find((x) => x.code === parseInt(e.target.value)) };
    const communesOfDistrict = district.wards ? district.wards : [];
    setCommunes(communesOfDistrict);
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
        <div style={{textAlign:"center"}}>
            <label style={{marginBottom:"10px"}} htmlFor="Address">Address</label>
            <br />
            <input style={{width:'100%'}} type="text" />
        </div>
        <div style={{textAlign:"center"}}>
            <label style={{marginBottom:"10px"}} htmlFor="Address2">Address2</label>
            <br />
            <input style={{width:'100%'}} type="text" />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="city">City</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="city"
              onChange={handleChangeCity}
            >
                <option></option>
              {citys.map((city) => (
                <option key={city.code} value={city.code}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="district">District</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="district"
              onChange={handleChangeDistrict}
            >
                <option></option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>
          <div style={{ flex: "1", margin: "5px 5px 5px 0" }}>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="commune">Commune</label>
            </div>
            <select
              style={{ width: "100%" }}
              name="commune"
            >
                <option></option>
              {communes.map((commune) => (
                <option key={commune.code} value={commune.code}>
                  {commune.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div style={{marginTop:"10px"}}>
            <input type="checkbox"/> 
            <span style={{marginLeft:"10px"}}>Check me out</span>
        </div>
        <div style={{textAlign:"center"}}>
            <button style={{margin:"20px", backgroundColor:"blue", color:"white"}}>Sign in</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
