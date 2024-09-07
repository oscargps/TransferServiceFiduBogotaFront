

type Props = {
    method: any
    url: string,
    body?: any
    headers?: Record<string, string>
}


export const RequestService = async (props: Props) => {
    const { url, body, headers, method } = props
    try {
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body),
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
       throw error
    }
}