import AdBlock from "@/components/AdBlock"
import { adminDb } from "@/lib/firebase-admin"

export interface TestAdParcel {
  adParcelId: number
}

export default async function Home() {
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

  return (
    <main className="p-8 min-h-[100vh]">
      <h1 className="text-3xl mb-4">AD SANDBOX</h1>
      <div className="flex flex-col gap-8">
        <p>Parcel id: {adParcelId}</p>
        <AdBlock adParcelId={adParcelId} />
      </div>
    </main>
  )
}
