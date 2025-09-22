import {useForm} from "react-hook-form"
import {DevTool} from "@hookform/devtools"
import {Burger} from "../types"

type FormValues = Omit<Burger, "id">

interface BurgerFormProps {
  onSubmit: (data: FormValues) => void
}

const BurgerForm: React.FC<BurgerFormProps> = ({onSubmit}) => {
  const form = useForm<FormValues>()
  const {register, control, handleSubmit, formState} = form
  const {errors} = formState

  return (
    <div>
      <form
        className="add-burger-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1>Create a Burger</h1>
        <p>Create your own burger below and it will be added to the Menu!</p>
        <div>
          <input
            type="text"
            placeholder="burger name..."
            className="create input-text"
            {...register("name", {
              required: {
                value: true,
                message: "Burger name is required",
              },
            })}
          />
          <p className="error">{errors.name?.message}</p>
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="burger price..."
            className="create input-text"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <p className="error">{errors.price?.message}</p>
        </div>
        <br />

        <input
          type="submit"
          name="submit"
          value="Create New Burger"
          className="submit"
        />
      </form>
      <DevTool control={control} />
    </div>
  )
}

export default BurgerForm
