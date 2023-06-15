function App() {
  return (
    <div className="flex h-screen flex-col bg-fm-red bg-mobile p-4 lg:grid lg:grid-cols-2 lg:place-content-center lg:bg-desktop">
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-4xl font-bold">Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="space-y-4">
        <div className="w-full rounded-lg bg-fm-purple p-4 text-white shadow-lg">
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </div>

        <form className="flex flex-col gap-4 rounded-lg bg-white p-8 shadow-lg">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Password" />

          <button className="rounded-md bg-fm-green px-4 py-3 uppercase text-white">
            Claim your free trial
          </button>

          <small>
            By clicking the button, you are agreeing to our Terms and Services
          </small>
        </form>
      </div>
    </div>
  )
}

export default App
