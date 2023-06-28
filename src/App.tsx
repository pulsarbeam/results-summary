import data from '../public/data.json'

function App() {
  console.log(data[0])
  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-slate-200 font-hanken">
      <div className="flex bg-white rounded-2xl">
        <div className="bg-blue-500 overflow-hidden rounded-2xl p-10">
          <div className="max-w-[15rem] flex flex-col justify-center">
            <h1 className="flex justify-center">Your Result</h1>
            <div className="rounded-full  bg-blue-800 flex items-center justify-center">
              <p className="">
                <span>76</span>/100
              </p>
            </div>
            <div className="flex justify-center flex-col items-center">
              <p>Great</p>
              <p>
                You scored 65% higher than other people who have taken these
                tests
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white max-w-15 p-12 rounded-2xl overflow-hidden">
          <h2>Summary</h2>
          <div>
            <p>Reaction</p>
            <p>Memory</p>
            <p>Verbal</p>
            <p>Visual</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
