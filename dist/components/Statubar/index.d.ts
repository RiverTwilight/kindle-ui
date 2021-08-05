/// <reference types="react" />
export interface IStatubar {
    deviceName: string;
    battery?: number;
    airplane?: boolean;
    charging?: boolean;
}
declare const _default: ({ deviceName, airplane, battery, charging }: IStatubar) => JSX.Element;
export default _default;
