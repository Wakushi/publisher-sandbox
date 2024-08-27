import { adminDb } from "@/lib/firebase-admin"
import dynamic from "next/dynamic"

const AdBlock = dynamic(() => import("@/components/AdBlock"), { ssr: false })

export interface TestAdParcel {
  adParcelId: number
}

export default async function Home() {
  const rand = Math.random()
  console.log(rand)
  async function getTestAdParcelIds() {
    const collectionRef = adminDb.collection("testAdParcelIds")
    const snapshot = await collectionRef.get()
    const testAdParcels = snapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as TestAdParcel[]
    return testAdParcels
  }

  const testAdParcels = await getTestAdParcelIds()
  const adParcelId = testAdParcels[0].adParcelId
  console.log("adParcelId: ", adParcelId)

  return (
    <main className="p-8 min-h-[100vh]">
      <h1 className="text-3xl mb-4">AD SANDBOX {rand}</h1>
      <div className="flex flex-col gap-8">
        <p>Parcel id: {adParcelId}</p>
        <AdBlock adParcelId={782576213} />
      </div>
    </main>
  )
}
