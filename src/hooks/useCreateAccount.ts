import { useMutation, useQuery } from "@tanstack/react-query";
import { AccountService } from "../modules/AccountService";


const accountService =  new AccountService();

export const useCreateAccount = () => useMutation({
    mutationFn: (Account: {titular:string}) => {
        return accountService.createAccount(Account);
    },
})

export const useGetBalance = ( data: string) => {
    const getData = () => accountService.getBalance( data);

    return useQuery({
        queryKey: ['Accounts'],
        queryFn: () => getData(),
        staleTime: 0,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        enabled: false,
        gcTime: 0
    })
};