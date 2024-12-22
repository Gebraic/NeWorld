import { fetchCountry, fetchCountryDetails } from "../utils/Api";

export const getAllCountry = async () => {
    try {
        const countries = await fetchCountry();
        return countries;
    } catch (error) {
        throw new Error('Tidak dapat mengambil data')
    }
}

export const getCountryDetails = async (name) => {
    try {
        const country = await fetchCountryDetails(name);
        return country;
    } catch (error) {
        throw new Error('Tidak dapat mengambil data')
    }
}