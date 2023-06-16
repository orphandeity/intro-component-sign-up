import SignupForm from './components/signupForm'

function App() {
  return (
    <main className="desktop:mx-40 desktop:my-0 desktop:flex desktop:h-screen desktop:max-w-full desktop:items-center desktop:justify-center desktop:gap-11 mx-auto mb-16 mt-[88px] max-h-screen max-w-sm space-y-16 px-6 ">
      <div className="desktop:flex desktop:flex-col desktop:justify-center desktop:space-y-3 desktop:text-left max-w-[525px] space-y-4 text-center">
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="desktop:w-[540px] space-y-6">
        <div className="drop-shadow-custom rounded-lg bg-fm-purple px-16 py-4 text-center text-[0.9375rem]">
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </div>

        <SignupForm />
      </div>
    </main>
  )
}

export default App
