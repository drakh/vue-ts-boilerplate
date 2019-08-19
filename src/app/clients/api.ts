import axios, { AxiosResponse } from "axios";

interface TestData {
    name: string;
    email: string;
}

export const client = {
    async test(data: TestData): Promise<AxiosResponse<TestData>> {
        return axios.post("/api/test", data);
    },
};
