import { Toolbar } from "@mui/material";
import Layout from "../components/common/Layout";


export default function About(props) {
  return (
    <Layout title="About" commercePublicKey={props.commercePublicKey}>
        <Toolbar />
    </Layout>
  )
}