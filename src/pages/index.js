import { useIntervalSWR } from "../lib/swr";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SiteHero } from "@/components/global/hero";
import { SiteFeatures } from "@/components/global/stats";
import { SiteCard } from "@/components/global/card";
export default function Home() {
  const router = useRouter();


  return (
  <>
  <SiteHero />
  <SiteFeatures />
  <SiteCard />
  </>
  )
}
