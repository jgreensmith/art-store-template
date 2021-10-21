import { Toolbar } from "@mui/material";
import Hero from "../components/hero";
import Layout from "../components/common/Layout";


export default function Home(props) {
  return (
    <Layout title="Home" commercePublicKey={props.commercePublicKey}>
      <Toolbar />
      <Hero />
      <h1>Butt 2</h1>
      <h1>Butt 2</h1>

      <h1>Butt 2</h1>

      <h1>Butt 2</h1>

      <h1>Butt 2</h1>

    </Layout>
  )
}
