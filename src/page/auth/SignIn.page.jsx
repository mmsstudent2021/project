import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Formik, Form, ErrorMessage } from "formik";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useSignInMutation } from "../../store/service/endpoints/auth.endpoint";
import AuthGuard from "../../components/guard/Auth.Guard";

const SignInPage = () => {
  const [fun, data] = useSignInMutation();
  const nav = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email Is Required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password Is Required")
      .min(8, "Password should be 8 letter"),
  });

  const handleSubmit = async (value, action) => {
    await fun(value);
    action.reset();
  };

  useEffect(() => {
    if (data?.data?.success) {
      nav("/home");
    }
  }, [data]);

  return (
    <AuthGuard check={data?.data?.success} token={data?.data?.token}>
      <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
        <Card className="basis-2/4 p-5">
          <CardHeader className="flex flex-row justify-between mb-5">
            <CardTitle>Sign In</CardTitle>
            <CardDescription className="text-basic">
              <Link to="sign_up">I don't have an account</Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              validationSchema={validationSchema}
              initialValues={initialValue}
              onSubmit={handleSubmit}
            >
              {({ handleBlur, handleChange, values, isSubmitting }) => (
                <>
                  <Form className="flex flex-col gap-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                    />
                    <ErrorMessage
                      className="text-danger text-sm"
                      component={"p"}
                      name="email"
                    />
                    <Label htmlFor="password">Password</Label>
                    <Input
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      type="password"
                      name="password"
                      id="password"
                    />
                    <ErrorMessage
                      className="text-danger text-sm"
                      component={"p"}
                      name="password"
                    />
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      className="w-full bg-basic mt-3"
                    >
                      Sign In{" "}
                      {isSubmitting && (
                        <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                      )}
                    </Button>
                  </Form>
                </>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </AuthGuard>
  );
};

export default SignInPage;
