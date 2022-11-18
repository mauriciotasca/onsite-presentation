import {useQuery} from "@tanstack/react-query";

export const useMovieById = (episodeId: number) => {
    return useQuery(
        [`fetch-first-movie-${episodeId}`],
        () => fetch(`https://swapi.dev/api/films/${episodeId}`).then((res) => res.json()), {
            refetchOnReconnect:false,
            refetchOnWindowFocus:false,
            staleTime: 300000,
        })
}

export function romanize(num: number) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--) { // @ts-ignore
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    }
    return Array(+digits.join("") + 1).join("M") + roman;
}