import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { adminDb } from "@/lib/firebase-admin"
import AdBlock from "@/components/AdBlock"

// const AdBlock = dynamic(() => import("@/components/AdBlock"), { ssr: false })

export interface TestAdParcel {
  adParcelId: number
}

export default function Home() {
  // const [adParcelId, setAdParcelId] = useState<number | null>(null);

  // useEffect(() => {
  //   async function fetchAdParcelId() {
  //     const collectionRef = adminDb.collection("testAdParcelIds");
  //     const snapshot = await collectionRef.get();
  //     const testAdParcels = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //     })) as TestAdParcel[];
  //     setAdParcelId(testAdParcels[0].adParcelId);
  //   }

  //   fetchAdParcelId();
  // }, []);

  // if (adParcelId === null) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main className="p-8 min-h-[100vh]">
      <h1 className="text-3xl mb-4">AD SANDBOX</h1>
      <div className="flex flex-col gap-8">
        <p>Parcel id: {782576213}</p>
        <AdBlock adParcelId={782576213} />
      </div>
    </main>
  )
}
