import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useState }  from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setNewUser] = useState(null);

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link to={"/signin"} underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Formik
              initialValues={{
                email: "",
                password: "",
                confirmpassword: "",
                ConfirmationCode:"",
                policy: false,
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Must be a valid email")
                  .max(255)
                  .required("Email is required"),
                password: Yup.string()
                  .max(255)
                  .required("a password with a minimum length of 8 characters, lowercase, uppercase, and numbers is required"),
                confirmpassword: Yup.string().oneOf(
                  [Yup.ref("password"), null],
                  "Passwords must match"
                ),
                policy: Yup.boolean().oneOf(
                  [true],
                  "This field must be checked"
                ),
              })}
              onSubmit={async (values) => {
                setIsLoading(true);
                try {
                  /*const newUser = await Auth.signUp({
                    username: values.email,
                    password: values.password,
                  });*/
                  setIsLoading(false);
                  setNewUser(newUser);
                } catch (e) {
                  setIsLoading(false);
                }
              }}
            >
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                isSubmitting,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box mb={3}>
                  </Box>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    margin="normal"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Password"
                    margin="normal"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                  <TextField
                    error={Boolean(
                      touched.confirmpassword && errors.confirmpassword
                    )}
                    fullWidth
                    helperText={
                      touched.confirmpassword && errors.confirmpassword
                    }
                    label="Confirm Password"
                    margin="normal"
                    name="confirmpassword"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.confirmpassword}
                    variant="outlined"
                  />
                  <Box alignItems="center" display="flex" ml={-1}>
                    <Checkbox
                      checked={values.policy}
                      name="policy"
                      onChange={handleChange}
                    />
                    <Typography color="textSecondary" variant="body1">
                      I have read the{" "}
                        <a target="_blank" rel="noopener noreferrer" href={" "}>Terms and Conditions</a>
                    </Typography>
                  </Box>
                  {Boolean(touched.policy && errors.policy) && (
                    <FormHelperText error>{errors.policy}</FormHelperText>
                  )}
                  <Box my={2}>
                    <Button
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                    >
                      Sign up now
                    </Button>
                  </Box>
                  <Typography color="textSecondary" variant="body1">
                    Have an account?{" "}
                    <Link to={'/signin'} variant="h6">
                      Sign in
                    </Link>
                  </Typography>
                </form>
              )}
            </Formik>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
