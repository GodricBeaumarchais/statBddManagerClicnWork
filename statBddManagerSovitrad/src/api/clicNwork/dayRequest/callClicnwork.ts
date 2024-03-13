import dotenv from 'dotenv';
import fs from 'fs';
import parseAndHandleError from '../../../utils/errorManager'; 
dotenv.config();

async function ApiCallData(Type: string, begin: number, end: number, onTest: boolean = false) {
    const vTest = onTest ? "version-test/" : "";
    const url = `https://app.clicnwork.io/${vTest}api/1.1/wf/${Type}?from=${begin}&to=${end}`;
    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.text();
        const myData: {
            validJson: string;
            erroredObjects: string[];
        } = parseAndHandleError(data);
        const jsonData = JSON.parse(myData.validJson);
        fs.writeFileSync(`./logs/${Type}.log`, myData.erroredObjects.join("\n"), 'utf8');
        fs.writeFileSync(`./logs/${Type}.json`, data, 'utf8');
        const rawData = jsonData.map((Type) => JSON.stringify(Type));
        return rawData;
    } catch (error) {
        console.error(error);
    }
    
}

async function ApiCallTotal(Type: string, onTest: boolean = false) {    
    const vTest = onTest ? "version-test/" : "";
    const url = `https://app.clicnwork.io/${vTest}api/1.1/wf/${Type}?from=0&to=0`;
    const options = {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` }
    };
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.total;
    } catch (error) {
        console.error(error);
    }
}

const token = process.env.CLICNWORK_API_BEARER_TOKEN;

class CallClicnwork {
    token: string;
    constructor() {
        this.token = token;
    }
    async getRecruitments(bigin: number, end: number): Promise<Array<string>> {
        return await ApiCallData("recruitments", bigin, end)
    }

    async getActiveProposition(bigin: number, end: number): Promise<Array<string>> {
        return await ApiCallData("activeProposition", bigin, end)
    }

    async getClient(bigin: number, end: number): Promise<Array<string>> {
        return await ApiCallData("client", bigin, end)
    }

    async getClientExchange(bigin: number, end: number): Promise<Array<string>> {
        return await ApiCallData("clientExchange", bigin, end)
    }

    async getCandidate(bigin: number, end: number): Promise<Array<string>> {
        return await ApiCallData("candidate", bigin, end)
    }

    // async getCandidate(bigin: number, end: number) {
    //     const url = `https://app.clicnwork.io/api/1.1/wf/candidate?from=${bigin}&to=${end}`;
    //     const options = {
    //         method: 'GET',
    //         headers: { Authorization: `Bearer ${this.token}` }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         const data = await response.json();
    //         return data.candidate;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    async getRecruitmentTotal(): Promise<number> {
        return await ApiCallTotal("recruitments")
    }

    async getActivePropositionTotal(): Promise<number> {
        return await ApiCallTotal("activeProposition")
    }

    async getClientTotal(): Promise<number> {
        return await ApiCallTotal("client")
    }

    async getClientExchangeTotal(): Promise<number> {
        return await ApiCallTotal("clientExchange")
    }

    async getCandidateTotal(): Promise<number> {
        return await ApiCallTotal("candidate")
    }
    // async getCandidateTotal() {
    //     const url = `https://app.clicnwork.io/api/1.1/wf/candidate?from=0&to=0`;
    //     const options = {
    //         method: 'GET',
    //         headers: { Authorization: `Bearer ${this.token}` }
    //     };
    //     try {
    //         const response = await fetch(url, options);
    //         const data = await response.json();
    //         return data.total;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


}

export default new CallClicnwork();