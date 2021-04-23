import { GetServerSideProps } from "next";
import { useEffect } from "react";
import Header from "../components/Header";

type Episode = {
  title: string;
}

export default function Home({episodes}) {
  console.log(episodes);

  return (
    <h1>Hello World</h1>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60* 8,
  }
}
