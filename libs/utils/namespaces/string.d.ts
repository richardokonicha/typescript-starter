import { LayoutLocator, SortablePayload } from "./types";
export declare const getInitials: (name: string) => string;
export declare const isUrl: (string: string | null | undefined) => boolean;
export declare const isEmptyString: (string: string) => boolean;
export declare const extractUrl: (string: string) => string | null;
export declare const kebabCase: (string?: string | null) => string;
export declare const generateRandomName: () => string;
export declare const processUsername: (string?: string | null) => string;
export declare const parseLayoutLocator: (payload: SortablePayload | null) => LayoutLocator;
