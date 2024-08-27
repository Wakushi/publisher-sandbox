import { adminDb } from "@/lib/firebase-admin"
import AdBlock from "@/components/AdBlock"

export interface TestAdParcel {
  adParcelId: number
}

export default async function Home() {
  const timestamp = Date.parse(new Date().toString())

  async function fetchAdParcelId() {
    const collectionRef = adminDb.collection("testAdParcelIds")
    const snapshot = await collectionRef.get()
    const testAdParcels = snapshot.docs.map((doc) => ({
      ...doc.data(),
    })) as TestAdParcel[]
    return testAdParcels[0].adParcelId
  }

  const parcelId = await fetchAdParcelId()

  return (
    <main className="p-8 min-h-[100vh]">
      <h1 className="text-3xl mb-4">AD SANDBOX</h1>
      <p>Timestamp : {timestamp}</p>
      <div className="flex flex-col gap-8">
        <p>Parcel id: {parcelId}</p>
        <AdBlock adParcelId={parcelId} />
      </div>
    </main>
  )
}
