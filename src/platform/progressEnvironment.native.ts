import Storage from "expo-sqlite/kv-store";
import { createSerializedProgressEnvironment } from "./serializedProgress";
const environment = createSerializedProgressEnvironment({ getItem: (key) => Storage.getItemSync(key), setItem: (key, value) => Storage.setItemSync(key, value) });
export const defaultProgressEnvironment = () => environment;
