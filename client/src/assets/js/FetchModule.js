import { useQuery } from "react-query";

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw Error("Something Went wrong fetching data");
        }
    } catch {
        return undefined;
    }
}

async function postData(url, body, method) {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
            },
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw Error("Something Went wrong posting data");
        }
    } catch {
        return undefined;
    }
}

function useFetch(cacheKey, url, fetchParams) {
    const { data } = useQuery(cacheKey, async () => {
        const response = await fetch(url, fetchParams);
        if (!response.ok) {
            throw new Error("There was an error in the response");
        }
        return await transformData(response);
    });
    return [undefined, data];
}

async function transformData(response) {
    const contentType = response.headers.get("Content-Type");
    if (contentType.match("json")) {
        return await response.json();
    } else if (contentType.match("text")) {
        return await response.text();
    }
    return await response.blob();
}

function readImage(image, validateForm, postImage) {
    if (validateForm(image)) {
        const fr = new FileReader();
        fr.readAsArrayBuffer(image);

        fr.onload = function () {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('fileName', image.name);
            postImage(formData);
        }
    }
}

async function postImageAPI(url, userInput) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
            },
            body: userInput
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error("Something Went wrong posting data");
        }
    } catch {
        return undefined;
    }
}

export { fetchData, postData, useFetch, readImage, postImageAPI };
