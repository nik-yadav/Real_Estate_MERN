import countries from "world-countries"

const allcountries = countries.map((country)=> ({
    value: country.name.common,
    label: `${country.name.common} ${country.flag}`,
    latling: country.latlng,
    region: country.region
}))

const useCountries = () => {
    const getAll = () => allcountries;
    return {getAll}
}

export default useCountries