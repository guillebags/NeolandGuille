import { useForm } from "react-hook-form";

const AuthForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (values) => {
    console.log("Form values:", values);
  };

  /*   const onFormError = (errors) => {
    console.log("Form errors:", errors);
  }; */

  return (
    <form onSubmit={handleSubmit(onFormSubmit /* , onFormError */)}>
      <label>
        <span>Username:</span>
        {/* Invocamos register y pasamos sus atributos en un spread */}
        <input
          {...register("username", {
            required: true,
            minLength: 2,
          })}
          placeholder="student name"
          type="text"
        />

        {/* Mostramos el error si no hay username ya que es requerido */}
        {errors.username ? (
          <p className="error">
            Este campo es requerido y debe tener al menos 2 caracteres
          </p>
        ) : null}
      </label>

      <label>
        <span>Password:</span>
        {/* Invocamos register y pasamos sus atributos en un spread */}
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^\S*$/,
            validate: {
              // Comprobamos que hay mayúsculas, minúsculas y números
              format: (password) => {
                return (
                  /[A-Z]/g.test(password) &&
                  /[a-z]/g.test(password) &&
                  /[0-9]/g.test(password)
                );
              },
            },
          })}
          placeholder="*****"
          type="password"
        />

        {/* Si hay errores en password mostramos el mensaje */}
        {errors.password ? (
          <p className="error">
            {/* Si es de tipo format avisamos al user, si no, será requerido siempre */}
            {errors.password.type === "format"
              ? "La contraseña debe contener al menos una mayúscula, una minúscula y un número"
              : "Este campo es requerido y debe tener al menos 6 caracteres"}
          </p>
        ) : null}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthForm;

/*Otro aspecto a tener en cuenta es que si queremos usar el `onChange` o `onBlur` tienes que pasar `mode` como una propiedad del Hook. 
 const { register, handleSubmit, errors } = useForm({
  mode: "onChange"
});
*/