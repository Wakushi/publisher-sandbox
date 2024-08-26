export default ({ adParcelId }: { adParcelId: number }) => (
  <div id="ad-parcel-container" data-ad-parcel-id={adParcelId}>
    <script src={`https://lemonads.vercel.app/ad-parcel.js`} defer></script>
  </div>
)
