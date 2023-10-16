export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-screen w-screen">
          <span className="loading loading-spinner loading-lg p-10"></span>
        </div>
      )
      
}