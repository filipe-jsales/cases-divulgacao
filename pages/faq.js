import { useEffect, useState } from "react";
import NextLink from "../src/components/Link";
import Head from 'next/head';


export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then(async (respostaDoServer) => {
      return respostaDoServer.json();
    })
    .then((respostaConvertida) => {
      return respostaConvertida;
    });
  return {
    props: {
      // will be passed to the page component as props
      qualquercoisa: "oi",
      faq
    },
  }; 
}
export default function FAQ({faq}) {

  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <h1>Página de Perguntas</h1>
      <NextLink href="/" path={"Home"}></NextLink>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
