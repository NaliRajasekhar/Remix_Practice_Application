import { Link, useActionData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import React, { useState } from "react";
import { MetaFunction } from "@remix-run/node";
// import textfield from "~/components/Textfield/textfield";

export default (Signup = () => {
  return (
    <div>
      this is signup
    </div>
  );
});

export const meta = () => {
    return [{ title: "New Remix app login" }];
};
