const base_url = 'https://restcountries.com/v3.1';

export const fetchCountry = async () => {
    const response = await fetch(`${base_url}/all`);
    if (!response.ok) {
        throw new Error('Gagal mengambil data');
    }
    return await response.json();
}

export const fetchCountryDetails = async (name) => {
    const response = await fetch(`${base_url}/name/${name}`);
    if (!response.ok) {
        throw new Error('Gagal mengambil data');
    }
    return await response.json();
}