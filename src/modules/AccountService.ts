import { RequestService } from "../Helpers/request-service";
import CONFIG from "../../config";

export class AccountService {

    async createAccount(data: any) {
        try {
            return await RequestService({
                url: `${CONFIG.URL}accounts`,
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: data
            });
        } catch (error) {
            throw error
        }
    }

    async getBalance( data: string) {
        try {
            return await RequestService({
                url: `${CONFIG.URL}accounts/${data}/balance`,
                method: "GET",
                headers: {},
            });
        } catch (error) {
            throw error
        }
    }
}

