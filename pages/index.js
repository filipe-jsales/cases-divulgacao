import NextLink from "../src/components/Link";
import React from "react";










function Title({ children, as }) {
  const Tag = as;
  return (
    <React.Fragment>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </React.Fragment>
  );
}

export default function Index() {
  return (
    <div>
      <Title as="h2">Alura Cases - Home</Title>
      <NextLink href="/faq" path={"faq"}></NextLink>
    </div>
  );
}
