import HeroImg from "../../components/leasingForm/HeroImg";


import LeasingFormInput from "../../components/leasingForm/LeasingFormInput";
import Head from "next/head";

export default function LeasingForm({ currentDir }) {
  return (
    <>
      <Head>
        <title>{currentDir === "rtl" ? "استمارة التأجير" : "Leasing Form"}</title>
      </Head>

      <HeroImg currentDir={currentDir} />

        <LeasingFormInput currentDir={currentDir} />
   {/*   <AlamerGoals currentDir={currentDir} />
      <Founder currentDir={currentDir} /> */}
    </>
  );
}
