export interface IStatubar {
    deviceName: string;
    battery?: number;
    airplane?: boolean;
    charging?: boolean;
    celluar?: {
        on: boolean;
        label: string;
        signal: number;
    };
}
/**
 * Statubar
 */
declare const _default: (props: IStatubar) => JSX.Element;
export default _default;
