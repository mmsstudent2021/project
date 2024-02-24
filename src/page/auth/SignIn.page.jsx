import React from "react";
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

const SignInPage = () => {
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

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="w-3/5 mx-auto  h-full flex justify-center items-center">
      <Card className="basis-2/4 p-5">
        <CardHeader className="flex flex-row justify-between mb-5">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className="text-basic">
            I don't have an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
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
                    disable={isSubmitting}
                    type="submit"
                    className="w-full bg-basic mt-3"
                  >
                    Sign In
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
