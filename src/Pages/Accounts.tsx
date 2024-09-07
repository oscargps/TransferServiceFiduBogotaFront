import { Button, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { useCreateAccount, useGetBalance } from "../hooks/useCreateAccount";

const Accounts = () => {
    const [formData, setFormData] = useState<any>();
    const [formData2, setFormData2] = useState<any>();


    const { mutate, isPending, isError, isSuccess } = useCreateAccount()
    const getBalanceHook =
        useGetBalance(formData2?.account);
    const addDataForm = (key: string, value: any) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };
    const addDataForm2 = (key: string, value: any) => {
        setFormData2({
            ...formData2,
            [key]: value,
        });
    };

    useEffect(() => {
        if (!isPending) {
            if (isSuccess) {
                toast.success("Nueva cuenta creada exitosamente!");
                setFormData({});
                setTimeout(() => {
                    window.location.assign('/')
                }, 2000)
            }
            if (isError) {
                toast.error("Hubo un error, intenta mas tarde!");
            }
        }
    }, [isPending])
    useEffect(() => {
        if (getBalanceHook.isSuccess && !getBalanceHook.isFetching) {
            console.log("🚀 ~ useEffect ~ data:", getBalanceHook.data)
            toast.success(`Su saldo es ${getBalanceHook.data}`);
        }  
        if (getBalanceHook.isError) {
            toast.error("Hubo un error, intenta mas tarde!");
        }
    }, [getBalanceHook.isFetching]);
    const handleSubmit = () => {
        try {
            mutate(formData)
        } catch (error: any) {
            toast.error("Error: Información faltante o incorrecta");
        }
    }
    const handleGetBalance = () => {
        getBalanceHook.refetch()

    }
    return (
        <>
            <Toaster position="top-center" richColors />

            <div className="flex flex-row">
                <Input
                    label="TITULAR DE LA CUENTA"
                    placeholder=" "
                    isClearable
                    isRequired
                    size="md"
                    type="text"
                    labelPlacement="outside"
                    radius="md"
                    name="titular"
                    value={formData?.titular}
                    onValueChange={(data) => {
                        addDataForm("titular", data);
                    }}
                />
                <Button color="default" size="md" onPress={handleSubmit}>
                    CREAR CUENTA
                </Button>
            </div>
            <div className="flex flex-row">
                <Input
                    label="NUMERO DE CUENTA"
                    placeholder=" "
                    isClearable
                    isRequired
                    size="md"
                    type="text"
                    labelPlacement="outside"
                    radius="md"
                    name="titular"
                    value={formData2?.accountNumber}
                    onValueChange={(data) => {
                        addDataForm2("account", data);
                    }}
                />
                <Button color="default" size="md" onPress={handleGetBalance}>
                    CONSULTAR SALDO
                </Button>
            </div>
        </>
    )

}


export default Accounts