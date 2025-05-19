import { writable } from "svelte/store";

const storedBalance: number = Number(localStorage.getItem("balance") ?? 0);
export const balance = writable(storedBalance);
balance.subscribe(value => {
    localStorage.setItem("balance", `${value.toFixed(2) ?? 0}`);
});

const storedHistory: number[] = JSON.parse(localStorage.getItem("resultHistory") ?? "[]");
export const history = writable(storedHistory);
history.subscribe(value => {
    console.log(value);
    localStorage.setItem("resultHistory", JSON.stringify(value));
});