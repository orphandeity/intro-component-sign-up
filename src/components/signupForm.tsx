import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    emailAddress: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched', resolver: yupResolver(schema) })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="drop-shadow-custom desktop:gap-5 desktop:p-10 flex flex-col items-center gap-4 rounded-lg bg-white p-6"
    >
      <div className="w-full">
        <div className="relative w-full">
          <input
            {...register('firstName')}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            placeholder="First Name"
            className={`${
              errors.firstName &&
              'border-2 border-fm-red text-fm-red placeholder:text-fm-red focus:border-fm-red'
            }`}
          />
          {errors.firstName && (
            <div className="bg-error absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 bg-center bg-no-repeat" />
          )}
        </div>
        {errors.firstName && (
          <p role="alert" className="errorMessage">
            First Name cannot be empty
          </p>
        )}
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <input
            {...register('lastName')}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            placeholder="Last Name"
            className={`${
              errors.lastName &&
              'border-2 border-fm-red text-fm-red placeholder:text-fm-red focus:border-fm-red'
            }`}
          />
          {errors.lastName && (
            <div className="bg-error absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 bg-center bg-no-repeat" />
          )}
        </div>
        {errors.lastName && (
          <p role="alert" className="errorMessage">
            Last Name cannot be empty
          </p>
        )}
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <input
            {...register('emailAddress')}
            aria-invalid={errors.emailAddress ? 'true' : 'false'}
            placeholder="Email Address"
            className={`${
              errors.emailAddress &&
              'border-2 border-fm-red text-fm-red placeholder:text-fm-red focus:border-fm-red'
            }`}
          />
          {errors.emailAddress && (
            <div className="bg-error absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 bg-center bg-no-repeat" />
          )}
        </div>
        {errors.emailAddress && (
          <p role="alert" className="errorMessage">
            Looks like this is not an email
          </p>
        )}
      </div>
      <div className="w-full">
        <div className="relative w-full">
          <input
            {...register('password')}
            aria-invalid={errors.password ? 'true' : 'false'}
            placeholder="Password"
            className={`${
              errors.password &&
              'border-2 border-fm-red text-fm-red placeholder:text-fm-red focus:border-fm-red'
            }`}
          />
          {errors.password && (
            <div className="bg-error absolute right-5 top-1/2 h-8 w-8 -translate-y-1/2 bg-center bg-no-repeat" />
          )}
        </div>
        {errors.password && (
          <p role="alert" className="errorMessage">
            Password cannot be empty
          </p>
        )}
      </div>

      <button className="shadow-inset w-full rounded-md bg-fm-green py-4 text-[0.9375rem] font-semibold uppercase tracking-[1px] hover:opacity-60">
        Claim your free trial
      </button>

      <small className="text-fm-blue-gray mx-4 text-center text-[11px] font-medium">
        By clicking the button, you are agreeing to our{' '}
        <span className="font-semibold text-fm-red">Terms and Services</span>
      </small>
    </form>
  )
}
