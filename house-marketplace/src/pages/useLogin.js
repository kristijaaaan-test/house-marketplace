import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/", { replace: true });
    },
  });

  return { login, isLoading };
}
