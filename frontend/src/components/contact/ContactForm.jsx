import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
  RadioButton,
  RadioButtonGroup,
  RadioButtonLabel,
} from "./style";
import { usePostContactMutation } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { addContact } from "../../store/slice/contactSlice";

const ContactAddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [postContact, status] = usePostContactMutation();
  const dispatch = useDispatch();
  const { data, isLoading, error } = status;

  const token = useSelector((state) => state.user.token);

  const onSubmit = (data) => {
    postContact({ contactData: data, token });
    // reset();
  };

  useEffect(() => {
    if (data) {
      dispatch(addContact(data.person));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Contact is added successfully",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#001e2b",
        color: "#fff",
      });
    }

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.data.message,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: "#001e2b",
        color: "#fff",
      });
    }
  }, [data, error]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>First Name</Label>
          <Input
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Middle Name</Label>
          <Input {...register("middleName", { required: false })} />
        </FormGroup>

        <FormGroup>
          <Label>Last Name</Label>
          <Input
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Gender</Label>
          <RadioButtonGroup>
            <RadioButtonLabel>
              <RadioButton
                type='radio'
                value='male'
                {...register("gender", { required: "Gender is required" })}
              />
              Male
            </RadioButtonLabel>
            <RadioButtonLabel>
              <RadioButton
                type='radio'
                value='female'
                {...register("gender", { required: "Gender is required" })}
              />
              Female
            </RadioButtonLabel>
            <RadioButtonLabel>
              <RadioButton
                type='radio'
                value='other'
                {...register("gender", { required: "Gender is required" })}
              />
              Other
            </RadioButtonLabel>
          </RadioButtonGroup>
          {errors.gender && (
            <ErrorMessage>{errors.gender.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Enter a valid phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>
          )}
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </form>
    </FormContainer>
  );
};

export default ContactAddForm;
