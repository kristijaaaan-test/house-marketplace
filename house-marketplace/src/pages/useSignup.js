import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/");
    },
  });

  return { signup, isLoading };
}
