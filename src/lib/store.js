import { writable } from "svelte/store";

const storedBalance = Number(localStorage.getItem("balance"));
export const balance = writable(storedBalance);
balance.subscribe(value => {
    localStorage.setItem("balance", `${value ?? 0}`);
});